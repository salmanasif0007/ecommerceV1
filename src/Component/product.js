import React from 'react';
// import logo from 'C:/Users/User/Desktop/Ecommerce/src/Logo.png';
// import NavbarItem from './Component/Navbar';
import {Container,Row,Col,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import firebase from "../firestore";

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state={}
    this.handleChange = this.handleChange.bind(this);
  }

handleChange(){
  const messageRef = firebase.database().ref('cart');
  const message = {
      img:this.props.product.productImg,
      name:this.props.product.productName,
      quantity:1,
      total:this.props.product.productPrice,
      price:this.props.product.productPrice,
  }; 
  
  messageRef.push(message)
}

//   }
  render() {
    console.log(this.props.product)
    return (
    <Container style={{marginTop:"100px"}}>
  <Row>
    <Col style={{backgroundColor:"white", height: "600px"}}>
    <Row>
      <img style={{ marginLeft:"50px"}}  src={this.props.product.productImg} height="400px" width="400px" alt=""/>
    </Row>
    <Row style={{marginTop:"60px"}}>
      <Col style={{backgroundColor:"lightgray", height:"100px", marginLeft:"50px"}} xs={2}></Col>
      <Col style={{backgroundColor:"lightgray", height:"100px", marginLeft:"10px"}} xs={2}></Col>
      <Col style={{backgroundColor:"lightgray", height:"100px", marginLeft:"10px"}} xs={2}></Col>
    </Row>
    </Col>
    <Col style={{backgroundColor:"white", height: "600px",marginLeft:"1%", paddingTop:"10%", paddingLeft:"10%"}}>

    <Row>
      <Col style={{marginBottom:"5%"}}><h1>{this.props.product.productName} </h1></Col>
    </Row>
    <Row>
    <Col style={{marginBottom:"9%"}}><h2>Price: {this.props.product.productPrice} BDT</h2></Col>
    </Row>
    <Row>
      {/* <Col xs={2}>Quality:</Col>
      <Col xs={1} style={{borderStyle: "groove", height:"40px", backgroundColor:"#F2F3F8"}}></Col> */}
      <Col ><Button onClick={this.handleChange}>Add To Cart</Button><Link to="/cart"><Button style={{marginLeft:"15px"}}>Buy Now</Button></Link></Col>

    </Row>
    <Row style={{marginTop:"8%"}}>
        <Col xs={7}> </Col>
    </Row>
    </Col>
  </Row>
</Container>);
}
}

export default Product;
