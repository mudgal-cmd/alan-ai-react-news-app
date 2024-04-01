import NewsCard from "../NewsCard/NewsCard";

import { Grid, Grow, Typography } from "@mui/material"; 
// grid - mobile friendly / viewport friendly
// grow - animation
// typography - for text
//to make our application mobile-friendly, nice text & animation for the cards.

import StylesGrid from "./styles";



import Box from "@mui/material/Box";

const NewsCards = ({ newsArticles }) => {


  // const classes = useStyles();

  return (
    //we will no longer use div


    // "in" ensures that if true then only transition will happen.
    <Grow in>
      {/* //this will contain all of our items. */}
      {/* <Box sx = {{padding: "0 5%", margin: "0", width: "100%"}}> */}
      <StylesGrid>

      <Grid  container alignItems={"stretch"} spacing={3}>
        {/* //Another grid for a singular NewsCard/article item. */}

        {newsArticles.map((article, i) => (

          // xs = {12} means 1 card per row. In material UI a grid has a total of 12 spaces, so if 12 spaces are occupied by 1 card that means 1 card per row.
          <Grid item xs={12} sm={6} md= {4} lg = {3} style={{display: "flex"}}> 
            <NewsCard article = {article} i = {i}/>

          </Grid>
        ))}


      </Grid>
      </StylesGrid>
      {/* </Box> */}


    </Grow>

  );
}

export default NewsCards;