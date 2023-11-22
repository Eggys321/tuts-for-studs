import React, { useState, useEffect } from "react";

const AllUsers = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // getting all users
  const getData = async () => {
    try {
      setIsLoading(true);
      const fetcher = await fetch("http://localhost:8080/api/user");
      const res = await fetcher.json();
      console.log(res.users);

      setData(res.users);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      getData();
    }, 3000);
  }, [setData]);
  // useEffect(() => {
  //   getData();
  // }, [setData, setName]);

  return (
    <main className="container pt-4">
      <h2>All Users</h2>

      <div className="container pt-5 d-flex justify-content-between align-items-center flex-wrap gap-4">
        {isLoading
          ? "loading"
          : data.map((datum) => {
              const { _id, name, email, gender, profession } = datum;
              return (
                <div key={_id} className="card w-25">
                  <h2>Name: {name} </h2>
                  <h2> {email} </h2>
                  <p> {gender} </p>
                  <p> {profession} </p>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteItem(_id)}
                  >
                    delete
                  </button>
                </div>
              );
            })}
      </div>
    </main>
  );
};

export default AllUsers;
