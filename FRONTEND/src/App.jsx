
import SignIn from "./Components/SignIn"
import Login from "./Components/Login"
import {BrowserRouter as Router , Routes,Route} from 'react-router-dom'
import Navbar1 from "./Navbar1"
import 'bootstrap/dist/css/bootstrap.min.css';
import Details from "./Components/Details"
import ViewAll from "./Components/ViewAll";

function App() {
  return (
    <div>
      <Router>
        <Navbar1 />
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/details" element={<Details />}></Route>
          <Route path="/viewall" element={<ViewAll />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
