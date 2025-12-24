import './resumepreview.css'

function ResumePreview(
    {personal, educations, works}
){
    return (
        <div className="resume">
            <h1>{personal.firstName} {personal.lastName}</h1>
            <h3>{personal.phone} - {personal.email}</h3>

            <section>
                <h2>Education</h2>
                {educations.map(e => (
                <div key={e.id}>
                    <strong>{e.school}</strong> — {e.degree} ({e.gradYear})
                </div>
                ))}
            </section>

            <section>
                <h2>Work</h2>
                {works.map(w => (
                <div key={w.id}>
                    <strong>{w.company}</strong> — {w.position}
                    <p>{w.dates}</p>
                    <p>{w.duties}</p>
                </div>
                ))}
            </section>
        </div>
    );
}

export default ResumePreview;