// get fata function 
function getData(id) {
    const dataText =document.getElementById(id).value;
    const data = parseInt(dataText);
    
    return data;
}
// add data to the html file
function addData(id, data) {
    document.getElementById(id).innerText = data;
}
// expense calculate button  
document.getElementById('expensebutton').addEventListener('click', function(){
    const monthlyIncome = getData('monthlyincomeiput');
    
    // expense calculate 
    const rentAmount = getData('rent')
    const foodAmount = getData('food')
    const clothAmount = getData('cloth')
    const totalExpense = rentAmount + foodAmount + clothAmount;
    //available balance 
    const availableBalance = monthlyIncome - totalExpense;

    if (monthlyIncome < 0 || rentAmount < 0 || foodAmount < 0 || clothAmount < 0) {
     document.getElementById('negativealert').classList.remove('d-none');
    }else if (totalExpense > monthlyIncome) {
     document.getElementById('alert').classList.remove('d-none');
    } else {
        addData('totalexpense', totalExpense);
        addData('totalebalance', availableBalance);
        document.getElementById('alert').classList.add('d-none');
        document.getElementById('negativealert').classList.add('d-none');
    }
})
//savings button 
document.getElementById('savingsbutton').addEventListener('click', function() {
    const monthlyIncome = getData('monthlyincomeiput');
    const savings = (monthlyIncome/100) * getData('savingsinput');
   if (getData('savingsinput') < 0) {
    document.getElementById('savingsnegativealert').classList.remove('d-none');
   }else{
    addData('savings', savings);
    document.getElementById('savingsnegativealert').classList.add('d-none');
   }
//    total balance calculate
   const availableBalance =parseInt(document.getElementById('totalebalance').innerText);
   const balance = availableBalance - savings;
   if (savings > availableBalance) {
    document.getElementById('savingsalert').classList.remove('d-none');
   } else{
    addData('balance', balance);
    document.getElementById('savingsalert').classList.add('d-none');
   }

})