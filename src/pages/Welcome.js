import { Route } from "react-router-dom";

const Welcome = () => {
  return (
    <seciton>
      <h1>Welcome page</h1>
      <Route path="/welcome/new-user">
        <p>Welcome, new user!</p>
      </Route>
    </seciton>
  );
};

export default Welcome;
