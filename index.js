//Me
// document.querySelector("#increment-btn").addEventListener("click",function(){
//     document.querySelector("#count-el").innerHTML++;
// });

//sir
let countEl=document.getElementById("count-el"); //passing something in b/w parenthesis is called pass in argument 
let count=0;
function increment(){
    count++;
    countEl.textContent=count;
}

let history ;
function save(){
    history = count + " - " ;
    let saveEl=document.getElementById("save-el");
    saveEl.textContent+=history ;  
    count=0;  
    countEl.textContent=count; //After saving make count 0 and start counting again
}

let welcomeEl=document.getElementById("welcome-el");
    let name="Saurav Kumar";
    let greeting="Welcome back"
    welcomeEl.innerText= greeting +" "+ name ;

