const ItemPrice = document.querySelector("#price");
const ItemTip = document.querySelector("#tip");
const NumPeople = document.querySelector("#people");
const deleteAll = document.querySelector('.btn2');


function calculate(){
    //Tip Amount
    let tip = (ItemTip.valueAsNumber/100) 
    let tipValue = (ItemPrice.valueAsNumber * (tip));
    //Total Amount
    let totalValue = ((ItemPrice.valueAsNumber) + (tipValue));
    //Tip per Person
    let individualTip = ((tipValue) / (NumPeople.valueAsNumber));
    //Total per Person
    let individualTotal = ((totalValue) / (NumPeople.valueAsNumber));

    if (ItemPrice.valueAsNumber=="" || ItemTip.value=="" ||
    NumPeople.value==""){
        setTimeout(() => {
           document.getElementById('emptyField').innerHTML = 
           "Please input all empty fields.";
           document.getElementById('emptyField').style.textAlign = 
           "center"
            setTimeout(() => {
                document.getElementById('emptyField').textContent = "";
            }, 1500);
        },150);

   }else{
    document.getElementById("result").innerHTML = "Result"
    document.getElementById("tipDisplay").innerHTML = "Total Tip : ";
    document.getElementById("tipDisplay2").innerHTML = "$" +String(tipValue);


       
       
       
    document.getElementById("totalAmount").innerHTML = "Total Amount : ";
    document.getElementById("totalAmount2").innerHTML = "$" +String(totalValue);

       
   
       
    document.getElementById("perPerson").innerHTML = "Tip Per Person : ";
    document.getElementById("perPerson2").innerHTML = "$" +String(individualTip);

       
       
      
    document.getElementById("totalPerPerson").innerHTML = "Total Per Person : ";
    document.getElementById("totalPerPerson2").innerHTML = "$" +String(individualTotal);
   }
   
}

let inputs = document.querySelectorAll("input");

deleteAll.addEventListener('click', () =>{
    inputs.forEach(input => input.value = "");

    document.getElementById("result").innerHTML = ""

    document.getElementById("tipDisplay").innerHTML = "";
    document.getElementById("tipDisplay2").innerHTML = "";

    document.getElementById("totalAmount").innerHTML = "";
    document.getElementById("totalAmount2").innerHTML = "";

    document.getElementById("perPerson").innerHTML = "";
    document.getElementById("perPerson2").innerHTML = "";

    document.getElementById("totalPerPerson").innerHTML = "";
    document.getElementById("totalPerPerson2").innerHTML = "";
});
