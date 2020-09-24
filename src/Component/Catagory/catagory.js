import React from 'react';
import {Container,Row,Col, ListGroup, Carousel} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ScreenSize from '../ScreenSize';
import "./Catagory.css"

export default function Catagory (){
  var screen= ScreenSize();
  if(screen !==undefined){
    var screenWidth = screen.width;
  } 
    return (
    <Container fluid style={{ backgroundColor:"white"}}>
      {screenWidth <1199 ? (
        
<Col>

<Row>
<Carousel>
<Carousel.Item>
<img
className="d-block w-100"
src="https://img.alicdn.com/tfs/TB1acpncZVl614jSZKPXXaGjpXa-990-400.jpg"
alt="First slide"
/>
<Carousel.Caption>

</Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
  <img
  className="d-block w-100"
src="https://img.alicdn.com/tfs/TB1CJGIe2zO3e4jSZFxXXaP_FXa-990-400.png"
alt="Third slide"
/>

<Carousel.Caption>

</Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
<img
className="d-block w-100"
src="https://s.alicdn.com/@img/tfs/TB1kWLLPkL0gK0jSZFAXXcA9pXa-990-400.jpg"
alt="Third slide"
/>

<Carousel.Caption>

</Carousel.Caption>
</Carousel.Item>
</Carousel>
</Row>
<Row >
{/* 
<ListGroup >

<Link style={{textDecoration: "none",color:"black"}} to="/catagory/mobile">
  <ListGroup.Item>
    <Row>
      <Col  xs={2} lg={2} md={2} sm={2}><i  className="fas fa-mobile-alt"/></Col>
      <Col xs={10} lg={9} md={9} sm={9}>Smart Phone</Col>
    </Row>
    
  </ListGroup.Item>
</Link>
<Link style={{textDecoration: "none",color:"black"}} to="/catagory/computer">
  <ListGroup.Item>
  <Row>
      <Col  xs={2} lg={2} md={2} sm={2}><i  className="fas fa-tv"/></Col>
      <Col xs={10} lg={9} md={9} sm={9}>Computer</Col>
    </Row>
      
  </ListGroup.Item>
</Link>
<Link style={{textDecoration: "none",color:"black"}} to="/catagory/furniture">
  <ListGroup.Item>
  <Row>
      <Col  xs={2} lg={2} md={2} sm={2}> <i  className="fas fa-couch"/></Col>
      <Col xs={10} lg={9} md={9} sm={9}>Furniture</Col>
    </Row>
      
  </ListGroup.Item>
</Link>
<Link style={{textDecoration: "none",color:"black"}} to="/catagory/sports">
  <ListGroup.Item>
  <Row>
      <Col  xs={2} lg={2} md={2} sm={2}><i  className="fas fa-basketball-ball"/></Col>
      <Col xs={10} lg={9} md={9} sm={9}>Sports</Col>
    </Row>
      
  </ListGroup.Item>
</Link>
<Link style={{textDecoration: "none",color:"black"}} to="/catagory/shirt">
  <ListGroup.Item>
  <Row>
      <Col  xs={2} lg={2} md={2} sm={2}><i  className="fas fa-tshirt"/></Col>
      <Col xs={10} lg={9} md={9} sm={9}>T-shirt</Col>
    </Row>
      
  </ListGroup.Item>
</Link>

</ListGroup> */}

  <Row className="mt-5 mb-5 ml-sm-auto mr-sm-auto">
    <Col ><Link to="/catagory/mobile"><button id="cover-item2" className="fas fa-mobile-alt"  ></button></Link></Col>
    <Col ><Link to="/catagory/computer"><button id="cover-item2" className="fas fa-tv" ></button></Link></Col>
    <Col ><Link to="/catagory/furniture"><button id="cover-item2" className="fas fa-couch" ></button></Link></Col>
    <Col ><Link to="/catagory/sports"><button id="cover-item2" className="fas fa-basketball-ball" ></button></Link></Col>
    <Col ><Link to="/catagory/shirt"><button id="cover-item2" className="fas fa-tshirt"></button></Link></Col>
  </Row>

</Row>

</Col>












      ):(












      <Row>
      
      <Col xs={2}>
      
      <ListGroup >
      
      <Link style={{textDecoration: "none",color:"black"}} to="/catagory/mobile">
        <ListGroup.Item id="catIcon">
          <Row>
            <Col  xs={2} lg={2} md={2} sm={2}><i className="fas fa-mobile-alt"/></Col>
            <Col xs={10} lg={9} md={9} sm={9}>Smart Phone</Col>
          </Row>
          
        </ListGroup.Item>
      </Link>
      <Link style={{textDecoration: "none",color:"black"}} to="/catagory/computer">
        <ListGroup.Item id="catIcon">
        <Row>
            <Col  xs={2} lg={2} md={2} sm={2}><i className="fas fa-tv"/></Col>
            <Col xs={10} lg={9} md={9} sm={9}>Computer</Col>
          </Row>
            
        </ListGroup.Item>
      </Link>
      <Link style={{textDecoration: "none",color:"black"}} to="/catagory/furniture">
        <ListGroup.Item  id="catIcon">
        <Row>
            <Col  xs={2} lg={2} md={2} sm={2}> <i className="fas fa-couch"/></Col>
            <Col xs={10} lg={9} md={9} sm={9}>Furniture</Col>
          </Row>
            
        </ListGroup.Item>
      </Link>
      <Link style={{textDecoration: "none",color:"black"}} to="/catagory/sports">
        <ListGroup.Item id="catIcon">
        <Row>
            <Col  xs={2} lg={2} md={2} sm={2}><i className="fas fa-basketball-ball"/></Col>
            <Col xs={10} lg={9} md={9} sm={9}>Sports</Col>
          </Row>
            
        </ListGroup.Item>
      </Link>
      <Link style={{textDecoration: "none",color:"black"}} to="/catagory/shirt">
        <ListGroup.Item id="catIcon">
        <Row>
            <Col  xs={2} lg={2} md={2} sm={2}><i className="fas fa-tshirt"/></Col>
            <Col xs={10} lg={9} md={9} sm={9}>T-shirt</Col>
          </Row>
            
        </ListGroup.Item>
      </Link>
      
      </ListGroup>
      
      </Col>
      
      <Col xs={8}>
      <Carousel>
      <Carousel.Item>
      <img
      className="d-block w-100"
      src="https://img.alicdn.com/tfs/TB1acpncZVl614jSZKPXXaGjpXa-990-400.jpg"
      alt="First slide"
      />
      <Carousel.Caption>
      
      </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        className="d-block w-100"
      src="https://img.alicdn.com/tfs/TB1CJGIe2zO3e4jSZFxXXaP_FXa-990-400.png"
      alt="Third slide"
      />
      
      <Carousel.Caption>
      
      </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
      className="d-block w-100"
      src="https://s.alicdn.com/@img/tfs/TB1kWLLPkL0gK0jSZFAXXcA9pXa-990-400.jpg"
      alt="Third slide"
      />
      
      <Carousel.Caption>
      
      </Carousel.Caption>
      </Carousel.Item>
      </Carousel>
      </Col>
      <Col xs={2}>
      </Col>
      </Row>)}
</Container>);
}

