import { defaultStyles } from '@/app/styles'
import { Stack } from 'expo-router'
import { View } from 'react-native'
import { StackScreenWithSearchBar } from '@/app/constants/layout'

const PlaylistsScreenLayout = () => {
	return (
		<View style={defaultStyles.container}>
			<Stack>
				<Stack.Screen
					name="index"
					options={{ ...StackScreenWithSearchBar, headerTitle: 'Playlists' }}
				/>
			</Stack>
		</View>
	)
}

export default PlaylistsScreenLayout
