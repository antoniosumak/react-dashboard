import styled from 'styled-components';
import { boxShadow } from '../../lib/styles/theme';

export const CardWrapper = styled.div`
  height: 200px;
  padding: 20px;
  box-shadow: ${boxShadow};
  overflow: hidden;
`;

export const ImageContainer = styled.img`
  width: 100%;
  height: 100%;
`;
