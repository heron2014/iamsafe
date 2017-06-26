import React from 'react';
import { View, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';
import Slides from './components/Slides';
import styles from './styles';

const height = Dimensions.get('window').height / 1.05;

const SLIDE_DATA = [
  { text: 'Strapline Text 1', color: 'pink' },
  { text: 'Strapline Text 2', color: '#009688' },
  { text: 'Strapline Text 3', color: '#03A9F4' }
];

const Landing = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{ height }}>
        <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete} />
        <View style={{ marginTop: 10 }}>
          <Button
            buttonStyle={styles.button}
            backgroundColor="blue"
            textStyle={{ color: '#fff' }}
            title="Signup"
            onPress={() => navigation.navigate('SignUp')}
          />
          <Button
            buttonStyle={styles.button}
            backgroundColor="red"
            textStyle={{ color: '#fff' }}
            title="Login"
            onPress={() => navigation.navigate('SignIn')}
          />
        </View>
      </View>
    </View>
  );
};

export default Landing;
