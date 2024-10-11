function FooterLink({ children, className = "" }) {
  const allClassNames =
    "cursor-pointer text-lg md:text-xl hover:text-[#0000ff] " + className;
  return <a className={allClassNames}>{children}</a>;
}

export default FooterLink;
