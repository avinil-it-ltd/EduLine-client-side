import AddClass from "./AddClass/AddClass";
import Banner from "./Banner";
import Extra from "./Extra/Extra";
import PopularInstructor from "./PopularInstructor/PopularInstructor";


const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <AddClass></AddClass>
          <PopularInstructor></PopularInstructor>
          <Extra></Extra>
        </div>
    );
};

export default Home;