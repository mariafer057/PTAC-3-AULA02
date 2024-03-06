import Link from "next/link";
import Styles from "./not-found.module.css"
import footer from "./componentes/footer";
import menu from "./componentes/menu";



export default function NotFound(){
    return(
        <div>
    <h1  className={Styles.erro}>Erro! Página não encontrada</h1>
    <Link className={Styles.retorno} href="/">Retornar para Home</Link>
    </div>
    );
};