document.addEventListener("DOMContentLoaded", function() {
    // 获取所有的img标签
    const images = document.querySelectorAll('img');

    images.forEach((img) => {
        // 检查是否没有alt属性
        if (!img.hasAttribute('alt')) {
            // 添加默认的alt属性
            img.setAttribute('alt', '图片可能长腿跑了');
        }
    });
});
