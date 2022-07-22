
let slideIndex = 1;
showSlide(slideIndex);

function slide(n){
    slideIndex += n;
    showSlide(slideIndex);
}

function clickDot(n){
    slideIndex = n;
    showSlide(slideIndex);
}

function showSlide(n){
    slideIndex = n;
    let img1 = document.getElementsByClassName('img1');
    let dots = document.getElementsByClassName('dot');

    if(slideIndex > 3){
        slideIndex = 1;
    }
    if(slideIndex < 1){
        slideIndex = 3;
    }
    for(let i = 0; i < img1.length; i++){
        img1[i].style.display = "none";
    }
    for(let i = 0; i < dots.length; i++){
        dots[i].className.replace(" active", "");
    }

    img1[slideIndex - 1].style.display = "inline-block";
    dots[slideIndex - 1].className += " active";
}