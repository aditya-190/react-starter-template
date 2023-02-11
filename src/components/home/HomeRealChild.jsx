import {useParams} from "react-router-dom";
import {Text} from "@chakra-ui/react";

const HomeRealChild = () => {
    const { homeNumber } = useParams()
    return (
        <Text>{`Home Real Child: ${homeNumber}`}</Text>
    )
}

export default HomeRealChild
