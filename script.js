const observeLeft = new IntersectionObserver((entities) =>{
    entities.forEach((entity) =>{
        if(entity.isIntersecting){
            entity.target.classList.add("show-left")
        }
        else{
            entity.target.classList.remove("show-left")
        }
    })
})

const observeRight = new IntersectionObserver((entities) =>{
    entities.forEach((entity) =>{
        if(entity.isIntersecting){
            entity.target.classList.add("show-right")
        }
        else{
            entity.target.classList.remove("show-right")
        }
    })
})

const observeBottom = new IntersectionObserver((entities) =>{
    entities.forEach((entity) =>{
        if(entity.isIntersecting){
            entity.target.classList.add("show-bottom")
        }
        else{
            entity.target.classList.remove("show-bottom")
        }
    })
})

const bottomElements = document.querySelectorAll(".hide-bottom");
const leftElements = document.querySelectorAll(".hide-left");
const rightElements = document.querySelectorAll(".hide-right");

bottomElements.forEach((el) => {
    observeBottom.observe(el)
})

leftElements.forEach((el) => {
    observeBottom.observe(el)
})

rightElements.forEach((el) => {
    observeBottom.observe(el)
})
