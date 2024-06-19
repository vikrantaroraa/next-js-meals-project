"use client";
import Link from "next/link";
import styles from "./page.module.css";
import ImageSlideshow from "@/components/image-slideshow/image-slideshow";

export default function Home() {
  return (
    // <main>
    //   <h1 style={{ color: "white", textAlign: "center" }}>
    //     Time to get started!
    //   </h1>
    //   <p>
    //     <Link href="/meals">Meals</Link>
    //   </p>
    //   <p>
    //     <Link href="/meals/share">Share Meal</Link>
    //   </p>
    //   <p>
    //     <Link href="/community">Community</Link>
    //   </p>
    // </main>
    <>
      <header className={styles["header"]}>
        <div className={styles["slideshow"]}>
          <ImageSlideshow />
        </div>
        <div>
          <div className={styles["hero"]}>
            <h1>NextLevel Food for NextLevel Foodies</h1>
            <p>Taste & share the food from all alround the world</p>
          </div>
          <div className={styles["cta"]}>
            <Link href={"/community"}>Join the community</Link>
            <Link href={"/meals"}>Share Meals</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={styles["section"]}>
          <h2>How it works</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section className={styles["section"]}>
          <h2>Why NextLevel Food?</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}
