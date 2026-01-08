# 📦 项目矩阵

<div class="cyber-container">

这里展示我的开源项目和安全武器库。

</div>

## 🔓 安全工具

<div class="project-grid">

<a href="/projects/autorecon" class="project-card">
  <div class="card-glow"></div>
  <div class="card-content">
    <div class="card-icon">⚡</div>
    <h3>AutoRecon</h3>
    <p>自动化信息收集工具，集成子域名枚举、端口扫描、目录爆破等功能</p>
    <div class="tech-stack">
      <span class="tech-tag">Python</span>
      <span class="tech-tag">asyncio</span>
    </div>
  </div>
</a>

</div>

## 🌐 更多项目

> 🚀 敬请期待更多项目...

---

<div class="cyber-footer">
  <span class="blink">▮</span> SYSTEM READY <span class="blink">▮</span>
</div>

<style>
.cyber-container {
  background: rgba(0, 255, 255, 0.05);
  border: 1px solid rgba(0, 255, 255, 0.2);
  border-radius: 8px;
  padding: 20px;
  margin: 20px 0;
  position: relative;
  overflow: hidden;
}

.cyber-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, #00ffff, transparent);
  animation: scan 3s linear infinite;
}

@keyframes scan {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 30px 0;
}

.project-card {
  position: relative;
  background: rgba(20, 20, 40, 0.6);
  border: 1px solid rgba(0, 255, 255, 0.2);
  border-radius: 12px;
  padding: 30px;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: hidden;
}

.project-card:hover {
  transform: translateY(-10px) scale(1.02);
  border-color: rgba(0, 255, 255, 0.5);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3),
              0 0 30px rgba(0, 255, 255, 0.1);
}

.card-glow {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(0, 255, 255, 0.1) 0%, transparent 50%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .card-glow {
  opacity: 1;
  animation: rotate-glow 10s linear infinite;
}

@keyframes rotate-glow {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.card-content {
  position: relative;
  z-index: 1;
}

.card-icon {
  font-size: 3rem;
  margin-bottom: 15px;
  filter: drop-shadow(0 0 10px currentColor);
}

.card-content h3 {
  color: #00ffff !important;
  margin-bottom: 10px;
  font-family: 'Rajdhani', sans-serif;
  letter-spacing: 0.05em;
}

.tech-stack {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 15px;
}

.tech-tag {
  background: rgba(189, 0, 255, 0.2);
  border: 1px solid rgba(189, 0, 255, 0.4);
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  color: #bd00ff;
  transition: all 0.3s ease;
}

.tech-tag:hover {
  background: rgba(189, 0, 255, 0.4);
  box-shadow: 0 0 15px rgba(189, 0, 255, 0.3);
}

.cyber-footer {
  text-align: center;
  color: #00ffff;
  font-family: 'Orbitron', monospace;
  letter-spacing: 0.2em;
  margin-top: 50px;
  padding: 20px;
}

.blink {
  animation: blink-animation 1s infinite;
}

@keyframes blink-animation {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
</style>
