'use strict'
import React, { Component } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { Card, Button } from 'react-native-elements'
import { PostsListStore } from '../stores/PostsListStore';
import { observer } from 'mobx-react';

interface Props {
    navigation?: any; // Question mark indicates prop is optional
}

interface State {
}

@observer
export class Home extends Component<Props, State> {
    private postsStore: PostsListStore;

    constructor(props) {
        super(props);
        //console.log(props);
        this.postsStore = new PostsListStore();
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView contentContainerStyle={{ paddingVertical: 20 }}>
                    {this.postsStore.posts.map(({ title, image, url, id, body }) => (
                        <Card title={`CARD ${id}`} key={id}>
                            <Text style={{ marginBottom: 10 }}>
                                Photo by {title}.
                            </Text>
                            <Button
                                backgroundColor='#03A9F4'
                                title='VIEW NOW'
                                onPress={() =>  this.props.navigation.navigate('Post', {title: title, body: body})}
                            />
                        </Card>
                    ))}
                </ScrollView>
            </View>
        )
    }
}
