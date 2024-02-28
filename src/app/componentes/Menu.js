import Link from "next/link";
import Styles from "./menu.module.css";
import Image from "next/image";

export default function menu(){
    return(
        <header className={Styles.cabecalho}>
            <Image width={100} height={100} src={"https://www.ifms.edu.br/marcaifms.png"}/>
    <nav>
        <ul>
            <Link href="/">
                <li>Home</li>
            </Link>

            <Link href="/registro">
                <li>Registrar</li>
            </Link>
        </ul>
    </nav>
        </header>
    );
};