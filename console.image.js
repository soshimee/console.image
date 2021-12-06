"use strict";

console.image = (...urls) => {
	const a = ["%c ".repeat(urls.length)];
	let i = 0;
	let comp = 0;
	for (const url of urls) {
		const image = new Image();
		const ci = i;
		image.src = url;
		image.onload = () => {
			a[ci + 1] = `background-image: url("${url}"); padding: ${image.height / 2}px ${image.width / 2}px; line-height: ${image.height}px; font-size: 0;`;
			comp++;
			if (comp === urls.length) console.log(...a);
		};
		i++;
	}
};
