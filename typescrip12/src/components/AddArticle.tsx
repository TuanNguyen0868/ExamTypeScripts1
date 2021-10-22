import * as React from "react";

type Props = {
  saveArticle: (article: IArticle | any) => void;
};

export const AddArticle: React.FC<Props> = ({ saveArticle }) => {
  const [article, setArticle] = React.useState<IArticle | {}>();

  const handleArticleData = (e: React.FormEvent<HTMLInputElement>) => {
    setArticle({
      ...article,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  const addNewArticle = (e: React.FormEvent) => {
    e.preventDefault();
    saveArticle(article);
  };

  return (
    <form
      onSubmit={addNewArticle}
      className="Add-article"
      style={{
        margin: "2rem auto",
        padding: "1rem",
        // background: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        background: "radial-gradient(at center center, rgb(72 76 122) 1%, rgba(62, 99, 249, 0) 100%)",

      }}
    >
      <input
        type="text"
        id="title"
        placeholder="Title"
        onChange={handleArticleData}
        style={{
          display: "block",
          margin: "1rem auto",
          width: "20rem",
          padding: "0.5rem",
          border: "1px solid #00b8e6",
          borderRadius: 10,
          outline: "none",
        }}
      />
      <input
        type="text"
        id="body"
        placeholder="Description"
        onChange={handleArticleData}
        style={{
            display: "block",
            margin: "1rem auto",
            width: "20rem",
            padding: "0.5rem",
            border: "1px solid #00b8e6",
            borderRadius: 10,
            outline: "none",
          }}
      />
      <button disabled={article === undefined ? true : false}
      style={{width: '21rem',
        padding: '0.7rem',
        border: '1px solid #00b8e6',
        background: '#00b8e6',
        color: '#fff',
        borderRadius: 20,
        cursor: 'pointer',
        outline: 'none'}}
      >
        Add article
      </button>
    </form>
  );
};
