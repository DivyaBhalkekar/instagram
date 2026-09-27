let imgage = document.getAnimations('image');
let text = document.getElementById('text');
let follow = document.getElementById('follow');
let unfollow = document.getElementById('unfollow');
follow.addEventListener('click', function(){
    alert('Started following');
    image.src = "https://images.unsplash.com/photo-1622017634176-8da750043c54?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D";
    text.textContent = "Friends";
    follow.innerHTML = 'Following';
    
})
unfollow.addEventListener('click', function(){
    alert('Un Follow');
    image.src = "https://plus.unsplash.com/premium_photo-1668114375111-e90b5e975df6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9nc3xlbnwwfHwwfHx8MA%3D%3D"
    text.textContent = "Not Friends";
    unfollow.innerHTML = 'Not Following';
})