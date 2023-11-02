const imageGallery = [ "../consegna/img/01.webp", "../consegna/img/02.webp", "../consegna/img/03.webp", "../consegna/img/04.webp", "../consegna/img/05.webp" ];




let imageForHtml = "";
for (let i = 0; i < imageGallery.length; i++) {
    const imageArray = imageGallery[i];
    imageForHtml += `<img src="${imageArray}">`;
}
document.querySelector(".container").innerHTML = imageForHtml;