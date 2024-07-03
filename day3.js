// const isRaining = true

// if(isRaining){
//     console.log('carry umbrella');
// }else{
//     console.log('no need to carry umbrella');
// }



// const result = isRaining ? 'carry umbrella' : 'dont  need to carry umbrella';
// console.log(result);

// isRaining && console.log('carry umbrella');



// const age =43
// if(age>=18){
//     console.log('you can vote');
// }else{
//     console.log('you cannot vote');
// }

// const ages="21"
// if(ages ===21){
//     console.log('age eequal to 21');

// }else{
//     console.log('age is not equal to 21');
// }

// const temperature = 100
// if(temperature >= 30){
//     console.log('hot');
// }else if(temperature > 20) {
//     console.log('moderate');
// }else{
//     console.log('cool');
// }

// const grades =39  

// if(grades >=80 && grades <= 100){
//     console.log('A+');
// }else if(grades >=60 && grades <= 79){
//     console.log('B+');
// }else if(grades >= 40 && grades <= 59){
//     console.log('C+');
// }else if(grades >= 20 && grades <= 39){
//     console.log('D+');
// }else{
//     console.log('E+');
// }

// const days=['sunday','monday','tuesday','wednesday','thrusday','friday','saturday']

// for(var i =0; i < days.length; i++){
//     console.log(days[i]);
//     console.log(i)
// }

// for(let day of days){
//     console.log(day)
// }
// const data ={
//     name:'dina',
//     age: 21,
//     address: 'halgada'
// }
// for(let key in data){
//     console.log(key ,':' , data[key])
// }

// function add(a,b){
//     console.log(a+b);
    
// }

// add(1,2)

// const add = function(a,b){
//     console.log(a+b);
// }


// const add =(a,b)=>{
//     console.log(a+b);
// }
// add(1,2)
// const numbers =[1,2,3,4,5,6,7]


// function data(ni){
//     for(let di of ni){
//         console.log(di*di)
//     }
// }

// data(numbers)



const prajwal={
    status: 200,
    message: "Code found",
    code: [
        {
            _id: "668510da18d90581711b6292",
            text: "test\n",
            userId: "f959757",
            title: "test",
            ipAddress: "49.244.110.12",
            createdAt: "2024-07-03T08:50:34.704Z"
           
        }
    ]
}       
function ngela(prajwal){
    console.log(prajwal.code[0].userId);
    console.log(prajwal.code[0].title);
    console.log(prajwal.code[0].ipAddress);
}
ngela(prajwal)