(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("NmYn"),o=a.n(i),l=a("Wbzz"),c=a("Xrax"),b=a("k4MR"),s=a("TSYQ"),u=a.n(s),d=a("QH2O"),m=a.n(d),p=a("qKvR"),h=function(e){var t,a=e.title,n=e.theme,r=e.tabs,i=void 0===r?[]:r;return Object(p.b)("div",{className:u()(m.a.pageHeader,(t={},t[m.a.withTabs]=i.length,t[m.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:m.a.text},a)))))},x=a("BAC9"),f=function(e){var t=e.relativePagePath,a=e.repository,n=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,i=r.baseUrl,o=r.subDirectory,c=i+"/edit/"+r.branch+o+"/src/pages"+t;return i?Object(p.b)("div",{className:"bx--row "+x.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:x.link,href:c},"Edit this page on GitHub"))):null},g=a("FCXl"),O=a("dI71"),j=a("I8xM"),v=function(e){function t(){return e.apply(this,arguments)||this}return Object(O.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],i=a.map((function(e){var t,a=o()(e,{lower:!0,strict:!0}),i=a===r,c=new RegExp(r+"/?(#.*)?$"),b=n.replace(c,a);return Object(p.b)("li",{key:e,className:u()((t={},t[j.selectedItem]=i,t),j.listItem)},Object(p.b)(l.Link,{className:j.link,to:""+b},e))}));return Object(p.b)("div",{className:j.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:j.list},i))))))},t}(r.a.Component),T=a("MjG9"),w=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,i=t.frontmatter,s=void 0===i?{}:i,u=t.relativePagePath,d=t.titleType,m=s.tabs,x=s.title,O=s.theme,j=s.description,k=s.keywords,P=Object(w.a)().interiorTheme,N=Object(l.useStaticQuery)("2456312558").site.pathPrefix,y=N?n.pathname.replace(N,""):n.pathname,I=m?y.split("/").filter(Boolean).slice(-1)[0]||o()(m[0],{lower:!0}):"",C=O||P;return Object(p.b)(b.a,{tabs:m,homepage:!1,theme:C,pageTitle:x,pageDescription:j,pageKeywords:k,titleType:d},Object(p.b)(h,{title:r?Object(p.b)(r,null):x,label:"label",tabs:m,theme:C}),m&&Object(p.b)(v,{title:x,slug:y,tabs:m,currentTab:I}),Object(p.b)(T.a,{padded:!0},a,Object(p.b)(f,{relativePagePath:u})),Object(p.b)(g.a,{pageContext:t,location:n,slug:y,tabs:m,currentTab:I}),Object(p.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},tDyJ:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return s}));var n=a("wx14"),r=a("zLVn"),i=(a("q1tI"),a("7ljp")),o=a("013z"),l=(a("qKvR"),{}),c={_frontmatter:l},b=o.a;function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)(b,Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The official documentation for installing OpenShift 4 on VMware vSphere is found\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.openshift.com/container-platform/4.3/installing/installing_vsphere/installing-vsphere.html"}),"here"),"."),Object(i.b)("p",null,"Another set of step by step instructions for installing OpenShift 4 on VMware\ncan be found\nat the following link:"),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/refarch-privatecloud/blob/master/Install_OCP_4.x.md"}),"https://github.com/ibm-cloud-architecture/refarch-privatecloud/blob/master/Install_OCP_4.x.md")),Object(i.b)("p",null,"A sample terraform configuration is also provided at the link below. It is\nprovided as is and must be customized with your own values."),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/terraform-openshift4-vmware"}),"https://github.com/ibm-cloud-architecture/terraform-openshift4-vmware")))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-ocp-openshift-4-vmware-index-mdx-8e8dffb3b8e126f03b86.js.map