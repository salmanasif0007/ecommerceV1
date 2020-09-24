import React from 'react';
import {Card, Button, Row, Col} from 'react-bootstrap';
import ScreenSize from './ScreenSize';

function Carde(props) {
  var screen= ScreenSize();
  if(screen !==undefined){
      var screenWidth = screen.width;
  } 
  return (
    screenWidth <780 ? (
        
  <Card style={{ width: '100%', float:"left", margin:"1%"  }}>
    <button style={{border:"none", background:"none"}}>
    <Row>
      <Col>
      <Card.Img style={{ height: '40vw'}} variant="top" src={props.img} thumbnail />
      </Col>
      <Col>
      <Card.Body>
  <Card.Title  id="cardTitle1">{props.title}</Card.Title>
  <Card.Text  id="cardDetails">
    {props.description}
  </Card.Text>
  </Card.Body>
      </Col>
    </Row>
 

  </button>
  </Card>
    ):(

      <Card style={{ width: '225px', float:"left", margin:"1%"  }}><button style={{border:"none", background:"none"}}>
      <Card.Img style={{ height: '200px'}} variant="top" src={props.img} thumbnail />
      <Card.Body>
      <Card.Title id="cardTitle">{props.title}</Card.Title>
      <Card.Text id="cardDetails">
        {props.description}
      </Card.Text>
      {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
      </button>
      </Card>
    )
  
  );
  
}

  export default Carde;
