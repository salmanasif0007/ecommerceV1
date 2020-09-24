import React,{Component} from 'react';
import {Route, Switch } from 'react-router-dom';
import Page1 from "./Page1";
import Page3 from "./Page3";
import Page2 from "./Page2";
import Cartpage from '../cartPage';
import Uploder from '../Uploder';
import AdminProductListControll from '../Admin-ProductList-Controll';
import ScreenSize from '../ScreenSize';


function AllRoute (props) {
    var screen= ScreenSize();
    if(screen !==undefined){
        var screenWidth = screen.width;
    } 
        return (
            <Switch>
            <Route exact path="/"><Page1 all={ props.data}/></Route>
            <Route path="/catagory/:id" ><Page2 all={ props.data}/></Route>
            <Route path="/product/:id" ><Page3 screenWidth={screenWidth} product={ props.product} /></Route>
            <Route path="/cart" component={Cartpage}/>
            <Route path='/uploder/controll' component={AdminProductListControll}/> 
            <Route path="/uploder" component={Uploder}/>
        </Switch>
        );
    
}

export default AllRoute;