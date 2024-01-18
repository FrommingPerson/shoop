let categories = [
    {
      title: "Все категории",
    },
    {
        title: "Зубные щетки",
    },
    {
        title: "Телефоны",
    },
    {
        title: "Спортинвентарь",
    },
    {
        title: "Радионяни",
    },
    {
        title: "Наушники",
    },
    ];


let start = 0;
for (const category of categories) {
    category.id = start;
    start += 1;
}

export default categories;