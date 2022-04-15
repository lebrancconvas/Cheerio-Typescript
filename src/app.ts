import * as cheerio from 'cheerio';
import axios from 'axios';
import fs from 'fs';


const getHTML = async(url: string) => {
	const {data} = await axios.get(url);
	return data;
}

const writeHTML = async(url: string, filename: string) => {
	fs.writeFile(`./data/output/html/${filename}.html`, await getHTML(url), (err) => {
		if(err) {
			console.error(err);
			return;
		}
	});
};

const getText = async(url: string) => {
	const $ = cheerio.load(await getHTML(url));
	console.log($.text());
}

getText("https://bootcamp.uxdesign.cc/website-footer-best-practices-what-avoid-ed7a2481d3af"); 

