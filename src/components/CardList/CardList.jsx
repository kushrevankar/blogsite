"use client";

import React, { useEffect, useState } from 'react';
import styles from "./cardList.module.css";
import Pagination from '../pagination/Pagination';
import Card from '../card/Card';

const getData = async (page,cat) => {
  const res = await fetch(`/api/posts?page=${page}&cat=${cat || ""}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

const CardList = ({ page, cat }) => {
  const [data, setData] = useState([]); // Default to an empty array
  const [count, setCount] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { posts, count } = await getData(page, cat);
        setData(posts || []); // Ensure `data` is an array
        setCount(count);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchData();
  }, [page, cat]);

  if (error) return <div>Error: {error}</div>;

  const POST_PER_PAGE = 2;
  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {data.length > 0 ? (
          data.map((item) => (
            <Card item={item} key={item._id} />
          ))
        ) : (
          <p>No posts available</p>
        )}
      </div>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  );
};

export default CardList;
