 let inputs =  document.getElementById("inp");
 let text = document.querySelector(".text");


 function Add(){

    if(inputs.value == ""){
        alert("Enter Your Task")
    }
    else{
        let Addeleme = document.createElement("ul");
        Addeleme.innerHTML=`${inputs.value} <i class="fa-solid fa-trash"></i>`;
        text.appendChild(Addeleme);
        inputs.value="";
        Addeleme.querySelector("i").addEventListener("click", remove);
        function remove(){
            Addeleme.remove();
        }
        

    }
 }