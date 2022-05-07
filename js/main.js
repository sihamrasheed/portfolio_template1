let switcher = document.querySelectorAll(".list li");
let imge = Array.from(document.images);

switcher.forEach((li)=>{
    li.addEventListener("click",removeactiv);
    li.addEventListener("click",manageimage);
})

function removeactiv(){
    switcher.forEach((li)=>{
        li.classList.remove("active");
        this.classList.add("active");
    })
}

function manageimage(){
    imge.forEach((img)=>{
        img.style.display="none";
    });
    document.querySelectorAll(this.dataset.cat).forEach((el)=>{
        el.style.display='block';
    });
}