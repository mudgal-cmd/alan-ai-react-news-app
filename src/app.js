import alanBtn from "@alan-ai/alan-sdk-web";
import { useState, useEffect } from "react"; //useEffect to initialize the "alanBtn"/Alan AI to show it on the screen after initial render.
import NewsCards from "./Components/NewsCards/NewsCards";

const alanKey ="f555823e5ab06d0c56e4b19c35eb81262e956eca572e1d8b807a3e2338fdd0dc/stage"; //Alan AI API key from the Alan Studio

const App = () =>{

  const[newsArticles, setNewsArticles] = useState([]);

  useEffect( ()=> {

    alanBtn({
      
      key: alanKey, 
      onCommand: ({command, savedArticles}) => {
        // if(command === "testCommand")alert("Test Command Successfull");

        if(command === "newHeadlines") {
          console.log(savedArticles);
          setNewsArticles(savedArticles);
        }
        // if(command === "getUsers"){
        //   console.log(users);
        // }
      }



    });//This is the API key for Alan AI.

  }, []);

  return (
    <div>
      <h1>Alan AI News Application</h1>
      <NewsCards newsArticles = {newsArticles } />
    </div>
  );
}

export default App;