//Get slider items
let sliderImages = Array.from(
    document.querySelectorAll(".slider-container img")
);
//get number of slides
let slidesCount = sliderImages.length;
//current index Set
let currentSlide = 1;
//slide number element
let slideNumberElement = document.querySelector("#slide-number");

//previous and next buttons
let nextButton = document.querySelector("#next");
let prevButton = document.querySelector("#prev");

nextButton.onclick = nextButtonFunction;
prevButton.onclick = prevButtonFunction;

//create the main ul element

let paginationElement = document.createElement("ul");
paginationElement.setAttribute("id", "pagination-ul");

//create pagination items
for (let i = 1; i <= slidesCount; i++) {
    let paginationItem = document.createElement("li");
    paginationItem.setAttribute("data-index", i);

    //set item content
    paginationItem.appendChild(document.createTextNode(i));
    paginationElement.appendChild(paginationItem);
}

// append pagination Element inside indicators
let indicators = document.querySelector(".indicators");
indicators.appendChild(paginationElement);

//get the created items
let theCreatedPagintaionItems = Array.from(
    document.querySelectorAll("#pagination-ul li")
);
//functions
function checker() {
    //set the slide number
    slideNumberElement.textContent = `slide # ${currentSlide} of ${slidesCount}`;
    //remove active from previous element
    sliderImages.forEach((el) => el.classList.remove("active"));
    theCreatedPagintaionItems.forEach((el) => el.classList.remove("active"));

    // set active class on current slide on img and bullets
    sliderImages[currentSlide - 1].classList.add("active");
    theCreatedPagintaionItems[currentSlide - 1].classList.add("active");
    //disables buttons when currentSlide reches 0 or max
    if(currentSlide === slidesCount){ 
        nextButton.classList.add("disabled");
        prevButton.classList.remove("disabled");
    } else if ( currentSlide ===1){ 
        prevButton.classList.add("disabled");
        nextButton.classList.remove("disabled");
    } else{ 
        nextButton.classList.remove("disabled");
        prevButton.classList.remove("disabled");
    }
}

for ( let element of theCreatedPagintaionItems){ 
    element.onclick = controlSlideBullets;
}

function controlSlideBullets(){ 
    let dataIndex = this.getAttribute("data-index");
    currentSlide = parseInt(dataIndex);
    checker();
}

function nextButtonFunction() {
    if (currentSlide < slidesCount) {
        currentSlide++;
    }
    checker();
}
function prevButtonFunction() {
    if (currentSlide !== 1) {
        currentSlide -= 1;
    }
    checker();
}

window.onload = checker;
