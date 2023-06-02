import { Container, GithubIconButton, StyledIconButton } from './styles';
import {
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  ContactPage as ContactPageIcon,
} from '@mui/icons-material';
import { Link } from '@mui/material';

export const Footer = () => {
  return (
    <Container>
      <Link href="https://github.com/karranlemos" target="_blank">
        <GithubIconButton>
          <GitHubIcon />
        </GithubIconButton>
      </Link>
      <Link href="https://www.linkedin.com/in/karranlemos" target="_blank">
        <StyledIconButton>
          <LinkedInIcon />
        </StyledIconButton>
      </Link>
      <Link href="pdfs/CV Karran Lemos PT.pdf" target="_blank">
        <StyledIconButton>
          <ContactPageIcon />
        </StyledIconButton>
      </Link>
    </Container>
  );
};
