export default function HelpFooter() {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-58.75">
        <h5 className="text-center text-lg! font-normal! text-(--primary-black)! leading-6.75!">
          Need help or want to access your data? Email us at <br />
          <span className="text-(--primary-red-main)!">info@ginkins.com.</span>
        </h5>
        <button className="mt-6 w-40 lg:w-44.25 h-9.75 flex items-center justify-center bg-(--primary-red-main) px-5 lg:px-8 py-1.5 lg:py-3 text-sm font-medium uppercase tracking-wide text-background transition hover:bg-(--primary-gold-main) mx-auto lg:mx-0">
          <h5 className="text-background!">CONTACT</h5>
        </button>
      </div>
      <div
        className="absolute border-solid border-(--primary-red-main) border-t border-r-0 border-b-0 border-l-0 shrink-0 w-18.75 h-0 z-20 bottom-82.5 left-1/2 -translate-x-1/2"
        style={{
          transform: 'rotate(90deg) scale(1, 1)',
        }}
      ></div>
    </>
  );
}
