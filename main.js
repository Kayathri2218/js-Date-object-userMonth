
//user months value

let months = new Date();
let mon = months.getMonth("month");
let month = parseInt(prompt("Enter the month:"))

if (month <= 3){
    console.log("SPring");
}else if (month <= 7){
    console.log("Summar");
}else if (month <= 11){
    console.log("Winter");
}else if (month > 12){
    console.log("Corrent Session");
}