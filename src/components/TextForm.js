import React, { useState } from "react";




export default function TextForm() {

  const [text,setText]=useState("Enter Text Here.....");










  const  onTextAreaSubmit=()=>
  {
    let newText=text.toUpperCase();
    setText(newText);
  }
  
  







  function capitalizeFirstLetter(string) {
    return string.replace(/\b\w/g, function(char) {
        return char.toUpperCase();
    });
}





  const  onTextAreaChange=(event)=>
  {
    var startingText="Enter Text Here.....";
    var textString=event.target.value;
    if(textString.startsWith(startingText))
    {
      textString=textString.substring(startingText.length);
    }
    textString=capitalizeFirstLetter(textString);
    setText(textString);
  }




  function handleCopy()
  {

    navigator.clipboard.writeText(text);
  }







  return (
    <>
    <div className="container">
     
      <div className="mb-3">

        <textarea
          value={text}
          className="form-control"
          onChange={onTextAreaChange}
          id="myBox"
          rows="12"
        ></textarea>
      </div>
      <div className=" d-flex justify-content-center align-items-center ">
      <button className="btn btn-primary" onClick={onTextAreaSubmit}   > Check</button>
      <button className="btn btn-primary" onClick={handleCopy}> Copy</button>
      </div>
    </div>
    <div className="container my-2">
      <h1>Your Text summary</h1>
      <p>{} words and {text.length} Characters</p>
      <p>{0.008*text.split(" ").length} minutes to read</p>
    </div>
    </>
  );
}
