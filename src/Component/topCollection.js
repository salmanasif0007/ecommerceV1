import React,{useState,useEffect} from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import firebase from "../firestore";
import { Link} from 'react-router-dom';

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
  if(All.length !==0){
    return All;
  }
}


  const TopCollection =()=>{
var arr=[]
  const data =useData();
  if(data !== undefined){
    arr.push(  data[0].topCollection.map((data)=>
      <Link to={"/product/"+data.productId}><Row key={data.productId} id="cover-item"><img height="100%" width="100%" src={data.productImg} alt=""/></Row></Link>
    ))
  }
  return (
    <Container fluid style={{background: "white", marginTop:"2.8vw", paddingTop:".7vw"}}>
      <Col id="containerCover">
        {arr}
      </Col>
    </Container>
  );
}


export default TopCollection;
