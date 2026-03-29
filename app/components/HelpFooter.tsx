export default function HelpFooter() {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-42.75 lg:mt-58.75 max-xl:px-5 max-4xl:px-37.25 md:max-w-480 place-content-center mx-auto">
        <h5 className="text-center text-lg! font-normal! text-(--primary-black)! leading-6.75!">
          Need help or want to access your data? Email us at <br />
          <span className="text-(--primary-red-main)!">info@ginkins.com.</span>
        </h5>
        <a
          href={`mailto:${'info'}@${'ginkins'}.com`}
          className="relative w-40 lg:w-44.25 h-9.75 mt-6 flex mx-auto items-center justify-center px-5 py-1.5 transition animatedButton group"
        >
          <h5 className="group-hover:text-(--primary-black)! group-active:text-(--primary-black)! group-focus:text-(--primary-black)!">
            CONTACT
          </h5>
        </a>
      </div>
      <div
        className="absolute border-solid border-(--primary-red-main) border-t border-r-0 border-b-0 border-l-0 shrink-0 w-18.75 h-0 z-20 bottom-89.75 lg:bottom-88.25 left-1/2 -translate-x-1/2"
        style={{
          transform: 'rotate(90deg) scale(1, 1)',
        }}
      ></div>
    </>
  );
}
