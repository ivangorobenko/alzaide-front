import {Action} from "@ngrx/store";
import {Message} from "./message.model";

export const RECUPERER_MESSAGES = "RECUPERER_MESSAGES";

export class RecupererMessages implements Action {
  readonly type = RECUPERER_MESSAGES;
  constructor(public payload: Message[] | undefined) {
  }
}


export type MessagesAction = RecupererMessages;
