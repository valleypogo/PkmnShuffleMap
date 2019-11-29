var fs = require('fs');
fs.readFile('static_masterfile.json', function(error, data) {
	    if (error) {
		            console.log(error);
		            return;
		        }

	    var obj = JSON.parse(data);
	for(p=10;p<100;p++) {
		            fs.copyFile('pokemon_icon_0' + p  + '_00.png', 'pokemon_icon_0' + p + '_'+ Object.keys(obj.pokemon[p].forms)[0] + '.png', function(err) {
				                if ( err ) console.log('ERROR: ' + err);
				            });
		        }
	console.log(Object.keys(obj.pokemon[10].forms)[0]);
});
