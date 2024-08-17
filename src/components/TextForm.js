import React, {useState} from 'react'



export default function TextForm(props) {
  
    const handleUpClick=()=>{
      console.log("Uppercase was cliked"+ text);
      let newText=text.toUpperCase(); 
      setText(newText)
    }

    const handleLoClick=()=>{
      console.log("Uppercase was cliked"+ text);
      let newText=text.toLowerCase(); 
      setText(newText)
    }
    const handleClearClick=()=>{
      console.log("Uppercase was cliked"+ text);
      let newText="";
      setText(newText)
    }

    const handleCopy=()=>{
     
      navigator.clipboard.writeText(text);
      // alert("Text copied")
      setTimeout(() => {
        console.log("Copied")
        
      }, 100);
    }

    const handleSummary=()=>{
      
    }



    const handleOnChange=(event)=>{
      console.log("onchange");
      setText(event.target.value);
    }
   

 

    const [text, setText]=useState("");
    return (
    <>
   
  <div className="mb-3 container my-4 ">
    <label for="exampleFormControlTextarea1" className="form-label "><h6>Enter the texts here</h6></label>
    
    <textarea className="form-control" rows="8" value={text} onChange={handleOnChange} id="myBox"></textarea>
    <button type="button" class="btn btn-primary my-2 " onClick={handleUpClick}>Convert to Uppercase</button>
    <button type="button" class="btn btn-primary mx-2 " onClick={handleLoClick}>Convert to Lowercase</button>
    <button type="button" class="btn btn-primary mx-2 " onClick={handleClearClick}>Clear text</button>
    <button type="button" class="btn btn-danger  mx-2 " onClick={handleCopy} >Copy to clipboard</button>
    <button type="button" class="btn btn-danger  mx-2 " onClick={handleSummary} >Summary</button>
   
    </div>

    <div className="container">
      <h6>summary of the text</h6>
      <p>{text.split(" ").length-1} words, {text.length} characters</p>
      <p>{0.008 * (text.length)} Minute read</p>
      {/* <label for="exampleFormControlTextarea1" className="form-label "  >Example textarea</label> */}
      <h6>Preview</h6>
      
      <textarea className="form-control" rows="8" value={text.length>0?text:"Enter something to preview it here"}  id="myBox "> </textarea>
      <button type="button" class="btn btn-primary  mx-2 my-3" onClick={handleCopy}>📋 Copy</button>
      {/* <p>{text}</p> */}
    </div>
    
    </>
  )
}


