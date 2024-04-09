import { CardActions, CardActionArea, CardContent, Button, Typography, CardMedia } from "@mui/material";

// Removed Card and CardMedia component from the import list as we're using the CardStyles and CardMediaStyles components in place of them to clean up our code. 

import PropTypes from "prop-types";

import classNames from "classnames";

import {  CardStyles, CardDetailStyles, TypographyTitleStyles, CardActionStyles } from "./NewsCardStyles"

const NewsCard = ({ article: { description, publishedAt, source, title, url, urlToImage }, i, currentArticle }) => { //destructuring the data from article object.

  return (
    // Conditionally applying styles/highlighting only the Card currently being read by Alan
    <CardStyles sx={{
      borderBottom: currentArticle === i? "10px solid #22289a": "10px solid white"
    }}> 
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
        <Button size="small" color="primary">Learn More</Button>
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