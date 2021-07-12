import React from 'react';
import firestore from '@react-native-firebase/firestore';
import {Text} from 'react-native';
import styles from '../../resources/styles/styles';
import {TouchableOpacity} from 'react-native';

function Note({id, title, complete}) {
  async function toggleComplete() {
    await firestore().collection('notes').doc(id).update({
      complete: !complete,
    });
  }

  return (
    <>
      {!complete && (
        <TouchableOpacity onPress={() => toggleComplete()}>
          <Text style={styles.smallerText}>{title}</Text>
        </TouchableOpacity>
      )}
    </>
  );
}

export default React.memo(Note);
