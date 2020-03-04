import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack';
import { AppStackParamListType } from '../../../App';

type ProfileScreenNavigationProp = StackNavigationProp<
  AppStackParamListType,
  'Movies'
>;

type MoviesProps = {
  navigation: ProfileScreenNavigationProp;
};

const Movies: React.FC<MoviesProps> = ({ navigation }) => {
  return (
    <View>
      <Text>asdasd</Text>
    </View>
  )
}


export default Movies

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    overflow: 'visible'
  },
  poster: {
    width: '100%',
    height: width - 20,
    marginBottom: 10
  },
  heading: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 10
  },
  subHeading: {
    flexDirection: 'row',
    marginBottom: 10
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18
  },
  plot: {
    fontStyle: 'italic',
    marginBottom: 10
  },
  rating: {
    marginBottom: 10
  },
  loading: {
    alignItems: 'center',
    justifyContent: 'center',
  }
});
