import { SearchBarProps } from 'react-native-screens'
import { colors } from '../constants/tokens'
import { useLayoutEffect, useState } from 'react'
import { useNavigation } from 'expo-router'

const defaultSearchOptions: SearchBarProps = {
	tintColor: colors.primary,
	hideWhenScrolling: false,
}

export const useNavigationSearch = ({
	searchBarOptions,
}: {
	searchBarOptions?: SearchBarProps
}) => {
	const [search, setSearch] = useState('')
	const navigation = useNavigation()

    const handleOnChangeText = () =>{
        
    }

	useLayoutEffect(() => {
		navigation.setOptions({
			headerSearchBarOptions: {
				...defaultSearchOptions,
				...searchBarOptions,
			},
		})
	}, [navigation])
}
