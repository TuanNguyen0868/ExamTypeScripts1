import * as React from "react"
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import { Article } from "../../components/Article"
import { AddArticle } from "../../components/AddArticle"
import { addArticle, removeArticle } from "../../store/actionCreators"
import { Dispatch } from "redux"

const Arti: React.FC = () => {
  const articles: readonly IArticle[] = useSelector(
    (state: ArticleState) => state.articles,
    shallowEqual
  )

  const dispatch: Dispatch<any> = useDispatch()

  const saveArticle = React.useCallback(
    (article: IArticle) => dispatch(addArticle(article)),
    [dispatch]
  )

  return (
    <main>
      <h1 style={{textAlign: 'center',fontFamily: '-webkit-body', fontSize: 34}}>My Articles</h1>
      <AddArticle saveArticle={saveArticle} />
      {articles.map((article: IArticle) => (
        <Article
          key={article.id}
          article={article}
          removeArticle={removeArticle}
        />
      ))}
    </main>
  )
}

export default Arti