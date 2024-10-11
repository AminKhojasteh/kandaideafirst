function Overview() {
  return (
    <div className="mx-auto mt-16 grid max-w-[100rem] grid-cols-[3rem_1fr] px-8 lg:mt-20">
      <div className="pt-4 md:pt-12">
        <img src="./icons/arrow-down.svg" />
      </div>
      <div className="grid grid-cols-1 gap-x-8 md:grid-cols-2 lg:grid-cols-[3fr_2fr] xl:pr-16">
        <div className="flex flex-col gap-5 py-10">
          <h2 className="text-5xl font-bold uppercase text-gray-700">
            OVERVIEW
          </h2>
          <p className="text-[2.5rem] font-light uppercase leading-[3.1rem] text-[#0000ff]">
            THE CONFLUENCE OF ENGINEERING & CREATIVITY
          </p>
          <h3 className="text-xl text-gray-700">
            Kanda Idea is a leading Iranian company with a long-term successful
            experience in providing technology-based engineering, monitoring
            (supervising), and management services in mega-projects,
            enterprises, and the public sector.
          </h3>
        </div>
        <div className="row-start-1 w-96 pb-5 md:col-start-2 md:w-full md:py-10">
          <img src="./icons/overview.svg" className="w-full" />
        </div>
      </div>
    </div>
  );
}

export default Overview;
