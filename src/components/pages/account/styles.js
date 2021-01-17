import {
  moderateScale,
  height,
  width,
} from '../../../functions/ResponsiveFontSize';

import {StyleSheet} from 'react-native';
export default accountStyles = StyleSheet.create({
  waves: {
    width,
  },
  title: {
    fontSize: moderateScale(32),
    fontFamily: 'Nunito-Regular',
    color: '#FFF',
    marginLeft: moderateScale(20),
    zIndex: 1,
    marginVertical: height * 0.1,
  },
  inputs: {
    marginTop: height * 0.06,
  },
  forgotPass: {
    color: '#65B98F',
    fontSize: moderateScale(16),
    fontFamily: 'Nunito-Regular',
    textAlign: 'center',
    padding: 10,
  },
  noAccountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    alignSelf: 'center',
  },
  noAccount: {
    color: '#AFAFAF',
    fontSize: moderateScale(16),
    fontFamily: 'Nunito-Regular',
  },
  noAccountButton: {
    fontSize: moderateScale(16),
    fontFamily: 'Nunito-Regular',
    color: '#65B98F',
    marginLeft: 6,
  },
});
