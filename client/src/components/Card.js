import React from "react";

export const Card = (props) => {
  return (
    <div
      style={{
        ...styles.card,
        ...styles[props.size],
      }}
    ></div>
  );
}

const styles = {
  card: {
    margin: "15px 10px",
    padding: 0,
    borderRadius: "16px",
    // backgroundColor: "red",
    //insert image here
    backgroundImage: "url('https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60')",
    
    backgroundSize: "cover",  },
    
  small: {
    gridRowEnd: "span 26",
  },
  medium: {
    gridRowEnd: "span 33",
  },
  large: {
    gridRowEnd: "span 45",
  },
};
