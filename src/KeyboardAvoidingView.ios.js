import React from 'react';
import T from 'prop-types';

import {
  StyleSheet,
  KeyboardAvoidingView as NativeKeyboardAvoidingView,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const KeyboardAvoidingView = props => (
  <NativeKeyboardAvoidingView
    keyboardVerticalOffset={props.offset || 0}
    behavior="padding"
    {...props}
    style={[styles.container, props.styles]}
  >
    <View style={styles.container}>{props.children}</View>
  </NativeKeyboardAvoidingView>
);

KeyboardAvoidingView.propTypes = {
  offset: T.number,
  children: T.node,
  styles: T.array,
};

export default KeyboardAvoidingView;
