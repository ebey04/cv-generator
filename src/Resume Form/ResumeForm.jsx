import { useState } from 'react'
import './resume.css'
import Personal from '../Personal/Personal'
import Education from '../Education/Education'
import Work from '../Work/Work'
import Button from '../Button/Button'

function ResumeForm() {
    const [personals, setPersonals] - useState(
            {firstName: "", lastName: "", address: "", phone: "", email: ""})

    function updatePersonal(field, value) {
        setPersonals(prev => ({
            ...prev, 
            [field]: value
        }));
    }

        const [works, setWorks] = useState([
        { id: crypto.randomUUID(), company: "", dates: "", position: "", duties: "" }
    ]);

    function addWork() {
        setWorks(prev => [
        ...prev,
        { id: crypto.randomUUID(), company: "", dates: "", position: "", duties: "" }
        ]);
    }

    function updateWork(id, field, value) {
        setWorks(prev =>
        prev.map(work =>
            work.id === id ? { ...work, [field]: value } : work
        )
        );
    }

        const [educations, setEducations] = useState([
        {id: crypto.randomUUID(), school: "", degree: "", gradYear: ""}
    ]);

    function addEducation() {
        setEducations(prev => [
            ...prev,
            {id: crypto.randomUUID(), school: "", degree: "", gradYear: ""}
        ]);
    }

    function updateEducation(id, field, value) {
        setEducations(prev => 
            prev.map(edu =>
                edu.id === id ? {...edu, [field]: value} : edu
            )
        );
    }

    return (
        <>
        <Personal 
            personals = {personals}
            updatePersonal = {updatePersonal}
        />
        <Education 
            educations = {educations}
            addEducation = {addEducation}
            updateEducation = {updateEducation}
        />
        <Work 
            works = {works}
            updateWork = {updateWork}
            addWork = {addWork}
        />
        </>
    )
}

export default ResumeForm;
