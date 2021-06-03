// ES5 CODE.
// Selecting The Container.
var container = document.querySelector('.container');
// The Scroll Event.
window.addEventListener('scroll',function(){
    var scrollHeight = document.documentElement.scrollHeight;
    var scrollTop = document.documentElement.scrollTop;
    var clientHeight = document.documentElement.clientHeight;

    if( (scrollTop + clientHeight) > (scrollHeight - 5)){
        setTimeout(createPost,1000);
    }
});
// The createPost function creates The HTML for the blog post.
// It append it to the container.
function createPost(){
    var post = document.createElement('div');
    post.className = 'text';
    var h1 = document.createElement('h1');
    var p = document.createElement('p');
    h1.innerHTML = 'Lorem ipsum dolor sit amet';
    p.innerHTML = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque eos, atque sed saepe tempore, sequi qui excepturi voluptate ut perspiciatis culpa sit harum, corrupti ullam voluptatibus obcaecati sint dignissimos quas.'
    post.appendChild(h1);
    post.appendChild(p);
    container.appendChild(post);
}
//ES6 CODE:
// const container = document.querySelector('.container');

// window.addEventListener('scroll',()=>{
//  const {scrollHeight,scrollTop,clientHeight} = document.documentElement;
//  if(scrollTop + clientHeight > scrollHeight - 5){
//    setTimeout(createPost,2000);

//  }
// });

// function createPost(){
//  const post = document.createElement('div');
//  post.className = 'text';
//  post.innerHTML = `<h1>Lorem ipsum dolor sit amet</h1>
//  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque eos, atque sed saepe
//     tempore, sequi qui excepturi voluptate ut perspiciatis culpa sit harum, corrupti ullam
//     voluptatibus obcaecati sint dignissimos quas.</p>`;
//  container.appendChild(post);
// }