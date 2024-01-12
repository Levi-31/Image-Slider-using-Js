const slides= document.querySelectorAll('.slider');


let counter=0;

slides.forEach((slide,index)=>{
      slide.style.left=`${index*100}%`
})


// for top to buttom slide
// slides.forEach((slide,index)=>{
//     slide.style.top=`${index*100}%`
// })

const goNext =()=>{
 counter++;
 if(counter>=slides.length){
    counter=0;
 }

 slideImage();
}

const goPrev= ()=>{
    counter--;
    if(counter<0){
        counter=0;
    }

    slideImage();
}

const slideImage = ()=>{
    slides.forEach((slide) =>{
      slide.style.transform = `translateX(-${counter*100}%)`
    })
}


// FOR TOP TO BUTTOM SLIDING EFFECT 
// const slideImage = ()=>{
//     slides.forEach((slide) =>{
//       slide.style.transform = `translateY(-${counter*100}%)`
//     })


