import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
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
