import FeatureCard from "./FeatureCard";
function Features(){
    return(
        <main className="grid grid-cols-3 gap-8 px-20">
            <FeatureCard tag="Free" title="Open source" description="Read the code and use it in any project." />
            <FeatureCard tag="Small" title="Lightweight" description="Import only the components the page uses." />
            <FeatureCard tag="Simple" title="Easy to learn" description="Every component takes a few plain props." />
        </main>
    )
}

export default Features;