<template>
  <div class="anime-background">
    <!-- 动态渐变背景 -->
    <div class="gradient-orbs">
      <div class="orb orb-1"></div>
      <div class="orb orb-2"></div>
      <div class="orb orb-3"></div>
    </div>
    
    <!-- 网格层 -->
    <div class="grid-background"></div>
    
    <!-- 粒子系统 -->
    <div class="particles-container" ref="particlesContainer"></div>
    
    <!-- 扫描线 -->
    <div class="scanlines"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const particlesContainer = ref(null)
let particleInterval = null

const createParticle = () => {
  if (!particlesContainer.value) return
  
  const particle = document.createElement('div')
  particle.className = 'particle'
  
  // 使用 CSS 变量获取当前主题的颜色
  const colors = [
    'var(--neon-cyan)', 
    'var(--neon-magenta)', 
    'var(--neon-purple)', 
    'var(--neon-blue)', 
    'var(--neon-pink)', 
    'var(--neon-green)'
  ]
  const color = colors[Math.floor(Math.random() * colors.length)]
  
  particle.style.left = `${Math.random() * 100}%`
  particle.style.background = color
  particle.style.boxShadow = `0 0 10px ${color}`
  particle.style.animationDuration = `${15 + Math.random() * 15}s`
  particle.style.animationDelay = `${Math.random() * 10}s`
  particle.style.width = `${2 + Math.random() * 4}px`
  particle.style.height = particle.style.width
  
  particlesContainer.value.appendChild(particle)
  
  // 移除旧粒子防止内存泄漏
  setTimeout(() => {
    particle.remove()
  }, 30000)
}

onMounted(() => {
  // 初始化粒子
  for (let i = 0; i < 30; i++) {
    setTimeout(() => createParticle(), i * 200)
  }
  
  // 持续生成新粒子
  particleInterval = setInterval(createParticle, 1000)
})

onUnmounted(() => {
  if (particleInterval) {
    clearInterval(particleInterval)
  }
})
</script>

<style scoped>
.anime-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -10;
  overflow: hidden;
  background: var(--bg-primary);
  transition: background 0.3s ease;
}

/* 动态渐变球 */
.gradient-orbs {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.6;
  animation: float-orb 20s ease-in-out infinite;
  transition: opacity 0.3s ease;
}

/* 亮色模式下降低透明度 */
:root:not(.dark) .orb {
  opacity: 0.3;
}

.orb-1 {
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(189, 0, 255, 0.4) 0%, transparent 70%);
  top: -20%;
  left: -10%;
  animation-delay: 0s;
}

.orb-2 {
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(0, 255, 255, 0.4) 0%, transparent 70%);
  top: 50%;
  right: -10%;
  animation-delay: -7s;
}

.orb-3 {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(255, 0, 255, 0.3) 0%, transparent 70%);
  bottom: -10%;
  left: 30%;
  animation-delay: -14s;
}

@keyframes float-orb {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  25% {
    transform: translate(50px, -50px) scale(1.1);
  }
  50% {
    transform: translate(-30px, 30px) scale(0.95);
  }
  75% {
    transform: translate(-50px, -30px) scale(1.05);
  }
}

/* 网格层 */
.grid-background {
  position: absolute;
  width: 200%;
  height: 200%;
  top: 50%;
  left: 50%;
  background-image: 
    linear-gradient(var(--neon-cyan) 1px, transparent 1px),
    linear-gradient(90deg, var(--neon-cyan) 1px, transparent 1px);
  background-size: 60px 60px;
  transform: translate(-50%, -50%) perspective(500px) rotateX(60deg);
  animation: grid-scroll 30s linear infinite;
  opacity: 0.03;
  transition: opacity 0.3s ease;
}

/* 亮色模式下网格更淡 */
:root:not(.dark) .grid-background {
  opacity: 0.02;
}

@keyframes grid-scroll {
  0% {
    transform: translate(-50%, -50%) perspective(500px) rotateX(60deg) translateY(0);
  }
  100% {
    transform: translate(-50%, -50%) perspective(500px) rotateX(60deg) translateY(60px);
  }
}

/* 粒子容器 */
.particles-container {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
}

:deep(.particle) {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  animation: float-particle 20s linear infinite;
}

@keyframes float-particle {
  0% {
    transform: translateY(100vh) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(-100vh) rotate(720deg);
    opacity: 0;
  }
}

/* 扫描线 */
.scanlines {
  position: absolute;
  width: 100%;
  height: 100%;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    rgba(0, 0, 0, 0.02) 2px,
    rgba(0, 0, 0, 0.02) 4px
  );
  pointer-events: none;
  z-index: 2;
}

/* 亮色模式下扫描线更淡 */
:root:not(.dark) .scanlines {
  opacity: 0.5;
}
</style>
