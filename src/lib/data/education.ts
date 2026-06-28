import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'Bachelor degree of Computer Science',
		description: '',
		location: 'Brno',
		logo: Assets.Unknown,
		name: 'Programming and Application Development',
		organization: 'Masaryk University',
		period: { from: new Date(2022, 9, 1), to: new Date(2025, 6, 1) },
		shortDescription:
			'Completed Masaryk University Bachelor in Programming and Application Development, covering software development, programming, software engineering, web technologies, and mobile apps.',
		slug: 'bachelor-cs',
		subjects: ['C', 'Algorithm', 'Algebra', 'Python', 'C++', 'Java', 'English', 'C#']
	},
	{
		degree: 'Master degree of Computer Science',
		description: '',
		location: 'Brno',
		logo: Assets.Unknown,
		name: 'Programming and Application Development',
		organization: 'Masaryk University',
		period: { from: new Date(2025, 8, 1) },
		shortDescription:
			'Currently in my first year of the Masaryk University Master in Programming and Application Development, building on my bachelor studies with advanced coursework in modern software platforms and application development.',
		slug: 'master-cs',
		subjects: ['.NET', 'Rust', 'Software Architecture', 'Web Technologies', 'English']
	}
];

export const title = 'Education';
