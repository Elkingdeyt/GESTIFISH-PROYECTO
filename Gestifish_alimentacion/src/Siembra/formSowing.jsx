import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const FormSowings = ({buttonForm, sowing, URI, updateTextButton}) => {
    const [Id_Siembra, setId_Siembra] = useState('')
    const [Can_Peces, setCan_Peces] = useState('')
    const [Fec_Siembra, setFec_Siembra] = useState('')
    const [Fec_PosibleCosecha, setFec_PosibleCosecha] = useState('')
    const [Pes_Actual, setPes_Actual] = useState('')
    const [Obs_Siembra, setObs_Siembra] = useState('')
    const [Hor_Siembra, setHor_Siembra] = useState('')
    const [Gan_Peso, setGan_Peso] = useState('')
    const [Vlr_Siembra, setVlr_Siembra] = useState('')

    const sendForm = (e) => {
        e.preventDefault()
        if(buttonForm == 'Actualizar') {
            console.log('Actualizando...')
            axios.put(URI + sowing.Id_Siembra, {
                Id_Siembra: Id_Siembra,
                Can_Peces: Can_Peces,
                Fec_Siembra: Fec_Siembra,
                Fec_PosibleCosecha: Fec_PosibleCosecha,
                Pes_Actual: Pes_Actual,
                Obs_Siembra: Obs_Siembra,
                Hor_Siembra: Hor_Siembra,
                Gan_Peso: Gan_Peso,
                Vlr_Siembra: Vlr_Siembra
            })
            updateTextButton('Enviar')
            clearForm()
        } else if(buttonForm == 'Enviar'){
            console.log('Guardando...')
            axios.post(URI, {
                Id_Siembra: Id_Siembra,
                Can_Peces: Can_Peces,
                Fec_Siembra: Fec_Siembra,
                Fec_PosibleCosecha: Fec_PosibleCosecha,
                Pes_Actual: Pes_Actual,
                Obs_Siembra: Obs_Siembra,
                Hor_Siembra: Hor_Siembra,
                Gan_Peso: Gan_Peso,
                Vlr_Siembra: Vlr_Siembra
            })
            clearForm()
        }
    }

    const clearForm = () => {
        setId_Siembra('')
        setCan_Peces('')
        setFec_Siembra('')
        setFec_PosibleCosecha('')
        setPes_Actual('')
        setObs_Siembra('')
        setHor_Siembra('')
        setGan_Peso('')
        setVlr_Siembra('')
    }

    const setData = () => {
        setId_Siembra(sowing.Id_Siembra)
        setCan_Peces(sowing.Can_Peces)
        setFec_Siembra(sowing.Fec_Siembra)
        setFec_PosibleCosecha(sowing.Fec_PosibleCosecha)
        setPes_Actual(sowing.Pes_Actual)
        setObs_Siembra(sowing.Obs_Siembra)
        setHor_Siembra(sowing.Hor_Siembra)
        setGan_Peso(sowing.Gan_Peso)
        setVlr_Siembra(sowing.Vlr_Siembra)
    }
    useEffect(() => {
        setData()
    }, [sowing])

    return (
        <>
            <form id="sowingForm" action="" onSubmit={sendForm}>
                <label htmlFor="Id_Siembra"> N° Siembra</label>
                <input type="number" id="Id_Siembra" value={Id_Siembra} onChange={(e) => setId_Siembra(e.target.value)}/>
                <br/>
                <label htmlFor="Can_Peces"> Cantidad de Peces</label>
                <input type="number" id="Can_Peces" value={Can_Peces} onChange={(e) => setCan_Peces(e.target.value)}/>
                <br/>
                <label htmlFor="Fec_Siembra"> Fecha de Siembra</label>
                <input type="date" id="Fec_Siembra" value={Fec_Siembra} onChange={(e) => setFec_Siembra(e.target.value)} />
                <br/>
                <label htmlFor="Fec_PosibleCosecha"> Fecha Posible Cosecha</label>
                <input type="date" id="Fec_PosibleCosecha" value={Fec_PosibleCosecha} onChange={(e) => setFec_PosibleCosecha(e.target.value)} />
                <br/>
                <label htmlFor="Pes_Actual"> Peso Actual</label>
                <input type="number" id="Pes_Actual" value={Pes_Actual} onChange={(e) => setPes_Actual(e.target.value)}/>
                <br/>
                <label htmlFor="Obs_Siembra"> Observaciones</label>
                <input type="text" id="Obs_Siembra" value={Obs_Siembra} onChange={(e) => setObs_Siembra(e.target.value)}/>
                <br/>
                <label htmlFor="Hor_Siembra"> Hora de Siembra</label>
                <input type="time" id="Hor_Siembra" value={Hor_Siembra} onChange={(e) => setHor_Siembra(e.target.value)}/>
                <br/>
                <label htmlFor="Gan_Peso"> Ganancia de Peso</label>
                <input type="number" id="Gan_Peso" value={Gan_Peso} onChange={(e) => setGan_Peso(e.target.value)}/>
                <br/>
                <label htmlFor="Vlr_Siembra"> Valor de la Siembra</label>
                <input type="number" id="Vlr_Siembra" value={Vlr_Siembra} onChange={(e) => setVlr_Siembra(e.target.value)}/>
                <br/>
                <br/>
                <input type="submit" id="boton" value={buttonForm} className="btn btn-success"/>
            </form>
        </>
    )
}

export default FormSowings