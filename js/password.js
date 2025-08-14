// js/password.js
document.addEventListener('DOMContentLoaded', function() {
    const passwordLength = document.getElementById('password-length');
    const lengthDisplay = document.getElementById('length-display');
    const lengthValue = document.getElementById('length-value');
    const uppercase = document.getElementById('uppercase');
    const lowercase = document.getElementById('lowercase');
    const numbers = document.getElementById('numbers');
    const symbols = document.getElementById('symbols');
    const generateBtn = document.getElementById('generate-password');
    const passwordResult = document.getElementById('password-result');
    const copyPasswordBtn = document.getElementById('copy-password');
    const strengthFill = document.getElementById('strength-fill');
    
    // 更新密码长度显示
    function updateLengthDisplay() {
        const length = passwordLength.value;
        lengthDisplay.textContent = length;
        lengthValue.textContent = length;
    }
    
    passwordLength.addEventListener('input', updateLengthDisplay);
    updateLengthDisplay(); // 初始化显示
    
    // 生成随机密码
    generateBtn.addEventListener('click', function() {
        const length = parseInt(passwordLength.value);
        const includeUppercase = uppercase.checked;
        const includeLowercase = lowercase.checked;
        const includeNumbers = numbers.checked;
        const includeSymbols = symbols.checked;
        
        if (!includeUppercase && !includeLowercase && !includeNumbers && !includeSymbols) {
            passwordResult.textContent = '请至少选择一种字符类型';
            return;
        }
        
        let charset = '';
        if (includeLowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
        if (includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (includeNumbers) charset += '0123456789';
        if (includeSymbols) charset += '!@#$%^&*()_+-=[]{}|;:,.<>?';
        
        let password = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            password += charset[randomIndex];
        }
        
        passwordResult.textContent = password;
        updatePasswordStrength(password);
    });
    
    // 更新密码强度
    function updatePasswordStrength(password) {
        let strength = 0;
        
        // 长度评分
        if (password.length >= 8) strength++;
        if (password.length >= 12) strength++;
        if (password.length >= 16) strength++;
        
        // 字符类型多样性
        if (/[a-z]/.test(password)) strength++;
        if (/[A-Z]/.test(password)) strength++;
        if (/[0-9]/.test(password)) strength++;
        if (/[^a-zA-Z0-9]/.test(password)) strength += 2;
        
        // 限制最大强度为4
        strength = Math.min(strength, 4);
        
        // 更新UI
        strengthFill.className = 'strength-fill';
        strengthFill.classList.add(`strength-${strength}`);
    }
    
    // 复制密码
    copyPasswordBtn.addEventListener('click', function() {
        if (passwordResult.textContent && passwordResult.textContent !== '请至少选择一种字符类型') {
            navigator.clipboard.writeText(passwordResult.textContent)
                .then(() => {
                    showNotification('密码已复制到剪贴板！');
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
    
    // 初始生成一个密码
    generateBtn.click();
});