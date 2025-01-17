import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import FormResponsable from './FormResponsable.jsx'
import FromQueryResponsable from './FromQueryResponsable.jsx'
import Swal from 'sweetalert2'

const URI = 'http://localhost:8000/responsable/'

const CrudResponsable = () => {

    const [ResponsableList, setResponsableList] = useState ([]);

    const [buttonForm, setButtonForm] = useState('Enviar');

    const [responsable, setResponsable] =useState({
        Id_Responsable: '',
        Nom_Responsable: '',
        Ape_Responsable: '',
        Doc_Responsable: '',
        Tip_Responsable: '',
        Cor_Responsable: '',
        Num_Responsable: ''
    })

    useEffect(() => {
        getAllResponsable()
    }), ([])

    const getAllResponsable = async() => {
        const respuesta = await axios.get(URI)
        setResponsableList(respuesta.data)
    }

    const getResponsable = async (Id_Responsable) => {

        setButtonForm('Enviar')

        const respuesta = await axios.get(URI + Id_Responsable)

        setButtonForm('Actualizar')

        setResponsable({
            ...respuesta.data
        })

    }

    const updateTextButton = (texto) => {
        setButtonForm(texto)
    }

    const deleteResponsable = (Id_Responsable) => {
        Swal.fire({
            title: "Estas Seguro?",
            text: "No Podras Revertir Esto!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, Borrar!"
          }).then (async (result) => {
            if(result.isConfirmed) {
                await axios.delete(URI + Id_Responsable)
                Swal.fire({
                    title: "Borrado!!",
                    text: "Borrado Exitosamente",
                    icon: "success"
                  });
            }
          })
    }

    return (
        <>

            <table className="table table-bordered border-info text-center mt-4" style={{ border: "3px solid" }}>
                <thead >
                    <tr >
                        <th className='border-info align-middle' style={{ border: "3px solid" }}>Nombre</th>
                        <th className='border-info align-middle' style={{ border: "3px solid" }}>Apellidos</th>
                        <th className='border-info align-middle' style={{ border: "3px solid" }}>Documento de Identidad</th>
                        <th className='border-info align-middle' style={{ border: "3px solid" }}>Tipo de Responsable</th>
                        <th className='border-info align-middle' style={{ border: "3px solid" }}>Cor_Responsable</th>
                        <th className='border-info align-middle' style={{ border: "3px solid" }}>Número de Telefono</th>
                        <th className='border-info align-middle' style={{ border: "3px solid" }}>Accionnes</th>
                    </tr>
                </thead>
                <tbody >
                    {ResponsableList.map((responsable) => (
                        <tr key={responsable.Id_Responsable} className='border-info font-monospace' style={{ border: "3px solid" }}>
                            <td className='border-info align-middle' style={{ border: "3px solid" }}>{responsable.Id_Responsable}</td>
                            <td className='border-info align-middle' style={{ border: "3px solid" }}>{responsable.Nom_Responsable}</td>
                            <td className='border-info align-middle' style={{ border: "3px solid" }}>{responsable.Ape_Responsable}</td>
                            <td className='border-info align-middle' style={{ border: "3px solid" }}>{responsable.Doc_Responsable}</td>
                            <td className='border-info align-middle' style={{ border: "3px solid" }}>{responsable.Tip_Responsable}</td>
                            <td className='border-info align-middle' style={{ border: "3px solid" }}>{responsable.Cor_Responsable}</td>
                            <td className='border-info align-middle' style={{ border: "3px solid" }}>{responsable.Num_Responsable}</td>
                            <td>
                                <button className='btn btn-info align-middle ' onClick={() => getResponsable(responsable.Id_Responsable)}><i class="fa-solid fa-pen-to-square"></i> Editar</button>
                                <button className='btn btn-info align-middle m-2' onClick={() => deleteResponsable(responsable.Id_Responsable)}><i class="fa-solid fa-trash-can"></i> Borrar</button>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
            <hr />
            <FormResponsable buttonForm = {buttonForm} responsable={responsable} URI={URI} updateTextButton={updateTextButton}/>
            <hr />
            
            <FromQueryResponsable URI={URI} getResponsable={getResponsable} deleteResponsable={deleteResponsable} buttonForm={buttonForm} />
        </>
    )

}

export default CrudResponsable