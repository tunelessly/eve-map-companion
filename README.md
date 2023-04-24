# Index
1. [Overview](#overview)
1. [How to use](#how-to-use)
    1. [As a user](#as-a-user)
        1. [Primer](#primer)
        1. [How to use](#how-to-use-1)
    1. [As a developer](#as-a-developer)

# Overview
`EvE map companion` is an alternate map visualisation for the [EvE Online](https://www.eveonline.com/) video game, that runs solely in the browser.

# How to use

## As a user
[Click here](https://tunelessly.github.io/eve-map-companion/) for the latest version. That's it!

## As a developer

### Primer
This app requires data which you can get from [eve-map-json](https://github.com/mickdekkers/eve-map-json). `eve-map-json` will read data off a database and produce a JSON representation of the geometry of the entire EvE universe. This output is [commited to this repository](./src/model/universe-pretty-1682199656932.json) and sent to the client when they load the app. I've altered `eve-map-json` locally somewhat to omit certain regions or include extra information; I advise readers to peruse that project for extra context.  

One of the goals I set out to achieve was to provide a much more readable representation of the EvE map that would be the sort-of equivalent of a subway map. The solution I used is not optimal - graph untangling is an ongoing research concern - but it produced good enough results. Computing this on the client was unkind to mobile devices so the output of the subway process is also [commited to this repository](./src/model/region-subway-pretty-1682211913146.json) and sent to the client. 

### How to use
The app has two entry points: one for web, one local. The web entry point is what users interact with in the browser, and what's actually distributed on build.

The local entry point is used to create the subway representation from the original data.
