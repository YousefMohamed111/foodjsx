import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Meal from "../Meal/Meal";
import Question from "../question&&answer/question&&answer";
import Aboutus from "../Aboutus/Aboutus";
import End from "../End/End";
import Visit from "../Visit/visit";
import Chiefs from "../chiefs/chiefs";
import Comment from "../comments/comment";
import'./layout.css'
function Layout() {
    return (
        <>
            <NavBar />
            <Outlet />
            <Meal />
            <Aboutus />
            <Chiefs />
            <Visit />
            <Comment />
            <Question />
            <End />
        </>
    )
}
export default Layout;