import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateChoco = () => {
  const updateLodar = useLoaderData();
  const id = updateLodar._id;

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const country = form.country.value;
    const category = form.category.value;
    const photo = form.photo.value;
    const updateChoco = { name, country, category, photo };
    console.log(id, updateChoco);

    fetch(`http://localhost:5000/chocolate/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateChoco),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Chocolate updated",
            showConfirmButton: false,
            timer: 1300,
          });
          

        }
      });
  };

  return (
    <div className="bg-sky-200 h-screen pt-5 ">
      <span className="mx-40">
        <Link to={"/"}>
          <button className="btn btn-outline">Home</button>
        </Link>
      </span>
      <form
        className="max-w-md mx-auto p-4 bg-orange-400 border rounded-lg "
        onSubmit={handleUpdate}
      >
        <label className="block mb-2 font-bold text-2xl">
          Name:
          <input
            className="w-full px-2 py-1 border rounded"
            type="text"
            name="name"
            defaultValue={updateLodar.name}
          />
        </label>
        <br />
        <label className="block mb-2 font-bold text-2xl">
          Country:
          <input
            className="w-full px-2 py-1 border rounded"
            type="text"
            name="country"
            defaultValue={updateLodar.country}
          />
        </label>

        <br />

        <label className="block mb-2 font-bold text-2xl">
          Category:
          <select
            className="select w-full max-w-xs font-bold text-2xl"
            name="category"
            defaultValue={updateLodar.category}
          >
            <option disabled selected>
              select brown or dark
            </option>
            <option>brown</option>
            <option>dark</option>
          </select>
        </label>
        <br />

        {/* Label for Image */}
        <label className="block mb-2 font-bold text-2xl">
          photo:
          <input
            className="w-full px-2 py-1 border rounded"
            type="text"
            name="photo"
            defaultValue={updateLodar.photo}
          />
        </label>
        <br />

        <button
          className="block w-full px-4 py-2 mt-2 text-white bg-blue-500 rounded hover:bg-blue-600"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdateChoco;
