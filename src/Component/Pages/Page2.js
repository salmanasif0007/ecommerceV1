import {Container,Row,Col} from 'react-bootstrap';
import React from 'react';
import Carde from '../card';
import { Link } from 'react-router-dom';


export default class Page2 extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {datatype:'mobile'};
    }
    componentDidMount(){
        const id=window.location.pathname;
        var ret = id.replace("/catagory/",'');
        this.setState({
            datatype:ret
        });
    }
    handleClick=(e)=>{
        this.setState({
            datatype:e.target.value
        });
        
    }
    render(){
        console.log(this.props.name);
        var arr=[];
            for(var i=0;i<this.props.all[0].allProducts.length;i++){
                if(this.state.datatype==="mobile"){
                    if(this.props.all[0].allProducts[i].type==="Smart Phone"){
                        arr.push(<Link to = {"/product/"+this.props.all[0].allProducts[i].productId}><Carde title={this.props.all[0].allProducts[i].productName} img={this.props.all[0].allProducts[i].productImg} description={this.props.all[0].allProducts[i].productDetails}/></Link>)
                    }
                    
                }
                else if(this.state.datatype==="computer"){
                    if(this.props.all[0].allProducts[i].type==="Computer"){
                        arr.push(<Link to = {"/product/"+this.props.all[0].allProducts[i].productId}><Carde title={this.props.all[0].allProducts[i].productName} img={this.props.all[0].allProducts[i].productImg} description={this.props.all[0].allProducts[i].productDetails}/></Link>)
                    }
                    
                }
                else if(this.state.datatype==="furniture"){
                    if(this.props.all[0].allProducts[i].type==="Furniture"){
                        arr.push(<Link to = {"/product/"+this.props.all[0].allProducts[i].productId}><Carde title={this.props.all[0].allProducts[i].productName} img={this.props.all[0].allProducts[i].productImg} description={this.props.all[0].allProducts[i].productDetails}/></Link>)
                    }
                    
                }
                else if(this.state.datatype==="sports"){
                    if(this.props.all[0].allProducts[i].type==="Sports"){
                        arr.push(<Link to = {"/product/"+this.props.all[0].allProducts[i].productId}><Carde title={this.props.all[0].allProducts[i].productName} img={this.props.all[0].allProducts[i].productImg} description={this.props.all[0].allProducts[i].productDetails}/></Link>)
                    }
                    
                }
                else if(this.state.datatype==="shirt"){
                    if(this.props.all[0].allProducts[i].type==="T-shirt"){
                        arr.push(<Link to = {"/product/"+this.props.all[0].allProducts[i].productId}><Carde title={this.props.all[0].allProducts[i].productName} img={this.props.all[0].allProducts[i].productImg} description={this.props.all[0].allProducts[i].productDetails}/></Link>)
                    }
                    
                }
    }
    return (
        <div>
            <Container style={{height:'15vw'}} fluid id="containerCover">
                <Row>
                    <Col ><Link to="/catagory/mobile"><button id="cover-item2" class="fas fa-mobile-alt" value="mobile" onClick={this.handleClick}></button></Link></Col>
                    <Col ><Link to="/catagory/computer"><button id="cover-item2" class="fas fa-tv" value="computer" onClick={this.handleClick}></button></Link></Col>
                    <Col ><Link to="/catagory/furniture"><button id="cover-item2" class="fas fa-couch" value="furniture" onClick={this.handleClick}></button></Link></Col>
                    <Col ><Link to="/catagory/sports"><button id="cover-item2" class="fas fa-basketball-ball" value="sports" onClick={this.handleClick}></button></Link></Col>
                    <Col ><Link to="/catagory/shirt"><button id="cover-item2" class="fas fa-tshirt" value="shirt" onClick={this.handleClick}></button></Link></Col>
                </Row>
            </Container>
            <Container>
            <div> {arr} </div>
                        </Container>
        </div>
    )}
}
