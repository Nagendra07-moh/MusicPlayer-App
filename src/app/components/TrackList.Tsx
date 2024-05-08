import React from 'react'
import { FlatList } from 'react-native'
import library from '../../../assets/data/library.json'
import { TrackListItem } from './TrackListitem'

export const TrackList = () => {
	return (
		<FlatList
			data={library}
			renderItem={({ item: track }) => (
				<TrackListItem
					track={{
						...track,
						image: track.artwork,
					}}
				/>
			)}
		/>
	)
}
