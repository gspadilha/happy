import styled from 'styled-components';
import Link from '../../foundation/Link';

export const HomeContainer = styled.div`
  background: ${({ theme }) => theme.colors.light.gradient};
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HomeContent = styled.div`
  position: relative;

  width: 100%;
  max-width: 1110px;

  height: 100%;
  max-height: 680px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  background: url('/images/landing-ilustra.svg') no-repeat 80% center;
`;

export const HomeTitle = styled.main`
  max-width: 350px;

  h1 {
    font-size: 76px;
    font-weight: 900;
    line-height: 70px;
  }

  p {
    margin-top: 40px;
    font-size: 24px;
    line-height: 34px;
  }
`;

export const HomeLocation = styled.section`
  position: absolute;
  top: 0;
  right: 0;

  font-size: 24px;
  line-height: 34px;

  display: flex;
  flex-direction: column;

  text-align: right;

  strong {
    font-weight: 800;
  }
`;

export const HomeEnterApp = styled(Link)`
  position: absolute;
  right: 0;
  bottom: 0;

  width: 80px;
  height: 80px;

  background: ${({ theme }) => theme.colors.light.secondaryButton};
  border-radius: 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: background 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.light.secondaryButtonHover};
  }
`;
