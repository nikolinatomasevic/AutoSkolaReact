import {useState} from 'react'

function ContactForma(){

    const [imePrezime, setImePrezime] = useState('');
    const [brojTelefona, setBrojTelefona] = useState('');
    const [email, setEmail] = useState('');
    const [pitanje, setPitanje] = useState('');

    function handleImePrezime(e) {
        setImePrezime(e.target.value)
    }

    function handleBrojTelefona(e) {
        setBrojTelefona(e.target.value)
    }

    function handleEmail(e) {
        setEmail(e.target.value)
    }

    function handlePitanje(e) {
        setPitanje(e.target.value)
    }


    return (
        <div>
             <form className="formcnt">
                <div className="eforma">
                    <label>Ime i prezime: </label>
                    <input type={'text'} className="form-control mb-2" value={imePrezime} onChange={handleImePrezime} />
                </div>
                <div className="eforma">
                    <label>Broj telefona: </label>
                    <input type={'text'} className="form-control mb-2" value={brojTelefona} onChange={handleBrojTelefona} />
                </div>
                <div className="eforma">
                    <label>Email: </label>
                    <input type={'email'} className="form-control mb-2" value={email} onChange={handleEmail} />
                </div>
                <div className="eforma">
                    <label>Pitanje: </label>
                    <textarea className="form-control mb-2" value={pitanje} onChange={handlePitanje} />
                </div>
                <button type="button" className='btn btn-dark' id="btnsend">Pošalji</button>
            </form>
        </div>
    )
}

export default ContactForma;