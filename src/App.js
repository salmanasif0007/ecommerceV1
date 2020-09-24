import React,{useState,useEffect} from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import {Container,Col, Button, Form} from 'react-bootstrap';
import firebase from "./firestore";
import AllRoute from './Component/Pages/AllRoute';
import TopCollection from './Component/topCollection';

function useData(){
  const[All,setData]= useState([])
  useEffect(()=>{
    
    firebase
      .firestore()
      .collection("data")
      .onSnapshot((snapshot)=>{
        const newDatas= snapshot.docs.map((doc)=>({
          id:doc.id,
          ...doc.data()
        }))
        setData(newDatas)
      })
  },[])
  if(All.length !== 0){
    return All;
  }
}

function ProductData(){
  const[product,setProduct]= useState([])
  useEffect(()=>{
    firebase
      .firestore()
      .collection("product")
      .onSnapshot((snapshot)=>{
        const newData= snapshot.docs.map((doc)=>({
          id:doc.id,
          ...doc.data()
        }))
        setProduct(newData)
      })
  },[])
  if(product.length !== 0){
    return product;
  }
}




const App =()=>{

  const[log,setLog]= useState(true);
  const data= useData()
  const product=ProductData()
    var route=[]
    if(data !== undefined ){
      route.push(<AllRoute data={data} product={product} />)
    }
 

    return (
      <div style={{color:"white"}}>
      {log===true?( 
        <div>
        <Navbar/>
        
        {route}
        </div>
        ):(
        <Container style={{marginTop:"240px"}}>
        <Col xs={2}></Col>
        <Col style={{backgroundColor:"#EC6F15", padding:"40px", borderRadius:"10px"}}>
        <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted" >
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>

  <Button variant="dark" type="submit" onClick={() => setLog(true)} >
    Submit
  </Button>
</Form>
</Col>

</Container>

        )
      }
      </div>

    );
  
}




// var prom =async ()=>{
//     const[All,setData]=  useState([])
//     useEffect(()=>{
//        firebase
//         .firestore()
//         .collection("All")
//         .onSnapshot((snapshot)=>{
//           const newDatas= snapshot.docs.map((doc)=>({
//             id:doc.id,
//             ...doc.data()
//           }))
//           setData(newDatas)
//         })
//     },[])
//    return All;
//   }



// // function App() {
// //   const [data, setData] = useState({ hits: [] });
 
// //   useEffect(async () => {
// //     const db = firebase.firestore();
    
// //     const result = await db.collection("All").get()  
    
 
// //     setData(result.data);
// //   });
 
// //   return (



// //     data.hits.map(item => (
// //      <p>{item}</p>
// //     ))






    
// //   );
// // 
// // }




// const App =()=>{
//     const [result, setResult] = React.useState([]);
//     const [loading, setLoading] = React.useState("true");
  
//     React.useEffect(() => {
//       async function fetchBookList() {
//         try {
//           setLoading("true");
//           const db = firebase.firestore();
//           var dbData=[];
//            await db.collection("All").get().then(function(querySnapshot) {
//             querySnapshot.forEach(function(doc) {
//       // console.log(doc.data());
//                dbData.push(doc.data());
//            });
//           });
//         setResult(
//            dbData
//         )
//         } catch (error) {
//           setLoading("null");
//         }
//       }

    
//         fetchBookList();
     
//     });
  
//   console.log(result); 
//   // console.log(loading); 
//   const data=result ;
  
//       if(data.length !== 0){
//   return (
//     <div style={{color:"white"}}>
//     <div>
//       <Navbar/>
//       <AllRoute data={data} />
//       </div>
    
//     </div>

//   );
//       }
//   }










  


  // const App =()=>{

    
  //   const[log,setLog]= useState(true);
  //   const data=  useAsyncHook();
 
  
     
    
  // }
  
  
  



// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { data:'' };
//     this.state = {isToggleOn: false};
//     this.handleClick = this.handleClick.bind(this);


//   }
//   handleClick() {
//     this.setState({
//       isToggleOn:false,
//     })
//   }

// async componentDidMount(){
//   // var spaceRef = storageRef.child('images/a.png');
//   var firestore = firebase.firestore();
//   var dbData=[];
//   await firestore.collection("All").get().then(function(querySnapshot) {
//   querySnapshot.forEach(function(doc) {
//       // console.log(doc.data());
//     dbData.push(doc.data());
//   });
// });
// this.setState({
//   data: {dbData},
// })
// }


//   render (){
//     // const data =useData();
//     // console.log(data);
//     return (
//       <div style={{color:"white"}}>
//       {this.state.isToggleOn===false?( 
//         <div>
//         <Navbar/>
//           <Switch>
//               <Route exact path="/"><Page1/></Route>
//               <Route path="/catagory" ><Page2/></Route>
//               <Route path="/product" ><Page3/></Route>
//               <Route path="/cart" component={Cartpage}/>
//           </Switch>
//         </div>

//         ):(
//         <Container style={{marginTop:"240px"}}>
//         <Col xs={2}></Col>
//         <Col style={{backgroundColor:"#EC6F15", padding:"40px", borderRadius:"10px"}}>
//         <Form>
//   <Form.Group controlId="formBasicEmail">
//     <Form.Label>Email address</Form.Label>
//     <Form.Control type="email" placeholder="Enter email" />
//     <Form.Text className="text-muted" >
//       We'll never share your email with anyone else.
//     </Form.Text>
//   </Form.Group>

//   <Form.Group controlId="formBasicPassword">
//     <Form.Label>Password</Form.Label>
//     <Form.Control type="password" placeholder="Password" />
//   </Form.Group>

//   <Button variant="dark" type="submit" onClick={this.handleClick}>
//     Submit
//   </Button>
// </Form>
// </Col>

// </Container>

//         )
//       }
//       </div>

//     );
//   }
// }

export default App;
