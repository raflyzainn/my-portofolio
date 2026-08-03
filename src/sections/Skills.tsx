'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeUp, stagger } from '@/lib/motion';

type Skill = { name: string; icon: string; core?: boolean };
type Group = { title: string; items: Skill[]; variant: 'base' | 'raised' };

const GROUPS: Group[] = [
  {
    title: 'Languages',
    variant: 'base',
    items: [
      { name: 'TypeScript', icon: '/skills/languages/typescript.svg' },
      { name: 'JavaScript', icon: '/skills/languages/js.svg' },
      { name: 'Bootstrap', icon: '/skills/languages/bootstrap.svg' },
      { name: 'CSS', icon: '/skills/languages/css.svg' },
      { name: 'Dart', icon: '/skills/languages/dart.svg' },
      { name: 'Go', icon: '/skills/languages/go.svg', core: true },
      { name: 'HTML', icon: '/skills/languages/html.svg' },
      { name: 'Python', icon: '/skills/languages/python.svg' },
      { name: 'Tailwind', icon: '/skills/languages/tailwind.svg' },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    variant: 'raised',
    items: [
      { name: 'Flutter', icon: '/skills/framework/flutter.svg' },
      { name: 'Laravel', icon: '/skills/framework/laravel.svg' },
      { name: 'React', icon: '/skills/framework/react.svg' },
      { name: 'Next.js', icon: '/skills/framework/next-js.svg', core: true },
      { name: 'Vue', icon: '/skills/framework/vue.svg', core: true },
      { name: 'Express', icon: '/skills/framework/express.svg' },
      { name: 'Node Js', icon: '/skills/framework/node.svg' },
      { name: 'Angular', icon: '/skills/framework/angular.svg' },
    ],
  },
  {
    title: 'Tools',
    variant: 'base',
    items: [
      { name: 'GitHub', icon: '/skills/tools/github.svg' },
      { name: 'Jira', icon: '/skills/tools/jira.svg' },
      { name: 'Figma', icon: '/skills/tools/figma.svg' },
      { name: 'Trello', icon: '/skills/tools/trello.svg' },
      { name: 'Vercel', icon: '/skills/tools/vercel.svg' },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills">
      <motion.h2
        variants={fadeUp(0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-2xl font-bold text-[--text-primary] sm:text-3xl"
      >
        Skills
      </motion.h2>

      <motion.div
        variants={stagger(0.12)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-6 grid gap-5 sm:grid-cols-2"
      >
        {GROUPS.map((g) => (
          <motion.div
            key={g.title}
            variants={fadeUp(0.05)}
            className={`rounded-xl border p-5 transition-colors duration-200 ${
              g.variant === 'raised'
                ? 'border-[--border-subtle] bg-[--bg-raised] hover:border-[--border-strong]'
                : 'border-[--border-subtle] bg-[--bg-base] hover:border-[--border-strong]'
            }`}
          >
            <h3 className="text-lg font-semibold text-[--text-primary]">
              {g.title}
            </h3>

            <motion.ul
              variants={stagger(0.06)}
              className="mt-4 grid grid-cols-6 place-items-center gap-3 sm:grid-cols-8"
            >
              {g.items.map((s) => (
                <motion.li
                  key={s.name}
                  variants={fadeUp(0)}
                  className="relative"
                >
                  <Image
                    src={s.icon}
                    alt={s.name}
                    title={s.name}
                    width={s.core ? 36 : 28}
                    height={s.core ? 36 : 28}
                    className="transition-[filter] duration-200"
                    priority={false}
                  />
                  {s.core && (
                    <span className="absolute -top-1 -right-1 rounded bg-[--accent-muted] px-1 py-px font-mono text-[8px] leading-none text-[--accent-on-muted]">
                      Core
                    </span>
                  )}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
