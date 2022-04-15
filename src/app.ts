import {getText, writeText} from './lib/scrape';

const baselink: string = "https://en.wikipedia.org/wiki/";
const topic: string = "Square Enix"; 

const pathtopic = topic.replace(' ', '_');
const name = topic.replace(' ', '');

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