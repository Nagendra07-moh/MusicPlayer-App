import { defaultStyles } from '@/app/styles'
import { Stack } from 'expo-router'
import { View } from 'react-native'
import { StackScreenWithSearchBar } from '@/app/constants/layout'

const ArtistsScreenLayout = () => {
	return (
		<View style={defaultStyles.container}>
			<Stack>
				<Stack.Screen
					name="index"
					options={{
						...StackScreenWithSearchBar,
						headerTitle: 'Artists',
					}}
				/>
			</Stack>
		</View>
	)
}

export default ArtistsScreenLayout
