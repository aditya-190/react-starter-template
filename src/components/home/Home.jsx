import HomeChild1 from "./HomeChild1.jsx";

const Home = () => {
    const name = 'Home'

    // Without using useContext
    return (
        <HomeChild1 name={name} />
    )
}

export default Home
