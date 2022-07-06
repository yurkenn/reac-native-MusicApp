import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  inner_container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  info_container: {
    flexDirection: 'row',
  },
  artists: {
    color: 'black',
  },
  year: {
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 12,
  },
  soldOut_container: {
    alignItems: 'flex-end',
    marginTop: 5,
  },
  soldOut: {
    color: 'red',
  },
});

export default styles;
