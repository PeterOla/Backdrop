/**
 * @format
 */

import {render, fireEvent} from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import {Provider} from 'react-redux';
import reduxStore from '../store';
import {Feed} from '../tabs/Feed';
import {Fav} from '../tabs/Fav';

describe('All Cats', () => {
  test('Check if Abyssinian Exist and Add to Fav', async () => {
    const {store} = reduxStore();

    const {findByText, getAllByTestId} = render(
      <Provider store={store}>
        <Feed />
      </Provider>,
    );

    setTimeout(function () {
      expect(findByText('Abyssinian')).toBeDefined();

      const button = getAllByTestId('ADD_FAV');
      fireEvent.press(button[0]);
    }, 500);
  });

  test('Check if Abyssinian Exist inside redux Fav', async () => {
    const {store} = reduxStore();

    const {findByText, getByTestId, getAllByTestId} = render(
      <Provider store={store}>
        <Fav />
      </Provider>,
    );
    expect(findByText('Abyssinian')).toBeDefined();
  });
});
