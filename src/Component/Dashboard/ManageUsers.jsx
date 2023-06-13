
const ManageUsers = () => {
    return (
        <div className="overflow-x-auto">
            <p className="text-center font-bold my-3 ">Manage Users</p>
            <table className="table">


                <thead>
                    <tr>
                        <th>profile pic</th>
                        <th>Name</th>
                        <th>Email</th>
                        
                        <th>make Admin</th>
                        <th>make instructor</th>

                    </tr>
                </thead>


                <tbody>
                    <tr>
                        <td>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">Hart Hagerty</div>
                                </div>
                            </div>
                        </td>
                        <td> Zemlak, Daniel and Leannon </td>
                        <td>abcd@gmail.com</td>
                       
                        <td><button className="btn btn-sm btn-success"> Admin</button></td>
                        <td><button className="btn btn-sm bg-red-500 text-white" >Instructor</button></td>
                    </tr>



                </tbody>
            </table>
        </div>
    );
};

export default ManageUsers;