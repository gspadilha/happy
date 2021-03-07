import styled from 'styled-components';
import { Popup } from 'react-leaflet';

export const MyPopup = styled(Popup)`
  .leaflet-popup-content-wrapper {
    background: ${({ theme }) => theme.colors.light.background};
    border: 1px solid ${({ theme }) => theme.colors.light.primaryColor};
    border-radius: 20px;
    box-shadow: none;
  }

  .leaflet-popup-content {
    color: ${({ theme }) => theme.colors.light.primaryColor};

    font-size: 20px;
    font-weight: bold;
    margin: 8px 12px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      width: 40px;
      height: 40px;
      background: #15c3d6;
      box-shadow: 17px 28px 42px rgba (23, 142, 166, 0.16);

      border-radius: 12px;

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .leafleft-popup-tip-container {
    display: none;
  }
`;
