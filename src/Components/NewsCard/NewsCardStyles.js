import { styled } from "@mui/material/styles";
import { CardMedia, Card, Typography, CardActions } from "@mui/material";


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

export const CardDetailStyles = styled("div")({
  display: 'flex',
  justifyContent: 'space-between',
  margin: '20px',
});

export const TypographyTitleStyles = styled(Typography)({
  padding: "0 16px"
});

export const CardActionStyles = styled(CardActions)({
  padding: '0 16px 8px 16px',
  display: 'flex',
  justifyContent: 'space-between'
});