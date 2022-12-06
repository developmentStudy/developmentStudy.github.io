let flag= true;
document.querySelector('.header_wrap').style.zIndex=100000;
const xBtn = document.querySelector('.more_btn');
xBtn.addEventListener('click',()=>{
    flag =!flag;
if(flag)
    xBtn.classList.add("addedClass");
    else 
    xBtn.classList.remove("addedClass");

});