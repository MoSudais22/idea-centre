import React from 'react';
import './LatestNews.css';

import bgImage from '../assets/news-bg.jpg';

import news1 from '../assets/news1.png';
import news2 from '../assets/news1.png';
import news3 from '../assets/news1.png';
import news4 from '../assets/news1.png';

const news = [
{
id:1,
img:news1,
title:'Civil Service Job Vacancies (Position as at 23.6.2026)',
date:'23/06/2026'
},
{
id:2,
img:news2,
title:'Civil Service Job Vacancies (Position as at 9.6.2026)',
date:'09/06/2026'
},
{
id:3,
img:news3,
title:'Civil Service Job Vacancies (Position as at 2.6.2026)',
date:'02/06/2026'
},
{
id:4,
img:news4,
title:'Newsletter Issue No.7',
date:'02/06/2026'
}
];

const LatestNews = () => {
return (

<section
className="newsSection"
style={{
backgroundImage:`url(${bgImage})`
}}
>

<div className="newsHeader">

<h2>Latest News</h2>

<button className="allBtn">
All ●
</button>

</div>

<div className="newsGrid">

{news.map(item=>(

<div className="newsCard" key={item.id}>

<img
src={item.img}
alt=""
className="newsImage"
/>

<div className="newsContent">

<h3>{item.title}</h3>

<p>{item.date}</p>

<button className="detailBtn">
Details
</button>

</div>

</div>

))}

</div>

</section>

);
};

export default LatestNews;