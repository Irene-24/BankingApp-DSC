function MenuHandler() 
{
    const menu = document.querySelector('.mine ul');
    const menuToggle = document.querySelector('.menu-toggle');

    menuToggle.addEventListener('click', (e) => {
        e.preventDefault();

        if (menu.style.display === 'block') 
        {
            menu.style.display = 'none';
        } else {
            menu.style.display = 'block';
        }
    });

    window.addEventListener("resize", myFunction);
    function myFunction() 
    {

        if (window.innerWidth > 991 && menu.style.display === 'none') {
            menu.style.display = 'block';

        }


    }
}

function PlaySlides() 
{
    const container = document.querySelector(".slides-container");
    const slides = document.querySelectorAll(".slides");
    const totalslides = slides.length;
    const SlideInterval = 3000;
    let currentSlide = -1;
    let start;
    console.log(`i have ${totalslides} images`);

    function showSlides(index) 
    {
        if ((index >= 0) && (index < totalslides) && (window.innerWidth >= 991)) 
        {
            container.style.display = "block";
            for (let i = 0; i < totalslides; i++) 
            {
                if (i === index) 
                {
                    slides[i].style.display = "inline-block";
                }
                else
                {
                    slides[i].style.display = "none";
                }
            }
        }
//Hide for mobile devices
        else
        {
           container.style.display="none";
        }

    }

    let stop = ()=> clearTimeout(start);
    let next = function()
                        {
                            stop();
                            currentSlide === totalslides-1 ? currentSlide = 0 : currentSlide++;
                            showSlides(currentSlide);
                            start = setTimeout(() => {next() },SlideInterval);
                        };       
    next();                   


    
}

MenuHandler();
PlaySlides();
