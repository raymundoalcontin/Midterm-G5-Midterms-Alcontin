import StatCard from "./StatCard";

function Stats({stars, downloads, issues}) {
  return (
    <>

    
       <div className="flex justify-center gap-6 pb-8">

        <StatCard value={stars} label="Stars" />
        <StatCard value={downloads} label="Downloads" />
        <StatCard value={issues} label="Issues Reported" />

      </div>
      </>
      
    )
}
export default Stats;