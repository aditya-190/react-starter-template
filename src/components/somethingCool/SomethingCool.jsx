import {createContext} from "react";
import CoolChild1 from "./CoolChild1.jsx";

export const SomeThingCoolContext = createContext(null)
const SomethingCool = () => {
    const name = "somethingCool"

    return (
        <SomeThingCoolContext.Provider value={{ name }}>
            <CoolChild1 />
        </SomeThingCoolContext.Provider>
    )
}

export default SomethingCool
