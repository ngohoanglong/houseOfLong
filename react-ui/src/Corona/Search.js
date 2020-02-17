import * as JsSearch from 'js-search';
import React, {
	useCallback,
	useContext,
	useEffect,
	useRef,
	useState
} from 'react';
import { SourceContext } from './Sources';

export const SearchContext = React.createContext(
	{
		getSearchData: value => []
	}
);
export const {
	Consumer: SearchContextConsumer,
	Provider: SearchContextProvider
} = SearchContext;
const Search = ({ children }) => {
	const { source } = useContext(
		SourceContext
	);
	const [ready, setready] = useState();
	const cookedSourceRef = useRef();
	const searchRef = useRef(
		new JsSearch.Search('id')
	);

	useEffect(() => {
		if (source) {
			cookedSourceRef.current = source.data.flatMap(
				item => [
					{
						id: `${item.title}`,
						title: item.title,
						type: 'country'
					},
					{
						...item,
						id: `${item.title}_${item.gsx$location}`,
						title: `${item.title} (${item.gsx$location})`,
						type: 'location'
					},
					...item.data.map(
						dayRecord => ({
							...item,
							...dayRecord,
							id: `${dayRecord.type}_${item.title}_${item.gsx$location}_${dayRecord.date}`,
							title: `${dayRecord.type}_${item.title}_${item.gsx$location}_${dayRecord.date}`
						})
					)
				]
			);
			const search = searchRef.current;
			search.addIndex('country');
			search.addIndex('gsx$country');
			search.addIndex('date');
			search.addIndex('type');
			search.addIndex('gsx$location');
			search.addDocuments(
				cookedSourceRef.current
			);
			setready(true);
		}
	}, [source]);
	const handleSearch = useCallback(
		value =>
			searchRef.current.search(value),
		[source]
	);
	return (
		<SearchContextProvider
			value={handleSearch}>
			{ready && children}
		</SearchContextProvider>
	);
};
export default Search;
