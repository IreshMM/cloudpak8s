(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("NmYn"),i=a.n(o),l=a("Wbzz"),c=a("Xrax"),b=a("k4MR"),s=a("TSYQ"),p=a.n(s),u=a("QH2O"),m=a.n(u),h=a("qKvR"),d=function(e){var t,a=e.title,n=e.theme,r=e.tabs,o=void 0===r?[]:r;return Object(h.b)("div",{className:p()(m.a.pageHeader,(t={},t[m.a.withTabs]=o.length,t[m.a.darkMode]="dark"===n,t))},Object(h.b)("div",{className:"bx--grid"},Object(h.b)("div",{className:"bx--row"},Object(h.b)("div",{className:"bx--col-lg-12"},Object(h.b)("h1",{id:"page-title",className:m.a.text},a)))))},y=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,n=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,o=r.baseUrl,i=r.subDirectory,c=o+"/edit/"+r.branch+i+"/src/pages"+t;return o?Object(h.b)("div",{className:"bx--row "+y.row},Object(h.b)("div",{className:"bx--col"},Object(h.b)("a",{className:y.link,href:c},"Edit this page on GitHub"))):null},g=a("FCXl"),O=a("dI71"),f=a("I8xM"),N=function(e){function t(){return e.apply(this,arguments)||this}return Object(O.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],o=a.map((function(e){var t,a=i()(e,{lower:!0,strict:!0}),o=a===r,c=new RegExp(r+"/?(#.*)?$"),b=n.replace(c,a);return Object(h.b)("li",{key:e,className:p()((t={},t[f.selectedItem]=o,t),f.listItem)},Object(h.b)(l.Link,{className:f.link,to:""+b},e))}));return Object(h.b)("div",{className:f.tabsContainer},Object(h.b)("div",{className:"bx--grid"},Object(h.b)("div",{className:"bx--row"},Object(h.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(h.b)("nav",{"aria-label":t},Object(h.b)("ul",{className:f.list},o))))))},t}(r.a.Component),w=a("MjG9"),v=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,o=t.frontmatter,s=void 0===o?{}:o,p=t.relativePagePath,u=t.titleType,m=s.tabs,y=s.title,O=s.theme,f=s.description,k=s.keywords,x=Object(v.a)().interiorTheme,T=Object(l.useStaticQuery)("2456312558").site.pathPrefix,q=T?n.pathname.replace(T,""):n.pathname,I=m?q.split("/").filter(Boolean).slice(-1)[0]||i()(m[0],{lower:!0}):"",A=O||x;return Object(h.b)(b.a,{tabs:m,homepage:!1,theme:A,pageTitle:y,pageDescription:f,pageKeywords:k,titleType:u},Object(h.b)(d,{title:r?Object(h.b)(r,null):y,label:"label",tabs:m,theme:A}),m&&Object(h.b)(N,{title:y,slug:q,tabs:m,currentTab:I}),Object(h.b)(w.a,{padded:!0},a,Object(h.b)(j,{relativePagePath:p})),Object(h.b)(g.a,{pageContext:t,location:n,slug:q,tabs:m,currentTab:I}),Object(h.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},Kr8m:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return m}));var n=a("wx14"),r=a("zLVn"),o=(a("q1tI"),a("7ljp")),i=a("013z"),l=(a("qKvR"),{}),c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",t)}},b=c("PageDescription"),s=c("InlineNotification"),p={_frontmatter:l},u=i.a;function m(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)(u,Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)(b,{mdxType:"PageDescription"},Object(o.b)("p",null,"Anyone can contribute to the IBM Cloud Paks Playbook, whether you are\nan IBM’er or not.\nWe welcome your collaboration and contributions happily, as our\nreference applications are meant to reflect your real world scenarios.\nThere are multiple ways to contribute: report bugs and improvement\nsuggestions, improve documentation, and contribute code.")),Object(o.b)("h2",null,"Bug reports, documentation changes, and feature requests"),Object(o.b)("p",null,"If you would like to contribute your experience back to the project\nin the form of encountered bug reports, necessary documentation\nchanges, or new feature requests, this can be done through the use of\nthe repository’s\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/cloudpak8s/issues"}),Object(o.b)("strong",{parentName:"a"},"Issues")),"\nlist.  "),Object(o.b)("p",null,"Before opening a new issue, please reference the existing list to\nmake sure a similar or duplicate item does not already exist.",Object(o.b)("br",{parentName:"p"}),"\n","Otherwise, please be as explicit as possible when creating the new\nitem and be sure to include the following:"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Bug Reports")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Specific Project Version"),Object(o.b)("li",{parentName:"ul"},"Deployment environment"),Object(o.b)("li",{parentName:"ul"},"A minimal, but complete, setup of steps to recreate the problem")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Documentation Changes")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"URL to existing incorrect or incomplete documentation\n(either in the project’s GitHub repo or external product\ndocumentation)"),Object(o.b)("li",{parentName:"ul"},"Updates required to correct current inconsistency"),Object(o.b)("li",{parentName:"ul"},"If possible, a link to a project fork, sample, or workflow to\nexpose the gap in documentation.")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Feature Requests")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Complete description of project feature request, including but\nnot limited to, components of the existing project that are\nimpacted, as well as additional components that may need to be\ncreated."),Object(o.b)("li",{parentName:"ul"},"A minimal, but complete, setup of steps to recreate environment\nnecessary to identify the new feature’s current gap.")),Object(o.b)("p",null,"The more explicit and thorough you are in opening GitHub Issues,\nthe more efficient your interaction with the maintainers will be.",Object(o.b)("br",{parentName:"p"}),"\n","When creating the GitHub Issue for your bug report, documentation\nchange, or feature request, be sure to add as many relevant labels as\nnecessary (that are defined for that specific project).",Object(o.b)("br",{parentName:"p"}),"\n","These will vary by project, but will be helpful to the maintainers\nin quickly triaging your new GitHub issues."),Object(o.b)("h2",null,"Content contributions"),Object(o.b)("p",null,"We really value contributions. To maximize the impact of your\ncontent contributions, we request you follow the procedure and\nguidelines below.  If you are new to open source contribution and\nwould like some more pointers or guidance, you may want to check out\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://yourfirstpr.github.io/"}),Object(o.b)("strong",{parentName:"a"},"Your First PR"))," and\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.firsttimersonly.com/"}),Object(o.b)("strong",{parentName:"a"},"First Timers Only")),".",Object(o.b)("br",{parentName:"p"}),"\n","These are a few projects that help on-board new contributors to the\noverall open source process."),Object(o.b)("h3",null,"Forks and Pull Requests best practices"),Object(o.b)("p",null,"Please ensure you follow these best practices after you read the\ninstructions for contributing. Details are explained in the detailed\ncontribution process description below."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"One change / documentation update per pull request"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Always pull the latest changes from upstream and rebase before\ncreating any pull request."),Object(o.b)("li",{parentName:"ul"},"New pull requests should be created against a branch of your forked\nrepository."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"All new contributions should first be tested locally before PR\nsubmission."),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"There is a way to run a development instance of the Cloud Pak\nPlaybook site on your local machine. Follow the instructions in\nthe ",Object(o.b)("a",{href:"/contribute/#testing-locally",title:"Testing locally"},Object(o.b)("span",null,"Testing locally")),"\nsection below to set that up. It is very easy."),Object(o.b)("li",{parentName:"ul"},"Make sure you test all your changes locally before submitting a\npull request.")))),Object(o.b)("ul",null),Object(o.b)("h2",null,"The Contribution process step by step - Github and git flow"),Object(o.b)("p",null,"The internet is littered with guides and information on how to use\nand understand git.\nHowever, here’s a compact guide that follows the suggested workflow.\nIf you are new to github, or just rusty with the details, it is worth\nsome minutes of your time to study this diagram, relating each step\nnumber to its description in the text below. This will help you to understand all\nthe steps in the process, and understand where you are in it as\nyou create your contribution."),Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"791px"}},"\n      ",Object(o.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"75.34722222222221%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC80lEQVQ4y0WSWZfaRhCF+cXOH/JzTl7zFvskzuwLYzxjj5kBBgktgKRGIBZtrYUv1cKOH+6p7lu3rqqq1Xv/+x+4/hDYwFFJjNE7h+D+nOD2jEKNhVtBE0Abdecm80m973IWffsLbbOh9/R0RRo+QWGh10Oq5IVKfWP95R/Wg7/J5k/Uu4nwY3Qyotm9oiWfzfrkmxHlZkiTDDk2IXXp0aN02Aw/EH//iNf/k/34E+XsklxQeZckziPr6QMb+5HV+BZtn5NNz9lPzhgNb4km/6Knn2j1kvLwTK/WATq1qDKbJndAezSFQ5vPOJZud/+JRjgqv4vNj3xb/NDIysq9GB7btVy2HepmRakVTRuT57Iz1hxFaGAKmvaU1zrieIw73mjrxuw+EcNv9NoqklZNhzPq3JVuHenQpdha8mVfuvAEfnc2E5i8PtggPLXw1ZzWaMRYdyPvp2xePnY70e416vkvcvsCLTtsvBtY9mnnd7S+7M+57s7auZI3vMSZ9GW3F9TOBWXqkW5Nh/s3WPSlcCDCW9I3eRDrmkzi7vWMrSCfXlF79xT2NZV7J/mrjleTO5LpDaWYFnuX/fpJDGVM1EB+r0eOgiYc0EQDWonF/J6De4NePnT5OvjcaSq5V9I58Req6CuNklozujxYr65yylz2WCgKidlhSZ6F5BIr4Sq9Qks0+SwNOm0u0eTzNKQQreHzNMJ49VRUMJ3EWG+KKCjxnDW+uyXwM8JFTrgsOgSLTHIblvMUdxaz8A64olv4hy5vatcrLYahEecdMbPWOHbCUoodK2bpp6zCGhXoDsZMic7wMyvhceQwseZyz7r6VVTSi5WWQyXuDZNRwPDZx3W2UqCYzVY4c4Xjn6Jtr5jaG17fPDE5EEuNqf0fSgzDpXw1PJmaTn13Lx3KqIuC+XyPu4iZuaEYroQ/YDkJY8snWpYoqVHhL3Qdvnv3G58fXtglR8w+zR5iZdovuhirSsZJMZOcpsmJo9N4RvMTZnXbpOQ/yb5fTpwJcBYAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Github flow",title:"Github flow",src:"/static/bbe8a019b09273bb0f5ea7e3892bf017/74a17/github_flow.png",srcSet:["/static/bbe8a019b09273bb0f5ea7e3892bf017/7fc1e/github_flow.png 288w","/static/bbe8a019b09273bb0f5ea7e3892bf017/a5df1/github_flow.png 576w","/static/bbe8a019b09273bb0f5ea7e3892bf017/74a17/github_flow.png 791w"],sizes:"(max-width: 791px) 100vw, 791px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(o.b)(s,{mdxType:"InlineNotification"},"The link in step 3 provides you with more detail and context for steps 1 - 3."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Create your own fork of the repo in github. This can be done in\nthe GUI at\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/cloudpak8s"}),"https://github.com/ibm-cloud-architecture/cloudpak8s"),"\nby clicking the ",Object(o.b)("strong",{parentName:"p"},"Fork")," icon in the upper right corner. A fork or\ncopy of the repo will be created under your own github id. The URL\nwill be:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"https://github.com/<Your github ID>/cloudpak8s\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Go to the URL of your forked repo, and use the ",Object(o.b)("strong",{parentName:"p"},"Clone or download"),"\nbutton to copy the repo information so you can paste it\ninto your clone command in the command line to clone it to your\nlocal computer.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Add a connection from the master branch of your local cloned\nrepository to the master branch of the upstream repository.\nThe details for this step are in\n",Object(o.b)("strong",{parentName:"p"},"Step 3  Configure Git to sync your fork …")," of the link below.\nDo not miss this important step."),Object(o.b)("p",{parentName:"li"},"   ",Object(o.b)("strong",{parentName:"p"},"Note:")," More detail for steps 1-3 here:\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://help.github.com/articles/fork-a-repo/"}),"forking a repo"),"\n")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"In a terminal window command line, working from the\ndirectory of your local\ncloned repository, create a new development branch off the targeted\nupstream branch, which is ",Object(o.b)("inlineCode",{parentName:"p"},"master"),"."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"git checkout -b <my-feature-branch> master\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Do your work:"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Write your contributions or make your changes"),Object(o.b)("li",{parentName:"ul"},"Pass your tests locally (see the description of setting up your\nlocal test instance below)"),Object(o.b)("li",{parentName:"ul"},"Commit your intermediate changes as you go and as appropriate"),Object(o.b)("li",{parentName:"ul"},"Repeat until satisfied"),Object(o.b)("li",{parentName:"ul"},"See the ",Object(o.b)("a",{href:"/contribute/#testing-locally",title:"Testing locally"},Object(o.b)("span",null,"Testing locally"))," section below for more information regarding running Gatsby locally"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"When you are finished with all your commits and ready to push\nyour changes, fetch the latest upstream changes\n(in case other changes had been\ndelivered upstream by others while you were working on your\ncontribution)."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"git fetch upstream\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Rebase your local cloned repo to the latest upstream changes,\nresolving any conflicts.\nThis will ‘replay’ your local commits, one by one, after the changes\ndelivered upstream while you were locally developing, letting you\nmanually resolve any conflicts."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"git branch --set-upstream-to=upstream/master\ngit rebase\n")),Object(o.b)("p",{parentName:"li"},"   Instructions on how to manually resolve a conflict and commit the\nnew change or skip your local replayed commit will be presented\non screen by the git CLI.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Push the changes you added and commited to your forked repository\n(see the diagram above to understand this step)."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"git push origin <my-feature-branch>\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Create a ",Object(o.b)("strong",{parentName:"p"},"pull request")," against the same targeted upstream branch.\nThe easiest way to do this is through the GUI. If you go to the\nupstream repo URL\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/cloudpak8s"}),"https://github.com/ibm-cloud-architecture/cloudpak8s"),",\nafter you have done the ",Object(o.b)("inlineCode",{parentName:"p"},"push")," above, you should see a notice of your\npushed changes and a button to create a pull request. "),Object(o.b)("p",{parentName:"li"},"   ",Object(o.b)("strong",{parentName:"p"},"Click that button"),",\nfill in a general description of the changes in your pull request, and\npreferably choose one or more reviewers from the list on the right\nside. Your pull request needs at least one reviewer’s approval before\nit can be merged. More details on pull requests are in the link below."),Object(o.b)("p",{parentName:"li"},"   ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://help.github.com/articles/creating-a-pull-request/"}),"Creating a pull request")),Object(o.b)("p",{parentName:"li"},"   Once the pull request has been reviewed, accepted and merged into\nthe main github repository, you should synchronise your remote\nand local forked github repository master branch with the\nupstream master branch. To do so, follow the steps below.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"In your local cloned repo command line, change your active branch\nto ",Object(o.b)("strong",{parentName:"p"},"master"),". Then pull to your local cloned repo the latest\nchanges from the upstream master branch (that is, the pull request)."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"git checkout master\ngit pull upstream master\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Now push those latest upstream changes that you just pulled\nlocally to your forked repository."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"git push origin master\n")),Object(o.b)("p",{parentName:"li"},"   Now your forked repository and your local cloned repository are\nall caught up and synced with the main upstream repository."))),Object(o.b)("ul",null),Object(o.b)("h3",null,"What Happens to your Pull Request?"),Object(o.b)("p",null,"This section is just for your information. You do not have to take\nany further steps unless you are requested to by the reviewer(s)."),Object(o.b)("p",null,"All pull requests are automatically built and unit tested by\na Travis-CI pipeline. The pipeline will highlight to the\nreviewer if there are any missing or mis-matched elements of your\nproposed change that could create problems for the web site. If any\nsuch problems are indicated, the reviewer or maintainer will\ncontact you to request the necessary changes to resolve the issue."),Object(o.b)("p",null,"The repository maintainer will inspect the content your commit.\nif approved, they will merge your changes into the upstream master branch."),Object(o.b)("p",null,"Should a maintainer or reviewer ask for changes to be made to the\npull request, these can be made locally and pushed to your forked\nrepository and branch. This uses the same git add, commit, and push\nsteps on the same development branch that you used when you first\ncreated the contribution."),Object(o.b)("p",null,"After the maintainer approves and merges your pull request,\nyour changes will appear on\nthe web site shortly thereafter."),Object(o.b)("h2",null,"Testing locally"),Object(o.b)("p",null,"Once you have forked the repository and have cloned it to your\nlocal system, you can begin contributing. The best way to contribute\nis to run the Gatsby project (the web site) locally in ",Object(o.b)("inlineCode",{parentName:"p"},"dev")," mode.\nThis way, as you are making changes in your development branch,\nand saving the files in your cloned repo, you can make\nsure your changes render correctly before creating a pull\nrequest. "),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Once you have cloned your fork of the repository to your local\nsystem, navigate to the directory where your project resides."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"cd <your repo directory>\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Run the following command to initialize npm in your local directory.\nThis command installs all the dependencies listed in the ",Object(o.b)("inlineCode",{parentName:"p"},"package.json"),"\nfile."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"npm install\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Start Gatsby with the Carbon theme on your local system."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"npm run dev\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Open your browser to ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://localhost:8000/"}),"localhost:8000")," to\nsee the pages you are working on and verify that your changes\nare rendered correctly.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"If further changes are required, make your modifications.\nGatsby will render the changes immediately."))),Object(o.b)("ul",null),Object(o.b)("p",null,"For non-Mac users running Linux in a VM:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Gatsby requires Node.js version 10 or above. Run the following\ncommand to check your version.",Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"node -v\n"))),Object(o.b)("li",{parentName:"ol"},"Modify the ",Object(o.b)("inlineCode",{parentName:"li"},"package.json")," file to update the server with your\nspecific IP address and port number inside “scripts-dev”.",Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),'"dev": "gatsby develop -H <your local IP address> -p 8000"\n'))),Object(o.b)("li",{parentName:"ol"},"For additional information, check out\n",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.gatsbyjs.org/docs/gatsby-cli/"}),"Gatsby CLI"),".")))}m.isMDXComponent=!0},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-contribute-index-mdx-b4da89d58cf0e2c59271.js.map