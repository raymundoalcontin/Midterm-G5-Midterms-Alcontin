function FeatureCard({tag,title,description}){
    return(
        <div className="rounded-xl bg-[#F3E6D5] p-6">
          <span className="rounded-full bg-[#800020] px-4 py-1 text-base font-bold text-[#FFF9F2]">
            {tag}
          </span>
          <h3 className="mt-8 text-3xl font-bold">{title}</h3>
          <p className="mt-3 text-xl text-[#000000]">{description}</p>
        </div>
    )
}

export default FeatureCard;
