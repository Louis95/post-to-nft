
import React from "react";
import "tailwindcss/dist/base.css";

import {
  Container,
  Heading,
  Flex,
  Spacer,
  Avatar,
  Button,
} from "@chakra-ui/react";
import { useMoralis } from "react-moralis";
import { Auth } from "./components/auth";
import { Switch, Route, Redirect, Link } from "react-router-dom";
import { Home } from "./components/Home";
import { Profile } from "./components/Profile";

// Language: javascript

function App() {
  const { isAuthenticated, isAuthUndefined, user, logout } = useMoralis();

  return (
    <Container>
      <Flex my={6}>
        <Link to="/">
          <Heading>Home</Heading>
        </Link>
        <Spacer />
        {isAuthenticated && (
          <Link to="/profile">
            {" "}
            <Avatar name={user.attributes.username} />
          </Link>
        )}
        {isAuthenticated && (
          <Button
            onClick={() => {
              logout();
            }}
            ml={3}
          >
            Logout
          </Button>
        )}
      </Flex>
      <Heading margin={45} mb={6}>
        {/* POST TO NFT,{" "}
        {user ? user.attributes.username : "Please Login...."} */}
      </Heading>

      {isAuthenticated ? (
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/profile" exact>
            <Profile />
          </Route>
        </Switch>
      ) : (
        <>
          {!isAuthUndefined && <Redirect to="/" />}

          <Auth />
        </>
      )}
    </Container>
  );
}

export default App;
