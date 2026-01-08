---
layout: home

hero:
  name: "ANYUJIA"
  text: "SECURITY ENGINEER"
  tagline: 渗透测试 · Web 安全 · 工具开发 · 未来已来
  image:
    src: /cyber-logo.svg
    alt: anyujia
  actions:
    - theme: brand
      text: ⚡ 探索项目
      link: /projects/
    - theme: alt
      text: 📡 技术博客
      link: /blog/
    - theme: alt
      text: 🌐 GitHub
      link: https://github.com/anYuJia

features:
  - icon: 🔓
    title: 渗透测试
    details: 深入 Web 应用安全评估，漏洞挖掘与利用技术研究，突破安全边界
  - icon: 🛡️
    title: 安全研究
    details: 探索赛博空间前沿技术，分析威胁情报，构建防御体系
  - icon: ⚙️
    title: 工具开发
    details: 打造高效安全武器库，自动化渗透流程，提升攻防效率
  - icon: 🧠
    title: 知识矩阵
    details: 构建安全知识图谱，技术博客输出，与社区共同进化
---

<style>
/* Hero 区域增强动画 */
.VPHero {
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.VPHero .name {
  font-family: 'Orbitron', 'Rajdhani', sans-serif !important;
  letter-spacing: 0.2em !important;
  font-size: clamp(2rem, 6vw, 4rem) !important;
  white-space: nowrap !important;
}

.VPHero .text {
  font-family: 'Rajdhani', sans-serif !important;
  letter-spacing: 0.2em !important;
  font-weight: 300 !important;
  color: rgba(0, 255, 255, 0.9) !important;
  text-transform: uppercase;
}

.VPHero .tagline {
  font-size: 1.2rem !important;
  letter-spacing: 0.1em;
  opacity: 0.8;
}

/* 图片霓虹辉光 */
.VPHero .VPImage {
  filter: drop-shadow(0 0 30px rgba(0, 255, 255, 0.5)) 
          drop-shadow(0 0 60px rgba(189, 0, 255, 0.3));
  animation: pulse-glow 3s ease-in-out infinite;
}

@keyframes pulse-glow {
  0%, 100% {
    filter: drop-shadow(0 0 30px rgba(0, 255, 255, 0.5)) 
            drop-shadow(0 0 60px rgba(189, 0, 255, 0.3));
  }
  50% {
    filter: drop-shadow(0 0 50px rgba(0, 255, 255, 0.7)) 
            drop-shadow(0 0 80px rgba(189, 0, 255, 0.5));
  }
}

/* Feature 卡片悬浮3D效果 */
.VPFeatures {
  perspective: 1000px;
}

.VPFeature {
  transform-style: preserve-3d;
  will-change: transform;
}

.VPFeature:hover {
  animation: card-float 0.5s ease forwards;
}

@keyframes card-float {
  0% {
    transform: translateY(0) rotateX(0) rotateY(0);
  }
  100% {
    transform: translateY(-15px) rotateX(5deg) rotateY(-5deg);
  }
}

/* 特性卡片图标动画 */
.VPFeature .icon {
  display: inline-block;
  animation: icon-bounce 2s ease-in-out infinite;
}

.VPFeature:nth-child(1) .icon { animation-delay: 0s; }
.VPFeature:nth-child(2) .icon { animation-delay: 0.5s; }
.VPFeature:nth-child(3) .icon { animation-delay: 1s; }
.VPFeature:nth-child(4) .icon { animation-delay: 1.5s; }

@keyframes icon-bounce {
  0%, 100% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-5px) scale(1.1);
  }
}

/* 数据流装饰线 */
.VPFeatures::before {
  content: '';
  position: absolute;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 100px;
  background: linear-gradient(180deg, transparent, var(--neon-cyan), transparent);
  animation: data-flow 2s ease-in-out infinite;
}

@keyframes data-flow {
  0%, 100% {
    opacity: 0.3;
    height: 100px;
  }
  50% {
    opacity: 1;
    height: 150px;
  }
}
</style>
