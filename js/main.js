const imageGallery = [ "./consegna/img/01.webp", "./consegna/img/02.webp", "./consegna/img/03.webp", "./consegna/img/04.webp", "./consegna/img/05.webp" ];

const contaiiner = document.querySelector(".container");


for (let i = 0; i < imageGallery.length; i++) {
    const imageList= imageGallery[i];
    
    const imgElement = document.createElement("img");
    imgElement.src = imageList;
    contaiiner.appendChild(imgElement)

    if(i == 0) {
        imgElement.classList.add("InAction")
    }

}
