import { useEffect } from "react";
import { useState } from "react";
import Logout from "./logout";
import { Edit2, Save, Trash2Icon } from "lucide-react";

const MerchAPI = () => {
  const [merchContent, setMerchContent] = useState({
    name: "",
    price: null,
    amount: [
      { size: "S", stock: 0 },
      { size: "M", stock: 0 },
      { size: "L", stock: 0 },
      { size: "XL", stock: 0 }
    ],
    image: "",
  });
  const [sizeEdited, setSizeEdited] = useState(false);
  const [merch, setMerch] = useState([]);
  const [isEditing, setIsEditing] = useState(
    new Array(merch.length).fill(false)
  );

  const token = localStorage.getItem("accessToken");

  const handleEditedAmount = (e, m, index1) => {
    
    const stockValue = merchContent.amount.map((item, i) => 
      index1 === i ? 
        { ...item, stock: parseInt(e.target.value) } :
          item 
    )

    setMerchContent({
      ...merchContent,
      amount: stockValue 
    })
    setSizeEdited(true);

    console.log("Merch Content: ", merchContent);
  }

  useEffect(() => {
    const fetchMerch = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_PRODUCTION}/all-merch`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const res = await response.json();

        if (response.ok) {
          setMerch(res);
          setIsEditing(new Array(merch.length).fill(false));
        } else alert(res);
      } catch (err) {
        alert(err);
      }
    };

    fetchMerch();
  }, [merch.length]);

  const deleteMerch = async (id) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_PRODUCTION}/delete/merch/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const res = await response.json();

      if (response.ok) {
        alert(res.message);
        setMerch(merch.filter((m) => m._id !== id));
      } else alert(res.message);
    } catch (err) {
      alert(err);
    }
  };

  const sendData = async () => {
    if (
      isNaN(merchContent.price) ||
      merchContent.amount.length < 1 ||
      merchContent.name.trim().length < 1 ||
      merchContent.image.length < 1 ||
      merchContent.image === null 
    ) {
      alert("Please make sure all the fields are filled");
      return;
    }

    const formData = new FormData();
    formData.append("name", merchContent.name);
    formData.append("price", merchContent.price);
    formData.append("amount", JSON.stringify(merchContent.amount));
    formData.append("imageFile", merchContent.image);

    try {
      const response = await fetch(`${process.env.REACT_APP_PRODUCTION}/add-merch`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const res = await response.json();

      if (response.ok) alert(res.message);
      else alert(res.message);
    } catch (err) {
      alert(err);
    }
  };

  const updateData = async (id, product) => {

    const formData = new FormData();
    formData.append("name", merchContent.name.trim().length < 1 ? product.name : merchContent.name );
    formData.append("price", (isNaN(merchContent.price) || merchContent.price === null) ? product.price : merchContent.price );
    formData.append("amount", sizeEdited ? JSON.stringify(merchContent.amount) : JSON.stringify(product.amount));
    formData.append("imageFile", merchContent.image );

    setSizeEdited(false);

    try {
      const response = await fetch(`${process.env.REACT_APP_PRODUCTION}/edit-merch/${id}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const res = await response.json();

      if (response.ok) alert(res.message);
      else alert(res.message);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="sm:p-40 bg-black text-white gap-3 flex flex-col px-20 py-20">
      <Logout />
      <div className="gap-3 flex flex-col">
        <h3 className="text-2xl font-bold">Add merch</h3>
        <p>* Enter name of Merch: </p>
        <input
          className="text-black"
          type="text"
          required
          value={merchContent.name}
          onChange={(e) =>
            setMerchContent({ ...merchContent, name: e.target.value })
          }
        />
        <p>* Enter price: </p>
        <input
          className="text-black"
          type="number"
          required
          value={merchContent.price}
          onChange={(e) =>
            setMerchContent({
              ...merchContent,
              price: parseFloat(e.target.value),
            })
          }
        />
        <p>* Enter size and the amount of the product available: </p>
        {merchContent.amount.map((piece, index) => (
          <div className="flex gap-2">
            <p className="bg-gray-100 px-2 text-black">{piece.size}</p>
            <input
              className="text-black w-full"
              type="number"
              required
              value={piece.stock}
              onChange={(e) => {
                const stockValue = merchContent.amount.map((item, i) => 
                  index === i ? 
                    { ...item, stock: e.target.value } :
                      item 
                )

                setMerchContent({
                  ...merchContent,
                  amount: stockValue 
                })
              }
            }
            />
        </div>
        ))}
        <p>* Enter product image: </p>
        <input
          className="text-black"
          type="file"
          accept="image/*"
          required
          onChange={(e) =>
            setMerchContent({ ...merchContent, image: e.target.files[0] })
          }
        />
        {merchContent.image && (
          <div className="text-white">
            <bold>{merchContent.image.name}</bold>
          </div>
        )}

        <button
          onClick={() => sendData()}
          className="bg-gray-300 rounded-md text-black px-2"
        >
          Submit
        </button>
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="text-2xl font-bold">Delete Merch</h3>
        <div className="flex flex-col gap-3">
          {merch.map((m, index) => (
            <div className="flex bg-gray-800 p-2 rounded-md items-center justify-between ">
              <p className="text-lg">{m.name}</p>
              <Trash2Icon
                className="text-red-500 cursor-pointer"
                onClick={() => deleteMerch(m._id)}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="text-2xl font-bold">Edit Merch</h3>
        <div className="flex flex-col gap-3">
          {merch.map((m, index) => (
            <div className="flex bg-gray-800 p-2 rounded-md justify-between">
              {!isEditing[index] ? (
                <div className="flex flex-col gap-2">
                  <p className="text-lg">{m.name}</p>
                  <p className="text-lg">{m.price}</p>
                  {m.amount.map(item => (
                    <div className="flex gap-3">
                      <p className="text-lg">{item.size}:</p>
                      <p className="text-lg">{item.stock}</p>
                    </div>
                  ))}
                  <img
                    className="h-32"
                    alt="product-image"
                    src={`${process.env.REACT_APP_PRODUCTION}/merch/${m._id}/image`}
                  />
                </div>
              ) : (
                <div className="flex flex-col gap-2 w-32">
                  <p>* Enter name of Merch: </p>
                  <input
                    className="text-black w-3xs"
                    type="text"
                    value={
                      merchContent.name.trim() === ""
                        ? m.name
                        : merchContent.name
                    }
                    onChange={(e) =>
                      setMerchContent({ ...merchContent, name: e.target.value })
                    }
                  />
                  <p>* Enter price: </p>
                  <input
                    className="text-black w-3xs"
                    type="number"
                    value={
                      (isNaN(merchContent.price) || merchContent.price === null) ? m.price : merchContent.price
                    }
                    onChange={(e) =>
                      setMerchContent({
                        ...merchContent,
                        price: parseFloat(e.target.value),
                      })
                    }
                  />
                  <p>* Enter amount of the product available: </p>
                  {m.amount.map((piece, index1) => (
                  <div className="flex gap-2">
                    <p className="bg-gray-100 px-2 text-black">{piece.size}</p>
                    <input
                      className="text-black w-full"
                      type="number"
                      required
                      value={merchContent.amount[index1]?.stock ?? piece.stock}
                      onChange={(e) => handleEditedAmount(e, m, index1)}
                    />
                </div>
                ))}
                  <p>* Enter product image: </p>
                  <input
                    className="text-black w-3xs"
                    type="file"
                    accept="image/*"
                    onChange={(e) =>
                      setMerchContent({
                        ...merchContent,
                        image: e.target.files[0],
                      })
                    }
                  />
                  {merchContent.image && (
                    <div className="text-white w-3xs">
                      <bold>
                        {merchContent.image.length < 1
                          ? m.image.name
                          : merchContent.image.name}
                      </bold>
                    </div>
                  )}
                </div>
              )}

                {!isEditing[index] ? (
                <div
                 onClick={() => { 
                  setIsEditing({ ...isEditing, [index]: !isEditing[index] })
                  setMerchContent(m);
                 }}
                 className="border-l flex items-center px-2 cursor-pointer hover:bg-gray-700/80"
                >
                  <Edit2 className="text-gray-100 cursor-pointer" />
                </div>
                ) : (
                <div
                 onClick={() => { updateData(m._id, m) }}
                 className="border-l flex items-center px-2 cursor-pointer hover:bg-gray-700/80"
                >                  
                    <Save />
                </div>
                )}
              </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MerchAPI;
