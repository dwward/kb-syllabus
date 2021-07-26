import Data from './data/syllabus.json';
import TechniqueCard from "./TechniqueCard";

export default function TechniqueList() {

    return (
        <div class="techniqueList">
            {
                Data.techniques.map(t => {
                    return <span>
                    <TechniqueCard title={t.name} url={t.video.url} beltColor={t.belt} />
                    </span>

                })
            }
        </div>
    )
}