import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { setArticles } from '../Redux/actions';
import { NewsItem } from '.';
import Pagination from '../components/Pagination';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FormattedMessage } from "react-intl";

const NewsList = () => {
  const articles = useSelector((state) => state.articles);
  const currentPage = useSelector((state) => state.currentPage);
  const dispatch = useDispatch();

  useEffect(() => {
    const getArticles = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=football&apiKey=999f372f3515414e8c1aa3a98a91b9cd`
        );
        const articlesData = response.data.articles;
        dispatch(setArticles(articlesData));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getArticles();
  }, [dispatch]);

  console.log(articles);
  // Sayfa numarasına göre makaleleri filtreleyin
  const itemsPerPage = 10;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedArticles = articles.slice(startIndex, endIndex);

  return (
    <div className="container mt-5">
      <table className="table">
        <thead>
          <tr>
            <th scope="col"> <FormattedMessage id="homePage.head" /></th>
            <th scope="col"> <FormattedMessage id="homePage.description" /></th>
            <th scope="col"> <FormattedMessage id="homePage.url" /></th>
            <th scope="col"> <FormattedMessage id="homePage.image" /></th>
          </tr>
        </thead>
        <tbody>
          {displayedArticles.map((article, index) => (
            <tr key={index}>
              <td>{article.title}</td>
              <td>{article.description}</td>
              <td>
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                <FormattedMessage id="homePage.NewsLink" />
                </a>
              </td>
              <td>
                <img
                  src={article.urlToImage}
                  alt={article.title}
                  className="img-fluid"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default NewsList;