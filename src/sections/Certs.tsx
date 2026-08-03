'use client';
import { motion } from 'framer-motion';
import { fadeUp, stagger } from '@/lib/motion';

type Cert = {
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
};

type Hki = {
  title: string;
  type: string;
  number: string;
  date: string;
};

const CERTIFICATIONS: Cert[] = [
  {
    title: 'Contoh Sertifikasi 1',
    issuer: 'Nama Institusi',
    date: '2025',
    credentialUrl: 'https://example.com/credential/1',
  },
  {
    title: 'Contoh Sertifikasi 2',
    issuer: 'Nama Institusi',
    date: '2024',
  },
  {
    title: 'Contoh Sertifikasi 3',
    issuer: 'Nama Institusi',
    date: '2023',
  },
];

const HKI_LIST: Hki[] = [
  {
    title: 'Contoh HKI 1 — Judul Karya',
    type: 'Hak Cipta',
    number: 'EC002025XXXXX',
    date: '2025',
  },
  {
    title: 'Contoh HKI 2 — Judul Karya',
    type: 'Hak Cipta',
    number: 'EC002024XXXXX',
    date: '2024',
  },
];

export default function Certs() {
  return (
    <section id="certs">
      <motion.h2
        variants={fadeUp(0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-2xl font-bold text-[--text-primary] sm:text-3xl"
      >
        Certifications &amp; IP
      </motion.h2>

      {/* Certifications */}
      <motion.h3
        variants={fadeUp(0.02)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-6 mb-5 text-lg font-semibold text-[--text-primary]"
      >
        Certifications
      </motion.h3>

      <motion.ul
        variants={stagger(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.12 }}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {CERTIFICATIONS.map((c) => (
          <motion.li
            key={c.title}
            variants={fadeUp(0)}
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="rounded-xl border border-[--border-subtle] bg-[--bg-raised] p-4 shadow-[0_1px_3px_rgba(28,28,26,0.04)] transition-colors duration-200 hover:border-[--border-strong]"
          >
            {c.credentialUrl ? (
              <a
                href={c.credentialUrl}
                target="_blank"
                rel="noreferrer"
                className="block font-medium text-[--text-primary] transition-colors duration-150 hover:text-[--accent]"
              >
                {c.title}
                <span className="ml-1.5 inline-block text-[11px] text-[--text-muted]">
                  ↗
                </span>
              </a>
            ) : (
              <p className="font-medium text-[--text-primary]">{c.title}</p>
            )}
            <p className="mt-0.5 text-[13px] text-[--text-secondary]">
              {c.issuer}
            </p>
            <p className="mt-0.5 font-mono text-[11px] text-[--text-muted]">
              {c.date}
            </p>
          </motion.li>
        ))}
      </motion.ul>

      {/* HKI */}
      <motion.h3
        variants={fadeUp(0.02)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-12 mb-5 text-lg font-semibold text-[--text-primary]"
      >
        Intellectual Property (HKI)
      </motion.h3>

      <motion.ul
        variants={stagger(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.12 }}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {HKI_LIST.map((h) => (
          <motion.li
            key={h.number}
            variants={fadeUp(0)}
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="rounded-xl border border-[--border-subtle] bg-[--bg-raised] p-4 shadow-[0_1px_3px_rgba(28,28,26,0.04)] transition-colors duration-200 hover:border-[--border-strong]"
          >
            <p className="font-medium text-[--text-primary]">{h.title}</p>
            <div className="mt-1.5 flex items-center gap-2">
              <span className="inline-flex items-center rounded bg-[--accent-muted] px-1.5 py-0.5 font-mono text-[10px] text-[--accent-on-muted]">
                {h.type}
              </span>
              <span className="font-mono text-[11px] text-[--text-muted]">
                {h.number}
              </span>
            </div>
            <p className="mt-1 font-mono text-[10px] text-[--text-muted]">
              {h.date}
            </p>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
