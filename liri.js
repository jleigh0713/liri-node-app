
var dotenv = require("dotenv").config();
var command = process.argv[2];
var movie = process.argv[3];
var keys = require('./keys.js');
var request = require('request');
var twitter = require('twitter');
var fs = require('fs');
var inquirer = require('inquirer');
var client = new twitter(keys.twitter);
//var spotify = require('spotify');


//Defining function to get my tweets from twitter account
function getTweets() 
{
	var myInfo = {screen_name: '4truthonly7Demo', count: 20};

	client.get('statuses/user_timeline', myInfo, function(err, tweets, response) 
	{
		//grab an error if there is one and display it
		if (err) 
		{
       		console.log('Error occurred: ' + err);
        	return;
        //if there is not an error
    	} 
    	else if (!err) 
    	{
    	// Log the tweets to the console along with when they were created
	  		tweets.forEach(function(tweet) 
	  		{
	  				console.log('Tweet: ' + tweet.text + '\nCreated: ' + tweet.created_at);
	  		});
	  	}
	});
}


//defining omdb function for getting movie info
function movieThis(movie)
{
  //creating URL variable which is the omdb api url and the movie that was entered and requesting the plot with rotten tomatoes info
  var URL = 'http://www.omdbapi.com/?t=' + movie + '&plot=short&tomatoes=true';
  //requesting the error, response, and body from the api url
  request(URL, (error, response, body) =>
  {
  	// if there is no error and the response code is 200 meaning everything is OK then provide info
    if(!error && response.statusCode == 200)
    {
      console.log("Title: " + JSON.parse(body).Title);
      console.log("Release Year: " + JSON.parse(body).Year);
      console.log("IMdB Rating: " + JSON.parse(body).imdbRating);
      console.log("Rotten Tomatoes Rating: " + JSON.parse(body).tomatoRating);
      console.log("the country it was produced in was: " + JSON.parse(body).Country);
      console.log("Language: " + JSON.parse(body).Language);
      console.log("Plot: " + JSON.parse(body).Plot);
      console.log("Actors: " + JSON.parse(body).Actors);
    } 
    else
    {
   		//if error then provide error
      console.log('Error' + error);
    }
     //if movie is not entered then default to Mr.Nobody
    if(movie === null)
    {
      console.log("If you haven't watched 'Mr. Nobody,' then you should: http://www.imdb.com/title/tt0485947/" + "\nit's on Netflix!");
    }
  });
}

//taking in command prompts and using switch instead of if else
switch (command)
{
	case 'my-tweets':
	getTweets();
	break;

	case 'move-this':
	movieThis(movie);
	break;
}

//trying to see if it was grabbing my tweets
getTweets();


//checking to see if the file is even working
console.log("Hello");