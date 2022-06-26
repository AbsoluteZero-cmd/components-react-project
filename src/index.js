import React from "react";
import ReactDOM from "react-dom";
import { faker } from "@faker-js/faker";

import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
import "./style/App.css";

const App = () => {
  return (
    <div className='ui container comments'>
      <ApprovalCard>
        <h4>Warning!</h4>
        <div>Are you really want to do this?</div>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author='Sam'
          date='Today at 6:00 PM'
          text='Comment 1'
          image={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author='Alex'
          date='Today at 7:14 PM'
          text='Comment 2'
          image={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author='Jane'
          date='Yesterday at 2:55 AM'
          text='Comment 3'
          image={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
