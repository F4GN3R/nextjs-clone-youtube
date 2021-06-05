import React from 'react';
import { Box, Grid } from '@material-ui/core';

import Layout from 'src/components/Layout';
import VideoCard from 'src/components/VideoCard';

const Home = ({ data }) => {
  return (
    <Layout title="Youtube">
      <Box p={2}>
        <Grid container spacing={4}>
          {data.map(item => (
            <Grid key={item.id} item xl={3} lg={3} md={4} sm={6} xs={12}>
              <VideoCard item={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Layout>
  );
};

export async function getStaticProps(context) {
  const data = [
    {
      id: 1,
      title: 'Israel & Rodolffo - Batom De Cereja (Aqui e Agora)',
      authorId: 1,
      authorName: 'Israel e Rodolfo',
      authorAvatar:
        'https://yt3.ggpht.com/ytc/AAUvwnhCDfTm7GZUN3dbrp-4eYrdh9dNJ85nuZqxa0Bdew=s48-c-k-c0x00ffffff-no-rj-mo',
      views: 100,
      thumb:
        'https://i.ytimg.com/vi/3vYeQLJ2as4/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAA6uw6WfTaj8E1Ofm2poQH6q7Jkg',
      videoUrl:
        'https://www.youtube.com/watch?v=3vYeQLJ2as4&list=RDqMEsx__88Gk&index=6&ab_channel=IsraeleRodolffoIsraeleRodolffoCanaloficialdoartista',
      updatedAt: new Date(),
    },
    {
      id: 2,
      title:
        'Fernando & Sorocaba, Tarcísio do Acordeon - Só Não Divulga (Clipe Oficial)',
      authorId: 2,
      authorName: 'Fernando e Sorocaba',
      authorAvatar:
        'https://yt3.ggpht.com/ytc/AAUvwngkuKDO8bY8DfRPlnZNz6MT-ehjYJTtAC70oUYMAQ=s48-c-k-c0x00ffffff-no-rj-mo',
      views: 100,
      thumb:
        'https://i.ytimg.com/vi/qIMlrNuPvsw/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBrOV2zjQQYyG9hY22VwlBZmqJChA',
      videoUrl:
        'https://www.youtube.com/watch?v=qIMlrNuPvsw&list=RDqMEsx__88Gk&index=28&ab_channel=IsraeleRodolffoIsraeleRodolffoCanaloficialdoartista',
      updatedAt: new Date(),
    },
    {
      id: 3,
      title: 'Nunca Foi Amor - Zé Vaqueiro (Video Oficial)',
      authorId: 3,
      authorName: 'Zé Vaqueiro',
      authorAvatar:
        'https://yt3.ggpht.com/ytc/AAUvwnhrtVbLxZCufmA6h1OtEJUrKBUsV1aoYadXRviySA=s48-c-k-c0x00ffffff-no-rj-mo',
      views: 100,
      thumb:
        'https://i.ytimg.com/vi/UBhR3AMdVR0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDoOnF7hhNVTaeapDbCdZEBQ896xA',
      videoUrl:
        'https://www.youtube.com/watch?v=UBhR3AMdVR0&list=RDqMEsx__88Gk&index=3&ab_channel=Z%C3%A9VaqueiroZ%C3%A9VaqueiroCanaloficialdoartista',
      updatedAt: new Date(),
    },
    {
      id: 4,
      title: 'COM VOCÊ OU SEM - NATHANZINHO (CLIPE OFICIAL)',
      authorId: 4,
      authorName: 'Nattan',
      authorAvatar:
        'https://yt3.ggpht.com/KoP80KCFTn_AHKbQt_cv_Bxav2BRGLj9PlWrOkKf185COhpjD8MP-cJI_UwwF6z8eGPzoW8PlA=s48-c-k-c0x00ffffff-no-nd-rj',
      views: 100,
      thumb:
        'https://i.ytimg.com/vi/Rm8_H1YNPZA/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAl1an9Cg2FrVR7uHRoMjyC5e4EbQ',
      videoUrl:
        'https://www.youtube.com/watch?v=Rm8_H1YNPZA&list=RDqMEsx__88Gk&index=4&ab_channel=NattanNattanCanaloficialdoartista',
      updatedAt: new Date(),
    },
  ];

  return {
    props: {
      data: JSON.parse(JSON.stringify(data)),
    }, // will be passed to the page component as props
  };
}

export default Home;
