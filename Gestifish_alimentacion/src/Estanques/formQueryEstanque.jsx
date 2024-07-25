import axios from "axios"
import { useEffect, useState } from "react"

const FormQueryEstanque = ({ URI, getEstanque, deleteEstanque, buttonForm }) => {

    const[estanqueQuery, setEstanqueQuery] = useState([])
    const[Id_Estanque, setId_Estanque] = useState('')

    const sendFormQuery = async (Id_Estanque) => {

        if (Id_Estanque) {
            const respuesta = await axios.get(URI + 'Id_Estanque/' + Id_Estanque)
            setEstanqueQuery(respuesta.data)

        }else {
            setEstanqueQuery([])
        }
    }

    useEffect(() => {
        setEstanqueQuery([])
        setId_Estanque('')
    }, [buttonForm])

    return (
        <>
            <form action="" id="queryForm">
                <label htmlFor="Id_EstanqueQuery">Numero</label>
                <input type="number" id="Id_EstanqueQuery" value={Id_Estanque} onChange={(e) => { sendFormQuery(e.target.value); setId_Estanque(e.target.value) }} />
            </form>
                 
             { estanqueQuery.length > 0 ?<table>
                    <thead>
                        <tr>
                        <th>Numero</th>
                        <th>Nombre</th>
                        <th>Espejo de Agua</th>
                        <th>Tipo</th>
                        <th>Largo</th>
                        <th>Ancho</th>
                        <th>Descripcion</th>
                        <th>Imagen</th>
                        <th>Recambio de agua</th>
                        </tr>
                    </thead>
                    <tbody>
                        { }
                        {estanqueQuery.map((estanque) => (
                             <tr key={estanque.Id_Estanque}>
                                 <td>{estanque.Id_Estanque}</td>
                                 <td>{estanque.Nom_Estanque}</td>
                                 <td>{estanque.Esp_Agua}</td>
                                 <td>{estanque.Tip_Estanque}</td>
                                 <td>{estanque.Lar_Estanque}</td>
                                 <td>{estanque.Anc_Estanque}</td>
                                 <td>{estanque.Des_Estanque}</td>
                                 <td>{estanque.Img_Estanque}</td>
                                 <td>{estanque.Rec_Agua}</td>
                                 <td>
                                    <button onClick={() => getEstanque(estanque.Id_Estanque)}>Editar</button>
                                    <button onClick={() => deleteEstanque(estanque.Id_Estanque)}>Borrar</button></td>
                             </tr>
                        ))}
                    </tbody>
                </table> : ''
             }
        </>
    )
}

export default FormQueryEstanque