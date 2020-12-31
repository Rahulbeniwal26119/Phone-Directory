import {Navbar , NavbarBrand , Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import React , {Component} from 'react';
import './header.css';

class Header extends Component {
    constructor()
    {
        super();
    }
    render()
    {
        return (
            <div>
                <Navbar dark color="primary">
                    <div className="col-12" style={{textAlign : 'center'}}>
                    <NavbarBrand>
                    {this.props.heading}
                    </NavbarBrand>
                    </div>
                    <Link to="/adduser">
                <Button className={ this.props.heading === "Phone Directory" ? "d-flex addButton btn-success" : "d-none  addButton btn-success"}>Add Subscriber </Button>
                </Link>
                </Navbar>
            </div>
        )
    }
}
export default Header;