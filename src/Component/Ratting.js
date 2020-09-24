import React from 'react';


function Ratting(props){
    var x=props.num;
    var arr=[];
    for( var i=0;i<x;i++){
    arr.push(<span style={{color:"yellow"}} class="fa fa-star checked"></span>);
    }
    for( i=x;i<5;i++){
    arr.push(<span class="fa fa-star"></span>);
    }
    return(
    <div>

    {arr}

    </div>
    )
    }
    export default Ratting; 