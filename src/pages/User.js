import React from "react";
import { useParams} from "react-router";


function User({match}) {
    const { firstname, lastname } = useParams();
  return <div>User {firstname} {lastname} </div>;
}
// function User({match}) {
//     console.log(match.params)
//   return <div>User {match.params.user}</div>;
// }

export default User;