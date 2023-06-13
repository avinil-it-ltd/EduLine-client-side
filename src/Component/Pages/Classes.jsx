
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Classes = () => {
    const [instructors, setInstructor] = useState([]);

    useEffect(() => {
        fetch('/public/instructor.json')
            .then(res => res.json())
            .then(data => {
                setInstructor(data.instructors);

            })
            .catch(error => console.log(error))
    }, [])


    return (
        <div className="my-12 mx-auto container">
        <div className="font-mono text-center  my-9">
            <p className="my-4 "> All Classes here </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {
                instructors?.map(instructor => <>

                    <div>

                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={instructor.image} alt="Shoes" className="rounded-xl h-32" />
                            </figure>
                            <div className="card-body items-center text-center font-mono">
                                <h2 className="card-title text-orange-500 font-mono font-bold">{instructor.name}</h2>
                                <p>Country: {instructor.country}</p>
                                <Link className="link-hover "><p>{instructor.email}</p></Link>
                                <p>classes_taken: {instructor.classes_taken}</p>
                                {/* <div className="card-actions">
                                    <button className="btn btn-primary"> </button>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </>)
            }
        </div>
    </div>
    );
};

export default Classes;