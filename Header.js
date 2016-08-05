/**
 * Created by ThingSheng on 2016/8/4 0004.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    PixelRatio,
    Dimensions,
    Text,
    View,
    Image,
    ScrollView
} from 'react-native';

class Header extends  Component{
    render(){
        var centImage = require('./icons/heart.png');
        return (
            <View style={styles.title}>
                <Image source={centImage} style={{width:50,height:50}}/>
                <View style={styles.titleReact}>
                    <Text style={{fontSize:18,color:'#292f33'}}>textname</Text>
                    <Text style={{fontSize:14,color:'#8899a6'}}>@reactjs</Text>
                </View>
                <View style={styles.blueShit}>
                    <Text style={styles.blueText}>Following</Text>
                </View>
            </View>
        );
    }
}

const size = 60;
const styles = StyleSheet.create({
    renderButton: function() {
        return (
            <TouchableNativeFeedback
                onPress={this._onPressButton}
                background={TouchableNativeFeedback.SelectableBackground()}>
                <View style={{width: 150, height: 100, backgroundColor: 'red'}}>
                    <Text style={{margin: 30}}>Button</Text>
                </View>
            </TouchableNativeFeedback>
        );
    },
    scroll:{
        flex:1,
        backgroundColor:'white',
    },
    container: {
        flex: 1,
        borderRadius: 10,
        flexDirection:'column',
        backgroundColor: 'white',
        paddingTop:30,
        paddingLeft:20,
        paddingRight:20,
        paddingBottom:32,
    },
    loading:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        width:Dimensions.get('window').width ,
        height:200,
        backgroundColor:'#999999',
    },
    hello: {
        width:Dimensions.get('window').width ,
        height:Dimensions.get('window').height-200,
        flexDirection:'column',
        backgroundColor:'#F5FCFF',
    },
    item:{
        flexDirection:'row',
        width:Dimensions.get('window').width,
        height:(Dimensions.get('window').height-200)/3,
        backgroundColor:'#F5FCFF'
    },
    items:{
        height:(Dimensions.get('window').height-200)/3,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    test1:{
        width:size,
        height:size,
        borderRadius:size/2,
        backgroundColor:'red',
        position:'absolute',
        right:0,
        bottom:10,
        shadowColor:'black',
        shadowOffset:{width:2,height:2},
        shadowOpacity:0.5,
        shadowRadius:2,
        elevation:5,//安卓5.0的api
    },
    shadow:{
        shadowColor:'black',
        shadowOffset:{width:2,height:2},
        shadowOpacity:0.5,
        shadowRadius:2,
        elevation:5,//安卓5.0的api
    },
    main:{
        flex:1,
        backgroundColor:'white',
    },
    title:{
        height:60,
        flexDirection:'row',
        justifyContent: 'center',
    },
    titleText:{
        fontSize:13,
        backgroundColor:'white',
        marginTop:40,
    },
    centerView:{
        marginTop:17,
        backgroundColor:'white',
        flexDirection:'row',
        borderColor:'#e1e8ed',
        borderRadius:3,
        borderWidth:1,

    },
    titleReact:{
        flex:1,
        flexDirection:'column',
    },
    blueShit:{
        backgroundColor:'#1c9eee',
        borderColor:'#3b88c3',
        alignItems:'center',
        justifyContent: 'center',
        shadowColor:'black',
        shadowOffset:{width:2,height:2},
        shadowOpacity:0.5,
        shadowRadius:2,
        elevation:5,//安卓5.0的api
        borderRadius:10/2,

    },
    blueText:{
        fontSize:15,
        color:'white',
        fontWeight:'bold',
        marginLeft:7,
        marginRight:7,
    },
    centerTextView:{
        flexDirection:'column',
        flex:1,
        marginLeft:10,
    },
    centerText1:{
        fontSize:14,
        color:'black',
        fontWeight:'bold',
    },
    centerText2:{
        fontSize:14,
        color:'black',
    },
    centerText3:{
        fontSize:14,
        color:'#8899a6',
    },
    lastView:{
        flexDirection:'row',
        marginTop:35,
        backgroundColor:'white',


    },
    lastLeftView:{
        flexDirection:'row',
        borderBottomColor:'#e1e8ed',
        borderTopColor:'#e1e8ed',
        borderRightColor:'#e1e8ed',
        borderTopWidth:1,
        borderBottomWidth:1,
        borderRightWidth:1,
        backgroundColor:'white',
    },
    lastLeftViewItem:{
        flexDirection:'column',
        marginTop:19,
        marginBottom:17,
        backgroundColor:'white',
    },
    lastRightViewItem:{
        flexDirection:'column',
        marginTop:19,
        marginBottom:17,
        backgroundColor:'white',
        marginLeft:10,
        marginRight:10,
    },
    lastViewTextUp:{
        color:'#8899a6',
        fontSize:10,
    },
    lastViewTextBottom:{
        color:'#0084b4',
        fontSize:18,
    },
    lastRightView:{
        flexDirection:'row',
        borderBottomColor:'#e1e8ed',
        borderTopColor:'#e1e8ed',
        alignItems:'center',
        justifyContent:'center',
        borderTopWidth:1,
        borderBottomWidth:1,
        backgroundColor:'white',
        flex:1,
    },
    lastImage:{
        width:20,
        height:20,
        marginLeft:5,
    },
});

export default  Header;