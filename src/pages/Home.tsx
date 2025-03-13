import React from "react";
import Sidebar from "@/components/sidebar/Sidebar";
import styles from "@/styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.home_container}>
      <Sidebar />
    </div>
  );
};

export default Home;
