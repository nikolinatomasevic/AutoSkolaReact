import ContactForma from "../component/ContactForma";
import NavMenu from "../component/NavMenu";

function Contact(){

    function showInput(imeprez, brtel, email, pitanje){
        alert("Poštovani/a " + imeprez + "\n" +
            "Podaci uneti u formu su: " + "\n" + 
            "Broj telefona: " + brtel + "\n" + 
            "Email: " + email + "\n" +
            "Pitanje: " + pitanje + "\n"        
        )
    }

    return (
        <div>

            <NavMenu />

            <ContactForma showInput={showInput} />
        </div>
    )
}

export default Contact;