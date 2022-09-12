import { useEffect } from "react";
import { useState } from "react";
import { Form, InputGroup, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    handleFilter(query);
  }, [query]);

  const handleFilter = () => {
    const newFilter = data.filter((value) => {
      return value.name.toLowerCase().includes(query.toLowerCase());
    });

    if (query.length > 0) {
      setFilteredData(newFilter);
    } else {
      setFilteredData([]);
    }
  };

  const onInputClick = (wasItClicked) => {
    console.log(clicked);
    setClicked(wasItClicked);
  };

  const navigate = useNavigate();
  const goToProducts = () => {
    navigate("/ProductDetail/" + data.articles[0].code);
  };
  // GET PRODUCTS

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        "https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list",
        {
          headers: {
            "X-RapidAPI-Key":
              "d5a66367cfmsh80d30c00612e90ep1cb66ejsna929d5aabc69",
            "X-RapidAPI-Host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        const allProducts = data.results;
        setData(allProducts);
      } else {
        console.log("Errrrror!!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="search__container">
        <input
          className="search__input"
          onClick={() => onInputClick(false)}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          type="text"
          placeholder="Search"
        />
      </div>

      {filteredData.length !== 0 && (
        <div
          style={{
            position: "fixed",
            zIndex: "3",
          }}
        >
          {filteredData.slice(0, 10).map((data) => {
            return (
              <ListGroup className="searchList">
                <div>
                  <Link
                    onClick={() => {
                      setQuery("");
                      setFilteredData([]);
                    }}
                    to={`/product/${data.articles[0].code}`}
                  >
                    <ListGroupItem
                      style={{
                        textAlign: "left",
                      }}
                      onClick={() => {
                        onInputClick(true);
                      }}
                    >
                      <img
                        style={{
                          width: "25px",
                          height: "25px",
                          borderRadius: "50%",
                        }}
                        src={data.images[0].url}
                        alt=""
                      />
                      <span
                        className="ml-2"
                        style={{ color: "black", fontSize: "14px" }}
                        onClick={goToProducts}
                      >
                        <strong>{data.name}</strong>
                      </span>
                    </ListGroupItem>
                  </Link>
                </div>
              </ListGroup>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
