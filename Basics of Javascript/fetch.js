// example he comaplint management 
// get to get the data form the server 

// fetch("/api/complaints")
// e GET default method hai.

// POST → Naya data banana
// const complaint = {
//     title: "Street Light Problem",
//     description: "Light is not working"
// };

// fetch("/api/complaints", {
//     method: "POST",

//     headers: {
//         "Content-Type": "application/json"
//     },

//     body: JSON.stringify(complaint)
// });

// PUT → Complete update
// {
//     "title": "Street Light",
//     "description": "Light not working",
//     "priority": "low"
// }

// 4. PATCH → Partial update 
// fetch("/api/complaints/101", {               
//     method: "PATCH",

//     headers: {
//         "Content-Type": "application/json"
//     },

//     body: JSON.stringify({
//         priority: "high"
//     })
// });


// . DELETE → Data delete karna
// . DELETE → Data delete karna