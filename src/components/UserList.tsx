import { useEffect, useState } from "react";

interface DataType {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

const UserList = () => {
  const [data, setData] = useState<DataType[] | null>(null);

  useEffect(function () {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const result = await response.json();

        setData(result);
      } catch (error) {
        console.log("Error occured in fetching data", error);
      }
    };

    fetchData();
  }, []);

  console.log(data);
  return (
    <div>
      {data ? (
        <div className="bg-amber-500 border-2 m-10 grid grid-rows-2 grid-cols-5">
          {data.map((data) => (
            <div key={data.id} className="p-10">
              <p>ID : {data.id}</p>
              <p>Name : {data.name}</p>
              <p>UserName : {data.username}</p>
              <p>Email : {data.email}</p>
              <p>Phone Number : {data.phone}</p>
            </div>
          ))}
        </div>
      ) : (
        <h1>loading...</h1>
      )}
    </div>
  );
};

export default UserList;
