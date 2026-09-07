import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const EASE = [0.16, 1, 0.3, 1] as const;

const faqs = [
  {
    q: 'How soon can you deliver?',
    a: 'Most reels are delivered within 3–5 working days. Bulk packages are scheduled around the shoot plan agreed during consultation.',
  },
  {
    q: 'Do you travel outside the city?',
    a: 'Yes. Travel, transport and accommodation are billed separately when a shoot is outside our base location.',
  },
  {
    q: 'What is the booking process?',
    a: 'A 50% advance confirms your slot. The balance is cleared on or before final delivery.',
  },
  {
    q: 'Do you provide scripting and creative direction?',
    a: 'Every package includes concept planning, shot listing and creative direction before the camera rolls.',
  },
  {
    q: 'Will I get the raw footage?',
    a: 'Raw footage is not shared by default, but it can be arranged if discussed and agreed in advance.',
  },
  {
    q: 'Can you shoot with drones?',
    a: 'Yes. Our drone and camera package covers aerial coverage wherever permissions allow.',
  },
];

const FAQ = () => (
  <section id="faq" className="relative py-24 md:py-32">
    <div className="container mx-auto max-w-3xl px-4 md:px-6">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-10% 0px' }}
        transition={{ duration: 0.9, ease: EASE }}
      >
        <p className="mb-3 text-xs uppercase tracking-[0.35em] text-primary">FAQ</p>
        <h2 className="font-display text-4xl md:text-6xl">Good To Know</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-10% 0px' }}
        transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
        className="mt-12"
      >
        <Accordion type="single" collapsible>
          {faqs.map((f) => (
            <AccordionItem
              key={f.q}
              value={f.q}
              className="mb-3 rounded-2xl border border-white/10 bg-white/[0.03] px-5 backdrop-blur-xl transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_40px_hsl(var(--primary)/0.18)]"
            >
              <AccordionTrigger className="text-left hover:no-underline">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  </section>
);

export default FAQ;
