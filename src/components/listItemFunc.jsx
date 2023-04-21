import React from 'react'
// sfc
let count = 0

const ListItem = ( props ) => {
    return ( 
        <div className="row">
            <div className="col-6 themed-grid-col">{props.data.name}</div>
            <div className="col-1 themed-grid-col">￥{props.data.price}</div>
            <div className="col-2 themed-grid-col">{count}</div>
        </div>
     );
}
 
export default ListItem;