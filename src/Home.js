import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    const { data: blogs, isPending, error} = useFetch('http://localhost:3100/blogs');
// npx json-server --watch data/db.json --port 3100
     return (
        <div className="home">
            { error && <div>{ error }</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={ blogs } title="All Blogs"/>}
        </div>
    );
}
 
export default Home;