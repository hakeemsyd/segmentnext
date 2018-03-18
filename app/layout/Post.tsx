import React, { Component } from 'react'
import { View } from 'react-native'
import { Card, Text } from 'react-native-elements'

interface Props {
    navigation?: any; // Question mark indicates prop is optional
}

interface State {
}

export class Post extends Component<Props, State> {

  constructor(props) {
      super(props);
  }

    render() {
      const { params } = this.props.navigation.state;
      const title = params ? params.title : null;
      const body = params ? params.body : null;

        return (
            <View style={{ paddingVertical: 20 }}>
                <Card title={title}>
                    <Text>
                      {body}
                    </Text>
                </Card>
            </View>
        )
    }
}
