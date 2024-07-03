import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'Bachelor degree of Computer Science',
		description: '',
		location: 'Tunisia',
		logo: Assets.Unknown,
		name: '',
		organization: 'ISTIC',
		period: { from: new Date(2020, 0, 1), to: new Date(2022, 5, 1) },
		shortDescription: '',
		slug: 'dummy-education-item',
		subjects: ['C', 'Algorithm', 'Algebra', 'Python', 'C++', 'Java', 'English']
	},
	{
		degree: 'PhD of Computer Science',
		description: '',
		location: 'USA',
		logo: Assets.Unknown,
		name: '',
		organization: 'MIT',
		period: { from: new Date(2023, 0, 1) },
		shortDescription: '',
		slug: 'dummy-education-item-2',
		subjects: ['Assembly', 'Rust', 'Computer Architecture', 'Algorithms and Data structures']
	},
	{
		degree: 'Bachelor degree of Computer Science',
		description: '',
		location: 'Brno',
		logo: Assets.Unknown,
		name: '',
		organization: '',
		period: { from: new Date(2022, 9, 1), to: new Date(2025, 7, 1) },
		shortDescription: 'Masaryk University Bachelor in Programming and Application Development teaches practical skills in software development, including programming, software engineering, web technologies, and mobile apps, preparing graduates for careers in technology.',
		slug: 'dummy-education-item',
		subjects: ['C', 'Algorithm', 'Algebra', 'Python', 'C++', 'Java', 'English','C#']
	}
];

export const title = 'Education';
