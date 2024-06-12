import React from 'react'
import { FlatList, FlatListProps, View } from 'react-native'
import library from '../../../assets/data/library.json'
import { TrackListItem } from './TrackListitem'
import { utilsStyles } from '../styles'

export type TrackListProps = Partial<FlatListProps<unknown>> & {
	tracks: any[]
}

const itemDivider = () => (
	<View style={{ ...utilsStyles.itemSeparator, marginVertical: 9, marginLeft: 60 }} />
)

export const TracksList = ({ tracks, ...flatListProps }: TrackListProps) => {
	return (
		<FlatList
			data={tracks}
			contentContainerStyle={{ paddingTop: 10, paddingBottom: 128 }}
			ListFooterComponent={itemDivider}
			ItemSeparatorComponent={itemDivider}
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
