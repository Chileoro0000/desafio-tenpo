import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import BenefitsPage from "./pages/BenefitsPage";
import GlobalStyles from './styles/GlobalStyles';


function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/beneficios" element={<BenefitsPage />} />
        </Route>
      </Routes>

    </>
  );
}

export default App;
