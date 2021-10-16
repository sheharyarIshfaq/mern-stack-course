import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Sheharyar",
      image:
        "https://images.unsplash.com/photo-1524666041070-9d87656c25bb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
      places: "4",
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
