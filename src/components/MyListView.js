import React from 'react';

import {
    Text,
    ListView,
    Image,
    View
} from 'react-native';

var ds = new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 });

class MyListView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: ds.cloneWithRows([]),
        };
    }

    componentDidMount() {
        var data = this._loadData();
        this.setState({
            dataSource: ds.cloneWithRows(data)
        });
        console.log(this.state.dataSource.getRowCount());
    }

    _loadData = () => {
        var arr = [];
        for (var i=0; i<500; i++){
            arr.push({id: i, img: 'https://omdbapi.com/src/poster.jpg'});
        }
        return arr;
    }

    _renderRow = (obj) => {
        if (obj){
            return (
                <View>
                    <Image style={{width: 200, height: 200}} source={{uri: obj.img}}></Image>
                    <Text>{obj.id}</Text>
                </View>
            );
        } else{
            return(<View><Text>Error</Text></View>);
        }
    }

    render() {
        return (
            <View>
            <ListView dataSource={this.state.dataSource} renderRow={this._renderRow} enableEmptySections={true}/>
            </View>
        );
    }
}

export default MyListView;