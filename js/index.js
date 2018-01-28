/*
* @Author: Administrator
* @Date:   2018-01-28 21:45:30
* @Last Modified by:   Administrator
* @Last Modified time: 2018-01-28 22:09:31
*/
window.onload=function () {
    let div=document.querySelector('.banner_pic');
    let banner=document.querySelectorAll('.banner_pic ul li');
    let n=0;
    function move() {
        if(n==banner.length){
            n=0;
        }
        banner.forEach(function (value) {
            value.classList.remove('active');
        })
        banner[n].className='active';
        n++;
    }
    let time=setInterval(move,2000);
    div.onmouseover=function () {
        clearInterval(time);
    }
    div.onmouseout=function () {
        time=setInterval(move,2000);
    }
    // right.onclick=function () {
    //     n++;
    //     if(n==banner.length){
    //         n=0;
    //     }
    //     banner.forEach(function (value) {
    //         value.classList.remove('active');
    //     })
    //     banner[n].className='active';
    // }
    // left.onclick=function () {
    //     n--;
    //     if(n<0){
    //         n=banner.length-1;
    //     }
    //     banner.forEach(function (value) {
    //         value.classList.remove('active');
    //     })
    //     banner[n].className='active';
    // }
}