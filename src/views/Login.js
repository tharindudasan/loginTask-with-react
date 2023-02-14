import "./Login.css";
import {
    Button,
    FormControl,
    FormErrorMessage,
    FormHelperText,
    FormLabel,
    Input,
    Toast,
} from "@chakra-ui/react";
import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const location = useLocation();
    const uName = location.state.userName;
    const mobile = location.state.mobile;
    const email = location.state.email;
    const pswrd = location.state.password;

    let navigate = useNavigate();

    const passwordValidate = new RegExp(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/
    );

    let isError = false;
    let isPasswordError = false;
    let isLogin = userName == uName && password === pswrd;
    const handlerLogin = () => {
        {
            if (isLogin) {
                navigate(`/admin`);
                toast.success("success");
                console.log("wade hari");
            } else {
                if (userName !== uName) {
                    console.log("un wrong");
                    isError = true;
                    toast.error("User Name Wrong");
                    <Toast />;
                } else {
                    console.log("pawsword wrong");
                    isPasswordError = true;
                    toast.error("password Wrong");
                    <Toast />;
                }

            }
        }
    };
    return (
        <div className="center-div">
            <div className="register-container">
                {uName}
                <br />
                {pswrd}
                <h2>Login</h2>
                <FormControl isInvalid={isError}>
                    <FormLabel>Username</FormLabel>
                    <Input
                        type="text"
                        value={userName}
                        onChange={(event) => {
                            setUserName(event.target.value);
                        }}
                    />
                    {!isError ? (
                        <FormHelperText></FormHelperText>
                    ) : (
                        <FormErrorMessage>User Name Wrong</FormErrorMessage>
                    )}
                </FormControl>

                <FormControl isInvalid={isPasswordError}>
                    <FormLabel>Password</FormLabel>
                    <Input
                        type="txt"
                        value={password}
                        onChange={(event) => {
                            setPassword(event.target.value);
                        }}
                    />
                    {!isPasswordError ? (
                        <FormHelperText></FormHelperText>
                    ) : (
                        <FormErrorMessage>password Wrong</FormErrorMessage>
                    )}
                </FormControl>

                <div className="button-container">
                    <a onClick={handlerLogin}>
                        <Button colorScheme={"blue"} variant="outline">
                            Login
                        </Button>
                        <Toaster />
                    </a>
                    <a
                        onClick={() => {
                            navigate(`/register`);
                        }}
                    >
                        <Button colorScheme={"yellow"} variant="outline">
                            Register
                        </Button>
                    </a>
                </div>
            </div>
        </div>
    );
}
export default Login;
