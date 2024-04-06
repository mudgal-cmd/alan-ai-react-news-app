import alanBtn from "@alan-ai/alan-sdk-web";
import { useState, useEffect } from "react"; //useEffect to initialize the "alanBtn"/Alan AI to show it on the screen after initial render.
import NewsCards from "./Components/NewsCards/NewsCards";

const alanKey ="f555823e5ab06d0c56e4b19c35eb81262e956eca572e1d8b807a3e2338fdd0dc/stage"; //Alan AI API key from the Alan Studio

const App = () =>{

  const[newsArticles, setNewsArticles] = useState([]); //hook to manage the news articles state.

  useEffect( ()=> {

    alanBtn({ //prompt shown on the web page to use the alan AI
      
      key: alanKey, 
      onCommand: ({command, articles}) => {
        // if(command === "testCommand")alert("Test Command Successfull");

        if(command === "newHeadlines") {
          setNewsArticles(articles);
        }
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