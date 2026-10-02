function handleClick(type) {
    if (type === 'iphone') {
        const btn = document.getElementById('btnIphone');
        btn.style.pointerEvents = 'none';
        btn.innerHTML = '<div class="clicked-content"><span class="blue-dot"></span><span style="font-size:16px; font-weight:700; color:#111827;">Was Entered</span></div>';
    } else if (type === 'android') {
        const btn = document.getElementById('btnAndroid');
        btn.style.pointerEvents = 'none';
        btn.innerHTML = '<div class="clicked-content"><span class="blue-dot"></span><span style="font-size:16px; font-weight:700; color:#111827;">Was Entered</span></div>';
    }
}


