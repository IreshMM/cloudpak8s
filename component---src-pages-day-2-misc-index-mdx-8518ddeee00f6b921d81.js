(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("NmYn"),l=a.n(o),i=a("Wbzz"),s=a("Xrax"),c=a("k4MR"),b=a("TSYQ"),u=a.n(b),p=a("QH2O"),d=a.n(p),m=a("qKvR"),h=function(e){var t,a=e.title,n=e.theme,r=e.tabs,o=void 0===r?[]:r;return Object(m.b)("div",{className:u()(d.a.pageHeader,(t={},t[d.a.withTabs]=o.length,t[d.a.darkMode]="dark"===n,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:d.a.text},a)))))},O=a("BAC9"),f=function(e){var t=e.relativePagePath,a=e.repository,n=Object(i.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,o=r.baseUrl,l=r.subDirectory,s=o+"/edit/"+r.branch+l+"/src/pages"+t;return o?Object(m.b)("div",{className:"bx--row "+O.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:O.link,href:s},"Edit this page on GitHub"))):null},j=a("FCXl"),g=a("dI71"),x=a("I8xM"),v=function(e){function t(){return e.apply(this,arguments)||this}return Object(g.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],o=a.map((function(e){var t,a=l()(e,{lower:!0,strict:!0}),o=a===r,s=new RegExp(r+"/?(#.*)?$"),c=n.replace(s,a);return Object(m.b)("li",{key:e,className:u()((t={},t[x.selectedItem]=o,t),x.listItem)},Object(m.b)(i.Link,{className:x.link,to:""+c},e))}));return Object(m.b)("div",{className:x.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",{"aria-label":t},Object(m.b)("ul",{className:x.list},o))))))},t}(r.a.Component),w=a("MjG9"),y=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,o=t.frontmatter,b=void 0===o?{}:o,u=t.relativePagePath,p=t.titleType,d=b.tabs,O=b.title,g=b.theme,x=b.description,N=b.keywords,T=Object(y.a)().interiorTheme,P=Object(i.useStaticQuery)("2456312558").site.pathPrefix,k=P?n.pathname.replace(P,""):n.pathname,C=d?k.split("/").filter(Boolean).slice(-1)[0]||l()(d[0],{lower:!0}):"",H=g||T;return Object(m.b)(c.a,{tabs:d,homepage:!1,theme:H,pageTitle:O,pageDescription:x,pageKeywords:N,titleType:p},Object(m.b)(h,{title:r?Object(m.b)(r,null):O,label:"label",tabs:d,theme:H}),d&&Object(m.b)(v,{title:O,slug:k,tabs:d,currentTab:C}),Object(m.b)(w.a,{padded:!0},a,Object(m.b)(f,{relativePagePath:u})),Object(m.b)(j.a,{pageContext:t,location:n,slug:k,tabs:d,currentTab:C}),Object(m.b)(s.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},N2AB:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return b}));var n=a("wx14"),r=a("zLVn"),o=(a("q1tI"),a("7ljp")),l=a("013z"),i=(a("qKvR"),{}),s={_frontmatter:i},c=l.a;function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)(c,Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",null,"Miscellaneous"),Object(o.b)("p",null,"In this section, we will have several different topics (domains) for Day 2 operation.  "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#support"}),"Support")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#web-console-access"}),"Web Console Access")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#pruning"}),"Pruning"))),Object(o.b)("h2",null,Object(o.b)("a",Object(n.a)({parentName:"h2"},{href:"./Support/"}),"Support")),Object(o.b)("p",null,"As a part of Day 2 operations, you may see the situation that you need to contact support to solve the issue you are facing.\nIn case you need help from Red Hat Support team, through the Customer Portal, you can submit a support case to Red Hat Support.\nWhen opening and submitting a support case, it is recommended to provide the following information about your cluster to Red Hat Support to aid in troubleshooting:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Data gathered using the ",Object(o.b)("inlineCode",{parentName:"li"},"oc adm must-gather")," command"),Object(o.b)("li",{parentName:"ul"},"The unique cluster ID  ")),Object(o.b)("h2",null,Object(o.b)("a",Object(n.a)({parentName:"h2"},{href:"./WebConsole/"}),"Web Console Access")),Object(o.b)("p",null,"The OpenShift Container Platform Web Console is a user interface accessible from a Web browser. Developers can use the Web console to visualize, browse, and manage the contents of projects.",Object(o.b)("br",{parentName:"p"}),"\n","After your OpenShift installation is completed then you can immediately access the Web Console. In fact, the OpenShift installation script will display how access the Web Console as part of the installation complete message.  "),Object(o.b)("h2",null,Object(o.b)("a",Object(n.a)({parentName:"h2"},{href:"./Prune/"}),"Pruning")),Object(o.b)("p",null,"During the normal operation and utilization of the cluster and cluster services, objects created in OpenShift can accumulate. Maintaining all previous versions of all the objects may end up consuming significant amount of storage which may have an impact on the performance of elements of the platform.  "),Object(o.b)("p",null,"The following are some area that might to be reviewed regularly:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"etcd data storage. Big etcd structure may slowdown the response of any activity related to etcd."),Object(o.b)("li",{parentName:"ul"},"local container registry. Big registry will slow down the push and pull image operation."),Object(o.b)("li",{parentName:"ul"},"/var/lib/containers. This is the location of the container runtime and container ephemeral storage area.  ")),Object(o.b)("p",null,"Pruning of logfiles is frequently also a task that needs to be performed as a Day-2 activity. However, taking the 12-factor precepts into account we assume that logs are considered as a stream and don’t materialize as persistent files in an image."),Object(o.b)("h2",null,Object(o.b)("a",Object(n.a)({parentName:"h2"},{href:"https://access.redhat.com/errata/#/?q=&p=1&sort=portal_publication_date%20desc&rows=10&portal_advisory_type=&portal_product=Red%20Hat%20OpenShift%20Container%20Platform&portal_product_variant=Red%20Hat%20OpenShift%20Container%20Platform&portal_product_version=4.3"}),"Red Hat Product Errata")),Object(o.b)("p",null,"The Red Hat Product Errata website displays all available updates, enhancements and security patches for the Open Shift platform and all other Red Hat products. "))}b.isMDXComponent=!0},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-day-2-misc-index-mdx-8518ddeee00f6b921d81.js.map