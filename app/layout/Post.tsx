import React, { Component } from 'react'
import { View , ScrollView} from 'react-native'
import { Card } from 'react-native-elements'
import HTML from 'react-native-render-html';

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
                  <ScrollView>
                    <HTML html={body} />
                  </ScrollView>
                </Card>
            </View>
        )
    }
}
