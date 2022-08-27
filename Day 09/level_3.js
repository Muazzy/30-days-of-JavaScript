
// *** Find the 10 most spoken languages:

// 1. Use the countries information, in the data folder.Sort countries by name, by capital, by population
// const sortByName = countries.sort((element1, element2) => {

//     return element1.name > element2.name

// })
// console.log(sortByName)


// const sortByCapital = countries.sort((element1, element2) => {

//     return element1.capital > element2.capital

// })
// console.log(sortByCapital)


// const sortByPopulation = countries.sort((element1, element2) => {
//     return element1.population - element2.population
// })
// console.log(sortByPopulation)


// Find the 10 most spoken languages:

function getAllLanguages(arr) {
    let languages = []

    arr.forEach(country => {
        country.languages.forEach(language => {
            if (languages.indexOf(language) === -1) {
                languages.push(language)
            }
        });
    });

    return languages
}

// console.log(getAllLanguages(countries).sort())

function mostSpokenLanguages(countries, n) {
    let languagesWithTheirCount = []
    let allLanguages = getAllLanguages(countries)
    allLanguages.forEach(
        (language) => {
            let countriesWithXLanguage = []
            countriesWithXLanguage = countries.filter((country) => {
                return country.languages.some((lang) => {
                    return lang === language
                })
            })
            languagesWithTheirCount.push({ language: language, count: countriesWithXLanguage.length })
        }
    )
    // descending sort
    languagesWithTheirCount.sort((element1, element2) => element2.count - element1.count)
    return languagesWithTheirCount.slice(0, n)
}
console.log(mostSpokenLanguages(countries, 20))



function mostPopulatedCountries(countries, n) {

    let mostPopulatedCountries = []
    //descending sort
    countries.sort((element1, element2) => element2.population - element1.population)

    countries.forEach((element, index) => {
        if (index < n) {
            mostPopulatedCountries.push({ country: element.name, population: element.population })
        }
    })
    return mostPopulatedCountries
}

console.log(mostPopulatedCountries(countries, 6))

