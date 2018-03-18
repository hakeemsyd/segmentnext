'use strict'
import React, { Component } from 'react'
import { ScrollView, View, ActivityIndicator} from 'react-native'
import { Card, Button } from 'react-native-elements'
// import { PostsListStore } from '../stores/PostsListStore';
import { observer } from 'mobx-react';

interface Props {
    navigation?: any; // Question mark indicates prop is optional
}

interface State {
  isLoading: boolean,
  posts: Array<{userId: string, id: number, title: string, body: string}>,
}

@observer
export class Home extends Component<Props, State> {
    constructor(props) {
        super(props);
        this.state ={ isLoading: true, posts: []}
    }

    componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          posts: responseJson,
        }, function(){

        });
      })
      .catch((error) =>{
        console.error(error);
      });
  }

    render() {
        if(this.state.isLoading){
            return(
              <View style={{flex: 1, padding: 20}}>
                <ActivityIndicator/>
              </View>
            )
        }

        return (
            <View style={{ flex: 1 }}>
                <ScrollView contentContainerStyle={{ paddingVertical: 20 }}>
                    {this.state.posts.map(({ title, /*image, url,*/ id, body }) => (
                        <Card title={title}  key={id}>
                            <Button
                                backgroundColor='#03A9F4'
                                title='Read More'
                                onPress={() =>  this.props.navigation.navigate('Post', {title: title, body: body})}
                            />
                        </Card>
                    ))}
                </ScrollView>
            </View>
        )
    }
}
