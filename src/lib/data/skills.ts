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
    description: 'I switched to Godot in early 2023 from Unity, drawn to its innovative approach. While experimenting with game development, I encountered challenges due to Godot newness, including limited support for my ideas and performance issues. Despite these hurdles, the experience broadened my skills and deepened my understanding of game development with emerging technologies.',
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
  }),
  defineSkill({
    slug: 'rust',
    color: 'orange',
    description:
      'I used Rust while building Colonist, a multiplayer board game clone for a university course. The backend runs on Actix-web with PostgreSQL, and the frontend compiles to WebAssembly via Yew. Rust ownership and type system helped keep shared game logic safe across the server and client crates.',
    logo: Assets.Rust,
    name: 'Rust',
    category: 'pro-lang'
  }),
  defineSkill({
    slug: 'go',
    color: '#00add8',
    description:
      'I picked up Go while rewriting BubuTracker\'s backend from a C#/.NET API into something smaller I wanted to run and maintain myself. Its small standard library and explicit error handling took some adjusting coming from C#, but the layered handler-service-repository structure it encouraged, plus first-class table-driven tests, made the backend far easier to reason about and cover with tests than the .NET version was.',
    logo: Assets.Go,
    name: 'Go',
    category: 'pro-lang'
  }),
  defineSkill({
    slug: 'typescript',
    color: '#3178c6',
    description:
      'I used TypeScript to build BubuTracker\'s iOS client with Expo and React Native, sharing the same Auth0 tenant and Go backend as the Android app. Porting the same session-refresh and caching logic from Kotlin to TypeScript by hand was a good exercise in keeping business rules consistent across two very different client stacks.',
    logo: Assets.TypeScript,
    name: 'TypeScript',
    category: 'pro-lang'
  }),
  defineSkill({
    slug: 'python',
    color: '#3776ab',
    description:
      'Python is my main language at work. For 2+ years at Development777 I have been building high-throughput backend microservices and data pipelines with it, focusing on API performance, async processing, and clean service boundaries.',
    logo: Assets.Python,
    name: 'Python',
    category: 'pro-lang'
  }),
  defineSkill({
    slug: 'fastapi',
    color: '#009688',
    description:
      'I use FastAPI to build high-throughput REST APIs as part of a microservices architecture. It helped us cut bottlenecks around request handling and keep service contracts explicit while staying close to Python type hints.',
    logo: Assets.FastApi,
    name: 'FastAPI',
    category: 'framework'
  }),
  defineSkill({
    slug: 'flask',
    color: '#000000',
    description:
      'I use Flask alongside FastAPI for backend services at Development777. It is a solid fit for lighter HTTP services in our microservices setup and for iterating quickly on internal APIs.',
    logo: Assets.Flask,
    name: 'Flask',
    category: 'framework'
  }),
  defineSkill({
    slug: 'rabbitmq',
    color: '#ff6600',
    description:
      'I integrated RabbitMQ for asynchronous data processing so services stay stable under high load. It decouples producers from consumers and lets us absorb traffic spikes without blocking API threads.',
    logo: Assets.RabbitMQ,
    name: 'RabbitMQ',
    category: 'devtools'
  }),
  defineSkill({
    slug: 'docker',
    color: '#2496ed',
    description:
      'I containerize microservices with Docker to keep local environments close to production and to streamline CI/CD delivery. Most of the services I work on run as containers from development through deployment.',
    logo: Assets.Docker,
    name: 'Docker',
    category: 'devops'
  }),
  defineSkill({
    slug: 'postgresql',
    color: '#336791',
    description:
      'PostgreSQL is the primary relational store in the systems I work on. I have also used TimescaleDB partitioning on top of it to keep time-series query performance acceptable as data volume grows.',
    logo: Assets.PostgreSQL,
    name: 'PostgreSQL',
    category: 'db'
  }),
  defineSkill({
    slug: 'mongodb',
    color: '#47a248',
    description:
      'I use MongoDB as part of a hybrid persistence strategy next to PostgreSQL, storing document-shaped data that does not fit a rigid relational model well.',
    logo: Assets.MongoDB,
    name: 'MongoDB',
    category: 'db'
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
