import React from "react";
import { useLocation,useHistory } from "react-router";

function About() {
  const location = useLocation();
  const history = useHistory();
  console.log(location);
  console.log(history)
  return (
    <>
      <div>About</div>
      <div>location: {location.pathname}</div>
      <div>from: {location.state.from}</div>
      <button onClick={() => { history.goBack()}}>Go Back</button>
      <button onClick={() => history.push(location.pathname)}>History Push</button>
    </>
  );
}

export default About;
