(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),b=a("NmYn"),c=a.n(b),l=a("Wbzz"),i=a("Xrax"),o=a("k4MR"),s=a("TSYQ"),p=a.n(s),d=a("QH2O"),j=a.n(d),O=a("qKvR"),m=function(e){var t,a=e.title,n=e.theme,r=e.tabs,b=void 0===r?[]:r;return Object(O.b)("div",{className:p()(j.a.pageHeader,(t={},t[j.a.withTabs]=b.length,t[j.a.darkMode]="dark"===n,t))},Object(O.b)("div",{className:"bx--grid"},Object(O.b)("div",{className:"bx--row"},Object(O.b)("div",{className:"bx--col-lg-12"},Object(O.b)("h1",{id:"page-title",className:j.a.text},a)))))},u=a("BAC9"),g=function(e){var t=e.relativePagePath,a=e.repository,n=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,b=r.baseUrl,c=r.subDirectory,i=b+"/edit/"+r.branch+c+"/src/pages"+t;return b?Object(O.b)("div",{className:"bx--row "+u.row},Object(O.b)("div",{className:"bx--col"},Object(O.b)("a",{className:u.link,href:i},"Edit this page on GitHub"))):null},h=a("FCXl"),N=a("dI71"),f=a("I8xM"),w=function(e){function t(){return e.apply(this,arguments)||this}return Object(N.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],b=a.map((function(e){var t,a=c()(e,{lower:!0,strict:!0}),b=a===r,i=new RegExp(r+"/?(#.*)?$"),o=n.replace(i,a);return Object(O.b)("li",{key:e,className:p()((t={},t[f.selectedItem]=b,t),f.listItem)},Object(O.b)(l.Link,{className:f.link,to:""+o},e))}));return Object(O.b)("div",{className:f.tabsContainer},Object(O.b)("div",{className:"bx--grid"},Object(O.b)("div",{className:"bx--row"},Object(O.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(O.b)("nav",{"aria-label":t},Object(O.b)("ul",{className:f.list},b))))))},t}(r.a.Component),x=a("MjG9"),k=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,b=t.frontmatter,s=void 0===b?{}:b,p=t.relativePagePath,d=t.titleType,j=s.tabs,u=s.title,N=s.theme,f=s.description,P=s.keywords,T=Object(k.a)().interiorTheme,C=Object(l.useStaticQuery)("2456312558").site.pathPrefix,v=C?n.pathname.replace(C,""):n.pathname,y=j?v.split("/").filter(Boolean).slice(-1)[0]||c()(j[0],{lower:!0}):"",I=N||T;return Object(O.b)(o.a,{tabs:j,homepage:!1,theme:I,pageTitle:u,pageDescription:f,pageKeywords:P,titleType:d},Object(O.b)(m,{title:r?Object(O.b)(r,null):u,label:"label",tabs:j,theme:I}),j&&Object(O.b)(w,{title:u,slug:v,tabs:j,currentTab:y}),Object(O.b)(x.a,{padded:!0},a,Object(O.b)(g,{relativePagePath:p})),Object(O.b)(h.a,{pageContext:t,location:n,slug:v,tabs:j,currentTab:y}),Object(O.b)(i.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},vtfQ:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return s}));var n=a("wx14"),r=a("zLVn"),b=(a("q1tI"),a("7ljp")),c=a("013z"),l=(a("qKvR"),{}),i={_frontmatter:l},o=c.a;function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)(o,Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h2",null,Object(b.b)("strong",{parentName:"h2"},"Installing Cloud Pak for Integration Then Cloud Pak for Applications")),Object(b.b)("p",null,"This section describes the scenario of installing Cloud Pak\nfor Integration first, followed by Cloud Pak for Applications. "),Object(b.b)("p",null,"From the experience of the residency group, if you are wanting to\ninstall these two Cloud Paks in the same cluster, installing them in\nthis order is recommended."),Object(b.b)("p",null,"The first step is to consider the prerequisites for the Cloud Paks you\nwant to install and to make sure your cluster has the required resources."),Object(b.b)("h3",null,Object(b.b)("strong",{parentName:"h3"},"Cloud Pak for Integration Prerequisites")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Refer to the Knowledge Center\n",Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.ibm.com/support/knowledgecenter/SSGT7J_19.4/install/sysreqs.html"}),"prerequisites page"),"\n(Cloud Pak for Integration 2019.4)\nfor details on what is required before starting an installation.")),Object(b.b)("h3",null,Object(b.b)("strong",{parentName:"h3"},"Cloud Pak for Applications Prerequisites")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Refer to the Knowledge Center\n",Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.ibm.com/support/knowledgecenter/SSCSJL_4.x/install-prerequisites.html"}),"prerequisites page"),"\n(Cloud Pak for Applications 4.0.x)\nfor details on what is required before starting an installation."),Object(b.b)("li",{parentName:"ul"},"Also consider the prerequisites for installing the Cloud Pak for Applications\ndeveloper tools. Prerequisites and installation instructions are provided in\nthis Playbook for ",Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/apps/cp4a_install_dev_tools_mac/"}),"Mac")," and for\n",Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/apps/cp4a_install_dev_tools_win/"}),"Windows")," workstations.")),Object(b.b)("h3",null,Object(b.b)("strong",{parentName:"h3"},"Cloud Pak for Integration + Applications")),Object(b.b)("h3",null,Object(b.b)("strong",{parentName:"h3"},"Combined Minimum Requirements (January 2020):")),Object(b.b)("p",null,"For your convenenience, the combined resource requirements that were used\nduring the residency in January 2020 are shown below. You are advised to\ncheck the product documentation for the most current numbers for the\nreleases you want to install."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Node Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Quantity"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"CPU"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"RAM"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"DISK 1"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"DISK 2"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"DISK 3"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Bootstrap"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"1"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"4"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"16"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"100"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Installer"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"1"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"4"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"16"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"120"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"LB"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"1"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"4"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"16"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"120"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Master"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"3"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"16"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"32"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"300"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Compute"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"8"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"16"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"64"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"200"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Storage"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"3"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"4"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"16"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"200"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"500"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"NFS"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"1"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"2"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"8"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"500"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))))),Object(b.b)("h2",null,Object(b.b)("strong",{parentName:"h2"},"Installation Instructions")),Object(b.b)("h3",null,"1. ",Object(b.b)("strong",{parentName:"h3"},"Installing Cloud Pak for Integration")),Object(b.b)("p",null,"The Cloud Pak for Integration can be installed following the instructions\nin the\n",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter/SSGT7J_19.4/install/install.html"}),"Knowledge Center"),"\nor in the ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/integration/introduction"}),"Cloud Pak for Integration"),"\nsection of this Playbook."),Object(b.b)("h3",null,"2. ",Object(b.b)("strong",{parentName:"h3"},"Before Installing Cloud Pak for Applications:")),Object(b.b)("h4",null,Object(b.b)("strong",{parentName:"h4"},"Potential Storage Class Issue:")," "),Object(b.b)("p",null,"   The Cloud Pak for Applications installer will use the default\nstorage class. If the solution steps below are not done,\nthe ",Object(b.b)("inlineCode",{parentName:"p"},"CouchDB")," installation will fail. The\nCloud Pak for Applications ",Object(b.b)("inlineCode",{parentName:"p"},"Transformation Advisor (TA)")," component\nrequires ReadWriteMany (RWX) storage. This means you need\nat least one RWX storage volume available. The solution below\ndescribes configuring NFS for RWX storage, which was the option\nused in January 2020."),Object(b.b)("p",null,"   There should be an option to choose a storage class in\nthe ",Object(b.b)("inlineCode",{parentName:"p"},"config.yaml")," file. However,  this option did not exist at the\ntime of writing."),Object(b.b)("ul",null),Object(b.b)("h4",null,Object(b.b)("strong",{parentName:"h4"},"Solution:")),Object(b.b)("ol",null,Object(b.b)("li",{parentName:"ol"},Object(b.b)("p",{parentName:"li"},"Create an NFS export on an NFS server.")),Object(b.b)("li",{parentName:"ol"},Object(b.b)("p",{parentName:"li"},"Define a Read Write Many (RWX) Persistent Volume (PV)\non the cluster to point to your NFS export.")),Object(b.b)("li",{parentName:"ol"},Object(b.b)("p",{parentName:"li"},"Change the storage class name in the Transformation\nAdvisor operator definition, so that it uses the NFS storage."),Object(b.b)("pre",{parentName:"li"},Object(b.b)("code",Object(n.a)({parentName:"pre"},{}),"``` \noc edit crd transadvs.charts.ta.cloud.ibm.com \n```\n")))),Object(b.b)("p",null,"Keep in mind that this configuration will be overwritten by installing\na later release. The only alternative is to change the default storage class."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Note:")," The Cloud Pak for Applications installer will report\nthat the installation completed\neven if the ",Object(b.b)("inlineCode",{parentName:"p"},"Transformation Advisor (TA)")," fails."),Object(b.b)("h3",null,"3. ",Object(b.b)("strong",{parentName:"h3"},"Installing Cloud Pak for Applications")),Object(b.b)("p",null,"The Cloud Pak for Applications can be installed following the instructions\nin the\n",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter/SSCSJL_4.0.x/install-icpa.html"}),"Knowledge Center"),"\nor in the ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/apps/cp4a_overview"}),"Cloud Pak for Applications"),"\nsection of this Playbook."))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-multipak-cp-4-i-cp-4-a-index-mdx-b6ecfe5427f98dfd2c9d.js.map