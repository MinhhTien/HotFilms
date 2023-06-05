import { Grid, Box } from '@mui/material';
import { listOfFilms } from '../ListOfFilm';
import styled from 'styled-components';
import FilmCard from './FilmCard';
import { useState } from 'react';
import DetailModal from './Modal';

const FilmBox = styled(Box)`
  margin-top: 80px;
  margin-bottom: 60px;
`;

const FilmGrid = () => {
  const [open, setOpen] = useState(false);
  const [film, setFilm] = useState({});

  const handleOpen = (selectedFilm) => {
    setFilm(selectedFilm);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <FilmBox sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        direction="row"
        alignItems="stretch"
        justifyContent="center"
      >
        {listOfFilms.map((film) => (
          <Grid item xs={2} sm={4} key={film.id}>
            <FilmCard film={film} handleOpen={handleOpen} />
          </Grid>
        ))}
      </Grid>
      <DetailModal open={open} film={film} handleClose={handleClose}/>
    </FilmBox>
  );
};

export default FilmGrid;
