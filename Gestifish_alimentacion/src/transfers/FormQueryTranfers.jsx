import axios from "axios";
import { useEffect, useState } from "react"

const FormQueryTranfers = ({ URI, getTranfers, deleTranfers, buttonForm }) => {

    const [tranfersQuery, setTranfersQuery] = useState([])
    const [fec_traslado, setFec_traslado] = useState('')

    const sendFormQuery = async (fec_traslado) => {

        if (fec_traslado) {
            
            const respuesta = await axios.get(URI + 'fec_traslado/' + fec_traslado)

            setTranfersQuery(
                respuesta.data
            )
        } else {

            setTranfersQuery([])
        }
    }

    useEffect(() => {
        setTranfersQuery([])
        setFec_traslado('')

    }, [buttonForm])

    return (
        <>
            <form action="" id="queryForm">
                <label htmlFor="fechaQuery">Fecha Traslado</label>
                <input type="date" id="fechaQuery" value={fec_traslado} onChange={(e) => {
                    sendFormQuery(e.target.value);
                    setFec_traslado(e.target.value);
                }} />
            </form>

            {
                tranfersQuery.length > 0 ? <table>
                    <thead>
                        <tr>
                            <th>Fecha Traslado</th>
                            <th>Cantidad Peces</th>
                            <th>Observaciones</th>
                            <th>Hora Traslado</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tranfersQuery.map((tranfers) => (
                            <tr key={tranfers.id}>
                                <td>{tranfers.fec_traslado}</td>
                                <td>{tranfers.can_peces}</td>
                                <td>{tranfers.obs_traslado}</td>
                                <td>{tranfers.hor_traslado}</td>
                                <td>
                                    <button onClick={() => getTranfers(tranfers.id)}>Editar</button>
                                    <button onClick={() => deleTranfers(tranfers.id)}>Borrar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table> : ''
            
            }
        </>
    )
}

export default FormQueryTranfers
