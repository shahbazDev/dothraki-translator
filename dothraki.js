var translateButton  = document.querySelector("#btn-translate");
var inputTxt=document.querySelector("#input-txt");
var outputDiv= document.querySelector("#output");

var serverURL="https://api.funtranslations.com/translate/dothraki.json"


function getTranslatorURL(input){
    return serverURL+"?text="+input
}


function clickhandler(){
   var txtInput=inputTxt.value;
    fetch(getTranslatorURL(txtInput))
        .then(response=>response.json())
        .then(json=>
            {
            var translatedText=json.contents.translated;
            outputDiv.innerText=translatedText;
        })
};
translateButton.addEventListener("click",clickhandler);