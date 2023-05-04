# SACNAS UH Website
![Landing-New-Nov](https://user-images.githubusercontent.com/90817905/200162152-50ead547-883f-40ac-b639-9c737bf7de33.png)
The official website for the University of Houston chapter of SACNAS (Society for the Advancement of Chicanos/Hispanics and Native Americans in Science).

Completely redesigned using Figma, implemented with ReactJS, JavaScript, CSS, Google Workspace, and Google Cloud Platform.

## Technical Features & Implementation
### Google Sheets Database
The database for this application, hosting event and leaderhsip data, was implemented using **Google Sheets**. This solution allows the organization's leadership to quickly update events on the website without programming, and allows for scripting on the Google Sheets database via Google Apps Script.   

Sheets and Apps Script are used to automatically organize our database and facilitate quick & easy updates to the database by club leadership. This solution scales well for our organization, since our usage falls well within the 300 request-per-minute API limitation, and provides leadership with a familiar interface to update information on the website. Additionally, the simple setup process allowed our small one-man dev team to focus development efforts on user experience and implementing impactful features.

### Google Apps Script
Although not part of this repository, Google Apps Script is an integral part of this project. Below are the use cases for Apps Script on the Google Sheets Database:
- Automatic image compression & resizing
  - When leadership uploads event posters to the site (by pasting image URLs into the Sheets database), they are often pasting full-size high-resolution event posters. This previously led to long load-times and large network payloads on the events page.
  - To solve the above issue and reduce network payload sizes (by about 80%), a script is run whenever new images are added to the Google Sheets database: sending the images to a compression API, and then to Imgur (via the Imgur API) for hosting and resizing.
- QR Code Detection
  - Event posters often contain QR codes for event registration/RSVP.
  - When event posters are added to the Google Sheets databse, a script is run which sends the image through a QR code detection API (via [goQR](https://goqr.me/api/))
  - The [BarcodeDetector](https://developer.mozilla.org/en-US/docs/Web/API/BarcodeDetector) web API was considered for a client-side implementation, but the server-side solution was preferred due to limited browser support for BarcodeDetector outside of Chrome. 
- Event sorting by date
  - Rather than load and sort event data on the client side, Apps Script is used to sort events by date and automatically move them between the "Upcoming Events" sheet, and the "Previous Events" sheet.
  - The sorting script is run every night at midnight, to move events from the previous day to the "Previous Events" sheet

### Google Drive CMS, Google Docs Articles
Google Drive is used to store and manage articles on the website. Similarly to the Google Sheets Database, this provides leadership with a familiar interface to manage content on the website, and is a free solution that scales well for our use case. Articles are written as Google Docs, which are accessed via the Google Drive API on the client side: Docs are exported to HTML, and custom styling is applied to ensure dark theme compatiblity and consistency between articles.

[See Gallery](#gallery) for a visual depiction of the Google Drive and Google Docs integration.

### Dark Theme
Implemented using the [use-local-storage](https://www.npmjs.com/package/use-local-storage) React hook to store and access state from the browser's local storage. User theme preference is stored in local storage and used to set the theme at the start of a session.

Additionally, the [window.matchMedia](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia) API is used to check if the user has adjusted their settings to prefer dark themes. If they have, the site loads in dark mode by default.

## Technical Challenges
### Page Routing: Single Page Apps on GitHub Pages
One issue that arose after implementing page routing via React Router was that users couldn't refresh their pages on any routes, or directly access a route on the site. When they tried, they would be met with a 404 page indicating that the requested page didn't exist. This turned out to be an issue with GitHub Pages, which (unlike many other hosting services) doesn't provide support for client-side page routing. 

Luckily, others had run into the same issue and discovered clever workarounds that wouldn't require a switch to Hash Routing (which would ruin our beautiful route URLs). By utilizing [this solution](https://github.com/rafgraph/spa-github-pages), a custom 404 page was used to redirect users to the correct route when they hit the 404 page.

# Gallery
## Google Workspace Integration
### Google Drive CMS
![Website Articles Google Drive Folder](https://user-images.githubusercontent.com/90817905/236270811-4364a0a7-890a-4cf8-9aa4-8cf30d811884.png)
Website articles are stored in a public Google Drive folder, with their corresponding thumbnails matching the name of the article. This provides leadership with a familiar drag-and-drop interface to update articles on the website. 

![Resources Page Containing Articles](https://user-images.githubusercontent.com/90817905/236271476-e88c60bb-210e-4999-b442-3e07e6ef2497.png)
On the resources page, metadata for each file in the Google Drive folder is pulled via the Google Drive API, and used to display article information. Note that because article thumbnails are set using the Google Drive file's thumbnail for each article image, this is all accomplished in a single request.

### Google Docs Articles
![Google Doc Article Example](https://user-images.githubusercontent.com/90817905/236272216-cc74c71b-8048-4fae-b77d-c26dea01bcd2.png)
Leadership can write articles in Google Docs, using many features of this familiar interface, including headings, bullet-point and numbered lists, images, text effects (bold, italic, underline), and hyperlinks. The Doc is exported to HTML and custom styling is applied to ensure dark theme compatiblity and consistency between articles.

![Article on the Website](https://user-images.githubusercontent.com/90817905/236272353-b529aa8a-0d6a-4293-982c-b1d2d90f18eb.png)
Information from the leadership database is used to generate an author card for each article, providing readers with context about the author. Note that because fetched data is cached in session storage, this feature is an inexpensive addition that improves user experience.

![Article Outline Displaying Article Headings](https://user-images.githubusercontent.com/90817905/236273276-b001470a-e489-446f-9ffe-d00ee1dd2d43.png)
Headings from the document are parsed, and links to each heading in the article are added to a dropdown list. This allows users to easily navigate to the sections of articles that interest them, without requiring any extra setup by the article authors.

## Original Site Comparison
### 'About' Section (Home page)
![About-Old-vs-New-Nov](https://user-images.githubusercontent.com/90817905/200162161-1bbe8842-0e9c-4b21-a13e-2be2ad49ae1c.png)
The redesigned 'About' section, shown on the right side in the new dark theme, has been streamlined and compartmentalized by row (each row containing a heading, paragraph, and image). A new banner component has been added to display the organization's 2022 national award for STEM diversity.

### Events Section
![Events-Old-vs-New-Nov](https://user-images.githubusercontent.com/90817905/200162164-bc874a95-f5d9-47a1-bcee-941d85d61552.png)
The redesigned events section is one of the biggest improvements of the new site, on both the front-end and back-end.

On the front-end, events have been organized into cards, and sorted so that the soonest events are shown at the top. Each card can be clicked/tapped to expand and show more event information, such as location, date & time, or an expanded event description. On tap or hover over the event image, shortcuts are displayed to add the event to Google Calendar, get directions to the event location, or zoom in on the event poster.

On the back-end, events are pulled from a database hosted on Google Sheets. This makes it easy for leadership to update events on the website, and allows us to run scripts to sort events directly on the Google Sheets database (via Google Apps Script) - all without the need for a server-side database setup (which would take longer to establish, and be far more daunting for leadership to utilize.)

### Advisors Section
![Advisors-Old-vs-New-Nov](https://user-images.githubusercontent.com/90817905/200162496-e2a13f68-d96d-496d-9800-3cfd4198a8b3.png)
The new Advisors section features cards for each advisor, with contact information available for those seeking partnerships/collaborations with our organization.

Officers and mentors have been similarly organized into cards on the new Leadership page. The redesigned website combines student officers, faculty advisors, mentors & support officers all into one unified Leadership page. This streamlines information on the website, allowing us to consolidate relevant data and save users' time.
