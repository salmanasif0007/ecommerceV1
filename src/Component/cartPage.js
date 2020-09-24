import React, { useState, useEffect } from 'react';
import firebase from "../firestore";
import {Container,Row,Col} from 'react-bootstrap';
import Cart from './cart';
import ScreenSize from './ScreenSize';



//  class App extends React.Component {
//   // constructor(props) {
//    //   super(props);
//   // }

//   render(){   return(
//  <Container style={{color:"black"}}>
// <Row>
// <Col>
// <Cart/>

// </Col>
// <Col xs={3} style={{height:"530px", backgroundColor:"white",marginTop:"100px"}}>
//   <Row><Col><h6 style={{float:"left", marginTop:"50px"}}>Subtotal</h6></Col><Col><h6 style={{float:"right",marginTop:"50px"}}>100TK.</h6></Col></Row>

//   <Row><Col><h6 style={{float:"left", marginTop:"50px"}}>Shipping</h6></Col><Col><h6 style={{float:"right",marginTop:"50px"}}>50TK.</h6><hr/></Col></Row>

//   <Row><Col><h6 style={{float:"left", marginTop:"50px"}}>Total</h6></Col><Col><h6 style={{float:"right",marginTop:"50px"}}>100TK.</h6></Col></Row>

//   <Row><Col><h6 style={{float:"left", marginTop:"50px"}}>Payable Total</h6></Col><Col><h6 style={{float:"right",marginTop:"50px"}}>150TK.</h6><hr/></Col></Row>

//   <Row><button  style={{marginTop:"150px", marginLeft:"50px"}}>PROCEED TO CHECKOUT</button></Row>
// </Col>
// </Row>
// </Container> 
//     )
//    }
//  }

//  export default App;

function SubTotal(props){
  var subtotal = 0;
    props.data.forEach(data =>{
      var total = parseInt(data.total)
      subtotal = subtotal + total
    })
return(
  <Col lg={3} md={12} xs={12} sm={12} style={{height:"530px", backgroundColor:"white",marginTop:"100px"}}>
  <Row><Col><h6 style={{float:"left", marginTop:"50px"}}>Subtotal</h6></Col><Col><h6 style={{float:"right",marginTop:"50px"}}>{subtotal}TK.</h6></Col></Row>

  <Row><Col><h6 style={{float:"left", marginTop:"50px"}}>Shipping</h6></Col><Col><h6 style={{float:"right",marginTop:"50px"}}>50TK.</h6><hr/></Col></Row>

  <Row><Col><h6 style={{float:"left", marginTop:"50px"}}>Total</h6></Col><Col><h6 style={{float:"right",marginTop:"50px"}}>{subtotal}TK.</h6></Col></Row>

  <Row><Col><h6 style={{float:"left", marginTop:"50px"}}>Payable Total</h6></Col><Col><h6 style={{float:"right",marginTop:"50px"}}>{subtotal !==0 ?(subtotal+50):(subtotal)}TK.</h6><hr/></Col></Row>

  <Row><button  style={{marginTop:"150px", marginLeft:"50px"}}>PROCEED TO CHECKOUT</button></Row>
</Col>
)
}






export default function CartPage() {
  const [cartList, setCartList] = useState();
  var screen= ScreenSize();
  if(screen !==undefined){
    var screenWidth = screen.width;
  } 
  useEffect(() => {
  const cartRef = firebase.database().ref('cart');
  cartRef.on('value', (snapshot) => {
      const carts = snapshot.val();
      
      const cartList = [];
      const sub= [] 
      
      for (let id in carts) {
        cartList.push({ id, ...carts[id] });

        // sub.push({...carts[id]});
        
      }
      // setCartTotal(sub);
      setCartList(cartList);
      // console.log("Amount : "+ cartTotal);
      

      

  });
  }, []);
//   for( var i =0;i<cartTotal.length;i++){
//   if(cartTotal[i] !== undefined){
//     var x =parseInt(cartTotal[i].price)
//     sub=(sub + x) ;
//   }
// }



  return (
    screenWidth <991 ? (
<div>
  <Container   style={{color:"black"}}>                                   
              <Col>
              <Row>
              
          {cartList
          ? cartList.map((cart,index) =>
                  
                  <Cart screenWidth={screenWidth}  cart={cart} key={index}/>
                  
                )
                : (<div style={{fontSize:'35px',color:"black",textAlign:"center",margin:'5% 35%'}} >
                    
                        Waiting For Cart....
                    
                  
                </div>)}
                </Row>
                {cartList ?
                  (<SubTotal data={cartList}/>):(null)
                }
                
              </Col>
              </Container>
  </div>
    ):(

      <div>
  <Container   style={{color:"black"}}>                                   
              <Row>
              <Col >
              
          {cartList
          ? cartList.map((cart,index) =>
                  
                  <Cart cart={cart} key={index}/>
                  
                )
                : (<div style={{fontSize:'35px',color:"black",textAlign:"center",margin:'5% 35%'}} >
                    
                        Waiting For Cart....
                    
                  
                </div>)}
                </Col>
                {cartList ?
                  (<SubTotal data={cartList}/>):(null)
                }
                
              </Row>
              </Container>
  </div>
    )
      
  );
}





