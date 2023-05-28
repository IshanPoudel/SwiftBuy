// Later on instead of calling fake api , create or use some kind of content management system to load data , dataimg, price and everything
import axios from "axios"


export async function productsData()
{
    const products = await axios.get(
        "https://fakestoreapiserver.reactbd.com/products"
    );

    return products;
}
