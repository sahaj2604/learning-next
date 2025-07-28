import React from "react";
import UsersTables from "./UsersTables";

const Users = ({searchParams:{sortOrder}}:{searchParams:{sortOrder:string}}) => {
  return (
    <div>
      <h1>Users</h1>
      <UsersTables sortOrder={sortOrder}/>
    </div>
  );
};

export default Users;
