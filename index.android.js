/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Header from  './Header';
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
;
var REQUEST_URL = 'https://cdn.rawgit.com/lingoer/CPICWorkshopDay2/master/twitter.json';

class MyProject1 extends Component {
  // onLayout(evt){
  //   const {width,height} = evt.nativeEvent.layout;
  //   this.setState({height:width})
  //     console .log({
  //         ...this.state,
  //     })
  //
  // }
  constructor(props) {
    super(props);
    this.state = {
      dataSource: null,
      loaded: false,
    };
  }
  componentDidMount(){
    this.fetchData();
  }

  renderLoadingView()
  {
    return (<View style={styles.loading} >
          <Text>Loading movies......</Text>
        </View>

    );
  }

  fetchData() {
    fetch(REQUEST_URL)
        .then((response) => response.json())
        .then((responseData) => {
          this.setState({
            dataSource: responseData,
            loaded: true,
          });
        })
        .done();
  }
  render() {
    var centImage = require('./icons/heart.png');
    console .log(this.state.dataSource);
    // console .log({textname});
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }
    var datas = this.state.dataSource;
    return renderPage(datas);
    // return (
    //   // <View style={styles.container}onLayout={this.onLayout.bind(this)}>
    //   //   <View style={[styles.main,{ height:this.state.height }]}>
    //   //   </View>
    //   //   <View style={styles.test1}></View>
    //   // </View>
    //
    // );
  }
}

function renderButton() {
  return (
      <TouchableNativeFeedback
          onPress={this._onPressButton}
          background={TouchableNativeFeedback.SelectableBackground()}>
        <View style={{width: 150, height: 100, backgroundColor: 'red'}}>
          <Text style={{margin: 30}}>Button</Text>
        </View>
      </TouchableNativeFeedback>
  );
}
function renderPage(datas) {
  return(
      <ScrollView style={{flex:1,backgroundColor:'black'}}>
        <View style={styles.container}>
          <Header/>
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
            <View style={styles.centerTextView}>
              {/*<Text style={styles.centerText1}>facebook/react</Text>*/}
              <Text style={styles.centerText1}>{datas[0].user.name}</Text>
              <Text style={styles.centerText2}>
                react - A declearative,etticient,and flexible JavaScript library for
                building user interface
              </Text>
              <Text style={styles.centerText3}>
                github.com
              </Text>
            </View>
          </View>
          <View style={styles.lastView}>
            <View style={styles.lastLeftView}>
              <View style={styles.lastLeftViewItem}>
                <Text style={styles.lastViewTextUp}>RETWEETS</Text>
                <Text style={styles.lastViewTextBottom}>357</Text>
              </View>
              <View style={styles.lastRightViewItem}>
                <Text style={styles.lastViewTextUp}>LIKES</Text>
                <Text style={styles.lastViewTextBottom}>461</Text>
              </View>
            </View>
            <View style={styles.lastRightView}>
              <Image source={require('./icons/centerimage.jpg')} style={styles.lastImage}/>
              <Image source={require('./icons/centerimage.jpg')} style={styles.lastImage}/>
              <Image source={require('./icons/centerimage.jpg')} style={styles.lastImage}/>
              <Image source={require('./icons/centerimage.jpg')} style={styles.lastImage}/>
              <Image source={require('./icons/centerimage.jpg')} style={styles.lastImage}/>
              <Image source={require('./icons/centerimage.jpg')} style={styles.lastImage}/>
              <Image source={require('./icons/centerimage.jpg')} style={styles.lastImage}/>
              <Image source={require('./icons/centerimage.jpg')} style={styles.lastImage}/>
              <Image source={require('./icons/centerimage.jpg')} style={styles.lastImage}/>
            </View>
          </View>
        </View>
      </ScrollView>
  );
}

const size = 60;
const styles = StyleSheet.create({

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

AppRegistry.registerComponent('MyProject1', () => MyProject1);
