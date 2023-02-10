import {Flex, Heading} from "@chakra-ui/react";
import {useEffect, useState} from "react";

const App = () => {
    const [tempData, setTempData] = useState([]);


    useEffect(() => {
        const fetchDataFromWeb = async () => {
            const data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
            const number = await data.json()
            setTempData(number)
        }
        fetchDataFromWeb()
    }, [])

    return (
        <Flex p={6} justifyContent={'center'} alignItems={'center'}>
            <Heading>{tempData.id}</Heading>
        </Flex>
    )
}

export default App
