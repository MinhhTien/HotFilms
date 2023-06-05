import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';

const StyledBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: flex-start
  color: #000;
  border: 2px solid #000;
  height: 400px;
  width: 600px;
  box-shadow: 10px 10px 0px 0px #000;
  border-radius: 10px;
`;

const StyledModal = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 50%;
  height: 100%;
  objectfit: cover;
  border-radius: 10px 0 0 10px;
`;

const Detail = styled.div`
  padding: 5%;
  display: flex;
  flex-direction: column;
  align-items: flex-start
  justify-content: space-around
`;

const StyledCloseIcon = styled(CloseIcon)`
  padding: 10px;
`;

const DetailModal = ({ open, film, handleClose }) => {
  return (
    <StyledModal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <StyledBox style={{ backgroundColor: '#FFFFFF' }}>
        <Image src={film.Image} alt={film.Title} />
        <Detail>
          <Typography id="transition-modal-title" variant="h4" component="h1">
            {film.Title}
          </Typography>
          <Typography id="transition-modal-description" sx={{ mt: 2 }}>
            Year: {film.Year}
          </Typography>
          <Typography id="transition-modal-description" sx={{ mt: 2 }}>
            Nation: {film.Nation}
          </Typography>
        </Detail>
        <StyledCloseIcon onClick={handleClose} />
      </StyledBox>
    </StyledModal>
  );
};

export default DetailModal;
