import Navbar from "./Components/Navbar";
import Slider from './Components/Slider';
import Intro from './Components/Introduction';
import { Routes, Route} from "react-router-dom";
import AboutUs from "./Pages/AboutUs";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import ContactUs from "./Pages/ContactUs";
import Group from "./Pages/Group";
import Offer from "./Pages/Offer";
import Workshop from "./Pages/Workshop";
import SelfAssessment from "./Pages/SelfAssessment";
function App() {
  return (
    <div className="bg-[#e6e5e5] ">
      <Navbar></Navbar>
      <Routes>
        <Route path='AboutUs' element={<AboutUs></AboutUs>}/>
        <Route path="/" element={<Home></Home>} />
        <Route path="/Blog" element={<Blog></Blog>} />
        <Route path="/ContactUs" element={<ContactUs></ContactUs>} />
        <Route path="/Group" element={<Group></Group>} />
        <Route path="/Offer" element={<Offer></Offer>} />
        <Route path="/Workshop" element={<Workshop></Workshop>} />
        <Route path="/SelfAssessment" element={<SelfAssessment></SelfAssessment>} />
      </Routes>
    </div>
  );
}

export default App;
