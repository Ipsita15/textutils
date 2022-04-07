import React, {useState} from 'react'


export default function TextForm(props) {



    const handleUpClick = ()=>{
        // console.log("UpperCase was clicked"+text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case!!", "success");
    }

    const handleLowClick = ()=>{
        // console.log("LowerCase was clicked"+text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case!!", "success");
    }
    const handleClearClick = ()=>{
        // console.log("LowerCase was clicked"+text);
        let newText = '';
        setText(newText);
        props.showAlert("Text is cleared!!", "success");
    }
    const handleCopy = ()=>{
        // console.log("I'm copy");
        // var text = document.getElementById("myBox");
        // text.select();
        // navigator.clipboard.writeText(text.value);  
        navigator.clipboard.writeText(text);  
        //when you use navigator the rest 3 lines apart from console.log works accordingly
        // so no need to write extra lines 
        // document.getSelection().removeAllRanges();
        props.showAlert("Copied to Clipboard!!", "success");
    }
  
    const handleUnderscore = ()=>{
        // console.log("LowerCase was clicked"+text)
        //  let newText = text.charAt(0).toUpperCase() + text.slice(1);
        // let newText = text.split(" ").reverse().join(" ").toUpperCase();
        // var str;
        // str.replace(/^(.)|\s+(.))
        let newText = text.replace(/ /g, "_");
        setText(newText);
        props.showAlert(" Underscore is added!!", "success");
    }
    const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }
const [text, setText] = useState('Enter text here...');
// text = "ipsita here"; //wrong way
// setText = "Ipsita Here";  //correct way
    return (
        <>
            <div  className="container" style={{color: props.mode === 'dark'?'white':'#042747'}}>
            <h1 className='mb-4'>{props.heading}</h1>
                <div className="mb-3"> 
                {/* //mb=margin-bottom  //my= margin along y-axis //mx=margin along x-axis */}
                    <textarea className="form-control"  value={text} onChange={handleOnChange} id="myBox" rows="10" 
                     style={{backgroundColor: props.mode === 'dark'?'#23766b':'white', color: props.mode === 'dark'?'white':'#042747'}}>
                     </textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to LowerCase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUnderscore}>Add Underscore</button>
            </div>

        <div className="container my-4" style={{color: props.mode === 'dark'?'white':'#042747'}}>
            <h2>Your Text summary</h2>
            <p><b>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters </b></p>
            <p><b>{0.008* text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</b></p>

            <h2>Preview</h2>
            <p>{text.length>0?text:"Write something in box to preview"}</p>
        </div>
            </>
            )
}

