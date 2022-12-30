//VARIABLES
let textArea= document.getElementById("text");
let encryptButton= document.getElementById("encrypt");
let desEncryptButton= document.getElementById("desEncrypt");
let encryptOutput= document.getElementById("textEncrypt");
let encryptFalse= document.getElementById("textFalse");
let encryptTrue= document.getElementById("textTrue");
let text;
let arr;
let encrypt;


// FUNCION DE ENCRIPTAR
function area(){
    text= textArea.value.toLowerCase().replace(/[^\w\s]/gi, '');

    if(text == ""){
        encryptFalse.classList.remove("hidden");
        encryptTrue.classList.add("hidden");
    }
    else{
        arr= [...text];
        for (i=0 ; i<arr.length; i++){
            switch (arr[i]){
                case "a":
                    arr[i]= "ai";
                break;
                case "e":
                    arr[i]= "enter";
                break;
                case "i":
                    arr[i]= "imes";
                break;
                case "o":
                    arr[i]= "ober";
                break;
                case "u":
                    arr[i]= "ufat"
                break;
                default: 
                    null
                break;                        
            }
        }
        encrypt= arr.join("");
        encryptFalse.classList.add("hidden");
        encryptOutput.innerText=encrypt;
        encryptTrue.classList.remove("hidden");
    }
}


encryptButton.addEventListener("click", area);

//FUNCION DE DESENCRIPTAR

function desCrypt(){
    text= textArea.value.toLowerCase().replace(/[^\w\s]/gi, '');
    if(text == ""){
        encryptFalse.classList.remove("hidden");
        encryptTrue.classList.add("hidden");
    }
    else{
        arr= [...text];
        for (i=0 ; i<arr.length; i++){
            switch (arr[i]){
                case "ai":
                    arr[i]= "a";
                break;
                case "enter":
                    arr[i]= "e";
                break;
                case "imes":
                    arr[i]= "i";
                break;
                case "ober":
                    arr[i]= "o";
                break;
                case "ufat":
                    arr[i]= "u"
                break;
                default: 
                    null
                break;                        
            }
        }
        encrypt= arr.join("");
        encryptFalse.classList.add("hidden");
        encryptOutput.innerHTML=encrypt;
        encryptTrue.classList.remove("hidden");
    }
}

desEncryptButton.addEventListener("click", desCrypt)