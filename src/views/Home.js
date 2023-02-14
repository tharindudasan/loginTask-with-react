import { Button } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../componets/Logo";
import "./Home.css";
function Home() {
    let navigate = useNavigate();
    return (
        <div className="home-container">
            <div className="home-nav">
                <Logo />
                <div>
                    <Link to="/login">
                        <Button colorScheme={"blue"} variant="outline">
                            Login
                        </Button>
                    </Link>
                    <a onClick={() => {
                        navigate('/register')

                    }}>
                        <Button colorScheme={"yellow"} variant="outline">
                            Register
                        </Button>
                    </a>
                </div>
            </div>
        </div>
    );
}
export default Home;
