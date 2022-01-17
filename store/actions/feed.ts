import axios from 'axios';
import {PostProps} from '../../utils/storeInterface';
import {FAV_FEED, MAIN_FEED} from '../types';

axios.defaults.headers.common['x-api-key'] =
  '248ffbb8-dfa6-42ce-9c9d-2783bb66d874';

export const setFeed = () => {
  return (dispatch: any) => {
    loadCats().then(feed => {
      dispatch({type: MAIN_FEED, payload: feed});
    });
  };
};

export const addFav = (cat: PostProps) => {
  return (dispatch: any) => {
    dispatch({type: FAV_FEED, payload: {cat}});
  };
};

export function loadCats() {
  return new Promise<PostProps[]>(async (resolve, reject) => {
    try {
      let response = await axios.get('https://api.thecatapi.com/v1/breeds', {
        params: {limit: 10, size: 'full'},
      }); // Ask for 10 Cat Images, at full resolution

      // console.log(response.data, 'CATS_DATA');

      let cats = response.data;
      let filteredCat: PostProps[] = [];
      cats.forEach((x: any) => {
        filteredCat.push({id: x.id, image: x.image, name: x.name});
      });
      resolve(filteredCat);
    } catch (err) {
      console.log(err, 'Error fetching Cat Data');
    }
  });
}
