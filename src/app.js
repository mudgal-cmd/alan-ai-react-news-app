import alanBtn from "@alan-ai/alan-sdk-web";
import { useState, useEffect } from "react"; //useEffect to initialize the "alanBtn"/Alan AI to show it on the screen after initial render.
import NewsCards from "./Components/NewsCards/NewsCards";
import { AlanLogoContainerStyles, AlanLogoStyles } from "./styles";
import wordsToNumbers from "words-to-numbers"; //convert text/string to integer numbers
import { BrowserRouter as Router } from "react-router-dom";

// import NewsCard from "../public/alan-logo.jpg";

const alanKey ="f555823e5ab06d0c56e4b19c35eb81262e956eca572e1d8b807a3e2338fdd0dc/stage"; //Alan AI API key from the Alan Studio

const alanLogoSrc = "/alan-logo.webp";

const App = () =>{

  const[newsArticles, setNewsArticles] = useState([]); //hook to manage the news articles state.

  const [currentArticle, setCurrentArticle] = useState(-1) //index of the article set to -1, because articles array start with index 0

  useEffect( ()=> {
    let alanInstance;
    alanBtn({ //prompt/alan logo widget shown on the web page to use the alan AI
      
      key: alanKey, 
      onCommand: ({command, articles, number}) => {
        // if(command === "testCommand")alert("Test Command Successfull");
        alanInstance = this;
        switch(command){

          case "newHeadlines":

            console.log(articles);
          
            setNewsArticles(articles.filter(article => article.source.id!==null));

            break;
          
          case "termsHeadlines":
            setNewsArticles(articles.filter(article => article.source.id!==null));
            setCurrentArticle(-1); //index of the article set to -1, because articles array start with index 0

            break;

          case "categoryHeadlines":
            setNewsArticles(articles);
            setCurrentArticle(-1);//index of the article set to -1, because articles array start with index 0

            break;
          
          case "newsHighlights":
            setCurrentArticle((prevActiveArticle) => prevActiveArticle+1);

            break;
          
          case "openArticleByNumber":
            console.log(number, typeof number);
            const parsedNumber = number.length > 2 ? wordsToNumbers(number, {fuzzy: true}): number; //fuzzy : true will match the string to the closest number. Ex: for => 4. 
            //fuzzy: true 
            console.log(parsedNumber);
            if(parsedNumber>=20){
              alanInstance.playText(`Article number ${parsedNumber} not found. Please try again`);
            }
            else{
            
              const openArticle = articles[parsedNumber-1]; //Since, index starts from 0.

              window.open(openArticle.url, "_blank");

            }

            break;

        }

      }



    });//This is the API key for Alan AI.

  }, []);

  return (
    <Router>
    <div>
      {/* LogoContainer */}
      <AlanLogoContainerStyles> 
        {/* AlanLogo */}
        <AlanLogoStyles src={process.env.PUBLIC_URL + alanLogoSrc} alt="alan logo"></AlanLogoStyles>

      </AlanLogoContainerStyles>
      <NewsCards newsArticles = { newsArticles } currentArticle = {currentArticle} /> 
    </div>
    </Router>
  );
}

export default App;