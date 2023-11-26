import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Compoments/Header/Header";
import Registration from "./Pages/Registration";
import { Toaster } from "react-hot-toast";
import Details from "./Compoments/Details/Details";
import EditForm from "./Compoments/EditForm/EditForm";
import Footer from "./Compoments/Footer/Footer";


const App = () => {
  return (
    <>
      
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/edit/:id" element={<EditForm />} />
          
        </Routes>
        <Footer />

      </BrowserRouter>
      <Toaster />
    </>
  );
  
};

export default App;