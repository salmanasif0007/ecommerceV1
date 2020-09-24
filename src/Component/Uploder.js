import React, {Component} from 'react';
import firebase from "../firestore";

export default class Uploder extends Component {
    constructor(props) {
        super(props);
        this.ref = firebase.firestore().collection('ProductList');
        this.state = {
        image: null,
        productImg: '',
        productName: '',
        productDetails: '',
        type: '',
        price:'',
        id:'',
        }
        
        this.handleChange = this
        .handleChange
        .bind(this);
        this.handleUpload = this.handleUpload.bind(this);
    }
    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
    }
    onSubmit = (e) => {
        e.preventDefault();

        const { productName, productDetails, type ,productImg,price,id} = this.state;

        this.ref.add({
        id,
        }).then((docRef) => {
            this.ref.doc(docRef.id).set({
                productName,
                productDetails,
                type,
                productImg,
                price,
                id:docRef.id
            });
        this.setState({
            productName: '',
            productDetails: '',
            type: '',
            productImg:'',
            price:'',
            id:'',
        });
        this.props.history.push("/")
        })
        .catch((error) => {
        console.error("Error adding document: ", error);
        });
    }
    handleChange = e => {
        if (e.target.files[0]) {
        const image = e.target.files[0];
        this.setState(() => ({image}));
        
        const uploadTask = firebase.storage().ref(`images/${image.name}`).put(image);
        uploadTask.on('state_changed', 
        (snapshot) => {
            // progrss function ....
            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            this.setState({progress});
        }, 
        (error) => {
            // error function ....
            console.log(error);
        }, 
        () => {
            // complete function ....
            firebase.storage().ref('images').child(image.name).getDownloadURL().then(productImg => {
                console.log(productImg);
                this.setState({productImg});
            })
        });
        }
    }
    handleUpload = () => {
        const {image} = this.state;
        const uploadTask = firebase.storage().ref(`images/${image.name}`).put(image);
        uploadTask.on('state_changed', 
        (snapshot) => {
            // progrss function ....
            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            this.setState({progress});
        }, 
        (error) => {
            // error function ....
            console.log(error);
        }, 
        () => {
            // complete function ....
            firebase.storage().ref('images').child(image.name).getDownloadURL().then(productImg => {
                console.log(productImg);
                this.setState({productImg});
            })
        }); 
    }
    render() {
        const { productName, productDetails, type ,price } = this.state;
        return (
        <div class="container">
            <div class="panel panel-default">
            <div class="panel-heading">
            </div>
                <div class="panel-body">
                <form onSubmit={this.onSubmit}>
                <div class="form-group">
                    <label for="productName">Title:</label>
                    <input type="text" class="form-control" name="productName" value={productName} onChange={this.onChange} placeholder="Title" />
                </div>
                <div class="form-group">
                    <label for="title">Price:</label>
                    <input type="number" class="form-control" name="price" value={price} onChange={this.onChange} placeholder="Price" />
                </div>
                <div class="form-group">
                    <label for="type">Type:</label>
                    <input type="text" class="form-control" name="type" value={type} onChange={this.onChange} placeholder="Type of this Product" />
                </div>
                <div class="form-group">
                    <label for="productDetails">About Product:</label>
                    <textArea class="form-control" name="productDetails" onChange={this.onChange} placeholder="About Product" cols="80" rows="3">{productDetails}</textArea>
                </div>
                
                <div className="row-6">
            <div className="col-2">
            <input type="file" onChange={this.handleChange}/>
        <progress value={this.state.progress} max="100"/>
            </div>
            <img  src={this.state.productImg || 'http://via.placeholder.com/208x176'} alt="Uploaded images" height="208" width="176"/>
        </div>
        <br/>
        <button type="submit" class="btn btn-success">Submit</button>
                </form>
            </div>
            </div>
        
        
        </div>
        );
    }
}
