import axios from 'axios'
import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import FormEstanque from './formEstanque'
import FormQueryEstanque from './formQueryEstanque'
import Swal from 'sweetalert2'

const URI = 'http://localhost:8000/estanques/'
const PATH_FOTOS = 'http://localhost:8000/public/uploads';

const CrudEstanque = () => {

    const [EstanqueList, setEstanqueList] = useState ([])
    const [ButtonForm, setButtonForm] = useState ('Enviar')

    const [estanque, setEstanque] = useState({

        Id_Estanque: '',
        Nom_Estanque: '',
        Esp_Agua: '',
        Tip_Estanque: '',
        Lar_Estanque: '',
        Anc_Estanque: '',
        Des_Estanque: '',
        Img_Estanque: null,
        Rec_Agua: ''

    })

    useEffect(() => {
        getAllEstanques()
    }, [EstanqueList])

    const getAllEstanques = async () => {
        const respuesta = await axios.get(URI)
        setEstanqueList(respuesta.data)
    }

    const getEstanque = async (Id_Estanque) => {
        setButtonForm('Enviar')

            const respuesta = await axios.get(URI + Id_Estanque)

            setButtonForm('Actualizar')

                setEstanque({
                    ...respuesta.data
                });    
    }

    const updateTexButton = (texto) => {
        setButtonForm(texto)
    }
    
    const deleteEstanque = (Id_Estanque) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then(async (result) => {
            if (result.isConfirmed) {
                await axios.delete(URI + Id_Estanque)
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
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
                    {EstanqueList.map((estanque) => (
                        <tr key={estanque.Id_Estanque}>
                            <td>{estanque.Id_Estanque}</td>
                            <td>{estanque.Nom_Estanque}</td>
                            <td>{estanque.Esp_Agua}</td>
                            <td>{estanque.Tip_Estanque}</td>
                            <td>{estanque.Lar_Estanque}</td>
                            <td>{estanque.Anc_Estanque}</td>
                            <td>{estanque.Des_Estanque}</td>
                            <td><img width="80px" src={PATH_FOTOS + '/' + estanque.Img_Estanque}></img></td>
                            <td>{estanque.Rec_Agua}</td>
                            <td>
                                <button onClick={() => getEstanque(estanque.Id_Estanque)}>Editar</button>
                                <button onClick={() => deleteEstanque(estanque.Id_Estanque)}>Borrar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <hr/>
            { }
            <FormEstanque buttonForm={ButtonForm} estanque={estanque} URI={URI} updateTexButton={updateTexButton} />
            <FormQueryEstanque URI={URI} getEstanque={getEstanque} deleteEstanque={deleteEstanque} buttonForm={ButtonForm}/>
        </>
    )
}

export default CrudEstanque
