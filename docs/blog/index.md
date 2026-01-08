# 📡 技术博客

<div class="terminal-header">
  <span class="terminal-dot red"></span>
  <span class="terminal-dot yellow"></span>
  <span class="terminal-dot green"></span>
  <span class="terminal-title">anyujia@security:~/blog$</span>
</div>

<div class="terminal-body">

记录安全研究、渗透测试实战、技术学习笔记。

```bash
$ cat /etc/motd
欢迎来到安全研究空间
```

</div>

## 📊 最新文章

<div class="article-list">

<a href="/blog/sql-injection-guide" class="article-item">
  <div class="article-date">
    <span class="date-day">08</span>
    <span class="date-month">JAN</span>
  </div>
  <div class="article-content">
    <h3>🔓 SQL 注入漏洞挖掘实战</h3>
    <p>从实战角度详细介绍 SQL 注入的发现、验证和利用过程</p>
    <div class="article-tags">
      <span class="tag">渗透测试</span>
      <span class="tag">Web安全</span>
    </div>
  </div>
  <div class="article-arrow">→</div>
</a>

</div>

## 🏷️ 分类导航

<div class="category-grid">
  <div class="category-item">
    <span class="category-icon">🔓</span>
    <span class="category-name">渗透测试</span>
    <span class="category-count">0</span>
  </div>
  <div class="category-item">
    <span class="category-icon">🛡️</span>
    <span class="category-name">安全研究</span>
    <span class="category-count">0</span>
  </div>
  <div class="category-item">
    <span class="category-icon">⚙️</span>
    <span class="category-name">工具开发</span>
    <span class="category-count">0</span>
  </div>
  <div class="category-item">
    <span class="category-icon">🧠</span>
    <span class="category-name">学习笔记</span>
    <span class="category-count">0</span>
  </div>
</div>

---

<div class="status-bar">
  <span class="status-item">
    <span class="status-dot online"></span>
    系统在线
  </span>
  <span class="status-item">
    <span class="status-icon">📡</span>
    信号良好
  </span>
  <span class="status-item">
    <span class="status-icon">🔒</span>
    安全连接
  </span>
</div>

<style>
/* 终端风格头部 */
.terminal-header {
  background: linear-gradient(180deg, rgba(40, 40, 50, 0.9), rgba(30, 30, 40, 0.9));
  border-radius: 10px 10px 0 0;
  padding: 12px 15px;
  display: flex;
  align-items: center;
  gap: 8px;
  border: 1px solid rgba(0, 255, 255, 0.2);
  border-bottom: none;
}

.terminal-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.terminal-dot.red { background: #ff5f56; }
.terminal-dot.yellow { background: #ffbd2e; }
.terminal-dot.green { background: #27ca40; }

.terminal-title {
  margin-left: 10px;
  color: #00ffff;
  font-family: 'Orbitron', monospace;
  font-size: 0.85rem;
  letter-spacing: 0.1em;
}

.terminal-body {
  background: rgba(15, 15, 25, 0.8);
  border: 1px solid rgba(0, 255, 255, 0.2);
  border-top: none;
  border-radius: 0 0 10px 10px;
  padding: 20px;
  margin-bottom: 30px;
}

/* 文章列表 */
.article-list {
  margin: 20px 0;
}

.article-item {
  display: flex;
  align-items: center;
  gap: 20px;
  background: rgba(20, 20, 40, 0.6);
  border: 1px solid rgba(0, 255, 255, 0.15);
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 15px;
  transition: all 0.3s ease;
  cursor: pointer;
}

.article-item:hover {
  border-color: rgba(0, 255, 255, 0.4);
  transform: translateX(10px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2),
              -5px 0 20px rgba(0, 255, 255, 0.1);
}

.article-date {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 60px;
  padding: 10px;
  background: rgba(0, 255, 255, 0.1);
  border-radius: 8px;
}

.date-day {
  font-size: 1.5rem;
  font-weight: bold;
  color: #00ffff;
  font-family: 'Orbitron', sans-serif;
}

.date-month {
  font-size: 0.75rem;
  color: rgba(0, 255, 255, 0.7);
  letter-spacing: 0.1em;
}

.article-content {
  flex: 1;
}

.article-content h3 {
  margin: 0 0 8px 0;
  color: #fff !important;
}

.article-content p {
  margin: 0;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
}

.article-tags {
  display: flex;
  gap: 8px;
  margin-top: 10px;
}

.tag {
  background: rgba(189, 0, 255, 0.15);
  border: 1px solid rgba(189, 0, 255, 0.3);
  padding: 2px 10px;
  border-radius: 15px;
  font-size: 0.75rem;
  color: #bd00ff;
}

.article-arrow {
  font-size: 1.5rem;
  color: rgba(0, 255, 255, 0.5);
  transition: all 0.3s ease;
}

.article-item:hover .article-arrow {
  color: #00ffff;
  transform: translateX(5px);
}

/* 分类网格 */
.category-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin: 20px 0;
}

.category-item {
  display: flex;
  align-items: center;
  gap: 12px;
  background: rgba(20, 20, 40, 0.6);
  border: 1px solid rgba(255, 0, 255, 0.15);
  border-radius: 10px;
  padding: 15px 20px;
  transition: all 0.3s ease;
  cursor: pointer;
}

.category-item:hover {
  border-color: rgba(255, 0, 255, 0.4);
  transform: scale(1.02);
  box-shadow: 0 0 20px rgba(255, 0, 255, 0.1);
}

.category-icon {
  font-size: 1.5rem;
}

.category-name {
  flex: 1;
  color: #fff;
  font-weight: 500;
}

.category-count {
  background: rgba(255, 0, 255, 0.2);
  padding: 2px 10px;
  border-radius: 10px;
  font-size: 0.8rem;
  color: #ff00ff;
}

/* 状态栏 */
.status-bar {
  display: flex;
  justify-content: center;
  gap: 30px;
  padding: 20px;
  background: rgba(10, 10, 15, 0.5);
  border-radius: 8px;
  border: 1px solid rgba(0, 255, 255, 0.1);
}

.status-item {
  display: flex;
  align-items: center;
  gap: 8px;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.85rem;
}

.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}

.status-dot.online {
  background: #39ff14;
  box-shadow: 0 0 10px #39ff14;
  animation: pulse-dot 2s infinite;
}

@keyframes pulse-dot {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.7; transform: scale(1.2); }
}

.status-icon {
  font-size: 1rem;
}
</style>
