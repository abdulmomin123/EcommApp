import React from 'react';
// import '../styles/CustomButton.scss';
import { CustomButtonContainer } from '../styles/CustomButton.styles';

export interface Props {
  [key: string]: any;
}

const CustomButton: React.FC<Props> = ({ children, ...restProps }) => {
  return (
    <CustomButtonContainer {...restProps}>{children}</CustomButtonContainer>
  );
};

export default CustomButton;
