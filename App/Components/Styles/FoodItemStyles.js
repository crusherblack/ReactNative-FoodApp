import {
    StyleSheet, Dimensions
} from 'react-native'
import {
    Fonts,
    Colors
} from '../../Themes/'

let height = Dimensions.get('window').height;
let width = Dimensions.get('window').width;

let scale = height / width;

export default StyleSheet.create({
    fooditemView: {
        width: '100%',
        height: height / 4,
        paddingLeft: '5%',
        paddingTop: '5%',
    },
    priceView: {
        backgroundColor: '#8DBA25',
        height: '20%',
        width: '30%',
        borderRadius: 10,
        justifyContent: 'center',
        zIndex: 5

    },
    priceText: {
        color: 'white',
        fontSize: 22,
        textAlign: 'center',
        fontWeight: '400'
    },
    foodImageView: {
        width: '60%',
        height: '70%',
        position: 'absolute',
        paddingTop: '15%',
        paddingLeft: '10%'

    },
    foodImage: {
        width: '100%',
        height: '100%',
        borderRadius: 40
    },
    foodDescriptionView: {
        height: '60%',
        width: '60%',
        position: 'absolute',
        zIndex: -1,
        marginLeft: '35%',
        marginTop: '5%',
        borderRadius: 40,
        backgroundColor: '#e6e6e6'
    },
    foodTextView: {
        position: 'absolute',
        width: '50%',
        height: '100%',
        zIndex: 1,
        marginLeft: '40%'
    },
    foodTitle: {
        textAlign: 'center',
        fontWeight: 'bold',
        paddingTop: 5,
        fontSize: 18
    },
    foodDescription: {
        textAlign: 'center',
        fontWeight: '400',
        paddingTop: 5,
        fontSize: scale * 6
    }

})
