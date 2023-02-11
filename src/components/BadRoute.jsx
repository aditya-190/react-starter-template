import {Button, Text} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";

const BadRoute = () => {
    const navigate = useNavigate()
    return (
        <>
        <Text>Out of my capability. Checkout on other website dude.</Text>
        <Button
            mt={4}
            onClick={() => {
                navigate('/404', {
                    state: {
                        redirectedFrom: 'Bad Route',
                    },
                })
            }}
        >Go to index Page</Button>
        </>
    )
}

export default BadRoute
