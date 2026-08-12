
async function getproduct() {
  try {
    const response = await fetch("https://dummyjson.com/products");

    if (!response.ok) {
      throw new Error("Something Went Wrong");
    }

    const data = await response.json();

    data.products.forEach((element) => {
      console.log(element.title);
    });
  }
  catch (error) {
    console.log(error.message);
  }
}
getproduct();