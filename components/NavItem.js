import Link from "next/link";
const NavItem = ({ text, href, active }) => {
  return (
    <Link href={href}>
      <h2 className={`nav__link`}>{text}</h2>
    </Link>
  );
};

export default NavItem;
