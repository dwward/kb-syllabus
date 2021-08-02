import TechniqueCard from "./TechniqueCard";

export default function TechniqueList(props) {
    return (
        <div className="techniqueList">
            {
                props.syllabus.techniques.map(t => {
                    return <TechniqueCard key={t.id} technique={t} setTechniqueId={props.setTechniqueId} />
                })
            }
        </div>
    )
}