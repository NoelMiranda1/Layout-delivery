import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {icons, images, SIZES, FONTS, COLORS} from '../constants';

const Header = () => {
  return (
    <View style={style.header}>
      <TouchableOpacity style={style.btnheader}>
        <Image
          source={icons.nearby}
          resizeMode="contain"
          style={style.imgheader}
        />
      </TouchableOpacity>
      <View style={style.btnheadercenter}>
        <View style={style.headermid}>
          <Text style={style.headertext}>Location</Text>
        </View>
      </View>
      <TouchableOpacity></TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  header: {
    flexDirection: 'row',
    height: 50,
  },
  btnheader: {
    width: 50,
    paddingLeft: SIZES.padding * 2,
    justifyContent: 'center',
  },
  imgheader: {
    width: 30,
    height: 30,
  },
  btnheadercenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headertext: {
    ...FONTS.h3,
  },
  headermid: {
    width: '70%',
    height: '100%',
    backgroundColor: COLORS.lightGray3,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SIZES.radius,
  },
});

export default Header;
