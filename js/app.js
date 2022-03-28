const countriesEl = document.querySelector('.countries')
const searchInput = document.getElementById('search-input')

// api
 const api = 'https://restcountries.com/v3.1/all'

 const sendReq = async (url)=> {
     const req = await fetch(url)
     const data = await req.json()
     showContent(data)
 }
 sendReq(api)

 const showContent = (countries)=> {
     countries.forEach((country)=> {
     const countryDiv = document.createElement('div')  
     countryDiv.classList.add('country')
     countryDiv.innerHTML = `
            <a class="country-link" href="">
                <img src=${country.flags.png} alt="" width="260" height="160">
                <h4 class="country-name">${country.name.common}</h4>
                <p class="country-population"><span>Population:</span> ${country.population}</p>
                <p class="country-region"><span>Region:</span> ${country.region}</p>
                <p class="country-capital"><span>Capital:</span> ${country.capital == undefined ? 'No capital' : country.capital}</p>
            </a>
     `
     countriesEl.appendChild(countryDiv)
     console.log(countriesEl);
     })
 }
 searchInput.addEventListener('input', ()=> {
     const searchCountry = searchInput.value.trim().toLowerCase()
     countriesEl.childNodes.forEach((country)=> {
        //  if(country.querySelector('h4').textContent.toLowerCase().includes(searchCountry)) {

        //  } else {

        //  }
            //  console.log(countriesEl.querySelector('h4').textContent);
     })
     
    //  countriesEl.childNodes[0].querySelector('h4').textContent
    //  console.log(countriesEl);
 })