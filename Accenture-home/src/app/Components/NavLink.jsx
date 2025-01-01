import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link href={href}>
      <a className="block py-12 px-3 text-[#ADB7BE] sm:text-xl rounded hover:text-white text-center">
        {title}
      </a>
    </Link>
  );
};

export default NavLink;
