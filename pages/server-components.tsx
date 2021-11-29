import type { NextPage } from "next";
import Header from "../components/header.server";
import styles from "../styles/Home.module.css";
import React from "react";
import Test from "./test";

const ServerComponents: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1>Server Components</h1>
        <Test />
      </main>
    </div>
  );
};

export default ServerComponents;
