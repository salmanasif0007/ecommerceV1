import React, {useState,useEffect} from 'react'
import firebase from '../firestore'
import Carde from './card'
function AdminProductListControll (){
    const [state, setstate] = useState()
    useEffect(() => {
        firebase
        .firestore()
        .collection("ProductList")
        .onSnapshot((snapshot)=>{
            const newDatas= snapshot.docs.map((doc)=>({
            id:doc.id,
            ...doc.data()
        }))
        console.log(newDatas)
        setstate(newDatas)
    })
    }, [])
    // console.log(state)
    return (
        <div>
            { state ?
            state.map(data => 
                <div>
                    <Carde style={{fontSize:"5px"}} title={data.productName} img={data.productImg} description={data.productDetails}/>
                    <button>Top Collection</button>
                </div>
            ):(<h1>Wait for data</h1>)
            }
        </div>
    )
}
export default AdminProductListControll;