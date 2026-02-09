import { Terms } from './TermsData';
import HelpFooter from '../HelpFooter';

export default function TermsSection() {
  return (
    <section className="bg-(--secondary-beige) pb-20 relative">
      <div className="mx-auto px-6">
        <div className="divide-y divide-black/20">
          {Terms.map((item) => {
            return (
              <div key={item.id} className="py-6">
                <span className="text-base font-bold leading-6 text-(--primary-black)">
                  {item.title}
                </span>
                <div className="grid transition-[grid-template-rows,opacity] duration-300 ease-in-out grid-rows-[1fr] opacity-100 mt-4">
                  <div className="overflow-hidden text-base font-normal leading-6 text-(--primary-black)">
                    {item.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <HelpFooter />
      </div>
    </section>
  );
}
