import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [
	{
		slug: 'rss-proxy-server',
		color: '#5e95e3',
		description:
			'I built Qt-based HTTP server that works as an RSS proxy. It grabs RSS feeds from different sources. The server can handle lots of client requests at the same time, thanks to Qt’s threading, so it stays fast and responsive. I made sure it runs smoothly with proper synchronization to keep everything in check when multiple threads are doing their thing. Plus, its scalable, so it can grow with demand. My experience working on this project was shortly an wild experience. The framework itself is quite pleasant but the talkativeness of c++ not so much. I really enjoyed the ease of usage of the Qt threads compared to std threads. Also his project really boosted my app development skills especially usage of c++ specific things and network communication.',
		shortDescription:
			'A rss proxy implementation with usage of Qt framework for c++',
		links: [{ to: 'https://github.com/Rauden0/Projects', label: 'GitHub' }],
		logo: Assets.Qt,
		name: 'Rss Proxy Server',
		period: {
			from: new Date(2023,10,1),
			to: new Date(2023,12,10)
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
		links: [{ to: 'https://github.com/Rauden0/Projects', label: 'GitHub' }],
		logo: Assets.ExpressJs,
		name: 'Tournament manager',
		period: {
			from: new Date(2024,4,1),
			to: new Date(2024,6,1)
		},
		skills: getSkills('express','csharp'),
		type: 'Web app'
	},
	{
		slug: 'backrooms-game',
		color: '#ff3e00',
		description:
			'I created a Backrooms game with a collague using Godot and C#. In this game, players explore the eerie and endless maze of the Backrooms, trying to survive while navigating its creepy and disorienting environment. Godot made it super easy to design the game world and implement all the creepy visuals and mechanics, while C# was great for scripting the game’s logic and interactions. The game runs smoothly almost smoothly only hiccup is that baking a navmesh compared to other engines runs in a main thread and cannot be moved to the separate thread so the game laggs for very short period of time. Working on this project was a quite an enjoyable experience. Godot’s user-friendly interface and powerful features made game development enjoyable, and I appreciated how C# allowed for clean and efficient coding. This project was a fantastic way to improve my game development skills and learn how to create an immersive and engaging experience. Only bad thing that i want to point out about Godot is its lack of learning resources and quite bad handling of some edge cases.',
		shortDescription:'Backrooms game made with Godot and C#',
		links: [{ to: 'https://github.com/Rauden0/Projects', label: 'GitHub' }],
		logo: Assets.Godot,
		name: 'Backrooms Game',
		period: {
			from: new Date(2023,10,1),
			to: new Date(2023,12,10)
		},
		skills: getSkills('godot','csharp'),
		type: 'Desktop app'
	},
	{
		slug: 'bubu-tracker',
		color: '#ff3e00',
		description:
			'WIP.I developed a location tracker app using Kotlin, C#, and AWS. This app allows users to track and share their real-time location with friends and family. Built with Kotlin, the Android app offers a smooth and responsive user experience. On the backend, C# and .NET power the API, handling data requests and user management efficiently. AWS hosts the server and database. With AWS services, the app can handle a growing number of users and their location data without any issues. Currently this is work in progress.So far android development suits me quite nicely. Only hiccup i had so far was that i tried to use gRPC for comunication but unfortunately kotlin lacks a good support for gRPC.',
		shortDescription:
			'Location tracker app made with kotlin, c# (api.net) and aws',
		links: [{ to: 'https://github.com/Rauden0/Projects', label: 'GitHub' }],
		logo: Assets.Kotlin,
		name: 'Bubu tracker',
		period: {
			from: new Date(2024,6,1),
		},
		skills: getSkills('kotlin','csharp','aws'),
		type: 'Mobile app'
	}
];

export const title = 'Projects';
