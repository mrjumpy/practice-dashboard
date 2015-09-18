
## Assignment Detail
1) You’ll create a dashboard app with total 5 page. Index page is a summary of sales, with pie chart. Other 4 pages are grid datas by 4 section. 
You’ll made out column names and fake data. Gird data pages should be paginateable.
2) If you are good at design, do the best you can. If not, just use UI framework like bootstrap or foundation.
3) Show off your skills in your code, talk about your decisions in README, e.g. why use X libraries, tools, etc..., why NOT use Y libraries.

---
###  why reactJS
This time we have to build a dashboard. And We want to build it in SPA way.

ReactJS provide a lof guideline and resouces to do SPA.

And, you can use concept of "Components" to scale your webApp. 

ReactJS focus on MVC's V. So you can learn it fast. 

If you want to do SPA, you can just use reactJS.

If you want to scale to SPA, you can use FLUX. 


Why not AngularJS?

AngularJS provide whole MVC concept to use, it becomes complicated and hard to learn.

There are a lot of "why you should not use AngularJS" blog to read XD, but lesser in reactJS.



There's also another way to build SPA, if we don't want to use any big framework.. check:

https://www.manning.com/books/single-page-web-applications

But, I think ReactJS is better now, and easily to maintain.


### Chart - why react-chartjs

There is a libs there, we don't have to integrate another chart plugin to it.

Since there's only a Piechart to do in assignment.
If we had a lot of chart to do, I'll choose d3 or hightchart.

### Date - why fecha

Lightweight date formatting and parsing (~1KB).


### Router - why react-router

Since we don't use redux here.

We need a router here, and it just fit. 



### Fake Data - why Faker

There is a fake data api, http://reqr.es/. But I'm using cloud9 IDE, don't support http ajax.

These fake data just fit my requirements, and it's popular.




### Table - why griddle-react

Because the top reactjs-table is BSD license. And this time we only had two things to follow:

* pager
* RWD



All of them are popular and maintainable now, we can developed any feature by ourself.
That's how I choose libs.



---
 
