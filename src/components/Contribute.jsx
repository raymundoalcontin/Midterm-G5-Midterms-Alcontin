import { useState } from "react";
function Contribute({issues}){
    const [contributors, setContributors] = useState(0);

    const formatted = Math.max(issues - contributors, 0);
    return(
        <div className ="mx-20 mb-8 flex items-center justify-between rounded-xl bg-[#800020] p-6 text-[#FFF9F2]">
            <div>
                <h3 className = "text-2xl font-bold">Want to contribute?</h3>
                <p className ="mt-1 text-xl"> Fix an open issue on 
                    <a href="https://github.com/raymundoalcontin/Midterm-G5-Midterms-Alcontin.git" className="font-bold underline" onClick={() => setContributors(contributors + 1)}>
                    Github
                    </a>
                    </p>
            </div>
            <div className="flex items-center gap-8">

                <p className="text-xl"> Contributors: 
                    <span className ="font-bold">{contributors}</span>
                </p>

                <p className="text-xl"> Open issues: 
                    <span className ="font-bold" > {formatted} </span>
                </p>

                <button className="cursor-pointer rounded-lg border-2 border-[#FFF9F2] px-8 py-3 text-xl font-bold" onClick={() => setContributors(0)}> Clear </button>
            </div>
        </div>
    )
}

export default Contribute;