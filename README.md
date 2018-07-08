## Project Overview

This project is about testing of a web-based application that reads RSS feeds. The project utilized [Jasmine](http://jasmine.github.io/) for testing purposes. The project is part of Udacity Frontend WebDevelopment nanodegree.


## Why this Project?

Testing is an important part of the development process and many organizations practice a standard of development known as "test-driven development". This is when developers write tests first, before they ever start developing their application. All the tests initially fail and then they start writing application code to make these tests pass.

Whether you work in an organization that uses test-driven development or in an organization that uses tests to make sure future feature development doesn't break existing features, it's an important skill to have!


## Dependencies
	* jasmine-2.12
	* fonts.googleapis.com

## Functionality

Run the file index.html and it will load the web page that reads RSS feeds. If all tests are passed jasmine will run without any error. You can scroll at the bottom of the page to see specs and failures. The project comes with a jasmine folder. If you click on jasmine->spec, there is a feedreader.js file that contains all the test cases. The test cases are:
	1. Test to ensure `allFeeds` object has a URL defined and URL is not empty.
	2. Test to ensure `allFeeds` object has a name defined and name is not empty.
	3. Test to ensure the menu element is hidden by default.
	4. Test to ensure the menu changes visibility when the menu icon is clicked.
	5. Test to ensure there is at least a single `.entry` element within the `.feed` container when `loadFeed` function is called.
	6. Test to ensure when a new feed is loaded by the `loadFeed` function, then the content actually changes. I have checked this using the 'header-title' element.

## Credits

The test cases were developed by Marium Talha for the Udacity FrontEnd Web development Course using the starter code provided by Udacity. Special thanks to the sudent leaders and the peers taking the course.