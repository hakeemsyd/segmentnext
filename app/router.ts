'use strict'
// import React from 'react';
// import { Platform, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';
// import { FontAwesome } from 'react-native-vector-icons';

import { Home } from './layout/Home';
import { Post } from './layout/Post';
// import { NavigationActions } from 'react-navigation';
// import { PostsListStore } from './stores/PostsListStore';

export class Router {
	private constructor() {
	}

	static Main = StackNavigator({
		Home: {
			screen: Home,
			navigationOptions: {
					title: 'Segmentnext'
			}
		},
		Post: {
			screen: Post,
		}
	});

	/*static SignedOut = StackNavigator({
		UserHome: {
			screen: Router.SignedIn
		}
	});*/
};
