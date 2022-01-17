import {FAV_FEED, MAIN_FEED} from '../types';
import _ from 'lodash';
import {FeedProps} from '../../utils/storeInterface';
import {filterArray} from '../../helpers/util';

const initialState: FeedProps = {
  feed: [],
  favFeed: [],
};

type ActionType = {
  type: string;
  payload: any;
};

export default (state = initialState, action: ActionType) => {
  const {type, payload} = action;

  switch (type) {
    case MAIN_FEED:
      return {
        ...state,
        feed: [...payload],
      };
    case FAV_FEED:
      const {cat} = payload;
      if (state.favFeed) {
        let fav = filterArray(state.favFeed, cat, 'id');
        console.log(fav);
        return {
          ...state,
          favFeed: fav,
        };
      } else return state;
    default:
      return state;
  }
};
