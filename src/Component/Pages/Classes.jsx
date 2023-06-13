
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Classes = () => {
    const [classes, setClasses] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:5000/api/classes`);
            if (response.ok) {
                const data = await response.json();
                setClasses(data);
            } else {
                // Error occurred while fetching data
                console.error('Error fetching data!');
            }
        };

        fetchData();
    }, []);



    return (

    <div>
         <div className="my-12 mx-auto container">
           
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {
                    classes?.map(c => <>

                        <div>

                            <div className="card w-96 bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img src={c.photo} alt="Shoes" className="rounded-xl h-32" />
                                </figure>
                                <div className="card-body items-center text-center font-mono">
                                    <h2 className="card-title text-orange-500 font-mono font-bold">{c.name}</h2>
                                    <p>Instructor-name: {c.Instructor_name}</p>
                                    <Link className="link-hover "><p>{c.Instructor_email}</p></Link>
                                    <p>Available seats: {c.Available_seat}</p>
                                    <p>Price: {c.price}</p>
                                    <button className="btn btn-primary">Select</button>
                                 
                                </div>
                            </div>
                        </div>
                    </>)
                }
            </div>
        </div>
    </div>

    );
};

export default Classes;