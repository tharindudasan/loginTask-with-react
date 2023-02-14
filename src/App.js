import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Login from "./views/Login";
import Register from './views/Register'
import AdminPage from "./views/AdminPage";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/admin" element={<AdminPage />}></Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;


// import toast, { Toaster } from 'react-hot-toast';

// //const notify = () => toast('Here is your toast.');



// const App = () => {

//   const handlerClick = () => {
//     toast.success('clcick')
//   }
//   return (
//     <div>
//       <button onClick={handlerClick}>Make me a toast</button>
//       {/* <Toaster /> */}
//     </div>
//   );
// }
// export default App;
