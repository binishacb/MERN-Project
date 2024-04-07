import React from 'react'
import { Demo, Demo1 } from './demo'
import Contact from './contact'

function Parent() {
  return (
    <div>
      <Demo/>
<Demo1/>
        {/* <Contact type={{name:"anna",age:22}}  />
        <Contact id="ss"/> */}

    </div>
  )
}

export default Parent