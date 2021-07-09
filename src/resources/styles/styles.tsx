import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  bigText: {
    fontWeight: 'bold',
    fontSize: 60,
    padding: 10,
    paddingLeft: 20,
  },
  bigTextWhite: {
    fontWeight: 'bold',
    fontSize: 60,
    padding: 10,
    paddingLeft: 20,
    color: 'white',
  },
  mediumTextWhite: {
    fontWeight: 'bold',
    fontSize: 40,
    padding: 10,
    paddingLeft: 20,
    color: 'white',
  },
  smallText: {
    fontWeight: 'bold',
    fontSize: 30,
    padding: 10,
    paddingLeft: 20,
  },
  smallerText: {
    fontWeight: 'bold',
    fontSize: 20,
    padding: 10,
    paddingLeft: 20,
    flex: 1,
  },
  addButton: {
    alignItems: 'center',
    backgroundColor: 'black',
    padding: 10,
    margin: 20,
  },
  textInput: {
    backgroundColor: 'white',
    height: 60,
    borderColor: 'black',
    marginLeft: 20,
    marginRight: 20,
    padding: 15,
    fontSize: 20,
  },
  serviceImage: {
    width: 100,
    height: 100,
  },
  serviceBlock: {
    flexDirection: 'row',
    marginBottom: 5,
    padding: 10,
  },
  title: {
    textDecorationLine: 'underline',
  },
});

export default styles;
