(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"013z":function(e,t,n){"use strict";var a=n("q1tI"),o=n.n(a),l=n("NmYn"),i=n.n(l),s=n("Wbzz"),r=n("Xrax"),c=n("k4MR"),b=n("TSYQ"),d=n.n(b),p=n("QH2O"),u=n.n(p),m=n("qKvR"),h=function(e){var t,n=e.title,a=e.theme,o=e.tabs,l=void 0===o?[]:o;return Object(m.b)("div",{className:d()(u.a.pageHeader,(t={},t[u.a.withTabs]=l.length,t[u.a.darkMode]="dark"===a,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:u.a.text},n)))))},g=n("BAC9"),O=function(e){var t=e.relativePagePath,n=e.repository,a=Object(s.useStaticQuery)("1364590287").site.siteMetadata.repository,o=n||a,l=o.baseUrl,i=o.subDirectory,r=l+"/edit/"+o.branch+i+"/src/pages"+t;return l?Object(m.b)("div",{className:"bx--row "+g.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:g.link,href:r},"Edit this page on GitHub"))):null},j=n("FCXl"),f=n("dI71"),w=n("I8xM"),x=function(e){function t(){return e.apply(this,arguments)||this}return Object(f.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.tabs,a=e.slug,o=a.split("/").filter(Boolean).slice(-1)[0],l=n.map((function(e){var t,n=i()(e,{lower:!0,strict:!0}),l=n===o,r=new RegExp(o+"/?(#.*)?$"),c=a.replace(r,n);return Object(m.b)("li",{key:e,className:d()((t={},t[w.selectedItem]=l,t),w.listItem)},Object(m.b)(s.Link,{className:w.link,to:""+c},e))}));return Object(m.b)("div",{className:w.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",{"aria-label":t},Object(m.b)("ul",{className:w.list},l))))))},t}(o.a.Component),v=n("MjG9"),N=n("CzIb");t.a=function(e){var t=e.pageContext,n=e.children,a=e.location,o=e.Title,l=t.frontmatter,b=void 0===l?{}:l,d=t.relativePagePath,p=t.titleType,u=b.tabs,g=b.title,f=b.theme,w=b.description,T=b.keywords,k=Object(N.a)().interiorTheme,C=Object(s.useStaticQuery)("2456312558").site.pathPrefix,P=C?a.pathname.replace(C,""):a.pathname,y=u?P.split("/").filter(Boolean).slice(-1)[0]||i()(u[0],{lower:!0}):"",I=f||k;return Object(m.b)(c.a,{tabs:u,homepage:!1,theme:I,pageTitle:g,pageDescription:w,pageKeywords:T,titleType:p},Object(m.b)(h,{title:o?Object(m.b)(o,null):g,label:"label",tabs:u,theme:I}),u&&Object(m.b)(x,{title:g,slug:P,tabs:u,currentTab:y}),Object(m.b)(v.a,{padded:!0},n,Object(m.b)(O,{relativePagePath:d})),Object(m.b)(j.a,{pageContext:t,location:a,slug:P,tabs:u,currentTab:y}),Object(m.b)(r.a,null))}},BAC9:function(e,t,n){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,n){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,n){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},rt93:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n("wx14"),o=n("zLVn"),l=(n("q1tI"),n("7ljp")),i=n("013z"),s=(n("qKvR"),{}),r={_frontmatter:s},c=i.a;function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(l.b)(c,Object(a.a)({},r,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",null,"Prerequisites"),Object(l.b)("p",null,"Before beginning these steps you should have:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"A github account (or Github Enterprise)"),Object(l.b)("li",{parentName:"ol"},"A Dockerhub account (needed to install docker)"),Object(l.b)("li",{parentName:"ol"},"A Red Hat entitled customer account (to install oc)"),Object(l.b)("li",{parentName:"ol"},"An IDE (Eclipse or VS Code to use with Codewind)"),Object(l.b)("li",{parentName:"ol"},"A login for your Openshift Container cluster")),Object(l.b)("h2",null,"Installing Client tools from web pages on the cluster"),Object(l.b)("p",null,"A landing page is created during the install of Cloud Pak for Applications.\nThe landing page is available in the top menu bar and is named Cloud Pak Console.\nThe landing page is also found in the Administrator Console under Networking::Routes and is named icpa-landing in the kabanero namespace.\nThe Cloud Pak Console pages provide the most current installation information about the client tools.\nThis document will also provide links to these tools on the web."),Object(l.b)("p",null,"When the OpenShift cluster is created, a reference page is generated for the OpenShift command line tools. There are several useful links on this page. Get this URL from your administrator."),Object(l.b)("img",{src:"/assets/img/cp4a/command-line-tools.png",alt:"Command Line Tools"}),Object(l.b)("img",{src:"/assets/img/cp4a/command-line-tools-download.png",alt:"Download Command Line Tools"}),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Note:")," You will need to authenticate (login) to your cluster."),Object(l.b)("p",null,"The Cloud Pak Console provides additional information on installing additional development tools.  In the Console page, select the Setup dev tools button and follow instructions in the pop-up."),Object(l.b)("img",{src:"/assets/img/cp4a/dev-tools.png",alt:"Cloud Pak Console"}),Object(l.b)("img",{src:"/assets/img/cp4a/setup-dev-tools.png",alt:"Setup Dev Tools"}),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Note:")," You will need to authenticate (login) to your cluster."),Object(l.b)("h2",null,"Command line tools"),Object(l.b)("h4",null,"git"),Object(l.b)("p",null,"Install git for windows from: ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://gitforwindows.org/"}),"https://gitforwindows.org/")),Object(l.b)("h3",null,"OpenShift OpenShift command line interface (oc)"),Object(l.b)("p",null,"Recommend to download from OpenShift cluster using instructions with Setup Dev Tools.\nAlternatively, more information can be found here:\n",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.openshift.com/container-platform/4.2/cli_reference/openshift_cli/getting-started-cli.html"}),"https://docs.openshift.com/container-platform/4.2/cli_reference/openshift_cli/getting-started-cli.html")," "),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Note:")," You will need to login using your RedHat customer account."),Object(l.b)("p",null,"oc is also available from ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://mirror.openshift.com/pub/openshift-v4/clients/oc/latest/windows/"}),"https://mirror.openshift.com/pub/openshift-v4/clients/oc/latest/windows/")),Object(l.b)("h3",null,"docker"),Object(l.b)("p",null,"Install docker from here:\n",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.docker.com/install/"}),"https://docs.docker.com/install/"),"\n",Object(l.b)("strong",{parentName:"p"},"Note:")," You will need to authenticate (login) to docker."),Object(l.b)("h4",null,"appsody"),Object(l.b)("p",null,"Follow the link on the Cloud Pak Console landing page.\nOr use multiple platform installation instructions ",Object(l.b)("inlineCode",{parentName:"p"},"https://appsody.dev/docs/getting-started/installation")),Object(l.b)("h2",null,"IDE: Codewind with Eclipse or VS Code"),Object(l.b)("p",null,"These installations provide shortcuts and commands from within the IDE."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.eclipse.org/codewind/mdteclipsegettingstarted.html"}),"Eclipse installation")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.eclipse.org/codewind/mdt-vsc-getting-started.html"}),"VS Code installation"))))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-apps-cp-4-a-install-dev-tools-win-index-mdx-67192a6cb7b36d156564.js.map