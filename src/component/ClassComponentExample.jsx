import React, { Component } from 'react';
import {Flex, Heading} from "@chakra-ui/react";

class ClassComponentExample extends Component {
    constructor(props) {
        super(props);
        this.products = [
            {id: 1, name: 'Product 1'},
            {id: 2, name: 'Product 2'},
            {id: 3, name: 'Product 3'}
        ]
        this.state = { selectedProduct: null };
    }

    handleProductSelect = (selectedProduct) => {
        this.setState({ selectedProduct });
        console.log('Class: Selected Product is -> ', selectedProduct)
    };

    render() {
        const { selectedProduct } = this.state; // This is an example of destructuring

        return (
            <Flex flexDirection={'column'} alignitems={'center'} p={6} cursor={'pointer'}>
                <Heading pb={4}>Inside Class Component</Heading>
                <ul>
                    {this.products.map((product) => (
                        <li
                            key={product.id}
                            onClick={() => this.handleProductSelect(product)}
                        >
                            {product.name}
                        </li>
                    ))}
                </ul>
            </Flex>
        );
    }
}

export default ClassComponentExample

