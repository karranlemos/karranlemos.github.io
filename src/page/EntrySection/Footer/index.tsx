import { Container } from './styles';
import {
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  ContactPage as ContactPageIcon,
} from '@mui/icons-material';
import { FooterLink, FooterLinkProps } from './FooterLink';

export const Footer = () => {
  const buttonsInfo: FooterLinkProps[] = [
    { icon: <GitHubIcon />, link: 'https://github.com/karranlemos' },
    { icon: <LinkedInIcon />, link: 'https://www.linkedin.com/in/karranlemos' },
    { icon: <ContactPageIcon />, link: 'pdfs/CV Karran Lemos PT.pdf' },
  ];

  return (
    <Container>
      {buttonsInfo.map((props) => (
        <FooterLink {...props} />
      ))}
    </Container>
  );
};
