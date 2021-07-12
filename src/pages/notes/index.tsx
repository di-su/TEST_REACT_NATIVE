import * as React from 'react';
import {useRef} from 'react';
import {
  Text,
  SafeAreaView,
  TextInput,
  FlatList,
  Animated,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from '../../resources/styles/styles';
import {useState, useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';
import PrimaryButton from '../../components/atoms/primaryButton';
import Note from './note';
import LottieView from 'lottie-react-native';
import cat from '../../resources/animations/cat-tail-wag.json';

function NotesScreen() {
  const [note, setNote] = useState('');
  const [loading, setLoading] = useState(true);
  const [notes, setNotes] = useState([]);
  const [hasLiked, setHasLiked] = useState(false);

  const progress = useRef(new Animated.Value(0)).current;

  const handleLikeAnimation = () => {
    const newValue = hasLiked ? 0 : 1;

    Animated.timing(progress, {
      toValue: newValue,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    setHasLiked(!hasLiked);
  };

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
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={handleLikeAnimation}>
          <LottieView
            style={{width: 250, height: 250}}
            progress={progress}
            source={cat}
          />
        </TouchableOpacity>
      </View>
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
    </SafeAreaView>
  );
}

export default NotesScreen;
