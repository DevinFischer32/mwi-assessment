import Link from "next/link";
import Image from "next/image";
import Logo from "../public/icons/Logo.svg";

export default function Header(props) {
  const { href, path, cn } = props;

  return (
    <header className={cn}>
      <div className="w-52 ml-2 h-12 relative  sm:w-64 sm:h-16 md:w-72 md:h-20 lg:w-80">
        <Image
          layout="fill"
          objectFit="contain"
          src={Logo}
          alt="Midwestern Logo"
        ></Image>
      </div>
      <Link href={href}>
        <a className="text-gold font-poppins_bold sm:text-lg lg:z-10 ">
          {path}
        </a>
      </Link>
    </header>
  );
}
