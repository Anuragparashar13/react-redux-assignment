import React, {Component} from 'react';
import {Platform, View, StatusBar, Text, Image, FlatList, TouchableOpacity, SafeAreaView, StyleSheet} from 'react-native';
import {strings} from '../Constant';
export default class songDetail extends Component {

    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(){
      return true
  }

    RenderTableComponent = ({item}) => {
        return (
          <View style={styles.itemListvw}>
            <Image style={{height: '90%',width:100}} resizeMode='contain' source={{
            uri: item.artworkUrl100,
          }} />
            <View style={{marginLeft: 10, overflow:'hidden'}}>
              <Text>{item.artistName}</Text>
              <Text numberOfLines={0} >{item.collectionCensoredName}</Text>
            </View>
          </View>
        );
      };

    render() {
        const item = this.props.route.params.items
        console.log('Anurag+++++++++++',item);
        return (
            <SafeAreaView>
            <View style={{width:'100%',margin:'2%',backgroundColor:'rgba(52, 52, 52, 0.1)',justifyContent:'center',alignItems:'center'}}>
            <Image style={{height: '40%',width:'90%'}} resizeMode='contain' source={{
            uri: item.artworkUrl100,
          }} />
           
              <Text>{item.artistName}</Text>
              <Text >{item.collectionCensoredName}</Text>
            
            </View>
        </SafeAreaView>
        )
    }
}


const styles = StyleSheet.create({
   itemListvw: {width:'90%',height:140, shadowColor: '#000000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.5,padding:8,margin:8,backgroundColor:'white',borderRadius:10,flexDirection:'row'}
})