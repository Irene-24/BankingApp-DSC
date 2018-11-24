const fields ={};
const form = document.querySelector("form");
const inputslabels = form.querySelectorAll("label");
console.log(`i have ${inputslabels.length} labels`);
inputslabels.forEach((el)=>fields[el.attributes.for.value] = [false,0]);


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

function VerifyAll() 
{

    let invalidFields = [];
    let arr = [];
    let start = 0;
    let length = panels[0].querySelectorAll("label").length;
    if (panel == 0)
    {
        arr = panels[0].querySelectorAll("label") ;        
       
    }
    else if (panel == 1) 
    {
        arr = panels[1].querySelectorAll("label");
        start = length;
        length = length + arr.length ;
      
    }
    else if(panel == 2) 
    {
        arr = panels[2].querySelectorAll("label");
        start = panels[1].querySelectorAll("label").length;
        length = length + arr.length;
           
    }

    for (let index = start; index < length; index++) 
    {
        if (fields[arr[index].attributes.name.value][0] == false) 
        {
            invalidFields.push[fields[arr[index].attributes.name.value]];
        }

    }

    return invalidFields.length;

}

function Verify(event) 
{
    //get nodename
    //see testing.html for how to add evtlistener in practice-4.html

    
    
}




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


