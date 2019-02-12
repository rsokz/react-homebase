import React from "react";
import Header from "./Header";
import AuthForm from "./Auth/AuthForm";
import { Grid } from "@material-ui/core";

const App = props => {
  return (
    <div>
      {/* <Header /> */}
      <Grid
        style={{ minHeight: "100vh" }}
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <AuthForm />
      </Grid>
      {props.children}
    </div>
  );
};

export default App;
