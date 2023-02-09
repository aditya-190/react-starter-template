import {Button, Flex, Text} from "@chakra-ui/react";

const App = () => {
    // Before: Arrow Functions.

    // function handleClickForMePls() {
    //     console.log('This is also an Example of Event Handling. By the way, Click is working :)')
    // }

    // After: Arrow Functions.
    const handleClickForMePls = () => {
        console.log('This is also an Example of Event Handling. By the way, Click is working :)')
    };

    // Before: Template literals.
    const handleMouseEnter = () => {
        const greeting = 'Hello, I am Aditya :)'
        console.log('Without ES6 -> ', greeting, '.Nice to meet you.')
    };

    // After: Template literals.
    const handleMouseLeave = () => {
        const greeting = 'Bye Bye :)'
        console.log(`Using ES6 -> ${greeting}. See you again.`)
    };

    // Before: Destructuring
    const getBeforeNamePls = () => {
        const person = { name: 'Virat Kohli', age: 30 };
        console.log(`Yet another example -> ${person.name}.`)
    };

    // After: Destructuring
    const getAfterNamePls = () => {
        const person = { name: 'Virat Kohli', age: 30 };
        const {name, age} = person
        console.log(`Yet another example -> ${name} with age -> ${age}.`)
    };

    return (
        <Flex flexDirection={'column'} justifyContent={'center'} alignItems={'center'} p={6} >
            <Button
                onClick={handleClickForMePls}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                background={'green.500'}
                color={'white'}
                _hover={{}}
            >
                Try Clicking or Hovering Me!
            </Button>

            <Button
                mt={6}
                onMouseEnter={getBeforeNamePls}
                onMouseLeave={getAfterNamePls}
                background={'green.500'}
                color={'white'}
                _hover={{}}
            >
                Hover Me
            </Button>
        </Flex>
    )
}

export default App
