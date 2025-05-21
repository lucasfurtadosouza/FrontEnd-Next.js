import CardCourse from "./CardCourse";

export default function Courses() {

    const courses=[
        {
         id: 1,
         title: "Curso de HTML",
         description: "Conheça o curso de HTML que..",
         image: "/img/html.svg",
         link: "/courses/html"
        },
        {
         id: 2,
         title: "Curso de CSS",
         description: "Conheça o curso de CSS que..",
         image: "/img/css.svg",
         link: "/courses/css"
        },
        {
         id: 3,
         title: "Curso de JS",
         description: "Conheça o curso de JS que..",
         image: "/img/js.svg",
         link: "/courses/js"
        },
        {
         id: 4,
         title: "Curso de Design",
         description: "Conheça o curso de Design que..",
         image: "/img/design.svg",
         link: "/courses/design"
        },
        {
         id: 5,
         title: "Curso de Games",
         description: "Conheça o curso de Design que..",
         image: "/img/games.svg",
         link: "/courses/games"
        },
        {
         id: 6,
         title: "Curso de Robótica",
         description: "Conheça o curso de Robótica que..",
         image: "/img/robot.svg",
         link: "/courses/robot"
        }
    ]

    // Lista de Cursos
    const courseList= []

    for(const course of courses){
        courseList.push(<CardCourse key={course.id} course={course}/>);
    }

    return (
        <main className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
            {courseList}
        </main>

    )
}
