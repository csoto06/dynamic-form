import { Navbar, Form, Button, Nav, NavDropdown, FormControl, Container } from 'react-bootstrap';

export default function NavBarMenu() {
  return (
    <div>
        <Navbar bg="light" variant='light'>
            <Container>
                <Navbar.Brand href='#!'>
                    Dynamic <b>Form</b>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className='justify-content-end'>
                    <Navbar.Text>
                        Signed in as: <a href='#'>Christian Soto</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}
