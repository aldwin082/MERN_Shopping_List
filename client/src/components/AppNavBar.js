import React, {Component} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';

class AppNavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }
    
    toggle = () => { 
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return(
            <div>
            <Navbar color="dark" dark expand="sm" className="mb-5"> {/*The dark attribute makes the text inside light. Expand makes it so it becomes responsive based on selected size sm, md, lg*/}
                <Container>
                    <NavbarBrand href="/">ShoppingList</NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="https://google.com">
                                    Go to Google
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </div>
        )
    }
}

export default AppNavBar