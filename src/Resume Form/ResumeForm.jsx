import { useState } from 'react'
import './resume.css'
import Header from '../Header/Header'
import Personal from '../Personal/Personal'
import Education from '../Education/Education'
import Work from '../Work/Work'

function ResumeForm() {
    

    return (
        <>
        <Header />
        <Personal />
        <Education />
        <Work />
        </>
    )
}

export default ResumeForm;
