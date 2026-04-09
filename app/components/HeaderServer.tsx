import HeaderClient from './HeaderClient';
import MobileMenu from './MobileMenu';
import HeaderScrollFade from './HeaderScrollFade';
import TrackableLink from './TrackableLink';
export default function HeaderServer() {
  return (
    <HeaderScrollFade>
      <nav
        className="max-w-360 mx-auto px-12 xl:px-6 py-6"
        aria-label="Main navigation"
      >
        <div className="grid grid-cols-[1fr] xl:grid-cols-[1fr_0.6fr_1fr] 2xl:grid-cols-[1fr_0.7fr_1fr] items-center justify-between">
          <div className="hidden xl:flex items-center gap-0 lg:gap-4 flex-wrap justify-between">
            <TrackableLink
              href="/about-ginkins"
              className="px-1 py-1 hover:underline"
              eventName="click_about_ginkins"
              location="header"
            >
              <h5 className="text-(--primary-gold-main)! inline">
                ABOUT GINKINS
              </h5>
            </TrackableLink>
            <span className="mx-3">•</span>
            <TrackableLink
              href="/our-gins"
              className="px-1 py-1 hover:underline"
              eventName="click_our_gins"
              location="header"
            >
              <h5 className="text-(--primary-gold-main)! inline">OUR GINS</h5>
            </TrackableLink>
            <span className="mx-3">•</span>
            <TrackableLink
              href="/where-to-buy"
              className="px-1 py-1 hover:underline"
              eventName="click_where_to_buy"
              location="header"
            >
              <h5 className="text-(--primary-gold-main)! inline">
                WHERE TO BUY
              </h5>
            </TrackableLink>
          </div>
          <div className="flex-1 hidden xl:flex justify-center mx-20">
            <TrackableLink
              href="/"
              className="text-(--primary-gold-main) hover:text-(--primary-red-main)"
              aria-label="Home"
              eventName="click_home"
              location="header"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="50"
                viewBox="0 0 70 50"
                fill="none"
              >
                <path
                  d="M22.36,9.75c.47.29.85.68,1.14,1.15.29.47.44.96.44,1.46-.5,0-.98-.15-1.45-.44s-.85-.68-1.14-1.15c-.29-.47-.44-.96-.44-1.47.5,0,.98.15,1.45.44M21.33,13.93c-.29.47-.44.96-.44,1.47.5,0,.98-.15,1.45-.44.47-.29.85-.68,1.14-1.15.29-.47.44-.96.44-1.46-.5,0-.98.15-1.45.44s-.85.68-1.14,1.15M21.08,24.37c3.41,0,5.68-1.16,8.83-2.33v-9.98h-2.87v8.71c-1.19,1.86-3.89,2.93-5.94,2.93-5.86,0-8.26-4.92-8.26-11.59S15.24.66,21.05.66s6.34,1.64,7.54,2.57V.53c-2.94-.21-4.57-.53-7.54-.53-8.2,0-11.2,5.66-11.2,12.12s3,12.25,11.24,12.25M35.24,3.89c.92,0,1.68-.77,1.68-1.7s-.76-1.7-1.68-1.7-1.68.77-1.68,1.7.76,1.7,1.68,1.7ZM33.56,23.83h3.84c-.26-1.19-.42-1.8-.42-3.07V5.85l-3.41,1.33c.26,1.19.42,1.8.42,3.07v10.51c0,1.27-.16,1.86-.42,3.07ZM41.02,23.83h3.84c-.26-1.19-.42-1.8-.42-3.07v-9.22c2.42-2.2,4.63-3.29,7.07-3.29s4.7,2.12,4.7,6.09v6.43c0,1.27-.16,1.86-.42,3.07h3.84c-.26-1.19-.42-1.8-.42-3.07v-7.96c0-4.73-3.87-6.22-6.54-6.22s-5.86,1.67-8.2,4.03v-4.76l-3.41,1.33c.26,1.19.42,1.8.42,3.07v10.51c0,1.27-.16,1.86-.42,3.07M17.52,46.86c-1.36-3.2-4.76-5.13-8.33-5.13s-3.57.47-5.15,1.5l8.8-7.2c2.15-1.73,3.21-2.62,4.23-3.33h-3.84c.23.74-.66,2.73-2.74,4.39l-7.07,5.72v-18.11l-3.43,1.34c.26,1.19.42,1.8.42,3.07v17.18c0,1.27-.16,1.86-.42,3.07h3.84c-.26-1.19-.42-1.8-.42-3.07v-1.4c.82-1.43,2.71-2.09,4.29-2.09,2.68,0,5.26,1.73,6.57,4.03.47.93.63,1.5.4,2.54h4.16c-.6-1-.86-1.59-1.29-2.49h-.03.01ZM21.02,27.71c0,.93.76,1.7,1.68,1.7s1.68-.77,1.68-1.7-.76-1.7-1.68-1.7-1.68.77-1.68,1.7ZM24.42,31.38l-3.41,1.33c.26,1.19.42,1.8.42,3.07v10.51c0,1.27-.16,1.86-.42,3.07h3.84c-.26-1.19-.42-1.8-.42-3.07v-14.91ZM46.65,38.34c0-4.73-3.87-6.22-6.54-6.22s-5.86,1.67-8.2,4.03v-4.76l-3.41,1.33c.26,1.19.42,1.8.42,3.07v10.51c0,1.27-.16,1.86-.42,3.07h3.84c-.26-1.19-.42-1.8-.42-3.07v-9.22c2.42-2.2,4.63-3.29,7.07-3.29s4.7,2.12,4.7,6.09v6.43c0,1.27-.16,1.86-.42,3.07h3.84c-.26-1.19-.42-1.8-.42-3.07v-7.96h-.01ZM53.38,36.46c0-2.86,3.87-3.63,7.64-3.63s5.68,1.64,6.75,2.57v-2.7c-2.65-.21-4.1-.53-6.75-.53-5.29,0-9.99,1.27-9.99,5.22,0,7.7,16.46,3.49,16.46,8.82,0,1.56-1.82,2.99-5.89,2.99s-7.47-1.99-10.44-5.16v3.73c2.81,1.8,7.04,2.09,10.35,2.09s7.94-.5,7.94-4.6c0-7.02-16.06-2.49-16.06-8.82"
                  fill="currentColor"
                />
              </svg>
            </TrackableLink>
          </div>
          <div className="flex">
            <div className="hidden xl:flex items-center gap-0 lg:gap-4">
              <TrackableLink
                href="/cocktails"
                className="px-1 py-1 hover:underline"
                eventName="click_cocktails"
                location="header"
              >
                <h5 className="text-(--primary-gold-main)! inline">
                  COCKTAILS &amp; PAIRINGS
                </h5>
              </TrackableLink>
              <span className="mx-3">•</span>
            </div>
            <div className="hidden xl:flex items-center xl:ml-4">
              <HeaderClient />
            </div>
            <div className="hidden xl:flex items-center gap-0 lg:gap-4 md:ml-4">
              <TrackableLink
                href="/subscribe"
                className="inline-block px-4 py-1 border border-(--primary-gold-main) rounded text-sm font-medium transition-colors group group-hover:text-(--primary-red-main) hover:border-(--primary-red-main)"
                eventName="click_subscribe"
                location="header"
              >
                <h5 className="text-(--primary-gold-main)! group-hover:text-(--primary-red-200)! inline">
                  SUBSCRIBE
                </h5>
              </TrackableLink>
            </div>
          </div>
          <div className="xl:hidden w-full flex justify-between">
            <div className="justify-start">
              <TrackableLink href="/" eventName="click_home" location="header">
                <div className="hidden max-lg:block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="22"
                    viewBox="0 0 19 22"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_2713_2152)">
                      <path
                        d="M11.835 8.79591C12.2757 9.06203 12.6382 9.41005 12.9083 9.83313C13.1785 10.2562 13.3206 10.6998 13.3206 11.1569C12.8444 11.1569 12.3895 11.0273 11.9416 10.7612C11.5009 10.5019 11.1384 10.1538 10.8683 9.72395C10.5982 9.29404 10.456 8.8505 10.456 8.40012C10.9323 8.40012 11.3872 8.52978 11.835 8.79591ZM10.8683 12.5831C10.5982 13.013 10.456 13.4566 10.456 13.9069C10.9323 13.9069 11.3872 13.7773 11.835 13.5112C12.2757 13.245 12.6382 12.897 12.9083 12.4739C13.1785 12.0509 13.3206 11.6073 13.3206 11.1501C12.8444 11.1501 12.3895 11.2798 11.9416 11.5459C11.5009 11.8052 11.1384 12.1532 10.8683 12.5831ZM10.6409 22C13.8679 22 16.0288 20.9491 19 19.8983V10.884H16.2776V18.7587C15.1474 20.4442 12.5814 21.4063 10.6409 21.4063C5.09652 21.4063 2.81481 16.9572 2.81481 10.9454C2.81481 4.93362 5.10363 0.600496 10.6124 0.600496C16.1212 0.600496 16.6259 2.07444 17.749 2.91377V0.477668C14.9626 0.300248 13.4272 0 10.6124 0C2.85036 0 0 5.11104 0 10.9386C0 16.7661 2.85036 22 10.6409 22Z"
                        fill="#E3D384"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2713_2152">
                        <rect width="19" height="22" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="block max-lg:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="70"
                    height="50"
                    viewBox="0 0 70 50"
                    fill="none"
                  >
                    <path
                      d="M22.36,9.75c.47.29.85.68,1.14,1.15.29.47.44.96.44,1.46-.5,0-.98-.15-1.45-.44s-.85-.68-1.14-1.15c-.29-.47-.44-.96-.44-1.47.5,0,.98.15,1.45.44M21.33,13.93c-.29.47-.44.96-.44,1.47.5,0,.98-.15,1.45-.44.47-.29.85-.68,1.14-1.15.29-.47.44-.96.44-1.46-.5,0-.98.15-1.45.44s-.85.68-1.14,1.15M21.08,24.37c3.41,0,5.68-1.16,8.83-2.33v-9.98h-2.87v8.71c-1.19,1.86-3.89,2.93-5.94,2.93-5.86,0-8.26-4.92-8.26-11.59S15.24.66,21.05.66s6.34,1.64,7.54,2.57V.53c-2.94-.21-4.57-.53-7.54-.53-8.2,0-11.2,5.66-11.2,12.12s3,12.25,11.24,12.25M35.24,3.89c.92,0,1.68-.77,1.68-1.7s-.76-1.7-1.68-1.7-1.68.77-1.68,1.7.76,1.7,1.68,1.7ZM33.56,23.83h3.84c-.26-1.19-.42-1.8-.42-3.07V5.85l-3.41,1.33c.26,1.19.42,1.8.42,3.07v10.51c0,1.27-.16,1.86-.42,3.07ZM41.02,23.83h3.84c-.26-1.19-.42-1.8-.42-3.07v-9.22c2.42-2.2,4.63-3.29,7.07-3.29s4.7,2.12,4.7,6.09v6.43c0,1.27-.16,1.86-.42,3.07h3.84c-.26-1.19-.42-1.8-.42-3.07v-7.96c0-4.73-3.87-6.22-6.54-6.22s-5.86,1.67-8.2,4.03v-4.76l-3.41,1.33c.26,1.19.42,1.8.42,3.07v10.51c0,1.27-.16,1.86-.42,3.07M17.52,46.86c-1.36-3.2-4.76-5.13-8.33-5.13s-3.57.47-5.15,1.5l8.8-7.2c2.15-1.73,3.21-2.62,4.23-3.33h-3.84c.23.74-.66,2.73-2.74,4.39l-7.07,5.72v-18.11l-3.43,1.34c.26,1.19.42,1.8.42,3.07v17.18c0,1.27-.16,1.86-.42,3.07h3.84c-.26-1.19-.42-1.8-.42-3.07v-1.4c.82-1.43,2.71-2.09,4.29-2.09,2.68,0,5.26,1.73,6.57,4.03.47.93.63,1.5.4,2.54h4.16c-.6-1-.86-1.59-1.29-2.49h-.03.01ZM21.02,27.71c0,.93.76,1.7,1.68,1.7s1.68-.77,1.68-1.7-.76-1.7-1.68-1.7-1.68.77-1.68,1.7ZM24.42,31.38l-3.41,1.33c.26,1.19.42,1.8.42,3.07v10.51c0,1.27-.16,1.86-.42,3.07h3.84c-.26-1.19-.42-1.8-.42-3.07v-14.91ZM46.65,38.34c0-4.73-3.87-6.22-6.54-6.22s-5.86,1.67-8.2,4.03v-4.76l-3.41,1.33c.26,1.19.42,1.8.42,3.07v10.51c0,1.27-.16,1.86-.42,3.07h3.84c-.26-1.19-.42-1.8-.42-3.07v-9.22c2.42-2.2,4.63-3.29,7.07-3.29s4.7,2.12,4.7,6.09v6.43c0,1.27-.16,1.86-.42,3.07h3.84c-.26-1.19-.42-1.8-.42-3.07v-7.96h-.01ZM53.38,36.46c0-2.86,3.87-3.63,7.64-3.63s5.68,1.64,6.75,2.57v-2.7c-2.65-.21-4.1-.53-6.75-.53-5.29,0-9.99,1.27-9.99,5.22,0,7.7,16.46,3.49,16.46,8.82,0,1.56-1.82,2.99-5.89,2.99s-7.47-1.99-10.44-5.16v3.73c2.81,1.8,7.04,2.09,10.35,2.09s7.94-.5,7.94-4.6c0-7.02-16.06-2.49-16.06-8.82"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </TrackableLink>
            </div>
            <MobileMenu />
          </div>
        </div>
      </nav>
    </HeaderScrollFade>
  );
}
