// body Animation---------------------------------------------------------------------------------------------------------------------------------------------------------------
try {
    function animation() {
        // console.log(e);
        let body = document.querySelector('body');
        body.style.opacity = "1";
        body.style.visibility = "visible";
        body.style.background = "white";
    }
    window.onload = animation();
}
catch(err) {
    console.log(err);
}


// header section js -----------------------------------------------------------------------------------------------------------------------------------------------------------
try{
    let header = document.querySelector("header");
    let prevScroll = header.offsetHeight;

    window.addEventListener("scroll", () => {
        let currScroll = window.scrollY;
        if (currScroll < prevScroll) {
            // console.log("scroll down");
            header.style.transform = "none";
            header.style.boxShadow = "0px 0px 10px";

            // changing scrollbar color 
            document.head.insertAdjacentHTML("beforeend", `
            <style>
            body::-webkit-scrollbar-thumb { background:linear-gradient(0deg, transparent, #004581, #004581); }
            </style>
          `);
        } else if (currScroll > prevScroll) {
            // console.log("scroll upp");
            header.style.transform = "translateY(-100%)";
            header.style.boxShadow = "0px 0px 0px";

            // changing scrollbar color 
            document.head.insertAdjacentHTML("beforeend", `
            <style>
            body::-webkit-scrollbar-thumb { background: linear-gradient(0deg, #004581, #004581, transparent);}
            </style>
          `);
        }
        if (currScroll > header.offsetHeight) {
            prevScroll = currScroll;
        }
        if (currScroll <= header.offsetHeight) {
            header.style.boxShadow = "0px 0px 0px";
        }

    });
}catch(err) {
    console.log(err);
}




// slider section js --------------------------------------------------------------------------------------------------------------------------------------------------------------
try{
    let slides = document.querySelectorAll(".slider .sildes .slide");
    let slideDetails = document.querySelectorAll(".slider .sildes .slide .slide-detail");
    let dots = document.querySelectorAll(".slider .dots .dot");

    console.log("slides length", slides.length);
    let count = 1;
    let slideInterval = 5000; // change slide after every 5s

    function changeSlideOnClick(x) {
        count = x;
        changeSlides(count);
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
}catch(err) {
    console.log(err);
}


// solutions section --------------------------------------------------------------------------------------------------------------------------------------------------------------
try{
    let solutionsScrollHeight = document.querySelector("body").offsetHeight - document.querySelector('footer').offsetHeight - document.querySelector('.customers').offsetHeight - document.querySelector('.connect').offsetHeight - document.querySelector('.solutions').offsetHeight + (document.querySelector('.solutions .heading').offsetHeight / 2);
    // let solutionsHeight = document.querySelector('.above-header').offsetHeight + document.querySelector('header').offsetHeight + document.querySelector('.slider').offsetHeight + document.querySelector('.services').offsetHeight + document.querySelector('.about').offsetHeight + (document.querySelector('.solutions .heading').offsetHeight / 2);
    // console.log(solutionsScrollHeight);
    // console.log(solutionsHeight);
    let solutionsHeading = document.querySelector(".solutions .heading h1");
    // console.log(solutionsHeading);

    window.addEventListener('scroll', () => {
        let currScroll = window.scrollY;
        // console.log(currScroll);
        if (currScroll > solutionsScrollHeight) {
            solutionsHeading.style.opacity = 0;
            // console.log('solutions heading hidden');
        } else if (currScroll < solutionsScrollHeight) {
            solutionsHeading.style.opacity = 1;
            // console.log('solutions heading visible');
        }
    });
}catch(err) {
    console.log(err);
}

// customers seaction -------------------------------------------------------------------------------------------------------------------------------------------------------------
try{
    function scrollLeft() {
        let customers = document.querySelector('.customers .customers-images');
        // console.log(customers);
        // let customersImage = document.querySelector('.customers .customers-images .image');
        // console.log(customers.children[0].clientWidth);
        customers.scrollTo({
            left: customers.children[0].clientWidth,
            behavior: "smooth"
        });
        setTimeout(() => {
            customers.appendChild(customers.children[0]);
            customers.scrollTo({
                left: 0
            });
            // customers.removeChild(customers.children[0]);
        }, 1000);
    }

    setInterval(() => {
        scrollLeft();
    }, 3000);
}catch(err) {
    console.log(err);
}


// go to top function -------------------------------------------------------------------------------------------------------------------------------------------------------------
try{
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
}catch(err) {
    console.log(err);
}