import React from 'react'
import Nike from '../Assests/Nike.jpg';

 const SimilarProducts = () => {
    return (
        <>
        <div className>
            <div className="similarProducts">
                <h3 >Similar Products</h3>
                <div className="product1">
                    <img src={Nike} />
                    <h4 style={{marginTop:25}}>Nike</h4>
                    <span>1200</span>
                    <button className="button1">Add to Cart</button>
                </div>
                <div className="product1">
                    <img src={Nike} />
                    <h4 style={{marginTop:25}}>Nike</h4>
                    <span>1200</span>
                    <button className="button1">Add to Cart</button>
                </div>
                <div className="product1">
                    <img src={Nike} />
                    <h4 style={{marginTop:25}}>Nike</h4>
                    <span>1200</span>
                    <button className="button1">Add to Cart</button>
                </div>
                <div className="product1">
                    <img src={Nike} />
                    <h4 style={{marginTop:25}}>Nike</h4>
                    <span>1200</span>
                    <button className="button1">Add to Cart</button>
                </div>
            </div>
        </div>
        
        </>
    )
}
export default SimilarProducts
