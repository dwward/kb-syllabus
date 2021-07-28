import TechniqueCard from "./TechniqueCard";
import {useEffect} from "react";

export default function TechniqueList(props) {
    let ct=0;
    return (
        <div className="techniqueList">
            {
                props.syllabus.techniques.map(t => {
                    return <TechniqueCard key={t.name+ct++} title={t.name} video={t.video} belt={t.belt}></TechniqueCard>
                })
            }
        </div>
    )
}