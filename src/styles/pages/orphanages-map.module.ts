import styled from 'styled-components';
import Link from '../../foundation/Link';

export const OrphanagesMapContainer = styled.div`
  width: 100vw;
  height: 100vh;

  position: relative;
  display: flex;
`;

export const OrphanagesMapSidebar = styled.aside`
  width: 440px;
  background: ${({ theme }) => theme.colors.light.gradient};
  padding: 80px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SibeBarHeader = styled.header`
  h2 {
    font-size: 40px;
    font-weight: 800;
    line-height: 42px;
    margin-top: 64px;
  }

  p {
    line-height: 28px;
    margin-top: 24px;
  }
`;

export const SibeBarFooter = styled.footer`
  display: flex;
  flex-direction: column;
  line-height: 24px;

  strong {
    font-weight: 800;
  }
`;

export const OrphanagesMapCreateOrphanage = styled(Link)`
  z-index: 10;

  position: absolute;
  right: 40px;
  bottom: 40px;

  width: 64px;
  height: 64px;

  background: ${({ theme }) => theme.colors.light.primaryButton};
  border-radius: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;
