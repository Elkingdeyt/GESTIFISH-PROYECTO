import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";



const FormResponsable = ({buttonForm, responsable, URI, updateTextButton}) => {

    const [Id_Responsable, setId_Responsable] = useState('')
    const [Nom_Responsable, setNom_Responsable] = useState('')
    const [Ape_Responsable, setApe_Responsable] = useState('')
    const [Doc_Responsable, setDoc_Responsable] = useState('')
    const [Tip_Responsable, setTip_Responsable] = useState('')
    const [Cor_Responsable, setCor_Responsable] = useState('')
    const [Num_Responsable, setNum_Responsable] = useState('')

    const sendFormR = (e) => {

        e.preventDesafult()

        console.log(buttonForm)

        if (buttonForm == 'Actualizar') {
            console.log('Actualizando Ando...')
            axios.put(URI + responsable.Id_Responsable, {
                Id_Responsable: Id_Responsable,
                Nom_Responsable: Nom_Responsable,
                Ape_Responsable: Ape_Responsable,
                Doc_Responsable: Doc_Responsable,
                Tip_Responsable: Tip_Responsable,
                Cor_Responsable: Cor_Responsable,
                Num_Responsable: Num_Responsable
            })

            updateTextButton('Enviar')

            clearFormR()

        } else if (buttonForm == 'Enviar') {
            console.log('Guardando Ando...')
            axios.put(URI + responsable.Id_Responsable, {
                Id_Responsable: Id_Responsable,
                Nom_Responsable: Nom_Responsable,
                Ape_Responsable: Ape_Responsable,
                Doc_Responsable: Doc_Responsable,
                Tip_Responsable: Tip_Responsable,
                Cor_Responsable: Cor_Responsable,
                Num_Responsable: Num_Responsable
            })

            clearFormR()
        }

    }

    const clearFormR = () => {
        setId_Responsable('')
        setNom_Responsable('')
        setApe_Responsable('')
        setDoc_Responsable('')
        setTip_Responsable('')
        setCor_Responsable('')
        setNum_Responsable('')
    }

    const setDataR = () => {
        setId_Responsable(responsable.Id_Responsable)
        setNom_Responsable(responsable.Nom_Responsable)
        setApe_Responsable(responsable.Ape_Responsable)
        setDoc_Responsable(responsable.Doc_Responsable)
        setTip_Responsable(responsable.Tip_Responsable)
        setCor_Responsable(responsable.Cor_Responsable)
        setNum_Responsable(responsable.Num_Responsable)
    }

    useEffect(() => {
        setDataR()
    }, [responsable])

    return (
        <>
            <div className="d-flex flex-column align-items-center">
                <h1 className="fs-1 fw-bold d-flex" >Resgistrar Responsables</h1>
                <form action="" id="responsableForm" onSubmit={sendFormR} className="fw-bold m-2" >
                    <label htmlFor="Nom_Responsable" className="m-2">Nombre del Responsable: </label>
                    <input type="text"  id="Nom_Responsable" value={Nom_Responsable} onChange={(e) => setNom_Responsable(e.target.value)} />        
                    <br />
                    <label htmlFor="Ape_Responsable" className="m-2">Apellidos del Responsable: </label>
                    <input type="text" id="Ape_Responsable" value={Ape_Responsable} onChange={(e) => setApe_Responsable (e.target.value)} />
                    <br />
                    <label htmlFor="Doc_Responsable" className="m-2">Documento de Identificación:</label>
                    <input type="text" id="Doc_Responsable" value={Doc_Responsable} onChange={(e) => setDoc_Responsable (e.target.value)} />
                    <br />
                    <label htmlFor="Tip_Responsable" className="m-2">Tipo de Responsable:</label>
                    <select type="text" id="Tip_Responsable" value={Tip_Responsable} onChange={(e) => setTip_Responsable (e.target.value)}>
                        <option value="">Selecciones uno...</option>
                        <option value="Encargado de la Unidad"></option>
                        <option value="Instructor"></option>
                        <option value="Otro"></option>
                    </select>
                    <br />
                    <label htmlFor="Cor_Responsable" className="m-2">Correo del Responsable:</label>
                    <input type="text" id="Cor_Responsable" value={Cor_Responsable} onChange={(e) => setCor_Responsable (e.target.value)} />
                    <br />
                    <label htmlFor="Num_Responsable" className="m-2">Número de Telefono:</label>
                    <input type="time" id="Num_Responsable" value={Num_Responsable} onChange={(e) => setNum_Responsable (e.target.value)} />
                    <br />
                    <input type="submit" id="boton" value={buttonForm} className="btn btn-success m-2" />
                </form>
            </div>
        </>

    )

}

export default FormResponsable
