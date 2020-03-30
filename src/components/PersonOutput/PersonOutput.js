import React from 'react';


const personOutput = (props) => (
    <div className="PersonOutput" onClick={props.clicked}>
        <span>{props.name}</span>
        <span>{props.age}</span>       
    </div>
);

export default personOutput;