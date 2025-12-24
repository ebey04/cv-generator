import './work.css'
import Input from '../Input/Input'
import { useState } from 'react'
import Button from "../Button/Button"

function Work(
    {works, updateWork, addWork}
) {


    return (
        <section>
        <h2>Work History</h2>

        <div className="workContainer">
            {works.map((work) => (
            <div key={work.id} className="workCard">
                <Input
                label="Company"
                name={`company-${work.id}`}
                value={work.company}
                onChange={(e) => updateWork(work.id, "company", e.target.value)}
                placeholder="IBM"
                />

                <Input
                label="Dates"
                name={`dates-${work.id}`}
                value={work.dates}
                onChange={(e) => updateWork(work.id, "dates", e.target.value)}
                placeholder="12/1/2020 - 12/1/2024"
                />

                <Input
                label="Position"
                name={`position-${work.id}`}
                value={work.position}
                onChange={(e) => updateWork(work.id, "position", e.target.value)}
                placeholder="Junior Developer"
                />

                <Input
                label="General Duties"
                name={`duties-${work.id}`}
                value={work.duties}
                onChange={(e) => updateWork(work.id, "duties", e.target.value)}
                placeholder="Attend daily standups, Debug code"
                />
            </div>
            ))}
        </div>

        <Button onClick={addWork}>Add Work</Button>
        </section>
    );
}


export default Work;