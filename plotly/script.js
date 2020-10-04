const pl = [
	'Kepler-12 b',
	'Kepler-15 b',
	'Kepler-1658 b',
	'Kepler-17 b',
	'Kepler-32 b',
	'Kepler-40 b',
	'Kepler-41  b',
	'Kepler-412 b',
	'Kepler-428 b',
	'Kepler-43 b',
	'Kepler-433 b',
	'Kepler-435 b',
	'Kepler-44 b',
	'Kepler-447 b',
	'Kepler-45 b',
	'Kepler-5 b',
	'Kepler-6 b',
	'Kepler-7 b',
	'Kepler-74 b',
	'Kepler-75 b',
	'Kepler-76 b',
	'Kepler-77 b',
	'Kepler-8 b',
	'Kepler-91 b',
];

const orbitialPeriod = [
	'4.43796370',
	'4.94278200',
	'3.84940000',
	'1.48571080',
	'5.90124000',
	'6.87349000',
	'1.85555800',
	'1.72086123',
	'3.52563254',
	'3.02409500',
	'5.33408384',
	'8.60015360',
	'3.24674000',
	'7.79430132',
	'2.45523900',
	'3.54846000',
	'3.23472300',
	'4.88552500',
	'7.34071800',
	'8.88492400',
	'1.54492875',
	'3.57870870',
	'3.52254000',
	'6.24658000',
];

const starMetallicity = [
	'0.070',
	'0.360',
	'-0.180',
	'0.260',
	'0.000',
	'0.100',
	'-0.090',
	'0.270',
	'0.090',
	'0.330',
	'-0.010',
	'-0.180',
	'0.260',
	'0.070',
	'0.080',
	'0.040',
	'0.340',
	'0.110',
	'0.340',
	'-0.070',
	'-0.100',
	'0.200',
	'-0.055',
	'0.110',
];

const orbErr = [
	'0.00000020',
	'0.00000130',
	'null',
	'0.00000020',
	'0.00010000',
	'0.00064000',
	'0.00000700',
	'0.00000005',
	'0.00000015',
	'0.00002100',
	'0.00000110',
	'0.00000180',
	'0.00001800',
	'0.00000182',
	'0.00000500',
	'0.00003200',
	'0.00001700',
	'0.00004000',
	'0.00000100',
	'0.00000200',
	'0.00000027',
	'0.00000023',
	'0.00005000',
	'0.00008200',
];

const metErr = [
	'0.04000000',
	'0.07000000',
	'0.10000000',
	'0.10000000',
	'0.40000000',
	'0.10000000',
	'0.16000000',
	'0.12000000',
	'0.17000000',
	'0.11000000',
	'0.20000000',
	'0.11000000',
	'0.10000000',
	'0.05000000',
	'0.05000000',
	'0.06000000',
	'0.04000000',
	'0.03000000',
	'0.14000000',
	'0.15000000',
	'0.20000000',
	'0.05000000',
	'0.03000000',
	'0.07000000',
];

// One

var data = {
	x: orbitialPeriod,
	y: starMetallicity,
	mode: 'markers',
	type: 'scatter',
	text: pl,
	marker: {
		size: 6,
		opacity: 0.8,
		line: {
			color: 'rgb(0,0,0)',
			width: 0.8,
		},
	},
};

var layout = {
	xaxis: {
		// type: 'log',
		autorange: true,
		showgrid: false,
		zeroline: true,
		showline: true,
		mirror: 'ticks',
		gridcolor: '#bdbdbd',
		gridwidth: 1,
		zerolinecolor: '#969696',
		zerolinewidth: 1,
		linecolor: '#636363',
		linewidth: 0.8,

		autotick: true,
		ticks: 'inside',
		ticklen: 5,
		tickwidth: 1,
		tickcolor: '#000',

		title: {
			text: 'Orbital Period (Days)',
			standoff: 30,
		},
	},
	yaxis: {
		autorange: true,
		showline: true,
		showgrid: false,
		autotick: true,
		zeroline: true,
		showline: true,
		mirror: 'ticks',
		gridcolor: '#bdbdbd',
		gridwidth: 1,
		zerolinecolor: '#969696',
		zerolinewidth: 1,
		linecolor: '#636363',
		linewidth: 0.8,

		autotick: true,
		ticks: 'inside',
		ticklen: 5,
		tickwidth: 1,
		tickcolor: '#000',

		title: {
			text: 'Star Metallicity (Fe/H)',
			standoff: 30,
		},
	},
	// title: 'Star Metallicity and Orbital Period in Kepler DR25',
};

var config = {
	toImageButtonOptions: {
		format: 'png', // one of png, svg, jpeg, webp
		filename: 'Star Metallicity and Orbital Period in Kepler DR25',
		height: 450,
		width: 1000,
		scale: 1, // Multiply title/legend/axis/canvas sizes by this factor
	},
};

Plotly.newPlot('one', [data], layout, config);

// Two

var trace1 = {
	x: [1, 1, 1, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8],

	type: 'histogram',
	marker: {
		color: '#1E77B4',
		line: {
			color: 'rgb(0,0,0)',
			width: 1,
		},
	},
	width: 1,
	xbins: {
		end: 9,
		size: 1,
		start: 0,
	},
};

var data = [trace1];

var layout = {
	// title: 'Number of stars and orbital period',

	xaxis: {
		autorange: true,
		mirror: 'ticks',
		linecolor: '#636363',
		side: 'top',
		showgrid: false,

		autotick: true,
		ticks: 'inside',
		ticklen: 5,
		tickwidth: 1,
		tickcolor: '#000',

		title: {
			text: 'Orbital Period',
			// standoff: 30,
		},
	},
	yaxis: {
		autorange: true,
		mirror: 'ticks',
		linecolor: '#636363',
		showgrid: false,

		autotick: true,
		ticks: 'inside',
		ticklen: 5,
		tickwidth: 1,
		tickcolor: '#000',

		title: {
			text: 'Number of stars',
			// standoff: 30,
		},
	},

	font: {
		family: 'Raleway, sans-serif',
	},
};

var config = {
	toImageButtonOptions: {
		format: 'png', // one of png, svg, jpeg, webp
		filename: 'numberOfStatsVsOrbitalPeriod',
		height: 400,
		width: 1000,
		scale: 1, // Multiply title/legend/axis/canvas sizes by this factor
	},
};

Plotly.newPlot('two', data, layout, config);

// Three

var trace1 = {
	y: [
		0.4,
		0.4,
		0.4,
		0.4,
		0.3,
		0.3,
		0.3,
		0.2,
		0.2,
		0.1,
		0.1,
		0.1,
		0.1,
		0.1,
		0.1,
		0,
		0,
		0,
		0,
		-0.1,
		-0.1,
		-0.2,
		-0.2,
		-0.2,
	],
	type: 'histogram',
	ybins: {
		end: 0.4,
		size: 0.1,
		start: -0.2,
	},

	// orientation: 'h',
	marker: {
		color: '#1E77B4',

		line: {
			color: 'rgb(0,0,0)',
			width: 0.8,
		},
	},
};

var data = [trace1];

var layout = {
	// title: 'Number of stars and host star metallicity',

	xaxis: {
		autorange: true,
		mirror: 'ticks',
		linecolor: '#636363',
		side: 'top',
		showgrid: false,

		autotick: true,
		ticks: 'inside',
		ticklen: 5,
		tickwidth: 1,
		tickcolor: '#000',

		title: {
			text: 'Number of stars',
			// standoff: 30,
		},
	},
	yaxis: {
		autorange: true,
		mirror: 'ticks',
		side: 'right',
		linecolor: '#636363',
		showgrid: false,
		autotick: true,
		ticks: 'inside',
		ticklen: 5,
		tickwidth: 1,
		tickcolor: '#000',

		title: {
			// text: 'Stellar Metallicity',
			// standoff: 30,
		},
	},

	font: {
		family: 'Raleway, sans-serif',
	},
};

var config = {
	toImageButtonOptions: {
		format: 'png', // one of png, svg, jpeg, webp
		filename: 'numberOfStatsVsstarMetallicity',
		height: 400,
		width: 400,
		scale: 1, // Multiply title/legend/axis/canvas sizes by this factor
	},
};

Plotly.newPlot('three', data, layout, config);

// Four

var trace1 = {
	x: [0, 2, 4, 6, 8, 10],
	y: [-0.03, 0.05, 0.12, 0.15, 0.16, -0.02],
	error_y: {
		type: 'data',
		array: [0.02, 0.02, 0.04, 0.02, 0.05, 0.04],
		visible: true,
		thickness: 1,
		width: 2,
	},
	error_x: {
		type: 'data',
		array: [0.5, 0.6, 1, 0.4, 0.7, 1],
		visible: true,
		thickness: 1,
		width: 2,
	},

	type: 'scatter',
	line: {
		dash: 'dash',
		width: 1,
	},
};

var data = [trace1];

var layout = {
	// title: 'Average host star metallicity and period bins',

	yaxis: {
		autorange: true,
		mirror: 'ticks',
		linecolor: '#636363',
		showgrid: false,

		autotick: true,
		ticks: 'inside',
		ticklen: 5,
		tickwidth: 1,
		tickcolor: '#000',

		title: {
			text: 'Average Stellar Metallicity (Fe/H)',
			standoff: 30,
		},
	},
	xaxis: {
		autorange: true,
		mirror: 'ticks',
		linecolor: '#636363',
		showgrid: false,

		autotick: true,
		ticks: 'inside',
		ticklen: 5,
		tickwidth: 1,
		tickcolor: '#000',

		title: {
			text: 'Orbital Period (Days)',
			// standoff: 30,
		},
	},

	font: {
		family: 'Raleway, sans-serif',
	},
};

var config = {
	toImageButtonOptions: {
		format: 'png', // one of png, svg, jpeg, webp
		filename: 'avgMetvsPeriod',
		height: 400,
		width: 1000,
		scale: 1, // Multiply title/legend/axis/canvas sizes by this factor
	},
};

Plotly.newPlot('four', data, layout, config);

// Five

var trace1 = {
	x: ['0-3 days', '3-6 days', '6-9 days'],
	y: [137.1258, 184.8645, 456.44775],
	error_y: {
		type: 'data',
		array: [50, 60, 44],
		thickness: 1.5,
	},
	name: '-0.2 - 0 (Fe/H)',
	type: 'bar',
};

var trace2 = {
	x: ['0-3 days', '3-6 days', '6-9 days'],
	y: [250.0857, 111.21096, 249.51353],
	name: '0 - 0.2 (Fe/H)',
	type: 'bar',
	error_y: {
		type: 'data',
		array: [50, 60, 44],
		thickness: 1.5,
	},
};

var trace3 = {
	x: ['0-3 days', '3-6 days', '6-9 days'],
	y: [376.56395, 361.368, 235.378],
	name: '0.2 - 0 .4 (Fe/H)',
	type: 'bar',
	error_y: {
		type: 'data',
		array: [50, 60, 44],
		thickness: 1.5,
	},
};

var data = [trace1, trace2, trace3];

var layout = {
	// title: 'Occurence Rate',

	yaxis: {
		autorange: true,
		mirror: 'ticks',
		linecolor: '#636363',
		showgrid: false,

		autotick: true,
		ticks: 'inside',
		ticklen: 5,
		tickwidth: 1,
		tickcolor: '#000',

		title: {
			text: 'Occurence Rate',
			// standoff: 30,
		},
	},
	xaxis: {
		autorange: true,
		mirror: 'ticks',
		linecolor: '#636363',
		showgrid: false,

		autotick: true,
		ticks: 'inside',
		ticklen: 5,
		tickwidth: 1,
		tickcolor: '#000',

		title: {
			text: 'Orbital Period (Days)',
			// standoff: 30,
		},
	},

	font: {
		family: 'Raleway, sans-serif',
	},
};

var config = {
	toImageButtonOptions: {
		format: 'png', // one of png, svg, jpeg, webp
		filename: 'OccurenceRate(1)',
		height: 500,
		width: 700,
		scale: 1, // Multiply title/legend/axis/canvas sizes by this factor
	},
};

Plotly.newPlot('five', data, layout, config);

// Six

var trace1 = {
	x: ['0-3 days', '3-6 days', '6-9 days'],
	y: [0.3, 1.002, 1.3],
	error_y: {
		type: 'data',
		array: [0.22, 0.19, 0.13],
		thickness: 1.5,
	},
	name: '-0.2 - 0 (Fe/H)',
	type: 'bar',
};

var trace2 = {
	x: ['0-3 days', '3-6 days', '6-9 days'],
	y: [0.8, 0.789, 0.9],
	name: '0 - 0.2 (Fe/H)',
	type: 'bar',
	error_y: {
		type: 'data',
		array: [0.09, 0.102, 0.15],
		thickness: 1.5,
	},
};

var trace3 = {
	x: ['0-3 days', '3-6 days', '6-9 days'],
	y: [1.3, 1.2, 0.8],
	name: '0.2 - 0 .4 (Fe/H)',
	type: 'bar',
	error_y: {
		type: 'data',
		array: [0.44, 0.34, 0.42],
		thickness: 1.5,
	},
};

var data = [trace1, trace2, trace3];

var layout = {
	// title: 'Normalised Occurence Rate',

	yaxis: {
		autorange: true,
		mirror: 'ticks',
		linecolor: '#636363',
		showgrid: false,

		autotick: true,
		ticks: 'inside',
		ticklen: 5,
		tickwidth: 1,
		tickcolor: '#000',

		title: {
			text: 'Occurence Rate',
			// standoff: 30,
		},
	},
	xaxis: {
		autorange: true,
		mirror: 'ticks',
		linecolor: '#636363',
		showgrid: false,

		autotick: true,
		ticks: 'inside',
		ticklen: 5,
		tickwidth: 1,
		tickcolor: '#000',

		title: {
			text: 'Orbital Period (Days)',
			// standoff: 30,
		},
	},

	font: {
		family: 'Raleway, sans-serif',
	},
};

var config = {
	toImageButtonOptions: {
		format: 'png', // one of png, svg, jpeg, webp
		filename: 'Normalised OccurenceRate',
		height: 500,
		width: 700,
		scale: 1, // Multiply title/legend/axis/canvas sizes by this factor
	},
};

Plotly.newPlot('six', data, layout, config);

// Seven

var sevm = {
	x: ['0-3 days', '3-6 days', '6-9 days'],
	y: [254.59182, 219.14782, 313.77976],
	width: 0.5,
	type: 'bar',
	error_y: {
		type: 'data',
		array: [54, 24, 34],
		thickness: 1.5,
	},

	bargap: 0.1,
};

var layout = {
	// title: 'Occurence Rate [2]',

	yaxis: {
		autorange: true,
		mirror: 'ticks',
		linecolor: '#636363',
		showgrid: false,

		autotick: true,
		ticks: 'inside',
		ticklen: 5,
		tickwidth: 1,
		tickcolor: '#000',

		title: {
			text: 'Occurence Rate',
			// standoff: 30,
		},
	},
	xaxis: {
		autorange: true,
		mirror: 'ticks',
		linecolor: '#636363',
		showgrid: false,

		autotick: true,
		ticks: 'inside',
		ticklen: 5,
		tickwidth: 1,
		tickcolor: '#000',

		title: {
			text: 'Orbital Period (Days)',
			// standoff: 30,
		},
	},

	font: {
		family: 'Raleway, sans-serif',
	},
};

var config = {
	toImageButtonOptions: {
		format: 'png', // one of png, svg, jpeg, webp
		filename: 'OccurenceRate(2)',
		height: 500,
		width: 700,
		scale: 1, // Multiply title/legend/axis/canvas sizes by this factor
	},
};

Plotly.newPlot('seven', [sevm], layout, config);
