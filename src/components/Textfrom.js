import React,{useState} from 'react'


export default function Textfrom(props) {
    
    const handleUpClick=()=>{
      console.log("Uppercase was clicked"+ text);
      let newText=text.toUpperCase();
      setText(newText)
     // setText("You have clicked on handle up click")
     props.showalert("Converted to uppercase!","success")
    }
    const handleCopy=()=>{
      console.log("copied text");
      var text=document.getElementById("myBox");
      text.select();
      text.setSelectionRange(0,99999);
      navigator.clipboard.writeText(text.value);
      //navigator.clipboard.writeText(text);
      props.showalert("Text copied to Clipboard!","success")
    }
    const handlelowClick=()=>{
        console.log("Lowercase was clicked!"+ text);
         let newText=text.toLowerCase();
         setText(newText);
         props.showalert("Converted to lowercase","success")
        
       }

    const handleOnChange=(event)=>{
        //console.log("On change");
        setText(event.target.value)
      }

    const [text, setText] = useState(' ');
    //setText("new text");
    return (
        <>
    <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1 className='mb-4'>{props.heading}</h1>
        <div className="mb-3">
        <label htmlFor="myBox" className="form-label" ></label>
        <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'#042743'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        
        <button disabled={text.length===0} className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className='btn btn-primary mx-2'  onClick={handlelowClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className='btn btn-primary mx-2'  onClick={handleCopy}>Copy Text</button>

    </div>

    <div className='container my-3' style={{color:props.mode==='dark'?'white':'#042743'}}>
    <h2>Your text summary</h2>
    <p>{text.split(" ").length} words,{text.length} characters</p>
    <p>{0.008*text.split(" ").length} Minutes read</p>

    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter your text here"}</p>
    </div>
    </>
  )
}
