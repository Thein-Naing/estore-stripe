// import "./App.css";
// import NavbarComponent from "./components/Navbar";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Container } from "react-bootstrap";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Cancel from "./pages/Cancel";
// import Store from "./pages/Store";
// import Success from "./pages/Success";
// import CartProvider from "CartContext";

// function App() {
//   return (
//     <CartProvider>
//       <Container>
//         <NavbarComponent> </NavbarComponent>
//         <Router>
//           <Routes>
//             <Route index element={<Store />} />
//             <Route path="success" element={<Success />} />
//             <Route path="cancel" element={<Cancel />} />
//           </Routes>
//         </Router>
//       </Container>
//     </CartProvider>
//   );
// }

// export default App;

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/Navbar';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Cancel from './pages/Cancel';
import Store from './pages/Store';
import Success from './pages/Success';
import CartProvider from './CartContext';
// localhost:3000 -> Home
// localhost:3000/success -> Success

function App() {
  return (
    <CartProvider>
      <Container>
        <NavbarComponent></NavbarComponent>
        <Router>
          <Routes>
            <Route index element={<Store />} />
            <Route path="success" element={<Success />} />
            <Route path="cancel" element={<Cancel />} />
          </Routes>
        </Router>
      </Container>
    </CartProvider>
  );
}

export default App;
