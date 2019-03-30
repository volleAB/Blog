let plant = [
    {
        name: '紫罗兰',
        data: '2018'
    },
    {
        name: '梅花',
        data: '2018'
    },
    {
        name: '茉莉花',
        data: '2018'
    },
    {
        name: '月季',
        data: '2018'
    }
]

plant.sort((a, b) => {
    return a.name.localeCompare(b.name);
})

console.log(plant)