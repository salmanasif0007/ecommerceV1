import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';


class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
 render() {
  return (
//   <Container style={{marginTop:"5%", backgroundColor:"white"}}>
//   <h4>Top Catagory</h4>
//   <Row>
//     <Col ><button id="catagoryBoxes" style={{border:"none"}}><h3 id="catagoryText">Electronics </h3></button></Col>
//     <Col id="catagoryBoxes"><h3 id="catagoryText">Smart Phone </h3></Col>
//     <Col id="catagoryBoxes"><h3 id="catagoryText">Sports </h3></Col>
//     <Col id="catagoryBoxes"><h3 id="catagoryText">Ar/Vr </h3></Col>
//   </Row>
//   <Row>
//     <Col id="catagoryBoxes"><h3 id="catagoryText">Electronics </h3></Col>
//     <Col id="catagoryBoxes"><h3 id="catagoryText">Smart Phone </h3></Col>
//     <Col id="catagoryBoxes"><h3 id="catagoryText">Sports </h3></Col>
//     <Col id="catagoryBoxes"><h3 id="catagoryText">Ar/Vr </h3></Col>
//   </Row>
// </Container>

<Container fluid id="containerCover">
<Row>
    <Col ><Link to="/catagory/mobile"><button id="cover-item2" class="fas fa-mobile-alt" value="mobile" ></button></Link></Col>
    <Col ><Link to="/catagory/computer"><button id="cover-item2" class="fas fa-tv" value="computer" ></button></Link></Col>
    <Col ><Link to="/catagory/furniture"><button id="cover-item2" class="fas fa-couch" value="furniture" ></button></Link></Col>
    <Col ><Link to="/catagory/sports"><button id="cover-item2" class="fas fa-basketball-ball" value="sports" ></button></Link></Col>
    <Col ><Link to="/catagory/shirt"><button id="cover-item2" class="fas fa-tshirt" value="shirt" ></button></Link></Col>
</Row>
</Container>
);
}
}
export default App;
