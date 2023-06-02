import { ReactNode } from 'react';
import { StyledIconButton } from './styles';
import { Link } from '@mui/material';

export interface FooterLinkProps {
  link: string;
  icon: ReactNode;
}

export const FooterLink = ({ icon, link }: FooterLinkProps) => {
  return (
    <Link href={link} target="_blank">
      <StyledIconButton>{icon}</StyledIconButton>
    </Link>
  );
};
