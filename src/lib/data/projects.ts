import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [
	{
		slug: 'rss-proxy-server',
		color: '#5e95e3',
		description:
			'I built a pretty neat Qt-based HTTP server that works as an RSS proxy. It grabs RSS feeds from different sources and sends them to clients in a nice, tidy way. The server can handle lots of client requests at the same time, thanks to Qt’s threading, so it stays fast and responsive. I made sure it runs smoothly with proper synchronization to keep everything in check when multiple threads are doing their thing. Plus, its scalable, so it can grow with demand. Clients can even set their own filters to get just the RSS content they want. My Experience Working on this project was shortly an experience. The framework itself is quite pleasant but the talkativeness of c++ not so much. I really enjoyed the ease of usage of the Qt threads compared to std threads. Also his project really boosted my app development skills especially usage of c++ specific things and network communication.',
		shortDescription:
			'A rss proxy implementation with usage of Qt framework for c++',
		links: [{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' }],
		logo: Assets.Qt,
		name: 'Rss Proxy Server',
		period: {
			from: new Date()
		},
		skills: getSkills('cpp', 'qt'),
		type: 'Http Server'
	},
	{
		slug: 'tournament-manager',
		color: '#ff3e00',
		description:
			'I put together with a colleague a tournament manager app using React, Express, Next.js, and Prisma. It makes setting up and running tournaments a breeze. Users can easily create, manage, and join competitions. The back-end, built with Express , ensures everything runs smoothly and quickly, while Prisma handles all the database work efficiently. Working on this project was a great experience. I loved how React made building the front-end fun and straightforward. Express was super handy for setting up the server-side stuff, and Prisma made dealing with the database a lot easier. Overall, this project really helped me sharpen my full-stack development skills and learn how to seamlessly integrate different technologies. Also afterwards i made a C# based backend with Entity Framework and Asp.net that functions very similiar to this one.',
		shortDescription:
			'Tournament manager made with React, Express, Next, Prisma',
		links: [{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' }],
		logo: Assets.ExpressJs,
		name: 'Tournament manager',
		period: {
			from: new Date()
		},
		skills: getSkills('express','csharp'),
		type: 'Web app'
	},
	{
		slug: 'backrooms-game',
		color: '#ff3e00',
		description:
			'I put together with a colleague a tournament manager app using React, Express, Next.js, and Prisma. It makes setting up and running tournaments a breeze. Users can easily create, manage, and join competitions. The back-end, built with Express , ensures everything runs smoothly and quickly, while Prisma handles all the database work efficiently. Working on this project was a great experience. I loved how React made building the front-end fun and straightforward. Express was super handy for setting up the server-side stuff, and Prisma made dealing with the database a lot easier. Overall, this project really helped me sharpen my full-stack development skills and learn how to seamlessly integrate different technologies.',
		shortDescription:
			'Tournament manager made with React, Express, Next, Prisma',
		links: [{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' }],
		logo: Assets.ExpressJs,
		name: 'Tournament manager',
		period: {
			from: new Date()
		},
		skills: getSkills('express','csharp'),
		type: 'Web app'
	},
	{
		slug: 'tournament-manager',
		color: '#ff3e00',
		description:
			'I put together with a colleague a tournament manager app using React, Express, Next.js, and Prisma. It makes setting up and running tournaments a breeze. Users can easily create, manage, and join competitions. The back-end, built with Express , ensures everything runs smoothly and quickly, while Prisma handles all the database work efficiently. Working on this project was a great experience. I loved how React made building the front-end fun and straightforward. Express was super handy for setting up the server-side stuff, and Prisma made dealing with the database a lot easier. Overall, this project really helped me sharpen my full-stack development skills and learn how to seamlessly integrate different technologies.',
		shortDescription:
			'Tournament manager made with React, Express, Next, Prisma',
		links: [{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' }],
		logo: Assets.ExpressJs,
		name: 'Tournament manager',
		period: {
			from: new Date()
		},
		skills: getSkills('express','csharp'),
		type: 'Web app'
	}
];

export const title = 'Projects';
