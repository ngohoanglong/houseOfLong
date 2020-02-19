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
export const SearchFilterContext = React.createContext(
	{
		counstries: [],
		dates: [],
		locations: []
	}
);
export const {
	Consumer: SearchFilterConsumer,
	Provider: SearchFilterProvider
} = SearchFilterContext;
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
			cookedSourceRef.current =
				source.data;
			const search = searchRef.current;
			search.addIndex('country');
			search.addIndex('date');
			search.addIndex('type');
			search.addIndex('title');
			search.addIndex('location');
			search.addDocuments(
				cookedSourceRef.current
			);
			console.log(
				search.search('country')
			);
			window.app = {
				source,
				search: search.search
			};
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
			{ready && (
				<SearchFilterProvider
					value={{
						counstries: searchRef.current.search(
							'country'
						),
						dates: searchRef.current.search(
							'date'
						),
						locations: searchRef.current.search(
							'location'
						)
					}}>
					{children}
				</SearchFilterProvider>
			)}
		</SearchContextProvider>
	);
};
export default Search;
