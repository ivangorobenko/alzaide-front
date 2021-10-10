import * as fromInformations from './messages/messages.reducer'
import {ActionReducerMap, ActionType, createFeatureSelector, createSelector} from "@ngrx/store";

export interface State {
  informations: any
}

export const reducers: ActionReducerMap<State,ActionType<State>> = {
  informations: fromInformations.messagesReducer,
};

export const getInformationsState = createFeatureSelector<fromInformations.State>('informations');
export const getMessages = createSelector(getInformationsState, fromInformations.getMessages);

