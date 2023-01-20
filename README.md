# SACNAS UH Website
![Landing-New-Nov](https://user-images.githubusercontent.com/90817905/200162152-50ead547-883f-40ac-b639-9c737bf7de33.png)
The official website for the University of Houston chapter of SACNAS (Society for the Advancement of Chicanos/Hispanics and Native Americans in Science).

Completely redesigned using Figma, implemented with ReactJS and Google Cloud Platform (Sheets as database, Apps Script for server-side scripting on Sheets database).

## Technical Features & Implementation
### Google Sheets Database
The database for this site, hosting event and leaderhsip data, was implemented using **Google Sheets**. This solution allows the organization's leadership to quickly update events on the website without programming, and allows for scripting on the Google Sheets database via Google Apps Script.   

Sheets and Apps Script are used to automatically organize our database on the server-side, and facilitate quick & easy updates to the database by club leadership (even those who don't code). With the additional benefit of a fast and efficient setup process, this solution was a no-brainer for a project of this scale (lightweight data, and site traffic well below the 300 requests-per-minute API usage limit).

### Google Apps Script
Although not part of this repository, Google Apps Script is an integral part of this project. Below are the use cases for Apps Script on the Google Sheets Database:
- Automatic image compression & resizing
  - When leadership uploads event posters to the site (by pasting image URLs in the Sheets database), they are often pasting full-size high-resolution event posters. This previously led to long load-times and large network payloads on the events page.
  - To solve the above issue and reduce network payload sizes (by about 80%), a script is run whenever new images are added to the Google Sheets database: sending the images to a compression API, and then to Imgur (via the Imgur API) for hosting and resizing.
- QR Code Detection
  - Event posters often contain QR codes for event registration/RSVP.
  - When event posters are added to the Google Sheets databse, a script is run which sends the image through a QR code detection API (via [goQR](https://goqr.me/api/))
  - The [BarcodeDetector](https://developer.mozilla.org/en-US/docs/Web/API/BarcodeDetector) web API was considered for a client-side implementation, but the server-side solution was preferred due to limited browser support for BarcodeDetector outside of Chrome. 
- Event sorting by date
  - Rather than load and sort event data on the client side, Apps Script is used to sort events by date and automatically move them between the "Upcoming Events" table (sheet), and the "Previous Events" sheet.
  - The sorting script is run every night at midnight, to move events from the previous day to the "Previous Events" sheet

### Dark Theme
Implemented using the [use-local-storage](https://www.npmjs.com/package/use-local-storage) React hook. User theme preference is stored in a browser cookie.

Additionally, the [window.matchMedia](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia) API is used to check if the user has adjusted their settings to prefer dark themes. If they have, the site loads in dark mode by default.

Finally, CSS transitions are used to make it aesthetically ***fade***.

### Page Routing
This website was built as a single page web application. Due to the amount of reused components on every page (navigation bar/menu, banner, footer, etc.) and all of their sub-components, it would have been inefficient to reload them every time a user changed pages while navigating the site.

By using React Router, I was able to utilize routing to retain the components that are present on every page when a user navigates between pages. This improved resource efficiency and load times for each page, and made page transitions more smoothe for the user.

### Page Routing Challenge: Single Page Apps on GitHub Pages
One issue that arose after implementing page routing via React Router was that users couldn't refresh their pages on any routes, or directly access a route on the site. When they tried, they would be met with a 404 page indicating that the requested page didn't exist. This turned out to be an issue with GitHub Pages, which (unlike many other hosting services) doesn't provide support for client-side page routing. 

Luckily, others had run into the same issue and discovered clever workarounds that wouldn't require me to switch to Hash Routing (and ruin my beautiful route URLs). By utilizing [this solution](https://github.com/rafgraph/spa-github-pages), a custom 404 page was used to redirect users to the correct route when they hit the 404 page.

The only caveat is that the site now doesn't have a proper 404 page, and will display a page containing the navbar, banner, and footer on any variation of our URL. For now, this is a known issue. Maybe in the future the 404 script can reference the sitemap before redirecting to take care of that loose end.

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
