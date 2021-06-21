import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch,faBell, faCartPlus} from '@fortawesome/free-solid-svg-icons'
import '../App.css'

 const header = () => {
    return (
        <>
            <div className="maincontainer">
                <div className="logo">
                    <h4>Bex</h4>
                </div>
                <div className="search"><input type="text" style={{width:"50%"}}/><span><FontAwesomeIcon  icon={faSearch } /></span></div>
                <div className="cart">
                    <ul>
                        <li><FontAwesomeIcon icon ={faBell} /></li>
                        <li><FontAwesomeIcon icon ={faCartPlus} /><span>Cart</span></li>
                    </ul>
                </div>
            </div>
           
            </>
    )
}
export default header

