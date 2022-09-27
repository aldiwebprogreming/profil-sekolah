import {Navbar, Container} from "react-bootstrap";
const Footer = () => {
    return(
        <div>
            <Navbar expand="lg" variant="dark" bg="dark">
            <Container>
                <Navbar.Brand href="#">SMK Nusa</Navbar.Brand>
                {/* <div>www.smknusadigital.my.id</div> */}
            </Container>
            </Navbar>
        </div>
    );
}

export default Footer;