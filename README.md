# pyro

## Inspiration
We feel really frustrated when we attend social events and have to listen to music that is really poorly suited to the occasion. Some of our most cherished memories like prom and social events in our senior year had poor music selection that really drained the energy of the event. We decided to create a solution to share, and play music as an audience.

## What it does
Pyro is a webapp that allows users to nominate and vote for music they would like to hear played next. The audience can **add heat** (upvote) a song in order to move it up in a priority queue to get played next. In this way the audience gets to jam out the music they really want to hear.

## How we built it
We used mongoDB Stitch to create a database of rooms and the queues in the respective rooms. We also employed node.js and called the Stitch APIs to interact with the database and complete the backend computation for displaying the queue in each room. The songs were searched and played from the youtube API. Our front-end is built with react and data is passed around with a react-router.

## Challenges we ran into
**User Interface**: 
The data that we received from the youtube API was poorly formatted for display on mobile. It took considerable work to minimize the display of verbose youtube titles.

**Data Management**: 
App data was relatively difficult to pass around with so we routed data with react router.

**Audio Playback**: 
Spotify requires users to have a premium account and to repeatedly authenticate our application. We instead decided to use the youtubeAPI to make the app free for all.

The youtube API presented its own problems. The video and audio were delivered in a media player that we could not alter which we only needed the audio and have custom buttons for media control.

## What we learned
We ran into problems where poor planning lead to lost and useless work. After several hours of work, our group had to reset some foundational functions in our app which required us to refactor a large majority of the project. We learned that in the future we should plan structural components of our app first.

## What's next for Pyro
Some functionality we are looking to add:
Automatic track mixing.
Compatibility with other music services.
Algorithm to replace the DJs
Song Filtering
