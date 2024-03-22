import NewsCard from "../NewsCard/NewsCard";

const NewsCards = ({newsArticles}) => {
  return (

    <div>

      {newsArticles.map((article, i) => (
        <NewsCard/>
      ))}

    </div>

  );
}

export default NewsCards;