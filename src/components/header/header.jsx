import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../../assets/images/Logo.png"
import "./header.css"

function Header() {
  return (
    <Navbar className="header" collapseOnSelect fixed='top' expand="lg" bg="light" variant="light">
      <Container fluid className="header-container">
        <Navbar.Brand  href="#home">
        <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto nav-option-container">
            <Nav.Link className='nav-option' href="#features">Dashboard</Nav.Link>
            <Nav.Link className='nav-option' href="#pricing">About</Nav.Link>
            <Nav.Link className='nav-option' href="#features">FAQ</Nav.Link>
            <Nav.Link className='nav-option' href="#pricing">Contact</Nav.Link>
            
          </Nav>
          <Nav>
            <Button className='m-1 custom-teal-buttons-signUp'>Sign Up</Button>
            <Button className='m-1 custom-teal-button-login' variant="outline-info" >Login</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

// import { Button, Stack } from 'react-bootstrap';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import logo from "../../assets/images/Logo.png"
// import "./header.css";

// function Header() {
//   return (
//     <Navbar className="header" collapseOnSelect expand="lg" bg="light" variant="light">
//       <Container fluid className='header-container'>
      
//         <Navbar.Brand href="#home">
//         <img src={logo} height="37px" width="149px" alt="logo" />
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <Navbar.Collapse id="responsive-navbar-nav">
          
//             <Container style={{display:"flex"}}>
//             <Stack style={{justifyContent:"space-around", width:"7%", border:"1px solid red"}} direction='horizontal'>
//                 <Nav.Link>Dashboard</Nav.Link>
//                 <Nav.Link>About</Nav.Link>
//                 <Nav.Link>FAQ</Nav.Link>
//                 <Nav.Link>Contact</Nav.Link>
//             </Stack>
//             <div className='ms-auto d-flex' style={{border:"1px solid green", width:"20%"}}>
//             <Button className='mx-1'>Sign Up</Button>
//             <Button className='mx-1'>Login</Button>
//             </div>
//             </Container>

          
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default Header;