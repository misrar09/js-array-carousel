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
    if (activeImage < imgElements.length - 1) {
        imgElements[activeImage].classList.remove("inAction");
        activeImage++;
        imgElements[activeImage].classList.add("inAction");
    }
});
