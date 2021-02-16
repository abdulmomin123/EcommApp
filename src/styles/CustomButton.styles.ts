import styled from 'styled-components';
import { Props } from '../components/CustomButton';

export const CustomButtonContainer = styled.button<Props>`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;

  background-color: ${props =>
    props.isGoogleSignIn ? '#4285f4' : props.inverted ? '#fff' : '#000'};
  color: ${props =>
    props.isGoogleSignIn ? '#fff' : props.inverted ? '#000' : '#ffff'};
  border: ${props =>
    props.isGoogleSignIn ? 'none' : props.inverted ? '1px solid #000' : 'none'};

  &:hover {
    background-color: ${props =>
      props.isGoogleSignIn ? '#357ae8' : props.inverted ? '#000' : '#fff'};
    color: ${props =>
      props.isGoogleSignIn ? '#fff' : props.inverted ? '#fff' : '#000'};
    border: ${props =>
      props.isGoogleSignIn
        ? 'none'
        : props.inverted
        ? 'none'
        : '1px solid #000'};
  }
`;
