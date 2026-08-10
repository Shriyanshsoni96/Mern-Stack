// think like it is a library that contains everything abuout the arr
// 1. Ek constructor function banate hain
function Animal(name) {
    this.name = name;
}

// 2. prototype ka use karke ek shared property add karte hain
Animal.prototype.species = "Mammal";

// 3. Ek naya object create karte hain
const dog = new Animal("Bruno");

// --- Ab dono ko check karte hain ---

// Check 1: prototype kiske paas hota hai?
console.log(Animal.prototype); // Output: { species: 'Mammal', constructor: f }
console.log(dog.prototype);    // Output: undefined (Kyunki dog ek object hai, function nahi)

// Check 2: __proto__ kiske paas hota hai?
console.log(dog.__proto__);    // Output: { species: 'Mammal', constructor: f }

// Check 3: Kya dog ka __proto__ aur Animal ka prototype same hain?
console.log(dog.__proto__ === Animal.prototype); // Output: true
