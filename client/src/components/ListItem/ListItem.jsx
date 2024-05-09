import React from "react";

function Item(props){
   
    return(
        <option  value={props.name}>{props.name}</option>
    )
    
}

export default Item;
