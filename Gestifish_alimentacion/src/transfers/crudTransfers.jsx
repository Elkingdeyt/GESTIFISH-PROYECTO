import axios from 'axios'
import { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
import FormTranfers from './formTranfers'  

import Swal from 'sweetalert2'
import FormQueryTranfers from './FormQueryTranfers'

const URI = 'http://localhost:8000/tranfers/'

const CrudTransfers = () => {

    const [tranferList, setTranferList] =useState([])
    
    const [buttonForm, setButtonForm] = useState('Enviar')
    
    const [tranfers, setTranfers] = useState({
        id: '',
        fec_traslado: '',
        can_peces: '',
        obs_traslado: '', 
        hor_traslado: '',
    })


    useEffect(() => {
        getAllTranfers()
    }, [tranferList])


    const getAllTranfers = async () => {
        const respuesta = await axios.get(URI)
        
        setTranferList(respuesta.data)

    }

    const getTranfers = async (idTranfers) => {
        setButtonForm('Actualizar')
        const respuesta = await axios.get(URI + idTranfers)

        setTranfers({
            ...respuesta.data
        })

    }

    const updateTextButton = (texto) => {
        setButtonForm(texto)
    }
    const deleTranfers = (idTranfers) => {
        Swal.fire({
            title: "Estás seguro?",
            text: "No podrás revertir esto!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, borrar!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                await axios.delete(URI + idTranfers)
                Swal.fire({
                title: "Borrado!",
                text: "El registro ha sido borrado exitosamente.",
                icon: "success"
            });
            }
        });
    }


    
    return (
        <>
        <table>
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
                {tranferList.map((tranfers) => (
                    <tr key={tranfers.id}>
                            <td>{tranfers.fec_traslado}</td>
                            <td>{tranfers.can_peces}</td>
                            <td>{tranfers.obs_traslado}</td>
                            <td>{tranfers.hor_traslado}</td>
                            <td>
                                <button onClick={() => getTranfers(tranfers.id)}>Editar</button>
                                <button onClick={() => deleTranfers(tranfers.id)}>Borrar</button></td>
                        </tr>
                    ))}
                
                </tbody>
            </table>
            <hr/>
            <FormTranfers buttonForm={buttonForm} tranfers={tranfers} URI={URI} updateTextButton={updateTextButton} />
            <hr/>
            <FormQueryTranfers URI={URI} getTranfers={getTranfers} deleTranfers={deleTranfers} buttonForm={buttonForm} />
        </>

    )

}

export default CrudTransfers