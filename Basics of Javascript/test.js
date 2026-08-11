// ek function banao jisme api di he humne or uska data fetch kr rhe he ,
// reponse succesful hai ya ni check kro , json format me data nikalo fir print krwao ,
// agr error he toh display krwaoo

// async function getuser()
// {
//     try{
//     const response = await fetch("https://dummyjson.com/products");

//     if(!response.ok){
//         throw new error("request failed");
//     }

//     const data = await response.json();
//     console.log(data);
//     }
//     catch(error){
//         console.log(error.message);
//     }

// }

// getuser();


// product dipay krna he isme
// using of the get method with async , await , foreach ,promises , fetch , api , http we use in this 

// async function getproduct() {
//   try {
//     const response = await fetch("https://dummyjson.com/products");

//     if (!response.ok) {
//       throw new Error("Something Went Wrong");
//     }

//     const data = await response.json();

//     data.products.forEach((element) => {
//       console.log(element.title);
//     });
//   }
//   catch (error) {
//     console.log(error.message);
//   }
// }
// getproduct();


// use of the post method where i update the api 
// const addproduct = {
//   title: "Gaming laptop ",
//   price: "75000",
// };

// async function getproduct() {
//   try {
//     const response = await fetch("https://dummyjson.com/products/add", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(addproduct),
//     });

//     if (!response.ok) {
//       throw new error("request failed");
//     }

//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error.message);
//   }
// }
// getproduct();


// use of he patch function wher i just partially update the data
// async function getproduct() {
//   try {
//     const response = await fetch(" https://dummyjson.com/products/5", {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(
//         {
//             title:"Gaming Laptop Pro",
//             price: "85000"
//         })
//     });

//     if (!response.ok) {
//       throw new Error("request failed");
//     }

//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error.message);
//   }
// }
// getproduct();

// using fo the delete method 
async function deleteProduct() {
    try {
        const response = await fetch("https://dummyjson.com/products/5", {
            method: "DELETE"
        });

        if (!response.ok) {
            throw new Error("Request failed");
        }


        const res = await fetch("https://dummyjson.com/products"); 
        const data = await res.json();
        console.log(data);



    } catch (error) {
        console.log(error.message);
    }
}

deleteProduct();
