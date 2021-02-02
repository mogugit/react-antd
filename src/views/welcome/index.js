import React from 'react';

function Welcome(props){
    let val = props.value|| ''
    return (
    <div> Hello {val}</div>
    )
}
export default Welcome;