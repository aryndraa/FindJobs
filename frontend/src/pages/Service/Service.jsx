// Service.js
import React, { useEffect, useState } from "react";
import HeroSection from "../../components/molecules/Service/Hero/HeroService";
import CategoryFilter from "../../components/molecules/filter/CategoryFilter";
import SearchBar from "../../components/molecules/SearchBar";
import SortingOptions from "../../components/molecules/filter/SortingOptions";
import ServiceCard from "../../components/molecules/Service/Card/ServiceCard";
import BreadCrumbs from "../../components/molecules/BreadCrumbs";
import { getServiceData } from '../../components/services/Service';

const Service = () => {
  const [data, setData] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [orderBy, setOrderBy] = useState("id");
  const [orderDirection, setOrderDirection] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    const fetchData = async (page = 1) => {
      setLoading(true);
      try {
        const result = await getServiceData(page, keyword, orderBy, orderDirection);
        setData(result);
        setLastPage(result.meta.last_page);
        setCurrentPage(result.meta.current_page);
        setTotalCount(result.meta.total);
      } catch (error) {

      } finally {
        setLoading(false);
      }
    };

    fetchData(currentPage);
  }, [currentPage, keyword, orderBy, orderDirection]);


  const handleSearch = (e) => {
    setKeyword(e.target.value);
    setCurrentPage(1)
  };

  const handleKeywordChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleSortChange = (sortValue) => {
    switch (sortValue) {
      case "like_desc":
        setOrderBy("like_count");
        setOrderDirection("desc");
        break;

        case "visitor_desc":
        setOrderBy("visitor_count");
        setOrderDirection("desc");
        break;

        case "price_desc":
        setOrderBy("price");
        setOrderDirection("desc");
        break;

        case "price_asc":
        setOrderBy("price");
        setOrderDirection("asc");
        break;

        default:
        setOrderBy("id");
        setOrderDirection("asc");
        break;
    }
    setCurrentPage(1);
  };

  const breadLink = [
    { url: "/", name: "home" },
    { url: "/service", name: "service" },
  ];

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= lastPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className={`px-3 py-1 mx-1 rounded-sm ${currentPage === i ? 'bg-primary text-white' : 'bg-gray-200'}`}
        >
          {i}
        </button>
      );
    }

    return pageNumbers;
};

  return (

    <div className="mx-7 lg:mx-16 py-24">
      <BreadCrumbs breadLink={breadLink}/>
      <div className="mb-8">
        <HeroSection/>
      </div>
      <div className="mb-12">
        <CategoryFilter/>
      </div>
      <div className="flex items-start flex-col lg:flex-row justify-between gap-5 mb-6">
        <SearchBar onChange={handleKeywordChange} onSubmit={handleSearch} />
        <div className="mt-2 flex items-end">
          <SortingOptions onSortChange={handleSortChange} />
        </div>
      </div>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold ">{totalCount} Results</h2>
        <div className="pagination">
          {currentPage > 1 && (
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              className="px-3 py-1 mx-1 bg-gray-200 rounded-sm"
            >
              Previous
            </button>
          )}
          {renderPageNumbers()}
          {currentPage < lastPage && (
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              className="px-3 py-1 mx-1 bg-gray-200 rounded-sm"
            >
              Next
            </button>
          )}
        </div>
      </div>
      <div className="gap-4 mt-4">
        <ServiceCard data={data.data}/>
      </div>
    </div>
  );
}

export default Service;
