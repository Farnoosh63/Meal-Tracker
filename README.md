# Meal Tracker ![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)
> **By Farnoosh Johnson**

#### _Epicodus JavaScript class, June 2016_

###### _[Angular JS](https://www.learnhowtoprogram.com/javascript/angular-js/angular-2-basics-independent-project)_

###### **Meal Tracker, code review number 2**

## __Description__

###### This is an application to receive three inputs from user and displaying then in a view. This app let user to edit the information listed by using two-way-data-binding. Moreover, user has the option to select view all foods, healthy food that has less than 500 calories or unhealthy foods that contains 500 and more calories. The color for healthy food is green and color for unhealthy food is red, also there is an image attached to each food category based on healthiness. Information shown by this app are;
1. food name
2. food calories
3. food details
4. total calories
5. show all foods
6. show only healthy foods (below 500 calories)
7. show only unhealthy foods (500 calories and above)

<img id="screen-1" src="https://s26.postimg.org/l930kpnzt/Screen_Shot_2016_07_27_at_6_14_53_PM.png" title="main screen" />

## Known Bugs

Total calories are show only for the data listed on the page, once the user edit a calories input, the total functionality calories wont word correctly.


> You may use this application as an example to show the proficiency of a level 2 student in Epicodus.

## Setup

This website build tools:
* Compiling JavaScript using typescript.
* Managed frontend dependencies with Bower.
* Manage all other dependencies with npm.
* Asset pipeline with a live reloading development server in gulp.

and also include gulp tasks for:
* Concatenation, minification, and running the browserify package on JavaScript.
* Building and cleaning.
* Running the development server with live reloading.
* Automatically including Bower dependencies as vendor.min.js and vendor.css.

###### Thanks

**Accessing to the remote repository on account :** [farnoosh63](https://github.com/Farnoosh63/Meal-Tracker.git)

**Accessing to github pages for this application :**
> there is no github page created for this app



![image](https://developer.chrome.com/static/images/sample-default-icon.png)
```
clone repo
npm install
bower install
install globals if needed (gulp, bower, sass, typescript, typescript packages.)
  $ npm install gulp -g
  $ npm install bower -g
  $ gem install sass
  $ npm install typescript -g
  $ apm install atom-typescript
run $gulp build
$gulp serve
enjoy!
```

Legal
------

_*Copyright (c) 2016 Farnoosh Johnson- Student in Epicodus*_

###### This software is licensed under the MIT license.

###### Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

__The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.__

###### THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
