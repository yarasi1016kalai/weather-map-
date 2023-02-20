document.addEventListener("DOMContentLoaded",weather)
let nav=document.createElement("div")
nav.classList.add("container-fluid","bg-danger","text-center")
let head=document.createElement("h1")
head.classList.add("fw-bolder","mb-0")
head.innerText="Weather Map"
nav.append(head)
document.body.append(nav)
let con=document.createElement("div")
con.classList.add("container","bg-primary","mt-0")
document.body.append(con)
let row=document.createElement("div")
row.classList.add("row")
con.append(row)

async function weather(){

    let res=await fetch("https://restcountries.com/v3.1/all")
    let data=await res.json()
    console.log(data);
    data.forEach(ele => {
        let div=document.createElement("div")
        div.classList.add("col-lg-4","col-sm-12")
        row.append(div)
        let card=document.createElement("div")
        card.classList.add("card","p-0","m-2","card-header","card-body","bg-secondary","bg-gradient","cardh")
        div.append(card)
        let ndiv=document.createElement("div")
        ndiv.classList.add("bg-success","text-white","text-center","cname")
        let p=document.createElement("p")
        p.classList.add("mt-3","fw-bolder")
        p.innerText=ele.name.common
        ndiv.append(p)
        card.append(ndiv)
        let idiv=document.createElement("div")
        idiv.classList.add("flag","ms-4","mt-4")
        let img=document.createElement("IMG")
        img.setAttribute("src", ele.flags.png)
        img.setAttribute("class","img")
        img.setAttribute("alt","flag")
        idiv.append(img)
        card.append(idiv)
        let cdiv=document.createElement("div")
        cdiv.classList.add("cap","text-center","p-3","text-white")
        cdiv.innerText=`Capital : ${ele.capital}`
        card.append(cdiv)
        let rdiv=document.createElement("div")
        rdiv.classList.add("reg","text-center","text-white","p-3")
        rdiv.innerText=`Region : ${ele.region}`
        card.append(rdiv)
        let codediv=document.createElement("div")
        codediv.classList.add("code","text-center","text-white","p-3")
        codediv.innerText=`Country Code : ${ele.cca3}`
        card.append(codediv)
        let btn=document.createElement("BUTTON")
        btn.classList.add("btn","btn-primary")
        btn.innerText="Click for weather"
        card.append(btn)
        btn.addEventListener("click",getweather)
        async function getweather(){
            try{
            let res=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ele.capital}&appid=e0e8cf2b4b9a9023c84456ee6032ba3e`)
            let data= await res.json()
            console.log(data)
            
               rdiv.innerText=`Temperature : ${data.main.temp}     ${data.weather[0].description}`
               rdiv.style.color = "green"
               codediv.innerText=`Humidity : ${data.main.humidity}%   Wind speed : ${data.wind.speed}km/h`
               codediv.style.backgroundColor="green"
            } 
        catch(err){
            rdiv.innerText= "oops something went wrong... try again"
        }
    }


    });

}