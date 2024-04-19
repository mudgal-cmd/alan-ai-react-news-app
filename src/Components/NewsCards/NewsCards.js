import NewsCard from "../NewsCard/NewsCard";

import { Grid, Grow, Typography } from "@mui/material";
// grid - mobile friendly / viewport friendly
// grow - animation
// typography - for text
//to make our application mobile-friendly, nice text & animation for the cards.

import { StylesGrid, CardStyles, InfoCardGridStyles } from "./NewsCardsStyles";

const infoCards = [
  { color: '#00838f', title: 'Latest News', text: 'Give me the latest news' },
  { color: '#1565c0', title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology', text: 'Give me the latest Technology news' },
  { color: '#4527a0', title: 'News by Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: 'What\'s up with PlayStation 5' },
  { color: '#283593', title: 'News by Sources', info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Give me the news from CNN' },
]; //static data for the initial cards on the homepage



const NewsCards = ({ newsArticles, currentArticle }) => {

  if (!newsArticles.length) {

    return (
      <Grow in>
        <StylesGrid container alignItems={"stretch"} spacing={3}>
          {infoCards.map(infoCard => (

            // InfoCardGridStyles
            <InfoCardGridStyles item xs={12} sm={6} md={4} lg={3}> 
              <CardStyles style={{ backgroundColor: infoCard.color }}>
                <Typography>
                  {infoCard.title}
                </Typography>
                {infoCard.info ? //Display card info only for the items that actually include that information.
                  (<Typography>
                    <strong>
                      {/* making the important keywords in the title bold */}
                      {infoCard.title.split(" ")[2]}: 
                    </strong>
                    <br />
                    {infoCard.info}
                  </Typography>) : null}
                  <Typography>Try Saying: <br/> <em>{infoCard.text}</em></Typography>
              </CardStyles>
            </InfoCardGridStyles>

          ))}
        </StylesGrid>
      </Grow>
    )

  }

  return (
    //we will no longer use div


    // "in" ensures that if true then only transition will happen.
    <Grow in>
      {/* //this will contain all of our items. */}
      {/* <Box sx = {{padding: "0 5%", margin: "0", width: "100%"}}> */}
      <StylesGrid>

        <Grid container alignItems={"stretch"} spacing={3}>
          {/* //Another grid for a singular NewsCard/article item. */}

          {newsArticles.map((article, i) => (

            // xs = {12} means 1 card per row. In material UI a grid has a total of 12 spaces, so if 12 spaces are occupied by 1 card that means 1 card per row.
            <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: "flex" }}>

              <NewsCard article={article} currentArticle = {currentArticle} i={i} newsArticles = {newsArticles} />

            </Grid>
          ))}


        </Grid>
      </StylesGrid>
      {/* </Box> */}


    </Grow>

  );
}

export default NewsCards;