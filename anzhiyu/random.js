var posts=["posts/13560.html","posts/d50a.html","posts/16107.html","posts/9072.html","posts/41958.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};