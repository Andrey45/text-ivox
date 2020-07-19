import { Action, ReducerClass, Immutable } from "reducer-class/dist";
import { MatrixActions } from "../../../../constants/matrix";

export interface IMatrix {
  number: number;
  color: "#2d41eb" | "transparent";
}

export interface IStateMatrix {
  count: string;
  show: boolean;
  matrix: IMatrix[][];
}

class MatrixReducer extends ReducerClass<IStateMatrix> {
  initialState = {
    count: localStorage.getItem("count") || "",
    show:
      (JSON.parse(localStorage.getItem("show") as string) as boolean) || false,
    matrix: JSON.parse(localStorage.getItem("matrix") as string) || [],
  };

  @Action(MatrixActions.EDIT_COUNT)
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  editCount(
    state: Immutable<IStateMatrix>,
    draft: IStateMatrix,
    actions: { payload: string }
  ) {
    localStorage.setItem("count", actions.payload);
    draft.count = actions.payload;
  }

  @Action(MatrixActions.SHOW_MATRIX)
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  showMatrix(
    state: Immutable<IStateMatrix>,
    draft: IStateMatrix,
    actions: { payload: boolean }
  ) {
    localStorage.setItem("show", JSON.stringify(actions.payload));
    draft.show = actions.payload;
  }

  @Action(MatrixActions.CREATE_MATRIX)
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  createMatrix(
    state: Immutable<IStateMatrix>,
    draft: IStateMatrix,
    actions: { payload: IMatrix[][] }
  ) {
    localStorage.setItem("matrix", JSON.stringify(actions.payload));
    draft.matrix = actions.payload;
  }
}

export const matrix = MatrixReducer.create();
