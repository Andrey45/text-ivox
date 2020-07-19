/// <reference types="react-scripts" />
import { IStateMatrix } from "./view/module/Module_Matrix/reducer";

declare global {
  interface DefaultRootState {
    matrix: IStateMatrix;
  }
}
