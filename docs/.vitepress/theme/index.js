// VitePress 自定义主题入口
import DefaultTheme from 'vitepress/theme'
import './custom.css'

// 组件
import CustomCursor from './components/CustomCursor.vue'
import AnimeBackground from './components/AnimeBackground.vue'
import GlitchText from './components/GlitchText.vue'

// 布局增强
import { h } from 'vue'

export default {
    extends: DefaultTheme,

    // 增强布局，注入自定义组件
    Layout: () => {
        return h(DefaultTheme.Layout, null, {
            // 在布局最外层注入背景和光标
            'layout-top': () => [
                h(AnimeBackground),
                h(CustomCursor)
            ]
        })
    },

    // 注册全局组件
    enhanceApp({ app }) {
        app.component('GlitchText', GlitchText)

        // 添加全局滚动动画
        if (typeof window !== 'undefined') {
            // 滚动时显示元素的交叉观察器
            const observerCallback = (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible')
                    }
                })
            }

            const observer = new IntersectionObserver(observerCallback, {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            })

            // 延迟执行以确保 DOM 已加载
            setTimeout(() => {
                document.querySelectorAll('.VPFeature, .vp-doc h2, .vp-doc h3, .vp-doc p, .vp-doc ul, .vp-doc ol').forEach(el => {
                    el.classList.add('scroll-animate')
                    observer.observe(el)
                })
            }, 100)

            // 添加滚动动画样式
            const style = document.createElement('style')
            style.textContent = `
        .scroll-animate {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .scroll-animate.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `
            document.head.appendChild(style)

            // 平滑滚动
            document.documentElement.style.scrollBehavior = 'smooth'
        }
    }
}
