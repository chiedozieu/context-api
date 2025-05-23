import React, { useContext } from "react";
import UserContext from "./context/UserContext";

function Profile() {
  const { user,  } = useContext(UserContext);

  
 

  if (!user) return <h1 className="text-center mt-8 bg-amber-600">Not Logged In</h1>;

  return <div className="text-center mt-8"><h1>Profile : {user.username} </h1></div>;
}

export default Profile;
