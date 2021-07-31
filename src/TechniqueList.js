import TechniqueCard from "./TechniqueCard";
import {useEffect} from "react";

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