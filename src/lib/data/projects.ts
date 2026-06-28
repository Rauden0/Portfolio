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
      from: new Date(2023, 10, 1),
      to: new Date(2023, 12, 10)
    },
    skills: getSkills('cpp', 'qt'),
    type: 'Http Server'
  },
  {
    slug: 'dm-companion',
    color: '#5e95e3',
    description:
      'I developed a DM companion app in Flutter that helps Dungeon Masters manage their campaigns more effectively. The app provides features for note-taking, tracking encounters, and documenting fights, making it easier to keep the game organized and flowing smoothly. Flutter’s cross-platform capabilities allowed me to build a clean and responsive interface that works seamlessly on both Android and iOS. One of the most rewarding parts of this project was designing a UI tailored for DMs—fast, intuitive, and optimized for quick access during gameplay. Flutter made it simple to create visually appealing layouts, while Dart’s structure supported efficient state management for storing and updating notes and combat logs. Working on this project gave me valuable experience in mobile app development, state management, and UI/UX design. I especially enjoyed solving challenges related to real-time data handling during encounters, ensuring that the app remained responsive even as more notes and fight details were logged. The only drawback I found was that while Flutter has excellent documentation for common use cases, handling more specialized or edge-case scenarios often required digging into community discussions or experimenting with custom solutions.',
    shortDescription:
      'A DM companion app made with Flutter for managing campaigns',
    links: [{ to: 'https://github.com/Rauden0/Projects', label: 'GitHub' }],
    logo: Assets.Flutter,
    name: 'Dm Companion',
    period: {
      from: new Date(2024, 10, 1),
      to: new Date(2025, 1, 10)
    },
    skills: getSkills('flutter', 'dart', 'firebase'),
    type: 'Multi-platform app'
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
      from: new Date(2024, 4, 1),
      to: new Date(2024, 6, 1)
    },
    skills: getSkills('express', 'csharp'),
    type: 'Web app'
  },
  {
    slug: 'airport-manager',
    color: '#ff3e00',
    description:
      'Together with colleagues, I developed an Airport Manager web application using Java Spring Boot, designed to manage airports, flights, airplanes, and crew. The system provides a clean REST API for all the core CRUD operations needed in an airport management environment. We integrated Prometheus and Grafana for monitoring and real-time metric visualization, which made it easy to spot performance issues and understand how the system behaved under load. For reliable communication between different services, we used Apache ActiveMQ, which handled event-driven messaging smoothly. Working on this project gave us hands-on experience with backend development, system observability, and distributed communication. I especially enjoyed collaborating with my teammates to design scalable solutions and seeing how all the parts came together into a functional system.',
    shortDescription:
      'Airport manager made with Java Spring Boot',
    links: [{ to: 'https://github.com/Rauden0/Projects', label: 'GitHub' }],
    logo: Assets.Java,
    name: 'Airport manager',
    period: {
      from: new Date(2025, 2),
      to: new Date(2025, 6)
    },
    skills: getSkills('java', 'springboot'),
    type: 'Web app'
  },
  {
    slug: 'backrooms-game',
    color: '#ff3e00',
    description:
      'I created a Backrooms game with a collague using Godot and C#. In this game, players explore the eerie and endless maze of the Backrooms, trying to survive while navigating its creepy and disorienting environment. Godot made it super easy to design the game world and implement all the creepy visuals and mechanics, while C# was great for scripting the game’s logic and interactions. The game runs smoothly almost smoothly only hiccup is that baking a navmesh compared to other engines runs in a main thread and cannot be moved to the separate thread so the game laggs for very short period of time. Working on this project was a quite an enjoyable experience. Godot’s user-friendly interface and powerful features made game development enjoyable, and I appreciated how C# allowed for clean and efficient coding. This project was a fantastic way to improve my game development skills and learn how to create an immersive and engaging experience. Only bad thing that i want to point out about Godot is its lack of learning resources and quite bad handling of some edge cases.',
    shortDescription: 'Backrooms game made with Godot and C#',
    links: [{ to: 'https://github.com/Rauden0/Projects', label: 'GitHub' }],
    logo: Assets.Godot,
    name: 'Backrooms Game',
    period: {
      from: new Date(2023, 10, 1),
      to: new Date(2023, 12, 10)
    },
    skills: getSkills('godot', 'csharp'),
    type: 'Desktop app'
  },
  {
    slug: 'bubu-tracker',
    color: '#ff3e00',
    description:
      'WIP.I am developing a location tracker app using Kotlin, C#, and AWS. This app should allow user to track and share their real-time location with friends and family. Built with Kotlin, the Android app should offer a smooth and responsive user experience. On the backend, C# and .NET power the API, handling data requests and user management efficiently. AWS hosts the database. With AWS services, the app can handle a growing number of users and their location data without any issues. Currently this is work in progress .So far android development suits me quite nicely. Only hiccup i had so far was that i tried to use gRPC for comunication but unfortunately kotlin lacks a good support for gRPC.',
    shortDescription:
      'Location tracker app made with kotlin, c# (api.net) and aws',
    links: [{ to: 'https://github.com/Rauden0/Projects', label: 'GitHub' }],
    logo: Assets.Kotlin,
    name: 'Bubu tracker',
    period: {
      from: new Date(2024, 6, 1),
    },
    skills: getSkills('kotlin', 'csharp', 'aws'),
    type: 'Mobile app'
  },
  {
    slug: 'bookhub',
    color: '#5e95e3',
    description:
      'I developed BookHub as part of the PV179 – Modern Programming Platforms (.NET) course at Masaryk University. It is a Web API for managing and selling books, with CRUD operations for books, authors, publishers, and genres, plus wish lists, orders, and reviews. The system distinguishes User and Admin roles—users can browse, order, and review books, while admins manage the catalog. I built it using ASP.NET Core Web API with a layered architecture: controllers, a service layer, and a Data Access Layer backed by Entity Framework Core. Custom authentication and logging middleware handle request validation and auditing. Working on this project deepened my understanding of .NET Web APIs, EF Core migrations, and designing RESTful endpoints with proper separation of concerns.',
    shortDescription:
      'Book catalog and sales Web API built with ASP.NET Core and EF Core',
    links: [{ to: 'https://github.com/Rauden0/Projects/tree/main/BookHub', label: 'GitHub' }],
    logo: Assets.Csharp,
    name: 'BookHub',
    period: {
      from: new Date(2024, 9, 1),
      to: new Date(2024, 12, 15)
    },
    skills: getSkills('csharp'),
    type: 'Web app'
  },
  {
    slug: 'colonist',
    color: '#ff3e00',
    description:
      'I built Colonist as a college project for PV281, recreating the popular online board game Colonist.io. Players gather resources, build roads and settlements, trade with others, and race to 10 victory points. The full stack uses a Rust Actix-web backend for game logic and database persistence, a Yew WebAssembly frontend with a Canvas-based game board, and a shared crate for common types and resource management. PostgreSQL stores game state, and the project runs as three services: database, backend server, and Trunk-served frontend. I enjoyed working across the Rust ecosystem—especially coordinating real-time game state between server and client—and this project strengthened my skills in systems programming, WASM, and multiplayer game architecture.',
    shortDescription:
      'Multiplayer Colonist.io clone with Rust backend and Yew WASM client',
    links: [{ to: 'https://github.com/Rauden0/Projects/tree/main/Colonist', label: 'GitHub' }],
    logo: Assets.Rust,
    name: 'Colonist',
    period: {
      from: new Date(2025, 1, 1),
      to: new Date(2025, 5, 30)
    },
    skills: getSkills('rust'),
    type: 'Web app'
  }
];

export const title = 'Projects';
