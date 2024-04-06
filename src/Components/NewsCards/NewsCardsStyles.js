import { styled } from "@mui/material/styles";
import {Grid} from "@mui/material";
// import {CardMedia} from "@mui/material";

// Below is the way to style material ui components.
export const StylesGrid = styled(Grid)({

  padding: "0 5%",
  margin: "0",
  width: "100%"

});

export const CardStyles = styled("div")({
  
  display: "flex",
  flexDirection: "column", //notice how the property has changed from "flex-direction" in CSS to "flexDirection" when styling using JS.
  justifyContent: "space-between",
  width: "100%",
  height: "45vh",
  padding: "10%",
  borderRadius: 10,
  color: "white"

});

export const InfoCardGridStyles = styled(Grid)({

  display: "flex",
  flexDirection: "column",
  textAlign: "center"

});

// const StylesCardMedia = styled(CardMedia)({

//   height: 250,
//   objectFit: "cover"

// })

// export const styles = {StylesGrid, StylesCardMedia};
