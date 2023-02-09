import {Button, Flex} from "@chakra-ui/react";
import {useEffect, useState} from "react";
import Children_1 from "./components/Children_1.jsx";
import Children_2 from "./components/Children_2.jsx";

const App = () => {
    const [stateExample, setStateExample] = useState('InitialValue')
    let anythingCrazy = 'Simple Text'

    const handleClickPlease = () => {
        setStateExample(stateExample !== "InitialValue" ? 'InitialValue' : 'Please change me back.')
    };

    const handleClickForSimpleVarPlease = () => {
        anythingCrazy = anythingCrazy !== 'Simple Text' ? 'Simple Text' : 'I have been changed but will not show in UI'
        console.log('Current Value of anythingCrazy => ', anythingCrazy)
    };

    useEffect(() => {
        console.log('Current Value of stateExample => ', stateExample)
    }, [stateExample])

    return (
        <Flex flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
            <Children_1 anythingCrazy={anythingCrazy} />
            <Children_2 couldBeAnything={stateExample} />
            <Button mt={4} p={4} onClick={handleClickForSimpleVarPlease}>Change First</Button>
            <Button mt={4} p={4} onClick={handleClickPlease}>Change Second</Button>
        </Flex>
    )
}

export default App
