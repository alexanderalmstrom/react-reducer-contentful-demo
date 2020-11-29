import { createClient } from "contentful";

const contentfulClient = createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
});

export async function getPosts() {
  const posts = await contentfulClient.getEntries({ content_type: "post" });
  return posts;
}
