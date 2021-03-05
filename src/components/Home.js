import Form from '../components/Form'
import Response from '../components/Response'
import { useSelector } from 'react-redux';


const Home = () => {
    const {result} = useSelector(state => state);

    return (
        <>
        <p>Home</p>
        <Form/>
        {result.length > 0 && (
            <Response/>
        )}
        </>
    )
}

export default Home;