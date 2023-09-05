import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AddChocolate = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const country = form.country.value;
    const category = form.category.value;
    const photo = form.photo.value;
    console.log(name, country, category, photo);
    const newChocolate = { name, country, category, photo };

    fetch("http://localhost:5000/addchocolate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newChocolate),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.insertedId){
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Chocolate Addeded',
            showConfirmButton: false,
            timer: 1300
          })
          form.reset()
        }
        

      });
      
  };

  return (
    <div className="bg-orange-200 h-screen pt-5 ">
      <span className="mx-40">
        <Link to={"/"}>
          <button className="btn btn-outline">Home</button>
        </Link>
      </span>
      <form
        className="max-w-md mx-auto p-4 bg-orange-400 border rounded-lg "
        onSubmit={handleSubmit}
      >
        <label className="block mb-2 font-bold text-2xl">
          Name:
          <input
            className="w-full px-2 py-1 border rounded"
            type="text"
            name="name"
            required="true"
          />
        </label>
        <br />

        <label className="block mb-2 font-bold text-2xl">
          Country:
          <input
            className="w-full px-2 py-1 border rounded"
            type="text"
            name="country"
            required="true"
          />
        </label>

        <br />

        <label className="block mb-2 font-bold text-2xl">
          Category:
          <select
            className="select w-full max-w-xs font-bold text-2xl"
            name="category"
            required="true"
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
            required="true"
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

export default AddChocolate;
