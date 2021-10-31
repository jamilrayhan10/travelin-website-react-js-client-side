import { useEffect, useState } from "react";

const useServices = () => {
  const [serviceItem, setServiceItem] = useState([]);

  useEffect(() => {
    fetch("https://infinite-stream-87987.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServiceItem(data));
  }, []);

  return [serviceItem];
};

export default useServices;
