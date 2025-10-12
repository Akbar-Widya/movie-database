import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MovieOverview from "./pages/MovieOverview";
import Footer from "./components/Footer";


const App = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/movie/:id" element={<MovieOverview />} />
         </Routes>
         
         <Footer />
      </BrowserRouter>
   );
};

export default App;
