function TopNav({ engLang, onFaClick, onEnClick }) {
  return (
    <nav className="mb-14 flex items-center justify-between px-12 md:px-16 lg:px-20">
      <div>
        <img src="./icons/kanda-idea.svg" className="h-10 md:h-12" />
      </div>
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-4">
          <span className="hidden text-xl text-white lg:block">
            Choose Language :
          </span>
          <div className="flex gap-2">
            <span
              onClick={onEnClick}
              className={`text-xl ${engLang ? "text-white" : "cursor-pointer text-gray-500"}`}
            >
              En
            </span>
            <span className="text-xl text-white">/</span>
            <span
              onClick={onFaClick}
              className={`text-xl ${engLang ? "cursor-pointer text-gray-500" : "text-white"}`}
            >
              Fa
            </span>
          </div>
        </div>
        <div className="cursor-pointer">
          <img src="./icons/menu-three-lines.svg" className="h-5" />
        </div>
      </div>
    </nav>
  );
}

export default TopNav;
