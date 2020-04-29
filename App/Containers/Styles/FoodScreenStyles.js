import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
    ...ApplicationStyles.screen,
    titleTextContent: {
        marginTop: 18
    },
    titleText: {
        fontSize: 24,
        color: 'black',
        textAlign: 'center',
        fontWeight: '600'
    },

})
