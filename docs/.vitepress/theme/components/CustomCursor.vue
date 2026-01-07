<template>
  <div ref="cursorContainer">
    <!-- 主光标环 -->
    <div 
      ref="cursor" 
      class="custom-cursor"
      :class="{ hover: isHovering, click: isClicking }"
    ></div>
    
    <!-- 光标中心点 - 直接跟随鼠标 -->
    <div 
      ref="cursorDot" 
      class="cursor-dot"
      :class="{ hover: isHovering }"
    ></div>
    
    <!-- 粒子发射器画布 -->
    <canvas ref="particleCanvas" class="particle-canvas"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const cursor = ref(null)
const cursorDot = ref(null)
const cursorContainer = ref(null)
const particleCanvas = ref(null)
const isHovering = ref(false)
const isClicking = ref(false)

let mouseX = 0
let mouseY = 0
let cursorX = 0
let cursorY = 0
let ctx = null
let particles = []
let animationId = null

// 粒子类
class Particle {
  constructor(x, y, type = 'trail') {
    this.x = x
    this.y = y
    this.type = type
    
    if (type === 'trail') {
      // 轨迹粒子 - 轻微扩散
      const angle = Math.random() * Math.PI * 2
      const speed = Math.random() * 2 + 0.5
      this.vx = Math.cos(angle) * speed
      this.vy = Math.sin(angle) * speed
      this.size = Math.random() * 4 + 2
      this.life = 1
      this.decay = Math.random() * 0.03 + 0.02
    } else if (type === 'burst') {
      // 爆发粒子 - 向外快速扩散
      const angle = Math.random() * Math.PI * 2
      const speed = Math.random() * 8 + 4
      this.vx = Math.cos(angle) * speed
      this.vy = Math.sin(angle) * speed
      this.size = Math.random() * 6 + 3
      this.life = 1
      this.decay = Math.random() * 0.04 + 0.03
    } else if (type === 'spark') {
      // 火花粒子 - 有重力
      const angle = Math.random() * Math.PI * 2
      const speed = Math.random() * 6 + 2
      this.vx = Math.cos(angle) * speed
      this.vy = Math.sin(angle) * speed - 2
      this.gravity = 0.15
      this.size = Math.random() * 3 + 1
      this.life = 1
      this.decay = Math.random() * 0.02 + 0.015
    }
    
    // 随机颜色
    const colors = [
      { r: 0, g: 255, b: 255 },    // 青色
      { r: 255, g: 0, b: 255 },    // 品红
      { r: 189, g: 0, b: 255 },    // 紫色
      { r: 0, g: 212, b: 255 },    // 蓝色
      { r: 255, g: 45, b: 149 },   // 粉色
      { r: 57, g: 255, b: 20 },    // 绿色
    ]
    this.color = colors[Math.floor(Math.random() * colors.length)]
  }
  
  update() {
    this.x += this.vx
    this.y += this.vy
    
    if (this.gravity) {
      this.vy += this.gravity
    }
    
    // 阻力
    this.vx *= 0.98
    this.vy *= 0.98
    
    this.life -= this.decay
    this.size *= 0.97
    
    return this.life > 0 && this.size > 0.5
  }
  
  draw(ctx) {
    ctx.save()
    ctx.globalAlpha = this.life
    ctx.fillStyle = `rgb(${this.color.r}, ${this.color.g}, ${this.color.b})`
    ctx.shadowColor = `rgb(${this.color.r}, ${this.color.g}, ${this.color.b})`
    ctx.shadowBlur = 10
    
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    ctx.fill()
    
    ctx.restore()
  }
}

// 更快的插值 - 更跟手
const lerp = (start, end, factor) => start + (end - start) * factor

const updateCursor = () => {
  // 提高跟随速度到 1
  cursorX = lerp(cursorX, mouseX, 1)
  cursorY = lerp(cursorY, mouseY, 1)
  
  if (cursor.value) {
    cursor.value.style.left = `${cursorX}px`
    cursor.value.style.top = `${cursorY}px`
  }
  
  // 中心点直接跟随鼠标（无延迟）
  if (cursorDot.value) {
    cursorDot.value.style.left = `${mouseX}px`
    cursorDot.value.style.top = `${mouseY}px`
  }
  
  requestAnimationFrame(updateCursor)
}

// 粒子动画循环
const animateParticles = () => {
  if (!ctx || !particleCanvas.value) return
  
  ctx.clearRect(0, 0, particleCanvas.value.width, particleCanvas.value.height)
  
  // 更新和绘制粒子
  particles = particles.filter(particle => {
    if (particle.update()) {
      particle.draw(ctx)
      return true
    }
    return false
  })
  
  animationId = requestAnimationFrame(animateParticles)
}

// 生成轨迹粒子
const emitTrailParticles = (x, y, count = 3) => {
  for (let i = 0; i < count; i++) {
    particles.push(new Particle(x, y, 'trail'))
  }
}

// 生成爆发粒子（点击时）
const emitBurstParticles = (x, y, count = 20) => {
  for (let i = 0; i < count; i++) {
    particles.push(new Particle(x, y, 'burst'))
  }
  // 额外添加一些火花
  for (let i = 0; i < 10; i++) {
    particles.push(new Particle(x, y, 'spark'))
  }
}

// 创建点击波纹
const createRipple = (x, y) => {
  for (let i = 0; i < 3; i++) {
    const ripple = document.createElement('div')
    ripple.className = 'click-ripple'
    ripple.style.left = `${x}px`
    ripple.style.top = `${y}px`
    ripple.style.animationDelay = `${i * 0.1}s`
    document.body.appendChild(ripple)
    
    setTimeout(() => {
      ripple.remove()
    }, 800)
  }
}

let lastEmitTime = 0
const emitInterval = 30 // ms - 更频繁的粒子发射

const onMouseMove = (e) => {
  const prevX = mouseX
  const prevY = mouseY
  mouseX = e.clientX
  mouseY = e.clientY
  
  // 计算移动速度
  const speed = Math.sqrt(Math.pow(mouseX - prevX, 2) + Math.pow(mouseY - prevY, 2))
  
  const now = Date.now()
  if (now - lastEmitTime > emitInterval) {
    // 根据速度调整粒子数量
    const particleCount = Math.min(Math.floor(speed / 5) + 1, 8)
    emitTrailParticles(mouseX, mouseY, particleCount)
    lastEmitTime = now
  }
}

const onMouseDown = (e) => {
  isClicking.value = true
  emitBurstParticles(e.clientX, e.clientY, 25)
  createRipple(e.clientX, e.clientY)
}

const onMouseUp = () => {
  isClicking.value = false
}

const onMouseOver = (e) => {
  const target = e.target
  if (
    target.tagName === 'A' ||
    target.tagName === 'BUTTON' ||
    target.closest('a') ||
    target.closest('button') ||
    target.classList.contains('VPButton') ||
    target.closest('.VPButton') ||
    target.classList.contains('VPFeature') ||
    target.closest('.VPFeature') ||
    target.classList.contains('VPNavBarMenuLink') ||
    target.closest('.VPNavBarMenuLink') ||
    target.classList.contains('project-card') ||
    target.closest('.project-card') ||
    target.classList.contains('article-item') ||
    target.closest('.article-item') ||
    target.classList.contains('category-item') ||
    target.closest('.category-item')
  ) {
    isHovering.value = true
    // 悬停时发射一些粒子
    emitTrailParticles(e.clientX, e.clientY, 5)
  }
}

const onMouseOut = () => {
  isHovering.value = false
}

const handleResize = () => {
  if (particleCanvas.value) {
    particleCanvas.value.width = window.innerWidth
    particleCanvas.value.height = window.innerHeight
  }
}

onMounted(() => {
  mouseX = window.innerWidth / 2
  mouseY = window.innerHeight / 2
  cursorX = mouseX
  cursorY = mouseY
  
  // 初始化画布
  if (particleCanvas.value) {
    particleCanvas.value.width = window.innerWidth
    particleCanvas.value.height = window.innerHeight
    ctx = particleCanvas.value.getContext('2d')
  }
  
  document.addEventListener('mousemove', onMouseMove)
  document.addEventListener('mousedown', onMouseDown)
  document.addEventListener('mouseup', onMouseUp)
  document.addEventListener('mouseover', onMouseOver)
  document.addEventListener('mouseout', onMouseOut)
  window.addEventListener('resize', handleResize)
  
  updateCursor()
  animateParticles()
})

onUnmounted(() => {
  document.removeEventListener('mousemove', onMouseMove)
  document.removeEventListener('mousedown', onMouseDown)
  document.removeEventListener('mouseup', onMouseUp)
  document.removeEventListener('mouseover', onMouseOver)
  document.removeEventListener('mouseout', onMouseOut)
  window.removeEventListener('resize', handleResize)
  
  if (animationId) {
    cancelAnimationFrame(animationId)
  }
})
</script>

<style scoped>
.particle-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 99996;
}
</style>
