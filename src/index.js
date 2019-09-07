import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard />
      <CommentDetail
        author="Sam"
        postDate="Today at 4:50PM"
        postText="Great post!"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Rob"
        postDate="Today at 1:30PM"
        postText="Nice!!"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Alice"
        postDate="Yesterday at 9:20PM"
        postText="Great job, man!"
        avatar={faker.image.avatar()}
      />
    </div>

  )
};



ReactDOM.render(<App />, document.querySelector('#root'));
