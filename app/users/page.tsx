import React from "react";
import UsersTables from "./UsersTables";
interface UsersPageProps {
  searchParams?: {
    sortOrder?: string;
  };
}
const Users = ({searchParams}:UsersPageProps) => {
  return (
    <div>
      <h1>Users</h1>
      <UsersTables sortOrder={searchParams?.sortOrder}/>
    </div>
  );
};

export default Users;
