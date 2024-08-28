import styles from "./App.module.css";
import Button from "./component/Button";
import Display from "./component/Display";
import { useState } from "react";

function App() {
  const [calval, setCalval] = useState("");  //using state
  const onButtonClick = (buttonText) =>{
    if(buttonText === "c"){
      setCalval("")
    }else if(buttonText === "="){
       const result = eval(calval);
       setCalval(result);
    }else{
    const newDisplayValue = calval + buttonText;
    setCalval(newDisplayValue);
    }
  }


  return (
    <center>
      <div className={styles.calculator}>
        <Display displayValue={calval}></Display>  
        <Button onButtonClick ={onButtonClick}></Button>
      </div>
    </center>
  );
}

export default App;
