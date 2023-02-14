import { useEffect, useState } from "react";
import "./AdminPage.css";
import axios from "axios";
import UniDetails from "../pages/UniDetails";
import { Button } from "@chakra-ui/react";
function AdminPage() {
    const [items, setItems] = useState([]);

    const fetchItem = async () => {
        const result = await axios.get(
            "http://universities.hipolabs.com/search?country=United+States"
        );
        console.log(result);
        setItems(result.data);
    };

    let i = 0;
    const runLoop = () => {
        while (i <= 1) {
            console.log("===================================");
            i++;
            items.map((item) => {
                console.log(item.name);
            });
        }
    };
    runLoop();
    return (
        <div className="item-container">
            <div className="admin-navbar">
                <h1>Admin Dashboard</h1>
                <div className="admin-navbar-button">
                    <Button colorScheme={"red"} variant={"outline"} onClick></Button>
                </div>
            </div>
            <div className="button-container">
                <Button
                    onClick={() => {
                        fetchItem();
                    }}
                    colorScheme={"purple"}
                    variant={"outline"}
                >
                    View Data
                </Button>
            </div>
            <div className="data-container">
                {items.map((item) => {
                    return (
                        <div>
                            <UniDetails key={item.id} itemData={item} />
                            {/* {item.name} */}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default AdminPage;
