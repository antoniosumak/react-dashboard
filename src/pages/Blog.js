import React, { useEffect, useState } from 'react';
import Section from '../components/Section/Section';
import { Grid } from '../lib/styles/generalStyles';
import {
  BlogCardWrapper,
  BlogTitle,
  BlogImage,
  AuthorContainer,
  AuthorInfo,
} from './BlogStyles';
const Blog = () => {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:1337/blogs')
      .then((response) => response.json())
      .then((data) => setBlogData(data));
  }, []);
  console.log(blogData);
  return (
    <Section>
      <Grid>
        {blogData &&
          blogData.map((data, index) => (
            <BlogCardWrapper key={index}>
              <AuthorContainer>
                <AuthorInfo>
                  {data.userinfo &&
                    `${data.userinfo.name} ${data.userinfo.surname}`}
                </AuthorInfo>
              </AuthorContainer>
              <BlogTitle>{data.title}</BlogTitle>
              {data.image.map((data) => {
                const path = 'http://localhost:1337' + data.url;

                return <BlogImage src={path} />;
              })}
              <p>{data.content}</p>
            </BlogCardWrapper>
          ))}
      </Grid>
    </Section>
  );
};

export default Blog;
