// js/common.js
// 主题切换功能
document.addEventListener('DOMContentLoaded', function() {
    const themeBtn = document.getElementById('theme-btn');
    const themeIcon = themeBtn.querySelector('i');
    const themeText = themeBtn.querySelector('span');
    const themeLink = document.getElementById('theme-link');
    
    // 检查本地存储的主题偏好
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        themeLink.href = "css/dark-theme.css";
        themeIcon.className = "fas fa-sun";
        themeText.textContent = "浅色模式";
    } else {
        themeIcon.className = "fas fa-moon";
        themeText.textContent = "深色模式";
    }
    
    // 主题切换按钮事件
    themeBtn.addEventListener('click', function() {
        if (themeLink.href.includes("dark-theme.css")) {
            themeLink.href = "";
            themeIcon.className = "fas fa-moon";
            themeText.textContent = "深色模式";
            localStorage.setItem('theme', 'light');
        } else {
            themeLink.href = "css/dark-theme.css";
            themeIcon.className = "fas fa-sun";
            themeText.textContent = "浅色模式";
            localStorage.setItem('theme', 'dark');
        }
    });
    
    // 当前页面高亮显示
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});