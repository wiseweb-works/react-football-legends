import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import logo from "../../assets/logo.png"

const Header = () => {
  return (
    <Container>
        <Image src={logo} width="200px" rounded />
        <br />
        <h1 className='my-2 text-uppercase title'>Football Legends</h1>
    </Container>
  )
}

export default Header 