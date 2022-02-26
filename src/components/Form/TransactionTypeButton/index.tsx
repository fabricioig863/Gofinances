import React, { useState } from 'react'
import { TouchableOpacityProps } from 'react-native'

import { 
  Container, 
  Title, 
  Icon
} from './styles'
  
const icons = {
  down: 'arrow-down-circle',
  up: 'arrow-up-circle',
}

interface Props extends TouchableOpacityProps {
  type: 'up' | 'down';
  title: string;
  isActive: boolean;
}

export function TransactionTypeButton({
  type, 
  title, 
  isActive,
  ...rest
}: Props) {
  return(
    <Container 
      isActive={isActive}
      type={type}
      {...rest}
    >
      <Icon 
        name={icons[type]} 
        type={type}
      />
      <Title>
        {title}
      </Title>
    </Container>
  )
}