import React, {
	useCallback,
	useContext,
	useEffect,
	useRef,
	useState
} from 'react';
import {
	Sparklines,
	SparklinesLine
} from 'react-sparklines';
import EnIcon from './EnIcon';
import Feeds, {
	FeedConsumer
} from './Feeds';
import MapCorona from './Map/MapCorona';
import Search, {
	SearchContext,
	SearchContextConsumer,
	SearchFilterContext
} from './Search';
import Sources, {
	SourceContext
} from './Sources';
import './styles.scss';
import VnIcon from './VnIcon';
const DebounceRenderer = ({
	children
}) => {
	const [
		rendered,
		setRendered
	] = useState(null);
	useEffect(() => {
		const timeout = setTimeout(
			() => setRendered(children()),
			300
		);
		return () => clearTimeout(timeout);
	}, [children]);
	return rendered;
};
const VietNam = () => (
	<SearchContextConsumer>
		{search => {
			const searchData = search(
				'vietnam 14-02-2020'
			);
			console.log(searchData);
			const cookedData =
				searchData &&
				Object.values(
					searchData.reduce(
						(result, item) => {
							let entry =
								result[
									item['location']
								];
							if (!entry) {
								result[
									item['location']
								] = {
									title:
										item['location']
								};
								entry =
									result[
										item['location']
									];
							}
							if (
								item.type ===
								'confirmedcases'
							) {
								entry[
									'confirmedcases'
								] = item.value;
							}
							if (
								item.type === 'deaths'
							) {
								entry['deaths'] =
									item.value;
							}
							return result;
						},
						{}
					)
				);
			return (
				<div className=" Block ">
					<div className="BlockTitle">
						Tỉnh thành ở Việt Nam
					</div>
					{cookedData.map((item, i) => {
						const {
							title,
							confirmedcases,
							deaths
						} = item;
						return (
							<div
								key={i}
								className="BlockRow ">
								<div className="border-b border-gray-700  hover:border-gray-500 hover:text-white font-bold py-2">
									{title}{' '}
									<span className="bg-white px-2 text-white rounded bg-red-600  ml-2">
										{confirmedcases}
									</span>{' '}
									{!!Number(deaths) >
										0 && (
										<span className="bg-white px-2 text-white rounded bg-gray-500  ml-2">
											{deaths}
										</span>
									)}
								</div>
							</div>
						);
					})}
					<div className="BlockRow py-2 text-xs text-right whitespace-pre ">
						{cookedData.length} tỉnh
						thành
					</div>
				</div>
			);
		}}
	</SearchContextConsumer>
);
const World = () => (
	<SearchContextConsumer>
		{search => {
			const searchData = search(
				'14-02-2020'
			);
			const cookedData =
				searchData &&
				Object.values(
					searchData.reduce(
						(result, item) => {
							let entry =
								result[item['country']];
							if (!entry) {
								result[
									item['country']
								] = {
									title:
										item['country'],
									confirmedcases: 0,
									deaths: 0
								};
								entry =
									result[
										item['country']
									];
							}
							if (
								item.type ===
								'confirmedcases'
							) {
								entry[
									'confirmedcases'
								] =
									entry[
										'confirmedcases'
									] +
									Number(item.value);
							}
							if (
								item.type === 'deaths'
							) {
								entry['deaths'] =
									entry['deaths'] +
									Number(item.value);
							}
							return result;
						},
						{}
					)
				).sort(
					(p, lp) =>
						-Number(
							p['confirmedcases']
						) +
						Number(lp['confirmedcases'])
				);
			return (
				<div className=" Block">
					<div className="BlockTitle">
						Số ca nhiễm theo quốc gia
					</div>

					{cookedData.map((item, i) => {
						const {
							title,
							confirmedcases,
							deaths
						} = item;
						return (
							<div
								key={i}
								className="BlockRow ">
								<div className="border-b border-gray-700  hover:border-gray-500 hover:text-white font-bold py-2">
									{title}{' '}
									<span className="bg-white px-2 text-white rounded bg-red-600  ml-2">
										{confirmedcases}
									</span>{' '}
									{!!Number(deaths) >
										0 && (
										<span className="bg-white px-2 text-white rounded bg-gray-500  ml-2">
											{deaths}
										</span>
									)}
								</div>
							</div>
						);
					})}
					<div className="BlockRow py-2 text-right">
						{cookedData.length} nước
					</div>
				</div>
			);
		}}
	</SearchContextConsumer>
);
const Limit = ({
	max = 10,
	children
}) => {
	const [show, setShow] = useState(
		false
	);
	useEffect(() => {
		setShow(false);
	}, [children]);
	if (!children) return null;
	return (
		<>
			{children.map(
				(e, i) => (i < max || show) && e
			)}
			<div
				className="flex justify-center"
				onClick={() => setShow(!show)}>
				{children.length - max > 0 && (
					<div className="px-2 py-1 mt-2  border rounded-full border-gray-300 hover:boxshadow">
						{show
							? 'hide'
							: `+${children.length -
									max} results`}
					</div>
				)}
			</div>
		</>
	);
};
const FeatureSearch = () => {
	const [
		keyword,
		setkeyword
	] = useState();
	return (
		<div className="w-full lg:w-64 Block">
			<input
				placeholder="search..."
				className="BlockTitle bg-white z-10 w-full px-3 py-1"
				onChange={e => {
					setkeyword(e.target.value);
				}}
			/>
			<div className="mt-2">
				<div className="BlockRow ">
					<small className="font-bold leading-loose bg-white px-2 text-white rounded bg-red-600 ">
						nhiễm
					</small>
					<small className="font-bold leading-loose  ml-4 bg-white px-2 text-white rounded bg-gray-500  ml-2">
						dẹo
					</small>
					<small className="font-bold leading-loose  ml-4 bg-white px-2 text-white rounded bg-green-500  ml-2">
						come back
					</small>
				</div>
				<DebounceRenderer>
					{() => (
						<SearchContextConsumer>
							{search => {
								const searchData = search(
									keyword
								);
								return (
									<Limit>
										{searchData &&
											searchData.map(
												(entry, i) => (
													<div
														key={
															entry.id
														}
														style={{
															animationDelay: `${0 +
																i *
																	30}ms`
														}}
														className="BlockRow fadeInRight animated faster">
														<div className="border-b border-gray-700  hover:border-gray-500 hover:text-white font-bold py-2">
															{
																entry[
																	'title'
																]
															}
														</div>
													</div>
												)
											)}
									</Limit>
								);
							}}
						</SearchContextConsumer>
					)}
				</DebounceRenderer>
			</div>
		</div>
	);
};
const FeatureMap = () => {
	const search = useContext(
		SearchContext
	);
	const { dates } = useContext(
		SearchFilterContext
	);
	const [
		selectedDate,
		setSelectedDate
	] = useState(
		dates[dates.length - 1].id
	);
	const searchData = search(
		selectedDate
	);
	const onChange = e =>
		setSelectedDate(
			dates[e.target.value - 1].id
		);
	const cookedData =
		searchData &&
		Object.values(
			searchData.reduce(
				(result, item) => {
					let entry =
						result[item['country']];
					if (!entry) {
						result[item['country']] = {
							title: item['country'],
							confirmedcases: 0,
							deaths: 0
						};
						entry =
							result[item['country']];
					}
					if (
						item.type ===
						'confirmedcases'
					) {
						entry['confirmedcases'] =
							entry['confirmedcases'] +
							Number(item.value);
					}
					if (item.type === 'deaths') {
						entry['deaths'] =
							entry['deaths'] +
							Number(item.value);
					}
					return result;
				},
				{}
			)
		)
			.filter(
				item => item['confirmedcases']
			)
			.sort(
				(p, lp) =>
					-Number(p['confirmedcases']) +
					Number(lp['confirmedcases'])
			);
	return (
		<div
			style={{
				height: '100%',
				width: '100%'
			}}>
			<DebounceRenderer>
				{() => (
					<Cache cacheId={selectedDate}>
						<MapCorona
							// key={selectedDate}
							data={cookedData}
						/>
					</Cache>
				)}
			</DebounceRenderer>

			<div
				className="absolute top-0 right-0 p-2 w-40 bg-black opacity-75"
				key={'year'}>
				<label>{selectedDate}</label>
				<input
					className="w-full"
					type="range"
					min={1}
					onChange={onChange}
					max={dates.length}
					step={1}
				/>
			</div>
		</div>
	);
};
export function Corona() {
	const [ready, setReady] = useState();
	const handleReady = useCallback(() => {
		setReady(true);
	}, []);
	return (
		<>
			<div
				className="Corona lg:text-xs"
				ref={handleReady}>
				<div className="w-full flex flex-wrap">
					<SourceContext.Consumer>
						{value => {
							console.log(
								'value',
								value
							);
							const { source } = value;
							return (
								<div className=" Block w-full lg:w-2/3 flex flex items-center flex-wrap ">
									<div className="mr-4">
										<div className="text-3xl font-bold flex flex-wrap">
											Coronavirus{' '}
											<span>
												(2019-nCoV)
											</span>
										</div>
										<div className="text-sm">
											Liên hệ:{' '}
											<span className="text-blue-600">
												no.noo.nooo.yes@gmail.com
											</span>
										</div>
									</div>
									<div className=" whitespace-pre text-sm flex-1 mt-2">
										{`Cập nhật lần cuối lúc: ${source &&
											new Date(
												source.updated
											).toLocaleDateString()}.`}
										<div>{`Nguồn: WHO, CDC, NHC, DXY & Bộ Y Tế Việt Nam.`}</div>
										<div className="mt-2 flex items-center">
											<button
												onClick={() =>
													alert(
														'Nhấn CTRL + D để lưu trang.'
													)
												}
												className="px-2  border border-gray-500 focus:border-white hover:border-white hover:text-white font-bold whitespace-no-wrap leading-loose">
												🔖 Lưu trang
											</button>
											<a
												target="_blank"
												href={`https://www.facebook.com/sharer/sharer.php?kid_directed_site=0&sdk=joey&u=${window.location}&display=popup&ref=plugin&src=share_button`}
												className="px-2 ml-2 flex items-center border border-gray-500 focus:border-white hover:border-white hover:text-white font-bold whitespace-no-wrap leading-loose">
												<img
													className="block pr-1 rounded-full overflow-hidden"
													alt=""
													src="https://www.google.com/s2/favicons?domain=facebook.com"
												/>{' '}
												Chia se
											</a>
											<div className="flex justify-end flex-1">
												<div className="text-4xl flex">
													<div className="border opacity-100 border-transparent focus:border-white hover:border-white hover:text-white font-bold whitespace-no-wrap leading-loose">
														<VnIcon />
													</div>
													<div className="border opacity-50 hover:opacity-100 border-transparent focus:border-white hover:border-white hover:text-white font-bold whitespace-no-wrap leading-loose">
														<EnIcon />
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							);
						}}
					</SourceContext.Consumer>

					<SearchContextConsumer>
						{search => {
							const searchData = search(
								'confirmedcases 14-02-2020'
							);

							const cookedData = searchData.reduce(
								(result, item) => {
									result =
										result +
										Number(item.value);
									return result;
								},
								0
							);
							const searchBigData = search(
								'confirmedcases'
							).reduce(
								(result, item) => {
									if (
										!result[item.date]
									) {
										result[
											item.date
										] = 0;
									}
									result[item.date] =
										result[item.date] +
										Number(item.value);
									return result;
								},
								{}
							);
							return (
								<div className="flex-1 Block flex flex-col justify-between overflow-hidden">
									<div className="text-xs font-bold capitalize">
										nhiễm
									</div>
									<Sparklines
										data={Object.values(
											searchBigData
										)}>
										<SparklinesLine color="#ff0000" />
									</Sparklines>
									<div className="text-2xl text-red-500 font-bold">
										{cookedData.toLocaleString()}
									</div>
									{/* <div className="text-xs text-red-500 ">1 (0%) hôm nay</div> */}
								</div>
							);
						}}
					</SearchContextConsumer>
					<SearchContextConsumer>
						{search => {
							const searchData = search(
								'deaths 14-02-2020'
							);
							const cookedData = searchData.reduce(
								(result, item) => {
									result =
										result +
										Number(item.value);
									return result;
								},
								0
							);
							const searchBigData = search(
								'deaths'
							).reduce(
								(result, item) => {
									if (
										!result[item.date]
									) {
										result[
											item.date
										] = 0;
									}
									result[item.date] =
										result[item.date] +
										Number(item.value);
									return result;
								},
								{}
							);
							return (
								<div className="flex-1 Block flex flex-col justify-between  overflow-hidden">
									<div className="text-xs font-bold capitalize">
										dẹo
									</div>
									<Sparklines
										data={Object.values(
											searchBigData
										)}>
										<SparklinesLine color="#ffffff" />
									</Sparklines>
									<div className="text-2xl text-white font-bold">
										{cookedData.toLocaleString()}
									</div>
									{/* <div className="text-xs text-white ">0 (0%) hôm nay</div> */}
								</div>
							);
						}}
					</SearchContextConsumer>

					<div className="flex-1 Block flex flex-col justify-between  overflow-hidden">
						<div className="text-xs font-bold">
							come back
						</div>
						<div className="text-2xl text-green-500 font-bold">
							2,924
						</div>
						{/* <div className="text-xs text-green-500 ">2 (0.1%) hôm nay</div> */}
					</div>
				</div>

				<div className="w-full flex flex-wrap">
					<div className="w-full flex flex-col lg:w-64">
						<FeatureSearch />
						<VietNam />
						<World />
					</div>
					<div
						style={{ padding: '6px' }}
						className="w-full p-0 flex-1 Block h-screen sticky top-0 hidden lg:flex">
						<FeatureMap />
					</div>
					<div className="w-full lg:w-64 Block">
						<div className="BlockTitle ">
							Tin tức
						</div>
						<FeedConsumer>
							{(items = []) =>
								items.map((item, i) => {
									console.log(
										<div
											dangerouslySetInnerHTML={{
												__html:
													item.content
											}}
										/>
									);
									return (
										<div
											key={i}
											className="BlockRow  clearfix border-b Feed border-gray-700  hover:border-gray-500 ">
											<div className="py-2">
												<div
													dangerouslySetInnerHTML={{
														__html: `<a
                          class="font-bold block FeedTitle  hover:underline text-white"
                          href="${item.link}"
                          target="_blank"
                        >
                          ${item.title}
                        </a>${item.content}`
													}}
												/>
												<div className="truncate mt-2 clearfix flex items-center">
													<span className="pr-1 flex items-center flex-1">
														<img
															className="inline pr-1 m-0"
															alt=""
															src={`https://www.google.com/s2/favicons?domain=${item.orginUrl}`}
															style={{
																width:
																	'unset',
																verticalAlign:
																	'sub',
																margin:
																	'0px'
															}}
														/>
														<span className="ml-1">
															{
																item.orginUrl
															}
														</span>
													</span>
													<time
														dateTime={
															item.isoDate
														}>
														{new Date(
															item.isoDate
														).toLocaleDateString()}
													</time>
												</div>
											</div>
										</div>
									);
								})
							}
						</FeedConsumer>
					</div>
				</div>
			</div>
			<div
				className={
					'bg-black fixed w-screen  h-screen top-0 left-0 ' +
					((ready &&
						'animated fadeOut pointer-events-none') ||
						'')
				}
			/>
		</>
	);
}
const Cache = ({
	cacheId,
	children
}) => {
	const cache = useRef({
		cacheId: children
	});
	if (!cache.current[cacheId]) {
		cache.current[cacheId] = children;
	}
	return cache.current[cacheId];
};
export default () => (
	<Sources>
		<Search>
			<Feeds>
				<Corona />
			</Feeds>
		</Search>
	</Sources>
);
