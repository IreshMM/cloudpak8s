(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("NmYn"),o=a.n(i),c=a("Wbzz"),s=a("Xrax"),l=a("k4MR"),b=a("TSYQ"),u=a.n(b),d=a("QH2O"),m=a.n(d),p=a("qKvR"),x=function(e){var t,a=e.title,n=e.theme,r=e.tabs,i=void 0===r?[]:r;return Object(p.b)("div",{className:u()(m.a.pageHeader,(t={},t[m.a.withTabs]=i.length,t[m.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:m.a.text},a)))))},g=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,n=Object(c.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,i=r.baseUrl,o=r.subDirectory,s=i+"/edit/"+r.branch+o+"/src/pages"+t;return i?Object(p.b)("div",{className:"bx--row "+g.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:g.link,href:s},"Edit this page on GitHub"))):null},O=a("FCXl"),h=a("dI71"),v=a("I8xM"),f=function(e){function t(){return e.apply(this,arguments)||this}return Object(h.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],i=a.map((function(e){var t,a=o()(e,{lower:!0,strict:!0}),i=a===r,s=new RegExp(r+"/?(#.*)?$"),l=n.replace(s,a);return Object(p.b)("li",{key:e,className:u()((t={},t[v.selectedItem]=i,t),v.listItem)},Object(p.b)(c.Link,{className:v.link,to:""+l},e))}));return Object(p.b)("div",{className:v.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:v.list},i))))))},t}(r.a.Component),T=a("MjG9"),N=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,i=t.frontmatter,b=void 0===i?{}:i,u=t.relativePagePath,d=t.titleType,m=b.tabs,g=b.title,h=b.theme,v=b.description,w=b.keywords,P=Object(N.a)().interiorTheme,k=Object(c.useStaticQuery)("2456312558").site.pathPrefix,y=k?n.pathname.replace(k,""):n.pathname,I=m?y.split("/").filter(Boolean).slice(-1)[0]||o()(m[0],{lower:!0}):"",H=h||P;return Object(p.b)(l.a,{tabs:m,homepage:!1,theme:H,pageTitle:g,pageDescription:v,pageKeywords:w,titleType:d},Object(p.b)(x,{title:r?Object(p.b)(r,null):g,label:"label",tabs:m,theme:H}),m&&Object(p.b)(f,{title:g,slug:y,tabs:m,currentTab:I}),Object(p.b)(T.a,{padded:!0},a,Object(p.b)(j,{relativePagePath:u})),Object(p.b)(O.a,{pageContext:t,location:n,slug:y,tabs:m,currentTab:I}),Object(p.b)(s.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},Sua3:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return b}));var n=a("wx14"),r=a("zLVn"),i=(a("q1tI"),a("7ljp")),o=a("013z"),c=(a("qKvR"),{}),s={_frontmatter:c},l=o.a;function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)(l,Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/assets/automation/images/under-construction-sign.png",alt:"under construction"}))," This page is under construction"),Object(i.b)("h3",null,"Required services"),Object(i.b)("p",null,"Before installing IBM Business Automation Navigator (ICN), you should have the following pre-requisites in place:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Have privileged access to your DB2 database server. "),Object(i.b)("li",{parentName:"ul"},"Optionally, have access to your LDAP directory server.")),Object(i.b)("p",null,"See the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/content/automation/shared-services"}),"Shared services")," chapter for details on DB2 or LDAP installation, if needed."))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-automation-install-ban-index-mdx-5f74b67ef9edb4dd99f5.js.map