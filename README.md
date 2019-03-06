# Create Reusable Custom Elements with Angular Elements

Presentation given to...

- 2019-03-06 [AngularMN March 2019 Meetup](https://www.meetup.com/AngularMN/events/259098278/)
- 2019-02-22 FED@IBM Rochester

## Overview
What if you could take the power of Angular components and export them to generic custom elements?  Good news!  Now you can with Angular Elements!  In this session you will learn what custom elements are, how to install and configure Angular Elements, and see code examples of exporting Angular components into React and Vue.

Creating custom elements from your Angular components may have some nice benefits depending on your project. Some example use cases include:
* Using existing Angular components within another framework like React or Vue.
* Migrating from AngularJS to Angular can be done in pieces with Angular Elements.
* Embed custom elements on server side templating technologies like Jade or JSP.

Although Angular Elements is relatively new and still under development, what is available now is a very promising start to a more generic and open web.


## Setup
1. Clone the repo
2. `npm run setup` to install all dependencies
3. See `Materials` below to understand each branch


## Materials / Branches
`master` branch only contains setup files.  See branch descriptions below for specific steps.

| Branch | Content | Link |
|--------|---------|------|
| `master` | Setup files only | [Link](https://github.com/dstanich/angular-elements-presentation/tree/master) |
| `01-basic-apps` | Basic custom element; grocery app implemented in Angular, React, Vue | [Link](https://github.com/dstanich/angular-elements-presentation/tree/01-basic-apps) |
| `02-setup-elements` | Elements is installed and configured | [Link](https://github.com/dstanich/angular-elements-presentation/tree/02-setup-elements) |
| `03-convert-input-to-string` | Converts an `@Input()` from object to string type | [Link](https://github.com/dstanich/angular-elements-presentation/tree/03-convert-input-to-string) |
| `04-use-elements-in-frameworks` | Uses elements output within Vue and React | [Link](https://github.com/dstanich/angular-elements-presentation/tree/04-use-elements-in-frameworks) |
| `gh-pages` | Presentation | [Link](https://dstanich.github.io/angular-elements-presentation/) |
