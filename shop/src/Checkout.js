import React from 'react';
import check from "./shopping-cart-solid.svg"
function Checkout(props) {
    const filtered = props.database.filter((item) => {
        if (item.bought === true){
            return item.bought;
        }
            return false;
    } );

    return (
        <div className={"checkout"}>
        <img src={check} alt={"logo"}/>
            <span className={'counter'}>{filtered.length}</span>
        </div>
    );
}

export default Checkout;