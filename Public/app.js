
//==================================firebase config
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-analytics.js";
 import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-database.js";

 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyA4gC3IyhMUeM9NingdpWuoGmSFzHCZfwQ",
   authDomain: "my-website-af0e4.firebaseapp.com",
   projectId: "my-website-af0e4",
   storageBucket: "my-website-af0e4.appspot.com",
   messagingSenderId: "988427491918",
   appId: "1:988427491918:web:c5e1323c2e1b36434e811f",
   measurementId: "G-CX3ZMRZD5M"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
 const db = getDatabase();


//===========================product click code
  var displayingpopup = document.getElementById("displayingpopup");
var img1=document.getElementById("img1");
var productcode;


window.chk1=function(){ 
  displayingpopup=displayingpopup.style.display="block";
  displayingpopup = document.getElementById("displayingpopup");
  img1.innerHTML=`<img
  class="w-25 shadow rounded" src="images/pic (1).jpg" alt=""><p class="fs-1 d-inline-block text-right ms-5 ps-5 text-success">Product Code:1</p>`;
  productcode="Product Code:1";
  
  }
window.chk2=function(){
  displayingpopup=displayingpopup.style.display="block";
  displayingpopup = document.getElementById("displayingpopup");
  img1.innerHTML=`<img
  class="w-25 shadow rounded" src="images/pic (2).jpg" alt=""><p class="fs-1 d-inline-block text-right ms-5 ps-5 text-success">Product Code:2</p>`;
  productcode="Product Code:2"; }
window.chk3=function(){
  displayingpopup=displayingpopup.style.display="block";
  displayingpopup = document.getElementById("displayingpopup");
  img1.innerHTML=`<img
  class="w-25 shadow rounded" src="images/pic (3).jpg" alt=""><p class="fs-1 d-inline-block text-right ms-5 ps-5 text-success">Product Code:3</p>`;
  productcode="Product Code:3"; }
window.chk4=function(){
  displayingpopup=displayingpopup.style.display="block";
  displayingpopup = document.getElementById("displayingpopup");
  img1.innerHTML=`<img
  class="w-25 shadow rounded" src="images/pic (4).jpg" alt=""><p class="fs-1 d-inline-block text-right ms-5 ps-5 text-success">Product Code:4</p>`;
  productcode="Product Code:4"; }
window.chk5=function(){
  displayingpopup=displayingpopup.style.display="block";
  displayingpopup = document.getElementById("displayingpopup");
  img1.innerHTML=`<img
  class="w-25 shadow rounded" src="images/pic (5).jpg" alt=""><p class="fs-1 d-inline-block text-right ms-5 ps-5 text-success">Product Code:5</p>`;
   productcode="Product Code:5";}
window.chk6=function(){
  displayingpopup=displayingpopup.style.display="block";
  displayingpopup = document.getElementById("displayingpopup");
  img1.innerHTML=`<img
  class="w-25 shadow rounded" src="images/pic (6).jpg" alt=""><p class="fs-1 d-inline-block text-right ms-5 ps-5 text-success">Product Code:6</p>`;
  productcode="Product Code:6"; }
window.chk7=function(){
  displayingpopup=displayingpopup.style.display="block";
  displayingpopup = document.getElementById("displayingpopup");
  img1.innerHTML=`<img
  class="w-25 shadow rounded" src="images/pic (7).jpg" alt=""><p class="fs-1 d-inline-block text-right ms-5 ps-5 text-success">Product Code:7</p>`;
  productcode="Product Code:7"; }
window.chk8=function(){
  displayingpopup=displayingpopup.style.display="block";
  displayingpopup = document.getElementById("displayingpopup");
  img1.innerHTML=`<img
  class="w-25 shadow rounded" src="images/pic (8).jpg" alt=""><p class="fs-1 d-inline-block text-right ms-5 ps-5 text-success">Product Code:8</p>`;
   productcode="Product Code:8";}
window.chk9=function(){
  displayingpopup=displayingpopup.style.display="block";
  displayingpopup = document.getElementById("displayingpopup");
  img1.innerHTML=`<img
  class="w-25 shadow rounded" src="images/pic (9).jpg" alt=""><p class="fs-1 d-inline-block text-right ms-5 ps-5 text-success">Product Code:9</p>`;
   productcode="Product Code:9";}
window.chk10=function(){
  displayingpopup=displayingpopup.style.display="block";
  displayingpopup = document.getElementById("displayingpopup");
  img1.innerHTML=`<img
  class="w-25 shadow rounded" src="images/pic (10).jpg" alt=""><p class="fs-1 d-inline-block text-right ms-5 ps-5 text-success">Product Code:10</p>`;
  productcode="Product Code:10"; }
window.chk11=function(){
  displayingpopup=displayingpopup.style.display="block";
  displayingpopup = document.getElementById("displayingpopup");
  img1.innerHTML=`<img
  class="w-25 shadow rounded" src="images/pic (11).jpg" alt=""><p class="fs-1 d-inline-block text-right ms-5 ps-5 text-success">Product Code:11</p>`;
  productcode="Product Code:11"; }
window.chk12=function(){
  displayingpopup=displayingpopup.style.display="block";
  displayingpopup = document.getElementById("displayingpopup");
  img1.innerHTML=`<img
  class="w-25 shadow rounded" src="images/pic (12).jpg" alt=""><p class="fs-1 d-inline-block text-right ms-5 ps-5 text-success">Product Code:12</p>`;
  productcode="Product Code:12"; }

window.cross=function(){
    displayingpopup=displayingpopup.style.display="none";
    
    displayingpopup = document.getElementById("displayingpopup");
    img1.innerHTML="";
}
 
window.submitbtn=function(){
var obj={};
obj.name=document.getElementById("name").value;
obj.contactnumber=document.getElementById("contactnumber").value;
obj.address=document.getElementById("address").value;
obj.quantity=document.getElementById("quantity").value;
obj.description=document.getElementById("description").value;
obj.productcode=productcode;
cross();
const submitRef = ref(db, 'submit');
const newPostRef = push(submitRef);
obj.id=newPostRef.key;
set(newPostRef,obj).then(function(){console.log("succcess");}).catch(function(err){console.log(err)});

console.log(obj);
}









