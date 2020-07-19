import { Dispatch, Store } from "redux";
import { MatrixActions } from "../../../../constants/matrix";
import createRange from "../../../../mixins";
import { IMatrix } from "../reducer";

export const EditCount = (count: string) => (dispatch: Dispatch) => {
  dispatch({
    type: MatrixActions.EDIT_COUNT,
    payload: count,
  });
};

export const ShowMatrix = (show: boolean) => (dispatch: Dispatch) => {
  dispatch({
    type: MatrixActions.SHOW_MATRIX,
    payload: show,
  });
};

export const CreateMatrix = () => (dispatch: Dispatch, getState: any) => {
  const count: string = getState().matrix.count;
  const range = createRange(+count);
  const matrix: IMatrix[][] = [];

  range.map(() =>
    matrix.push(
      range.map((item) => ({
        number: Math.floor(Math.random() * Math.floor(2)),
        color: "transparent",
      }))
    )
  );

  matrix.map((items, idx) => {
    items.map((item, idxs) => {
      if (item.number) {
        if (
          items[idxs - 1]?.number ||
          items[idxs + 1]?.number ||
          (matrix[idx - 1] ? matrix[idx - 1][idxs].number : false) ||
          (matrix[idx + 1] ? matrix[idx + 1][idxs].number : false)
        ) {
          item.color = "#2d41eb";
        }
      } else {
        item.color = "transparent";
      }
    });
  });

  dispatch({
    type: MatrixActions.CREATE_MATRIX,
    payload: matrix,
  });
};
