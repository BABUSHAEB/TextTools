import React from 'react'
import {useState} from 'react';

function TextBox(props) {
    const [Text, setText] = useState("")
    const upperCase = () =>{
        console.log("Convert to Upper Case");
        let newText = Text.toUpperCase()
        setText(newText)
    }
    const allowToAcceptText = (e) =>{
        // console.log('This is Entered Text' +Text)
        setText(e.target.value)
    }
    const lowerCase = () =>{
        console.log("Convert to Lower Case");
        let newText = Text.toLowerCase()
        setText(newText)
    }
    const reverseText = () =>{
        console.log("Reverse Text");
        let newText = Text.split('').reverse().join('')
        setText(newText)
    }
    const copyText = () =>{
        var copyText = document.getElementById("textBox");          
        /* Select the text field */
        copyText.select();                      
        /* Copy the text inside the text field */
        navigator.clipboard.writeText(copyText.value);
    }
    const removeExtraSpace = () =>{

            let newtext = Text.split(/[ ]+/).join(" ");
            setText(newtext);
            };
        const clearBox = () => {
            let newText = '';
            setText(newText)        
        }
    const downloadText = () =>{

               let data = Text;
                
            // Convert the text to BLOB.
            const textToBLOB = new Blob([data], { type: 'text/plain' });
            const sFileName = 'formData.txt';	   // The file to save the data.
    
            let newLink = document.createElement("a");
            newLink.download = sFileName;
    
            if (window.webkitURL != null) {
                newLink.href = window.webkitURL.createObjectURL(textToBLOB);
            }
            else {
                newLink.href = window.URL.createObjectURL(textToBLOB);
                newLink.style.display = "none";
                document.body.appendChild(newLink);
            }
    
            newLink.click(); 
        
        }

        
        
    return (
        <>
            <div className="container my-3">
                <h1>Your Text</h1>
                <textarea className={`form-control my-3 text-${props.mode === 'light'? 'dark':'light' }`} style={{backgroundColor:props.mode === 'light' ? 'white':'#1a1110'}} id="textBox" value={Text} onChange={allowToAcceptText}  rows="8"></textarea>
                <button type="button" className="btn btn-primary m-3" onClick={upperCase} >Upper Case</button>
                <button type="button" className="btn btn-primary m-3" onClick={lowerCase} >Lower Case</button>
                <button type="button" className="btn btn-primary m-3" onClick={reverseText} >Reverse</button>
                <button type="button" className="btn btn-primary m-3" onClick={copyText} >Copy Text</button>
                <button type="button" className="btn btn-primary m-3" onClick={clearBox} >Clear Text</button>
                <button type="button" className="btn btn-primary m-3" onClick={removeExtraSpace} >Remove Extra Space</button>
                <button type="button" className="btn btn-primary m-3" onClick={downloadText} >Download Text</button>
            </div>
            <div className="container my-3">
                <h1>Your Text Summary</h1>
                <p>{Text.split(" ").length-1} Words and {Text.length} Characters </p>
            </div>
            <div className="container my-3">
                <h1>Preview</h1>
                <p>{Text.length>0 ? Text : 'Please Enter a text to Preview'} </p>
            </div>
            
        </>
    )
}

export default TextBox
