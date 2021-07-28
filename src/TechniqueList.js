import TechniqueCard from "./TechniqueCard";
import {useEffect} from "react";

export default function TechniqueList(props) {
    return (
        <div class="techniqueList">
            {
                props.syllabus.techniques.map(t => {
                    return <span>
                    <TechniqueCard title={t.name} video={t.video} belt={t.belt} />
                    </span>

                })
            }
        </div>
    )
}