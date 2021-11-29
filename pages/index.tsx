import React from "react";
import type { NextPage } from "next";
import Header from "../components/header.server";
import Test from "../components/test-component.server";
import styles from "../styles/Home.module.css";

// Dynamic url import example!!
//@ts-ignore
import confetti from "https://cdn.skypack.dev/canvas-confetti";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <Test />
        <button onClick={() => confetti()}>GET ME SOME CONFETTI!!</button>
      </main>
    </div>
  );
};

export default Home;
