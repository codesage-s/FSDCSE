import React from 'react'

function ICard(props) {
  return (
    <div style={{border:'10px solid red',height:'300px',width:'300px'}}>
    <img src={props.pic} height={100} width={150} /> 
    <h2> Roll:{props.roll}</h2>
    <h2> Name:{props.name}</h2>
    <h2> Branch:{props.branch}</h2>
    <h2> College:{props.college}</h2>
</div>
)
}

export default ICard