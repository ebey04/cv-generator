import { useState } from 'react'
import { useEffect } from 'react'
import './resume.css'
import Personal from '../Personal/Personal'
import Education from '../Education/Education'
import Work from '../Work/Work'
import Button from '../Button/Button'
import ResumePreview from '../ResumePreview/ResumePreview'

function ResumeForm() {

    const [personals, setPersonals] = useState(
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

    function clearResume() {
        localStorage.removeItem("resumeData");

        setPersonals({
            firstName: "",
            lastName: "",
            address: "",
            phone: "",
            email: ""
        });

        setEducations([
            { id: crypto.randomUUID(), school: "", degree: "", gradYear: "" }
        ]);

        setWorks([
            { id: crypto.randomUUID(), company: "", dates: "", position: "", duties: "" }
        ]);

        setSubmitted(false);
    }


    const [submitted, setSubmitted] = useState(false);

    function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    }
    
    useEffect(() => {
    const savedData = localStorage.getItem("resumeData");

    if (savedData) {
        const parsed = JSON.parse(savedData);
        setPersonals(parsed.personal);
        setEducations(parsed.educations);
        setWorks(parsed.works);

        setSubmitted(true); 
    }
}, []);

useEffect(() => {
    const dataToSave = {
        personal: personals,
        educations,
        works
    };

    localStorage.setItem("resumeData", JSON.stringify(dataToSave));
    }, [personals, educations, works]);

    return (
        <div className="layout">
            <form onSubmit={handleSubmit}> 
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

            <div className="masterBtns">
                <Button onClick= {clearResume} children= "Clear Resume" />

                <div className= "submitBtn">
                    <Button type="submit" children="Submit" />
                </div>
            </div>
            
            </form>

            {submitted && (
            <ResumePreview
            personal={personals}
            educations={educations}
            works={works}
            />
        )}
        </div>
    );
}

export default ResumeForm;
