(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),r=a("NmYn"),b=a.n(r),l=a("Wbzz"),c=a("Xrax"),i=a("k4MR"),p=a("TSYQ"),s=a.n(p),d=a("QH2O"),u=a.n(d),h=a("qKvR"),m=function(e){var t,a=e.title,n=e.theme,o=e.tabs,r=void 0===o?[]:o;return Object(h.b)("div",{className:s()(u.a.pageHeader,(t={},t[u.a.withTabs]=r.length,t[u.a.darkMode]="dark"===n,t))},Object(h.b)("div",{className:"bx--grid"},Object(h.b)("div",{className:"bx--row"},Object(h.b)("div",{className:"bx--col-lg-12"},Object(h.b)("h1",{id:"page-title",className:u.a.text},a)))))},g=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,n=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,o=a||n,r=o.baseUrl,b=o.subDirectory,c=r+"/edit/"+o.branch+b+"/src/pages"+t;return r?Object(h.b)("div",{className:"bx--row "+g.row},Object(h.b)("div",{className:"bx--col"},Object(h.b)("a",{className:g.link,href:c},"Edit this page on GitHub"))):null},j=a("FCXl"),w=a("dI71"),f=a("I8xM"),N=function(e){function t(){return e.apply(this,arguments)||this}return Object(w.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,o=n.split("/").filter(Boolean).slice(-1)[0],r=a.map((function(e){var t,a=b()(e,{lower:!0,strict:!0}),r=a===o,c=new RegExp(o+"/?(#.*)?$"),i=n.replace(c,a);return Object(h.b)("li",{key:e,className:s()((t={},t[f.selectedItem]=r,t),f.listItem)},Object(h.b)(l.Link,{className:f.link,to:""+i},e))}));return Object(h.b)("div",{className:f.tabsContainer},Object(h.b)("div",{className:"bx--grid"},Object(h.b)("div",{className:"bx--row"},Object(h.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(h.b)("nav",{"aria-label":t},Object(h.b)("ul",{className:f.list},r))))))},t}(o.a.Component),x=a("MjG9"),k=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,o=e.Title,r=t.frontmatter,p=void 0===r?{}:r,s=t.relativePagePath,d=t.titleType,u=p.tabs,g=p.title,w=p.theme,f=p.description,v=p.keywords,C=Object(k.a)().interiorTheme,A=Object(l.useStaticQuery)("2456312558").site.pathPrefix,T=A?n.pathname.replace(A,""):n.pathname,P=u?T.split("/").filter(Boolean).slice(-1)[0]||b()(u[0],{lower:!0}):"",y=w||C;return Object(h.b)(i.a,{tabs:u,homepage:!1,theme:y,pageTitle:g,pageDescription:f,pageKeywords:v,titleType:d},Object(h.b)(m,{title:o?Object(h.b)(o,null):g,label:"label",tabs:u,theme:y}),u&&Object(h.b)(N,{title:g,slug:T,tabs:u,currentTab:P}),Object(h.b)(x.a,{padded:!0},a,Object(h.b)(O,{relativePagePath:s})),Object(h.b)(j.a,{pageContext:t,location:n,slug:T,tabs:u,currentTab:P}),Object(h.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},"j/Cm":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a("wx14"),o=a("zLVn"),r=(a("q1tI"),a("7ljp")),b=a("013z"),l=(a("qKvR"),{}),c={_frontmatter:l},i=b.a;function p(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)(i,Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",null,"OpenShift Container Platform (OCP) 4 upgrade paths"),Object(r.b)("p",null,"In Red Hat Knowledgebase, there is an article which talk about the OCP upgrade paths.",Object(r.b)("br",{parentName:"p"}),"\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://access.redhat.com/solutions/4583231"}),"OpenShift Container Platform (OCP) 4 upgrade paths: 4583231")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Issue:",Object(r.b)("br",{parentName:"p"}),"\n","What are the upgrade paths in OpenShift 4?",Object(r.b)("br",{parentName:"p"}),"\n","How to upgrade to the next minor version of OpenShift 4?")),Object(r.b)("p",null,"In this document, we will demonstrate how you can find out the upgrade paths based on the knowledgebase information."),Object(r.b)("h2",null,"Preparation"),Object(r.b)("p",null,"Before we dive into deeper, we will talk about preparation you need to do.",Object(r.b)("br",{parentName:"p"}),"\n","To follow the instructions in the knowledgebase, there are several tools we need to install on our environment.",Object(r.b)("br",{parentName:"p"}),"\n","For this demonstration, we use macOS Catalina 10.15.4 on our laptop.",Object(r.b)("br",{parentName:"p"}),"\n","Here are the commands we needed to install on our macOS."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"jq"),Object(r.b)("li",{parentName:"ul"},"dot"),Object(r.b)("li",{parentName:"ul"},"graph.sh")),Object(r.b)("p",null,"We also needed to install ",Object(r.b)("inlineCode",{parentName:"p"},"brew")," command to install ",Object(r.b)("inlineCode",{parentName:"p"},"jq")," and ",Object(r.b)("inlineCode",{parentName:"p"},"dot")," commands"),Object(r.b)("p",null,"Here is the commands we executed to install ",Object(r.b)("inlineCode",{parentName:"p"},"brew")," command."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"\n')),Object(r.b)("p",null,"Once we successfully installed the brew command (a.k.a. Homebrew), then we installed the ",Object(r.b)("inlineCode",{parentName:"p"},"jq")," command."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"brew install jq\n")),Object(r.b)("p",null,"Then, we installed ",Object(r.b)("inlineCode",{parentName:"p"},"dot")," command.  Note that the graphviz includes the ",Object(r.b)("inlineCode",{parentName:"p"},"dot")," command."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"brew install graphviz\n")),Object(r.b)("p",null,"One more thing we needed to installed is that the ",Object(r.b)("inlineCode",{parentName:"p"},"graph.sh"),"."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"First, download the available graph.sh file: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/openshift/cincinnati/blob/master/hack/graph.sh"}),"https://github.com/openshift/cincinnati/blob/master/hack/graph.sh"))),Object(r.b)("p",null,"Now, we got everything we need to follow the instructions in the knowledgebase."),Object(r.b)("h2",null,"Listing the available upgrade paths"),Object(r.b)("p",null,"In the knowledgebase, there are two ways to find out the upgrade paths introduced.  "),Object(r.b)("h2",null,"Listing upgrade paths with a text"),Object(r.b)("p",null,"The upgrade path from a current version to the next available version can be found by using curl command."),Object(r.b)("p",null,"We will export the CURRENT_VERSION and CHANNEL_NAME variables before we execute the curl command as follow."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"kenueno@kenuenoMacBook-Pro OCP4_upgrade_paths % export CURRENT_VERSION=4.3.12\nkenueno@kenuenoMacBook-Pro OCP4_upgrade_paths % export CHANNEL_NAME=stable-4.4\n")),Object(r.b)("p",null,"I the above example, we specified “4.3.12” as our current OCP cluster version.",Object(r.b)("br",{parentName:"p"}),"\n","Then, we specified “stable-4.4” channel for the target version.  "),Object(r.b)("p",null,"Now, we are ready to run the curl command as follow.  "),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),'kenueno@kenuenoMacBook-Pro OCP4_upgrade_paths % curl -sH \'Accept:application/json\' "https://api.openshift.com/api/upgrades_info/v1/graph?channel=${CHANNEL_NAME}" | jq -r --arg CURRENT_VERSION "${CURRENT_VERSION}" \'. as $graph | $graph.nodes | map(.version==\'\\"$CURRENT_VERSION\\"\') | index(true) as $orig | $graph.edges | map(select(.[0] == $orig)[1]) | map($graph.nodes[.].version) | sort_by(.)\'\n[\n  "4.3.13",\n  "4.3.18",\n  "4.3.19",\n  "4.3.21"\n]\nkenueno@kenuenoMacBook-Pro OCP4_upgrade_paths %\n')),Object(r.b)("p",null,"In our case, the upgrade paths from “4.3.12” to “4.4” are “4.3.13”, “4.3.18”, “4.3.19” and “4.3.21” as shown above."),Object(r.b)("p",null,"Note that we used the ",Object(r.b)("inlineCode",{parentName:"p"},"jq")," command since it can easily extract values from JSON, aggregate them, and display them after formatting.  "),Object(r.b)("h2",null,"Listing upgrade paths with a dot graph"),Object(r.b)("p",null,"There is a way to show the upgrade paths with a ",Object(r.b)("inlineCode",{parentName:"p"},"dot")," grap.",Object(r.b)("br",{parentName:"p"}),"\n","A ",Object(r.b)("inlineCode",{parentName:"p"},"dot")," graph can be generated which may make it easier to understand the available upgrade paths.  "),Object(r.b)("p",null,"We also use the curl command and it will pipe the output to the ",Object(r.b)("inlineCode",{parentName:"p"},"graph.sh")," script, then pipe to the ",Object(r.b)("inlineCode",{parentName:"p"},"dot")," command to generate a graph as follow."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"kenueno@kenuenoMacBook-Pro OCP4_upgrade_paths % curl -sH 'Accept:application/json' 'https://api.openshift.com/api/upgrades_info/v1/graph?channel=fast-4.4&arch=amd64' | ./graph.sh | dot -Tsvg > graph.svg\nkenueno@kenuenoMacBook-Pro OCP4_upgrade_paths % \n")),Object(r.b)("p",null,"Once the commands generated the graph, in our example above, it is called ",Object(r.b)("strong",{parentName:"p"},"graph.svg"),", we can take a look at the graph via a Web browser such as Safari, Chrome and Firefox as follow.  "),Object(r.b)("p",null,Object(r.b)("span",Object(n.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"94.09722222222221%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAAACXBIWXMAABYlAAAWJQFJUiTwAAABf0lEQVQ4y52TW4+CQAyF+f9/jQefScREQARB5epdu/maLZk1m3XYJqVMGc6cnnaCYRgFr6pamqaV+/2uMc9zSZJENpuNepqm355pJJdleKZODozg+XyK66/XSx6PhxRFKbvdTq7Xq67NOZDIXt5dJx/IL1ZVlSwWCwnDULqukzkWwAjHiOM4KkjbtnI4HGS/3ytL+/7JAxdsGAa53W5SlqXEcawa9n2vh5C3fR8ZYvwEE+J2u5UoilTs0+mk+hC9AHlwOkwota5rLfN8PuuGoii0OXz3BqRUmAFEM5bLpeboJDoCiKZegJTDD7CDKfO1Wq0mhlbB5XLxAwRsvV5PDACCna1NV7OPgGjDvNkQs26aRptg7gs2lQwb0+t4POpgo6fbCHe8/gSEAczQiHJpCPcScA5zQbwYAobo6IQDxuhwAKzfGXqVTBOYN8AAJWdd9gX6cVMYGTTjZvBuMziX3TTYdrVoBt1+n7lZgLYZLbnDsHTLnV2yywBQmP63XOwLcYfOeGYly04AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"ocp44_upgrade_path",title:"ocp44_upgrade_path",src:"/static/9cdcbb49b298a3e89210f88ba085cf5d/3cbba/ocp44_upgrade_path.png",srcSet:["/static/9cdcbb49b298a3e89210f88ba085cf5d/7fc1e/ocp44_upgrade_path.png 288w","/static/9cdcbb49b298a3e89210f88ba085cf5d/a5df1/ocp44_upgrade_path.png 576w","/static/9cdcbb49b298a3e89210f88ba085cf5d/3cbba/ocp44_upgrade_path.png 1152w","/static/9cdcbb49b298a3e89210f88ba085cf5d/5f2e6/ocp44_upgrade_path.png 1478w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")," "),Object(r.b)("p",null,"The above output is for the stable-4.4 channel as of 2020-05-27.",Object(r.b)("br",{parentName:"p"}),"\n","Note that this output will most likely change at later dates, and is shown for demonstration purposes only."))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-day-2-upgrade-upgrade-paths-index-mdx-568aeaa4442a39d13baa.js.map