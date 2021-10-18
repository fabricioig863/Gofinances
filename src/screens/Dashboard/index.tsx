import React from 'react'
import {
  Container,
  Header,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName
} from './styles'

export function Dashboard() {
  return (
    <Container>
      <Header>
        <UserInfo>
          <Photo 
            source={{ uri: 'https://images.unsplash.com/photo-1634351583902-0216460f6413?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80'}} 
          />
          <User>
            <UserGreeting>Olá, </UserGreeting>
            <UserName>Fabricio</UserName>
          </User>
        </UserInfo>
      </Header>
    </Container>
  )
}