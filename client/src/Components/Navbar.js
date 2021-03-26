import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigationbar = () => {

    return ( 
        <div className="mt-4 shadow-sm">
            <Navbar bg="white" expand="lg">
                <Link to="/"><Navbar.Brand>blog.</Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Link to="/" className="nav-link nav-item">Home</Link>
                        <Link to="/new" className="nav-link nav-item">New</Link>
                        <Link to="/blogs/all" className="nav-link nav-item">All blogs</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
     );
}
 
export default Navigationbar;