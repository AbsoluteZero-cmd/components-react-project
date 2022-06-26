import React from "react";
import ReactDOM from "react-dom";
import { faker } from "@faker-js/faker";

import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className='ui container comments'>
      <CommentDetail
        author='Sam'
        date='Today at 6:00 PM'
        text='Comment 1'
        image={faker.image.avatar()}
      />
      <CommentDetail
        author='Alex'
        date='Today at 7:14 PM'
        text='Comment 2'
        image={faker.image.avatar()}
      />
      <CommentDetail
        author='Jane'
        date='Yesterday at 2:55 AM'
        text='Comment 3'
        image={faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
