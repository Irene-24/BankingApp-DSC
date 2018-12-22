function MenuHandler() {
    const menu = document.querySelector('.mine ul');
    const menuToggle = document.querySelector('.menu-toggle');

    menuToggle.addEventListener('click', (e) => {
        e.preventDefault();

        if (menu.style.display === 'block') {
            menu.style.display = 'none';
        } else {
            menu.style.display = 'block';
        }
    });

    window.addEventListener("resize", myFunction);
    function myFunction() {

        if (window.innerWidth > 991 && menu.style.display === 'none') {
            menu.style.display = 'block';

        }


    }
}

MenuHandler();




const patterns = 
{
    name:[/^[a-z]{2,}$/i,`Your name should contain only letters and should be at least 2 characters long.`],
    email: [/^([a-z\d\.-_]+)@([a-z\d\.-]+)\.([a-z]{2,6})(\.[a-z]{2,6})?$/, `Your email should contain @, letters, numbers, _ ,- , .
     and no caps (no comma) eg 124_smtn-@domain.com or test.user@smtn.co.uk`],
    date: [/^\d{4}([\/-])\d{1,2}([\/-])\d{1,2}$/i,`Your date must contain only digits and must be in the format yyyy/mm/dd or yyyy-mm-dd`],
    phone: [/^\d{11}$/, `Your number should contain only digits and must be 11 characters long.`],
    address: [/^[\w\s-,\.\/\\]{20,}$/i, `Your address should contain only letters,numbers,spaces , or the  symbols-> 
    <i>"/" or "," or "." or "\\"</i>
     and should be at least 20 characters long.`],
    bvn: [/^\d{11}$/i, `Your bvn should contain only digits and should be 11 characters long.`],
    origin: [/^[a-z]{3,}$/i,'The spelling of your state of origin should contain only letters and must be at least 3 letters long.']
}

const panels = document.querySelectorAll("form > div");
const buttons = document.querySelectorAll(".buttons");
let panel =0;

panels[panel].style.display = "block";
buttons[0].style.display = "none";
buttons[1].style.display = "block";


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
    let type = target.nodeName;
    let fieldvalue = target.value;
    let str = target.attributes.name.value;
    fieldvalue =fieldvalue.trim();
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

    else if ( str.indexOf('phone') >= 0)
    {

        if (patterns['phone'][0].test(fieldvalue)) {
            fields[str] = [true, fieldvalue];
            target.nextElementSibling.innerHTML = null;


        }
        else {
            fields[str] = [false, null];
            let errMsg = patterns['phone'][1];
            target.nextElementSibling.innerHTML = errMsg;
        }

    }

    else if ( str.indexOf('origin') >= 0)
    {
        if (patterns['origin'][0].test(fieldvalue)) {
            fields[str] = [true, fieldvalue];
            target.nextElementSibling.innerHTML = null;


        }
        else {
            fields[str] = [false, null];
            let errMsg = patterns['origin'][1];
            target.nextElementSibling.innerHTML = errMsg;
        }

    }


    else if (str.indexOf('dob') >= 0) {
        if (patterns['date'][0].test(fieldvalue)) {
            fields[str] = [true, fieldvalue];
            target.nextElementSibling.innerHTML = null;


        }
        else {
            fields[str] = [false, null];
            let errMsg = patterns['date'][1];
            target.nextElementSibling.innerHTML = errMsg;
        }

    }



    // else test for radio, textarea, select 

    else
    {
        if (type == "TEXTAREA") 
        {
          
            if (patterns['address'][0].test(fieldvalue)) {
                fields[str] = [true, fieldvalue];
                target.nextElementSibling.innerHTML = null;


            }

            else {
                fields[str] = [false, null];
                let errMsg = patterns['address'][1];
                target.nextElementSibling.innerHTML = errMsg;

            }



        }

        if (type == "SELECT")
        {
            if(fieldvalue)
            {
                fields[str] = [true, fieldvalue];
            }

            else
            {
                fields[str] = [false, null];
            }
        }

        else if (target.attributes.name.value == "sex") 
            {
                fields['sex'] = [true, fieldvalue];
            }

        else if (target.attributes.name.value == "acctype")
            {
                fields['acctype'] = [true, fieldvalue];
            }

        else if (target.attributes.name.value == "passport") 
        {
            let reader = new FileReader();
            reader.onload = function () 
            {
                let output = document.getElementById('output_image');
                output.src = reader.result;
            }
            reader.readAsDataURL(event.target.files[0]);
            fields['passport'] = [true, fieldvalue.substring(fieldvalue.lastIndexOf("/")+1,fieldvalue.length)];
        }   





        

    }
    
}


function isPanelValid(start,end) 
{
    let flag =true;

    const keys = Object.keys(fields);

    for (let index = start; index < end; index++) 
    {
        if(!(fields[keys[index]][0]))
        {
            flag = false;
            break;
        }
        
    }

    return flag
}


function next() 
{
   
    if (panel<panels.length-1) 
    {
        switch (panel) {
            case 0:
            if(isPanelValid(0,10))
            {

                panel++;
                ShowPanel();
            }
                else
                {
                    alert("Please make sure all fields are accurately filled")
                }
                break;
            case 1:
                if (isPanelValid(10, 17)) 
                {

                    panel++;
                    ShowPanel();
                }
                else {
                    alert("Please make sure all fields are properly filled")
                }

                break;
            case 2:
                if (isPanelValid(17, 19)) 
                {

                    console.log("All valid")
                } else {
                    alert("Please make sure all fields are filled")
                }

                break;        
        
        }
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


