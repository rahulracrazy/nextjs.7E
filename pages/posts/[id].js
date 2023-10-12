import Head from "next/head";
import Layout from "../../components/layout";
import Date from "../../components/date";
import { getAllPostIds, getPostData } from "../../lib/posts";
import utils from '../../styles/utils.module.css'

export default function Post({ data }) {
  return (
    <>
      <Layout>
        <Head>
          <title>{data.title}</title>
        </Head>
        <h1 className={utils.headingXl}>{data.title}</h1>
        <div className={utils.lightText}>
          <Date datestring={data.created} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: data.content }} />
      </Layout>
    </>
  );
}

export async function getStaticPaths() {
  const paths = await getAllPostIds();
  //console.log(paths)
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const data = await getPostData(params.id);
  //console.log(data)
  return {
    props: { data },
  };
}
