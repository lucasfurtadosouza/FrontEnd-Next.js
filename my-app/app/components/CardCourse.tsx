export default function CardCourse({course}:any){
    return(
        <div className="bg-[#4d4d4d] rounded-lg pb-2">
            <a href={course.link}>
                <div>
                    <img src={course.image} alt="" />
                </div>
                <div className="text-center text-white">
                    <h3>{course.title}</h3>
                    <p>{course.description}</p>
                </div>
            </a>
        </div>
    )
}