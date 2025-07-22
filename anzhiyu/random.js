var posts=["Article/hello-world/","Article/这是渣渣辉/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };