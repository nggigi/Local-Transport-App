
let driverlogInDetails= document.getElementById("form-el");
let customerlogInDetails= document.getElementById("form-el3");

function driver(){
driverlogInDetails.style.cssText="display:block";
customerlogInDetails.style.cssText="display:none";

}
function customer(){
    customerlogInDetails.style.cssText="display:block";
    driverlogInDetails.style.cssText="display:none";
    }