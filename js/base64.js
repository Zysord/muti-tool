// js/base64.js
document.addEventListener('DOMContentLoaded', function() {
    const base64Input = document.getElementById('base64-input');
    const base64Result = document.getElementById('base64-result');
    const encodeBtn = document.getElementById('encode-btn');
    const decodeBtn = document.getElementById('decode-btn');
    const copyBase64Btn = document.getElementById('copy-base64');
    
    encodeBtn.addEventListener('click', () => {
        if (base64Input.value.trim() === '') {
            base64Result.textContent = '请输入要编码的文本';
            return;
        }
        base64Result.textContent = btoa(encodeURIComponent(base64Input.value));
    });
    
    decodeBtn.addEventListener('click', () => {
        if (base64Input.value.trim() === '') {
            base64Result.textContent = '请输入要解码的文本';
            return;
        }
        try {
            base64Result.textContent = decodeURIComponent(atob(base64Input.value));
        } catch (e) {
            base64Result.textContent = '解码错误：请输入有效的Base64编码';
        }
    });
    
    copyBase64Btn.addEventListener('click', () => {
        if (base64Result.textContent) {
            navigator.clipboard.writeText(base64Result.textContent)
                .then(() => {
                    showNotification('内容已复制到剪贴板！');
                })
                .catch(err => {
                    console.error('复制失败:', err);
                });
        }
    });
    
    // 显示通知
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.innerHTML = `<i class="fas fa-check-circle"></i> ${message}`;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.classList.add('show');
        }, 10);
        
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 2000);
    }
    
    // 设置示例文本
    base64Input.value = '欢迎使用Base64加解密工具！';
});