(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),o=a("NmYn"),r=a.n(o),l=a("Wbzz"),c=a("Xrax"),b=a("k4MR"),s=a("TSYQ"),u=a.n(s),m=a("QH2O"),d=a.n(m),p=a("qKvR"),h=function(e){var t,a=e.title,n=e.theme,i=e.tabs,o=void 0===i?[]:i;return Object(p.b)("div",{className:u()(d.a.pageHeader,(t={},t[d.a.withTabs]=o.length,t[d.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:d.a.text},a)))))},O=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,n=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||n,o=i.baseUrl,r=i.subDirectory,c=o+"/edit/"+i.branch+r+"/src/pages"+t;return o?Object(p.b)("div",{className:"bx--row "+O.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:O.link,href:c},"Edit this page on GitHub"))):null},g=a("FCXl"),f=a("dI71"),w=a("I8xM"),x=function(e){function t(){return e.apply(this,arguments)||this}return Object(f.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,i=n.split("/").filter(Boolean).slice(-1)[0],o=a.map((function(e){var t,a=r()(e,{lower:!0,strict:!0}),o=a===i,c=new RegExp(i+"/?(#.*)?$"),b=n.replace(c,a);return Object(p.b)("li",{key:e,className:u()((t={},t[w.selectedItem]=o,t),w.listItem)},Object(p.b)(l.Link,{className:w.link,to:""+b},e))}));return Object(p.b)("div",{className:w.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:w.list},o))))))},t}(i.a.Component),N=a("MjG9"),v=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,i=e.Title,o=t.frontmatter,s=void 0===o?{}:o,u=t.relativePagePath,m=t.titleType,d=s.tabs,O=s.title,f=s.theme,w=s.description,T=s.keywords,k=Object(v.a)().interiorTheme,B=Object(l.useStaticQuery)("2456312558").site.pathPrefix,I=B?n.pathname.replace(B,""):n.pathname,M=d?I.split("/").filter(Boolean).slice(-1)[0]||r()(d[0],{lower:!0}):"",y=f||k;return Object(p.b)(b.a,{tabs:d,homepage:!1,theme:y,pageTitle:O,pageDescription:w,pageKeywords:T,titleType:m},Object(p.b)(h,{title:i?Object(p.b)(i,null):O,label:"label",tabs:d,theme:y}),d&&Object(p.b)(x,{title:O,slug:I,tabs:d,currentTab:M}),Object(p.b)(N.a,{padded:!0},a,Object(p.b)(j,{relativePagePath:u})),Object(p.b)(g.a,{pageContext:t,location:n,slug:I,tabs:d,currentTab:M}),Object(p.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},wmWH:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return s}));var n=a("wx14"),i=a("zLVn"),o=(a("q1tI"),a("7ljp")),r=a("013z"),l=(a("qKvR"),{}),c={_frontmatter:l},b=r.a;function s(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)(b,Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",null,"Solution overview"),Object(o.b)("p",null,"Digital business automation (DBA) allows an organization to improve its operations by streamlining the way people participate in business processes and workflows, automate repeatable decisions, and provide business users with the ability to edit and change the business logic involved in these business processes. DBA projects also aim to make documents easy to store and retrieve, digitize document content, such as with optical character recognition (OCR), and automate data entries with software robots, also referred to as robotic process automation."),Object(o.b)("p",null,"The IBM Cloud Pak for Automation offers a software platform to develop, deploy, run and manage your digital business automation projects, using the capabilities shown in the following digram: "),Object(o.b)("img",{src:"/assets/automation/images/cp4a.jpg",alt:"overview"}),Object(o.b)("p",null,"The goal of the following chapters is to detail the install process for the components of the cloud pak (specifically version 19.0.3) that are containerized and run in an OpenShift cluster.\nThe components that are currently documented are:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/automation/install-ums"}),"IBM User Management Services")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/automation/install-bas"}),"IBM Business Automation Studio")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/automation/install-bai"}),"IBM Business Automation Insights"))),Object(o.b)("p",null,"The documentation for the following components is still ",Object(o.b)("em",{parentName:"p"},"under construction"),":"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/automation/install-ban"}),"IBM Business Automation Navigator")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/automation/install-ecm"}),"IBM FileNet Content Manager")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/automation/install-aws"}),"IBM Automation Workstream Services")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/automation/install-aca"}),"IBM Business Automation Content Analyzer")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/automation/install-odm"}),"IBM Operational Decision Manager")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/automation/install-adw"}),"IBM Automation Digital Worker"))),Object(o.b)("p",null,"The install process is performed through an Operator, which configuration is described ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/automation/install-operator"}),"here")),Object(o.b)("p",null,"Note that these install instructions have been tested on an OpenShift 4.2 cluster, using images from the Entitlement Registry for the IBM Cloud Pak for Automation on ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://cloud.ibm.com/catalog/content/ibm-cp-automation-f8084c28-d609-4a7a-bfb7-569e79cb9e72-global"}),"IBM Cloud"),"."),Object(o.b)("p",null,"For more information, visit:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.ibm.com/support/knowledgecenter/en/SSYHZ8_19.0.x/welcome/kc_welcome_dba_distrib.html"}),"IBM Cloud Pak for Automation documentation")," in the IBM Knowledge Center."),Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.ibm.com/cloud/architecture/architectures/dba-architecture"}),"Digital business automation reference architecture")," in the IBM Architecture Center."),Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/ibm-cloud-architecture/denim-compute"}),"Denim Compute DBA reference implementation")," in GitHub."),Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.ibm.com/cloud/architecture/content/field-guide/digital-business-automation-field-guide"}),"IBM Digital Business Automation Field Guide"))))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-automation-introduction-index-mdx-ef343686b301db5a535a.js.map