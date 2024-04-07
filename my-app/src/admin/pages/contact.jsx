import React from 'react'

function Contact(props) {
    var k = typeof(props.type)
  return (
    <div>
        <h2>{props.type.age }Contact details having id {props.id}</h2>

        <label>id</label>
        <input type='text' value={props.id}/>
        <br></br>
        <br></br>        <label>name</label>
        <input type='text'/>
        <br></br>
        <br></br>
        <label>Address</label>
        <input type='textarea'/>

        {k}
    </div>
  )
}

export default Contact