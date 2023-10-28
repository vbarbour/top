import Exercise5  from "./e5";
import Helloworld from "./e5/hello-world";
import Tuiter from "./tuiter";
import Exercise6 from "./e6";
import { Route,Routes } from "react-router";

function Exercises(){
    return (
        <div>   
            {/* <Exercise6/> */}
            <Routes>
                <Route path="/" element={<Exercise5/>}/>
                <Route path="e6" element={<Exercise6/>}/>
            </Routes>
        </div>
    );
}
export default Exercises;