import React from 'react';
import Card from "./Card";
function Content(props) {
    return (
        <div className={`content`}>
            {props.database.map((products, index) => {
                return <Card
                    product={products}
                    database={props.database}
                    setBought={props.setBought}
                    key={index}
                />
            })}
        </div>
    );



}


export default Content;