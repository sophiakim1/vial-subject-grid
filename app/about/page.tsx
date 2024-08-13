"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./page.module.css";
import logo from "../asset/logo.png";

export default function About() {
    const router = useRouter();

    return (
        <div>
        <div className={styles.headerContainer}>
            <div className={styles.wrapper}>
            <div className={styles.logoContainer}>
                <a>
                <Image
                    src={logo}
                    alt="Logo"
                    className={styles.logo}
                    width={120}
                    height={50}
                    onClick={() => router.push("/")}
                />
                </a>
            </div>

            <div className={styles.aboutContainer}>
                <button
                className={styles.aboutButton}
                onClick={() => router.push("/about")}
                >
                About
                </button>
            </div>
            </div>
        </div>
        <div>
            <h1 className={styles.subject}>Subject Grid Display Application</h1>
        </div>
        </div>
    );
}
