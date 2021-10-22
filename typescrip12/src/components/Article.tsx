import * as React from "react";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";

type Props = {
  article: IArticle;
  removeArticle: (article: IArticle) => void;
};

export const Article: React.FC<Props> = ({ article, removeArticle }) => {
  const dispatch: Dispatch<any> = useDispatch();

  const deleteArticle = React.useCallback(
    (article: IArticle) => dispatch(removeArticle(article)),
    [dispatch, removeArticle]
  );

  return (
    <div
      className="Article"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem",
        borderRadius: 10,
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        overflow: "hidden",
        background: "radial-gradient(at center center, rgb(72 76 122) 1%, rgba(62, 99, 249, 0) 100%)",
        transition: "all 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s",
      }}
    >
      <div>
        <h1
          style={{
            color: "#222",
            textTransform: "capitalize",
            fontWeight: 700,
            fontSize: "1.7rem",
          }}
        >
          {article.title}
        </h1>
        <p style={{ paddingRight: "1rem", color: "#444" }}>{article.body}</p>
      </div>
      <button
        className="button-article"
        onClick={() => deleteArticle(article)}
        style={{
          padding: "0.5rem 0.7rem",
          border: "1px solid #d34b4b",
          background: "#d34b4b",
          color: "#fff",
          borderRadius: 20,
          cursor: "pointer",
          outline: "none",
        }}
      >
        Delete
      </button>
    </div>
  );
};
