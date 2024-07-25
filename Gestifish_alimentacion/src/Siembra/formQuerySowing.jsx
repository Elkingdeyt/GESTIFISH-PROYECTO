import axios from "axios"
import { useEffect, useState } from "react"

const FormQuerySowing = ({ URI, getSowing, deleteSowing, buttonForm }) => {

    const [sowingQuery, setSowingQuery] = useState([])
    const [Id_Siembra, setId_Siembra] = useState('')

    const sendFormQuery = async (Id_Siembra) => {

        console.log(Id_Siembra)
        
        if (Id_Siembra) {
            const respuesta = await axios.get(URI + 'Id_Siembra/' + Id_Siembra)
            console.log(respuesta.data)
            setSowingQuery(respuesta.data)
            console.log(sowingQuery)
        } else {
            setSowingQuery([])
        }
    }

    useEffect(() => {
        setSowingQuery([])
        setId_Siembra('')
    }, [buttonForm])

    return (
        <>
            <form action="" id="queryForm">
                <label htmlFor="Id_SiembraQuery"> N° Siembra</label>
                <input type="number" id="Id_SiembraQuery" value={Id_Siembra} onChange={(e) => {
                    sendFormQuery(e.target.value)
                    setId_Siembra(e.target.value)
                }} />
            </form>
            {/** Uso del operador */
                sowingQuery.length > 0 ? <table>
                    <thead>
                        <tr>
                            <th>N° Siembra</th>
                            <th>Cantidad Peces</th>
                            <th>Fecha Siembra</th>
                            <th>Fecha PosibleCosecha</th>
                            <th>Peso Actual</th>
                            <th>Observaciones Siembra</th>
                            <th>Hora Siembra</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sowingQuery.map((sowing) => (
                            <tr key={sowing.Id_Siembra}>
                                <td>{sowing.Id_Siembra}</td>
                                <td>{sowing.Can_Peces}</td>
                                <td>{sowing.Fec_Siembra}</td>
                                <td>{sowing.Fec_PosibleCosecha}</td>
                                <td>{sowing.Pes_Actual}</td>
                                <td>{sowing.Obs_Siembra}</td>
                                <td>{sowing.Hor_Siembra}</td>
                                <td>
                                    <button onClick={() => getSowing(sowing.Id_Siembra)}>Editar</button>
                                    <button onClick={() => deleteSowing(sowing.Id_Siembra)}>Eliminar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table> : ''
            }
        </>
    )
}

export default FormQuerySowing