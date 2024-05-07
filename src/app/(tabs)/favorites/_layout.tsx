import { defaultStyles } from '@/app/styles'
import { Stack } from 'expo-router'
import { View } from 'react-native'
import { StackScreenWithSearchBar } from '@/app/constants/layout'

const PlayListScreenLayout = () => {
	return (
		<View style={defaultStyles.container}>
			<Stack>
				<Stack.Screen
					name="index"
					options={{ ...StackScreenWithSearchBar, headerTitle: 'Favorites' }}
				/>
			</Stack>
		</View>
	)
}

export default PlayListScreenLayout
