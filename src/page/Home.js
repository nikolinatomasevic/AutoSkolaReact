import {useState, useEffect} from 'react';
import axios from 'axios';


function Home(){


    const [polaznici, setPolaznici] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/polaznik').then(response => {

            setPolaznici(response.data.data);

        });

    }, []);



    return (
        <div>

        </div>
    )
}

export default Home;