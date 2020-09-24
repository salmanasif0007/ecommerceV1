import React from 'react';
import logo from "../Logo.png";
import {Container,Row,Col, Form,FormControl,Nav,Navbar, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ScreenSize from './ScreenSize';


export default function App(){
  var screen= ScreenSize();
  if(screen !==undefined){
    var screenWidth = screen.width;
    console.log(screen.width);
  }
  return(
    screenWidth <575 ?(
      <Navbar bg="light" expand="sm">
  <Navbar.Brand ><Link to="/" ><img src={logo} height="35px" alt=""/></Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">

    {/* <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form> */}
    <Row style={{marginTop:"5%"}}>
     <Form.Control className=" ml-auto"  type="text" placeholder="Search" id="navSearch" />
        <Button className=" mr-auto"  variant="primary" type="submit" style={{
          position: "relative",width: "8.2vw",height: "36px",marginLeft:"-15px",
          borderColor: "#FF5E00",borderStyle: "solid",background: "#FF5E00",
          borderRadius: "0px 21px 21px 0px"}}>
        <i class="fas fa-search"></i>
        </Button>
        </Row>
        <Nav >
          <Row className="d-flex justify-content-around my-5"> 

      <Link to="/" > <i style={{color:"#FF5E00", fontSize:"30px", background:"none",marginRight:"30%", border:"none"}} class="fas fa-user"/> </Link>
      <Link to="/cart" ><i style={{color:"#FF5E00", fontSize:"30px", marginRight:"30%"  }} class="fas fa-shopping-cart"/></Link>
      </Row>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    ):(
      <Navbar bg="light" expand="sm">
  <Navbar.Brand ><Link to="/" ><img src={logo} height="35px" alt=""/></Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">

    {/* <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form> */}
     <Form.Control className=" ml-auto"  type="text" placeholder="Search" id="navSearch" />
        <Button className="mr-auto" variant="primary" type="submit" style={{
          position: "relative",
          width: "8.2vw",
          height: "36px",
          marginLeft:"-30px",

          borderColor: "#FF5E00",
          borderStyle: "solid",

          background: "#FF5E00",


          borderRadius: "0px 21px 21px 0px"}}>
        <i class="fas fa-search"></i>
        </Button>
        <Nav className="mr-auto " >
      <Link to="/" > <i style={{color:"#FF5E00", fontSize:"30px", background:"none", border:"none"}} class="fas fa-user"/> </Link>
      <Link to="/cart" ><i style={{color:"#FF5E00", fontSize:"30px", marginLeft:"100%",  }} class="fas fa-shopping-cart"/></Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
    
  )
}  



// class App extends React.Component {
//   // constructor(props) {
//   //   super(props);
//   // }

//   render(){
//   return (
//   <Container  fluid style={{ backgroundColor:"white", paddingTop:"18px",paddingBottom:"38px"}}>

//   <Row>
//     <Col><button style={{ background:"none", border:"none"}}><Link to="/" ><img src={logo} height="35px" alt=""/></Link></button></Col>
//     <Col xs={5} >
//         <Form>
//         <Row>
//         <Col xs={9}>

//           <Form.Control type="text" placeholder="Search" style={{backgroundColor: "rgba(255,255,255,1)",
//             borderRadius: "49px",
//             borderWidth: "3px",
//             borderColor: "#FF5E00",
//             borderStyle: "solid",

//             width: "100%",
//             // borderRadius: "21px 0px 0px 21px",
//             height: "36px"}} />
//       </Col>


//       <Col xs={3}>

//         <Button variant="primary" type="submit" style={{
//           position: "relative",
//           width: "8.2vw",
//           height: "36px",
//           marginLeft:"-30px",

//           borderColor: "#FF5E00",
//           borderStyle: "solid",

//           background: "#FF5E00",


//           borderRadius: "0px 21px 21px 0px"}}>
//         <i class="fas fa-search"></i>
//         </Button>
//         </Col>
//           </Row>
//       </Form>
//     </Col>


//     <Col>
//       <button style={{color:"#FF5E00", fontSize:"2.1vw", marginLeft:"50%", background:"none", border:"none"}} class="fas fa-user"></button>
//       <Link to='/cart'><button style={{color:"#FF5E00", fontSize:"2.1vw", marginLeft:"10%",  background:"none", border:"none"}} class="fas fa-shopping-cart"></button></Link>
//     </Col>
//   </Row>

//   </Container>);
//  }
// }


// export default App;
