import React from "react";

import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  container: {
    display: "flex",
    width: "max-content",
    margin: "50px auto 0 auto",
    boxShadow: "1px 1px 5px #424141",
    borderRadius: "5pX",
  },
});

export const ComponentMtrix = () => {
  const matrix = useSelector((state: DefaultRootState) => state.matrix);
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {matrix.matrix.map((items, idx) => (
        <div key={"row_" + idx}>
          {items.map((item, idxs) => (
            <div
              key={"col_" + idxs}
              style={{
                background: matrix.show ? item.color : "",
                padding: "12px",
              }}
            >
              {item.number}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
