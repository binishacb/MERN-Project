import React, { useState } from "react";
import Header from "../componets/header";
import Footer from "../componets/footer";
import { Link, useNavigate } from "react-router-dom";
function Demo() {
const state={
  items : ["a","b","c"]
};
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  return (
    <div>

      {state.items.map((items,key)=><ui key={key}>{key}{items}</ui>)}
    
      {/* <Header/> */}
      
      <h1>hello</h1>
      <Link to="/"><button>Go back</button></Link>
      <button onClick={
        
        () => {
          console.log("haii");
          navigate("/")
        
        
        }
        
        
        }>
      Go back
    </button>
    <br></br>
    <button onClick={
      ()=>{
        setCount(count+1)
      }
    }>
      Increment
    </button>
    {count}
    </div>
  );
}


function Demo1(){
  return (
    <div>
      <h2>hai</h2>
      <Footer/>
    </div>

  );
}
export {Demo,Demo1};
