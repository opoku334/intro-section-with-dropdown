number = document.querySelectorAll('.toggler').length

for(let i = 0; i < number; i++){
    document.querySelectorAll('.toggler')[i].addEventListener('click',visibility)
}

function visibility(){

    document.querySelector('.nav-menu').classList.toggle('visible')
    document.querySelector('body').classList.toggle('active')

    image = document.querySelector('.hamburger');
    if (image.src.includes('close')){
        image.src = 'images/icon-menu.svg'
    }
    else{
        image.src = 'images/icon-close-menu.svg'
    }
    

}

document.querySelector('.features-toggler').addEventListener('click',features)

function features(){
    document.querySelector('.features-dropdown').classList.toggle('visible');
    image = document.querySelector('.features-arrow').src
    if (image.includes('down')){
        image= image.replace('down','up')
    }
    else{
        image = image.replace('up','down')
    }
    document.querySelector('.features-arrow').src = image

}

document.querySelector('.company-toggler').addEventListener('click',nana);

function nana(){
    document.querySelector('.company-dropdown').classList.toggle('visible');
    image = document.querySelector('.company-arrow');
    
    if( image.src.includes('down')){

        image.src = image.src.replace('down','up')

    }
    else{
        image.src = image.src.replace('up','down')
    }

    
}