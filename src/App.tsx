import React from 'react';
import ChatsListScreen from './components/ChatsListScreen/index';
import { BrowserRouter, Route, Redirect, RouteComponentProps } from 'react-router-dom';
import ChatRoomScreen from './components/ChatRoomScreen';
import AnimatedSwitch from './components/AnimatedSwitch';

const App: React.FC = () => (
  <BrowserRouter>
    <AnimatedSwitch>
      <Route exact path="/chats" component={ChatsListScreen} />
      <Route
        exact
        path="/chats/:chatId"
        component={({ match,history, }: RouteComponentProps<{ chatId: string }>) => (
          <ChatRoomScreen chatId={match.params.chatId} history={history} />
        )}
      />
    </AnimatedSwitch>
    <Route exact path="/" render={redirectToChats} />
  </BrowserRouter>
)

const redirectToChats = () => <Redirect to="/chats" />;

export default App;
