import Header from "../components/header/Header";
import BottomShadowHeader from "../components/bottomshadow/BottomShadow";
import BlogsContainer from "../components/blogsContainer/BlogsContainer";
import ScrollToTopButton from "../components/ScrollUpBtn";

export default function Blogs(){
    return(
        <main>
            <Header/>
            <BottomShadowHeader/>
            <div className="flex flex-col items-center justify-center">
            <BlogsContainer/>
            </div>
            <ScrollToTopButton/>
        </main>
    )
}