'use client';

import SectionReveal from './SectionReveal';

const testimonials = [
  {
    name: 'Rajat Rathee',
    position: 'IT Manager, WI Energy',
    content: "Vignesh's leadership has been instrumental in our company's digital transformations. His ability to navigate complex technical challenges while keeping the team motivated is truly remarkable.",
  },
  {
    name: 'Chandramouli Dorai',
    position: 'Chief Evangelist — Cyber Solutions & Digital Signatures, Zoho Corporation',
    content: "Vignesh's technical expertise helped Zoho Vault scale quickly while delivering a great user experience. Known for his empathy towards customers, he consistently goes above and beyond to understand their needs. His leadership in optimizing performance and security significantly boosted user satisfaction.",
  },
  {
    name: 'Hariharan Lakshmanan',
    position: 'Member Leadership Staff, Zoho Corporation',
    content: "As a team member who has worked with Vignesh, I've experienced tremendous professional growth. His mentorship and technical expertise have been invaluable to my career development.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-gray-900">
      <div className="w-full px-12 md:px-20">
        <SectionReveal>
          <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">
            Testimonials
          </h2>
        </SectionReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((t, index) => (
            <SectionReveal key={index} delay={index * 120}>
              <div className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-6 h-full flex flex-col hover:border-purple-800/50 transition-colors duration-300">
                <div className="text-4xl text-purple-500 leading-none mb-3 font-serif">&ldquo;</div>
                <p className="text-gray-300 text-sm leading-relaxed italic flex-1 mb-6">
                  {t.content}
                </p>
                <div className="border-t border-gray-700/50 pt-4">
                  <p className="font-semibold text-white text-sm">{t.name}</p>
                  <p className="text-purple-400 text-xs mt-1">{t.position}</p>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;