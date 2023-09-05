import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
const App = () => {
  const allChocolates = useLoaderData();
  const [chocos, setChoco] = useState(allChocolates);

  const handleDelete = (chocolate) => {
    const id = chocolate._id;
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/chocolate/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            const remaining = chocos.filter((choco) => choco._id !== id);
            setChoco(remaining);
            
            
          });
         

        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  return (
    <div className="bg-orange-200  pt-4 pb-8">
      <div className="mx-40 ">
        <div className="flex justify-center m-5">
          <h1 className="text-3xl font-bold outline rounded text-center bg-orange-600 p-4 w-2/3">
            Chocolate Management System:{chocos.length}
          </h1>
        </div>
        <Link to={"/addchocolate"}>
          <button className="btn btn-outline font-bold">+ new chocolate</button>
        </Link>
        {/* table was implemanted hare */}

        <table className="w-full mt-4 ">
          <thead className="rounded bg-orange-400 !p-4">
            <tr>
              <th className="salman">Image</th>
              <th>Name</th>
              <th>Country</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {chocos.map((chocolate) => (
              <tr
                className="text-center bg-orange-400 border"
                key={chocolate._id}
              >
                <td>
                    <img src={chocolate.photo} className="w-14 ml-8" />
                </td>
                <td>{chocolate.name}</td>
                <td>{chocolate.country}</td>
                <td>{chocolate.category}</td>
                <td>
                  <Link to={`/update/${chocolate._id}`}>
                    <button className="btn btn-neutral">Edit</button>
                  </Link>
                  <button
                    onClick={() => handleDelete(chocolate)}
                    className="btn btn-error"
                  >
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
