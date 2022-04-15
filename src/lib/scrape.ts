import * as cheerio from 'cheerio';
import axios from 'axios';
import fs from 'fs';


export const getHTML = async(url: string) => {
	const {data} = await axios.get(url);
	const $ = cheerio.load(data);
	return $.root().html() as string;
}

export const writeHTML = async(url: string, filename: string) => {
	fs.writeFile(`./data/output/html/${filename}.html`, await getHTML(url), (err) => {
		if(err) {
			console.error(err);
			return;
		}
	});
};

export const getText = async(url: string) => {
	const $ = cheerio.load(await getHTML(url));
	return $.text();
}

export const writeText = async(url: string, filename: string) => {
	fs.writeFile(`./data/output/text/${filename}.txt`, await getText(url), (err) => {
		if(err) {
			console.error(err);
			return;
		}
	});
}


