import React, { useEffect } from "react";
import { Flex, Text } from '@chakra-ui/react'

const TestingPurpose = (props) => {
    useEffect(() => {
        console.log("Mount -> 1");
        return () => {
            console.log("Unmount -> 1");
        };
    }, []);

    return (
        <Flex justifyContent={'center'} alignItems={'center'}>
            <Text>Functional Component -> {props.name}</Text>
        </Flex>
    );
};

export default TestingPurpose;
