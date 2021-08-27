const allCountry = () => {
    fetch("https://restcountries.eu/rest/v2/all")
        .then(resp => resp.json())
        .then(data => displayCountries(data))
}
allCountry()

const displayCountries = countries => {
    // console.log(countries);
    // for (const country of countries) {
    //     console.log(country);
    // }

    countries.forEach(country => {
        // output selector 
        const coutnrySection = document.getElementById("country-section")

        // creta element 

        const div = document.createElement("div")
        const clsList = ['card', 'col-lg-2', 'col-md-3', 'col-sm-4', 'd-flex', 'p-2', 'm-2', 'justify-content-around']
        div.classList.add(...clsList)
        const h5 = document.createElement("h5")
        // h5.innerText = country.name

        // const p = document.createElement("p")
        // const img = document.createElement("img");
        // < div class="d-flex  justify-content-between" >
        //     <span>C : ${country.capital}</span>
        //     <span>P: ${country.population}</span>
        // </ >
        div.innerHTML = `
            <h5>${country.name}</h5>
            <img src="${country.flag}">
            
            <button class="btn btn-info mt-2" onclick="loadDeteles( '${country.name}')" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Detitles</button>
        `


        // img.src = country.flag;


        // append 
        // div.appendChild(img)
        // div.appendChild(h5)
        // div.appendChild(p)

        coutnrySection.appendChild(div)


    })
}
const loadDeteles = (name) => {
    const url = `https://restcountries.eu/rest/v2/name/${name} `

    fetch(url)
        .then(res => res.json())
        .then(date => displayCountryDetil(date[0]))

}
const displayCountryDetil = country => {
    console.log(country);
    const modalSection = document.getElementById("modeal-setion")
    modalSection.innerHTML =
        `
    
                
                            <div class="container-fluid">
                                <div class="row mx-auto justify-content-center">
                                    <div class="col-md-2 text-center" >
                                    <img src="${country.flag}" class="img-thumbnail"">
                                    </div>
                                </div>
                                
                                <div class="row">
                                <table class="table">
                                     
                                        <tbody>
                                            <tr>
                                            <th>Capital</th>
                                            <td>${country.capital}</td>
                                         </tr>
                                            <tr>
                                            <th>Population</th>
                                            <td>${country.population}</td>
                                         </tr>
                                            <tr>
                                            <th>area</th>
                                            <td>${country.area}</td>
                                         </tr>
                                            <tr>
                                            <th>callingCodes</th>
                                            <td>${country.callingCodes}</td>
                                         </tr>
                                            <tr>
                                            <th>Borders</th>
                                            <td>${country.borders}</td>
                                         </tr>
                                            <tr>
                                            <th>currencies</th>
                                            <td>${country.currencies[0].symbol} : ${country.currencies[0].name}</td>
                                         </tr>
                                            <tr>
                                            <th>Languages</th>
                                            <td>${country.languages[0].name}</td>
                                         </tr>
                                            <tr>
                                            <th>Region</th>
                                            <td>${country.region}</td>
                                         </tr>

                                        </tbody>
                                        </table>
                                </div>

                            </div>
                       
        `

}