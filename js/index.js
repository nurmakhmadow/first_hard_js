// Отфильтровать задачи в переменные а и b
    // Сохранить количество в ключе count
    // Сохранить сами задачи в массиве-ключе arr
    let arr = [
        {
            "userId": 1,
            "id": 1,
            "title": "delectus aut au`tem",
            "completed": false
        },
        {
            "userId": 1,
            "id": 2,
            "title": "quis ut nam facilis et officia qui",
            "completed": false
        },
        {
            "userId": 1,
            "id": 3,
            "title": "fugiat veniam minus",
            "completed": false
        },
        {
            "userId": 1,
            "id": 4,
            "title": "et porro tempora",
  
            "completed": 
true
        },
        {
            "userId": 1,
            "id": 5,
            "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
            "completed": false
        },
        {
            "userId": 1,
            "id": 6,
            "title": "qui ullam ratione quibusdam voluptatem quia omnis",
            "completed": false
        },
        {
            "userId": 1,
            "id": 7,
            "title": "illo expedita consequatur quia in",
            "completed": false
        },
        {
            "userId": 1,
            "id": 8,
            "title": "quo adipisci enim quam ut ab",
            "completed": true
        },
        {
            "userId": 1,
   
            "id": 9,
            "title": "molestiae perspiciatis ipsa",
            "completed": false
        },
        {
            "userId": 1,
            "id": 10,
            "title": "illo est ratione doloremque quia maiores aut",
            "completed": true
        },
    ]
    let a = {
        count: 0,
        arr: []
    }
    console.log(a);
   
    let b = {
        count: 0,
        arr: []
    }
    console.log(b);


let fullinfo = [...arr]

let kalit = Object.keys(fullinfo)
console.log(kalit);
let info = Object.values(fullinfo)
console.log(info);



let middle = fullinfo.filter(item => {
    if(item.completed === true){
       a.arr.push(item.completed) && a.count++
    } else {
        b.arr.push(item.completed) && b.count++
    } 
    }
)


