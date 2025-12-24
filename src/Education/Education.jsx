import './education.css'
import Input from '../Input/Input'
import { useState } from 'react'
import Button from "../Button/Button"

function Education(
    {educations, updateEducation, addEducation}
) {



    return (
        <section>
            <h2>Education</h2>

            <div className= "edContainer">
            {educations.map((edu) => (
                <div key={edu.id} className="edCard">
                <Input
                    label="School"
                    name={`school-${edu.id}`}
                    value={edu.school}
                    onChange={(e) => updateEducation(edu.id, "school", e.target.value)}
                    placeholder="Salem State University"
                />

                <Input
                    label="Degree"
                    name={`degree-${edu.id}`}
                    value={edu.degree}
                    onChange={(e) => updateEducation(edu.id, "degree", e.target.value)}
                    placeholder="B.S. Computer Science"
                />

                <Input
                    label="Graduation Year"
                    name={`gradYear-${edu.id}`}
                    value={edu.gradYear}
                    onChange={(e) => updateEducation(edu.id, "gradYear", e.target.value)}
                    placeholder="2026"
                />
                </div>
            ))}
            </div>

            <Button children="Add Education" onClick={addEducation} />
        </section>
    );
}

export default Education;