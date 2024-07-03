import Assets from './assets';
import type { Skill, SkillCategory } from '../types';
import svelte from '../md/svelte.md?raw';
import { omit, type StringWithAutoComplete } from '@riadh-adrani/utils';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Programming Languages', slug: 'pro-lang' }),
	defineSkillCategory({ name: 'Frameworks', slug: 'framework' }),
	defineSkillCategory({ name: 'Libraries', slug: 'library' }),
	defineSkillCategory({ name: 'Langauges', slug: 'lang' }),
	defineSkillCategory({ name: 'Databases', slug: 'db' }),
	defineSkillCategory({ name: 'ORMs', slug: 'orm' }),
	defineSkillCategory({ name: 'DevOps', slug: 'devops' }),
	defineSkillCategory({ name: 'Testing', slug: 'test' }),
	defineSkillCategory({ name: 'Dev Tools', slug: 'devtools' }),
	defineSkillCategory({ name: 'Markup & Style', slug: 'markup-style' }),
	defineSkillCategory({ name: 'Design', slug: 'design' }),
	defineSkillCategory({ name: 'Soft Skills', slug: 'soft' })
] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

export const items = [
	defineSkill({
		slug: 'csharp',
		color: 'purple',
		description:
			' I ve been working with C# since high school, where I started by creating small and basic games in Unity. This early experience helped me grasp the fundamentals of C# and game development. After that, I continued using C# mainly with the Godot engine, working on a few small projects that further honed my skills in scripting and game mechanics. More recently, I ve been focusing on backend development with C#, especially using ASP.NET and MVC. I ve developed several apps where I ve applied my knowledge to build robust and efficient server-side logic. This journey has allowed me to deepen my understanding of C# and explore its versatility in different domains, from game development to backend services.',
		logo: Assets.Csharp,
		name: 'C#',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'c',
		color: 'blue',
		description:
			'I first encountered C during university, taking two courses that built a solid foundation in its fundamentals. I later attempted some projects on my Raspberry Pi, which didn t pan out but taught me a lot about lower-level programming. This experience with C was especially helpful when I transitioned to C++, as it shares many concepts. My background in C made learning C++ smoother and deepened my understanding of programming at a system level.',
		logo: Assets.C,
		name: 'C',
		category: 'pro-lang'
	  })
	,
	defineSkill({
		slug: 'cpp',
		color: 'green',
		description:
		  'I first encountered C++ in university during a course focused on Qt, where I created several projects, mainly involving network programming. This experience helped me understand C++ complexities and practical applications. Later, I delved deeper into C++ by exploring the Unreal Engine, which further enhanced my skills and knowledge in game development and advanced programming concepts.',
		logo: Assets.Cpp,  
		name: 'C++',
		category: 'pro-lang'
	  })
	,
	defineSkill({
		slug: 'qt',
		color: 'orange',
		description:
		  'I first dived into Qt during university, focusing on its robust features for server-side and networking projects. Using Qt, I developed various applications that involved handling network communications efficiently. This experience was pivotal in deepening my understanding of Qts capabilities beyond GUI development, showing me how to create reliable and scalable server applications with ease.',
		logo: Assets.Qt,
		name: 'Qt',
		category: 'framework'
	  })
	,
	defineSkill({
		slug: 'godot',
		color: 'yellow',
		description:'I switched to Godot in early 2023 from Unity, drawn to its innovative approach. While experimenting with game development, I encountered challenges due to Godot newness, including limited support for my ideas and performance issues. Despite these hurdles, the experience broadened my skills and deepened my understanding of game development with emerging technologies.',
		logo: Assets.Godot,
		name: 'Godot',
		category: 'game-engine'
	  }),
	  defineSkill({
		slug: 'express',
		color: 'yellow',
		description:
		  'I started diving into Express, JavaScript, and TypeScript in early 2024, mainly while building a tournament manager app. It was my big project, but I also tinkered with smaller ones to practice different parts of the setup. TypeScript and JavaScript were cool to work with—Express especially stood out for its simplicity in handling server-side stuff.',
		logo: Assets.ExpressJs,
		name: 'ExpressJs',
		category: 'framework'
	  }),
	  defineSkill({
		slug: 'kotlin',
		color: 'yellow',
		description:
		  'I recently started learning Kotlin, and having some background in Java has been really helpful. Kotlin feels familiar yet different in a good way—I m enjoying how it streamlines certain aspects compared to Java. I m optimistic that as I continue, I ll keep finding it enjoyable and maybe even discover more ways it simplifies things.',
		logo: Assets.Kotlin,
		name: 'Kotlin',
		category: 'pro-lang'
	  })
] as const;

export const title = 'Skills';

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => items.filter((it) => slugs.includes(it.slug));

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			console.log(item.category);
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};
