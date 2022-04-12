import React from 'react'
import { Image, Text, TouchableOpacity } from 'react-native'
import { AnimatedTabBarNavigator, DotSize, TabButtonLayout, TabElementDisplayOptions } from 'react-native-animated-nav-tab-bar'
import Icon from 'react-native-vector-icons/Feather'
import styled from 'styled-components/native'
import PrincipalClient from '../screens/PrincipalClient'
import Principal from '../screens/Principal'


const Tabs = AnimatedTabBarNavigator()

const Screen = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
	background-color: #f2f2f2;
`

const Logo = () => (
	<Image
		source={require('./logo.png')}
		resizeMode={'cover'}
		style={{ width: 150, height: 150 }}
	/>
)

const TabBarIcon = (props: any) => {
	return (
		<Icon
			name={props.name}
			size={props.size ? props.size : 24}
			color={props.tintColor}
		/>
	)
}

const Home = (props: any) => (
	<Screen>
		<Logo />
		<Text>Home</Text>
		<TouchableOpacity onPress={() => props.navigation.navigate("Discover")}>
			<Text>Go to Discover</Text>
		</TouchableOpacity>
	</Screen>
)

const Discover = (props: any) => (
	<Screen>
		<Logo />
		<Text>Discover</Text>
		<TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
			<Text>Go to Home</Text>
		</TouchableOpacity>
	</Screen>
)

const Images = () => (
	<Screen>
		<Logo />
		<Text>Images</Text>
	</Screen>
)

const Profile = () => (
	<Screen>
		<Logo />
		<Text>Profile</Text>
	</Screen>
)

const TabNavigate = () => (
	<Tabs.Navigator initialRouteName="Home"
		tabBarOptions={{
			activeTintColor: "#000",
			inactiveTintColor: "#407879",
			activeBackgroundColor: "#46D0D9",
			labelStyle: {
				fontSize: 15,
				fontWeight: "bold",
			},
		}}
		appearance={{
			shadow: true,
			floating: true,
			whenActiveShow: TabElementDisplayOptions.BOTH,
			dotSize: DotSize.MEDIUM,
			dotCornerRadius: 20,
			tabButtonLayout: TabButtonLayout.HORIZONTAL,
		}}
	>
		<Tabs.Screen
			name="Home"
			component={PrincipalClient}
			options={{
				tabBarIcon: ({ focused, color }: any) => (
					<TabBarIcon
						focused={focused}
						tintColor={color}
						name="home"
					/>
				),

			}}
		/>
		<Tabs.Screen
			name="Discover"
			component={Discover}
			options={{
				tabBarIcon: ({ focused, color }: any) => (
					<TabBarIcon
						focused={focused}
						tintColor={color}
						name="search"
					/>
				),
			}}
		/>
		<Tabs.Screen
			name="Images"
			component={Images}
			options={{
				tabBarIcon: ({ focused, color }: any) => (
					<TabBarIcon
						focused={focused}
						tintColor={color}
						name="image"
					/>
				),
			}}
		/>
		<Tabs.Screen
			name="Profile"
			component={Profile}
			options={{
				tabBarIcon: ({ focused, color }: any) => (
					<TabBarIcon
						focused={focused}
						tintColor={color}
						name="user"
					/>
				),
			}}
		/>
	</Tabs.Navigator>
)

export default TabNavigate