// Store the wallet amount to your local storage with key "amount"

arr_wallet=JSON.parse(localStorage.getItem("amount"))||[]
function btn_wallet(){


    let amt=document.getElementById("amount").value
    
     arr_wallet.push(amt)

    let out= arr_wallet.reduce(function(sum,ele){

         return sum+=Number(ele)
      
     },0)

     let h1=document.getElementById("wallet")

        h1.innerHTML=out

    localStorage.setItem("amount",JSON.stringify(arr_wallet))

}