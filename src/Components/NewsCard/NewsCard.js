import Box from "@mui/material/Box";

import { Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography } from "@mui/material";

import PropTypes  from "prop-types";
// import { StylesCardMedia } from "./styles";

const NewsCard = ({ article: { description, publishedAt, source, title, url, urlToImage }, i }) => { //destructuring the data from article object.

  return (

    <Card>
      {/* Clickable part */}
      <CardActionArea>

        {/* Card Media will contain the image, hence a self closing tag like <img/> */}

        {/* The image won't be visible until we specify the constant card height */}
        {/* <StylesCardMedia> */}
        <Box sx={{height: "200px"}}>
          <CardMedia image={urlToImage || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5f5uYYfdPGCG1mCoKyS03z1SRkzMPLApHAt-rh7Y3IA&s"} component={"img"} />
          {/* Explicitely passing img component as a prop */}
        {/* </StylesCardMedia> */}
        </Box>
        <div>
          {/* variant = "body2" for the small text */}
          {/* All text should be put under Typography in Material UI. Helps in styling it */}

          {/* Creating JS date object and fetching the date. */}
          <Typography variant="body2" color={"textSecondary"} component={"h2"}>{(new Date(publishedAt)).toDateString()}</Typography>
          <Typography variant="body2" color={"textSecondary"} component={"h2"}>{source.name}</Typography>
        </div>
        {/* gutterBottom for some margin or padding at the bottom */}
        <Typography gutterBottom variant="h5">{title}</Typography>
        <CardContent>
          <Typography variant="body2" color={"textSecondary"} component={"p"}>{description}</Typography>
        </CardContent>

      </CardActionArea>

      {/* CardActions will contain all the buttons */}

      <CardActions>
        <Button size="small" color="primary">Learn More</Button>
        <Typography variant="h5" color={"textSecondary"}>{i + 1}</Typography>
      </CardActions>

    </Card>

  );

}

NewsCard.propTypes = {
  article: PropTypes.object.isRequired,
  i: PropTypes.number
}  

export default NewsCard;