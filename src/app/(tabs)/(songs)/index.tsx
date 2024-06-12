import { TracksList } from '@/app/components/TracksList'
import { screenPadding } from '@/app/constants/tokens'
import { trackTitleFilter } from '@/app/helpers/filter'
import { useNavigationSearch } from '@/app/hooks/useNavigationSarch'
import { defaultStyles } from '@/app/styles'
import library from '@/assets/data/library.json'
import { useMemo } from 'react'

import { View, Text, ScrollView } from 'react-native'

const SongsScreen = () => {
	const search = useNavigationSearch({
		searchBarOptions: {
			placeholder: 'Search for a song',
		},
	})

	const filteredTracks = useMemo(() => {
		if (!search) {
			return library
		}
		console.log(search)
		return library.filter(trackTitleFilter(search))
	}, [search])
	return (
		<View style={defaultStyles.container}>
			<ScrollView
				contentInsetAdjustmentBehavior="automatic"
				style={{ paddingHorizontal: screenPadding.horizontal }}
			>
				<TracksList tracks={filteredTracks} scrollEnabled={false} />
			</ScrollView>
		</View>
	)
}

export default SongsScreen
