# 多功能工具集 - 现代Web工具套件
由Netlify提供在线部署支持。
<a href="https://www.netlify.com">
  <img src="https://www.netlify.com/assets/badges/netlify-badge-color-accent.svg" alt="Deploys by Netlify" />
</a>
多功能工具集是一个现代化的Web应用程序，提供多种实用工具，包括Base64加解密、随机密码生成和正则表达式测试功能。该项目采用响应式设计，支持深色/浅色主题切换，为用户提供美观且功能丰富的体验。

## 功能特点
- Base64加解密工具：快速编码和解码文本
- 随机密码生成器：创建高安全性密码并评估强度
- 正则表达式工具：测试和优化正则表达式
- 主题切换：支持深色/浅色模式
- 响应式设计：适配各种设备尺寸
- 用户友好界面：直观的操作和实时反馈

## 文件结构
```text
├── index.html          # 首页
├── tools/
│   ├── base64.html       # Base64工具
│   └── password.html  # 密码生成器
│   └── regex.html  # 正则工具
├── css/
│   ├── style.css       # 基础样式（浅色主题）
│   └── dark-theme.css  # 深色主题样式
└── js/
    ├── common.js       # 公共功能（主题切换、导航高亮）
    ├── base64.js       # Base64工具逻辑
    ├── password.js     # 密码生成器逻辑
    └── regex.js        # 正则工具逻辑
```
## 技术栈
- HTML5
- CSS3（使用CSS变量实现主题切换）
- JavaScript（ES6）
- Font Awesome图标库

## 开源协议
本项目采用 MIT 许可证，这是一个宽松的开源许可证，允许用户自由地使用、复制、修改、合并、发布、分发、再许可和销售软件的副本。
