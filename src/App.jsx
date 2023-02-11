import {Text} from "@chakra-ui/react";
import {Route, Routes, useRoutes} from "react-router-dom";
import Home from "./components/home/Home.jsx";
import SomethingCool from "./components/somethingCool/SomethingCool.jsx";
import NotFound from "./components/NotFound.jsx";
import BadRoute from "./components/BadRoute.jsx";

const App = () => {
    // const routesListToTestUseRoutes = [
    //     {
    //         path: '/home',
    //         children: [
    //             {
    //                 index: true,
    //                 element: <Home />
    //             },
    //             {
    //                 path: 'h1',
    //                 element: <Text>Home Child 1</Text>
    //             },
    //             {
    //                 path: 'h2',
    //                 element: <Text>Home Child 2</Text>
    //             },
    //         ],
    //     },
    //     {
    //         path: '/',
    //         index: true,
    //         element: <Text>Index Page</Text>
    //     },
    //     {
    //         path: '/somethingCool',
    //         element: <SomethingCool />
    //     },
    //     {
    //         path: '/404',
    //         element: <NotFound />
    //     },
    //     {
    //         path: '*',
    //         element: <BadRoute />
    //     }
    // ]
    // return useRoutes(routesListToTestUseRoutes)


    return (
        <Routes>
            <Route path={'/home'}>
                <Route index element={<Home />} />
                <Route path={'h1'} element={<Text>Home Child 1</Text>} />
                <Route path={'h2'} element={<Text>Home Child 2</Text>} />
            </Route>

            <Route index element={<Text>Index Page</Text>} />

            <Route path={'/somethingCool'} element={<SomethingCool />} />

            <Route path={'/404'} element={<NotFound />} />

            <Route path={'*'} element={<BadRoute />} />
        </Routes>
    )
}

export default App
