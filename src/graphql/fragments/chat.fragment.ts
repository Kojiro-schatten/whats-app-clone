import gql from 'graphql-tag';
import message from './message.fragment';

// on句の後のコンポーネントが、選択するタイプに合わせて指定されていることです。
// この場合、peopleはPerson型であり、people(id: "7")からfirstNameとlastNameのフィールドを選択したいとします。
export default gql`
  fragment Chat on Chat {
    id
    name
    picture
    lastMessage {
      ...Message
    }
  }
  ${message}
`;
