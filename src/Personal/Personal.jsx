import './personal.css'
import Input from '../Input/Input'
import { useState } from 'react'

function Personal (
    {personals, updatePersonal}
) {


    return (
        <> 

            <h2>Personal Information</h2>
            <div className= "personal-container">
                <Input
                    label= "First Name"
                    name= "firstName"
                    value= {personals.firstName}
                    onChange= {(e) => updatePersonal("firstName", e.target.value)}
                    placeholder= "Jane"
                />
                <Input
                    label= "Last Name"
                    name= "lastName"
                    value= {personals.lastName}
                    onChange= {(e) => updatePersonal("lastName", e.target.value)}
                    placeholder= "Doe"
                    />
                <Input
                    label= "Address"
                    name= "address"
                    value= {personals.address}
                    onChange= {(e) => updatePersonal("address", e.target.value)}
                    placeholder= "1234 Smith Street Somewhereville, CA 15887"
                    />
                <Input
                    label= "Phone"
                    name= "phone"
                    type= "tel"
                    value= {personals.phone}
                    onChange= {(e) => updatePersonal("phone", e.target.value)}
                    placeholder= "142-382-8696"
                    pattern= "[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    />
                <Input
                    label= "Email"
                    name= "email"
                    type= "email"
                    value= {personals.email}
                    onChange= {(e) => updatePersonal("email", e.target.value)}
                    placeholder= "example@example.com"
                    />
                </div>
        </>
    )
}

export default Personal;