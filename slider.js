function Slider (slider){
    if(!slider){
        throw new Error('Slider element Should be passed!')
    }
    const nextButton = slider.querySelector('.nex-slide-btn')
    const prevButton = slider.querySelector('.prev-slide-btn')
    const slideItems = slider.querySelectorAll('.slide-item')
    const slideWrapper = slider.querySelector('.slider-wrapper')
    let count = 0
    let witdth
    
    function init(){
        witdth = slider.offsetWidth
        slideWrapper.style.witdth = `${witdth*slideItems.length} px`
        rollSldie()
    }
    window.addEventListener('load' , init)
    window.addEventListener('resize' , init)
    
    function rollSldie(){
        slideWrapper.style.transform = `translate(-${count*witdth}px)`
    }
    function rollNextSlide(){
        count++
        if(count >= slideItems.length){
            count = 0
        }
        rollSldie()
    }
    function rollPrevSlide(){
        count--
        if(count < 0){
            count = slideItems.length -1
        }
        rollSldie()  
    }
    prevButton.addEventListener('click' , rollPrevSlide)
    nextButton.addEventListener('click' , rollNextSlide)
    
    }
    const slider1 = Slider(document.querySelector('.slider-1'))
    const slider2 = Slider(document.querySelector('.slider-2'))