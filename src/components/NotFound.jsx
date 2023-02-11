import {Text} from "@chakra-ui/react";
import {useLocation} from "react-router-dom";

const NotFound = () => {
    const location = useLocation()
    const checkIfBadRoute = location?.state?.redirectedFrom ?? 'Not Found'
    return (
        <Text>{checkIfBadRoute}</Text>
    )
}

export default NotFound
