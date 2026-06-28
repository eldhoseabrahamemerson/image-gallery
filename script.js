const mainImage = document.querySelector("#mainImage");
const thumbnails = document.querySelectorAll(".thumb");

let currentIndex = 0;

thumbnails[0].classList.add("active");

function showImage(index){

    mainImage.style.opacity = 0;

    setTimeout(()=>{

        mainImage.src = thumbnails[index].src;

        mainImage.style.opacity = 1;

    },150);

    thumbnails.forEach(img=>img.classList.remove("active"));

    thumbnails[index].classList.add("active");

    currentIndex = index;

}

thumbnails.forEach((thumb,index)=>{

    thumb.addEventListener("click",()=>{

        showImage(index);

    });

});

document.querySelector("#nextBtn").addEventListener("click",()=>{

    currentIndex++;

    if(currentIndex>=thumbnails.length){

        currentIndex=0;

    }

    showImage(currentIndex);

});

document.querySelector("#prevBtn").addEventListener("click",()=>{

    currentIndex--;

    if(currentIndex<0){

        currentIndex=thumbnails.length-1;

    }

    showImage(currentIndex);

});

document.addEventListener("keydown",(event)=>{

    if(event.key==="ArrowRight"){

        document.querySelector("#nextBtn").click();

    }

    if(event.key==="ArrowLeft"){

        document.querySelector("#prevBtn").click();

    }

});