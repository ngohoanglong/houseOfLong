import React, {
	useCallback,
	useState
} from 'react';
import '../tailwind.css';
import './animate.css';
import EnIcon from './EnIcon';
import { FeedConsumer } from './Feeds';
import MapCorona from './Map/MapCorona';
import { SearchContextConsumer } from './Search';
import { SourceContext } from './Sources';
import './styles.scss';
import VnIcon from './VnIcon';

export default function Corona() {
	const [ready, setReady] = useState();
	const [
		keyword,
		setkeyword
	] = useState();
	const handleReady = useCallback(() => {
		setReady(true);
	}, []);
	return (
		<>
			<div
				className="App"
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
								<div className=" Block w-full md:w-2/3 flex flex items-center flex-wrap justify-center">
									<div>
										<div className="text-3xl font-bold whitespace-no-wrap">
											Coronavirus
											(2019-nCoV)
										</div>
										<div className="">
											Liên hệ:{' '}
											<span className="text-blue-600">
												no.noo.nooo.yes@gmail.com
											</span>
										</div>
									</div>
									<div className="ml-4 whitespace-pre text-sm flex-1 mt-2">
										{`Cập nhật lần cuối lúc: ${source &&
											new Date(
												source.updated
											).toLocaleDateString()}.
  Nguồn: WHO, CDC, NHC, DXY & Bộ Y Tế Việt Nam.`}
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
								'confirmedcases 10-02-2020'
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
							return (
								<div className="flex-1 Block flex flex-col justify-between overflow-hidden">
									<div className="text-xs font-bold">
										So nguoi nhiem
									</div>
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
								'deaths 10-02-2020'
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
							return (
								<div className="flex-1 Block flex flex-col justify-between  overflow-hidden">
									<div className="text-xs font-bold">
										So nguoi chết
									</div>
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
							So nguoi hoi phuc
						</div>
						<div className="text-2xl text-green-500 font-bold">
							2,924
						</div>
						{/* <div className="text-xs text-green-500 ">2 (0.1%) hôm nay</div> */}
					</div>
				</div>

				<div className="w-full flex flex-wrap">
					<div className="w-full flex flex-col md:w-64">
						<div className="w-full md:w-64 Block">
							<input
								placeholder="search..."
								className="BlockTitle bg-white z-10 w-full px-3 py-1"
								onChange={e => {
									setkeyword(
										e.target.value
									);
								}}
							/>
							<div>
								<div className="BlockRow mt-2">
									<span className="font-bold bg-white px-2 text-white rounded bg-red-600 text-sm ">
										nhiễm
									</span>
									<span className="font-bold  ml-4 bg-white px-2 text-white rounded bg-gray-500 text-sm ml-2">
										dẹo
									</span>
									<span className="font-bold  ml-4 bg-white px-2 text-white rounded bg-green-500 text-sm ml-2">
										come back
									</span>
								</div>
								<SearchContextConsumer>
									{search => {
										const searchData = search(
											keyword
										);
										return (
											searchData &&
											searchData.map(
												(entry, i) => (
													<div
														key={
															entry.id
														}
														className="BlockRow fadeInRight animated faster">
														<div className="border-b border-gray-700  hover:border-gray-500 hover:text-white font-bold py-2">
															{
																entry[
																	'id'
																]
															}
														</div>
													</div>
												)
											)
										);
									}}
								</SearchContextConsumer>
							</div>
						</div>
						<SearchContextConsumer>
							{search => {
								const searchData = search(
									'vietnam 10-02-2020'
								);
								const cookedData =
									searchData &&
									Object.values(
										searchData.reduce(
											(
												result,
												item
											) => {
												let entry =
													result[
														item[
															'gsx$location'
														]
													];
												if (!entry) {
													result[
														item[
															'gsx$location'
														]
													] = {
														title:
															item[
																'gsx$location'
															]
													};
													entry =
														result[
															item[
																'gsx$location'
															]
														];
												}
												if (
													item.type ===
													'confirmedcases'
												) {
													entry[
														'confirmedcases'
													] =
														item.value;
												}
												if (
													item.type ===
													'deaths'
												) {
													entry[
														'deaths'
													] =
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
											Tỉnh thành ở Việt
											Nam
										</div>
										{cookedData.map(
											(item, i) => {
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
															<span className="bg-white px-2 text-white rounded bg-red-600 text-sm ml-2">
																{
																	confirmedcases
																}
															</span>{' '}
															{!!Number(
																deaths
															) > 0 && (
																<span className="bg-white px-2 text-white rounded bg-gray-500 text-sm ml-2">
																	{
																		deaths
																	}
																</span>
															)}
														</div>
													</div>
												);
											}
										)}
										<div className="BlockRow py-2 text-xs text-right whitespace-pre ">
											{
												cookedData.length
											}{' '}
											tỉnh thành
										</div>
									</div>
								);
							}}
						</SearchContextConsumer>
						<SearchContextConsumer>
							{search => {
								const searchData = search(
									'10-02-2020'
								);
								const cookedData =
									searchData &&
									Object.values(
										searchData.reduce(
											(
												result,
												item
											) => {
												let entry =
													result[
														item[
															'title'
														]
													];
												if (!entry) {
													result[
														item[
															'title'
														]
													] = {
														title:
															item[
																'title'
															],
														confirmedcases: 0,
														deaths: 0
													};
													entry =
														result[
															item[
																'title'
															]
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
														Number(
															item.value
														);
												}
												if (
													item.type ===
													'deaths'
												) {
													entry[
														'deaths'
													] =
														entry[
															'deaths'
														] +
														Number(
															item.value
														);
												}
												return result;
											},
											{}
										)
									).sort(
										(p, lp) =>
											-Number(
												p[
													'confirmedcases'
												]
											) +
											Number(
												lp[
													'confirmedcases'
												]
											)
									);
								return (
									<div className=" Block">
										<div className="BlockTitle">
											Số ca nhiễm theo
											quốc gia
										</div>

										{cookedData.map(
											(item, i) => {
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
															<span className="bg-white px-2 text-white rounded bg-red-600 text-sm ml-2">
																{
																	confirmedcases
																}
															</span>{' '}
															{!!Number(
																deaths
															) > 0 && (
																<span className="bg-white px-2 text-white rounded bg-gray-500 text-sm ml-2">
																	{
																		deaths
																	}
																</span>
															)}
														</div>
													</div>
												);
											}
										)}
										<div className="BlockRow py-2 text-right">
											{
												cookedData.length
											}{' '}
											nước
										</div>
									</div>
								);
							}}
						</SearchContextConsumer>
					</div>
					<div
						style={{ padding: '6px' }}
						className="w-full p-0 flex-1 Block h-screen sticky top-0 hidden md:flex">
						<SearchContextConsumer>
							{search => {
								const searchData = search(
									'10-02-2020'
								);
								const cookedData =
									searchData &&
									Object.values(
										searchData.reduce(
											(
												result,
												item
											) => {
												let entry =
													result[
														item[
															'title'
														]
													];
												if (!entry) {
													result[
														item[
															'title'
														]
													] = {
														title:
															item[
																'title'
															],
														confirmedcases: 0,
														deaths: 0
													};
													entry =
														result[
															item[
																'title'
															]
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
														Number(
															item.value
														);
												}
												if (
													item.type ===
													'deaths'
												) {
													entry[
														'deaths'
													] =
														entry[
															'deaths'
														] +
														Number(
															item.value
														);
												}
												return result;
											},
											{}
										)
									).sort(
										(p, lp) =>
											-Number(
												p[
													'confirmedcases'
												]
											) +
											Number(
												lp[
													'confirmedcases'
												]
											)
									);
								return (
									<MapCorona
										data={cookedData}
									/>
								);
							}}
						</SearchContextConsumer>
					</div>
					<div className="w-full md:w-64 Block">
						<div className="BlockTitle ">
							Tin tức
						</div>
						<FeedConsumer>
							{(items = []) =>
								items.map(item => {
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
											key={item.link}
											className="BlockRow clearfix border-b Feed border-gray-700  hover:border-gray-500  py-2">
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
export default () => (
	<Sources>
		<Search>
			<Feeds>
				<Corona />
			</Feeds>
		</Search>
	</Sources>
);
