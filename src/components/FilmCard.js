import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import styled from 'styled-components';
import InfoIcon from '@mui/icons-material/Info';

const StyledCard = styled(Card)`
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: nowrap;
`;

const StyledCardActions = styled(CardActions)`
  marginTop: auto;
`;

const FilmCard = ({ film, handleOpen }) => {
  return (
    <div>
      <StyledCard>
        <CardActionArea>
          <CardMedia
            component="img"
            height="500"
            image={film.Image}
            alt={film.Title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {film.Title}
            </Typography>
            <Typography variant="body2" color="inherit">
              Year: {film.Year}
            </Typography>
            <Typography variant="body2" color="inherit">
              Nation: {film.Nation}
            </Typography>
          </CardContent>
        </CardActionArea>
        <StyledCardActions style={{ justifyContent: 'center' }}>
          <Button
            size="medium"
            color="primary"
            onClick={() => handleOpen(film)}
            variant="outlined"
            startIcon={<InfoIcon />}
          >
            Details
          </Button>
        </StyledCardActions>
      </StyledCard>
    </div>
  );
};
export default FilmCard;
