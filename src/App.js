import React from 'react';

import {
    Text,
    View
} from 'react-native';

import MyListView from './components/MyListView';


class App extends React.Component {
    render() {
        return (
            <View>
                <Text>Examples</Text>
                <MyListView></MyListView>
            </View>
        );
    }
}

export default App;

