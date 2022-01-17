import {CommonActions} from '@react-navigation/routers';
import * as React from 'react';

export const navigationRef: any = React.createRef();

export function navigate(name: string, params?: any) {
  navigationRef.current?.navigate(name, params);
}

export function navigateBack() {
  navigationRef.current?.goBack();
}

export function resetToScreen(screen: string, params?: any) {
  navigationRef.current.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{name: screen, params}],
    }),
  );
}
