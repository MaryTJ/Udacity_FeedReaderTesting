/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against web application.
 */

/* Tests are placed within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined(); 
            expect(allFeeds.length).not.toBe(0);
        });


        /* This test loops through each feed in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        
        
        it('url defined and not empty',function() {
            allFeeds.forEach(function(element) {
                expect(element.url).toBeDefined(); //Check to see if url is defined
                expect(element.url.length).not.toBe(0); //Check to see if url exists and is not empty
            });
        });

        /* This test loops through each feed in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

        it('name defined and not empty',function() {
            allFeeds.forEach(function(element) {
                expect(element.name).toBeDefined(); //Check to see if name is defined
                expect(element.name.length).not.toBe(0); //Check to see if the name is not empty
            });
        });

    });

    
    describe('The menu', function() {
    
        // This test ensures that the menu element is hidden by default.   
        it('menu should be hidden',function() {
            //Check if menu is hidden by default using the menu-hidden class
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

         /* These tests ensures  menu changes visibility when the menu icon is clicked. This test checks if the menu displays when
          * clicked and does it hide when clicked again.
          */

        it('menu should change visibility',function() {
            let menuIcon = document.getElementsByClassName('menu-icon-link');
            let hiddenClass = document.getElementsByTagName('body')[0].className;
            
            $(menuIcon).click(); //simulating clicking of the menu.
            hiddenClass = document.getElementsByTagName('body')[0].className;
            expect(hiddenClass).not.toEqual('menu-hidden'); //Check to ensure menu item is visible at the click
            
            $(menuIcon).click(); //simulating clicking of the menu.
            hiddenClass = document.getElementsByTagName('body')[0].className;
            expect(hiddenClass).toEqual('menu-hidden'); //Check to ensure menu item is hidden if clicked again
            
        });

    });

    describe('Initial Entries', function() {
    
        /* Test that ensures when the loadFeed function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * This test requires the use of Jasmine's beforeEach and asynchronous done() function since loadFeed() is asynchronous.
         */

        let feed_entry;

        beforeEach(function(done) {
            loadFeed(0,function(){ 
                done(); //using asynchronous doen() function to ensure loadfeed is complete.
            });
            
        });    
       
        feed_entry=document.querySelector('.feed').getElementsByClassName('entry'); //Querying the 'entry' element in 'feed' container.
        
        it('atleat one entry in feed',function(done) {
            
            expect(feed_entry.length).toBeGreaterThan(0); //Ensuring that a '.entry' element exists after 'loadFeed' function completes.
            done();
        });
        
    });
    
    describe('New Feed Selection',function() {
    
        /* Test that ensures when a new feed is loaded by the loadFeed function, the content actually changes.*/
                
        let first_feed,sec_feed;
        beforeEach(function(done) {
            loadFeed(1,function(){
                first_feed = document.querySelector('.header-title').innerHTML; //Querying title of the first feed.
                loadFeed(2,function(){
                    sec_feed = document.querySelector('.header-title').innerHTML; //Querying title of the second feed.
                    done();
                });
                
            });
            
        });  
        

        it('feeds not equal',function(done) {
            
            expect(first_feed).not.toEqual(sec_feed); //Testing to ensure that new feed is different from the old one by matching titles of both fields.
            done();           
        });

    });

}());
