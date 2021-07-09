import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from '../../resources/styles/styles';

interface Props {
  onPress: () => void;
  text: string;
}

const PrimaryButton: React.FC<Props> = ({onPress, text}) => {
  return (
    <TouchableOpacity style={styles.addButton} onPress={onPress}>
      <Text style={styles.mediumTextWhite}>{text}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
