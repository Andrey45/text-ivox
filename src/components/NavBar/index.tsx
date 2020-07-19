import React from "react";
// redux
import { useDispatch, useSelector } from "react-redux";
// actions
import {
  EditCount,
  CreateMatrix,
  ShowMatrix,
} from "../../view/module/Module_Matrix/actions";
// components
import {
  AppBar,
  TextField,
  Button,
  Toolbar,
  createMuiTheme,
} from "@material-ui/core";
// styles
import { makeStyles, ThemeProvider } from "@material-ui/styles";

import "./styles.scss";
import { grey } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      // Purple and green play nicely together.
      main: grey[500],
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#11cb5f",
    },
  },
});

const useStyles = makeStyles({
  bar: {
    background: "#424141",
    color: "#fff",
  },
  input: {
    padding: "10px",
  },
});

export const NavBar = () => {
  const classes = useStyles();
  const matrix = useSelector((state: DefaultRootState) => state.matrix);
  const dispatch = useDispatch();

  return (
    <ThemeProvider theme={theme}>
      <AppBar className={classes.bar}>
        <Toolbar>
          <div className="label">Размерность матрицы</div>
          <div className="input">
            <TextField
              className={classes.input}
              color={"primary"}
              value={matrix.count}
              type="number"
              variant="outlined"
              onChange={(event) => dispatch(EditCount(event.target.value))}
            />
          </div>
          <div className="">
            <Button onClick={(e) => dispatch(CreateMatrix())}>Создать</Button>
            <Button onClick={(e) => dispatch(ShowMatrix(!matrix.show))}>
              Раскрасить
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};
