import React from 'react'
import addidas from '../Assests/addidas.jpg'
import Nike from '../Assests/Nike.jpg'
const product = () => {
    return (
        <>
        <div className="product">
            <div className="productmain">
                <div className="divider">
                    <div className="mainimage">
                        <div className="addidas">
                            <img src={addidas} />
                        </div>
                        <div className="image">
                            <span><img src={Nike} /></span>
                            <span><img src={Nike} /></span>
                            <span><img src={Nike} /></span>
                        </div>
                    </div>
                    <div className="productdetails">
                        <div className="name"><h3>Product Name :-<span>Addidas</span></h3></div>
                        <div><p>Price:-<span>Rs 1200</span></p></div>
                        <div><p>qty:-<span>2</span></p></div>
                        <button className="button">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
        <hr style={{width:"100%"}}/>
        </>
    )
}
export default product
