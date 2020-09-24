
import React, { useState, useEffect } from 'react';
import firebase from '../../firestore';
import { Container, Row, Col } from 'react-bootstrap';
import ScrollableFeed from 'react-scrollable-feed'
import AddComment from './AddComment';


export default function CommentBox(props) {
    const [todoList, setTodoList] = useState();
    useEffect(() => {
    const todoRef = firebase.database().ref(`comment/${props.ret}`).child("/data");
    todoRef.on('value', (snapshot) => {
        const todos = snapshot.val();
        const todoList = [];
        for (let id in todos) {
        todoList.push({ id, ...todos[id] });
        }
        setTodoList(todoList);
        
    });
    }, []);

    return (
        
        <div>
        
    <Container  id="box" fluid>
    <ScrollableFeed>
                
            {todoList
            ? todoList.map((todo) =>
            <Row key={todo.id} style={{marginTop:"10px"}}>
                    {/* {todo.name.photoURL ?(
                        <Col xs={1}><img src={todo.name.photoURL} alt={todo.name.displayName} className="avatar"></img></Col> 
                    ):( */}
                        <Col className="fas fa-user-circle" style={{fontSize:"40px",color:"#C4C4C4"}} xs={1}></Col> 
                    {/* )} */}
                    
                    <Col  className="text-left" xs={11}><p style={{background:"#4E555E",padding:'3px 10px',fontSize:"20px",color:"#C4C4C4",borderRadius: "10px" }}>{todo.text} </p></Col>
                </Row>
            )
            : (<div style={{fontSize:'40px',color:"white",textAlign:"center",margin:'10% 42%'}} >
                <Row>
                    Waiting For 
                </Row>
                <Row>
                    Go Justitech  
                </Row>
                <Row>
                    Message  
                </Row>
            </div>)}
            
                </ScrollableFeed>
    </Container>
    {todoList
            ? (
            <AddComment data={props.ret}/>
            )
            : ''}
    </div>
    );
}

