import gql from 'graphql-tag';
import * as fragments from '../fragments';

export default gql`
  query Chats {
    ...Chat
    }
  } 
  ${fragments.chat}
`;
