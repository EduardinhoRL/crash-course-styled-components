import React from 'react'
import {Wrapper, fadeIn} from './styled'

import styled, { css } from 'styled-components'

const StyledButton =  styled.button`
  background-color: #fff;
  color:palevioletred;
  font-size: 1.2rem;
  margin: ${({margin}) => margin || '2rem'};
  padding: .5rem 1rem;
  animation:  2s ${fadeIn} ease-in;

  ${({primary}) => primary && css`
    background-color: palevioletred;
    color: white;
    box-shadow: 0 .5rem 1.5rem rgba(0, 0, 0, .3);
  `}

  &:hover {
    color: #fff;
    background-color: palevioletred;
  }
`
const OutterWrapper =  styled.div`
  width: 100%;
  background: blueviolet;
  margin-top: 2rem;

  &:hover ${StyledButton} {
    color: red;
  }
`


const SuperButton = styled(StyledButton)`
  font-size: 2.5rem;
`

const Button = ({primary, margin, children}) => {
  return ( 
    <OutterWrapper>
      <StyledButton primary={primary} margin={margin}>{children}</StyledButton>
    </OutterWrapper>
   );
}
 
export default Button;