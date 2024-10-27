function loadSite(url) {
    document.getElementById('browser').src = url;
    addRecentlyViewed(url); // Add the loaded site to recently viewed
}

function addRecentlyViewed(url) {
    const recentlyViewed = document.getElementById('recent-sites');
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank'; // Open in a new tab
    link.textContent = url;
    listItem.appendChild(link);
    recentlyViewed.appendChild(listItem);
}
<script src="//code.tidio.co/ixhtgecylrkchllxu8gsk4vtbmtjkxtv.js" async></script>
