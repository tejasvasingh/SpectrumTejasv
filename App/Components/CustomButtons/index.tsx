import React from 'react';
import {
  TouchableOpacity,
  Text,
  ViewStyle,
  TextStyle,
  ActivityIndicator,
} from 'react-native';
import {styles} from './styles';

interface CustomButtonProps {
  style?: ViewStyle;
  size?: string;
  textStyle?: TextStyle;
  disabled?: boolean;
  title: string;
  onPress: () => void;
}

/**
 * CustomButton UI Component - Renders CustomButton component
 * @props - CustomButtonProps
 * @returns {React.FC<CustomButtonProps>} - Returns React.FC component of CustomButton
 */
const CustomButton: React.FC<CustomButtonProps> = (props): JSX.Element => {
  const {style, textStyle, title, onPress} = props;
  return (
    <TouchableOpacity {...props} onPress={onPress} style={[styles.btn, style]}>
      {title && <Text style={[styles.btnText, textStyle]}>{title}</Text>}
    </TouchableOpacity>
  );
};

export default CustomButton;
