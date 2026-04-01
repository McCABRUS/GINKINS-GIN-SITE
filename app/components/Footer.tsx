import Link from 'next/link';
import NewsletterForm from './NewsletterForm';

export default function Footer() {
  return (
    <footer className="bg-(--primary-black) text-background">
      <div className="mx-auto max-xl:px-5 max-4xl:px-37.25 md:max-w-480 pb-15 pt-30 md:py-30">
        <div className="xl:hidden flex flex-col items-center text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-3 text-(--primary-gold-main) hover:text-(--primary-red-main) active:text-(--primary-red-main) focus:text-(--primary-red-main) mb-10"
            aria-label="Ginkins home"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="92"
              height="90"
              viewBox="0 0 92 90"
              fill="none"
            >
              <path
                d="M30.0082 12.6811C30.6221 13.0648 31.1209 13.5636 31.5046 14.1775C31.8883 14.7914 32.0801 15.4245 32.0801 16.0768C31.4279 16.0768 30.7948 15.8849 30.1809 15.5013C29.5669 15.1176 29.0681 14.6188 28.6845 14.0048C28.3008 13.3909 28.1089 12.7578 28.1089 12.0864C28.7612 12.0864 29.3943 12.2782 30.0082 12.6619M28.6653 18.1296C28.2816 18.7435 28.0897 19.3766 28.0897 20.048C28.742 20.048 29.3751 19.8562 29.989 19.4725C30.6029 19.0888 31.1017 18.59 31.4854 17.9761C31.8691 17.3622 32.061 16.7291 32.061 16.0768C31.4087 16.0768 30.7756 16.2686 30.1617 16.6523C29.5478 17.036 29.049 17.5348 28.6653 18.1487M28.3391 31.7123C32.8092 31.7123 35.7828 30.1967 39.9075 28.6812V15.6931H36.1473V27.0313C34.5933 29.4485 31.0442 30.849 28.3583 30.849C20.6844 30.849 17.5381 24.4413 17.5381 15.7698C17.5381 7.09834 20.6844 0.863312 28.3008 0.863312C35.9171 0.863312 36.6077 2.99282 38.1809 4.20145V0.69065C34.3248 0.422064 32.1953 0 28.3008 0C17.5573 0 13.6244 7.36693 13.6244 15.7698C13.6244 24.1727 17.5573 31.7123 28.3583 31.7123M46.8907 5.06477C48.0994 5.06477 49.097 4.06716 49.097 2.85852C49.097 1.64989 48.0994 0.65228 46.8907 0.65228C45.6821 0.65228 44.6845 1.64989 44.6845 2.85852C44.6845 4.06716 45.6821 5.06477 46.8907 5.06477ZM44.6845 31.0025H49.7109C49.3656 29.4485 49.1545 28.662 49.1545 27.0121V7.61633L44.6845 9.34296C45.0298 10.8969 45.2409 11.6835 45.2409 13.3334V27.0121C45.2409 28.662 45.0298 29.4294 44.6845 31.0025ZM54.4687 31.0025H59.4951C59.1498 29.4485 58.9388 28.662 58.9388 27.0121V15.0216C62.1042 12.1631 65.0011 10.7434 68.205 10.7434C71.4088 10.7434 74.3633 13.506 74.3633 18.6667V27.0313C74.3633 28.6812 74.1522 29.4485 73.8069 31.0217H78.8333C78.488 29.4677 78.2769 28.6812 78.2769 27.0313V16.6715C78.2769 10.5132 73.2122 8.57557 69.7014 8.57557C66.1906 8.57557 62.0275 10.7434 58.9579 13.813V7.61633L54.4879 9.34296C54.8332 10.8969 55.0443 11.6835 55.0443 13.3334V27.0121C55.0443 28.662 54.8332 29.4294 54.4879 31.0025M23.6772 60.969C21.8931 56.806 17.4422 54.2928 12.7611 54.2928C8.08007 54.2928 8.08007 54.9067 6.00812 56.2496L17.5381 46.8875C20.3583 44.6428 21.7396 43.4726 23.0825 42.5517H18.0561C18.3631 43.5109 17.1928 46.1009 14.4686 48.2688L5.20236 55.7124V32.1536L0.713135 33.8994C1.05846 35.4534 1.26949 36.2399 1.26949 37.8898V60.24C1.26949 61.8899 1.05846 62.6573 0.713135 64.2304H5.73953C5.39421 62.6765 5.18317 61.8899 5.18317 60.24V58.4175C6.25752 56.5565 8.73235 55.6932 10.8043 55.6932C14.3151 55.6932 17.6916 57.9379 19.4182 60.9307C20.0321 62.1393 20.2432 62.8875 19.9362 64.2304H25.3847C24.5981 62.9259 24.2528 62.1585 23.6964 60.9882H23.6581L23.6772 60.969ZM28.2624 36.0481C28.2624 37.2567 29.26 38.2543 30.4686 38.2543C31.6773 38.2543 32.6749 37.2567 32.6749 36.0481C32.6749 34.8394 31.6773 33.8418 30.4686 33.8418C29.26 33.8418 28.2624 34.8394 28.2624 36.0481ZM32.7132 40.8251L28.2432 42.5517C28.5885 44.1057 28.7996 44.8922 28.7996 46.5421V60.2208C28.7996 61.8707 28.5885 62.6381 28.2432 64.2113H33.2696C32.9243 62.6573 32.7132 61.8707 32.7132 60.2208V40.8251ZM61.8356 49.8803C61.8356 43.722 56.7709 41.7843 53.2601 41.7843C49.7493 41.7843 45.5862 43.9522 42.5166 47.0217V40.8251L38.0466 42.5517C38.3919 44.1057 38.603 44.8922 38.603 46.5421V60.2208C38.603 61.8707 38.3919 62.6381 38.0466 64.2113H43.073C42.7277 62.6573 42.5166 61.8707 42.5166 60.2208V48.2304C45.6821 45.3719 48.579 43.9522 51.7829 43.9522C54.9867 43.9522 57.9411 46.7148 57.9411 51.8755V60.24C57.9411 61.8899 57.7301 62.6573 57.3848 64.2304H62.4112C62.0659 62.6765 61.8548 61.8899 61.8548 60.24V49.8803H61.8356ZM70.6606 47.4438C70.6606 43.722 75.7254 42.7244 80.675 42.7244C85.6247 42.7244 88.1187 44.8539 89.5192 46.0625V42.5517C86.0468 42.2831 84.1475 41.8611 80.675 41.8611C73.7493 41.8611 67.5911 43.5109 67.5911 48.6524C67.5911 58.6669 89.1547 53.1992 89.1547 60.1249C89.1547 62.1585 86.7758 64.0194 81.4424 64.0194C76.1091 64.0194 71.6582 61.4295 67.7637 57.3048V62.1585C71.4472 64.499 76.9916 64.8827 81.3273 64.8827C85.6631 64.8827 91.7254 64.2304 91.7254 58.8971C91.7254 49.7652 70.6798 55.6549 70.6798 47.4246"
                fill="currentColor"
              />
            </svg>
          </Link>
          <h5 className="text-(--secondary-gray-100)! text-lg! leading-normal! mb-6">
            JOIN OUR NEWSLETTER TO STAY UP TO DATE ON FEATURES AND RELEASES.
          </h5>
          <NewsletterForm isFooter />
          <p className="mt-10 text-sm text-(--secondary-gray-100)">
            By subscribing you agree with our Privacy Policy and provide consent
            to receive updates from our company.
          </p>
          <div className="flex gap-12 mt-10 mb-8">
            <a
              href="https://www.instagram.com/ginkinsgin/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-(--primary-red-main) active:text-(--primary-red-main) focus:text-(--primary-red-main) text-base"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16 3.24219H8C5.23858 3.24219 3 5.48077 3 8.24219V16.2422C3 19.0036 5.23858 21.2422 8 21.2422H16C18.7614 21.2422 21 19.0036 21 16.2422V8.24219C21 5.48077 18.7614 3.24219 16 3.24219ZM19.25 16.2422C19.2445 18.0348 17.7926 19.4867 16 19.4922H8C6.20735 19.4867 4.75549 18.0348 4.75 16.2422V8.24219C4.75549 6.44954 6.20735 4.99768 8 4.99219H16C17.7926 4.99768 19.2445 6.44954 19.25 8.24219V16.2422ZM16.75 8.49219C17.3023 8.49219 17.75 8.04447 17.75 7.49219C17.75 6.93991 17.3023 6.49219 16.75 6.49219C16.1977 6.49219 15.75 6.93991 15.75 7.49219C15.75 8.04447 16.1977 8.49219 16.75 8.49219ZM12 7.74219C9.51472 7.74219 7.5 9.75691 7.5 12.2422C7.5 14.7275 9.51472 16.7422 12 16.7422C14.4853 16.7422 16.5 14.7275 16.5 12.2422C16.5027 11.0479 16.0294 9.90176 15.1849 9.05727C14.3404 8.21278 13.1943 7.73953 12 7.74219ZM9.25 12.2422C9.25 13.761 10.4812 14.9922 12 14.9922C13.5188 14.9922 14.75 13.761 14.75 12.2422C14.75 10.7234 13.5188 9.49219 12 9.49219C10.4812 9.49219 9.25 10.7234 9.25 12.2422Z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/ginkins-distillery/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-(--primary-red-main) active:text-(--primary-red-main) focus:text-(--primary-red-main) text-base"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="27"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.5 0C0.67157 0 0 0.67157 0 1.5V16.5C0 17.3284 0.67157 18 1.5 18H16.5C17.3284 18 18 17.3284 18 16.5V1.5C18 0.67157 17.3284 0 16.5 0H1.5ZM5.52076 4.00272C5.52639 4.95897 4.81061 5.54819 3.96123 5.54397C3.16107 5.53975 2.46357 4.90272 2.46779 4.00413C2.47201 3.15897 3.13998 2.47975 4.00764 2.49944C4.88795 2.51913 5.52639 3.1646 5.52076 4.00272ZM9.2797 6.76176H6.75971H6.7583V15.3216H9.4217V15.1219C9.4217 14.742 9.4214 14.362 9.4211 13.9819C9.4203 12.9681 9.4194 11.9532 9.4246 10.9397C9.426 10.6936 9.4372 10.4377 9.5005 10.2028C9.7381 9.3253 10.5271 8.7586 11.4074 8.8979C11.9727 8.9864 12.3467 9.3141 12.5042 9.8471C12.6013 10.1803 12.6449 10.5389 12.6491 10.8863C12.6605 11.9339 12.6589 12.9815 12.6573 14.0292C12.6567 14.399 12.6561 14.769 12.6561 15.1388V15.3202H15.328V15.1149C15.328 14.6629 15.3278 14.211 15.3275 13.7591C15.327 12.6296 15.3264 11.5001 15.3294 10.3702C15.3308 9.8597 15.276 9.3563 15.1508 8.8627C14.9638 8.1286 14.5771 7.5211 13.9485 7.0824C13.5027 6.77019 13.0133 6.5691 12.4663 6.5466C12.404 6.54401 12.3412 6.54062 12.2781 6.53721C11.9984 6.52209 11.7141 6.50673 11.4467 6.56066C10.6817 6.71394 10.0096 7.0641 9.5019 7.6814C9.4429 7.7522 9.3852 7.8241 9.2991 7.9314L9.2797 7.9557V6.76176ZM2.68164 15.3244H5.33242V6.76733H2.68164V15.3244Z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/ginkinsgin"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-(--primary-red-main) active:text-(--primary-red-main) focus:text-(--primary-red-main) text-base"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="27"
                viewBox="0 0 27 27"
                fill="none"
              >
                <path
                  d="M24.75,0H2.24C1,0,0,1.01,0,2.25v22.49c0,1.24,1,2.25,2.24,2.25h9.15v-9.49h-3.43v-3.93h3.43v-3c0-3.4,2.01-5.28,5.09-5.28,1.48,0,3.02.27,3.02.27v3.33h-1.7c-1.67,0-2.2,1.05-2.2,2.12v2.55h3.74l-.59,3.93h-3.15v9.49h9.14c1.24,0,2.25-1.01,2.25-2.25V2.25c0-1.24-1.01-2.25-2.25-2.25Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
          <hr
            className="w-full text-(--primary-red-main) mb-7"
            aria-hidden="true"
          />
          <div className="flex gap-6 text-sm mb-6">
            <Link
              href="/privacy"
              className="hover:text-(--primary-red-main) active:text-(--primary-red-main) focus:text-(--primary-red-main)"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-(--primary-red-main) active:text-(--primary-red-main) focus:text-(--primary-red-main)"
            >
              Terms of Service
            </Link>
            <Link
              href="/about-ginkins"
              className="hover:text-(--primary-red-main) active:text-(--primary-red-main) focus:text-(--primary-red-main)"
            >
              About Us
            </Link>
          </div>
          <p className="text-sm mb-25">
            © 2026 Ginkins Distillery. All rights reserved.
          </p>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="50"
            viewBox="0 0 40 50"
            fill="none"
          >
            <g clipPath="url(#clip0_2763_142)">
              <path
                d="M39.4642 29.626C38.666 39.8309 30.1168 49.4259 19.6879 49.4259C8.73231 49.4259 -0.14917 40.5614 -0.14917 29.626"
                fill="#AC1F2C"
              />
              <path
                d="M19.9489 29.7221H19.7837V29.5572C19.7837 26.2982 20.7485 23.1001 22.6518 20.0528C24.5507 17.0126 27.0596 14.5084 30.1089 12.6101C33.163 10.7107 36.3667 9.74805 39.6311 9.74805H39.7963V9.91292C39.7963 13.1731 38.8315 16.3708 36.9281 19.4173C35.0292 22.4583 32.5204 24.9625 29.4711 26.8601C26.4181 28.7595 23.2141 29.7225 19.9489 29.7225V29.7221Z"
                fill="#AC1F2C"
              />
              <path
                d="M20.1144 29.7225H19.9492C16.6848 29.7225 13.4811 28.7595 10.427 26.8604C7.37921 24.9629 4.87032 22.4587 2.97032 19.4177C1.06662 16.369 0.101807 13.1713 0.101807 9.91292V9.74805H0.266992C3.53255 9.74805 6.73625 10.7111 9.78921 12.6101C12.8392 14.5084 15.3481 17.0126 17.2459 20.0528C19.1492 23.099 20.114 26.2967 20.114 29.5572V29.7221L20.1144 29.7225Z"
                fill="#AC1F2C"
              />
            </g>
            <defs>
              <clipPath id="clip0_2763_142">
                <rect width="40" height="49.9065" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <div className="text-center mt-6">
            Designed by{' '}
            <Link
              href="https://www.amagentastudio.com"
              target="_blank"
              className="hover:text-(--primary-red-main) active:text-(--primary-red-main) focus:text-(--primary-red-main)"
            >
              Amagenta Studio
            </Link>
          </div>
        </div>
        <div className="hidden xl:block">
          <div className="mb-10 flex items-center justify-center">
            <div className="flex items-center gap-30 w-full">
              <hr
                className="w-full text-(--primary-red-main)"
                aria-hidden="true"
              />
              <span className="flex items-center justify-center relative top-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="50"
                  viewBox="0 0 40 50"
                  fill="none"
                >
                  <g clipPath="url(#clip0_2763_142)">
                    <path
                      d="M39.4642 29.626C38.666 39.8309 30.1168 49.4259 19.6879 49.4259C8.73231 49.4259 -0.14917 40.5614 -0.14917 29.626"
                      fill="#AC1F2C"
                    />
                    <path
                      d="M19.9489 29.7221H19.7837V29.5572C19.7837 26.2982 20.7485 23.1001 22.6518 20.0528C24.5507 17.0126 27.0596 14.5084 30.1089 12.6101C33.163 10.7107 36.3667 9.74805 39.6311 9.74805H39.7963V9.91292C39.7963 13.1731 38.8315 16.3708 36.9281 19.4173C35.0292 22.4583 32.5204 24.9625 29.4711 26.8601C26.4181 28.7595 23.2141 29.7225 19.9489 29.7225V29.7221Z"
                      fill="#AC1F2C"
                    />
                    <path
                      d="M20.1144 29.7225H19.9492C16.6848 29.7225 13.4811 28.7595 10.427 26.8604C7.37921 24.9629 4.87032 22.4587 2.97032 19.4177C1.06662 16.369 0.101807 13.1713 0.101807 9.91292V9.74805H0.266992C3.53255 9.74805 6.73625 10.7111 9.78921 12.6101C12.8392 14.5084 15.3481 17.0126 17.2459 20.0528C19.1492 23.099 20.114 26.2967 20.114 29.5572V29.7221L20.1144 29.7225Z"
                      fill="#AC1F2C"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2763_142">
                      <rect width="40" height="49.9065" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <hr
                className="w-full text-(--primary-red-main)"
                aria-hidden="true"
              />
            </div>
          </div>
          <div className="grid grid-cols-12 gap-8 items-start">
            <div className="col-span-5">
              <Link
                href="/"
                className="inline-flex items-center gap-3 text-(--primary-gold-main) hover:text-(--primary-red-main) active:text-(--primary-red-main) focus:text-(--primary-red-main)"
                aria-label="Ginkins home"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="92"
                  height="90"
                  viewBox="0 0 92 90"
                  fill="none"
                >
                  <path
                    d="M30.0082 12.6811C30.6221 13.0648 31.1209 13.5636 31.5046 14.1775C31.8883 14.7914 32.0801 15.4245 32.0801 16.0768C31.4279 16.0768 30.7948 15.8849 30.1809 15.5013C29.5669 15.1176 29.0681 14.6188 28.6845 14.0048C28.3008 13.3909 28.1089 12.7578 28.1089 12.0864C28.7612 12.0864 29.3943 12.2782 30.0082 12.6619M28.6653 18.1296C28.2816 18.7435 28.0897 19.3766 28.0897 20.048C28.742 20.048 29.3751 19.8562 29.989 19.4725C30.6029 19.0888 31.1017 18.59 31.4854 17.9761C31.8691 17.3622 32.061 16.7291 32.061 16.0768C31.4087 16.0768 30.7756 16.2686 30.1617 16.6523C29.5478 17.036 29.049 17.5348 28.6653 18.1487M28.3391 31.7123C32.8092 31.7123 35.7828 30.1967 39.9075 28.6812V15.6931H36.1473V27.0313C34.5933 29.4485 31.0442 30.849 28.3583 30.849C20.6844 30.849 17.5381 24.4413 17.5381 15.7698C17.5381 7.09834 20.6844 0.863312 28.3008 0.863312C35.9171 0.863312 36.6077 2.99282 38.1809 4.20145V0.69065C34.3248 0.422064 32.1953 0 28.3008 0C17.5573 0 13.6244 7.36693 13.6244 15.7698C13.6244 24.1727 17.5573 31.7123 28.3583 31.7123M46.8907 5.06477C48.0994 5.06477 49.097 4.06716 49.097 2.85852C49.097 1.64989 48.0994 0.65228 46.8907 0.65228C45.6821 0.65228 44.6845 1.64989 44.6845 2.85852C44.6845 4.06716 45.6821 5.06477 46.8907 5.06477ZM44.6845 31.0025H49.7109C49.3656 29.4485 49.1545 28.662 49.1545 27.0121V7.61633L44.6845 9.34296C45.0298 10.8969 45.2409 11.6835 45.2409 13.3334V27.0121C45.2409 28.662 45.0298 29.4294 44.6845 31.0025ZM54.4687 31.0025H59.4951C59.1498 29.4485 58.9388 28.662 58.9388 27.0121V15.0216C62.1042 12.1631 65.0011 10.7434 68.205 10.7434C71.4088 10.7434 74.3633 13.506 74.3633 18.6667V27.0313C74.3633 28.6812 74.1522 29.4485 73.8069 31.0217H78.8333C78.488 29.4677 78.2769 28.6812 78.2769 27.0313V16.6715C78.2769 10.5132 73.2122 8.57557 69.7014 8.57557C66.1906 8.57557 62.0275 10.7434 58.9579 13.813V7.61633L54.4879 9.34296C54.8332 10.8969 55.0443 11.6835 55.0443 13.3334V27.0121C55.0443 28.662 54.8332 29.4294 54.4879 31.0025M23.6772 60.969C21.8931 56.806 17.4422 54.2928 12.7611 54.2928C8.08007 54.2928 8.08007 54.9067 6.00812 56.2496L17.5381 46.8875C20.3583 44.6428 21.7396 43.4726 23.0825 42.5517H18.0561C18.3631 43.5109 17.1928 46.1009 14.4686 48.2688L5.20236 55.7124V32.1536L0.713135 33.8994C1.05846 35.4534 1.26949 36.2399 1.26949 37.8898V60.24C1.26949 61.8899 1.05846 62.6573 0.713135 64.2304H5.73953C5.39421 62.6765 5.18317 61.8899 5.18317 60.24V58.4175C6.25752 56.5565 8.73235 55.6932 10.8043 55.6932C14.3151 55.6932 17.6916 57.9379 19.4182 60.9307C20.0321 62.1393 20.2432 62.8875 19.9362 64.2304H25.3847C24.5981 62.9259 24.2528 62.1585 23.6964 60.9882H23.6581L23.6772 60.969ZM28.2624 36.0481C28.2624 37.2567 29.26 38.2543 30.4686 38.2543C31.6773 38.2543 32.6749 37.2567 32.6749 36.0481C32.6749 34.8394 31.6773 33.8418 30.4686 33.8418C29.26 33.8418 28.2624 34.8394 28.2624 36.0481ZM32.7132 40.8251L28.2432 42.5517C28.5885 44.1057 28.7996 44.8922 28.7996 46.5421V60.2208C28.7996 61.8707 28.5885 62.6381 28.2432 64.2113H33.2696C32.9243 62.6573 32.7132 61.8707 32.7132 60.2208V40.8251ZM61.8356 49.8803C61.8356 43.722 56.7709 41.7843 53.2601 41.7843C49.7493 41.7843 45.5862 43.9522 42.5166 47.0217V40.8251L38.0466 42.5517C38.3919 44.1057 38.603 44.8922 38.603 46.5421V60.2208C38.603 61.8707 38.3919 62.6381 38.0466 64.2113H43.073C42.7277 62.6573 42.5166 61.8707 42.5166 60.2208V48.2304C45.6821 45.3719 48.579 43.9522 51.7829 43.9522C54.9867 43.9522 57.9411 46.7148 57.9411 51.8755V60.24C57.9411 61.8899 57.7301 62.6573 57.3848 64.2304H62.4112C62.0659 62.6765 61.8548 61.8899 61.8548 60.24V49.8803H61.8356ZM70.6606 47.4438C70.6606 43.722 75.7254 42.7244 80.675 42.7244C85.6247 42.7244 88.1187 44.8539 89.5192 46.0625V42.5517C86.0468 42.2831 84.1475 41.8611 80.675 41.8611C73.7493 41.8611 67.5911 43.5109 67.5911 48.6524C67.5911 58.6669 89.1547 53.1992 89.1547 60.1249C89.1547 62.1585 86.7758 64.0194 81.4424 64.0194C76.1091 64.0194 71.6582 61.4295 67.7637 57.3048V62.1585C71.4472 64.499 76.9916 64.8827 81.3273 64.8827C85.6631 64.8827 91.7254 64.2304 91.7254 58.8971C91.7254 49.7652 70.6798 55.6549 70.6798 47.4246"
                    fill="currentColor"
                  />
                </svg>
              </Link>

              <h5 className="text-background! text-lg! leading-normal! text-start px-0">
                JOIN OUR NEWSLETTER TO STAY UP TO DATE ON FEATURES AND RELEASES.
              </h5>
              <NewsletterForm isFooter />
              <p className="mt-6.25 text-sm text-background w-full text-start">
                By subscribing you agree with our Privacy Policy and provide
                consent to receive updates from our company.
              </p>
            </div>

            <div className="justify-items-center grid col-span-7 grid-cols-3 gap-10 ml-20 relative left-16.5">
              <div className="w-45">
                <span className="text-lg font-medium text-background ">
                  About Us
                </span>
                <ul className="mt-4 space-y-2 text-sm text-background">
                  <li>
                    <Link
                      href="/about-ginkins"
                      className="hover:text-(--primary-red-main) active:text-(--primary-red-main) focus:text-(--primary-red-main) text-base"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/our-gins"
                      className="hover:text-(--primary-red-main) active:text-(--primary-red-main) focus:text-(--primary-red-main) text-base"
                    >
                      Our Gins
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/accolades"
                      className="hover:text-(--primary-red-main) active:text-(--primary-red-main) focus:text-(--primary-red-main) text-base"
                    >
                      Accolades &amp; Press
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/sustainability"
                      className="hover:text-(--primary-red-main) active:text-(--primary-red-main) focus:text-(--primary-red-main) text-base"
                    >
                      Sustainability practices
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="w-45 ml-8">
                <span className="text-lg font-medium text-background ">
                  Useful
                </span>
                <ul className="mt-4 space-y-2 text-sm text-background">
                  <li>
                    <Link
                      href="/"
                      className="hover:text-(--primary-red-main) active:text-(--primary-red-main) focus:text-(--primary-red-main) text-base"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/where-to-buy"
                      className="hover:text-(--primary-red-main) active:text-(--primary-red-main) focus:text-(--primary-red-main) text-base"
                    >
                      Where to Buy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/cocktails"
                      className="hover:text-(--primary-red-main) active:text-(--primary-red-main) focus:text-(--primary-red-main) text-base"
                    >
                      Cocktails &amp; Pairings
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/subscribe"
                      className="hover:text-(--primary-red-main) active:text-(--primary-red-main) focus:text-(--primary-red-main) text-base"
                    >
                      Subscribe
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="w-45">
                <span className="text-lg font-medium text-background ">
                  Follow Us
                </span>
                <ul className="mt-4 space-y-3 text-sm text-background">
                  <li>
                    <a
                      href="https://www.facebook.com/ginkinsgin"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 hover:text-(--primary-red-main) active:text-(--primary-red-main) focus:text-(--primary-red-main) text-base"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M18.33,0H1.66C.74,0,0,.75,0,1.67v16.66c0,.92.74,1.67,1.66,1.67h6.78v-7.03h-2.54v-2.91h2.54v-2.22c0-2.52,1.49-3.91,3.77-3.91,1.1,0,2.24.2,2.24.2v2.47h-1.26c-1.24,0-1.63.78-1.63,1.57v1.89h2.77l-.44,2.91h-2.33v7.03h6.77c.92,0,1.67-.75,1.67-1.67V1.67c0-.92-.75-1.67-1.67-1.67Z"
                          fill="currentColor"
                        />
                      </svg>
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/ginkinsgin/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 hover:text-(--primary-red-main) active:text-(--primary-red-main) focus:text-(--primary-red-main) text-base"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M14.4444 0H5.55556C2.48731 0 0 2.48731 0 5.55556V14.4444C0 17.5127 2.48731 20 5.55556 20H14.4444C17.5127 20 20 17.5127 20 14.4444V5.55556C20 2.48731 17.5127 0 14.4444 0ZM18.0556 14.4444C18.0494 16.4362 16.4362 18.0494 14.4444 18.0556H5.55556C3.56372 18.0494 1.95054 16.4362 1.94444 14.4444V5.55556C1.95054 3.56372 3.56372 1.95054 5.55556 1.94444H14.4444C16.4362 1.95054 18.0494 3.56372 18.0556 5.55556V14.4444ZM15.2778 5.83333C15.8914 5.83333 16.3889 5.33587 16.3889 4.72222C16.3889 4.10858 15.8914 3.61111 15.2778 3.61111C14.6641 3.61111 14.1667 4.10858 14.1667 4.72222C14.1667 5.33587 14.6641 5.83333 15.2778 5.83333ZM10 5C7.23858 5 5 7.23858 5 10C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10C15.003 8.673 14.4771 7.39952 13.5388 6.4612C12.6004 5.52288 11.327 4.99704 10 5ZM6.94444 10C6.94444 11.6876 8.31244 13.0556 10 13.0556C11.6876 13.0556 13.0556 11.6876 13.0556 10C13.0556 8.31244 11.6876 6.94444 10 6.94444C8.31244 6.94444 6.94444 8.31244 6.94444 10Z"
                          fill="currentColor"
                        />
                      </svg>
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/ginkins-distillery/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 hover:text-(--primary-red-main) active:text-(--primary-red-main) focus:text-(--primary-red-main) text-base"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M1.66667 0C0.746189 0 0 0.746189 0 1.66667V18.3333C0 19.2538 0.746189 20 1.66667 20H18.3333C19.2538 20 20 19.2538 20 18.3333V1.66667C20 0.746189 19.2538 0 18.3333 0H1.66667ZM6.13418 4.44747C6.14043 5.50997 5.34512 6.16466 4.40137 6.15997C3.5123 6.15528 2.7373 5.44747 2.74199 4.44903C2.74668 3.50997 3.48887 2.75528 4.45293 2.77716C5.43106 2.79903 6.14043 3.51622 6.13418 4.44747ZM10.3108 7.51307H7.51079H7.50922V17.024H10.4686V16.8021C10.4686 16.38 10.4682 15.9578 10.4679 15.5354C10.467 14.409 10.466 13.2813 10.4718 12.1552C10.4733 11.8818 10.4858 11.5974 10.5561 11.3364C10.8201 10.3614 11.6968 9.73178 12.6749 9.88656C13.303 9.98489 13.7186 10.349 13.8936 10.9412C14.0014 11.3114 14.0499 11.7099 14.0546 12.0959C14.0672 13.2599 14.0654 14.4239 14.0637 15.588C14.063 15.9989 14.0623 16.41 14.0623 16.8209V17.0224H17.0311V16.7943C17.0311 16.2921 17.0309 15.79 17.0306 15.2879C17.03 14.0329 17.0293 12.7779 17.0327 11.5224C17.0342 10.9552 16.9733 10.3959 16.8342 9.84745C16.6264 9.03178 16.1968 8.35678 15.4983 7.86933C15.003 7.52243 14.4592 7.299 13.8514 7.274C13.7822 7.27112 13.7124 7.26736 13.6423 7.26357C13.3316 7.24677 13.0157 7.2297 12.7186 7.28962C11.8686 7.45993 11.1218 7.849 10.5577 8.53489C10.4921 8.61356 10.428 8.69345 10.3323 8.81267L10.3108 8.83967V7.51307ZM2.9796 17.0271H5.92491V7.51926H2.9796V17.0271Z"
                          fill="currentColor"
                        />
                      </svg>
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-(--primary-red-main) mt-6.25 pt-6">
            <div className="flex flex-row items-center justify-between gap-4">
              <p className="text-sm text-background">
                © 2026 Ginkins Distillery. All rights reserved.
              </p>

              <div className="flex items-center gap-4 text-sm">
                <Link
                  href="/privacy"
                  className="hover:text-(--primary-red-main) active:text-(--primary-red-main) focus:text-(--primary-red-main)"
                >
                  Privacy Policy
                </Link>
                <span className="text-background text-sm">|</span>
                <Link
                  href="/terms"
                  className="hover:text-(--primary-red-main) active:text-(--primary-red-main) focus:text-(--primary-red-main)"
                >
                  Terms of Service
                </Link>
                <span className="text-background text-sm">|</span>
                <Link
                  href="/faqs"
                  className="hover:text-(--primary-red-main) active:text-(--primary-red-main) focus:text-(--primary-red-main)"
                >
                  FAQs
                </Link>
              </div>
            </div>
            <div className="text-right mt-6">
              Designed by{' '}
              <Link
                href="https://www.amagentastudio.com"
                target="_blank"
                className="hover:text-(--primary-red-main) active:text-(--primary-red-main) focus:text-(--primary-red-main)"
              >
                Amagenta Studio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
