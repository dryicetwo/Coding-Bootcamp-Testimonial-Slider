var idx=0;
var content = [
    {
        name : 'Tanya Sinclair',
        post : 'UX Engineer',
        text : `“ I’ve been interested in coding for a while but never taken the jump, until now. 
        I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
        excited about the future. ”`, 
        avatar : './images/image-tanya.jpg',
    },
    {
        name : 'John Tarkpor',
        post : 'Junior Front-end Developer',
        text : `“ If you want to lay the best foundation possible I’d recommend taking this course. 
        The depth the instructors go into is incredible. I now feel so confident about 
        starting up as a professional developer. ”`, 
        avatar : './images/image-john.jpg',
    },
]

function slide(){
    const next_btn = document.getElementById('next');
    const prev_btn = document.getElementById('prev');
    const text = document.getElementById('text');
    const name = document.getElementById('name');
    const post = document.getElementById('post');
    const avatar = document.getElementById('avatar');

    const slider = document.querySelector('.slider');

    next_btn.addEventListener("click", function() {
        idx = (idx + 1) % 2;
        slider.classList.add('next-animation')
        setTimeout(function(){
        slider.classList.remove('next-animation');
        }, 400);
        text.innerHTML = content[idx].text;
        name.innerHTML = content[idx].name;
        post.innerHTML = content[idx].post;
        avatar.src = content[idx].avatar;
        
    });
    prev_btn.addEventListener("click", function() {
        idx = (2+(idx - 1)) % 2;
        slider.classList.add('pre-animation')
        setTimeout(function(){
        slider.classList.remove('pre-animation');
        }, 400);
        text.innerHTML = content[idx].text;
        name.innerHTML = content[idx].name;
        post.innerHTML = content[idx].post;
        avatar.src = content[idx].avatar;
    });

}
