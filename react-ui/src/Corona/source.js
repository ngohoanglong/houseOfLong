let source = {
	updated: null,
	data: []
};
export const getUpdated = json =>
	json.feed.updated.$t;
export const getProperty = (
	item,
	name
) => item[name] && item[name].$t;
export const propertyList = [
	'id',
	'updated',
	'title'
];
export const propertyList1 = [
	'country',
	'location',
	'locationid',
	'latitude',
	'longitude'
];
export const customPropertyList = propertyList1.map(
	value => `gsx$${value}`
);
export const mapData = json => {
	const countries = {};
	const dates = {};
	const locations = {};
	const cookedData = json.feed.entry.flatMap(
		entry => {
			const result = Object.keys(
				entry
			).reduce(
				(result, key) => {
					const country = getProperty(
						entry,
						'gsx$country'
					);
					const location = getProperty(
						entry,
						'gsx$location'
					);
					countries[country] = true;
					locations[
						`${country} ${location}`
					] = true;
					switch (true) {
						case propertyList.includes(
							key
						):
							result[key] = getProperty(
								entry,
								key
							);
							break;
						case key.includes(
							'confirmedcases'
						):
							const splitString = key.split(
								'confirmedcases'
							);
							result.data.push({
								type: 'confirmedcases',
								date: splitString[1],
								value: getProperty(
									entry,
									key
								)
							});

							dates[
								splitString[1]
							] = true;
							break;
						case key.includes('deaths'):
							const splitdeathsString = key.split(
								'deaths'
							);
							result.data.push({
								type: 'deaths',
								date:
									splitdeathsString[1],
								value: getProperty(
									entry,
									key
								)
							});
							dates[
								splitdeathsString[1]
							] = true;
							break;
						case customPropertyList.includes(
							key
						):
							result[
								propertyList1[
									customPropertyList.findIndex(
										v => v === key
									)
								]
							] = getProperty(
								entry,
								key
							);

							break;
						default:
							break;
					}

					return result;
				},
				{ data: [] }
			);
			return result.data.map(item => {
				const title = `${result.country} ${result.location} ${item.type} ${item.date}`;
				return {
					...result,
					...item,
					id: title,
					title
				};
			});
		}
	);
	console.log({
		countries,
		dates,
		locations
	});
	return [
		Object.keys(countries).map(v => ({
			id: v,
			title: v,
			type: 'country'
		})),
		Object.keys(locations).map(v => ({
			id: v,
			title: v,
			type: 'location'
		})),
		Object.keys(dates).map(v => ({
			id: v,
			title: v,
			type: 'date'
		})),
		cookedData
	].flatMap(item => item);
};

export const getData = cb =>
	fetch(
		'https://spreadsheets.google.com/feeds/list/18X1VM1671d99V_yd-cnUI1j8oSG2ZgfU_q1HfOizErA/od6/public/values?alt=json'
	)
		.then(res => res.json())
		.then(json => {
			console.log(json);
			source = {
				updated: getUpdated(json),
				data: mapData(json)
			};
			return cb(source);
		});
