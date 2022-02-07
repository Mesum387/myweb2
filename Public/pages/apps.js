// ==================== firebase Config ======================
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-analytics.js";
import {
  getDatabase,
  ref,
  onValue,
} from "https://www.gstatic.com/firebasejs/9.6.3/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyA4gC3IyhMUeM9NingdpWuoGmSFzHCZfwQ",
  authDomain: "my-website-af0e4.firebaseapp.com",
  databaseURL: "https://my-website-af0e4-default-rtdb.firebaseio.com",
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
const dbRef = ref(db, "submit");

// ==================== Admin Code ======================
var win2=document.getElementById("win2");
win2.style.display="none";
var passinp=document.getElementById("passinp");
var passwordCheck = "12345678";
var passwin=document.getElementById("passwin");

window.pass=function(){

  if(passinp.value==passwordCheck){
   
    win2.style.display="block";
    passwin.style.display="none";
  }
  
};



var ordersData = [];

function renderArray() {
  var ordersList = document.getElementById("ordersList");
  ordersList.innerHTML = "";
  ordersData.forEach(function (e) {
    console.log(e);
    ordersList.innerHTML += `
    <div class="p-3 my-3 themeLight rounded shadow">
              <div class="d-flex justify-content-between">
                <h3 class="fw-bold">Name:</h3>
                <h5>${e.name} <i class="fad fa-user"></i></h5>
              </div>
              <h5>Contact Number: ${e.contactnumber}</h5>
              
              <div class="py-2">
                <div class="row">
                  <div class="col-md-3">
                    <h5>Address:  ${e.address}</h5>
                  </div>
                  <div class="col-md-3"><h5>${e.productcode}</h5>
                  </div>
                  <div class="col-md-3">
                  <div class="form-check form-switch">
                  <h5>Ordered Quantity: ${e.quantity}</h5>
                    
                    </div>
                  </div>
                  <div class="col-md-3 text-end">
                  </div>
                  </div>
                  </div>
            </div>`;
            
  });
}
// function deleteOrder(id) {
//   remove(ref(db,`submit/${id}`))
// }
onValue(
  dbRef,
  function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      ordersData.push(childSnapshot.val());
      renderArray();
      // ...
    });
  },
  {
    onlyOnce: false,
  }
);
{
  /* <button onclick="deleteOrder('${e.id}') " class="p-2 btn"><i class="fad fa-trash"></i></button> */}