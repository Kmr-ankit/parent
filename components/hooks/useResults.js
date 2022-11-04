import { useState, useEffect } from "react";
import Yelp from "../api/Yelp";
export default function () {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  async function searchApi(searchTerm) {
    try {
      const response = await Yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose",
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage("something went wrong");
    }
  }
  useEffect(() => {
    searchApi("pasta");
  }, []);
  return [searchApi, results, errorMessage];
}
