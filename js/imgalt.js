document.addEventListener("DOMContentLoaded", function() {
    // 获取所有的img标签
    const images = document.querySelectorAll('img');

    images.forEach((img) => {
        // 设置新的alt描述
        const newAltText = '图片可能长腿跑了';

        // 检查是否有alt属性，如果有就替换掉
        img.setAttribute('alt', newAltText);
    });
});
