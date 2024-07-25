/* eslint-disable react/prop-types */
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const FormTranfers = ({ buttonForm, tranfers,URI, updateTextButton}) => {
    const [fec_traslado, setFecha]= useState('')
    const [can_peces, setPeces]= useState('')
    const [obs_traslado, setObservaciones]= useState('')
    const [hor_traslado, setHora]= useState('')

    const sendForm = (e) => {

        e.preventDefault()

        if (buttonForm == 'Actualizar') {
            console.log('actualizando ando...')

            axios.put(URI + tranfers.id, {  
                fec_traslado: fec_traslado,
                can_peces: can_peces,
                obs_traslado: obs_traslado,
                hor_traslado: hor_traslado
            })

            updateTextButton('Enviar')

            clearForm()

        }  else if (buttonForm == 'Enviar') {
            console.log('guardando ando...')
            axios.post(URI, {
                fec_traslado: fec_traslado,
                can_peces: can_peces,
                obs_traslado: obs_traslado,
                hor_traslado: hor_traslado
            })
            clearForm()
        }
    }

    const clearForm = () => {
        setFecha('')
        setPeces('')
        setObservaciones('')
        setHora('')
    }

    const setData = () => {
        setFecha(tranfers.fec_traslado)
        setPeces(tranfers.can_peces)
        setObservaciones(tranfers.obs_traslado)
        setHora(tranfers.hor_traslado)

        }
            useEffect(() => {
                setData()
            }, [tranfers])
        
    return (
        <>
        <form id="tranferForm" action=""  onSubmit={sendForm}>
            <label htmlFor="fec_traslado">Fecha Traslado</label>
            <input type="date" id="fec_traslado" value={fec_traslado} onChange={(e) => setFecha(e.target.value)} />
            <br/>
            <label htmlFor="can_peces">Cantidad Peces</label>
            <input type="text" id="can_peces" value={can_peces} onChange={(e) => setPeces(e.target.value)} />
            <br/>
            <label htmlFor="obs_traslado">Observaciones</label>
            <input type="text" id="obs_traslado" value={obs_traslado} onChange={(e) => setObservaciones(e.target.value)} />
            <br/>
            <label htmlFor="hor_traslado">Hora Traslado</label>
            <input type="TIME" id="hor_traslado" value={hor_traslado} onChange={(e) => setHora(e.target.value)} />
            <br/>

            <input type="submit" id="boton" value={buttonForm} className="btn btn-success"/>
        </form>
        </>
    )
}

export default FormTranfers