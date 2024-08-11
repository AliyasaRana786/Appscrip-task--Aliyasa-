import { useEffect, useState, useCallback } from 'react';
import '../css/ProductPage.css';

export default function ProductPage() {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [showFilter, setShowFilter] = useState(true);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            const responsejson = await response.json();
        
            setData(responsejson);
            setFilteredData(responsejson);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
        }
    };

    const handleSort = (criteria) => {
        let sortedData = [...filteredData];

        if (criteria === 'highToLow') {
            sortedData.sort((a, b) => b.price - a.price);
        } else if (criteria === 'lowToHigh') {
            sortedData.sort((a, b) => a.price - b.price);
        } else if (criteria === 'clear') {
            sortedData = [...data];
        }

        setFilteredData(sortedData);
    };

    const handlerating = useCallback((rate) => {
        if (rate) {
            const element = data.filter(product => product.rating.rate >= rate);
            setFilteredData(element);
        } else {
            setFilteredData(data);
        }
    }, [data]);

    const handleFilter = useCallback((category) => {
        if (category) {
            const filtered = data.filter(product => product.category === category);
            setFilteredData(filtered);
        } else {
            setFilteredData(data);
        }
    }, [data]);

    const toggleFilter = () => {
        setShowFilter(!showFilter);
    };

    return (
        <>
            <section className='filters'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-6">
                            <button className='filterbtn' onClick={toggleFilter}>
                                {showFilter ? 'Hide Filter' : 'Show Filter'}
                            </button>
                        </div>

                        <div className="col-lg-6 col-md-6 col-6">
                            <div className="select">
                                <select aria-label="Default select example" onChange={(e) => handleSort(e.target.value)}>
                                    <option value="clear">Clear</option>
                                    <option value="highToLow">Price: High to Low</option>
                                    <option value="lowToHigh">Price: Low to High</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container-fluid">
                <div className="row">
                    {showFilter && (
                        <div className="col-lg-2">
                            <ul className='filterproduct'>
                                <li onClick={() => handleFilter(null)}>All Categories</li>
                                <li onClick={() => handleFilter("men's clothing")}>Men Clothing</li>
                                <li onClick={() => handleFilter('jewelery')}>Jewelery</li>
                                <li onClick={() => handleFilter('electronics')}>Electronics</li>
                                <li onClick={() => handleFilter("women's clothing")}>Women Clothing</li>
                                <li onClick={() => handlerating(3.9)}>Rating:{'>='}3.9</li>
                            </ul>
                        </div>
                    )}
                    <div className={showFilter ? "col-lg-10" : "col-lg-12"}>
                        {loading ? (
                            <div>Loading...</div>
                        ) : (
                            <div className="row">
                                {filteredData.map((fetdata, index) => (
                                    <div className="col-lg-3 col-md-6" key={index}>
                                        <div className="items_card mb-3">
                                            <div className="item_img text-center">
                                                <img className="img-fluid" src={fetdata.image} alt={fetdata.title} />
                                            </div>
                                            <div className="items_detail">
                                                <div className="cateprice mt-3 mb-2">
                                                    <div className="item_category">{fetdata.category}</div>
                                                    <div className="price">Price: ${fetdata.price}</div>
                                                </div>
                                                <div className="rating">
                                                    <div className="rate">
                                                        Rating: {fetdata.rating.rate} <i className="fa-solid fa-star" style={{ color: "#FFD43B" }}></i>
                                                    </div>
                                                    <div className="count">Count: {fetdata.rating.count}</div>
                                                </div>
                                                <div className="title mt-3">{fetdata.title}</div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}
