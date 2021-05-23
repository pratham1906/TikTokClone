import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: Dimensions.get('window').height,
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  uiContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 30,
    justifyContent: 'flex-end',
  },
  iconContainer: {
    alignItems: 'center',
  },

  statsLabel: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 5,
  },
});

export default styles;
