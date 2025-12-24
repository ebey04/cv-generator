import { useState } from 'react'
import './resume.css'
import Header from '../Header/Header'
import Personal from '../Personal/Personal'
import Education from '../Education/Education'

function ResumeForm() {
    

    return (
        <>
        <Header />
        <Personal />
        <Education />
        </>
    )
}

export default ResumeForm;
