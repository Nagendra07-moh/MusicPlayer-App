import React from 'react'
import { FlatList, FlatListProps, View } from 'react-native'
import library from '../../../assets/data/library.json'
import { TrackListItem } from './TrackListitem'
import { utilsStyles } from '../styles'

export type TrackListProps = Partial<FlatListProps<unknown>>

const itemDivider = () => (
	<View style={{ ...utilsStyles.itemSeparator, marginVertical: 9, marginLeft: 60 }} />
)

export const TracksList = ({ ...flatListProps }: TrackListProps) => {
	return (
		<FlatList
			data={library}
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
