import styled from 'styled-components';
import { breakpoints, colors } from '../../lib/styles/theme';

export const SearchbarWrapper = styled.div`
  margin-bottom: 24px;

  @media screen and (${breakpoints.tablet}) {
    width: 400px;
  }
`;

export const SearchbarInput = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  outline: none;
  border: 1px solid ${colors.blue};
`;
