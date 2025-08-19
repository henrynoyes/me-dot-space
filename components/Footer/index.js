import React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";

const Footer = ({}) => {
  const { theme } = useTheme();

  return (
    <>
      <div className="flex justify-center items-center">
        <h1 className="text-sm text-bold my-2 laptop:my-10 p-2 laptop:p-0">
          © 2025 Henry Noyes |
          {" "}
          <Link href="https://github.com/henrynoyes/me-dot-space">
            <a className={theme === "dark" ? "text-link-red" : "text-link-blue"} target="_blank" rel="noopener noreferrer">source code</a>
          </Link>
        </h1>
      </div>
    </>
  );
};

export default Footer;
