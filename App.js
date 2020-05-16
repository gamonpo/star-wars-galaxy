import React from 'react';
import {StatusBar} from 'react-native';
import Src from './src';

const planet_svg = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#1a1a1a" />
      <Src />
    </>
  );
};

export default planet_svg;
