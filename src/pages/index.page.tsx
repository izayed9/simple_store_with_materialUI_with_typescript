
import { Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Header from 'components/layout/public/genarel/header';
import MotoIntro from 'components/moto-intro';
import StorePicker from 'components/store-picker';
import { NextSeo } from 'next-seo';
import Head from 'next/head';




const useStyles = makeStyles({


});

const Homepage = () => {
  const classes = useStyles();


  return (
    <>
      <Head>
        <meta property="og:url" content={process.env.NEXT_PUBLIC_BASE_URL} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Qubehash"/>
        <meta
          property="og:description"
          content="A simple blog and store picker for finding the best deals on your favorite stores."
        />
        <meta property="og:image" content={process.env.NEXT_PUBLIC_OG_IMAGE} />
      </Head>

      <NextSeo
        title="Qubehasg - blog store picker"
        // descrition="blog page"
      />
        <Header />
      <Container maxWidth="lg">

        <MotoIntro />

        <StorePicker />
        {/* <Link href="/login">
          <a className="btn btn-primary">Login</a>
        </Link>
        <br />
        <Link href="/register">
          <a className="btn btn-primary">
            Register
          </a>
        </Link> */}
      </Container>
    </>
  );
};

export default Homepage;




