import { TracksList } from '@/app/components/TracksList'
import { screenPadding } from '@/app/constants/tokens'
import { defaultStyles } from '@/app/styles'

import { View, Text, ScrollView } from 'react-native'

const SongsScreen = () => {
	return (
		<View style={defaultStyles.container}>
			<ScrollView
				contentInsetAdjustmentBehavior="automatic"
				style={{ paddingHorizontal: screenPadding.horizontal }}
			>
				<TracksList scrollEnabled={false} />
			</ScrollView>
		</View>
	)
}

export default SongsScreen
