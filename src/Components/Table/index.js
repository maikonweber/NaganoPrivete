import Link from "next/link"
import { database } from "pg/lib/defaults"
import Style from "./style.module.css"

function Table({data}) {
    console.log(data)
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
                        <th>Mensagem</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    
                    { data.map(data =>{
                        return(
                            <tr>
                                <td>{data.first_name}</td>
        
                                <td>{data.last_name}</td>
        
                                <td>{data.email}</td>
        
                                <td>{data.phone}</td>

                                <td>{data.message}</td>
                                
                                <td>{new Intl.DateTimeFormat('pt-BR', { dateStyle: 'short', timeStyle: 'short' }).format(data.create)}</td>
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
