import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

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
      <Text style={textStyle || { fontSize: 14, color: '#007AFF' }}>
        {label || ''}
      </Text>
    </TouchableOpacity>
  );
};

export default StandardButton;
