import React from 'react';

function WhatsNew() {
  const articles = [
    {
      title: "Michael Connor on the Impact of Generative AI in Consumer Goods",
      date: "November 15, 2024",
      category: "InterviewData & AI",
      image: "https://hugoinc.com/wp-content/uploads/2023/10/badge-interview.svg"
    },
    {
      title: "Transforming Customer Service in the Home Furnishings Industry",
      date: "December 9, 2024",
      category: "Industry Case StudyCustomer Support",
      image: "https://hugoinc.com/wp-content/uploads/2023/10/badge-case-study.svg"
    }
  ];

  return (
    <section className="whats-new">
      <h2>See what’s new and what’s next.</h2>
      <p>Thought leadership and actionable insights to help you grow faster.</p>
      <div className="articles-container">
        {articles.map((article, index) => (
          <div key={index} className="article-card">
            <img src={article.image} alt="" />
            <div className="article-info">
              <p className="category">{article.category}</p>
              <p className="date">{article.date}</p>
            </div>
            <h3>{article.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhatsNew;
