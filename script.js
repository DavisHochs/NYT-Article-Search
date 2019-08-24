let searchTerm = $('#search-term').val();

let searchYearRangeMin = $('#start-year').val();
let searchYearRangeMax = $('#end-year').val();
let queryURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q='+ searchTerm +'&api-key=C4Wo5ZcFGxa71VDmwqPeHcXTilYRshAB';
//&begin_date=' + searchYearRangeMin +'&end_date=' + searchYearRangeMin + 

$.ajax({
    url: queryURL, 
    method: 'GET'
}).then(function(nyarticles) {
    
    $('#run-search').on('click', function() {
        
    if($('#num-records-select option:selected').text() == 10)
        console.log('working')
    for (let i = 0; i < 10; i++) {
            console.log('working')
            let newDiv = $('<div>');
            let headline = $('<a>');
            let author = $('<h5>');
    
            headline.html(`<h1> ${nyarticles.response.docs[i].headline.main} </h1>`);
            author.text(nyarticles.response.docs[i].byline.original);
            headline.attr('href', nyarticles.response.docs[i].web_url);
    
            newDiv.append(headline).append(author);
            $('#well-section').append(newDiv);
        }
    });

   


   

        
    


});

//clear searches