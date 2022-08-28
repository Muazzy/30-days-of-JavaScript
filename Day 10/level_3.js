// How many languages are there in the countries object file.

function getAllLanguages(arr) {
    let languages = []

    arr.forEach(country => {
        country.languages.forEach(language => {
            languages.push(language)

        });
    });
    // return languages //this would have also returned the duplicates
    return new Set(languages) //this way only unique elements will be returned
}


console.log('No: of languages in the countries file are', getAllLanguages(countries).size) //112, 



// *** Use the countries data to find the 10 most spoken languages:
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
console.log(mostSpokenLanguages(countries, 10))