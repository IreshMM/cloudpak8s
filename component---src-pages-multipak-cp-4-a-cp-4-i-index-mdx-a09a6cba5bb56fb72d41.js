(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),b=a("NmYn"),l=a.n(b),i=a("Wbzz"),c=a("Xrax"),o=a("k4MR"),s=a("TSYQ"),d=a.n(s),p=a("QH2O"),j=a.n(p),m=a("qKvR"),O=function(e){var t,a=e.title,n=e.theme,r=e.tabs,b=void 0===r?[]:r;return Object(m.b)("div",{className:d()(j.a.pageHeader,(t={},t[j.a.withTabs]=b.length,t[j.a.darkMode]="dark"===n,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:j.a.text},a)))))},u=a("BAC9"),g=function(e){var t=e.relativePagePath,a=e.repository,n=Object(i.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,b=r.baseUrl,l=r.subDirectory,c=b+"/edit/"+r.branch+l+"/src/pages"+t;return b?Object(m.b)("div",{className:"bx--row "+u.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:u.link,href:c},"Edit this page on GitHub"))):null},h=a("FCXl"),f=a("dI71"),N=a("I8xM"),w=function(e){function t(){return e.apply(this,arguments)||this}return Object(f.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],b=a.map((function(e){var t,a=l()(e,{lower:!0,strict:!0}),b=a===r,c=new RegExp(r+"/?(#.*)?$"),o=n.replace(c,a);return Object(m.b)("li",{key:e,className:d()((t={},t[N.selectedItem]=b,t),N.listItem)},Object(m.b)(i.Link,{className:N.link,to:""+o},e))}));return Object(m.b)("div",{className:N.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",{"aria-label":t},Object(m.b)("ul",{className:N.list},b))))))},t}(r.a.Component),k=a("MjG9"),C=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,b=t.frontmatter,s=void 0===b?{}:b,d=t.relativePagePath,p=t.titleType,j=s.tabs,u=s.title,f=s.theme,N=s.description,P=s.keywords,x=Object(C.a)().interiorTheme,y=Object(i.useStaticQuery)("2456312558").site.pathPrefix,T=y?n.pathname.replace(y,""):n.pathname,I=j?T.split("/").filter(Boolean).slice(-1)[0]||l()(j[0],{lower:!0}):"",v=f||x;return Object(m.b)(o.a,{tabs:j,homepage:!1,theme:v,pageTitle:u,pageDescription:N,pageKeywords:P,titleType:p},Object(m.b)(O,{title:r?Object(m.b)(r,null):u,label:"label",tabs:j,theme:v}),j&&Object(m.b)(w,{title:u,slug:T,tabs:j,currentTab:I}),Object(m.b)(k.a,{padded:!0},a,Object(m.b)(g,{relativePagePath:d})),Object(m.b)(h.a,{pageContext:t,location:n,slug:T,tabs:j,currentTab:I}),Object(m.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},uaMr:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return s}));var n=a("wx14"),r=a("zLVn"),b=(a("q1tI"),a("7ljp")),l=a("013z"),i=(a("qKvR"),{}),c={_frontmatter:i},o=l.a;function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)(o,Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h2",null,Object(b.b)("strong",{parentName:"h2"},"Installing Cloud Pak for Applications Then Cloud Pak for Integration")),Object(b.b)("p",null,"This section describes the scenario of installing Cloud Pak\nfor Applications first, followed by Cloud Pak for Integration. "),Object(b.b)("p",null,"From the experience of the residency group, if you are wanting to\ninstall these two Cloud Paks in this order in the same cluster, it is important\nto follow the instructions below to resolve conflicts and make things\ngo smoothly"),Object(b.b)("p",null,"The first step is to consider the prerequisites for the Cloud Paks you\nwant to install and to make sure your cluster has the required resources."),Object(b.b)("h3",null,Object(b.b)("strong",{parentName:"h3"},"Cloud Pak for Applications Prerequisites")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Refer to the Knowledge Center\n",Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.ibm.com/support/knowledgecenter/SSCSJL_4.x/install-prerequisites.html"}),"prerequisites page"),"\n(Cloud Pak for Applications 4.0.x)\nfor details on what is required before starting an installation."),Object(b.b)("li",{parentName:"ul"},"Also consider the prerequisites for installing the Cloud Pak for Applications\ndeveloper tools. Prerequisites and installation instructions are provided in\nthis Playbook for ",Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/apps/cp4a_install_dev_tools_mac/"}),"Mac")," and for\n",Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/apps/cp4a_install_dev_tools_win/"}),"Windows")," workstations.")),Object(b.b)("h3",null,Object(b.b)("strong",{parentName:"h3"},"Cloud Pak for Integration Prerequisites")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Refer to the Knowledge Center\n",Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.ibm.com/support/knowledgecenter/SSGT7J_19.4/install/sysreqs.html"}),"prerequisites page"),"\n(Cloud Pak for Integration 2019.4)\nfor details on what is required before starting an installation.")),Object(b.b)("h3",null,Object(b.b)("strong",{parentName:"h3"},"Cloud Pak for Integration + Applications")),Object(b.b)("h3",null,Object(b.b)("strong",{parentName:"h3"},"Combined Minimum Requirements (January 2020):")),Object(b.b)("p",null,"For your convenenience, the combined resource requirements that were used\nduring the residency in January 2020 are shown below. You are advised to\ncheck the product documentation for the most current numbers for the\nreleases you want to install."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Node Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Quantity"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"CPU"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"RAM"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"DISK 1"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"DISK 2"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"DISK 3"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Bootstrap"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"1"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"4"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"16"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"100"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Installer"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"1"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"4"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"16"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"120"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"LB"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"1"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"4"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"16"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"120"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Master"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"3"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"16"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"32"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"300"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Compute"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"8"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"16"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"64"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"200"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Storage"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"3"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"4"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"16"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"200"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"500"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"NFS"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"1"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"2"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"8"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"500"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))))),Object(b.b)("h2",null,Object(b.b)("strong",{parentName:"h2"},"Installation Instructions")),Object(b.b)("h3",null,"1. ",Object(b.b)("strong",{parentName:"h3"},"Installing Cloud Pak for Applications")),Object(b.b)("p",null,"The Cloud Pak for Applications can be installed following the instructions\nin the\n",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter/SSCSJL_4.0.x/install-icpa.html"}),"Knowledge Center"),"\nor in the ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/apps/cp4a_overview"}),"Cloud Pak for Applications"),"\nsection of this Playbook."),Object(b.b)("h3",null,"2. ",Object(b.b)("strong",{parentName:"h3"},"Before Installing Cloud Pak for Integration:")),Object(b.b)("p",null,"The instructions to install Cloud Pak for Integration are further\ndown the page. Before you do that installation, read the following\nparagraphs to understand that your first installation attempt will\nfail. The following paragraphs describe the problem and the solution\nfor you to complete your installation of Cloud Pak for Integration\nsuccessfully."),Object(b.b)("h4",null,Object(b.b)("strong",{parentName:"h4"},"Conflict with Installed Helm Component Issue:")," "),Object(b.b)("p",null,"The ",Object(b.b)("inlineCode",{parentName:"p"},"Helm")," component is installed and used by Cloud Pak for Application.\nThe installation of Cloud Pak for Integration also includes the ",Object(b.b)("inlineCode",{parentName:"p"},"Helm"),"\ncomponent. At the time of writing, there was no built-in function in the\ninstaller to deal with an already existing ",Object(b.b)("inlineCode",{parentName:"p"},"Helm"),"."),Object(b.b)("p",null,"When the Cloud Pak for Integration is trying to install ",Object(b.b)("inlineCode",{parentName:"p"},"Helm")," on the same\ncluster, and finds an existing Custom Resource Definition (CRD) with",Object(b.b)("br",{parentName:"p"}),"\n","a certificate for ",Object(b.b)("inlineCode",{parentName:"p"},"Helm"),", the installation fails. Cloud Pak for Applications\nand Cloud Pak for Integration share the same certificate, and the\nCloud Pak for Integration installer cannot tolerate the condition where\nthe certificate already exists."),Object(b.b)("p",null,"Trying to complete an installation after a failed partial install will\nresult in failure of the IBM Cloud Pak (ICP) common services creation in\nin the ",Object(b.b)("inlineCode",{parentName:"p"},"kube-system")," namespace, due to missing secrets."),Object(b.b)("h4",null,Object(b.b)("strong",{parentName:"h4"},"Solution:")),Object(b.b)("p",null,"The solution is to do a full uninstall of Cloud Pak for Integration after\nafter your initial installation fails, and then to reinstall it.\nThe uninstaller removes the common component and allows the reinstall to\nrun without encountering the conflict."),Object(b.b)("p",null,"It is possible that the uninstall might hang. You can check for and\nclear that condition by checking for pods in a terminating state and\ndoing a force delete on them. Use the following command to see if you\nhave pods stuck in a terminating state."),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{}),"oc get pods --all-namespaces | grep Terminating\n")),Object(b.b)("p",null,"If you do find pods in that condition, use the following command on each\nsuch pod to do a force deletion."),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{}),"oc delete pod <pod name> -n <project-name> --force --grace-period=0 \n")),Object(b.b)("h3",null,"3. ",Object(b.b)("strong",{parentName:"h3"},"Installing Cloud Pak for Integration")),Object(b.b)("p",null,"The Cloud Pak for Integration can be installed following the instructions\nin the\n",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter/SSGT7J_19.4/install/install.html"}),"Knowledge Center"),"\nor in the ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/integration/introduction"}),"Cloud Pak for Integration"),"\nsection of this Playbook."))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-multipak-cp-4-a-cp-4-i-index-mdx-a09a6cba5bb56fb72d41.js.map