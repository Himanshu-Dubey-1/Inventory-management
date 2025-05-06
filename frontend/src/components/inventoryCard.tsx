import React, { useState } from "react";
import { IProduct } from "../models/IProduct";
import { useAppDispatch } from "../store/Hooks/hook";
import { postitem, updateitem } from "../store/slices/items/itemSlice";
import { toast } from "react-toastify";

interface IProps {
  products: IProduct[];
}


const UserTable: React.FC<IProps> = ({ products }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    quantity: "",
  });
  const [pic, setPic] = useState();
  const [updateid, setUpdateid] = useState<string>("");
  const dispatch = useAppDispatch();

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const req = {
      name: formData.name,
      description: formData.description,
      category: formData.category,
      price: formData.price,
      quantity: formData.quantity,
      picture: pic,
    };
    console.log(req)
    dispatch(postitem(req));
    closeModal();
  };

  // Handle Update

  const handleUpdate = async () => {
    const req = {
      name: formData.name,
      description: formData.description,
      category: formData.category,
      price: formData.price,
      quantity: formData.quantity,
      id: updateid,
      picture: pic,
    };
    dispatch(updateitem(req));
    setUpdateid("");
    closeModal();
  };

  // Handle Product Edit

  const handleEdit = (product: IProduct) => {
    setFormData({
      name: product.name,
      description: product.description,
      category: product.category,
      price: product.price.toString(),
      quantity: product.quantity.toString(),
    });
    setUpdateid(product._id);
    openModal();
  };

  // Open & Close Modal
  const openModal = () => {
    setIsOpen(true);
    // setUpdateid("")
  };
  const closeModal = () => {
    setIsOpen(false);
    setFormData({
      name: "",
      description: "",
      category: "",
      price: "",
      quantity: "",
    });
    setUpdateid("");
  };

  // pic upload

  const postDetails = (pics: File) => {
    if (pics === undefined) {
      toast.warning("Please  select an image");
    }

    if (pics.type == "image/jpeg" || pics.type == "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "inventory-item");

      fetch( "https://api.cloudinary.com/v1_1/dmhkvx0tm/image/upload" , {
        method: "POST",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setPic(data.url.toString());
          console.log(data.url.toString());
        })
        .catch((error) => {
          console.log(error);
          toast.error("Something Went Wrong");
        });
    } else {
      toast.warning("Please select an image file");
      return;
    }
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Products</h2>
          <p className="text-gray-600">
            A list of all the products available in the Inventory.
          </p>
        </div>
        <div className="flex flex-col items-center">
          {/* Button to open modal */}
          <button
            onClick={openModal}
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Add Product
          </button>

          {/* Modal */}
          {isOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-300/70">
              <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
                <h2 className="text-lg font-semibold mb-4">
                  Enter Product Details
                </h2>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Product Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <input
                    type="text"
                    name="category"
                    placeholder="Category"
                    value={formData.category}
                    onChange={handleChange}
                    className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <textarea
                    name="description"
                    placeholder="Description"
                    value={formData.description}
                    onChange={handleChange}
                    className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    value={formData.price}
                    onChange={handleChange}
                    className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <input
                    type="number"
                    name="quantity"
                    placeholder="Quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <input
                    type="file"
                    name="picture"
                    placeholder="image"
                    onChange={(e) => {
                      if (e.target.files && e.target.files.length > 0) {
                        postDetails(e.target.files[0]);
                      } else {
                        console.log("No file selected");
                      }
                    }}
                    // accept="image/*"
                    className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    // required
                  />

                  {/* Buttons */}
                  <div className="flex justify-between mt-4">
                    <button
                      type="button"
                      onClick={closeModal}
                      className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500 transition"
                    >
                      Cancel
                    </button>
                    
                    {updateid ? <button
                      type="button"
                      onClick={handleUpdate}
                      className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                    >
                      Update
                    </button> : <button
                      type="submit"
                      className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                    >
                      Submit
                    </button>}
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="overflow-x-auto">
        {/* <img src={pic} alt="" /> */}
        <table className="w-full border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left px-4 py-3 text-gray-700 font-medium">
                Product Name
              </th>
              <th className="text-left px-4 py-3 text-gray-700 font-medium">
                Category
              </th>
              <th className="text-left px-4 py-3 text-gray-700 font-medium">
                Price
              </th>
              <th className="text-left px-4 py-3 text-gray-700 font-medium">
                Quantity
              </th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {products.map((products) => (
              <tr key={products._id} className="hover:bg-gray-50">
                <td className="px-4 py-3 text-gray-900">{products.name}</td>
                <td className="px-4 py-3 text-gray-500">{products.category}</td>
                <td className="px-4 py-3 text-gray-500">${products.price}</td>
                <td className="px-4 py-3 text-gray-500">{products.quantity}</td>
                <td className="px-4 py-3 text-right">
                  <button
                    onClick={() => {
                      return handleEdit(products);
                    }}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                  >
                    Edit
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

export default UserTable;
