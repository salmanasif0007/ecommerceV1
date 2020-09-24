import {Container,Row,Col} from 'react-bootstrap';
import React,{Component} from 'react';
import RattingAll from "../RattingAll";
import Product from "../product";
import CommentBox from '../Comments/CommentBox';


class Page3 extends Component {

    render(){
        var productfile=[]
        const id=window.location.pathname;
        var ret = id.replace("/product/",'');
        console.log(ret) 
        if(this.props.product !==undefined){
            for(var i=0; i<this.props.product.length;i++){
                if(this.props.product[i].id===ret){
                
                    productfile.push(
                        this.props.screenWidth <768 ?(
<div style={{color:"black"}}>
            <Product product={this.props.product[i]}/>
            <Container fluid style={{marginTop:"100px"}}>
                <Col>
                        <Row style={{backgroundColor:"white", padding:"5%"}}>{this.props.product[i].productDetails}</Row>
                    <Row style={{margin:"3%"}}>
                        <Col style={{backgroundColor:"orange", height:"14vw", width:'100%', marginLeft:"20px"}}></Col>
                        <Col style={{backgroundColor:"orange", height:"14vw", width:'100%', marginLeft:"20px"}}></Col>
                        <Col style={{backgroundColor:"orange", height:"14vw", width:'100%', marginLeft:"20px"}}></Col>
                        <Col style={{backgroundColor:"orange", height:"14vw", width:'100%', marginLeft:"20px"}}></Col>
                        <Col style={{backgroundColor:"orange", height:"14vw", width:'100%', marginLeft:"20px"}}></Col>
                    </Row>
                </Col>
            </Container>
            {/* <RattingAll/> */}
            <Container fluid>
            
            <CommentBox ret={ret}/>
            </Container>
        </div>
                        ):(
                            <div style={{color:"black"}}>
            <Product product={this.props.product[i]}/>
            <Container fluid style={{marginTop:"100px"}}>
                <Row>
                    <Col xs={9}>
                        <Col style={{backgroundColor:"white", padding:"5%"}}>
                        
                        {this.props.product[i].productDetails}
                    </Col>
                </Col>
                    <Col style={{margin:"3%"}}>
                        <Row style={{backgroundColor:"orange", height:"200px", marginBottom:"20px"}}></Row>
                        <Row style={{backgroundColor:"orange", height:"200px", marginBottom:"20px"}}></Row>
                        <Row style={{backgroundColor:"orange", height:"200px", marginBottom:"20px"}}></Row>
                        <Row style={{backgroundColor:"orange", height:"200px", marginBottom:"20px"}}></Row>
                        <Row style={{backgroundColor:"orange", height:"200px", marginBottom:"20px"}}></Row>
                    </Col>
                </Row>
            </Container>
            <RattingAll/>
            <Container fluid>
            {/* <Col style={{background: "white",height:"100%",padding:"3%",borderRadius: "10px"}}>
                <Row style={{marginTop:"10px"}}>
                    <Col className="fas fa-user-circle" style={{fontSize:"30px",color:"#C4C4C4"}} xs={1}></Col>
                    <Col style={{backgroundColor:"#F2F3F8",paddingTop:"12px",fontSize:"14px",color:"black",borderRadius: "10px" }} className="text-left" xs={11}><p><Ratting num='3'/>Hello, long time no see! How are you doing these days. How is you pet cat doing? Is she still alive or dead?</p></Col>
                </Row>
                <Row style={{marginTop:"10px"}}>
                    <Col className="fas fa-user-circle" style={{fontSize:"30px",color:"#C4C4C4"}} xs={1}></Col>
                    <Col style={{backgroundColor:"#F2F3F8",paddingTop:"12px",fontSize:"14px",color:"black",borderRadius: "10px" }} className="text-left" xs={11}><p><Ratting num='4'/>Hello, long time no see! </p></Col>
                </Row>
                <Row style={{marginTop:"10px"}}>
                    <Col className="fas fa-user-circle" style={{fontSize:"30px",color:"#C4C4C4"}} xs={1}></Col>
                    <Col style={{backgroundColor:"#F2F3F8",paddingTop:"12px",fontSize:"14px",color:"black",borderRadius: "10px" }} className="text-left" xs={11}><p><Ratting num='2'/>Hello, long time no see! How are you doing these days. </p></Col>
                </Row>
            </Col> */}
            <CommentBox ret={ret}/>
            </Container>
        </div>
                        )
                        
                    )

                }
            }
        }
    return(
        
        this.props !==undefined ?(
            productfile
        ):(<div style={{fontSize:'50px',color:"white",textAlign:"center",margin:'8% 38%'}}>
            <h1>Please Wait.....</h1>
        </div>)
    );
    }}
    export default Page3;