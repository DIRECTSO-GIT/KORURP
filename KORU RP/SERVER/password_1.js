Begin
function Login(){
var done=0;
var password=document.login.password.value;
password=password.toLowerCase();
if (password=="192837465") { window.location="./PASS/11.html"; done=1; }
if (password=="123") { window.location="./PASS/1/menu.html"; done=1; }
if (password=="456") { window.location="./PASS/2/menu.html"; done=1; }
if (password=="789") { window.location="./PASS/3/menu.html"; done=1; }
if (password=="101112") { window.location="./PASS/4/menu.html"; done=1; }
if (password=="131415") { window.location="./PASS/5/menu.html"; done=1; }
if (password=="161718") { window.location="./PASS/6/menu.html"; done=1; }
if (password=="192021") { window.location="./PASS/7/menu.html"; done=1; }
if (password=="222324") { window.location="./PASS/8/menu.html"; done=1; }
if (password=="809903") { window.location="./PASS/9/menu.html"; done=1; }
if (password=="282930") { window.location="./PASS/10/menu.html"; done=1; }
if (done==0) { window.location="./index.html"; }
}
// End -->
