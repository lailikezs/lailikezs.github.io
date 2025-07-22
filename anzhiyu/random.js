var posts=["Article/hello-world/","Article/渣渣辉/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };