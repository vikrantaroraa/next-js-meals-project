import Link from "next/link";
import React from "react";
import logoImage from "@/assets/logo.png";
import styles from "./main-header.module.css";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";
import Navlink from "./nav-link";

const MainHeader = () => {
  return (
    <>
      <MainHeaderBackground />
      <header className={styles["header"]}>
        <Link className={styles["logo"]} href="/">
          <Image src={logoImage} alt="A plate with food on it" priority />
          NextLevel Food
        </Link>

        <nav className={styles["nav"]}>
          <ul>
            <li>
              <Navlink href={"/meals"}>Browse Meals</Navlink>
            </li>
            <li>
              <Navlink href={"/community"}>Foodies Community</Navlink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
