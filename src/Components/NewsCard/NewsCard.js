import { CardActionArea, CardContent, Button, Typography, CardMedia } from "@mui/material";

import {useState, useEffect, createRef} from "react";
// Removed Card and CardMedia component from the import list as we're using the CardStyles and CardMediaStyles components in place of them to clean up our code. 

import PropTypes from "prop-types";

import {  CardStyles, CardDetailStyles, TypographyTitleStyles, CardActionStyles } from "./NewsCardStyles";

import {Link} from "react-router-dom";

const NewsCard = ({ article: { description, publishedAt, source, title, url, urlToImage }, i, currentArticle, newsArticles }) => { //destructuring the data from article object.

  const [cardsRefs, setCardRefs] = useState([]);

  const scrollToRef = (ref) => {
    window.scroll(0, ref.current.offsetTop - 50); //x-axis - 0 and y-axis scroll to almost top not exactly at the top of the cards.
  }

  useEffect(()=>{
    
    setCardRefs((refs) => Array(newsArticles.length-1).fill().map((_, index) => refs[index] || createRef())); // checking if the refs already exist for a card at index - 'index', else create a new ref

  }, []); //call setCardRefs on initial render and  


  useEffect(()=> {

    if(i === currentArticle && cardsRefs[currentArticle]){
      scrollToRef(cardsRefs[currentArticle]);
    }

  }, [i, currentArticle, cardsRefs]); //this useEffect will update everytime i or currentArticle or cardRefs value changes. Ensure that these values are enclosed in the dependency array because useEffect needs an array.

  //using createRef instead of 'useRef' because each card will have its own reference and we do not want the ref value to be persisted/same value to be used throughout all the cards.

  return (
    // Conditionally applying styles/highlighting only the Card currently being read by Alan
    <CardStyles sx={{
      borderBottom: currentArticle === i? "10px solid #22289a": "10px solid white"
    }} ref={cardsRefs[i]}> 
      {/* <Card> */}
      {/* Clickable part */}
      <CardActionArea>

        {/* Card Media will contain the image, hence a self closing tag like <img/> */}

        {/* The image won't be visible until we specify the constant card height */}


        {/* Likewise here instead of using the CardMedia only we can use the CardMediaStyles component that not only provides a CardMedia but applies the styles to it as well */}

        <CardMedia 
          image={urlToImage || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5f5uYYfdPGCG1mCoKyS03z1SRkzMPLApHAt-rh7Y3IA&s"} component ="img" 
          sx={{
            objectFit: "cover",
          }}
          height={"200"}/>

        {/* Explicitely passing img component as a prop */}

        <CardDetailStyles>
          {/* variant = "body2" for the small text */}
          {/* All text should be put under Typography in Material UI. Helps in styling it */}

          {/* Creating JS date object and fetching the date. */}
          <Typography variant="body2" color={"textSecondary"} component={"h2"}>{(new Date(publishedAt)).toDateString()}</Typography>
          <Typography variant="body2" color={"textSecondary"} component={"h2"}>{source.name}</Typography>
        </CardDetailStyles>
        {/* gutterBottom for some margin or padding at the bottom */}
        <TypographyTitleStyles gutterBottom variant="h5">{title}</TypographyTitleStyles>
        <CardContent>
          <Typography variant="body2" color={"textSecondary"} component={"p"}>{description}</Typography>
        </CardContent>

      </CardActionArea>

      {/* CardActions will contain all the buttons */}

      <CardActionStyles>
        <Button size="small" color="primary">
          <Link to={url} style={{textDecoration: "none", color: "inherit"}}>Learn More</Link>
        </Button>
        <Typography variant="h5" color={"textSecondary"}>{i + 1}</Typography>
      </CardActionStyles>

      {/* </Card> */}
    </CardStyles>
    // We can simply use the CardStyles (containing styles for Card component) in place of the normal Card component and wrap everything inside the CardStyles instead of Card. 

  );

}

NewsCard.propTypes = {
  article: PropTypes.object.isRequired,
  i: PropTypes.number
}

export default NewsCard;