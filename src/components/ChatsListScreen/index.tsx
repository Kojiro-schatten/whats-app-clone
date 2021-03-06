import React from 'react';
import ChatsNavbar from './ChatsNavbar';
import ChatsList from './ChatsList';
import styled from 'styled-components';
import { History } from 'history';

const Container = styled.div`
  height: 100vh;
`;

interface ChatslistScreenProps {
  history: History;
}

const ChatsListScreen: React.FC<ChatslistScreenProps> = ({ history }) => (
  <Container>
    <ChatsNavbar />
    <ChatsList history={history} />
  </Container>
);
export default ChatsListScreen;
