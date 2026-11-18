import { useState } from "react";
export default function WordCounter() {
  const [text, setText] = useState("");

  function handleChange(event) {
    setText(event.target.value);
  }

  let textInput = countWords(text);

  function countWords(text) {
    if (text.trim().length === 0) {
      return 0;
    }
    return text.trim().split(/\s+/).length;
  }
  console.log("text", textInput);

  function characterCount(text){
    return text.length;
  }

  let characterInput = characterCount(text);

  function clear(text){
    setText("");
  }

  return (
    <>
      <h2>Word counter</h2>
      <h4>Enter your text below</h4>
      <textarea name="text" id="" value = {text} onChange={handleChange}></textarea>
      {/* <p>{text}</p> */}
      <button onClick={clear}>Clear</button>
      <p>words:{textInput}</p>
      <p>charaters:{characterInput}</p>
    </>
  );
}
