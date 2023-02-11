import {Text} from "@chakra-ui/react";
import {useContext} from "react";
import {SomeThingCoolContext} from "./SomethingCool.jsx";

const CoolChild3 = () => {
    const { name } = useContext(SomeThingCoolContext)
    return (
        <Text>{name}</Text>
    )
}

export default CoolChild3
