---
title: AutoRecon - 自动化信息收集工具
date: 2024-01-08
tags: [工具开发, Python, 渗透测试]
---

# ⚡ AutoRecon - 自动化信息收集工具

<div class="project-header">
  <div class="project-badges">
    <span class="badge">🔧 开发中</span>
    <span class="badge lang">Python</span>
    <span class="badge version">v0.1.0</span>
  </div>
</div>

## 📝 项目介绍

AutoRecon 是一款面向渗透测试人员的自动化信息收集工具。它集成了多种侦察技术，可以快速获取目标的相关信息。

## ✨ 核心功能

### 🔍 子域名枚举

```bash
# 使用示例
python autorecon.py subdomain -d target.com

# 输出示例
[*] 发现 23 个子域名
[+] api.target.com - 200 OK
[+] admin.target.com - 403 Forbidden
[+] dev.target.com - 200 OK
...
```

### 🌐 端口扫描

```bash
# 快速扫描常见端口
python autorecon.py portscan -t 192.168.1.1 --top-ports 100

# 全端口扫描
python autorecon.py portscan -t 192.168.1.1 -p 1-65535
```

### 📁 目录爆破

```bash
# 目录扫描
python autorecon.py dirscan -u https://target.com -w wordlist.txt

# 支持多种扩展名
python autorecon.py dirscan -u https://target.com -x php,asp,jsp
```

## 🛠️ 技术栈

| 技术 | 用途 |
|------|------|
| Python 3.10+ | 核心开发语言 |
| asyncio | 异步并发处理 |
| aiohttp | 异步 HTTP 请求 |
| Rich | 终端美化输出 |
| SQLite | 结果存储 |

## 📦 安装使用

### 快速安装

```bash
# 克隆仓库
git clone https://github.com/anYuJia/autorecon.git
cd autorecon

# 安装依赖
pip install -r requirements.txt

# 运行
python autorecon.py --help
```

### Docker 部署

```bash
# 构建镜像
docker build -t autorecon .

# 运行容器
docker run -it autorecon subdomain -d target.com
```

## 📊 架构设计

```
autorecon/
├── core/
│   ├── scanner.py      # 扫描引擎
│   ├── resolver.py     # DNS 解析
│   └── parser.py       # 结果解析
├── modules/
│   ├── subdomain.py    # 子域名模块
│   ├── portscan.py     # 端口扫描模块
│   └── dirscan.py      # 目录扫描模块
├── utils/
│   ├── logger.py       # 日志工具
│   └── output.py       # 输出格式化
└── autorecon.py        # 主入口
```

## 🗺️ 开发路线

- [x] 子域名枚举
- [x] 端口扫描
- [x] 目录爆破
- [ ] 指纹识别
- [ ] 漏洞扫描集成
- [ ] Web UI 界面
- [ ] 报告生成

## 📜 免责声明

本工具仅用于**授权的安全测试**，请勿用于非法用途。使用本工具进行任何未授权的测试所造成的后果，由使用者自行承担。

---

<div class="project-footer">
  <a href="https://github.com/anYuJia" class="btn-link">📂 查看源码</a>
</div>

<style>
.project-header {
  margin: 20px 0 30px;
}

.project-badges {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.badge {
  background: rgba(0, 255, 255, 0.1);
  border: 1px solid rgba(0, 255, 255, 0.3);
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  color: var(--neon-cyan);
}

.badge.lang {
  background: rgba(189, 0, 255, 0.1);
  border-color: rgba(189, 0, 255, 0.3);
  color: #bd00ff;
}

.badge.version {
  background: rgba(57, 255, 20, 0.1);
  border-color: rgba(57, 255, 20, 0.3);
  color: #39ff14;
}

.project-footer {
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid rgba(0, 255, 255, 0.2);
  text-align: center;
}

.btn-link {
  display: inline-block;
  background: linear-gradient(135deg, var(--neon-cyan), var(--neon-purple));
  color: white !important;
  padding: 10px 25px;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
}

.btn-link:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(0, 255, 255, 0.3);
}
</style>
