import React from 'react';
import './Reading.css';
import alchemist from '../images/alchemist.jpg';
import ric from '../images/rich_dad_poor_dad.jpg';
import kill from '../images/kill.png';
import book1 from '../images/1984.png';
import pride from '../images/pride.png';
import gita from '../images/bhagwadgita.png';
import great from '../images/great.png';
import bhavai from '../images/bhavai.png';

const books = [
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    imgSrc: pride, // Placeholder path, replace with actual import
    description: "A classic romance exploring love, class, and societal expectations.",
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    imgSrc: kill, // Placeholder path, replace with actual import
    description: "A powerful tale of racial injustice and moral growth in the American South.",
  },
  {
    title: "1984",
    author: "George Orwell",
    imgSrc: book1, // Placeholder path, replace with actual import
    description: "A dystopian classic on surveillance, totalitarianism, and freedom.",
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    imgSrc: alchemist,
    description: "A magical journey of following one's dreams.",
  },
  {
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    imgSrc: ric, // Placeholder path, replace with actual import
    description: "An eye-opener on wealth, assets, and financial literacy.",
    
  },
  {
    title: "Manvini Bhavai",
    author: "Pannalal Patel",
    imgSrc: bhavai, // Placeholder path, replace with actual import
    description: "A classic Gujarati novel depicting the struggles of rural life and famine.",
    lang: "gu", // For Gujarati styling
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    imgSrc: great, // Placeholder path, replace with actual import
    description: "A tale of wealth, ambition, and the American Dream in the Jazz Age.",
  },
  {
    title: "Bhagavad Gita",
    author: "Traditional (Vyasa)",
    imgSrc: gita, // Placeholder path, replace with actual import
    description: "A sacred Hindu scripture offering profound philosophical and spiritual insights.",
    lang: "sa", // For Sanskrit styling
  },
];

const Reading: React.FC = () => {
  console.log('Books array:', books);

  return (
    <div className="reading-container">
      <h2 className="reading-title">📚 Books That Shaped My Journey</h2>
      <p className="reading-intro">These books have influenced my perspectives, motivation, and self-growth.</p>
      <div className="books-grid">
        {books.length > 0 ? (
          books.map((book, index) => (
            <div key={index} className="book-card" style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}>
              <img src={book.imgSrc} alt={book.title} className="book-cover" onError={() => console.log(`Failed to load image for ${book.title}`)} />
              <div className="book-info">
                <h3 className="book-title" lang={book.lang || "en"}>
                  {book.title}
                </h3>
                <h4 className="book-author">{book.author}</h4>
                <p className="book-description">{book.description}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No books available.</p>
        )}
      </div>
    </div>
  );
};

export default Reading;