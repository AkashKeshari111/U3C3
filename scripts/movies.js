// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page




async function search_movie(){
    try{
        let search=document.getElementById("search").value
        url=`http://www.omdbapi.com/?apikey=4ad0b8ff&s=${search}`
  
        let res=await fetch(url)
        let data=await res.json();
        console.log(data.Search)
         let movie=data.Search
         return movie
    }
    catch(err){
        console.log(err)
    }
}


function append_data(data){
    let movie_div=document.getElementById("movies")
    movie_div.innerText=null
    data.forEach(function(ele){
        let div1=document.createElement("div")
        let poster=document.createElement("img")
        let title=document.createElement("h2")
        let book=document.createElement("button")


        poster.src=ele.Poster;
        poster.id="img1"
        title.innerText=ele.Title;
        book.class="book_now"
        book.innerText="Book now"
        book.addEventListener("click",function(){
            bookfun(ele)
        })
        div1.append(poster,title,book)
        movie_div.append(div1)
    })
}


async function main(){
    let data=await search_movie();

    if(data===undefined){
        return false
    }

    append_data(data)
}

let id;
function debounce(func,delay){
   if(id){
       clearTimeout(id)
   }

   id=setTimeout(function(){
       func();
   },delay)
}
arr=JSON.parse(localStorage.getItem("movie"))||[]
function  bookfun(ele){
    arr.push(ele)
    localStorage.setItem("movie",JSON.stringify(arr))
    window.location.href="checkout.html";

}


arr_wallet=JSON.parse(localStorage.getItem("amount"))

let out=arr_wallet.reduce(function(sum,ele){
    return sum+=Number(ele)
},0)
let h1=document.querySelector("#wallet")
h1.innerText=out

