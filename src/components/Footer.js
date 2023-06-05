import styled from 'styled-components';
import { Typography } from '@mui/material';

const StyledFooter = styled.footer`
  box-shadow: 0 6px 20px 0 rgba(0.2, 0, 0, 0.2),
    0 6px 20px 0 rgba(0.19, 0, 0, 0.19);
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  padding: 16px;
  background-color: white;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Typography variant="body2" color="inherit">
        &copy; 2023 <span>Hot Films</span>
      </Typography>
    </StyledFooter>
  );
};
export default Footer;
