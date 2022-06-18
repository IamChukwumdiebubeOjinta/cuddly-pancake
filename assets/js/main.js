// To get all the elements with a class of .slide
const options = document.querySelectorAll('.final-wrapper nav ul li')
options.forEach((li, index) => {

    //add EventListener
    li.addEventListener('click', () => {
        let activeLi = document.querySelector(".final-wrapper nav ul li.active")
        active(activeLi,li)
        toggleSlide(index, slide)
    })
})

function active(activeLi,li){
    activeLi.classList.remove("active");
    
    li.classList.add("active")
    place.innerHTML=li.innerHTML
}

// To get all the elements with a class of .slide
const slides = document.querySelectorAll('.final-wrapper .slides')

// To track when the slide is clicked and when it's not
let isActive = false

const toggleSlide = (index, slide) => {
    isActive = !isActive

    if(isActive){

        // [...slides] => This is to help me create an array from the HTMLCollection array [returned from document.querySelectorAll('.slide') and make use of the map method

        [...slides].map(_slide => _slide.className = "tab hide") // it's now equivalent to this `<div class="tab hide">`

        // Giving that particular slide you clicked the active class 
        slides[index].className = "tab show" // it's now equivalent to this `<div class="tab show">`
    }
    else {
        // Removing all the active and shrink class names from slide element
        [...slides].map(_slide => _slide.className = "tab")
    }
    
}