import {getText, writeText} from './lib/scrape';
const SearchTopics = require('../data/input/SearchTopics.json');

const baselink: string = "https://en.wikipedia.org/wiki/";

SearchTopics.map((Topic: string) => {
	const pathtopic = Topic.replace(' ', '_');
	const name = Topic.replace(' ', '');
	
	const link: string = `${baselink}${pathtopic}`;
	
	writeText(link, name)
	.then(data => {
		if(data !== undefined) {
			console.log(data);
		} else {
			console.log("Success Working !!"); 
		}
	})
	.catch(err => console.error(err)); 
});
