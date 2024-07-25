import axios from 'axios'
import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import FormSowings from './formSowing.jsx';
import FormQuerySowing from './formQuerySowing.jsx';
import Swal from 'sweetalert2'

const URI = 'http://localhost:8000/sowing/'

const CrudSowings = () => {
    const [sowingList, setSowingList] = useState([])

    const [buttonForm, setButtonForm] = useState('Enviar')

    const [sowing, setSowing] = useState({
        Id_Siembra: '',
        Can_Peces: '',
        Fec_Siembra: '',
        Fec_PosibleCosecha: '',
        Pes_Actual: '',
        Obs_Siembra: '',
        Hor_Siembra: '',
        Gan_Peso: '',
        Vlr_Siembra: ''
    })

    const getSowing = async (Id_Siembra) => {

        console.log(Id_Siembra)
        setButtonForm('Enviar')
        const respuesta = await axios.get(URI + Id_Siembra)

        console.log(respuesta.data)
        setButtonForm('Actualizar')
        setSowing({
            ...respuesta.data
        })
    }

    const updateTextButton = (texto) => {
        setButtonForm(texto)
    }

    const deleteSowing = (Id_Siembra) => {
        Swal.fire({
            title: 'Estás seguro?',
            text: "No podrás revertir esto!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: 'Si, eliminar!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                await axios.delete(URI + Id_Siembra)
                Swal.fire({
                    title: 'Eliminado!',
                    text: 'La siembra ha sido eliminada.',
                    icon: 'success'
                });
            }
        })
    }
    useEffect(() => {
        getAllSowings()
    }, [sowingList])

    const getAllSowings = async () => {
        const respuesta = await axios.get(URI)
        setSowingList(respuesta.data)
    }

    return (
        <>
            <table className='mx-auto text-center p-3 table table-striped'>
                <thead>
                    <tr>
                        <th>N° Siembra</th>
                        <th>Cantidad Peces</th>
                        <th>Fecha Siembra</th>
                        <th>Fecha Posibe Cosecha</th>
                        <th>Peso Actual</th>
                        <th>Observaciones</th>
                        <th>Hora Siembra</th>
                        <th>Ganancia Peso</th>
                        <th>Valor Siembra</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {sowingList.map((sowing) => (
                        <tr key={sowing.Id_Siembra}>
                            <td>{sowing.Id_Siembra}</td>
                            <td>{sowing.Can_Peces}</td>
                            <td>{sowing.Fec_Siembra}</td>
                            <td>{sowing.Fec_PosibleCosecha}</td>
                            <td>{sowing.Pes_Actual}</td>
                            <td>{sowing.Obs_Siembra}</td>
                            <td>{sowing.Hor_Siembra}</td>
                            <td>{sowing.Gan_Peso}</td>
                            <td>{sowing.Vlr_Siembra}</td>
                            <td>
                                <button onClick={() => getSowing(sowing.Id_Siembra)}>Editar</button>
                                <button onClick={() => deleteSowing(sowing.Id_Siembra)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <FormSowings buttonForm={buttonForm} sowing={sowing} URI={URI} updateTextButton={updateTextButton} />
            <br />
            <FormQuerySowing URI={URI} getSowing={getSowing} deleteSowing={deleteSowing} buttonForm={buttonForm} />
        </>
    )
}

export default CrudSowings;