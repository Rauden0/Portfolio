import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Martin';

export const lastName = 'Můčka';

export const description ='I am a creative app developer and a student at Masarykova Univerzita, passionate about learning new programming languages, with a particular interest in C#.  I actively explore innovative solutions and technologies to enhance user experiences.';

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/Rauden0' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/martin-m%C5%AF%C4%8Dka-5103832b7/'
	},
	{
		platform: Platform.Email,
		link: 'martin.mucka12@gmail.com'
	},

];

export const skills = getSkills('csharp', 'cpp', 'c', 'godot', 'qt', 'express');
