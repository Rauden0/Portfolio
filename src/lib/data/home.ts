import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Martin';

export const lastName = 'Můčka';

export const description =
	'Python developer with 2+ years of experience building high-throughput backend microservices and data pipelines. Master’s student in Software Engineering at Masaryk University, with a strong foundation in asynchronous processing (RabbitMQ), hybrid database architectures (PostgreSQL/MongoDB), and Docker. Actively expanding into Generative AI, RAG, and LLM integrations.';

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/Rauden0' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/martin-m%C5%AF%C4%8Dka-5103832b7/'
	},
	{
		platform: Platform.Email,
		link: 'martin.mucka12@gmail.com'
	}
];

export const skills = getSkills('python', 'fastapi', 'flask', 'csharp', 'docker', 'postgresql');
