(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),r=a("NmYn"),o=a.n(r),l=a("Wbzz"),c=a("Xrax"),b=a("k4MR"),s=a("TSYQ"),u=a.n(s),d=a("QH2O"),p=a.n(d),m=a("qKvR"),h=function(e){var t,a=e.title,n=e.theme,i=e.tabs,r=void 0===i?[]:i;return Object(m.b)("div",{className:u()(p.a.pageHeader,(t={},t[p.a.withTabs]=r.length,t[p.a.darkMode]="dark"===n,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:p.a.text},a)))))},g=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,n=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||n,r=i.baseUrl,o=i.subDirectory,c=r+"/edit/"+i.branch+o+"/src/pages"+t;return r?Object(m.b)("div",{className:"bx--row "+g.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:g.link,href:c},"Edit this page on GitHub"))):null},j=a("FCXl"),x=a("dI71"),f=a("I8xM"),w=function(e){function t(){return e.apply(this,arguments)||this}return Object(x.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,i=n.split("/").filter(Boolean).slice(-1)[0],r=a.map((function(e){var t,a=o()(e,{lower:!0,strict:!0}),r=a===i,c=new RegExp(i+"/?(#.*)?$"),b=n.replace(c,a);return Object(m.b)("li",{key:e,className:u()((t={},t[f.selectedItem]=r,t),f.listItem)},Object(m.b)(l.Link,{className:f.link,to:""+b},e))}));return Object(m.b)("div",{className:f.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",{"aria-label":t},Object(m.b)("ul",{className:f.list},r))))))},t}(i.a.Component),T=a("MjG9"),N=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,i=e.Title,r=t.frontmatter,s=void 0===r?{}:r,u=t.relativePagePath,d=t.titleType,p=s.tabs,g=s.title,x=s.theme,f=s.description,v=s.keywords,k=Object(N.a)().interiorTheme,P=Object(l.useStaticQuery)("2456312558").site.pathPrefix,y=P?n.pathname.replace(P,""):n.pathname,M=p?y.split("/").filter(Boolean).slice(-1)[0]||o()(p[0],{lower:!0}):"",z=x||k;return Object(m.b)(b.a,{tabs:p,homepage:!1,theme:z,pageTitle:g,pageDescription:f,pageKeywords:v,titleType:d},Object(m.b)(h,{title:i?Object(m.b)(i,null):g,label:"label",tabs:p,theme:z}),p&&Object(m.b)(w,{title:g,slug:y,tabs:p,currentTab:M}),Object(m.b)(T.a,{padded:!0},a,Object(m.b)(O,{relativePagePath:u})),Object(m.b)(j.a,{pageContext:t,location:n,slug:y,tabs:p,currentTab:M}),Object(m.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},"w5/s":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return s}));var n=a("wx14"),i=a("zLVn"),r=(a("q1tI"),a("7ljp")),o=a("013z"),l=(a("qKvR"),{}),c={_frontmatter:l},b=o.a;function s(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)(b,Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h3",null,"Demos"),Object(r.b)("p",null,"There are several examples of how to run existing applications with the Cloud Pak for Applications.   Most will guide through the process of analyzing an existing WebSphere application, migrating to a Liberty container and deploying on the OpenShift and Cloud Pak.   Listed below are great starting points to showcase this approach:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Tutorial: ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.ibm.com/cloud/garage/dte/tutorial/cloud-enabled-use-case-app-modernization-journey-part-1"}),"App Modernization Journey Part 1 - Evaluation")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/ibm-cloud-architecture/cloudpak-for-applications"}),"IBM Cloud Architecture - Application Modernization Examples"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/ibm-cloud-architecture/cloudpak-for-applications/tree/liberty"}),"Application Modernization")," - Changing cloud runtime to Liberty and deploy on OpenShift"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/ibm-cloud-architecture/cloudpak-for-applications/tree/was90"}),"Operational Modernization")," - Maintaining a traditional WebSphere (tWAS) runtime but running within a container on OpenShift"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/ibm-cloud-architecture/cloudpak-for-applications/tree/spring"}),"Spring Modernization"),"  — Changing older Spring runtime versions to latest and deploying on OpenShift"))),Object(r.b)("li",{parentName:"ul"},"Tutorial: ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://mobilefirstplatform.ibmcloud.com/tutorials/en/foundation/8.0/ibmcloud/getting-started-mf-on-rhos/"}),"Get started with Mobile Foundation on Red Hat OpenShift"))))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-apps-cp-4-a-use-case-app-mod-index-mdx-b810fdc2a499ddc6984b.js.map