const Card = (prop: {
    Age: string
    Email: string
    Id: string
    JobCount: number
    Name: string
    YearsExperience: number
}) => {
    console.log("prop:", prop)

    return (
        <div className="text-[30px] font-bold p-8 flex flex-col bg-white/40 text-black border m-5 border-black rounded-md min-h-max min-w-max justify-center">
            <div>Age:{prop.Age}</div>
            <div>Email:{prop.Email}</div>
            <div>Previous Jobs:{prop.JobCount}</div>
            <div>Name:{prop.Name}</div>
            <div>YOP:{prop.YearsExperience}</div>
        </div>
    )
}

export default Card
