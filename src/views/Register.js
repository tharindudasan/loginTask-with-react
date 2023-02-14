import {
    Button,
    FormControl,
    FormErrorMessage,
    FormHelperText,
    FormLabel,
    Input,
} from "@chakra-ui/react";
import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import Login from "./Login";
import "./Register.css";
function Register() {
    const [userName, setUserName] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    let navigate = useNavigate();

    const handlerRegister = () => {
        navigate(`/login`, { state: { userName, mobile, email, password } });
        setUserName("");
        setMobile("");
        setEmail("");
        setPassword("");
    };


    const isError = userName.length < 8 && userName.trim() !== "";
    const isMobileError =
        !(
            (mobile.length === 10 &&
                (mobile.startsWith("071") ||
                    mobile.startsWith("072") ||
                    mobile.startsWith("075") ||
                    mobile.startsWith("076") ||
                    mobile.startsWith("077") ||
                    mobile.startsWith("078"))) ||
            (mobile.length === 12 &&
                (mobile.startsWith("+9472") ||
                    mobile.startsWith("+9471") ||
                    mobile.startsWith("+9477") ||
                    mobile.startsWith("+9476") ||
                    mobile.startsWith("+9475") ||
                    mobile.startsWith("+9478")))
        ) && mobile.trim() !== "";

    const emailValidate = new RegExp(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    const isEmailError = !emailValidate.test(email) && email.trim() !== "";
    const passwordValidate = new RegExp(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/
    );

    const isPasswordError =
        !passwordValidate.test(password) && password.trim() !== "";
    const buttonActive =
        isError || isMobileError || isEmailError || isPasswordError;

    return (
        <div className="center-div">
            <div className="register-container">
                <h2>Register</h2>
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
                        <FormErrorMessage>Length should be 8 Charchters</FormErrorMessage>
                    )}
                </FormControl>

                <FormControl isInvalid={isMobileError}>
                    <FormLabel>Mobile</FormLabel>
                    <Input
                        type="text"
                        value={mobile}
                        onChange={(event) => {
                            setMobile(event.target.value);
                        }}
                    />
                    {!isMobileError ? (
                        <FormHelperText></FormHelperText>
                    ) : (
                        <FormErrorMessage>InValid Mobile Number</FormErrorMessage>
                    )}
                </FormControl>
                <FormControl isInvalid={isEmailError}>
                    <FormLabel>Email</FormLabel>
                    <Input
                        type="email"
                        value={email}
                        onChange={(event) => {
                            setEmail(event.target.value);
                        }}
                    />
                    {!isEmailError ? (
                        <FormHelperText></FormHelperText>
                    ) : (
                        <FormErrorMessage>InValid Email Address</FormErrorMessage>
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
                        <FormErrorMessage>InValid Password</FormErrorMessage>
                    )}
                </FormControl>

                <div className="button-container">
                    <Link to="/login">
                        <Button colorScheme={"blue"} variant="outline">
                            Login
                        </Button>
                    </Link>
                    <a onClick={handlerRegister}>
                        <Button
                            isDisabled={buttonActive}
                            colorScheme={"yellow"}
                            variant="outline"
                        >
                            Register
                        </Button>
                    </a>

                    <Toaster />
                </div>
            </div>
        </div>
    );
}
export default Register;
