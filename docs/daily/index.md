# 📷 记录日常

<div class="daily-header">
  <div class="terminal-window">
    <div class="terminal-header">
      <span class="dot red"></span>
      <span class="dot yellow"></span>
      <span class="dot green"></span>
      <span class="terminal-title">anyujia@life ~/daily$</span>
    </div>
    <div class="terminal-body">
      <p>生活不止有代码，还有诗和远方。</p>
      <p class="blink-cursor">记录每一个平凡而闪光的瞬间 ▌</p>
    </div>
  </div>
</div>

## 🎯 最新动态

<div class="daily-grid">

<div class="daily-card">
  <div class="card-date">🗓️ 2024.01.08</div>
  <div class="card-content">
    <h3>🚀 网站上线</h3>
    <p>赛博朋克风格的个人网站正式部署！经过精心设计，终于把各种炫酷效果整合到一起了。</p>
    <div class="card-tags">
      <span class="tag">#里程碑</span>
      <span class="tag">#VitePress</span>
    </div>
  </div>
</div>

<div class="daily-card">
  <div class="card-date">🗓️ 敬请期待</div>
  <div class="card-content">
    <h3>📝 更多动态</h3>
    <p>这里将会记录生活中的点点滴滴，包括学习心得、旅行见闻、美食探索等...</p>
    <div class="card-tags">
      <span class="tag">#SOON</span>
    </div>
  </div>
</div>

</div>

<style>
.daily-header {
  margin: 2rem 0;
}

.terminal-window {
  background: rgba(15, 15, 25, 0.9);
  border-radius: 12px;
  border: 1px solid rgba(0, 255, 255, 0.2);
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3), 0 0 30px rgba(0, 255, 255, 0.1);
}

.terminal-header {
  background: rgba(30, 30, 45, 0.9);
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.dot.red { background: #ff5f56; }
.dot.yellow { background: #ffbd2e; }
.dot.green { background: #27ca40; }

.terminal-title {
  color: rgba(0, 255, 255, 0.8);
  font-family: 'Courier New', monospace;
  margin-left: 10px;
  font-size: 0.9rem;
}

.terminal-body {
  padding: 20px;
  font-family: 'Courier New', monospace;
  color: #e0e0e0;
  line-height: 1.8;
}

.blink-cursor {
  color: var(--neon-cyan, #00ffff);
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.daily-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.daily-card {
  background: rgba(20, 20, 40, 0.6);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 1.5rem;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
}

.daily-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--neon-cyan, #00ffff), var(--neon-magenta, #ff00ff), var(--neon-purple, #bd00ff));
  opacity: 0;
  transition: opacity 0.3s ease;
}

.daily-card:hover {
  transform: translateY(-10px) scale(1.02);
  border-color: rgba(0, 255, 255, 0.3);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3), 0 0 30px rgba(0, 255, 255, 0.15);
}

.daily-card:hover::before {
  opacity: 1;
}

.card-date {
  font-size: 0.85rem;
  color: rgba(0, 255, 255, 0.7);
  margin-bottom: 1rem;
  font-family: 'Courier New', monospace;
}

.card-content h3 {
  background: linear-gradient(135deg, var(--neon-cyan, #00ffff), var(--neon-magenta, #ff00ff));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.8rem;
}

.card-content p {
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.7;
  margin-bottom: 1rem;
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  background: rgba(0, 255, 255, 0.1);
  border: 1px solid rgba(0, 255, 255, 0.3);
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  color: var(--neon-cyan, #00ffff);
  transition: all 0.3s ease;
}

.tag:hover {
  background: rgba(0, 255, 255, 0.2);
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.3);
}

@media (max-width: 640px) {
  .daily-grid {
    grid-template-columns: 1fr;
  }
}
</style>
