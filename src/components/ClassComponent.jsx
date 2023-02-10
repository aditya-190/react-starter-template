import React from "react";
import { Flex, Text } from '@chakra-ui/react'

export class ClassComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: "Virat Kohli"
        };
        console.log('Mount -> 1')
    }

    static getDerivedStateFromProps(props, state){
        console.log('If Mount -> 2, If Update -> 1')
        return state
    }

    componentDidMount(){
        console.log('Mount -> 4')
    }

    shouldComponentUpdate(newProps, newState, newContext) {
        console.log('Update -> 2')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('Update -> 4')
        return null
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('Update -> 5')
    }

    componentWillUnmount(){
        console.log('Unmount -> 1')
    }

    render() {
        console.log('Mount / Update -> 3')
        return (
            <Flex w={'100%'} h={'100%'} justifyContent={'center'} alignItems={'center'}>
                <Text>Class Component -> {this.props.name}</Text>
            </Flex>
        )
    }
}
