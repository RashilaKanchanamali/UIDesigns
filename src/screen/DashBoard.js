import React, { Component } from 'react';
import { View, Image, StyleSheet, Text, Alert, ImageBackground} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import TimeSheet from './TimeSheet';

class DashBoard extends Component {

  static navigationOptions={ 
    // header:null,
    tabBarVisible:true ,
    title: 'DashBoard',
    headerStyle: {
      // backgroundColor: '#7fae94',
      backgroundColor: '#A9CCE3'
    }
}

constructor(props){
      
  super(props);
  this.navigate=this.props.navigation.navigate;
  this.params=this.props.navigation.state.params,

  this.state = {
    // Token: this.props.navigation.state.params.token,
    user: []
  }
}

componentWillMount() {
  this.fetchData();
}

fetchData = async () => {

    fetch ('https://onejit.jithpl.com/integration/login/getLoginUser', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + this.params.TokenDashBoard,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          user: responseJson
        })
        // Alert.alert(JSON.stringify(responseJson.userName));
      })
      
}

  render() {
    const { navigate } = this.props.navigation;
    var TokenTimeSheet= this.params.TokenDashBoard;
    return ( 
      
      <View style={styles.container}>
        {/* <ImageBackground source = {require('../UI/components/Image/background.png')} style={styles.backgroundImage}> */}
        <View>
          <Text style = {styles.textStyle}>
            Hi {this.state.user.firstName}...
            </Text>
        </View>

        <View style = {styles.pageView}>
            <View style = {styles.rowView}>
                <View style = {styles.imageView}>
                    <TouchableOpacity onPress= { () => navigate('TimeSheet', {TokenTimeSheet}) }>
                    <Image 
                        style={styles.ImageStyle}
                        source={require('../UI/components/Image/timeEntry.png')}
                    />
                    <Text style = {styles.ImageTextStyle}>
                        Time Entry
                    </Text>
                    </TouchableOpacity>
                </View>

                <View style = {styles.imageView}>
                    <TouchableOpacity onPress= { () => navigate('PushNotification', {TokenTimeSheet}) }>
                    <Image 
                        style={styles.ImageStyle}
                        source={require('../UI/components/Image/pettyCash.png')}
                    />
                    <Text style = {styles.ImageTextStyle}>
                        Petty Cash
                    </Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style = {styles.rowView}>
                <View style = {styles.imageView}>
                    <TouchableOpacity>
                    <Image 
                        style={styles.ImageStyle}
                        source={require('../UI/components/Image/medicalClaim.png')}
                    />
                    <Text style = {styles.ImageTextStyle}>
                        Medical Claim
                    </Text>
                    </TouchableOpacity>
                </View>

                <View style = {styles.imageView}>
                    <TouchableOpacity>
                    <Image 
                        style={styles.ImageStyle}
                        source={require('../UI/components/Image/salseManager.png')}
                    />
                    <Text style = {styles.ImageTextStyle}>
                        Sales Manager 
                    </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        {/* </ImageBackground> */}
      </View>

    
    
      
      
    );
  }
}
export default DashBoard;

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#dcdcdc'
  },
  textStyle: {
    paddingTop: 10,
    // paddingBottom: 20,
    alignSelf: 'flex-end',
    paddingRight: 20,
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold'
  },
  pageView: {
    flex: 1,
    // backgroundColor: '#dcdcdc',
    flexDirection: 'column',
    paddingTop: 50,
    // borderWidth: 4,
    // borderColor: '#00ffff',
    borderRadius: 6
},
rowView: {
    flexDirection: 'row',
    // borderWidth: 1,
    // borderColor: 'pink'
},
ImageStyle: {
    // borderWidth: 1,
    // borderColor: 'yellow',
    // height: 180,
    // width: 180,
},
imageView: {
    flex: 3,
    borderWidth: 2,
    borderColor: '#00ffff',
    // height: '70 %' ,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
    paddingTop: 20,
    // backgroundColor: '#ffffff',
    borderRadius: 6
},
ImageTextStyle: {
    // borderWidth: 1,
    // borderColor: 'green',
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black'
},
// backgroundImage: {
//   flex: 1,
//   resizeMode: 'cover', // or 'stretch'
// }
})
