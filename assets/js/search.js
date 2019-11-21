jQuery(function() {
    // Get the generated search_data.json file so lunr.js can search it locally.
    window.data = fetch('search_data.json')
                    .then(res => res.json())
                    //$.getJSON('/search_data.json');
    // Wait for the data to load and add it to lunr
    window.data.then(function(loaded_data){
      window.idx = lunr(function () {
        this.field('title');
        this.field('authorsStr');
        this.field('tags');
        this.field('url');
        this.field('date');
        $.each(loaded_data, (index, value) => {
          // Initialize lunr with the fields to be searched, plus the boost.
          // Transfer authors object into authors string
          value.authorsStr = value.authors.map(author => `${author.title} ${author.excer}`).reduce((last, next) => `${last} ${next}`);
          this.add(
            $.extend({ "id": index }, value)
          );
        });
      });
    });
    // Event when the form is submitted
    $("#site_search").submit(function(event){
      if(!window.idx){
        return;
      }
      event.preventDefault();
      var query = $("#search_box").val(); // Get the value for the text field
      var results = window.idx.search(query); // Get lunr to perform a search
      display_search_results(results); // Hand the results off to be displayed
    });
    function display_search_results(results) {
      var $search_results = $("#search_results");
      // Wait for data to load
      window.data.then(function(loaded_data) {
        // Are there any results?
        if (results.length) {
          $search_results.empty(); // Clear any old results
          // Iterate over the results
          results.forEach(function(result) {
            var item = loaded_data[result.ref];
            // Build a snippet of HTML for this result
            var appendString = '<li><a href="' + item.url + '">' + item.title + '</a></li>';
            // Add the snippet to the collection of results.
            $search_results.append(appendString);
          });
        } else {
          // If there are no results, let the user know.
          $search_results.html('<li>No results found.<br/>Please check spelling, spacing, yada...</li>');
        }
      });
    }
  });