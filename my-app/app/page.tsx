import Banner from "./components/Banner"
import Courses from "./components/Courses"
import Footer from "./components/Footer"
import Header from "./components/Header"
import { TitleCourses } from "./components/TitleCourses"

export default function Home() {
  return (
    <div>
     <Header/>
     <Banner/>
     <TitleCourses/>
     <Courses/>
     <Footer/>
    </div>
  )
}
