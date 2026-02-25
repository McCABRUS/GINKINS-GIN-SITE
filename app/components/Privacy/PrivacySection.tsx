import { PrivacyItems } from './PrivacyData';
import HelpFooter from '../HelpFooter';

export default function PrivacySection() {
  return (
    <section className="bg-transparent w-screen pb-20 relative">
      <div className="mx-auto max-xl:px-5 max-3xl:px-37.25 md:max-w-480">
        {PrivacyItems.map((item) => {
          return (
            <div
              key={item.id}
              className="py-6 border border-(--secondary-gray-100) px-6 mb-4 rounded-lg"
            >
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
    </section>
  );
}
