import React from "react";
import {render} from "react-dom";
import "./index.css";
import data from "./data/syllabus.json";

export default function CategoryFilter(props) {

    // const onChange = (currentNode, selectedNodes) => {
    //     console.log("path::", currentNode.path);
    // };
    //
    // const assignObjectPaths = (obj, stack) => {
    //     Object.keys(obj).forEach(k => {
    //         const node = obj[k];
    //         if (typeof node === "object") {
    //             node.path = stack ? `${stack}.${k}` : k;
    //             assignObjectPaths(node, node.path);
    //         }
    //     });
    // };
    //
    // const App = () => {
    //     assignObjectPaths(data);
    //
    //     return (
    //         <DropdownTreeSelect data={data} onChange={onChange} className="mdl-demo"/>
    //     );
    // };

    //render(<App/>, document.getElementById("root"));

}
//
// <TreeItem nodeId="1" label="Categories">
//                 <TreeItem nodeId="2" label="FALLS (UKEMI)"/>
//                 <TreeItem nodeId="3" label="ROLLS (KAITEN UKEMI)"/>
//                 <TreeItem nodeId="4" label="OFF-BALANCING (KUSUSHI)"/>
//                 <TreeItem nodeId="5" label="ARM/HAND TECHNIQUES (UDE/TE WAZA)"/>
//                 <TreeItem nodeId="6" label="NERVE TECHNIQUES (SHIOKU WAZA)"/>
//                 <TreeItem nodeId="7" label="GROUND TECHNIQUES (NE WAZA)  ">
//                     <TreeItem nodeId="8" label="POSITIONS"/>
//                     <TreeItem nodeId="9" label="PINS (OSAE-KOMI WAZA)"/>
//                     <TreeItem nodeId="10" label="ESCAPES"/>
//                     <TreeItem nodeId="11" label="JOINT LOCKS (KANSETSU WAZA)"/>
//                     <TreeItem nodeId="12" label="CHOKES (SHIME WAZA)"/>
//                 </TreeItem>
//                 <TreeItem nodeId="13" label="STRIKING TECHNIQUES (ATEMI WAZA)">
//                     <TreeItem nodeId="14" label="HAND AND ARM STRIKES (UCHI)"/>
//                     <TreeItem nodeId="15" label="KICKING TECHNIQUES (GERI WAZA)"/>
//                 </TreeItem>
//                 <TreeItem nodeId="16" label="DEFENSES AGAINST STRIKES/KICKS">
//                     <TreeItem nodeId="17" label="Blocking (Te No Tatake)">
//                         <TreeItem nodeId="18" label="Jodan (High-Level)"/>
//                         <TreeItem nodeId="19" label="Chudan (Middle-Level)"/>
//                         <TreeItem nodeId="20" label="Gedan (Low-Level)"/>
//                     </TreeItem>
//                 </TreeItem>
//                 <TreeItem nodeId="21" label="THROWING TECHNIQUES (NAGE WAZA)">
//                     <TreeItem nodeId="22" label="STANDING TECHNIQUES (TACHI WAZA)">
//                         <TreeItem nodeId="23" label="HIP TECHNIQUES (KOSHI WAZA)"/>
//                     </TreeItem>
//                     <TreeItem nodeId="24" label="OTHER"/>
//                     <TreeItem nodeId="25" label="FOOT/LEG TECHNIQUES (ASHI WAZA)"/>
//                     <TreeItem nodeId="26" label="SACRIFICE TECHNIQUES (SUTEMI WAZA)"/>
//                 </TreeItem>
//                 <TreeItem nodeId="27" label="SELF-DEFENSE">
//                     <TreeItem nodeId="28" label="AGAINST UNARMED ATTACKS"/>
//                     <TreeItem nodeId="29" label="AGAINST ARMED ATTACKS"/>
//                 </TreeItem>
//             </TreeItem>
//         </TreeView>
//     );
// }