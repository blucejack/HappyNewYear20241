function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    snowflake.style.opacity = Math.random();
    snowflake.style.width = snowflake.style.height = Math.random() * 10 + 5 + 'px';

    // 设置动画持续时间和延迟
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
    snowflake.style.animationDelay = Math.random() * 5 + 's';
    snowflake.style.animationName = 'fall';

    document.getElementById('snowflakes-container').appendChild(snowflake);

    // 在动画结束后移除雪花
    snowflake.addEventListener('animationend', function() {
        snowflake.remove();
    });
}

// 每隔一段时间创建一个新的雪花
setInterval(createSnowflake, 100);
