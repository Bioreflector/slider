function Slider (slider){
    if(!slider){
        throw new Error('Slider element Should be passed!')
    }
    const nextButton = slider.querySelector('.nex-slide-btn')
    const prevButton = slider.querySelector('.prev-slide-btn')
    const slideItems = slider.querySelectorAll('.slide-item')
    const sliderTrack = slider.querySelector('.slider-track')
    let count = 0
    let witdth
    
    function init(){
        witdth = slider.offsetWidth
        sliderTrack.style.witdth = `${witdth*slideItems.length} px`
        rollSldie()
    }
    init()
    window.addEventListener('resize' , init)

    function checkBtn(){
        if(count === 0){
            prevButton.disabled = true
        }
        else(
            prevButton.disabled = false
        )
        if(count === slideItems.length-1){
           nextButton.disabled = true 
        }
        else{
            nextButton.disabled = false
        }
    }
    checkBtn()


    function rollSldie(){
        sliderTrack.style.transform = `translate(-${count*witdth}px)`
    }

    function rollNextSlide(){
        count++
        checkBtn()
        rollSldie()
    }
    function rollPrevSlide(){
        count--
        checkBtn()
        rollSldie()  
    }
    prevButton.addEventListener('click' , rollPrevSlide)
    nextButton.addEventListener('click' , rollNextSlide)
    
    }
    const slider1 = Slider(document.querySelector('.slider-1'))
    const slider2 = Slider(document.querySelector('.slider-2'))