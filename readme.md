# Sherlock Doge

#### A simple aggregate Dogecoin pool monitor and tracker

[![Build Status](https://travis-ci.org/brycedorn/sherlock-doge.svg?branch=master)](https://travis-ci.org/brycedorn/sherlock-doge)
[![Analytics](https://ga-beacon.appspot.com/UA-40008117-10/sherlock-doge/home)](https://github.com/igrigorik/ga-beacon)


## Installation

    bundle install

## Running app

Start the app by running:

    rake s

This rake command runs `bundle exec shotgun config.ru` behind the scenes for you and starts the app on port 6969 and will now be able to view the application in your web browser at this URL [http://localhost:6969](http://localhost:6969).

## Rake Tasks

    rake -T

    rake css:clear         # Clear the CSS
    rake css:compile       # Compile CSS
    rake css:compile:prod  # Compile CSS for production
    rake s                 # Run the app

## License

Copyright &copy; Bryce Dorn

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
