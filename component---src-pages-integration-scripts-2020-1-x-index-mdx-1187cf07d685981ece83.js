(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),o=a("NmYn"),r=a.n(o),l=a("Wbzz"),s=a("Xrax"),b=a("k4MR"),c=a("TSYQ"),d=a.n(c),u=a("QH2O"),p=a.n(u),m=a("qKvR"),h=function(e){var t,a=e.title,n=e.theme,i=e.tabs,o=void 0===i?[]:i;return Object(m.b)("div",{className:d()(p.a.pageHeader,(t={},t[p.a.withTabs]=o.length,t[p.a.darkMode]="dark"===n,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:p.a.text},a)))))},g=a("BAC9"),x=function(e){var t=e.relativePagePath,a=e.repository,n=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||n,o=i.baseUrl,r=i.subDirectory,s=o+"/edit/"+i.branch+r+"/src/pages"+t;return o?Object(m.b)("div",{className:"bx--row "+g.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:g.link,href:s},"Edit this page on GitHub"))):null},j=a("FCXl"),O=a("dI71"),f=a("I8xM"),v=function(e){function t(){return e.apply(this,arguments)||this}return Object(O.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,i=n.split("/").filter(Boolean).slice(-1)[0],o=a.map((function(e){var t,a=r()(e,{lower:!0,strict:!0}),o=a===i,s=new RegExp(i+"/?(#.*)?$"),b=n.replace(s,a);return Object(m.b)("li",{key:e,className:d()((t={},t[f.selectedItem]=o,t),f.listItem)},Object(m.b)(l.Link,{className:f.link,to:""+b},e))}));return Object(m.b)("div",{className:f.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",{"aria-label":t},Object(m.b)("ul",{className:f.list},o))))))},t}(i.a.Component),T=a("MjG9"),w=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,i=e.Title,o=t.frontmatter,c=void 0===o?{}:o,d=t.relativePagePath,u=t.titleType,p=c.tabs,g=c.title,O=c.theme,f=c.description,k=c.keywords,P=Object(w.a)().interiorTheme,I=Object(l.useStaticQuery)("2456312558").site.pathPrefix,N=I?n.pathname.replace(I,""):n.pathname,y=p?N.split("/").filter(Boolean).slice(-1)[0]||r()(p[0],{lower:!0}):"",C=O||P;return Object(m.b)(b.a,{tabs:p,homepage:!1,theme:C,pageTitle:g,pageDescription:f,pageKeywords:k,titleType:u},Object(m.b)(h,{title:i?Object(m.b)(i,null):g,label:"label",tabs:p,theme:C}),p&&Object(m.b)(v,{title:g,slug:N,tabs:p,currentTab:y}),Object(m.b)(T.a,{padded:!0},a,Object(m.b)(x,{relativePagePath:d})),Object(m.b)(j.a,{pageContext:t,location:n,slug:N,tabs:p,currentTab:y}),Object(m.b)(s.a,null))}},"5HLIX":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return u}));var n,i=a("wx14"),o=a("zLVn"),r=(a("q1tI"),a("7ljp")),l=a("013z"),s=(a("qKvR"),{}),b=(n="InlineNotification",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",e)}),c={_frontmatter:s},d=l.a;function u(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)(d,Object(i.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)(b,{mdxType:"InlineNotification"},Object(r.b)("p",null,"Version 2020.2 is out for Cloud Pak for Ingegration.  This version is the first to feature Operators and has significant changes to the deployment and operations.  Please refer to the ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter/en/SSGT7J_20.2/overview.html"}),"Knowledge Center")," while we update this playbook.  Thanks!")),Object(r.b)("p",null,"The capabilities provided with the Cloud Pak for Integration\ncan be installed using the instructions in\nthe sections above in the\nCloud Pak Playbook."),Object(r.b)("p",null,"In addition, there is the option of installing and uninstalling\nthese capabilities using scripts developed by the IBM Garage\nSolution Engineering team. Also available are Tekton pipelines\nfor installing and uninstalling the capabilities."),Object(r.b)("p",null,"The scripts and pipeline artifacts, along with instructions\nhow to use them, are provided at the link below:"),Object(r.b)("p",null,Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/cp4i-setup/blob/master/README.md"}),"Cloud Pak for Integration Installation Scripts & Pipelines")))}u.isMDXComponent=!0},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-integration-scripts-2020-1-x-index-mdx-1187cf07d685981ece83.js.map