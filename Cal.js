let input=document.getElementById("input");
let buttons=document.querySelectorAll(".Btn");
// var buttonText;
input.addEventListener('keypress',(e)=>{
    if(e.key==='Enter')
    input.value=eval(input.value);
})
for (items of buttons) {
    items.addEventListener('click',(e)=>{
        buttonText=e.target.innerText;
        if(buttonText!="AC" && buttonText!="=")
        {
            if(buttonText=='+/-')
        {
            input.value+="-";
        }
        else if(buttonText=='÷')
        {
            input.value+='/'
        }
        else if(buttonText=='X')
        {
            input.value+="*";
        }
        else
        {
            input.value+=buttonText;
        }
        }
        else if (buttonText=="AC")
        {
            input.value="";
        }
        else if(buttonText=="=")
        {
            input.value=eval(input.value);
        }
    })
}
if(input.value=="")
{
    location.reload;
}
let i=0;
let placeholder="";
const txt="Calculator......";
const speed=150;
function type(){
    placeholder+=txt.charAt(i);
    input.setAttribute("placeholder",placeholder);
    i++;
    setTimeout(type,speed);
}
type();