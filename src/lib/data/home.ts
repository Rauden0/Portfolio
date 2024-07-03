import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Martin';

export const lastName = 'Můčka';

export const description =
	'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, rerum. Debitis accusantium deleniti enim iste dignissimos? Similique, exercitationem! Odit vero, numquam quae ratione maxime sunt reiciendis laudantium quaerat iure ipsum!';

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

export const skills = getSkills('C', 'C++', 'C#', 'Godot', 'Qt', 'Express.js');
