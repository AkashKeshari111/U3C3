// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time


arr=JSON.parse(localStorage.getItem("movie"))

let dmovie=document.getElementById("movie")

arr.forEach(function(ele){
    dmovie.innerHTML=null
    let div2=document.createElement("div")
  
    let h1=document.createElement("h1")
    let poster=document.createElement("img")

    h1.innerText=ele.Title;
    poster.src=ele.Poster;

    div2.append(h1,poster)
    dmovie.append(div2)

})


arr_wallet=JSON.parse(localStorage.getItem("amount"))

let out=arr_wallet.reduce(function(sum,ele){
    return sum+=Number(ele)
},0)
let h1=document.querySelector("#wallet")
h1.innerText=out


function booking(){
let name=document.getElementById("user_name").value
let seat=document.getElementById("number_of_seats").value

let cost_of_seat=100*seat;

let remaining_cost;
if(cost_of_seat>out){
    alert("Insufficient Balance!")
}
else{
    alert("Booking successful!")
   
     remaining_cost=out-cost_of_seat;

   let wallet= document.getElementById("wallet")
   wallet.innerText= remaining_cost;
   
   
   localStorage.setItem("amount",JSON.stringify(arr_wallet))
}
}





