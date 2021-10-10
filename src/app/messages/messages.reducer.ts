import {MessagesAction, RECUPERER_MESSAGES} from "./messages.actions";
import {Message} from "./message.model";


export interface State {
  messages: Message[];
};


const initialState: State = {
  messages: [],
}

export function messagesReducer(state = initialState, action: MessagesAction) {
  switch (action.type) {
    case RECUPERER_MESSAGES:
      return {
        ...state,
        messages: action.payload
      }
    default :
      return state
  }
}

export const getMessages = (state: State) => state.messages;
