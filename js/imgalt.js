document.addEventListener("DOMContentLoaded", function() {
    const setAltAttributes = () => {
        const images = document.querySelectorAll('img');
        const new    = '新的描述';
        
        images.forEach((img) => {
            img.setAttribute('alt', newAltText);
        });
    };

    // 设置初始的alt属性
    setAltAttributes();

    // 监测DOM变化
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            mutation.addedNodes.forEach((node) => {
                // 如果添加的节点是img标签，则设置alt属性
                if (node.tagName === 'IMG') {
                    node.setAttribute('alt', '新的描述');
                }
                // 如果添加的节点是元素节点，检查其子节点
                if (node.nodeType === Node.ELEMENT_NODE) {
                    const newImages = node.querySelectorAll('img');
                    newImages.forEach((img) => {
                        img.setAttribute('alt', '新的描述');
                    });
                }
            });
        });
    });

    // 开始观察文档主体以捕获所有添加的节点
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
});
