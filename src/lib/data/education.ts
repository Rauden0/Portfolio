import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: "Master's degree in Software Engineering",
		description: '',
		location: 'Brno',
		logo: Assets.Unknown,
		name: 'Design and Development of Software Systems',
		organization: 'Masaryk University, Faculty of Informatics',
		period: { from: new Date(2025, 8, 1) },
		shortDescription:
			'Second-year follow-up master’s in Software Engineering (N-SWE), specializing in Design and Development of Software Systems (expected June 2027). Coursework covers software architecture, distributed systems, databases, information security, .NET, Rust, and AI for software professionals.',
		slug: 'master-cs',
		subjects: [
			'Software Architecture',
			'C# / .NET',
			'Rust',
			'Database Systems',
			'Distributed Systems',
			'Information Security',
			'Software Quality',
			'AI for Software Professionals'
		]
	},
	{
		degree: "Bachelor's degree in Computer Science",
		description: '',
		location: 'Brno',
		logo: Assets.Unknown,
		name: 'Programming and Application Development',
		organization: 'Masaryk University, Faculty of Informatics',
		period: { from: new Date(2022, 8, 1), to: new Date(2025, 5, 1) },
		shortDescription:
			'Completed a 3-year bachelor’s in Programming and Application Development, covering software development, programming, software engineering, web technologies, and mobile apps.',
		slug: 'bachelor-cs',
		subjects: ['C', 'Algorithms', 'Python', 'C++', 'Java', 'C#', 'Flutter', 'English']
	}
];

export const title = 'Education';
