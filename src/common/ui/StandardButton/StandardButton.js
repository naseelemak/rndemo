import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    color: '#007AFF',
  },
  labelDisabled: {
    color: '#808080',
  },
});

const StandardButton = ({
  label,
  containerStyle,
  textStyle,
  onPress,
  isDisabled,
}) => {
  return (
    <TouchableOpacity
      style={containerStyle || null}
      onPress={onPress}
      disabled={isDisabled}
    >
      <Text
        style={[styles.label, isDisabled && styles.labelDisabled, textStyle]}
      >
        {label || ''}
      </Text>
    </TouchableOpacity>
  );
};

export default StandardButton;
