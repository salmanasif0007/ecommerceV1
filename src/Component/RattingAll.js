import {Container,Row,Col,ProgressBar} from 'react-bootstrap';
import Ratting from "./Ratting";
import React from 'react';

  function RattingAll(props){
    var x=1;
    var y=10;
    return(
    <div>
  
      <Container style={{backgroundColor:"white", marginBottom:"100px", height:"300px", borderRadius:"10px", paddingTop:"60px"}}>
        <Row >
  
          <Col>
            <h1>{x}/5</h1>
            <Ratting num="4"/>
            <p>{y} Ratting</p>
          </Col>
          <Col>
            <Ratting num="5"/>
            <Ratting num="4"/>
            <Ratting num="3"/>
            <Ratting num="2"/>
            <Ratting num="1"/>
          </Col>
          <Col >
            <ProgressBar now={60} style={{marginBottom:"10px"}}/>
            <ProgressBar now={70} style={{marginBottom:"10px"}}/>
            <ProgressBar now={40} style={{marginBottom:"10px"}}/>
            <ProgressBar now={10} style={{marginBottom:"10px"}}/>
            <ProgressBar now={0}  style={{marginBottom:"10px"}}/>
          </Col>
          <Col xs={4}></Col>
  
        </Row>
        <hr/>
      </Container>
  
  
    </div>
  )
  }
  export default RattingAll; 