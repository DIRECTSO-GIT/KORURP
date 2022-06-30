Begin
function Login(){
var done=0;
var username=document.login.username.value;
username=username.toLowerCase();
var password=document.login.password.value;
password=password.toLowerCase();
if (username=="admin" && password=="192837465") { window.location="./PASS/11.html"; done=1; }
if (username=="kerem" && password=="123") { window.location="./PASS/1.html"; done=1; }
if (username=="toprak" && password=="456") { window.location="./PASS/2.html"; done=1; }
if (username=="emre" && password=="789") { window.location="./PASS/3.html"; done=1; }
if (username=="yavuz" && password=="101112") { window.location="./PASS/4.html"; done=1; }
if (username=="efe" && password=="131415") { window.location="./PASS/5.html"; done=1; }
if (username=="aykut" && password=="161718") { window.location="./PASS/6.html"; done=1; }
if (username=="irem" && password=="192021") { window.location="./PASS/7.html"; done=1; }
if (username=="ezgi" && password=="222324") { window.location="./PASS/8.html"; done=1; }
if (username=="ömer" && password=="809903") { window.location="./PASS/9.html"; done=1; }
if (username=="enes" && password=="282930") { window.location="./PASS/10.html"; done=1; }
if (done==0) { window.location="./login_00.html"; }
}
// End -->

Begin
function Login(){
var done=0;
var password=document.login.password.value;
password=password.toLowerCase();
if (password=="123") { window.location="PASS/1/menu.html"; done=1; }
if (done==0) { window.location="./index.html"; }
}
// End -->