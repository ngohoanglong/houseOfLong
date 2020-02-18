import RSSParser from 'rss-parser';
// Note: some RSS feeds can't be loaded in the browser due to CORS security.
// To get around this, you can use a proxy.
const CORS_PROXY =
	'https://cors-anywhere.herokuapp.com/';

export async function getFeed() {
	let parser = new RSSParser();
	let [
		vnexpressfeed,
		datrifeed,
		nldfeed
	] = await Promise.all([
		parser
			.parseURL(
				CORS_PROXY +
					'https://vnexpress.net/rss/suc-khoe.rss'
			)
			.catch(() => ({ items: [] })),
		parser
			.parseURL(
				CORS_PROXY +
					'https://dantri.com.vn/suc-khoe.rss'
			)
			.catch(() => ({ items: [] })),
		parser
			.parseURL(
				CORS_PROXY +
					'https://nld.com.vn/suc-khoe.rss'
			)
			.catch(() => ({ items: [] }))
	]);
	console.log(
		vnexpressfeed,
		datrifeed,
		nldfeed
	);
	vnexpressfeed.orginUrl =
		'vnexpress.net';
	datrifeed.orginUrl = 'dantri.com';
	nldfeed.orginUrl = 'nld.com.vn';
	return [
		vnexpressfeed,
		datrifeed,
		nldfeed
	]
		.flatMap(({ items, ...parent }) =>
			items.map(item => ({
				...parent,
				...item
			}))
		)
		.sort(function(a, b) {
			return (
				new Date(b.isoDate) -
				new Date(a.isoDate)
			);
		});
}
