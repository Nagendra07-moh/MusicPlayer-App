import { defaultStyles } from '@/app/styles'
import { Stack } from 'expo-router'
import { View } from 'react-native'

const PlayListScreenLayout = () => {
	return (
		<View style={defaultStyles.container}>
			<Stack>
				<Stack.Screen name="index" options={{ headerTitle: 'Favorites' }} />
			</Stack>
		</View>
	)
}

export default PlayListScreenLayout
