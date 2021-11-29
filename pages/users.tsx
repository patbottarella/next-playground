import React, { useEffect, useState, Suspense } from "react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Users: NextPage = () => {
  const [users, setUsers] = useState([{ name: "Hans" }]);
  useEffect(() => {
    async () => {
      const usersRequest = await fetch("https://randomuser.me/api/?results=10");
      const usersResponse = await usersRequest.json();
      const users: any = usersResponse.results;
      setUsers({ users });
    };
  }, []);

  return (
    <div className={styles.container}>
      <h1>Users Overview</h1>
      <Suspense fallback={<h1>... Loading Users</h1>}>
        {users.map((user) => {
          return <div>{user.name}</div>;
        })}
        <div>Test</div>
        {console.log(users)}
      </Suspense>
    </div>
  );
};

export default Users;
