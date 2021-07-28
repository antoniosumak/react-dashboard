import styled, { keyframes } from 'styled-components';
import { boxShadow, colors } from '../../lib/styles/theme';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

export const CardWrapper = styled.div`
  padding: 20px;
  box-shadow: ${boxShadow};
  height: min-content;
  overflow: hidden;
  border-top: 8px solid
    ${(props) => (props.active < 1000 ? `${colors.green}` : `${colors.red}`)};
  border-radius: 10px;
  transition: 0.3s ease-in-out;

  &:hover {
    transform: translateY(-10px);
  }
`;

export const ImageContainer = styled.figure`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FlagImage = styled.img`
  background-color: ${colors.blue};
  border-radius: 12px;
  padding: 5px 15px;
  box-shadow: ${boxShadow};
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
`;

export const Country = styled.h2`
  padding: 8px 0px;
  text-align: center;
  font-size: 20px;
  color: ${colors.black};
`;

export const InfoRow = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8px 0px;
`;

export const ItemLabel = styled.h3`
  font-size: 18px;
`;

export const ItemValue = styled.p`
  font-size: 16px;
`;

export const Column = styled.div``;

export const ArrowDown = styled(FiChevronDown)`
  color: ${colors.red};
  font-size: 16px;
  transition: 0.3s ease-in-out;
  transform: ${(props) => (props.opened ? 'rotate(180deg)' : 'rotate(0)')};
`;

export const Animation = keyframes`

from {
  opacity: 0;
}
to{
  opacity: 1;
}

`;

export const HiddenContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 20px;
  animation: ${Animation} 0.3s linear;
`;
