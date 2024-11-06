// header section js -----------------------------------------------------------------------------------------------------------------------------------------------------------
let header = document.querySelector("header");
// console.log(header.offsetHeight);
let prevScroll = header.offsetHeight;
window.addEventListener("scroll", () => {
    let currScroll = window.scrollY;
    if (currScroll < prevScroll) {
        // console.log("scroll down");
        header.style.transform = "none";
    } else if (currScroll > prevScroll) {
        // console.log("scroll upp");
        header.style.transform = "translateY(-100%)";
    }
    if (currScroll > header.offsetHeight/2) {
        prevScroll = currScroll;
    }
});




// slider section js --------------------------------------------------------------------------------------------------------------------------------------------------------------
let slides = document.querySelectorAll(".slider .sildes .slide");
let slideDetails = document.querySelectorAll(".slider .sildes .slide .slide-detail");
let dots = document.querySelectorAll(".slider .dots .dot");

console.log("slides length", slides.length);
let count = 1;
let slideInterval = 5000; // change slide after every 5s

function changeSlideOnClick(x) {
    count = x;
    changeSlides(count);
    // count++;
}

function changeSlides(x) {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.add("fade-out")
        slideDetails[i].classList.add("text-slide-down")
        setTimeout(() => {
            slides[i].style.display = "none";
            dots[i].classList.remove("active")
            slides[i].classList.remove("fade-out")
        }, 500);
    }

    setTimeout(() => {
        slideDetails[x].classList.remove("text-slide-down")
        slides[x].classList.add("fade-in")
        slides[x].style.display = "block";
        dots[x].classList.add("active")
    }, 500);

    setTimeout(() => {
        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.remove("fade-out")
            slides[i].classList.remove("fade-in")
        }
    }, 3000);
}

setInterval(() => {
    if (count === slides.length) {
        count = 0;
    }
    changeSlides(count);
    count++;
}, slideInterval);

// window.onload = changeSlides(count);



// go to top function -------------------------------------------------------------------------------------------------------------------------------------------------------------
function goToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

window.addEventListener('scroll', () => {
    let goToTopButton = document.querySelector(".goToTop")
    let top = window.scrollY;
    let height = window.innerHeight * 1.5;

    if (top > height) {
        goToTopButton.style.display = "block";
    }
    else if (top < height) {
        goToTopButton.style.display = "none";
    }
});