import { Link } from '@mui/material';
import { Container, StyledIconButton } from './styles';
import {
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Description as DescriptionIcon,
} from '@mui/icons-material';

export const Footer = () => {
  return (
    <Container>
      <Link href="https://github.com/karranlemos/" target="_blank">
        <StyledIconButton>
          <GitHubIcon />
        </StyledIconButton>
      </Link>
      <Link href="https://www.linkedin.com/in/karranlemos/" target="_blank">
        <StyledIconButton>
          <LinkedInIcon />
        </StyledIconButton>
      </Link>
      <Link href="pdfs/CV Karran Lemos PT.pdf" target="_blank">
        <StyledIconButton>
          <DescriptionIcon />
        </StyledIconButton>
      </Link>
    </Container>
  );
};
