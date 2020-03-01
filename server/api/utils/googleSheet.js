const getUpdated = json =>
	json.feed.updated.$t;
const getProperty = (item, name) =>
	item[name] && item[name].$t;
const propertyList = [
	'id',
	'updated',
	'title'
];
const propertyList1 = [
	'country',
	'location',
	'locationid',
	'latitude',
	'longitude'
];
const customPropertyList = propertyList1.map(
	value => `gsx$${value}`
);
const mapData = json => {
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

module.exports.mapData = mapData;
