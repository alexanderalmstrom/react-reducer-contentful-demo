import ReactMarkdown from "react-markdown";

const Post = ({ image, name, content }) => {
  const {
    file: { url: imageUrl },
    title: imageTitle,
  } = image?.fields;

  return (
    <div>
      {image && <img src={imageUrl} alt={imageTitle} />}
      {name && <h2>{name}</h2>}
      {content && <ReactMarkdown>{content}</ReactMarkdown>}
    </div>
  );
};

export default Post;
