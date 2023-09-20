import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="h-auto w-full py-2 md:py-8 text-md md:text-md justify-around sm:flex sm:flex-row grid grid-cols-1 px-4 md:px-2 border-t">
      <div className="w-36 md:w-52 md:md:w-36 my-2 md:my-auto space-y-2">
        <Link href="/" legacyBehavior>
          <Image
            src="/logo.jpeg"
            alt="Picture of the author"
            width={50}
            height={50}
            className="border rounded-full"
          />
        </Link>
      </div>
      <div className="flex flex-col my-2 md:my-auto space-y-2">
        <div className="hover:underline">
          <Link href="/#home" legacyBehavior>
            Home
          </Link>
        </div>
        <div className="hover:underline">
          <Link href="/#services" legacyBehavior>
            Services
          </Link>
        </div>
        <div className="hover:underline">
          <Link href="/#testimonials" legacyBehavior>
            Testimonials
          </Link>
        </div>
      </div>
      <div className="flex flex-col my-2 md:my-auto space-y-2">
        <div className="hover:underline">
          <Link href="/#team" legacyBehavior>
            Team
          </Link>
        </div>
        <div className="hover:underline" legacyBehavior>
          <Link href="/#company">Trusted By</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
