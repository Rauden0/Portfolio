import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'python-developer-dev777',
		company: 'Development777',
		description:
			'I work as a Python developer building high-throughput backend microservices and data pipelines.\n\n- Engineered a microservices architecture with Python, Flask, and FastAPI to resolve system bottlenecks and improve API performance.\n- Integrated RabbitMQ for asynchronous data processing so the system stays stable under high load.\n- Designed a scalable persistence strategy with PostgreSQL, MongoDB, and TimescaleDB partitioning to speed up time-series queries.\n- Containerized microservices with Docker to streamline CI/CD delivery and local development environments.',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Brno, Czechia',
		period: { from: new Date(2024, 8, 1) },
		skills: getSkills('python', 'fastapi', 'flask', 'rabbitmq', 'docker', 'postgresql', 'mongodb'),
		name: 'Python Developer',
		color: '#3776ab',
		links: [{ to: 'https://development777.cz', label: 'Company' }],
		logo: Assets.Python,
		shortDescription:
			'Building high-throughput Python microservices, async pipelines, and hybrid database backends.'
	}
];

export const title = 'Experience';
