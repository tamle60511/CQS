import React from 'react';
import NewsCard from '../ui/NewsCard';
import Button from '../ui/Button';


const newsData = [
  {
    id: 1,
    image: '/images/news/news1.jpg',
    date: '05/10/2024',
    category: 'Charity',
    title: 'Thư cám ơn của Trụ trì Đại Đức Thích Minh Thiền và hoạt động từ thiện của Công ty',
    excerpt: 'Công ty CQS rất vui mừng khi nhận được Thư cám ơn của Trụ trì Đại Đức Thích Minh Thiền, chùa Đức Hòa thuộc tỉnh Bình Dương cám ơn Công Ty CQS MAY\'S đã...',
    link: '/news/1'
  },

];

const NewsSection = () => {
  return (
    <section className="py-20 bg-gray-50" id="news-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-16">
          <h2 className="text-3xl font-bold fade-right">Latest News</h2>
          <a href="/news" className="text-red-600 hover:text-red-700 flex items-center font-medium fade-left">
            View All News
            <i className="fas fa-arrow-right ml-2"></i>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {newsData.map(news => (
            <NewsCard
              key={news.id}
              image={news.image}
              date={news.date}
              category={news.category}
              title={news.title}
              excerpt={news.excerpt}
              link={news.link}
            />
          ))}
        </div>

        <div className="mt-10 text-center fade-up">
          <Button variant="outline" size="md">View All News Articles</Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
