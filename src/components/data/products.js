let products = [
    {
        categoriesId: 4,
        title: 'Радионяня Motorola MBP16',
        price: 3690,
        path_to_img: "/img/radio.jpg"
    },
    {
        categoriesId: 1,
        title: 'Ультразвуковая зубная щётка Playbrush Smart Sonic',
        price: 5660,
        path_to_img: "/img/toothbrush.jpg",
    },
    {
        categoriesId: 1,
        title: 'Ультразвуковая зубная щётка Playbrush Smart Sonic',
        price: 5660,
        path_to_img: "/img/toothbrush.jpg",
    },
    {
        categoriesId: 1,
        title: 'Ультразвуковая зубная щётка Playbrush Smart Sonic',
        price: 5660,
        path_to_img: "/img/toothbrush.jpg",
    },
    {
        categoriesId: 1,
        title: 'Ультразвуковая зубная щётка Playbrush Smart Sonic',
        price: 5660,
        path_to_img: "/img/toothbrush.jpg",
    },
    {
        categoriesId: 1,
        title: 'Ультразвуковая зубная щётка Playbrush Smart Sonic',
        price: 5660,
        path_to_img: "/img/toothbrush.jpg",
    },
    {
        categoriesId: 3,
        title: "Электроскутер",
        price: 56680,
        path_to_img: "public/img/wheels.jpg",
    },
    {
        categoriesId: 5,
        title: "Наушники Airpods",
        price: 20000,
        path_to_img: "/img/airpods.jpg",
    },
    {
        categoriesId: 3,
        title: "Доска",
        price: 600,
        path_to_img: "/img/board.jpg",
    },
    {
        categoriesId: 2,
        title: "Смартфон, который не айфон",
        price: 59000,
        path_to_img: "/img/phone.jpg",
    },
    {
        categoriesId: 2,
        title: "Смартфон, который никто не купит",
        price: 24999,
        path_to_img: "/img/phone-2.jpg",
    },
    {
        categoriesId: 4,
        title: "Радио социалистического фактора",
        price: 100,
        path_to_img: "/img/radio.jpg",
    },
    {
        categoriesId: 3,
        title: "Электроскутер",
        price: 17999,
        path_to_img: "/img/scooter.jpg/",
    },
]

let start = 0;
for (const product of products) {
    start += 1;
    product.id = start;
}

products = products.sort(function (a, b) {
    let nameA = a.title,
        nameB = b.title;
    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }
    return 0;
});

console.log(products.length);
export default products;




