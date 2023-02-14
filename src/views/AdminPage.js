import './AdminPage.css'
import { Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from 'axios';

function AdminPage() {
    const [data, setData] = useState('');
    useEffect(() => {

    }, []);
    const fetchItem = () => {
        const results = axios.get("http://universities.hipolabs.com/search?country=United+States");
        setData(results.data)
    }

    return <div className="items-container">
        <div className="title-container"></div>
        <div className="button-container">
            <Button onClick={() => fetchItem()} colorScheme={'purple'} variant='outline'>Check List</Button>
        </div>
        <div className="data-container">
            {/* {data.map((item) => {
                return (
                    <>
                    </>
                )
            })} */}
        </div>
    </div>;
}
export default AdminPage;
