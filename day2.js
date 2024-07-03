const days=['sunday','monday','tuesday','wednesday']

// function greet(){
//     console.log('hello world');
// }

// class person(){
//     // name = 'aryan' proporties

//     greet(){
//     console.log('hello world');
//     }
// }
// days.push('sneha')
// days.pop()
// days.unshift('hello')
// days.shift('hello')
// const data = days.slice(1,7)
// days.splice(0,1,'dina')
// console.log(days);
// days.splice(3,1, 'bye')
// console.log(days);
// const data =[1,2,3,4,5,6]
// data.splice(1,3,'hello','bye','world')
// console.log(data);

// const vowels =['a','r','y','a','n']

// vowels.splice(0,5,'1','2','3','4','5','6')
// console.log(vowels);

// const text = 'My name is aryan.'
// const splittedData = text.split(' ')
// console.log(splittedData);

// const language =['js','php','css']

// language.splice(1,0,'html')
// console.log(language);


// function greet(name){
//     console.log('hello' + name);
// }

// greet(name)

const person = Object.freeze({
    name : 'aryan',
    age : 20,
    address : 'tarahara'
})

// person.age = 30

console.log(person);

console.log(person.address);

// const test = [
//     {
//         name : 'aryan',
//     }
//     {
//         name : 'isung'
//     }

// ]

// test.push({
//     name : 'megha'
// })

// const datas = {
//     name : ['aryan','isung','sneha']
// }

// datas.name.push('megha')
// console.log(datas);


const test2 = {
    name : ['aryan','prajwal','bidhata','ngela']
}
test2.name.splice(0,4,'1','2','3','4')
console.log(test2);


