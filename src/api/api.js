// Later on instead of calling fake api , create or use some kind of content management system to load data , dataimg, price and everything
//Find a way to use cms. Create a custom data loading file.
import axios from "axios"


// export async function productsData()
// {
//     const products = await axios.get(
//         "https://fakestoreapiserver.reactbd.com/products"
//     );
//     console.log("These are the products")
//     console.log(products)

//     return products;
// }

export async function productsData()
{
    const products = await axios.get(
        "https://rapiddb.link/get_inventory_item_6c990b7aca"
    );

    console.log("These are the products")


    console.log(products)
    console.log(products.data)
    console.log(products.data.result)

    return products.data.result;

    // const products_two = await axios.get(
    //     "https://fakestoreapiserver.reactbd.com/products"
    // );
    // console.log("These are the products")
    // console.log(products_two)

    // return products_two;
    //if using this go to home and set setproducts(data.data)

    
}



