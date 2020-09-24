import React from 'react';
import firebase from "../firestore";
import {Container,Row,Col} from 'react-bootstrap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {quantity:this.props.cart.quantity};
    this.up=this.up.bind(this);
    this.down=this.down.bind(this);
  }

  

  async up() {

    this.setState({
      quantity:this.state.quantity + 1
    }, () => {
      console.log("Quantity " + this.state.quantity);

    var subtotal=(this.props.cart.price * this.state.quantity)
    const cartRef = firebase.database().ref('cart').child(this.props.cart.id);
    cartRef.update({
      quantity:this.state.quantity,
      total:subtotal,
    });
    })
  
    
    

    
  }
  down() {
    if(this.state.quantity > 1){
      
      this.setState({quantity: this.state.quantity - 1},()=>{
      var subtotal=(this.props.cart.price * this.state.quantity)
      const cartRef = firebase.database().ref('cart').child(this.props.cart.id);
      cartRef.update({
        quantity:this.state.quantity,
        total:subtotal,
      });
    });

    }
      // console.log("Delete");
      // const cartRef = firebase.database().ref('cart').child(this.props.cart.id);
      //   cartRef.remove();
    
    

    
  }
  render(){
  return(
    this.props.screenWidth <991 ? (
      <Container fluid style={{marginTop:"100px"}}>
      <Row  style={{height:"180px", backgroundColor:"White"}}>
        <Col xs={3} > <img src={this.props.cart.img} style={{marginTop:"50%", marginRight:"5%"}} height="50%" width="100%" alt=""/>  </Col>
        
        <Col className="cardDetails" style={{marginTop:"50px"}}><Row><h6>{this.props.cart.name}</h6></Row><Row><h6>{this.props.cart.price}/=</h6></Row> </Col>
        <Col xs={1}></Col>
        <Col> 
        <Row  className="justify-content-center"style={{marginTop:"45px",marginRight:"50%"}}>
          <button className="fas fa-sort-up" style={{background:"none",border:"none",fontSize:"30px"}} onClick={() => this.up()} />
          </Row>

          <Row  className="justify-content-center" style={{border:"1px solid black",marginRight:"50%"}} >{this.props.cart.quantity}</Row>
          
          <Row className="justify-content-center" style={{marginRight:"50%"}}>
            <button className="fas fa-sort-down " style={{background:"none",border:"none",fontSize:"30px"}} disabled={this.state.quantity === 1} onClick={() => this.down()}/>
            
          </Row> 
          
        </Col>
        <Col xs={2}></Col>
        <Col>        <Row > <h3 style={{marginTop:"45px",fontSize:"15px"}}>{this.props.cart.total}/=</h3> </Row>
        
        
        <Row >
          
          <button title="Delete Cart" style={{marginTop:"40%",marginLeft:"50%",border:'none',background:'none'}} className="far fa-trash-alt"
        onClick={() => {
          const cartRef = firebase.database().ref('cart').child(this.props.cart.id);
        cartRef.remove();
        }}
        
        ></button></Row>
        </Col>

      </Row>
      </Container>
    ):(
      <Container style={{marginTop:"100px"}}>
      <Row xs={9} style={{height:"180px", backgroundColor:"White"}}>
        <Col xs={3} > <img src={this.props.cart.img} height="100%" width="100%" alt=""/>  </Col>
        <Col xs={1}></Col>
        <Col className="cardDetails" style={{marginTop:"50px"}}><Row><h6>{this.props.cart.name}</h6></Row><Row><h6>{this.props.cart.price}/=</h6></Row> </Col>
        <Col xs={1}></Col>
        <Col> 
        <Row  className="justify-content-center"style={{marginTop:"45px",marginRight:"50%"}}>
          <button className="fas fa-sort-up" style={{background:"none",border:"none",fontSize:"30px"}} onClick={() => this.up()} />
          </Row>

          <Row  className="justify-content-center" style={{border:"1px solid black",marginRight:"50%"}} >{this.props.cart.quantity}</Row>
          
          <Row className="justify-content-center" style={{marginRight:"50%"}}>
            <button className="fas fa-sort-down " style={{background:"none",border:"none",fontSize:"30px"}} disabled={this.state.quantity === 1} onClick={() => this.down()}/>
            
          </Row> 
          
        </Col>
        <Col xs={1}></Col>
        <Col>        <Row > <h3 style={{marginTop:"45px"}}>{this.props.cart.total}/=</h3> </Row>
        
        
        <Row >
          
          <button title="Delete Cart" style={{marginTop:"40%",marginLeft:"75%",border:'none',background:'none'}} className="far fa-trash-alt"
        onClick={() => {
          const cartRef = firebase.database().ref('cart').child(this.props.cart.id);
        cartRef.remove();
        }}
        
        ></button></Row>
        </Col>

      </Row>
      </Container>
    )
    
    )
  }
}

  export default App;





  
  // export default function Cart() {
  //     const [cartList, setCartList] = useState();
  //     useEffect(() => {
  //     const cartRef = firebase.database().ref('cart');
  //     cartRef.on('value', (snapshot) => {
  //         const carts = snapshot.val();
  //         const cartList = [];
  //         for (let id in carts) {
  //           cartList.push({ id, ...carts[id] });
  //         }
  //         setCartList(cartList);
          
  //     });
  //     }, []);
      
  //     return (
          
  //         <div>
  //     <Container  id="box" fluid>
  //             {cartList
  //             ? cartList.map((cart) =>
  //               <Container  key={cart.id} style={{marginTop:"100px"}}>
  //                 <Row xs={9} style={{height:"180px", backgroundColor:"White"}}>
  //                   <Col xs={3} > <img src={cart.img} height="100%" width="100%" alt=""/> </Col>
  //                   <Col xs={1}></Col>
  //             <Col style={{marginTop:"50px"}}><Row><h6>{cart.name}</h6></Row><Row><h6>{cart.price}/=</h6></Row> </Col>
  //                   <Col xs={1}></Col>
  //                   <Col>  <Row style={{marginTop:"45px"}}><Button/></Row><Row>4</Row><Row><Button/></Row>  </Col>
  //                   <Col xs={1}></Col>
  //                     <Col > <h3 style={{marginTop:"45px"}}>{cart.price}/=</h3> </Col>
  //                 </Row>
  //               </Container>
  //             )
  //             : (<div style={{fontSize:'35px',color:"black",textAlign:"center",margin:'5% 35%'}} >
                  
  //                     Waiting For Cart....
                  
                
  //             </div>)}
              
  //     </Container>
  //     </div>
  //     );
  // }
  
  
  
  
  
  