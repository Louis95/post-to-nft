import { Box } from "@chakra-ui/layout";
import React from "react";


import {Card} from "./Card.js";

export const Home =() => {
  return (

    <div style={styles.pin_container}>
      <Card size="small" />
      <Card size="medium" />
      <Card size="large" />
      <Card size="medium" />
      <Card size="small" />
    </div>
  );
}

const styles = {
  pin_container: {
    margin: 80,
    padding: 0,
    width: "80vw",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, 250px)",
    gridAutoRows: "10px",
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    justifyContent: "center",
    // backgroundColor: "black",
  },
};
