var pic=document.getElementById("container")
var input=document.getElementById("input")
var img=document.getElementById("img")
 function call(){
    img.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+ input.value;
 }