"use client";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import HeaderSection from "../components/navigation/HeaderSection";

export default function About() {
    const router = useRouter();

    return (
        <div>
            <HeaderSection />
            <div className={styles.content}>
                <h1 className={styles.subject}>Subject Grid Display Application</h1>
            </div>
        </div>
    );
}
