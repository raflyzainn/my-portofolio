'use client';
import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/motion';
import { skillCategories } from '@/data/portfolio';

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-20 py-9 border-b border-[--border-subtle]"
    >
      <motion.div
        variants={fadeUp(0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        <p className="text-xs tracking-wide text-[--text-muted] mb-4">
          skills
        </p>

        <div className="space-y-6">
          {skillCategories.map((category) => {
            const primarySkills = category.skills.filter((s) => s.primary);
            const secondarySkills = category.skills.filter((s) => !s.primary);

            return (
              <div key={category.name}>
                <h3 className="text-[13px] font-medium text-[--text-primary] mb-2">
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {primarySkills.map((skill) => (
                    <span
                      key={skill.label}
                      className="text-xs px-3 py-1 rounded-full bg-[#FAECE7] text-[#712B13]"
                    >
                      {skill.label}
                    </span>
                  ))}
                  {secondarySkills.map((skill) => (
                    <span
                      key={skill.label}
                      className="text-xs px-3 py-1 rounded-full bg-[--bg-raised] text-[--text-secondary]"
                    >
                      {skill.label}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
