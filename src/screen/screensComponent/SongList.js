import React, {Component} from 'react';
import {Platform, View, StatusBar, Text, Image, FlatList, TouchableOpacity, SafeAreaView, StyleSheet} from 'react-native';
import {strings} from '../Constant';
export default class songList extends Component {

    constructor(props) {
        super(props);
       this.props.actions.reduxGetsongList()
    }

    shouldComponentUpdate(){
      return true
  }

    RenderTableComponent = ({item}) => {
        return (
          <TouchableOpacity onPress = {()=>{this.props.navigation.navigate(strings.songDetail,{items: item})}}>
          <View style={styles.itemListvw}>
            <Image style={{height: '90%',width:100}} resizeMode='contain' source={{
            uri: item.artworkUrl100,
          }} />
            <View style={{marginLeft: 10, overflow:'hidden'}}>
              <Text>{item.artistName}</Text>
              <Text numberOfLines={0} >{item.collectionCensoredName}</Text>
            </View>
          </View>
          </TouchableOpacity>
        );
      };

    render() {
      console.log('Anurag+++++++',this.props.songs);
        return (
            <SafeAreaView>
            <View style={{width:'100%',height:'100%',margin:'2%',backgroundColor:'rgba(52, 52, 52, 0.1)'}}>
            <Text style={{fontSize:20,fontWeight:'700'}}>song</Text>
             <FlatList
             style={{margin:10,}}
              data={this.props.songs.songs.payload != undefined ? this.props.songs.songs.payload.results : []}
              keyExtractor={(item, index) => index.toString()}
              renderItem={this.RenderTableComponent}
              
        />
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