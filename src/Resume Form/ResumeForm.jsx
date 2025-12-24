import { useState } from 'react'
import './resume.css'
import Personal from '../Personal/Personal'
import Education from '../Education/Education'
import Work from '../Work/Work'
import Button from '../Button/Button'

function ResumeForm() {
    

    return (
        <>
        <Personal />
        <Education />
        <Work />
        </>
    )
}

export default ResumeForm;
