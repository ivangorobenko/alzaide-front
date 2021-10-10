import {Action} from "@ngrx/store";

const SET_MESSAGES = "SET_MESSAGES";

export class SetMessages implements Action {
  readonly type = SET_MESSAGES;

  constructor(public payload: any[] | undefined) {
  }
}

export type AppAction = SetMessages
