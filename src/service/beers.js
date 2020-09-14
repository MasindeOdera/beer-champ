var beerChamp
;(function () {
	var data = [
		{
			title: 'Brand Dubbelbock',
			images: [
				{
					image: 'https://www.beerwulf.com/globalassets/brand-dubbelbock.3_1_1.png',
					badge: {
						url: '/',
						alt: null,
						title: null,
					},
				},
			],
			colors: ['yellow', 'malt', 'brown'],
			inStock: true,
			style: 'Bock Beer',
			alcoholPercentage: 7.5,
			volume: 30,
			displayInformationPrice: {
				currency: '£',
				price: '£ 2.39',
				filterPrice: 1.7925,
				discountPrice: '£ 1.79',
				discountPercentage: '-25',
				pricePerLiter: '£ 7.97',
			},
			containerType: 'Bottle',
		},
		{
			title: 'Kompaan Bondgenoot',
			images: [
				{
					image: 'https://www.beerwulf.com/globalassets/kompaan-bondgenoot.33_1_1.png',
					badge: {
						url:
							'https://www.beerwulf.com/en-gb/SysSiteAssets/editorials/dutch-beer-challenge-2018/dbc-silver.png',
						alt: 'Dutch Beer Challenge Silver',
						title: 'Dutch Beer Challenge Silver',
					},
				},
			],
			colors: ['yellow'],
			inStock: true,
			style: 'Pale Ale',
			alcoholPercentage: 5.2,
			volume: 33,
			displayInformationPrice: {
				currency: '£',
				price: '£ 2.79',
				filterPrice: 2.0925,
				discountPrice: '£ 2.09',
				discountPercentage: '-25',
				pricePerLiter: '£ 8.45',
			},
			containerType: 'Bottle',
		},
		{
			title: 'Brand Weizen 0.0',
			images: [
				{
					image: 'https://www.beerwulf.com/globalassets/brand-weizen-0.0.3_1_1.png',
					badge: {
						url: '/',
						alt: null,
						title: null,
					},
				},
			],
			colors: ['light yellow'],
			inStock: true,
			style: 'German Wheat Beer',
			alcoholPercentage: 0,
			volume: 30,
			displayInformationPrice: {
				currency: '£',
				price: '£ 1.79',
				filterPrice: 1.3425,
				discountPrice: '£ 1.34',
				discountPercentage: '-25',
				pricePerLiter: '£ 5.97',
			},
			containerType: 'Bottle',
		},
		{
			title: 'La Débauche Saison',
			images: [
				{
					image: 'https://www.beerwulf.com/globalassets/la-debauche-saison_2_1.png',
					badge: {
						url: '/',
						alt: null,
						title: null,
					},
				},
			],
			colors: ['malt', 'brown'],
			inStock: true,
			style: 'Saison Beer',
			alcoholPercentage: 7,
			volume: 33,
			displayInformationPrice: {
				currency: '£',
				price: '£ 2.99',
				filterPrice: 2.691,
				discountPrice: '£ 2.69',
				discountPercentage: '-10',
				pricePerLiter: '£ 9.06',
			},
			containerType: 'Bottle',
		},
		{
			title: 'Overworks Funk X Punk',
			images: [
				{
					image: 'https://www.beerwulf.com/globalassets/overworks-funk-x-punk.5_1_02.png',
					badge: {
						url: '/',
						alt: null,
						title: null,
					},
				},
			],
			colors: ['dark brown'],
			inStock: true,
			style: 'Saison Beer',
			alcoholPercentage: 5.5,
			volume: 50,
			displayInformationPrice: {
				currency: '£',
				price: '£ 5.99',
				filterPrice: 5.391,
				discountPrice: '£ 5.39',
				discountPercentage: '-10',
				pricePerLiter: '£ 11.98',
			},
			containerType: 'Bottle',
		},
		{
			title: 'Thornbridge Lukas Can',
			images: [
				{
					image: 'https://www.beerwulf.com/globalassets/thornbridge-lukas-cancan.33_15228_0.png',
					badge: {
						url: '/',
						alt: null,
						title: null,
					},
				},
			],
			colors: ['malt'],
			inStock: true,
			style: 'Lager',
			alcoholPercentage: 4.2,
			volume: 33,
			displayInformationPrice: {
				currency: '£',
				price: '£ 2.59',
				filterPrice: 2.331,
				discountPrice: '£ 2.33',
				discountPercentage: '-10',
				pricePerLiter: '£ 7.85',
			},
			containerType: 'Can',
		},
		{
			title: 'New Castle Brown Ale',
			images: [
				{
					image: 'https://www.beerwulf.com/globalassets/new-castle-brown-ale_15529_0.png',
					badge: {
						url: '/',
						alt: null,
						title: null,
					},
				},
			],
			colors: ['yellow', 'malt', 'brown'],
			inStock: true,
			style: 'Cider',
			alcoholPercentage: 4.7,
			volume: 33,
			displayInformationPrice: {
				currency: '£',
				price: '£ 1.79',
				filterPrice: 1.3425,
				discountPrice: '£ 1.34',
				discountPercentage: '-25',
				pricePerLiter: '£ 5.42',
			},
			containerType: 'Can',
		},
		{
			title: 'Brewdog Hazy Jane',
			images: [
				{
					image: 'https://www.beerwulf.com/globalassets/brewdog-hazy-jane_beer_15575_0.png',
					badge: {
						url: '/',
						alt: null,
						title: null,
					},
				},
			],
			colors: ['malt', 'brown', 'cherry red'],
			inStock: true,
			style: 'IPA',
			alcoholPercentage: 7.2,
			volume: 33,
			displayInformationPrice: {
				currency: '£',
				price: '£ 3.29',
				filterPrice: 2.961,
				discountPrice: '£ 2.96',
				discountPercentage: '-10',
				pricePerLiter: '£ 9.97',
			},
			containerType: 'Can',
		},
		{
			title: 'Strongbow Dark Fruit ',
			images: [
				{
					image:
						'https://www.beerwulf.com/globalassets/4.-products/bottles--cans/stronbow_darkfruits_cider.png',
					badge: {
						url: '/',
						alt: null,
						title: null,
					},
				},
			],
			colors: ['brown'],
			inStock: true,
			style: 'Cider',
			alcoholPercentage: 4,
			volume: 44,
			displayInformationPrice: {
				currency: '£',
				price: '£ 2.09',
				filterPrice: 1.5675,
				discountPrice: '£ 1.57',
				discountPercentage: '-25',
				pricePerLiter: '£ 4.75',
			},
			containerType: 'Can',
		},
		{
			title: 'Beavertown Neck Oil',
			images: [
				{
					image: 'https://www.beerwulf.com/globalassets/beavertown-neck-oil2.33_1_0',
					badge: {
						url: '/',
						alt: null,
						title: null,
					},
				},
			],
			colors: ['yellow', 'malt', 'brown'],
			inStock: true,
			style: 'IPA',
			alcoholPercentage: 4.3,
			volume: 33,
			displayInformationPrice: {
				currency: '£',
				price: '£ 2.59',
				filterPrice: 1.9425,
				discountPrice: '£ 1.94',
				discountPercentage: '-25',
				pricePerLiter: '£ 7.85',
			},
			containerType: 'Can',
		},
		{
			title: 'Lagunitas IPA',
			images: [
				{
					image: 'https://www.beerwulf.com/globalassets/lagunitas-ipa.36_1_1.png',
					badge: {
						url: '/',
						alt: null,
						title: null,
					},
				},
			],
			colors: ['yellow'],
			inStock: true,
			style: 'IPA',
			alcoholPercentage: 6.2,
			volume: 36,
			displayInformationPrice: {
				currency: '£',
				price: '£ 2.79',
				filterPrice: 2.0925,
				discountPrice: '£ 2.09',
				discountPercentage: '-25',
				pricePerLiter: '£ 7.86',
			},
			containerType: 'Bottle',
		},
		{
			title: 'Paulaner Hefe Weissbier Alcoholvrij',
			images: [
				{
					image:
						'https://www.beerwulf.com/globalassets/paulaner-hefe-weissbier-alcoholvrij.33_1_2.png',
					badge: {
						url: '/',
						alt: null,
						title: null,
					},
				},
			],
			colors: ['malt'],
			inStock: true,
			style: 'Lager',
			alcoholPercentage: 0.5,
			volume: 33,
			displayInformationPrice: {
				currency: '£',
				price: '£ 1.89',
				filterPrice: 1.4175,
				discountPrice: '£ 1.42',
				discountPercentage: '-25',
				pricePerLiter: '£ 5.73',
			},
			containerType: 'Bottle',
		},
		{
			title: 'Seven Bro7hers Easy IPA',
			images: [
				{
					image: 'https://www.beerwulf.com/globalassets/seven-bro7hers-ipa.33_1_2.png',
					badge: {
						url: '/',
						alt: null,
						title: null,
					},
				},
			],
			colors: ['light yellow', 'malt', 'brown'],
			inStock: true,
			style: 'IPA',
			alcoholPercentage: 4.7,
			volume: 33,
			displayInformationPrice: {
				currency: '£',
				price: '£ 2.69',
				filterPrice: 2.0175,
				discountPrice: '£ 2.02',
				discountPercentage: '-25',
				pricePerLiter: '£ 8.15',
			},
			containerType: 'Can',
		},
		{
			title: 'Brixton Reliance',
			images: [
				{
					image: 'https://www.beerwulf.com/globalassets/brixton-reliance.33_1_1.png',
					badge: {
						url: '/',
						alt: null,
						title: null,
					},
				},
			],
			colors: ['malt', 'brown', 'cherry red'],
			inStock: true,
			style: 'Pale Ale',
			alcoholPercentage: 4,
			volume: 33,
			displayInformationPrice: {
				currency: '£',
				price: '£ 2.69',
				filterPrice: 2.0175,
				discountPrice: '£ 2.02',
				discountPercentage: '-25',
				pricePerLiter: '£ 8.15',
			},
			containerType: 'Can',
		},
		{
			title: 'Brixton Atlantic APA',
			images: [
				{
					image: 'https://www.beerwulf.com/globalassets/brixton-atlantic-apa.33_1_1.png',
					badge: {
						url: '/',
						alt: null,
						title: null,
					},
				},
			],
			colors: ['malt', 'brown'],
			inStock: true,
			style: 'Pale Ale',
			alcoholPercentage: 5.4,
			volume: 33,
			displayInformationPrice: {
				currency: '£',
				price: '£ 2.69',
				filterPrice: 2.0175,
				discountPrice: '£ 2.02',
				discountPercentage: '-25',
				pricePerLiter: '£ 8.15',
			},
			containerType: 'Can',
		},
		{
			title: 'Wild Sleeping Limes',
			images: [
				{
					image: 'https://www.beerwulf.com/globalassets/wild-sleeping-limes.33_1_02.png',
					badge: {
						url: '/',
						alt: null,
						title: null,
					},
				},
			],
			colors: ['brown'],
			inStock: true,
			style: 'White Beer',
			alcoholPercentage: 4.6,
			volume: 33,
			displayInformationPrice: {
				currency: '£',
				price: '£ 2.39',
				filterPrice: 2.151,
				discountPrice: '£ 2.15',
				discountPercentage: '-10',
				pricePerLiter: '£ 7.24',
			},
			containerType: 'Can',
		},
		{
			title: 'Overworks Cosmic Crush Pear',
			images: [
				{
					image: 'https://www.beerwulf.com/globalassets/overworks-cosmic-crush-pear.5_1_02.png',
					badge: {
						url: '/',
						alt: null,
						title: null,
					},
				},
			],
			colors: ['dark brown'],
			inStock: true,
			style: 'White Beer',
			alcoholPercentage: 6,
			volume: 50,
			displayInformationPrice: {
				currency: '£',
				price: '£ 8.39',
				filterPrice: 7.551,
				discountPrice: '£ 7.55',
				discountPercentage: '-10',
				pricePerLiter: '£ 16.78',
			},
			containerType: 'Bottle',
		},
		{
			title: 'Alken Maes Pils',
			images: [
				{
					image: 'https://www.beerwulf.com/globalassets/alken-maes-pilsbottle.25_14802_1.png',
					badge: {
						url: '/',
						alt: null,
						title: null,
					},
				},
			],
			colors: ['dark brown', 'light yellow'],
			inStock: true,
			style: 'Lager',
			alcoholPercentage: 5.2,
			volume: 25,
			displayInformationPrice: {
				currency: '£',
				price: '£ 1.99',
				filterPrice: 1.4925,
				discountPrice: '£ 1.49',
				discountPercentage: '-25',
				pricePerLiter: '£ 7.96',
			},
			containerType: 'Bottle',
		},
		{
			title: 'Beavertown Gamma Ray',
			images: [
				{
					image: 'https://www.beerwulf.com/globalassets/beavertown-gamma-ray2.33_1_0',
					badge: {
						url: '/',
						alt: null,
						title: null,
					},
				},
			],
			colors: ['dark brown'],
			inStock: true,
			style: 'Pale Ale',
			alcoholPercentage: 5.4,
			volume: 33,
			displayInformationPrice: {
				currency: '£',
				price: '£ 2.59',
				filterPrice: 2.331,
				discountPrice: '£ 2.33',
				discountPercentage: '-10',
				pricePerLiter: '£ 7.85',
			},
			containerType: 'Can',
		},
		{
			title: 'Rock City Beers Peach Squeezer',
			images: [
				{
					image:
						'https://www.beerwulf.com/globalassets/rock-city-brewing-peach-squeezer.33_1_04.png',
					badge: {
						url: '/',
						alt: null,
						title: null,
					},
				},
			],
			colors: ['brown'],
			inStock: true,
			style: 'White Beer',
			alcoholPercentage: 4,
			volume: 33,
			displayInformationPrice: {
				currency: '£',
				price: '£ 2.89',
				filterPrice: 2.1675,
				discountPrice: '£ 2.17',
				discountPercentage: '-25',
				pricePerLiter: '£ 8.76',
			},
			containerType: 'Bottle',
		},
		{
			title: 'BrewDog Punk IPA Can',
			images: [
				{
					image: 'https://www.beerwulf.com/globalassets/brewdog-punk-ipa-can.33_1_1.png',
					badge: {
						url: '/',
						alt: null,
						title: null,
					},
				},
			],
			colors: ['blue', 'green'],
			inStock: true,
			style: 'IPA',
			alcoholPercentage: 5.6,
			volume: 33,
			displayInformationPrice: {
				currency: '£',
				price: '£ 2.49',
				filterPrice: 2.241,
				discountPrice: '£ 2.24',
				discountPercentage: '-10',
				pricePerLiter: '£ 7.55',
			},
			containerType: 'Can',
		},
		{
			title: 'Bird Brewery / Stanislaus Brewskovitch Thunderbird',
			images: [
				{
					image:
						'https://www.beerwulf.com/globalassets/bird-brewery--stanislaus-brewskovitch-thunderbird.33_1_1.png',
					badge: {
						url: '/',
						alt: null,
						title: null,
					},
				},
			],
			colors: ['blue'],
			inStock: true,
			style: 'Porter & Stout',
			alcoholPercentage: 7.5,
			volume: 33,
			displayInformationPrice: {
				currency: '£',
				price: '£ 3.29',
				filterPrice: 2.4675,
				discountPrice: '£ 2.47',
				discountPercentage: '-25',
				pricePerLiter: '£ 9.97',
			},
			containerType: 'Bottle',
		},
		{
			title: 'BrewDog Clockwork Tangerine',
			images: [
				{
					image: 'https://www.beerwulf.com/globalassets/brewdog-clockwork-tangerine.33_1_2.png',
					badge: {
						url: '/',
						alt: null,
						title: null,
					},
				},
			],
			colors: ['green'],
			inStock: false,
			style: 'IPA',
			alcoholPercentage: 4.5,
			volume: 33,
			displayInformationPrice: {
				currency: '£',
				price: '£ 2.89',
				filterPrice: 2.1675,
				discountPrice: '£ 2.17',
				discountPercentage: '-25',
				pricePerLiter: '£ 8.76',
			},
			containerType: 'Can',
		},
		{
			title: 'Pistonhead Flat Tire',
			images: [
				{
					image: 'https://www.beerwulf.com/globalassets/pistonhead-flat-tirecan.33_15231_0.png',
					badge: {
						url: '/',
						alt: null,
						title: null,
					},
				},
			],
			colors: ['blue'],
			inStock: false,
			style: 'Lager',
			alcoholPercentage: 0.5,
			volume: 33,
			displayInformationPrice: {
				currency: '£',
				price: '£ 1.79',
				filterPrice: 1.3425,
				discountPrice: '£ 1.34',
				discountPercentage: '-25',
				pricePerLiter: '£ 5.42',
			},
			containerType: 'Can',
		},
		{
			title: 'Houblon Chouffe',
			images: [
				{
					image: 'https://www.beerwulf.com/globalassets/la-chouffe-houblon.33_1_1.png',
					badge: {
						url: '/',
						alt: null,
						title: null,
					},
				},
			],
			colors: ['yellow', 'malt', 'brown'],
			inStock: false,
			style: 'IPA',
			alcoholPercentage: 9,
			volume: 33,
			displayInformationPrice: {
				currency: '£',
				price: '£ 3.29',
				filterPrice: 2.4675,
				discountPrice: '£ 2.47',
				discountPercentage: '-25',
				pricePerLiter: '£ 9.97',
			},
			containerType: 'Bottle',
		},
	]

	beerChamp = {
		fetchData: fetchData,
	}

	function fetchData(cb) {
		if (!cb) {
			// eslint-disable-next-line
			throw 'Callback not defined'
		}
		setTimeout(function () {
			if (Math.floor(Math.random() * 20) === 2) {
				cb('Fetch data error')
			} else {
				cb(null, data)
			}
		}, 1000)
	}

	if (typeof module !== 'undefined') {
		module.exports = beerChamp
	}
})()
