import * as React from 'react';
import {DefaultTheme } from '@react-navigation/native';

const theme = {
    dark: false,
    ...DefaultTheme,
    colors: {
        primary: 'rgb(255, 45, 85)',
        // background: 'rgb(242, 242, 242)',
        // card: 'rgb(255, 255, 255)',
        // text: '#25282B',
        // border: 'rgb(199, 199, 204)',
        // notification: 'rgb(255, 69, 58)',
      },
}

export default theme