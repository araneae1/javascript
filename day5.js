// const num = [1,2,3,4,5,6,7,8,9]

// const sum = num.reduce((a,b)=>{
//     return a*b
// },0)


// console.log(sum);

// const products = [
//     {
//         product : 'A',
//         price : 200,
//         qty : 2
//     },
//     {
//         product : 'B',
//         price : 300,
//         qty : 7
//     },
//     {
//         product : 'A',
//         price : 1100,
//         qty : 8
//     }
// ]

// const cost = products.reduce((acc,sum)=>{
//     acc.totalQty =sum.qty + acc.totalQty
//     acc.total=sum.price*sum.qty + acc.total
//     return acc
// },{total : 0,totalQty :0})
// console.log(cost)


// const reviews = [
//     {
//         rating :2
//     },
//     {
//         rating :4
//     },
//     {
//         rating :5
//     },
// ]

// function calculateRating(reviews){
//     const totalRating = reviews.reduce((accu,review)=>{
//         return review.rating + accu
//     },0)
//     const averageRating = totalRating/reviews.length
//     console.log(averageRating);
// }
// calculateRating(reviews)

// console.log(sum);

console.log('hello');

const h1 = document.getElementsByTagName('b')[0]
h1.textContent = 'bye world'
// const h =document.getElementsByTagName('h1')[0]
// h.textContent='bye'

const test = document.getElementById('test')
test.textContent = 'hello world'