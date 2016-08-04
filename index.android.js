/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    PixelRatio,
    Dimensions,
    Text,
    View,
    Image
} from 'react-native';

class MyProject1 extends Component {

  constructor(){
    super()
    this.state={
      height:100
    }
  }
  onLayout(evt){
    const {width,height} = evt.nativeEvent.layout;
    this.setState({height:width})
    console .log({
      ...this.state,
    })
  }
  render() {
    return (
        // <View style={styles.container}>
        //   <Text style={styles.welcome}>
        //     Welcome to React Native!
        //   </Text>
        //   <Text style={styles.instructions}>
        //     To get started, edit index.android.js
        //   </Text>
        //   <Text style={styles.instructions}>
        //     Double tap R on your keyboard to reload,{'\n'}
        //     Shake or press menu button for dev menu
        //   </Text>
        // </View>
        //   <View style={styles.container}>
        //     <View style={styles.welcome}>
        //       <Text style={styles.instructions}>
        //         window.width={Dimensions.get('window').width + '\n'}
        //         window.height={Dimensions.get('window').height + '\n'}
        //         pxielRatio={PixelRatio.get()}
        //       </Text>
        //     </View>
        //     <View style={styles.hello}>
        //     <View style={styles.item}>
        //       <View style={{height:(Dimensions.get('window').height-200)/3,width:Dimensions.get('window').width /3,backgroundColor:'#F5FCFF'}}></View>
        //       <View style={{height:(Dimensions.get('window').height-200)/3,width:Dimensions.get('window').width /3,backgroundColor:'#333333'}}></View>
        //       <View style={{height:(Dimensions.get('window').height-200)/3,width:Dimensions.get('window').width /3,backgroundColor:'#444444'}}></View>
        //     </View>
        //       <View style={styles.item}>
        //         <View style={{height:(Dimensions.get('window').height-200)/3,width:Dimensions.get('window').width /3,backgroundColor:'#333333'}}></View>
        //         <View style={{height:(Dimensions.get('window').height-200)/3,width:Dimensions.get('window').width /3,backgroundColor:'#444444'}}></View>
        //         <View style={{height:(Dimensions.get('window').height-200)/3,width:Dimensions.get('window').width /3,backgroundColor:'#555555'}}></View>
        //       </View>
        //       <View style={styles.item}>
        //         <View style={{height:(Dimensions.get('window').height-200)/3,width:Dimensions.get('window').width /3,backgroundColor:'#666666'}}></View>
        //         <View style={{height:(Dimensions.get('window').height-200)/3,width:Dimensions.get('window').width /3,backgroundColor:'#777777'}}></View>
        //         <View style={{height:(Dimensions.get('window').height-200)/3,width:Dimensions.get('window').width /3,backgroundColor:'#888888'}}></View>
        //       </View>
        //     </View>
        //   </View>
        // <View style={styles.container}onLayout={this.onLayout.bind(this)}>
        //   <View style={[styles.main,{ height:this.state.height }]}>
        //   </View>
        //   <View style={styles.test1}></View>
        // </View>
        <View style={{flex:1,backgroundColor:'white'}}>
          <View style={styles.container}>
            <View style={styles.title}>
              <Image source={require('./icons/heart.png')} style={{width:50,height:50}}/>
              <View style={styles.titleReact}>
                <Text style={{fontSize:18,color:'#292f33'}}>React</Text>
                <Text style={{fontSize:14,color:'#8899a6'}}>@reactjs</Text>
              </View>
              <View style={styles.blueShit}>
                <Text style={styles.blueText}>Following</Text>
              </View>
            </View>
            <Text style={styles.titleText}>
              We just shipped v15.3.0 with
              React.PureComponent & react-test-renderer!
              (docs coming soon)
            </Text>
            <Text style={[styles.titleText,{marginTop:20}]}>
              Full changelog:
            </Text>
            <View style={styles.centerView}>
              <Image source={require('./icons/centerimage.jpg')} style={{ width:80,height:80 }}/>
            </View>
          </View>
        </View>
    );
  }
}
const size = 60;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: 'white',
    position:'absolute',
    top:30,
    left:40,
    right:40,
    bottom:32,
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
    height:40,
    width:100,
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
    textAlign:'center',
  },
});

AppRegistry.registerComponent('MyProject1', () => MyProject1);
