import styled from 'styled-components';
import { breakpoints, colors } from './theme';

export const AccentSpan = styled.span`
  font-weight: bold;
  color: ${colors.red};
`;

export const Main = styled.main``;

export const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;

  @media screen and (${breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (${breakpoints.desktop}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
