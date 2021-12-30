import Link from "next/link"
import { database } from "pg/lib/defaults"
import Style from "./style.module.css"

function Table({data}) {
    return (
        <div className={Style.container}>
            <div className={Style.cont}>
            <table className={Style.table}>
                <thead>
                    <tr>
                        <th>Nome</th>

                        <th>Sobrenome</th>

                        <th>Email</th>

                        <th>Telefone</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(data=>{
                        return(
                            <tr>
                                <td>{data.nome}</td>
        
                                <td>{data.sobrenome}</td>
        
                                <td>{data.email}</td>
        
                                <td>{data.telefone}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default Table
