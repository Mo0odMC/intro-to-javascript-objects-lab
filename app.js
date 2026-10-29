//Excersie 1
console.log('========Excersie 1========')
const menuItems = ['Tea','Coffee','Sandwich','Cookie']
//log first item
console.log(menuItems[0])
//log third item
console.log(menuItems[2])
//the number of items
console.log(menuItems.length)
//the last item using .length
console.log(menuItems[menuItems.length-1])

//Excersie 2
console.log('========Excersie 2========')
const waitingCustomers = ['Aisha', 'Omar', 'Noor'];

//replacing omar with ali
waitingCustomers[1] = 'Ali'
//adding dana to the array with push
waitingCustomers.push('Dana')
//log the number of customers
console.log(waitingCustomers.length)
//removeing the last customer using pop
const removedCustomer = waitingCustomers.pop()
//log removedcustomer
console.log(removedCustomer)
//log the final array
console.log(waitingCustomers)
// this is another way to log the array as string
// for (let x = 0; x < waitingCustomers.length; x++) {
//     const removedCustomer = waitingCustomers[x];
//     console.log(waitingCustomers)    
// }

console.log('========Excersie 3========')
const drinks = ['Water', 'Tea', 'Coffee', 'Juice'];

// using for loop to print the items
for (let x = 0; x < drinks.length; x++) {
    const drink = drinks[x];
    console.log(`${x+1}. ${drink}`)
}

console.log('========Excersie 4========')
const prices = [2, 5, 3, 6, 4];
//adding a totalprice
let totalPrice = 0
//adding expensiveitemcount
let expensiveItemCount = 0
//using foreach() to add every price
prices.forEach((Price) => {
totalPrice += Price
})
//logging result
console.log(`Total price: ${totalPrice}`)
//using foreach() to count how many items grater than or equal 4
prices.forEach((Price) => {
    if (Price>=4) {
        expensiveItemCount += 1  
    } else{
        return
    }
})
//logging result
console.log(`Items costing 4 or more: ${expensiveItemCount}`)

console.log('========Excersie 5========')
//creaing an object
const cafe = {
  name: 'Campus Cafe',
  location: 'Building A',
  seats: '24',
  isOpen: true,
};
//Use dot notation to log Campus Café is located in Building A.
console.log(`${cafe.name} is located ${cafe.location}`)
////Use dot notation to log Available seats: 24
console.log(`Available seats: ${cafe.seats}`)

console.log('========Excersie 6========')
const drink = {
  name: 'Iced Coffee',
  price: 3,
  size: 'small',
  temporaryCode: 'TEMP-01',
};
//Change size to 'large'
drink.size = 'large'
//Increase price by 1, using its current value
drink.price += 1
//Add an isAvailable property with the value true
drink.isAvailable = true
//Delete temporaryCode
delete drink.temporaryCode
//log the final object
console.log(drink)

console.log('========Excersie 7========')
const order = {
  customerName: 'Mariam',
  itemName: 'Sandwich',
  price: 4,
  quantity: 3,
  isPaid: true,
};
//Calculate the order total using price and quantity
let orderTotal = (order.price*order.quantity)
//(orderTotal is a new property you should add to the object).
order.orderTotal = orderTotal
//Using template literal notation and your order object, log: 
console.log(`Mariam ordered ${order.quantity} ${order.itemName} item.
Order total: ${order.orderTotal}`)
//Use an if/else statement:If the order is paid, log 'Ready to prepare'. Otherwise, log 'Waiting for payment'. 
if (order.isPaid === true) {
    console.log('Ready to prepare')
} else if (order.isPaid === false){
        console.log('Waiting for payment')
} else {
    //redundancy if the value of order.isPaid is not true or false
    console.log('Payment status is missing')
}

console.log('========Excersie 8========')
const studySession = {
  title: 'JavaScript Practice',
  room: 'Lab 2',
  topics: ['Variables', 'Arrays'],
};
//Log the first topic.
console.log(studySession.topics[0])
//Add 'Objects' to the topics array using push().
studySession.topics.push('Objects')
//Log the number of topics.
console.log(studySession.topics.length)
//Use forEach() to print each topic.
studySession.topics.forEach(x => {
    console.log(x)
});
//Change room to 'Lab 3'.
studySession.room = 'Lab 3'
//Use the studySession object to log: 
console.log(`${studySession.title} will take place in ${studySession.room}.`)
//Log the topics. Expected topics after the update:
console.log(studySession.topics)
console.log('========Excersie 9========')
const products = [
  { name: 'Tea', price: 2 },
  { name: 'Sandwich', price: 4 },
  { name: 'Cookie', price: 1 },
];
//Log the name of the second product.
console.log(`${products[1].name}`)
//Change the second product’s price to 5
products[1].price = 5
//Use push() to add this product:
products.push({ name: 'Juice', price: 3 })
//Use a for loop or forEach() to print every product in this format:
products.forEach(product => {
    console.log(`${product.name} - ${product.price}`)
});
console.log('========Excersie 10========')
const studyGroup = {
  name: 'JavaScript Crew',
  members: [
    { name: 'Aisha', completedHomework: true },
    { name: 'Omar', completedHomework: false },
    { name: 'Noor', completedHomework: true },
  ],
};
//Log the group name.
console.log(`${studyGroup.name}`)
//Log the number of members.
console.log(studyGroup.members.length)
//Create a variable named completedCount, starting at 0.
let completedCount = 0
//Loop through studyGroup.members.
for (const member of studyGroup.members){
//For each member:If they completed their homework, increase completedCount.
if (member.completedHomework) {
    completedCount++
} else {
// Otherwise, print their name in a reminder message.
    console.log(`${member.name} needs to finish the homework.`)
}
}
//completed homework
console.log(`Completed homework: ${completedCount}`)

console.log('========Level up========')
console.log('========Excersie 11========')

//Write a function named calculateTotal with one parameter named itemPrices
function calculateTotal (itemPrices) {
    let total = 0
    for (let i = 0; i < itemPrices.length; i++) {
        total += itemPrices[i];
    } return total
}

console.log(calculateTotal([2, 5, 3])); // 10
console.log(calculateTotal([4, 4]));    // 8
console.log(calculateTotal([7]));       // 7
console.log(calculateTotal([]));        // 0

console.log('========Excersie 12========')
const bill = {
  customerName: 'Noor',
  items: [
    { name: 'Tea', price: 2, quantity: 2 },
    { name: 'Sandwich', price: 4, quantity: 1 },
    { name: 'Cookie', price: 1, quantity: 3 },
  ],
  getTotal (){
    total = 0

    for (const item of this.items) {
      total += item.price * item.quantity;
    }
    return total
}

};
console.log(bill.getTotal()); // 11

bill.items.push({
  name: 'Water',
  price: 1,
  quantity: 2,
});

console.log(bill.getTotal()); // 13

