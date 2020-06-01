import React from "react";


const Scroll = (props) => {
    return(
        <div style={{overflowX: 'scroll', height: '100px', width: '400px', background:"red"}}>
            {props.children}
        </div>
    )

}
        

export default Scroll