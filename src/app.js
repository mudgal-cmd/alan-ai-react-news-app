import alanBtn from "@alan-ai/alan-sdk-web";
import { useEffect } from "react"; //to initialize the "alanBtn" or Alan AI.

const alanKey ="f555823e5ab06d0c56e4b19c35eb81262e956eca572e1d8b807a3e2338fdd0dc/stage"; //Alan AI API key from the Alan Studio

const App = () =>{

  useEffect( ()=> {

    alanBtn({
      
      key: alanKey, 
      onCommand: ({command, articles}) => {
        if(command === "testCommand")alert("Test Command Successfull");

        if(command === "newHeadlines") console.log(articles);
      }



    });//This is the API key for Alan AI.

  }, []);

  return (
    <div>
      <h1>Alan AI News Application</h1>
    </div>
  );
}

export default App;