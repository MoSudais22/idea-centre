import React, { useState } from 'react';
import './Programmes.css';

import womenImg from '../assets/programmes1.png';
import youthImg from '../assets/programmes2.png';
import classesImg from '../assets/programmes3.jpg';
import activitiesImg from '../assets/programmes4.png';
import orientImg from '../assets/programmes5.jpg';
import integrationImg from '../assets/programmes6.jpg';
import dedicatedImg from '../assets/programmes7.jpg';

const SHOW_MORE_LIMIT = 3;

const programmes = [
  {
    id: 1,
    title: 'Women Network',
    bg: '#fdf0e0',
    img: womenImg,
    items: [
      'Mindful tea & sensory exploration',
      'Mental Health Talk',
      'YOGA CLASS',
      'Bungee PHYSIO',
      'Share Your Story',
      'Dance Class with Mr Benjie',
    ],
  },
  {
    id: 2,
    title: 'Youth Network',
    bg: '#e8f9e0',
    img: youthImg,
    items: [
      'Art Activity DIY Phone Strap',
      'Volleyball gathering',
      'Ethnically diverse female basketball training',
    ],
  },
  {
    id: 3,
    title: 'Chinese and English Classes',
    bg: '#e0f0ff',
    img: classesImg,
    items: [
      'Basic English',
      'Chinese Language & Culture (Mon, Fri) *Tue',
      'Intermediate - Chinese Class (Sunday-Mr Tommy)',
    ],
  },
  {
    id: 4,
    title: 'Programmes and Activities with Chinese & English learning elements',
    bg: '#fff5e0',
    img: activitiesImg,
    items: ['Mandarin Class'],
  },
  {
    id: 5,
    title: 'Orientation and Familiarisation Programmes',
    bg: '#ffe0e8',
    img: orientImg,
    items: [
      "Noah's Ark Family Day",
      'NEMO Clownfish Snorkeling Tour',
      'The silent echo movie night',
    ],
  },
  {
    id: 6,
    title: 'Integration Programmes',
    bg: '#ede0ff',
    img: integrationImg,
    items: [
      'Summer Fun Day',
      'Running Kids',
      'Sea Adventure',
    ],
  },
  {
    id: 7,
    title: 'Dedicated Programmes for Ethnic Minority Youths',
    bg: '#e0f8ff',
    img: dedicatedImg,
    items: [
      "IDEA's 2026 Summer Drama Class",
      "Magical Days at Queen's Hill!",
      'Kitchen Diaries',
    ],
  },
];

const Programmes = () => {
  const [expandedCards, setExpandedCards] = useState([]);

  const toggleCard = (id) => {
    setExpandedCards((prev) =>
      prev.includes(id)
        ? prev.filter((cardId) => cardId !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="programmesSection">

      <div className="sectionHeader">
        <h2>Programmes</h2>
        <button className="allBtn">
          All ●
        </button>
      </div>

      <div className="progGrid">
        {programmes.map((prog) => {

          const isExpanded =
            expandedCards.includes(prog.id);

          const visibleItems =
            isExpanded
              ? prog.items
              : prog.items.slice(
                  0,
                  SHOW_MORE_LIMIT
                );

          return (
            <div
              className="progCard"
              key={prog.id}
            >

              <div
                className="cardImageBox"
                style={{
                  background: prog.bg,
                }}
              >
                <img
                  src={prog.img}
                  alt={prog.title}
                />
              </div>

              <div className="cardTitle">
                {prog.title}
              </div>

              <ul className="cardList">
                {visibleItems.map(
                  (item, index) => (
                    <li key={index}>
                      {item}
                    </li>
                  )
                )}
              </ul>

              {prog.items.length >
                SHOW_MORE_LIMIT && (
                <button
                  className="moreBtn"
                  onClick={() =>
                    toggleCard(
                      prog.id
                    )
                  }
                >
                  {isExpanded
                    ? 'Less'
                    : 'More'}
                </button>
              )}
            </div>
          );
        })}
      </div>

    </section>
  );
};

export default Programmes;