(function() {
	const newUrlBase = "http://www.discudemy.com/go/";
	const reservedKeywords = ["search", "about", "all", "category", "language", "contact", "feed", "policies",""];
	const couponParam = "?couponCode=";

	function replaceLink(linkElement) {
	  for (const link of links) {
		const href = link.href;

		// Check if the link belongs to discudemy.com
		if (href.startsWith("http://www.discudemy.com/") || href.startsWith("https://www.discudemy.com/")) {
		  // Extract the "something" part (after the domain and potentially category)
		  const pathParts = href.split("/");
		  //console.log(pathParts);
		  if (!reservedKeywords.includes(pathParts[3])) {
				  
			  const targetPart = pathParts.length > 4 ? pathParts[4] : pathParts[3];

			  // Build the new URL with "go/" prefix
			  const newUrl = newUrlBase + targetPart;

			  // Update the link's href attribute
			  link.href = newUrl;
		  }
		}
	  }
	}
	function openCouponLink() {
		//console.log("reached hear: 29");
		const links = document.querySelectorAll("a");
		for (const link of links) {
		  if (link.href.indexOf(couponParam) !== -1) {
			link.click(); // Click the link containing couponCode parameter
			break;
		  }
		}
	}
	// Find all anchor tags (links)
	const links = document.querySelectorAll("a");
	// Loop through links and replace if necessary
	links.forEach(replaceLink);
	// Find and open coupon link if exits
	if (window.location.href.includes("discudemy.com/go/")) {
		openCouponLink();
	}
})();
