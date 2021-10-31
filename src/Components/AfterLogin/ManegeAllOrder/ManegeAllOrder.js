import React, { useEffect, useState } from "react";
// import MyOrder from "../MyOrder/MyOrder";

const ManegeAllOrder = () => {
  const [allOrders, setAllOrders] = useState([]);
  useEffect(() => {
    fetch("https://infinite-stream-87987.herokuapp.com/allOrders")
      .then((res) => res.json())
      .then((data) => setAllOrders(data));
  }, []);
  const handleDelete = (id) => {
    const url = `https://infinite-stream-87987.herokuapp.com/myorders/${id}`;
    console.log(url);
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          alert("deleted");
          const deleteId = allOrders.filter((service) => service._id !== id);
          console.log("delete", deleteId);
          setAllOrders(deleteId);
        }
      });
  };
  return (
    <div className="container">
      <div style={{ marginTop: "100px" }}>
        <div className="row">
          {allOrders.map((all) => (
            <div className="col-lg-4 " key={all._id}>
              <div className=" p-3 d-flex bg-info my-3">
                <img
                  style={{ width: "150px" }}
                  src={all?.servicesItem?.img}
                  alt=""
                />
                <div className="deletebtn ms-2">
                  <h5>{all?.servicesItem?.name}</h5>
                  <button
                    onClick={() => handleDelete(all._id)}
                    className="btn btn-danger"
                  >
                    delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManegeAllOrder;
