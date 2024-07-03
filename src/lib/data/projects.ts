import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [
	{
		slug: 'rss-proxy-server',
		color: '#5e95e3',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
		shortDescription:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
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
			'I built a pretty neat Qt-based HTTP server that works as an RSS proxy. It grabs RSS feeds from different sources and sends them to clients in a nice, tidy way. The server can handle lots of client requests at the same time, thanks to Qt’s threading, so it stays fast and responsive. I made sure it runs smoothly with proper synchronization to keep everything in check when multiple threads are doing their thing. Plus, its scalable, so it can grow with demand. Clients can even set their own filters to get just the RSS content they want. My Experience Working on this project was shortly an experience. The framework itself is quite pleasant but the talkativeness of c++ not so much. I really enjoyed the ease of usage of the Qt threads compared to std threads. Also his project really boosted my app development skills especially usage of c++ specific things and network communication.',
		shortDescription:
			'A Vercel-like developer 	 website template made with Typescript and SvelteKit.',
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
