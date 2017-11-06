import React from 'react';
import T from 'prop-types';

import {
  StyleSheet,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const KeyboardAvoidingView = props => (
  <View {...props} style={[styles.container, props.styles]} />
);

KeyboardAvoidingView.propTypes = {
  offset: T.number,
  children: T.node,
  styles: T.array,
};

export default KeyboardAvoidingView;
