
import React, { useState } from 'react';
import firebase from '../../firestore';


export default function AddComment(props) {
const [text, setText] = useState('');

const handleOnChange = (e) => {
setText(e.target.value);
};
const createMessage = () => {
if(text !==''){
    const messageRef = firebase.database().ref("comment").child(props.data);
const message = {
    text,
    // name:{
    //     displayName:firebase.auth().currentUser.displayName,
    //     email:firebase.auth().currentUser.email,
    //     uid:firebase.auth().currentUser.uid,
    //     photoURL:firebase.auth().currentUser.photoURL,
    //     },
}; 

messageRef.child("/data").push(message);
}
else{
    alert("Please test some message");
}
};
return (

<div  className="enter-message">

    <input id='messagesend' type="text" onChange={handleOnChange} value={text} />
    <button style={{border:'none',color:"#C4C4C4",borderRadius:'50%',padding:'10px',background:"#646566",fontSize:"25px" ,marginLeft:"1%"}} className="far fa-paper-plane" onClick={createMessage}/>
</div>
);
}

