import styled from 'styled-components';
import { boxShadow, breakpoints, colors } from './theme';
import Loader from 'react-loader-spinner';

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

export const Button = styled.button`
  padding: 12px 18px;
  color: ${colors.beige};
  background-color: ${colors.red};
  width: ${(props) => props.width && `${props.width}px`};
  margin: 20px ${(props) => (props.center ? 'auto' : '0px')};
  border: 1px solid ${colors.red};
  border-radius: 8px;
  transition: ease-in-out 0.3s;

  &:hover {
    background-color: ${colors.beige};
    color: ${colors.red};
    border: 1px solid ${colors.red};
    cursor: pointer;
  }
`;

export const Loading = styled(Loader)``;
Loading.defaultProps = {
  type: 'TailSpin',
  color: colors.red,
  width: 100,
  height: 100,
};

export const CenterOfScreen = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const DateRow = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const DateValue = styled.p`
  font-size: 16px;
  padding-bottom: 20px;
`;

export const DateLabel = styled.p`
  font-size: 18px;
  padding-bottom: 20px;
  padding-right: 8px;
  font-weight: bold;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (${breakpoints.tablet}) {
    width: 400px;
    margin: 0 auto;
  }
`;

export const Input = styled.input`
  padding: 8px 8px;
  border-radius: 8px;
  border: 1px solid ${colors.black};
  margin-bottom: 16px;
`;

export const InputLabel = styled.label``;

export const CostCards = styled.div`
  box-shadow: ${boxShadow};
  margin: 24px auto;
  display: flex;
  justify-content: space-between;
  border-right: ${(props) =>
      props.amount > 0 ? `${colors.green}` : `${colors.red}`}
    10px solid;
`;

export const CostItem = styled.p`
  padding: 10px;
`;

export const CostCardsContainer = styled.div`
  max-height: 500px;
  overflow-y: scroll;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (${breakpoints.tablet}) {
    max-width: 700px;
    margin: 0 auto;
  }
`;

export const BalanceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ValuesContainer = styled.div`
  padding: 30px 10px;
  background-color: ${colors.red};
  border-radius: 20px;
  color: ${colors.beige};
`;

export const Breakdown = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  margin: 24px auto;
  grid-gap: 20px;

  @media screen and (${breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    max-width: 400px;
  }
`;

export const BreakdownValues = styled.h2`
  font-weight: 500;
  font-size: 28px;
  color: ${(props) => (props.values < 0 ? `${colors.red}` : `${colors.green}`)};
`;

export const BreakDownFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: ${colors.beige};
  padding: 24px 0px;
  border-bottom: 4px solid
    ${(props) => (props.values < 0 ? `${colors.red}` : `${colors.green}`)};
`;

export const ValuesLabel = styled.p`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;

export const BreakdownLabel = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: ${colors.blue};
`;

export const MainBalance = styled.h2`
  font-size: 32px;
`;
