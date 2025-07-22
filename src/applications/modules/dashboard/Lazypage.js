import React from 'react'

function Lazypage() {
  return (
    <div>
   <p className='lazy'> Lazy loading in JavaScript is a performance optimization technique that postpones the loading of non-critical resources until they are actually needed by the user. This approach contrasts with "eager loading," where all resources are loaded immediately upon page visit, regardless of whether they are visible or required at that moment. 
How it works:
Instead of loading all content upfront, lazy loading defers the loading of resources (like images, videos, JavaScript files, or iframes) that are not immediately visible within the user's viewport (the "above the fold" content). These resources are then loaded dynamically as the user scrolls down the page or interacts with specific elements that require them.
Common applications in JavaScript:
Images and Videos:
Often, src or data-src attributes are used to store the actual image/video URL, which is then dynamically assigned to the src attribute when the element enters the viewport.
JavaScript Modules/Components:
Large JavaScript bundles can be split into smaller chunks, and these chunks can be loaded on demand when a specific component or functionality is needed.
Iframes:
Embedded content like YouTube videos or Google Maps can be lazy-loaded to prevent them from impacting initial page load performance.
Benefits of lazy loading:
Faster Initial Page Load:
By prioritizing essential content, the page becomes interactive more quickly, improving the First Contentful Paint (FCP) and overall user experience.
Reduced Bandwidth Usage:
Unnecessary resources are not downloaded unless required, saving data for both the user and the server, which is particularly beneficial for users on limited data plans.
Improved Performance and SEO:
Faster loading times can lead to better search engine rankings, as search engines favor performant websites.
Optimized Resource Utilization:
Reduces server load and improves efficiency, especially for websites with a large number of assets. 
Implementation techniques:
Intersection Observer API:
This modern API provides an efficient way to detect when an element enters or exits the viewport, triggering the loading of the deferred resource.
Scroll Event Listeners:
While less performant than Intersection Observer, scroll event listeners can be used to check element visibility and trigger loading. Throttling or debouncing is crucial to prevent performance issues with frequent event firing.
Libraries and Frameworks:
Many libraries and frameworks (e.g., vanilla-lazyload, next/dynamic in Next.js) offer built-in or helper functions for implementing lazy loading.
</p>
    </div>
  )
}

export default Lazypage
