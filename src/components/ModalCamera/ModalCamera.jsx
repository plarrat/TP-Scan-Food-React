import { Modal, Button } from 'react-bootstrap';
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import { useState } from "react";


export default function ModalCamera({show, closeModal, setEan, addProduct}){
    const [camView, setCamView] = useState("environment");

    return <>
        <Modal show={show} onHide={closeModal}>
            <Modal.Header className="bg-primary text-light">
                <Modal.Title><i className="bi bi-upc-scan"></i> Scannez un code barre</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <select 
                    className="form-control" 
                    value={camView} 
                    onChange={(e)=>setCamView(e.target.value)}
                >
                    <option value="environment">Caméra Arrière</option>
                    <option value="user">Caméra Avant</option>
                </select>

                <BarcodeScannerComponent
                    width={465}
                    height={400}
                    facingMode={camView}
                    onUpdate={(err, result) => {
                        if(result){
                            setEan(result.text);
                            setTimeout(()=>{
                                addProduct(result.text);
                                closeModal();
                            },200)
                        }
                    }}
                />
            </Modal.Body>

            <Modal.Footer>
                <Button variant="outline-danger" onClick={closeModal}>Annuler</Button>
            </Modal.Footer>
      </Modal>
          
    </>
}