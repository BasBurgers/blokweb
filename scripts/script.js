// JavaScript Document

function imageGallery(){
    const highlight = document.querySelector("#schoen1");
    const previews = document.querySelectorAll("#schoenpreview img");

    previews.forEach(preview =>{
        preview.addEventListener('click', function(){
            const smallSrc = this.src;
            const bigSrc = smallSrc.replace("small", "big")
            highlight.src = bigSrc;
        });
    });
}

