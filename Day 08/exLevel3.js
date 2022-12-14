// personAccount = {}
// personAccount.firstName = 'Muazzam'
// personAccount.lastName = 'Soomro'
// personAccount.freelance_income = 500
// personAccount.salary_income = 25000
// personAccount.anual_income = 100000
// personAccount.waterBill = 530
// personAccount.food = 8000


// personAccount.totalIncome = function () {
//     return (this.freelance_income * 12) + (this.salary_income * 12) + this.anual_income;
// }

const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt: '08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt: '08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt: '08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt: '08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt: '08/01/2020 10:00 AM',
        isLoggedIn: false
    }
];

const products = [
    {
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [
            { userId: 'fg12cy', rate: 5 },
            { userId: 'zwf8md', rate: 4.5 }
        ],
        likes: []
    },
    {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy']
    },
    {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [{ userId: 'fg12cy', rate: 5 }],
        likes: ['fg12cy']
    }
];

let usr1 = {
    _id: 'fg12cy',
    username: 'Muazzam',
    email: 'alex@alex.com',
    password: '123123',
    createdAt: '08/01/2020 9:00 AM',
    isLoggedIn: false
}

let usr2 = {
    _id: 'xx8969',
    username: 'Muazzam',
    email: 'alex@alex.com',
    password: '123123',
    createdAt: '08/01/2020 9:00 AM',
    isLoggedIn: false
}

function signUp(newUser) {
    for (user of users) {
        if (newUser._id === user._id) {
            console.log('You already have an account.\nSign In')
        }
    }

    users.push(newUser)
}

// signUp(usr1)

// console.log(users)

function signIn(newUser) {
    isAccountCreated = false
    for (user of users) {
        if (newUser._id === user._id) {
            isAccountCreated = true
            user.isLoggedIn = true
            console.log('Logged in')
        }
    }
    if (!isAccountCreated) {
        console.log('you dont have an account.\nSign up')
    }
}


// signIn(usr1) //Logged in
// signIn(usr2) //you dont have an account. Sign up

function rateProducts(prodId, userId, rate) {

    let found = false;
    for (prod of products) {
        if (prodId === prod._id) {
            found = true
            prod.ratings.push({ userId: userId, rate: rate })
            return
        }
    }

    if (!found) {
        return 'product not found'
    }
}

console.log(products)
rateProducts('hedfcg', 'uid69', 5)

console.log(products)

// b. Create a function called averageRating which calculate the average rating of a product
function averageRating(product) {
    let avgRating = 0
    let ratings = product.ratings;
    for (rating of ratings) {
        avgRating += rating.rate
    }
    return avgRating / ratings.length
}

dummyProduct = {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
        { userId: 'fg12cy', rate: 5 },
        { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
};

console.log(averageRating(dummyProduct))

// Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.

function likeProduct(product, user) {
    let uId = user._id;
    let likes = product.likes;

    if (likes.includes(uId)) {
        product.likes.splice(likes.indexOf(uId), 1)
    }
    else {
        product.likes.push(uId)
    }
    return product;
}



console.log(likeProduct(dummyProduct, usr2))
console.log(likeProduct(dummyProduct, usr2))
