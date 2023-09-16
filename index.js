'use strict'

// btns
const features = document.querySelector(".features_a");
const technology = document.querySelector(".technology_a");
const contact = document.querySelector(".contact_a");

//sections
const sectionFeature = document.querySelector(".features_section");
const sectionTechnology = document.querySelector(".technologoy_section");
const sectionContact =  document.querySelector(".contact_section");
//menu
const navbar =  document.querySelector(".navbar");
const nav =  document.querySelector("nav")
const sectionEasy = document.querySelector(".section_easy")



//  events

const scrollToCloud = (section) =>{
    const sectionPosition = section.getBoundingClientRect();
    console.log("click");
    window.scrollTo({
        left: sectionPosition.left,
        top: sectionPosition.top + window.pageYOffset,
        behavior:"smooth"
    })
}

features.addEventListener("click", ()=>{scrollToCloud(sectionFeature)});
technology.addEventListener("click",()=>{scrollToCloud(sectionTechnology)});
contact.addEventListener("click",()=>{scrollToCloud(sectionContact)})


//fixed

// function 
const navbarFixer=(entries)=>{
    console.log(entries);
    const [entry]=entries;
    if(entry.isIntersecting){
        navbar.classList.add("fixed")
         observer.unobserve(features)
    }
    else{
        navbar.classList.remove("fixed")
    }
}

// option

const option={
    root: null,
    threshold: 0.3  // [0 : 1] oraliqda qiymat oladi

}
const observer =  new IntersectionObserver(navbarFixer,option)
observer.observe(sectionFeature)



//////////////////////////      SLIDER      ///////////////////


const nextBtn = document.querySelector(".next-btn")
const prevBtn = document.querySelector(".prev-btn")
const slides = document.querySelectorAll(".image_one")
const dots=document.querySelectorAll(".dot")

let count = 0
console.log(slides.length);
console.log(count);

dots[count].classList.add("blackDot");


nextBtn.addEventListener("click", () => {
    console.log(count);
    console.log(dots);
    
    // prevBtn.removeAttribute("disabled")
        count += 1
        dots[count].classList.add("blackDot");
    dots[count-1].classList.remove("blackDot");
        // if (count == slides.length-1) {
        //     nextBtn.setAttribute("disabled",true)}
            
        slides.forEach((slide, index) => {
            slide.style.transform = `translateX(${index * 100 - 100 * count}%)`;
            
           
           
        })
        if (count == slides.length) {
            count=0
            slides[0].style.transform = `translateX(0)`
            slides[1].style.transform = `translateX(100%)`
            slides[2].style.transform = `translateX(200%)`
            slides[3].style.transform = `translateX(300%)`

        }
    
})

// if(count < 1){
//     prevBtn.setAttribute("disabled",true)
// }

prevBtn.addEventListener("click", (e, index) => {
    // nextBtn.removeAttribute("disabled")
    console.log(count);
    count -= 1 
    dots[count].classList.add("blackDot");
    dots[count+1].classList.remove("blackDot");
    if(count == -1){
       count=3
    }
    slides.forEach((slide, index) => {
            slide.style.transform = `translateX(${index * 100 - 100 * count}%)`
        }
    )
})