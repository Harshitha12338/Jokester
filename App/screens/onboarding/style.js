import {StyleSheet} from 'react-native';
import Colors from '../../theme/Colors';
import fonts from '../../theme/Fonts';

export default StyleSheet.create({
  button: {
    marginHorizontal: 30,
    height: 56,
    backgroundColor: Colors.Primary,
    marginVertical: 10,
    width: 200,
    alignSelf: 'center',
    borderRadius: 16,
  },
  buttonText: {
    fontFamily: fonts.FontFamilySemiBold,
    fontSize: 16,
    alignSelf: 'center',
    color: Colors.Black,
  },
  inputStyle: {
    borderRadius: 16,
    backgroundColor: Colors.White,
    marginHorizontal: 30,
    height: 64,
    fontSize: 16,
    fontWeight: '600',
    borderWidth: 0,
    fontFamily: fonts.FontFamily,
  },
});
