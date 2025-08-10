'use client';
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";

type Skill = { name: string; icon: string };
type Group = { title: string; items: Skill[] };

const GROUPS: Group[] = [
  {
    title: "Languages",
    items: [
      { name: "TypeScript", icon: "/skills/languages/typescript.svg" },
      { name: "JavaScript", icon: "/skills/languages/js.svg" },
      { name: "Bootstrap", icon: "/skills/languages/bootstrap.svg" },
      { name: "CSS", icon: "/skills/languages/css.svg" },
      { name: "Dart", icon: "/skills/languages/dart.svg" },
      { name: "Go", icon: "/skills/languages/go.svg" },
      { name: "HTML", icon: "/skills/languages/html.svg" },
      { name: "Python", icon: "/skills/languages/python.svg" },
      { name: "Tailwind", icon: "/skills/languages/tailwind.svg" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    items: [
      { name: "Flutter", icon: "/skills/framework/flutter.svg" },
      { name: "Laravel", icon: "/skills/framework/laravel.svg" },
      { name: "React", icon: "/skills/framework/react.svg" },
      { name: "Next.js", icon: "/skills/framework/next-js.svg" },
      { name: "Vue", icon: "/skills/framework/vue.svg" },
      { name: "Express", icon: "/skills/framework/express.svg" },
      { name: "Node Js", icon: "/skills/framework/node.svg" },
      { name: "Angular", icon: "/skills/framework/angular.svg" },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "GitHub",  icon: "/skills/tools/github.svg" },
      { name: "Jira",    icon: "/skills/tools/jira.svg" },
      { name: "Figma",   icon: "/skills/tools/figma.svg" },
      { name: "Trello",  icon: "/skills/tools/trello.svg" },
      { name: "Vercel",  icon: "/skills/tools/vercel.svg" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="mt-20">
      <motion.h2
        variants={fadeUp(0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-2xl sm:text-3xl font-bold"
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
            className="rounded-xl border border-white/10 bg-slate-900/60 p-5 backdrop-blur"
          >
            <h3 className="text-lg font-semibold">{g.title}</h3>

            <motion.ul
              variants={stagger(0.06)}
              className="mt-4 grid grid-cols-6 sm:grid-cols-8 gap-3 place-items-center"
            >
              {g.items.map((s) => (
                <motion.li
                  key={s.name}
                  variants={fadeUp(0)}
                  whileHover={{ scale: 1.12, y: -2 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                >
                  <img
                    src={s.icon}
                    alt={s.name}
                    title={s.name}
                    aria-label={s.name}
                    className="h-8 w-8 opacity-90 transition-opacity hover:opacity-100"
                  />
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
