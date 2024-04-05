import { styled } from "@mui/material/styles";
import {CardMedia} from "@mui/material";
import {Card} from "@mui/material";

export const CardMediaStyles = styled(CardMedia)({

  height: "250",
  objectFit: "cover"

});

export const CardStyles = styled(Card)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: "space-between",
    borderBottom: '10px solid white',
});