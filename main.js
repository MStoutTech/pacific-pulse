document.querySelector('#hero-next-img').addEventListener('click', nextImage)
document.querySelector('#hero-prev-img').addEventListener('click', prevImage)

function nextImage(){
    switch (document.getElementById("slideshow").style.backgroundImage) {
        case 'url("images/hero1.PNG")' :
            document.getElementById("slideshow").style.backgroundImage = 'url("images/hero2.png")';
            console.log("changed image to 2")
            break;
        case 'url("images/hero2.png")' :
            document.getElementById("slideshow").style.backgroundImage = "url('images/hero3.png')";
            console.log("changed image to 3")
            break;
        case 'url("images/hero3.png")' :
            document.getElementById("slideshow").style.backgroundImage = 'url("images/hero1.PNG")';
            console.log("changed image to 1")
            break;
    }
    
    
}

function prevImage(){
   switch (document.getElementById("slideshow").style.backgroundImage) {
        case 'url("images/hero1.PNG")' :
            document.getElementById("slideshow").style.backgroundImage = 'url("images/hero3.png")';
            console.log("changed image to 2")
            break;
        case 'url("images/hero3.png")' :
            document.getElementById("slideshow").style.backgroundImage = "url('images/hero2.png')";
            console.log("changed image to 3")
            break;
        case 'url("images/hero2.png")' :
            document.getElementById("slideshow").style.backgroundImage = 'url("images/hero1.PNG")';
            console.log("changed image to 1")
            break;
    }
}