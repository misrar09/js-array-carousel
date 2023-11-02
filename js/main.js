const imageGallery = [ "./consegna/img/01.webp", "./consegna/img/02.webp", "./consegna/img/03.webp", "./consegna/img/04.webp", "./consegna/img/05.webp" ];

const container = document.querySelector(".container");


for (let i = 0; i < imageGallery.length; i++) {
    const imageLink= imageGallery[i];
    const imgElement = document.createElement("img");
    imgElement.src = imageLink;
    container.appendChild(imgElement)

  

    if(i == 0) {
        imgElement.classList.add("inAction")
    }

}

const imgElements = container.querySelectorAll("img");

let activeImage = 0;

imgElements[activeImage].classList.add("inAction");


const btnUpElement = document.querySelector(".btnUp");

btnUpElement.addEventListener("click", function() {
    imgElements[activeImage].classList.remove("inAction");

    if (activeImage < imgElements.length - 1) {
        activeImage++;
        
    }

    else{
        activeImage = 0
        
    }

    imgElements[activeImage].classList.add("inAction");


});


const btnDownElement = document.querySelector(".btnDown");

btnDownElement.addEventListener("click", function() {
    imgElements[activeImage].classList.remove("inAction");

    if (activeImage > 0) {
        activeImage--;
    } else {
        activeImage = imgElements.length - 1; 
    }

    imgElements[activeImage].classList.add("inAction");
});



