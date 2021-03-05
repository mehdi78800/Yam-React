import { Link } from "react-router-dom";
import { Navbar,Nav} from 'react-bootstrap'

const MyNavbar = () => {

    return (
        <div className="row">
            <Navbar className="col-12 mb-4" bg="dark" variant="dark" expand="lg" sticky="top">
                <Link className="navbar-brand" to="/">Yam</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/stat">Stat</Link></li>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>

    )

}

export default MyNavbar;