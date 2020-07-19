import React from "react";
import { NavBar } from "../components/NavBar";
import { ComponentMtrix } from "./module/Module_Matrix/view";
import { createStyles, makeStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      flexGrow: 1,
      padding: "76px",
      height: "calc(100vh - 153px)",
      background: "#a8adab",
    },
  })
);

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <div className="mn-layout fixed-sidebar">
        <NavBar />
        <main className={classes.main}>
          <ComponentMtrix />
        </main>
      </div>
    </div>
  );
}

export default App;
