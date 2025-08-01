// 找到所有站长评论 (tk-comment tk-master)
document.querySelectorAll('div.tk-comment.tk-master').forEach(comment => {
    // 在站长评论内查找作者头像
    const avatarImg = comment.querySelector('.author-info-avatar img.avatar-img.entered.loaded');
    
    if (avatarImg) {
        // 获取头像图片的src
        const avatarSrc = avatarImg.src;
        
        // 找到评论内容区域内的所有图像
        const commentImages = comment.querySelectorAll('.tk-comment-content img');
        
        // 将评论内容中的所有图片替换为站长头像
        commentImages.forEach(img => {
            img.src = avatarSrc;
            img.className = 'comment-avatar'; // 可选：添加自定义类
            img.alt = '站长头像';
        });
    }
});