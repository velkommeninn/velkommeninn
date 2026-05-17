import type { FAQ } from "@/data/faqs";

interface FAQSectionProps {
  faqs: FAQ[];
}

export default function FAQSection({ faqs }: FAQSectionProps) {
  return (
    <div className="space-y-5" itemScope itemType="https://schema.org/FAQPage">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="bg-white rounded-lg border border-gray-100 shadow-sm p-6"
          itemScope
          itemProp="mainEntity"
          itemType="https://schema.org/Question"
        >
          <h2
            className="text-base font-bold font-serif text-[#1a2e4a] mb-3"
            itemProp="name"
          >
            {faq.question}
          </h2>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p className="text-sm text-gray-700 leading-relaxed font-sans" itemProp="text">
              {faq.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
