import {products} from './constants/data.js';
import Product from './model/product-schema.js';


const Defdata=()=>{
    try{
        
        //Product.insertMany(products);
        //console.log("Data Imported");

    }
    catch(error)
    {
        console.log("Error!",error.message);
    }

}

export default Defdata;