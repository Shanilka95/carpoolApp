import {StyleSheet} from 'react-native';
import {colors} from '../../constant/colors';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../constant/Metrics';

const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },

  logoView: {
    flex: 1,
    backgroundColor: colors.CHILI_PAPER,
  },

  logoCircle: {
    marginTop: 60,
    backgroundColor: colors.CHILI_PAPER,
  },

  image: {
    width: 180,
    height: 180,
    borderWidth: 1,
    backgroundColor: colors.WHITE,
    borderRadius: 100,
    marginBottom: 20,
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },

  welcomeView: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -34,
    backgroundColor: colors.WHITE,
    borderTopLeftRadius: 42,
  },

  welcomeTxt: {
    fontSize: moderateScale(35),
    fontWeight: 'bold',
    marginTop: -10,
    alignSelf: 'center',
    color: colors.WHITE,
  },

  welcomeTxt2: {
    fontSize: moderateScale(18),
    fontWeight: 'bold',
    marginTop: 10,
    color: colors.WHITE,
    fontStyle: 'italic',
    marginBottom: 65,
    alignSelf: 'center',
  },

  loginTxt: {
    fontSize: moderateScale(25),
    fontWeight: 'bold',
    color: colors.CHILI_PAPER,
    marginTop: verticalScale(10),
  },

  inputStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: verticalScale(40),
  },

  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: colors.CHILI_PAPER,
    borderRadius: 10,
    marginBottom: 15,
    marginTop: 10,
    height: 50,
    width: '80%',
  },

  txtInput: {
    flex: 1,
    alignItems: 'center',
    height: 50,
    fontSize: 12,
    color: colors.BLACK,
  },

  imageStyle: {
    padding: 10,
    margin: 5,
    height: 20,
    width: 20,
    resizeMode: 'contain',
    alignItems: 'center',
  },

  imageIcon: {
    height: 18,
    width: 18,
    marginRight: horizontalScale(8),
  },

  forgotView: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
  },

  buttonView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 20,
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 9,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    width: '50%',
    backgroundColor: colors.CHILI_PAPER,
  },
  text: {
    fontSize: moderateScale(14),
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: colors.WHITE,
  },

  createAccount: {
    marginTop: 18,
    alignItems: 'center',
  },
  account: {
    fontSize: 14,
    color: '#333',
  },
  signup: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.CHILI_PAPER, // Blue color for the signup link
  },
});

export default loginStyles;
