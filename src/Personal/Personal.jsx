import './personal.css'
import Input from '../Input/Input'
import { useState } from 'react'

function Personal () {

    const [personals, setPersonals] - useState({
                                                id: crypto.randomUUID(), 
                                                firstName: "",
                                                lastName: "",
                                                address: "",
                                                phone: "",
                                                email: ""
                                            })

    function updatePersonal(id, field, value) {
        setPersonals(prev => 
            prev.map(personal =>
                personal.id === id ? {...personal, [field]: value} : personal
            )
        );
    }

    return (
        <> 

            <h2>Personal Information</h2>
            <div className= "personal-container">
                <Input
                    label= "First Name"
                    name= "firstName"
                    value= {firstName}
                    onChange= {(e) => updatePersonal(personal.id, "firstName", e.target.value)}
                    placeholder= "Jane"
                />
                <Input
                    label= "Last Name"
                    name= "lastName"
                    value= {lastName}
                    onChange= {(e) => updatePersonal(personal.id, "lastName", e.target.value)}
                    placeholder= "Doe"
                    />
                <Input
                    label= "Address"
                    name= "address"
                    value= {address}
                    onChange= {(e) => updatePersonal(personal.id, "address", e.target.value)}
                    placeholder= "1234 Smith Street Somewhereville, CA 15887"
                    />
                <Input
                    label= "Phone"
                    name= "phone"
                    type= "tel"
                    value= {phone}
                    onChange= {(e) => updatePersonal(personal.id, "phone", e.target.value)}
                    placeholder= "142-382-8696"
                    pattern= "[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    />
                <Input
                    label= "Email"
                    name= "email"
                    type= "email"
                    value= {email}
                    onChange= {(e) => updatePersonal(personal.id, "email", e.target.value)}
                    placeholder= "example@example.com"
                    />
                </div>
        </>
    )
}

export default Personal;