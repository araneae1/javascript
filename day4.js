// // callback function --> a finction which gors as an argument in another function


// getsomething(){
//     console.log(prajwal.code[0].userId);
//     console.log(prajwal.code[0].title);
//     console.log(prajwal.code[0].ipAddress);
// }

// getsomething(function(){

// })


// const fruits =['apple','mango']

// fruits.forEach(function(fruit){
//     console.log(fruit);

// })
    
// fruits.map(function(fruit){
//     console.log(fruit);
// })

// fruits.filter(function(){

// })

// const num = [1,2,3,4]
// const square =[]
// num.forEach(function(nums){
//     square.push(nums*nums)
// })
// console.log(square)


// const data = [
//     {
//     firstname:'aryan',
//     lastname:'rajbhandari',
//     address:'tarahara'
//     },
//     {
//         firstname:'prajwal',
//         lastname:'rai',
//         address:'chatara'
//     },
//     {
//         firstname:'dina',
//         lastname:'guragain',
//         address:'halgada'
//     }
// ]
// // const names=[]
// data.forEach((hello)=>{
//     console.log(hello.firstname+' '+hello.lastname)
// })

// const num3 =[1,2,3,4,5,6,7,8,9]

// const squared = num3.map((num)=>{
//     return num*num*num
// })

// console.log(squared);


const datas = [
    {
    firstname:'aryan',
    lastname:'rajbhandari',
    address:'tarahara'
    },
    {
        firstname:'prajwal',
        lastname:'rai',
        address:'chatara'
    },
    {
        firstname:'dina',
        lastname:'guragain',
        address:'halgada'
    }
]

const results = datas.map((object)=>{
    return {
        fullname:object.firstname+' '+object.lastname,
    }
})
console.log(results);


const resulted = datas.map((object)=>{
    return {
        ...object,
        fullname:object.firstname+' '+object.lastname,
    }
})
console.log(resulted);


// const num4 =[1,2,3,4,5]

// const num5 = num4.map((num7)=>{
//     return {
//         text: 'A',
//         value: num7
//     }
// })
// // --.map returns and reupdate the value o the array
// // --.forEach is used as a loop in the array
// console.log(num5);

const number =[1,2,3,4,5,6,7,8,9,11,12]

const oddnumber = number.filter((num8)=>{
    return num8%2 !==0
})

console.log(oddnumber);

const number1 =[1,2,3,4,5,6,7,8,9,11,12]

const biggerThan5 = number1.filter((nge)=>{
    return nge>5
})

console.log(biggerThan5);

books = [
    {
        title : "You can win",
        author : 'shiv khera',
        publishedAt : 2001
    },
    {
        title : "Think like a monk",
        author : 'Jay shetty',
        publishedAt : 2022
    },
    {
        title : "Cashflow quadrant",
        author : 'Robert T. Kiyosaki',
        publishedAt : 1909
    },
    {
        title : "You can win2",
        author : 'shiv khera',
        publishedAt : 1990
    },
    {
        title : "Think like a monk2",
        author : 'Jay shetty',
        publishedAt : 1999
    },
    {
        title : "Cashflow quadrant2",
        author : 'Robert T. Kiyosaki',
        publishedAt : 2010
    }
]

const date = books.filter((pub)=>{
    return pub.publishedAt > 2000
})

console.log(date)

const files =['index.html','app.py','app.py','style.css','test.py']

const file= files.filter((pro)=>{
    return pro.includes('.py')
})

console.log(file);

const lasttask = [1,2,null,undefined,'aryan','bemishal','isung']

const last = lasttask.filter((task)=>{
    return task !== null && task !== undefined;
})

console.log(last);

const lastdata=[
    {
        name : "Manish",
        marks : 800,
        status : "pass"
    },
    {
        name : "Anish",
        marks : 500,
        status : "fail"
    },
    {
        name : "Pranjal",
        marks : 900,
        status : "pass"
    },
    {
        name : "Bob",
        marks : 100,
        status : "fail"
    },
    {
        name : "Hari",
        marks : 550,
        status : "fail"
    },
    {
        name : "Shyam",
        marks : 600,
        status : "pass"
    },
    {
        name : "Laxman",
        marks : 300,
        status : "fail"
    }
]

const Last = lastdata.filter((Data)=>{
    return Data.marks > 500 && Data.name.endsWith('sh') && Data.status ==="pass"
        
})

console.log(Last);
