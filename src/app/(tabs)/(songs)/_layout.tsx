import { defaultStyles } from '@/app/styles'
import { Stack } from 'expo-router'
import { View } from 'react-native'
import { StackScreenWithSearchBar } from '@/app/constants/layout'

const SongScreenLayout = () => {
	return (
		<View style={defaultStyles.container}>
			<Stack>
				<Stack.Screen
					name="index"
					options={{
						...StackScreenWithSearchBar,
						headerTitle: 'Songs',
					}}
				/>
			</Stack>
		</View>
	)
}

export default SongScreenLayout
