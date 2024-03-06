import Link from "next/link";
import Image from "next/image";
import Styles from "./footer.module.css";
export default function footer(){
    return(
        <footer className={Styles.footer}>
        <nav className={Styles.footer}>
         <Link href="https://ead.ifms.edu.br/">
        <Image width={100} height={100} src={"https://moodle.org/theme/moodleorg/pix/moodle_logo_TM.svg"}/>
        </Link>
        </nav>
        </footer>
    );
};