import { FormControl, FormErrorMessage, FormLabel, Input } from "@chakra-ui/react";

function FormInput({ label, type = 'text', onChange, value, placeholder, formErrorMessage }) {
    return (
        <>
            <FormControl>
                <FormLabel>{label}</FormLabel>
                <Input type={type} value={value} onChange={onChange} width='100%' placeholder={placeholder} />
                <FormErrorMessage>{formErrorMessage}</FormErrorMessage>
            </FormControl>
        </>
    );
}
export default FormInput;
