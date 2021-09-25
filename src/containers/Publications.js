import React, { useEffect, useState } from 'react'
import Article from 'components/Article'

function Publications() {
   const [articles, setArticles] = useState([])

   useEffect(() => {
      setArticles([
         {
            title: 'Photo Realistic Image Generation',
            type: 'Research',
            description:
               'GAN Based Photo-Realistic Image Generation from Sketch using Nested U-Net',
            link: 'https://ieeexplore.ieee.org/document/9213230',
         },
         {
            title: 'Web Components in a Nutshell',
            type: 'Article',
            description:
               'Fundamentals of Native Browser Web Components and How to Create Them',
            link: 'https://levelup.gitconnected.com/web-components-in-a-nutshell-1e114aa971b9',
         },
         {
            title: 'Ionic Currency Converter',
            type: 'Article',
            description:
               'Let’s learn ionic by creating a simple real-world application.',
            link: 'https://levelup.gitconnected.com/ionic-currency-converter-8f33d3d76d2d',
         },
         {
            title: 'JavaScript ES10/ES2019 Features',
            type: 'Article',
            description: 'New features of ES10/ECMAScript 2019',
            link: 'https://levelup.gitconnected.com/javascript-es10-es2019-features-d80c4fca6094',
         },
      ])
   }, [])

   return (
      <div
         id="blogs"
         className="pb-32 lg:pb-0 lg:h-screen font-inter text-white">
         <h3 className="font-fira text-2xl font-semibold text-white mb-8 animate_animated">
            <span className="text-turquo font-light">04.</span> Publications
         </h3>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {articles.map((article, index) => (
               <div key={index} className="animate__animated anim">
                  <Article key={index} data={article} />
               </div>
            ))}
         </div>
      </div>
   )
}

export default Publications
