'use client';
import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/motion';
import { professionalExperiences, organizationalExperiences } from '@/data/portfolio';
import ExperienceItem from './ExperienceItem';

export default function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-20 py-9 border-b border-[--border-subtle]"
    >
      <motion.div
        variants={fadeUp(0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        <p className="text-xs tracking-wide text-[--text-muted] mb-4">
          experience
        </p>

        {/* Professional Experience */}
        <div className="mb-8">
          <h3 className="text-sm font-medium text-[--text-primary] mb-3">Professional</h3>
          <div>
            {professionalExperiences.map((item, i) => (
              <ExperienceItem
                key={item.id}
                item={item}
                index={i}
                isLast={i === professionalExperiences.length - 1}
              />
            ))}
          </div>
        </div>

        {/* Organizational Experience */}
        <div>
          <h3 className="text-sm font-medium text-[--text-primary] mb-3">Organizational</h3>
          <div>
            {organizationalExperiences.map((item, i) => (
              <ExperienceItem
                key={item.id}
                item={item}
                index={i}
                isLast={i === organizationalExperiences.length - 1}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
