let themeBtn = document.getElementById("themeBtn");
let rtlBtn = document.getElementById("rtlBtn");

// ================= Dark Mode =================

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        themeBtn.innerHTML = '<i data-lucide="sun"></i>';

    } else {

        themeBtn.innerHTML = '<i data-lucide="moon"></i>';

    }

    lucide.createIcons();

});

// ================= RTL =================

rtlBtn.addEventListener("click", function () {

    document.body.classList.toggle("rtl");

    if (document.body.classList.contains("rtl")) {

        document.documentElement.setAttribute("dir", "rtl");
        rtlBtn.innerHTML = "LTR";

    } else {

        document.documentElement.setAttribute("dir", "ltr");
        rtlBtn.innerHTML = "RTL";

    }

});


let menuBtn = document.getElementById("menuBtn");

let navMenu = document.getElementById("navMenu");

menuBtn.onclick=function(){

navMenu.classList.toggle("active");

}



const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");

        const count = +counter.innerText;

        const increment = target / 100;

        if(count < target){

            counter.innerText = Math.ceil(count + increment);

            setTimeout(updateCounter,20);

        }else{

            counter.innerText = target;

        }

    }

    updateCounter();

});


const dropdownLink = document.querySelector(".dropdown > a");

dropdownLink.addEventListener("click", function (e) {

    if (window.innerWidth <= 992) {

        e.preventDefault();

        this.parentElement.classList.toggle("active");

    }

});