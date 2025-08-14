// js/regex.js
document.addEventListener('DOMContentLoaded', function() {
    const regexPattern = document.getElementById('regex-pattern');
    const testText = document.getElementById('test-text');
    const testBtn = document.getElementById('test-regex');
    const regexResult = document.getElementById('regex-result');
    const globalFlag = document.getElementById('global-flag');
    const ignoreCase = document.getElementById('ignore-case');
    const multiline = document.getElementById('multiline');
    
    testBtn.addEventListener('click', function() {
        if (regexPattern.value.trim() === '') {
            regexResult.textContent = '请输入正则表达式';
            return;
        }
        
        if (testText.value.trim() === '') {
            regexResult.textContent = '请输入测试文本';
            return;
        }
        
        try {
            let flags = '';
            if (globalFlag.checked) flags += 'g';
            if (ignoreCase.checked) flags += 'i';
            if (multiline.checked) flags += 'm';
            
            const regex = new RegExp(regexPattern.value, flags);
            const matches = testText.value.match(regex);
            
            if (!matches) {
                regexResult.textContent = '没有匹配项';
                return;
            }
            
            // 高亮显示匹配结果
            let highlightedText = testText.value;
            let offset = 0;
            
            for (const match of matches) {
                const startIndex = highlightedText.indexOf(match, offset);
                if (startIndex === -1) continue;
                
                const endIndex = startIndex + match.length;
                const before = highlightedText.substring(0, startIndex);
                const highlighted = `<span class="highlight">${match}</span>`;
                const after = highlightedText.substring(endIndex);
                
                highlightedText = before + highlighted + after;
                offset = startIndex + highlighted.length;
            }
            
            regexResult.innerHTML = highlightedText;
        } catch (e) {
            regexResult.textContent = `错误：${e.message}`;
        }
    });
    
    // 设置示例内容
    regexPattern.value = '\\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Z|a-z]{2,}\\b';
    testText.value = '联系我们：support@example.com\n客户服务：help@company.org\n无效邮箱：user@invalid\n电话：123-456-7890';
});