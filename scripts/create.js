const patterns = 
{
    name:[/^[a-z]{2,}$/i,`Your name should contain only letters and should be at least 2 characters long.`],
    email: [/^([a-z\d\.-_]+)@([a-z\d\.-]+)\.([a-z]{2,6})(\.[a-z]{2,6})?$/, `Your email should contain @, letters, numbers, _ ,- , .
     and no caps (no comma) eg 124_smtn-@domain.com or test.user@smtn.co.uk`],
    phone: [/^\d{11}$/, `Your number should contain only digits and must be 11 characters long.`],
    address: [/^[\w\.,-\\]$/i, `Your address should contain only letters,numbers, or symbols and should be at least 20 characters long.`],
    bvn: [/^\d{11}$/i, `Your bvn should contain only digits and should be 11 characters long.`],
}

const panels = document.querySelectorAll("form > div");





let pgnum = document.querySelector("#current");
let autohighlight = [document.querySelector("#fname"), document.querySelector("#kfname"), document.querySelector("#bvn")];


buttons[0].addEventListener("click",prev,false);
buttons[1].addEventListener("click", next, false);

const inputs = [...document.querySelectorAll('.enter-info')];
const fields ={};

inputs.forEach(el => 
    {
        fields[el.attributes.name.value] = [false,null] ;
        el.addEventListener("change", Verify, false);
        el.type == "radio" ? null : el.insertAdjacentHTML("afterend", "<div class=\"error\"><div>")   ;
    }
    
    
    );


function Verify(event) 
{
    
    let target = event.target;
    let fieldvalue = target.value;
    let str = target.attributes.name.value;
    if ( str.indexOf('name') >= 0)
    {
        if (patterns['name'][0].test(fieldvalue)) 
        {
            fields[str] =  [true,fieldvalue];
            target.nextElementSibling.innerHTML = null;
           
        }

        else
        {
            fields[str] = [false,null];
            let errMsg = patterns['name'][1];
            target.nextElementSibling.innerHTML = errMsg;
            
        }
       
    } 
    else if ( str.indexOf('phone') >= 0) 
    {
        if (patterns['phone'][0].test(fieldvalue)) 
        {
            fields[str] = [true, fieldvalue];
            target.nextElementSibling.innerHTML = null;
            

        }
        
        else 
        {
            fields[str] = [false, null];
            let errMsg = patterns['phone'][1];
            target.nextElementSibling.innerHTML = errMsg;

        }

    } 
    else if ( str.indexOf('email') >= 0) 
    {
        if (patterns['email'][0].test(fieldvalue)) 
        {
            fields[str] = [true, fieldvalue];
            target.nextElementSibling.innerHTML = null;
            

        }
        else
        {
            fields[str] = [false, null];
            let errMsg = patterns['email'][1];
            target.nextElementSibling.innerHTML = errMsg;
        }

    } 
    else if ( str.indexOf('bvn') >= 0) 
    {
        if ( patterns['bvn'][0].test(fieldvalue)) 
        {
            fields[str] = [true, fieldvalue];
            target.nextElementSibling.innerHTML = null;
            

        }
        else 
        {
            fields[str] = [false, null];
            let errMsg = patterns['bvn'][1];
            target.nextElementSibling.innerHTML = errMsg;
        }

    }

    // else test for radio, textarea, select 

  

    
    
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


