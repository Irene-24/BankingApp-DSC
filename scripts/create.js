const panels = document.querySelectorAll("form > div");
let panel = 0;
const buttons =document.querySelectorAll("form > span")
panels[panel].style.display = "block";
buttons[0].style.display = "none";

let pgnum = document.querySelector("#current");

let autohighlight = [document.querySelector("#fname"), document.querySelector("#kfname"), document.querySelector("#bvn")];


console.log(`I have ${buttons.length} btns`);
console.log(`I have ${panels.length} panels`)

buttons[0].addEventListener("click",prev,false);
buttons[1].addEventListener("click", next, false);


function next() 
{
    if (panel<panels.length-1) 
    {
        panel++;
        ShowPanel();
    }
    
}

function prev()
 {
    if (panel >= 0) 
    {
        panel--;
        ShowPanel();
      
    }

}

function ShowPanel()
{
    for (let index = 0; index < panels.length; index++) 
    {
        if(panel==0)
        {
            buttons[0].style.display ="none"
        }

        else if (panel == panels.length-1) 
        {
            buttons[1].style.display = "none"
        }

        else
        {
            buttons[1].style.display = "block";
            buttons[0].style.display = "block";

        }

        if(index==panel)
        {
          
            pgnum.innerHTML = ""+ (panel+1);
            panels[index].style.display = "block";
            autohighlight[panel].focus();
            
        }
        else
        {
            panels[index].style.display = "none";
        }
        
    }    
    
}

function Validate()  // will push all to person
{

}

const Person = 
{
   personal : {},
   kin: {},
   accont: {},

}
