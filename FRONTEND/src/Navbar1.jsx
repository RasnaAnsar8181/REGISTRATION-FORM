import { Navbar,Nav,Container } from 'react-bootstrap'
import {Link } from 'react-router-dom'

function Navbar1() {
  return (
    <div>
       <Navbar className='navbar1' bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand className='text-center'>REGISTRATION FORM</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link><Link style={{color:"white"}} to="/">Login</Link></Nav.Link>
            <Nav.Link><Link style={{color:"white"}} to="/signin">SignUp</Link></Nav.Link>
            <Nav.Link><Link style={{color:"white"}} to="/viewall">ViewAll</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navbar1
