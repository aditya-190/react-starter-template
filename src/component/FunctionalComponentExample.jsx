import React, {useState} from "react";
import {Flex, Heading} from "@chakra-ui/react";

const FunctionalComponentExample = () => {
    const products = [
        {id: 1, name: 'Product 1'},
        {id: 2, name: 'Product 2'},
        {id: 3, name: 'Product 3'}
    ]

    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleProductSelect = (selectedProduct) => {
        setSelectedProduct(selectedProduct);
        console.log('Functional: Selected Product is -> ', selectedProduct)
    };

    return (
        <Flex flexDirection={'column'} alignitems={'center'} p={6} cursor={'pointer'}>
            <Heading pb={4}>Inside Functional Component</Heading>
            <ul>
                {products.map((product) => (
                    <li
                        key={product.id}
                        onClick={() => handleProductSelect(product)}
                    >
                        {product.name}
                    </li>
                ))}
            </ul>
        </Flex>
    );
}


export default FunctionalComponentExample
