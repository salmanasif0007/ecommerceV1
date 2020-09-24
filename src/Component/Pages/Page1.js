import React from 'react';
import Catagory from '../Catagory/catagory';
import logo from "../../Logo.png";
import Carde from '../card';
import TopCatagory from '../topCatagory';
import TopCollection from '../topCollection';
import {Container,Col} from 'react-bootstrap';
import { Link} from 'react-router-dom';
import NewArrival from '../NewArrival';
import ScreenSize from '../ScreenSize';


export default function Page1 (props){

        var recommendedProduct =[];
        for(var i=0;i<props.all[0].recomended.length;i++){
            recommendedProduct.push(<Link to={"/product/"+props.all[0].recomended[i].productId}><Carde style={{fontSize:"5px"}} title={props.all[0].recomended[i].productName} img={props.all[0].recomended[i].productImg} description={props.all[0].recomended[i].productDetails}/></Link>);
        }
        var screen= ScreenSize();
            if(screen !==undefined){
                var screenWidth = screen.width;
            } 
    return(
        screenWidth <1199 ? (
<div>


{/* "First Catagory" */}


<Catagory style={{marginTop:"120px"}}/>


{/* "Top Collection" */}


<TopCollection data={props.all[0].topCollection} name="Top Collection" />


<Container fluid style={{backgroundColor:"white", height:"14vw", marginBottom:"1.4vw"}}>
<img src={logo}  style={{marginLeft:"42%", marginTop:"2vw", height:'10vw'}} alt=""/>
</Container>
<Container fluid>


{/* "New Arrival" */}


<NewArrival/>





{/* recommendedProduct */}

 
{recommendedProduct}



</Container>
{/* <Container fluid style={{height:"60px", color:"black", backgroundColor:"black",marginTop:"75%"}}>
<h5 style={{color:"white", marginLeft:"40%"}}>Copy Right 2020 Go Justitech Corp.</h5>
</Container> */}
</div>



        ):(
            <div>


                                            {/* "First Catagory" */}


            <Catagory style={{marginTop:"120px"}}/>


                                            {/* "Top Collection" */}


            <TopCollection data={props.all[0].topCollection} name="Top Collection" />


                                            {/* "Top Catagory" */}


            <TopCatagory/>


                                            {/* "New Arrival" */}


            <NewArrival name="New Arrival"/>


            <Container fluid style={{backgroundColor:"white", height:"200px", marginBottom:"20px"}}>
                <img src={logo}  style={{marginLeft:"42%", marginTop:"30px", height:'140px'}} alt=""/>
            </Container>
            <Container >


                                            {/* recommendedProduct */}

            <Container>
                <div style={{alignItems:"center",backgroundColor:"black"}} >
                    {recommendedProduct}
                    </div>
            </Container>


            </Container>
            <Container fluid style={{height:"60px", color:"black", backgroundColor:"black",marginTop:"75%"}}>
                <h5 style={{color:"white", marginLeft:"40%"}}>Copy Right 2020 Go Justitech Corp.</h5>
            </Container>
        </div>
        )
        
    )
}








            // console.log( this.state.data.dbData[0].Catagory[2])
         // console.log(this.state.data[0].Catagory[2]);
         // console.log(this.props.all[0].topCollection[2]);

        
  //   function Page1(props){
  //   console.log(  )
  //   return (
  //     <div>
  //       <Catagory/>
  //     <TopCollection name="Top Collection"/>
  //     <TopCatagory/>
  //
  //     <TopCollection name="New Arrival"/>
  //     <Container fluid style={{backgroundColor:"white", height:"200px", marginBottom:"20px"}}>
  //       <img src={logo} style={{marginLeft:"42%", marginTop:"30px", height:'140px'}}/>
  //     </Container>
  //     <Container>
  //
  //       <Carde title="Racket" img="https://sc01.alicdn.com/kf/Hcd501cd9d55748dbb342eca66b83c4a1q.png" description="This a badminton racket made in Kushtia. Though it looks like a Camera it is not. Its a badminton Racket"/>
  //       <Carde title="Racket" img="https://sc01.alicdn.com/kf/Hcd501cd9d55748dbb342eca66b83c4a1q.png" description="This a badminton racket made in Kushtia. Though it looks like a Camera it is not. Its a badminton Racket"/>
  //       <Carde title="Racket" img="https://sc01.alicdn.com/kf/Hcd501cd9d55748dbb342eca66b83c4a1q.png" description="This a badminton racket made in Kushtia. Though it looks like a Camera it is not. Its a badminton Racket"/>
  //       <Carde title="Racket" img="https://sc01.alicdn.com/kf/Hcd501cd9d55748dbb342eca66b83c4a1q.png" description="This a badminton racket made in Kushtia. Though it looks like a Camera it is not. Its a badminton Racket"/>
  //       <Carde title="Racket" img="https://sc01.alicdn.com/kf/Hcd501cd9d55748dbb342eca66b83c4a1q.png" description="This a badminton racket made in Kushtia. Though it looks like a Camera it is not. Its a badminton Racket"/>
  //       <Carde title="Racket" img="https://sc01.alicdn.com/kf/Hcd501cd9d55748dbb342eca66b83c4a1q.png" description="This a badminton racket made in Kushtia. Though it looks like a Camera it is not. Its a badminton Racket"/>
  //       <Carde title="Racket" img="https://sc01.alicdn.com/kf/Hcd501cd9d55748dbb342eca66b83c4a1q.png" description="This a badminton racket made in Kushtia. Though it looks like a Camera it is not. Its a badminton Racket"/>
  //
  //     </Container>
  //     <Container fluid style={{height:"60px", color:"black", backgroundColor:"black",marginTop:"75%"}}>
  //       <h5 style={{color:"white", marginLeft:"40%"}}>Copy Right 2020 Go Justitech Corp.</h5>
  //     </Container>
  //     </div>
  //   )
  // }