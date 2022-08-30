
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




// *** Try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create an object called statistics and create all the functions which do statistical calculations as method for the statistics object. Check the output below.
// const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

// console.log('Count:', statistics.count()) // 25
// console.log('Sum: ', statistics.sum()) // 744
// console.log('Min: ', statistics.min()) // 24
// console.log('Max: ', statistics.max()) // 38
// console.log('Range: ', statistics.range() // 14
// console.log('Mean: ', statistics.mean()) // 30
// console.log('Median: ',statistics.median()) // 29
// console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
// console.log('Variance: ',statistics.var()) // 17.5
// console.log('Standard Deviation: ', statistics.std()) // 4.2
// console.log('Variance: ',statistics.var()) // 17.5
// console.log('Frequency Distribution: ',statistics.freqDist()) # [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]

// console.log(statistics.describe())
// Count: 25
// Sum:  744
// Min:  24
// Max:  38
// Range:  14
// Mean:  30
// Median:  29
// Mode:  (26, 5)
// Variance:  17.5
// Standard Deviation:  4.2
// Frequency Distribution: [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]