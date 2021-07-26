import Data from './data/syllabus.json';
import TechniqueCard from "./TechniqueCard";

export default function TechniqueList() {

    return (
        <div class="techniqueList">
            {
                Data.techniques.map(t => {
                    return <span>
                    <TechniqueCard title={t.name} video={t.video} belt={t.belt} />
                    </span>

                })
            }
        </div>
    )
}