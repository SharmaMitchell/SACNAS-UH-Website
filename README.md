# SACNAS UH Website
![Landing-New-Nov](https://user-images.githubusercontent.com/90817905/200162152-50ead547-883f-40ac-b639-9c737bf7de33.png)
The official website for the University of Houston chapter of SACNAS (Society for the Advancement of Chicanos/Hispanics and Native Americans in Science).

Completely redesigned using HTML, CSS, and ReactJS.

## Technical Features & Implementation
### Events Database
The events database for this site was implemented using **Google Sheets**. Although it may seem like an odd choice for a database, it allows club leadership to quickly update events on the website, without programming. This solution also allows us to run scripts on the Google Sheet via Google Apps Script, which we can automate to run at certain intervals (ex. every night at midnight). 

This effectively allows us to automatically organize our database on the server-side, and facilitate quick & easy updates to the database by club leadership (even those who don't code). With the additional benefit of a fast and efficient setup process, this solution was a no-brainer for a project of this scale (lightweight data, and site traffic well below the 300 requests-per-minute API usage limit).

### Page Routing
This website was built as a single page web application. Due to the amount of reused components on every page (navigation bar/menu, banner, footer, etc.) and all of their sub-components, it would have been inefficient to reload them every time a user changed pages while navigating the site.

By using React Router, I was able to utilize routing to retain the components that are present on every page when a user navigates between pages. This improved resource efficiency and load times for each page, and made page transitions more smoothe for the user.

### Challenge: Single Page Apps on GitHub Pages
One issue that I ran into after implementing page routing via React Router was that users couldn't refresh their pages on any routes, or directly access a route on the site. When they tried, they would be met with a 404 page indicating that the requested page didn't exist. This turned out to be an issue with GitHub Pages, which (unlike many other hosting services) doesn't provide support for routing. 

Luckily, others had run into the same issue and discovered clever workarounds that wouldn't require me to switch to Hash Routing (and ruin my beautiful route URLs). I ended up utilizing [this solution](https://github.com/rafgraph/spa-github-pages) to implement a custom 404 page containing a script that redirects users to the correct route when they hit the 404 page.

The only caveat is that our site now doesn't have a proper 404 page, and will display a page containing our navbar, banner, and footer on any variation of our URL. But, for the time being we can live with that. Maybe in the future I'll have the 404 script reference the sitemap before redirecting to take care of that loose end.

### Dark Theme
One of the most (if not **the** most) anticipated features of this website was the dark theme. This feature was among the first things that the SACNAS UH leadership team asked me to implement on the new site.

By using React's `localStorage` hook, I was able to create a 'theme' variable that would be saved in the browser storage for next time a user visited our website. I was then able to create a short function to switch the theme, and pass it to an `onClick` parameter on a 'theme' button. After that, all I needed to do was define a color palette for the dark theme in `index.css`, and pass the current theme to a div surrounding our single page app. And *just like that* we have dark mode!

Additionally, I used the `window.matchMedia` method to check if the user has adjusted their settings to prefer dark themes. If they have, the site loads in dark mode by default.

## Original Site Comparison
### 'About' Section (Home page)
![About-Old-vs-New-Nov](https://user-images.githubusercontent.com/90817905/200162161-1bbe8842-0e9c-4b21-a13e-2be2ad49ae1c.png)
The redesigned 'About' section, shown on the right side in the new dark theme, has been streamlined and compartmentalized by row (each row containing a heading, paragraph, and image). A new banner component has been added to display the organization's 2022 national award for STEM diversity.

### Events Section
![Events-Old-vs-New-Nov](https://user-images.githubusercontent.com/90817905/200162164-bc874a95-f5d9-47a1-bcee-941d85d61552.png)
The redesigned events section is one of the biggest improvements of the new site, on both the front-end and back-end.

On the front-end, events have been organized into cards, and sorted so that the soonest events are shown at the top. Each card can be clicked/tapped to expand and show more event information, such as location, date & time, or an expanded event description.

On the back-end, events are pulled from a database hosted on Google Sheets. This makes it easy for leadership to update events on the website, and allows us to run scripts to sort events directly on the Google Sheets database (via Google Apps Script) - all without the need for a server-side database setup (which would take longer to establish, and be far more daunting for leadership to utilize.)

### Advisors Section
![Advisors-Old-vs-New-Nov](https://user-images.githubusercontent.com/90817905/200162496-e2a13f68-d96d-496d-9800-3cfd4198a8b3.png)
The new Advisors section features cards for each advisor, with contact information available for those seeking partnerships/collaborations with our organization.

Officers and mentors have been similarly organized into cards on the new Leadership page. The redesigned website combines student officers, faculty advisors, mentors & support officers all into one unified Leadership page. This streamlines information on the website, allowing us to consolidate relevant data and save users' time.
