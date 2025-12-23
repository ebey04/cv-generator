import './personal.css'
import Input from '../Input/Input'
import { useState } from 'react'

function Personal () {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    return (
        <> 

            <h2>Personal Information</h2>
            <div className= "personal-container">
                <Input
                    label= "First Name"
                    name= "firstName"
                    value= {firstName}
                    onChange= {(e) => setFirstName(e.target.value)}
                    placeholder= "Jane"
                />
                <Input
                    label= "Last Name"
                    name= "lastName"
                    value= {lastName}
                    onChange= {(e) => setLastName(e.target.value)}
                    placeholder= "Doe"
                    />
                <Input
                    label= "Address"
                    name= "address"
                    value= {address}
                    onChange= {(e) => setAddress(e.target.value)}
                    placeholder= "1234 Smith Street Somewhereville, CA 15887"
                    />
                <Input
                    label= "Phone"
                    name= "phone"
                    type= "tel"
                    value= {phone}
                    onChange= {(e) => setPhone(e.target.value)}
                    placeholder= "142-382-8696"
                    pattern= "[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    />
                <Input
                    label= "Email"
                    name= "email"
                    type= "email"
                    value= {email}
                    onChange= {(e) => setEmail(e.target.value)}
                    placeholder= "example@example.com"
                    />
                </div>
        </>
    )
}

export default Personal;