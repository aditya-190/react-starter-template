import {Button, Flex} from "@chakra-ui/react";
import {ClassComponent} from "./components/ClassComponent.jsx";
import {useState} from "react";
import FunctionalComponent from "./components/FunctionalComponent.jsx";

const App = () => {
    const [name, setName] = useState('Initial State')
    const [shown, setShown] = useState(true)
    return (
        <Flex flexDirection={'column'} p={6}>
            {shown && <ClassComponent name={name} />}
            {shown && <FunctionalComponent name={name} />}
            <Button
                mt={6}
                onClick={ () =>
                    setName(name === 'Initial State' ? 'New State' : 'Initial State')
                }>
                Click Me To Update.
            </Button>
            <Button
                mt={6}
                onClick={() => setShown(!shown)}
            >
                {shown ? 'Hide Me' : 'Show Me'}
            </Button>
        </Flex>
    )
}

export default App
