import * as React from 'react';
import {
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  FlatList,
} from 'react-native';
import styles from '../../resources/styles/styles';
import {useState, useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';
import PrimaryButton from '../../components/atoms/primaryButton';
import Note from './note';

function NotesScreen() {
  const [note, setNote] = useState('');
  const [loading, setLoading] = useState(true);
  const [notes, setNotes] = useState([]);

  const ref = firestore().collection('notes');

  useEffect(() => {
    return ref.onSnapshot(querySnapshot => {
      const list = [];
      querySnapshot.forEach(doc => {
        const {title, complete} = doc.data();
        list.push({
          id: doc.id,
          title,
          complete,
        });
      });

      setNotes(list);

      if (loading) {
        setLoading(false);
      }
    });
  }, []);

  if (loading) {
    return null; // or a spinner
  }

  async function addNote() {
    await ref.add({
      title: note,
      complete: false,
    });
    setNote('');
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <Text style={styles.bigText}>Notes</Text>
      {/* <ScrollView> */}
      <Text style={styles.smallText}></Text>
      <FlatList
        style={{flex: 1}}
        data={notes}
        keyExtractor={item => item.id}
        renderItem={({item}) => <Note {...item} />}
      />
      <TextInput
        style={[styles.textInput]}
        placeholder="New note"
        onChangeText={note => setNote(note)}
        defaultValue={note}
      />
      <PrimaryButton
        text="Add note"
        onPress={() => {
          if (note === '') {
          } else {
            addNote();
          }
        }}>
        Add Note
      </PrimaryButton>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
}

export default NotesScreen;
