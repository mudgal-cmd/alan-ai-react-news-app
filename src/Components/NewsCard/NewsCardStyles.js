import { styled } from "@mui/material/styles";
import { Card, Typography, CardActions } from "@mui/material";

export const CardStyles = styled(Card) ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: "space-between",
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

export const activeCard = {
  borderBottom : "10px solid #22289a"
}
