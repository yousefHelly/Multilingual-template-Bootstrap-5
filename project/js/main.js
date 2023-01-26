//open and change language of the page
setInterval(function(){
    var lBtn = document.querySelector('.open-lang-menu');
    var langSelectMenu = document.querySelector('.lang-selector');
    lBtn.onclick = function(){
    langSelectMenu.classList.toggle('d-none')
    document.querySelector('.ar-select').onclick = function(){
        if(document.querySelector('html').attributes.dir.value != 'rtl'){
            window.location.assign('index-rtl.html');
        }
    }
    document.querySelector('.en-select').onclick = function(){
        if(document.querySelector('html').attributes.dir.value != 'ltr'){
            window.location.assign('index.html');
        }
    }
}
},10);

//progress bar
var scrollProgress = document.querySelector(".scrolling-progress");
var navItems = document.querySelectorAll(".nav-link");
var sections = document.querySelectorAll("section");
window.onscroll = function(){
    var fullHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    // check direction of the page to change the start point of the scrollProgress
    if(document.querySelector('html').attributes.dir.value == 'rtl'){
        scrollProgress.style.left = 'initial';
        scrollProgress.style.right = '0';
    }
    var scrollPer = (document.documentElement.scrollTop / fullHeight) * 100;
    scrollProgress.style.width =scrollPer + '%';
    // focus the current section while scrolling
    sections.forEach(function(sec){
        if(scrollY>=sec.offsetTop && scrollY< sec.offsetHeight + sec.offsetTop){
            navItems.forEach(function(item){
                item.classList.remove("active");
                document.querySelector('a[href = "#'+sec.id + '"]').classList.add("active");
            })
        }
    })
}
//shuffle filter images
var shuffle = document.querySelector(".portfolio ul.shuffle");
var shuffleLis = document.querySelectorAll(".portfolio ul.shuffle li");
var portfolio = document.querySelectorAll(".row.portfolio .img");
        shuffleLis.forEach(function(el){
            el.onclick = function(){
                shuffleLis.forEach(function (el){
                    el.classList.remove("active");
                })
                el.classList.add("active");
                portfolio.forEach(function(image){
                if (el.textContent == image.attributes[1].value){
                    image.parentElement.style.display = "block";
                }
                else if (el.textContent ==="All" || el.textContent ==="الكل" ){
                    image.parentElement.style.display = "block";
                }
                else{
                    image.parentElement.style.display = "none";
                }
                })
            }
        })
// image pop up
var popUp = document.querySelector(".pop-up-image");

portfolio.forEach(function(image){
    image.onclick = function (){
        popUp.style.display = "flex";
        popUp.firstElementChild.src = image.firstElementChild.src;
        popUp.firstElementChild.nextElementSibling.textContent = image.attributes[1].value;
        var closeBtn = document.querySelector(".pop-up-image .close");
        closeBtn.onclick = function(){
        popUp.style.display = "none";
    }
    }
})

