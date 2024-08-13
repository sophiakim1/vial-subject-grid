import Image from "next/image";
import logo from "../../asset/logo.png";
import styles from "./HeaderSection.module.css";
import Link from "next/link";

const HeaderSection: React.FC = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.logoContainer}>
        <Link href="/">
          <Image
            src={logo}
            alt="Logo"
            className={styles.logo}
            width={120}
            height={50}
          />
        </Link>
      </div>

      <div className={styles.aboutContainer}>
        <Link href="/about" className={styles.aboutButton}>
          About
        </Link>
      </div>
    </div>
  );
};

export default HeaderSection;
