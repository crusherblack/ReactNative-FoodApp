import {
  StyleSheet, Platform
} from 'react-native'
import {
  Fonts,
  Colors
} from '../../Themes/'

export default StyleSheet.create({
  headerStyle: {
    backgroundColor: 'orange'
  },
  iconStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 30
  },
  titleText: {
    alignContent: 'center',
    fontSize: 21,
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: 'white'
  },
  headerContainer: {
    height: Platform.OS === 'ios' ? '10%' : '8%',
    flex: 0,
    zIndex: 5
  }
})
