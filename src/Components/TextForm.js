import React, { useState } from "react";
// import PropTypes from "prop-types";

export default function TextForm(props) {
   const [text, settext] = useState("");
   const [isItalic, setIsItalic] = useState(false);
   const [isBold, setisBold] = useState(false);
   const [isUnd, setisUnd] = useState(false);
   

  const ChangeUppcase = () => {
    let newtext = text.toUpperCase();
    settext(newtext);
    props.showalert("Changed to UpperCase","Success")
  };
  const ChangeLowcase = (msg,type) => {
    let newtext = text.toLowerCase();
    settext(newtext);
    props.showalert("Changed to LowerCase","Success")
  };
  const OnChangecase = (event) => {
    settext(event.target.value);
  };

  const clearclick =(msg,type) =>{
    let newtext = ("");
    settext(newtext);
    props.showalert("Cleared","Success")
  }

  const wordCount = () => {
    // Use a regular expression to remove spaces and then count words
    const wordMatches = text.match(/\b\w+\b/g) || [];
    return wordMatches.length;
  };

  const charCount = () => {
    // Use a regular expression to remove spaces and then count characters
    const stringWithoutSpaces = text.replace(/\s/g, '');
    return stringWithoutSpaces.length;
  };

  const ChangetextItalic = () => {
    setIsItalic(!isItalic);
    props.showalert("Changed to Italic","Success")
  };

  const ChangetextBold = () =>{
    setisBold(!isBold);
    props.showalert("Changed to Bold","Success")
  };

  const ChangetextUnd = () =>{
    setisUnd(!isUnd);
    props.showalert("Text Underlined","Success")
  };
  
  const textStyle = {
    fontStyle: isItalic ? 'italic' : 'normal',
    fontWeight: isBold ? 'bold' : 'normal',
    textDecoration: isUnd ? 'underline' : 'none',
    
  };
 
  //settext("dani"); Correct Way to update state
  //settext= "dani"; Incorrect Way to update state
  return (
    <>
      <h1 style={{color: props.mode === 'dark' ? 'white' : 'black' }}>{props.heading} </h1>
      <div className="mb-3" >
        <textarea
          className="form-control"  value={text} onChange={OnChangecase} style={{...textStyle,backgroundColor:
      props.mode === 'dark'? '#343a40':'white',color: props.mode === 'dark'? 'white':'black'}} id="myBox" rows="8"></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary"  onClick={ChangeUppcase}>Covert to Uppercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={ChangeLowcase}>Covert to Lowercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={clearclick}>Clear Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={ChangetextItalic}> {isItalic ? 'Remove Italic' : 'Make text Italic'}</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={ChangetextBold}> {isBold ? 'Remove Bold' : 'Make text Bold'}</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={ChangetextUnd}> {isUnd ? 'Normal' : 'Underline'}</button>
      <div className="container my-5" style={{color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>Summary</h1>
        <p>{wordCount()} words and {charCount()} characters </p>
        <p>{0.008 * wordCount()} Time to read</p>
        {/* <p>{text.split(" ").length} words and {text.length} characters </p>
        <p>{0.008 * text.split(" ").length} Time to read</p> */}
        <h2>Preview</h2>
        <p>{text}</p>
      </div>

    </>
  );
}

// TextForm.propTypes = {
//   heading: PropTypes.string.isRequired,
// };

// TextForm.defaultProps = {
//   heading: "Something",
// };
