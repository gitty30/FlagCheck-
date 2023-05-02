let srchbtn=document.getElementById('search-btn');
let countryinp=document.getElementById('country-inp');

srchbtn.addEventListener("click",()=>{
    let inpval=countryinp.value;

   let Url=`
   https://restcountries.com/v3.1/name/${inpval}?fullText=true`;
    console.log(Url);

    fetch(Url)
    .then((response)=>response.json())
    .then((data)=>{
        data=data[0];
        console.log(data);
        console.log(data.name.common);
        console.log(data.currencies);
        console.log(Object.keys(data.currencies));        
        let html=`
        <img src="${data.flags.svg}" class="flag-img">
        <h2>${data.name.common}</h2>
        <div class="wrapper">
            <div class="data wrapper">
                <h4>Capital: </h4>
                <span>${data.capital}</span>
            </div>
        </div>
        <div class="wrapper">
        <div class="data wrapper">
            <h4>Continent: </h4>
            <span>${data.continents}</span>
        </div>
        <div class="wrapper">
        <div class="data wrapper">
            <h4>Population: </h4>
            <span>${data.population}</span>
        </div>

        <div class="wrapper">
        <div class="data wrapper">
            <h4>Currency: </h4>
            <span>${data.currencies[Object.keys(data.currencies)].name}-${Object.keys(data.currencies)}</span>
        </div>

        <div class="wrapper">
        <div class="data wrapper">
            <h4>Common Languages: </h4>
            <span>${Object.values(data.languages).toString().split(',').join(', ')}</span>
        </div>
    </div>
        `;


        result.innerHTML=html;

    })
    .catch(()=>{
        let html="";
        if(inpval.length===0)
        {
            html="<h3>Please enter a Country name first!</h3>";
        }
        else
        {
             html="<h3>Invalid Country name!!</h3>";
        }

        result.innerHTML=html;
    })
   
})