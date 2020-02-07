import Link from "next/link";

const Nav = () => (
  <div>
    <Link href="/">
      <a>HOME</a>
    </Link>
    <Link href="/sell">
      <a>SELL</a>
    </Link>
  </div>
);

export default Nav;