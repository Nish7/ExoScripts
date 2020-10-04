const https = require('https');
const fs = require('fs');

for (let i = 1; i < 12; i++) {
	https
		.get(
			`https://exoplanets.nasa.gov/api/v1/planets/?order=display_name+asc&per_page=50&page=${i}&search=(Gas+Giant)%3Aplanet_type%2B(Transit)%3Apl_discmethod`,
			(resp) => {
				// A chunk of data has been recieved.
				let data = '';
				resp.on('data', (chunk) => {
					data += chunk;
				});

				// The whole response has been received. Print out the result.
				resp.on('end', () => {
					data = JSON.parse(data).items;
					const newData = data.map(
						({
							id,
							pl_hostname,
							display_name,
							description,
							title,
							mass_display,
							planet_type,
							st_dist,
							pl_radj,
							pl_massj,
							pl_discmethod,
						}) => {
							return {
								id,
								pl_hostname,
								display_name,
								description,
								title,
								mass_display,
								planet_type,
								st_dist,
								pl_radj,
								pl_massj,
								pl_discmethod,
							};
						},
					);

					fs.writeFile(`${i}.json`, JSON.stringify(newData), (err) =>
						console.log(err),
					);
				});
			},
		)
		.on('error', (err) => {
			console.log('Error: ' + err.message);
		});
}
