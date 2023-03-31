import {Text, View, StatusBar, ImageBackground} from 'react-native';
import React from 'react';
import {COLORS, SIZES, images, FONTS} from '../constants';
import {LinearGradient} from 'react-native-linear-gradient';

const Login = () => {
  function renderHeader() {
    return (
      <View
        style={{
          height: SIZES.height > 700 ? '65%' : '60%',
        }}>
        <ImageBackground
          source={images.loginBackground}
          style={{
            flex: 1,
            justifyContent: 'flex-end',
          }}
          resizeMode="cover">
          <LinearGradient>
            {/* // colors={['#6e45e2', '#88d3ce']}
            // style={styles.container}> */}
            <View>
              <Text>Hai</Text>
            </View>
          </LinearGradient>
        </ImageBackground>
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.black,
      }}>
      <StatusBar barStyle="light-content" />
      {renderHeader()}
    </View>
  );
};


export default Login;
