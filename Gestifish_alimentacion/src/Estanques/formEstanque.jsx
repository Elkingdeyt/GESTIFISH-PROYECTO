import axios from "axios";
import { Button } from "bootstrap";
import { useRef, useState } from "react";
import { useEffect } from "react";

const FormEstanque = ({ buttonForm, estanque, URI, updateTexButton }) => {
    const [Id_Estanque, setId_Estanque] = useState ('')
    const [Nom_Estanque, setNom_Estanque] = useState ('')
    const [Esp_Agua, setEsp_Agua] = useState ('')
    const [Tip_Estanque, setTip_Estanque] = useState ('')
    const [Lar_Estanque, setLar_Estanque] = useState ('')
    const [Anc_Estanque, setAnc_Estanque] = useState ('')
    const [Des_Estanque, setDes_Estanque] = useState ('')
    const [Img_Estanque, setImg_Estanque] = useState (null)
    const [Rec_Agua, setRec_Agua] = useState ('')

    const inputFoto = useRef(null)

    const sendForm = (e) => {
        e.preventDefault()

        if(buttonForm == 'Actualizar') {
            console.log ('Actuaizando ando...')

            axios.put(URI + estanque.Id_Estanque,{
                Id_Estanque: Id_Estanque,
                Nom_Estanque: Nom_Estanque,
                Esp_Agua: Esp_Agua,
                Tip_Estanque: Tip_Estanque,
                Lar_Estanque: Lar_Estanque,
                Anc_Estanque: Anc_Estanque,
                Des_Estanque: Des_Estanque,
                Img_Estanque: Img_Estanque,
                Rec_Agua: Rec_Agua
            }, {
                headers: {"Content-Type": "multipart/form-data"}
            })

            updateTexButton('Enviar')
            clearForm()
            
        }else if (buttonForm == 'Enviar') {
            console.log('guardando ando...')
            axios.post(URI, {
                Id_Estanque: Id_Estanque,
                Nom_Estanque: Nom_Estanque,
                Esp_Agua: Esp_Agua,
                Tip_Estanque: Tip_Estanque,
                Lar_Estanque: Lar_Estanque,
                Anc_Estanque: Anc_Estanque,
                Des_Estanque: Des_Estanque,
                Img_Estanque: Img_Estanque,
                Rec_Agua: Rec_Agua
            }, 
                {headers: {"Content-Type": "multipart/form-data"}
            })
            clearForm()
        }
    }

    const clearForm = () => {
        setId_Estanque('');
        setNom_Estanque('');
        setEsp_Agua('');
        setTip_Estanque('');
        setLar_Estanque('');
        setAnc_Estanque('');
        setDes_Estanque('');
        setImg_Estanque(null);
        if (inputFoto.current) {
            inputFoto.current.value = ''; 
        }
        setRec_Agua('');
    };

    const setData = () => {
        setId_Estanque(estanque.Id_Estanque)
        setNom_Estanque(estanque.Nom_Estanque)
        setEsp_Agua(estanque.Esp_Agua)
        setTip_Estanque(estanque.Tip_Estanque)
        setLar_Estanque(estanque.Lar_Estanque)
        setAnc_Estanque(estanque.Anc_Estanque)
        setDes_Estanque(estanque.Des_Estanque)
        setImg_Estanque(estanque.Img_Estanque)
        setRec_Agua(estanque.Rec_Agua)

    }

    useEffect(() => {
        setData()
    }, [estanque])

    return(
        <>
            <form id="estanqueForm" action="" onSubmit ={sendForm}>

                <label htmlFor="Id_Estanque">Numero</label>
                <input type="number" id="Id_Estanque" value={Id_Estanque} onChange={(e) => setId_Estanque(e.target.value)} />
                <br />

                <label htmlFor="Nom_Estanque">Nombre</label>
                <input type="text" id="Nom_Estanque" value={Nom_Estanque} onChange={(e) => setNom_Estanque(e.target.value)} />
                <br />

                <label htmlFor="Esp_Agua">Espejo de Agua</label>
                <input type="number" id="Esp_Agua" value={Esp_Agua} onChange={(e) => setEsp_Agua(e.target.value)} />
                <br />

                <label htmlFor="Tip_Estanque">Tipo de estanque</label>
                <select name= "" id="Tip_Estanque" value={Tip_Estanque} onChange={(e) => setTip_Estanque(e.target.value)} >
                    <option value="">selecciona uno...</option>
                    <option value="Estanque">Estanque</option>
                    <option value="Lago">Lago</option>
                </select>
                <br />

                <label htmlFor="Lar_Estanque">Largo</label>
                <input type="number" id="Lar_Estanque" value={Lar_Estanque} onChange={(e) => setLar_Estanque(e.target.value)} />
                <br />

                <label htmlFor="Anc_Estanque">Ancho</label>
                <input type="number" id="Anc_Estanque" value={Anc_Estanque} onChange={(e) => setAnc_Estanque(e.target.value)} />
                <br />

                <label htmlFor="Des_Estanque">Descripcion</label>
                <input type="text" id="Des_Estanque" value={Des_Estanque} onChange={(e) => setDes_Estanque(e.target.value)} />
                <br />

                <label htmlFor="Img_Estanque">Imagen</label>
                <input type="file" id="Img_Estanque" onChange={(e) => setImg_Estanque(e.target.files[0])} ref={inputFoto} />
                <br />

                <label htmlFor="Rec_Agua">Recambio de Agua</label>
                <input type="number" id="Rec_Agua" value={Rec_Agua} onChange={(e) => setRec_Agua(e.target.value)} />
                <br />

                <input type="submit" id="boton" value={buttonForm} className="btn btn-success"/>
            </form>
        </>
    )
}

export default FormEstanque

