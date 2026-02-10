import JoinNowForm from './JoinNowForm';
import Image from 'next/image';

const benefits = [
  'Early access to new and limited-edition gins',
  'Invitations to exclusive tastings and events',
  'Mixology tips and cocktail inspiration',
  'Personal updates from the Ginkins team',
  'Special perks just for insiders',
];

export default function SubscribeContainer() {
  return (
    <section className="w-full bg-[#fbf4e6] py-28 px-5 lg:px-20 xl:pl-74.5 xl:pr-57.75">
      <div className="mx-auto ">
        <div className="mx-auto text-center">
          <p className="text-lg leading-6.75 font-medium text-(--primary-black)">
            This isn’t just a mailing list. It’s a front-row seat to everything
            we’re creating—and an invitation to be part of it. When you join the
            Inner Circle, you’ll get early access to limited releases, private
            tastings, and behind-the-scenes peeks at what’s brewing (or
            distilling) at Ginkins HQ.
          </p>
          <div className="mt-10">
            <JoinNowForm />
          </div>
          <p className="mt-4 text-[14px] text-(--primary-black) leading-5.25">
            By clicking Sign Up you&apos;re confirming that you agree with our
            Terms and Conditions.
          </p>
        </div>
        <div className="mt-20.75 grid gap-16 lg:grid-cols-2 px-5 xs:px-17 lg:px-0">
          <h4 className="text-(--primary-black)! text-center lg:text-left">
            As a Member,
            <br />
            You’ll Get:
          </h4>
          <ul className="space-y-10 mx-auto lg:mx-0">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex gap-x-6 gap-y-0 mb-0">
                <div className="flex flex-col items-center">
                  <Image
                    src="/subscribe/icon-bullet.svg"
                    alt=""
                    width={41}
                    height={41}
                    aria-hidden
                  />
                  {index !== benefits.length - 1 && (
                    <span className="my-4 h-6 w-px bg-black/30" />
                  )}
                </div>
                <p className="text-lg leading-6.75 font-medium text-(--primary-black)">
                  {benefit}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
