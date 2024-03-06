import Link from "next/link";
import Styles from "./menu.module.css";
import Image from "next/image";

export default function menu(){
    return(
        <header className={Styles.cabecalho}>
            <Image width={100} height={100} src={"https://www.ifms.edu.br/marcaifms.png"}/>
            <Image width={100} height={100} src={"https://moodle.org/theme/moodleorg/pix/moodle_logo_TM.svg"}/>
    <nav>
        <ul className={Styles.erro}>
            <Link href="/">
                <li>Home</li>
            </Link>

            <Link href="/registro">
                <li>Registrar</li>
            </Link>

            
            <Link href="/localizacao">
                <li>Localização</li>
            </Link>

        </ul>
    </nav>
        </header>
    );
};