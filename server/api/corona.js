let request = require('request');
let googleSheet = require('./utils/googleSheet');
const jsdom = require('jsdom');
let mapData = googleSheet.mapData;
const source = {
	googleSheet: {
		url:
			'https://spreadsheets.google.com/feeds/list/18X1VM1671d99V_yd-cnUI1j8oSG2ZgfU_q1HfOizErA/od6/public/values?alt=json',
		loading: false
	},
	worldometers: {
		url:
			'https://www.worldometers.info/coronavirus/',
		loading: false,
		data: {
			cases: 0,
			deadths: 0,
			recovered: 0,
			dataTable: []
		}
	},
	feeds: {
		vnexpress: {
			url:
				'https://vnexpress.net/rss/suc-khoe.rss'
		},
		dantri: {
			url:
				'https://dantri.com.vn/suc-khoe.rss'
		},
		nld: {
			url:
				'https://nld.com.vn/suc-khoe.rss'
		}
	}
};
request(
	source.googleSheet.url,
	function(err, r, body) {
		//nếu có lỗi
		if (err) throw err;
		//in ra header
		// console.log(r);
		//in ra body nhận được
		const json = JSON.parse(body);
		source.googleSheet = {
			...source.googleSheet,
			ready: true,
			update: new Date().getTime(),
			data: mapData(json)
		};
		console.log('success');
		console.log(source.googleSheet.url);
		console.log(
			source.googleSheet.ready
		);
	}
);
request(
	source.worldometers.url,
	function(err, r, body) {
		//nếu có lỗi
		if (err) throw err;
		//in ra header
		// console.log(r);
		//in ra body nhận được

		source.worldometers = {
			...source.worldometers,
			ready: true,
			update: new Date().getTime()
			// data: body
		};
		console.log('success');
		console.log(
			source.worldometers.url
		);
		console.log(
			source.worldometers.ready
		);
		const { JSDOM } = jsdom;
		const dom = new JSDOM(body);
		console.log('#maincounter-number');
		const es = dom.window.document.querySelectorAll(
			'.maincounter-number'
		);
		es.forEach((e, i) => {
			source.worldometers.data[
				[
					'cases',
					'deadths',
					'recovered'
				][i]
			] = e.textContent
				.replace(',', '')
				.trim();
		});
		console.log(
			dom.window.document.querySelector(
				'#table3 > tbody'
			).textContent
		);
		source.worldometers.data.dataTable = dom.window.document
			.querySelector('#table3 > tbody')
			.textContent.split('\n')
			.map(text => text.split('	'));
	}
);
module.exports = async function() {
	const data = await new Promise(
		(res, rej) => {
			res(source.worldometers.data);
		}
	);
	return data;
};
