export default function RecipesIntro() {
  return (
    <section className="w-screen bg-(--primary-black) text-background relative overflow-hidden">
      <div className="mx-auto md:pl-37.5 py-15 md:py-27 md:pr-42.25 px-5">
        <div className="grid grid-cols-1 gap-15 md:gap-41.25 lg:grid-cols-2">
          <h4 className="text-background!">
            Shake Things Up.
            <br />
            Sip Something New.
          </h4>
          <div className="space-y-12">
            <p className="text-base leading-6 text-background font-normal mb-10">
              At Ginkins, we believe cocktails should be both elevated and easy
              to enjoy. Whether you’re mixing for one or making magic for a
              crowd, our recipes are designed to spark joy, surprise your
              palate, and make the moment unforgettable
            </p>
            <p className="text-4xl leading-normal text-(--primary-red-main) font-medium italic font-cormorant-garamond">
              With simple ingredients, step-by-step instructions, and tips from
              the Ginkins team—you’ve got everything you need to sip like a pro.
            </p>
          </div>
        </div>
      </div>
      <div
        className="absolute border-solid border-background border-t border-r-0 border-b-0 border-l-0 shrink-0 w-16.75 lg:w-[95vh] h-0 z-20 top-8.25 lg:top-0 left-1/2 -translate-x-1/2"
        style={{
          transform: 'rotate(90deg) scale(1, 1)',
        }}
      ></div>
      <div className="block lg:hidden absolute border-solid border-background border-t border-r-0 border-b-0 border-l-0 shrink-0 w-[80%]  h-0 z-20 bottom-0 left-1/2 -translate-x-1/2"></div>
    </section>
  );
}
