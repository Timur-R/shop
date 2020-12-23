import React from 'react';
import Button from "./Button";
function Card(props, products) {
    return (
        <div className="card">
            <div className="card-image">
                <img src={props.product.image} alt=""/>
            </div>
            <div className="card-info">
                <div className="card-name">{props.product.name}</div>
                {props.product.rating}
                <div className="card-price">{props.product.price}$</div>
            </div>
            <Button database={props.database}
            id={props.product.id}
            bought={props.product.bought}
            setBought={props.setBought}/>

        </div>
    );
}

export default Card;