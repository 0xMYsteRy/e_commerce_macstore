import React, {useState, useEffect} from 'react';
import { commerce } from './lib/commerce';
// import Products from './components/Products/Products';
import {Products, Navbar} from './components';

const App = () => {
    const [products, setProducts] = useState([]);

    const fetchProducts = async() => {
        const {data} = await commerce.products.list();
        
        setProducts(data);
    }

    // dependency array sets to empty => only run at the start of the render
    // similar to component did mount
    useEffect(() => {
        fetchProducts();
    }, [])

    // testing purpose to check if can fetch the api
    // console.log(products)

    return (
        <div>
            <Navbar />
            <Products products={products} />
        </div>
    );
}

export default App
