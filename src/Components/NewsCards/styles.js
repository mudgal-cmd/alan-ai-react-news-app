import { styled } from "@mui/material/styles";
import {Grid} from "@mui/material";
import {CardMedia} from "@mui/material";

// Below is the way to style material ui components.
const StylesGrid = styled(Grid)({

  padding: "0 5%",
  margin: "0",
  width: "100%"

});

const StylesCardMedia = styled(CardMedia)({

  height: "200px"

});



export const styles = {StylesGrid};
