(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),r=a("NmYn"),b=a.n(r),i=a("Wbzz"),c=a("Xrax"),o=a("k4MR"),s=a("TSYQ"),u=a.n(s),d=a("QH2O"),m=a.n(d),p=a("qKvR"),j=function(e){var t,a=e.title,n=e.theme,l=e.tabs,r=void 0===l?[]:l;return Object(p.b)("div",{className:u()(m.a.pageHeader,(t={},t[m.a.withTabs]=r.length,t[m.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:m.a.text},a)))))},O=a("BAC9"),g=function(e){var t=e.relativePagePath,a=e.repository,n=Object(i.useStaticQuery)("1364590287").site.siteMetadata.repository,l=a||n,r=l.baseUrl,b=l.subDirectory,c=r+"/edit/"+l.branch+b+"/src/pages"+t;return r?Object(p.b)("div",{className:"bx--row "+O.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:O.link,href:c},"Edit this page on GitHub"))):null},x=a("FCXl"),h=a("dI71"),f=a("I8xM"),v=function(e){function t(){return e.apply(this,arguments)||this}return Object(h.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,l=n.split("/").filter(Boolean).slice(-1)[0],r=a.map((function(e){var t,a=b()(e,{lower:!0,strict:!0}),r=a===l,c=new RegExp(l+"/?(#.*)?$"),o=n.replace(c,a);return Object(p.b)("li",{key:e,className:u()((t={},t[f.selectedItem]=r,t),f.listItem)},Object(p.b)(i.Link,{className:f.link,to:""+o},e))}));return Object(p.b)("div",{className:f.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:f.list},r))))))},t}(l.a.Component),N=a("MjG9"),T=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,l=e.Title,r=t.frontmatter,s=void 0===r?{}:r,u=t.relativePagePath,d=t.titleType,m=s.tabs,O=s.title,h=s.theme,f=s.description,k=s.keywords,w=Object(T.a)().interiorTheme,C=Object(i.useStaticQuery)("2456312558").site.pathPrefix,P=C?n.pathname.replace(C,""):n.pathname,y=m?P.split("/").filter(Boolean).slice(-1)[0]||b()(m[0],{lower:!0}):"",I=h||w;return Object(p.b)(o.a,{tabs:m,homepage:!1,theme:I,pageTitle:O,pageDescription:f,pageKeywords:k,titleType:d},Object(p.b)(j,{title:l?Object(p.b)(l,null):O,label:"label",tabs:m,theme:I}),m&&Object(p.b)(v,{title:O,slug:P,tabs:m,currentTab:y}),Object(p.b)(N.a,{padded:!0},a,Object(p.b)(g,{relativePagePath:u})),Object(p.b)(x.a,{pageContext:t,location:n,slug:P,tabs:m,currentTab:y}),Object(p.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},"x+LG":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return s}));var n=a("wx14"),l=a("zLVn"),r=(a("q1tI"),a("7ljp")),b=a("013z"),i=(a("qKvR"),{}),c={_frontmatter:i},o=b.a;function s(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(r.b)(o,Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",null,"CAM Installation"),Object(r.b)("h3",null,"509: certificate signed by unknown authority"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"If doing an offline install, make sure to use OCP host install box"),Object(r.b)("li",{parentName:"ul"},"Confirm your ",Object(r.b)("strong",{parentName:"li"},"Image Repository URL")," is set correctly under ",Object(r.b)("strong",{parentName:"li"},"Install Configurations"))),Object(r.b)("h3",null,"ErrImagePull fail build"),Object(r.b)("p",null,"Check to make sure docker registry secret was created and accessible."),Object(r.b)("h3",null,"Uninstall CAM"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Go to MCM UI"),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"helm init")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"helm delete cam --purge --debug")),Object(r.b)("li",{parentName:"ol"},"Delete the provisioned pvcs with ",Object(r.b)("inlineCode",{parentName:"li"},"oc delete pvc <cam_pvc_name>"))),Object(r.b)("img",{src:"/assets/img/cp4mcm/cam_troubleshoot.png",alt:"CAM PVC Policy"}),Object(r.b)("p",null,"Alternatively,\nRun ",Object(r.b)("inlineCode",{parentName:"p"},"oc get all")," to get the CAM job name, then run ",Object(r.b)("inlineCode",{parentName:"p"},"oc delete JOB_NAME")))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-mcm-mcm-13-cp-4-mcm-troubleshooting-index-mdx-7ba9970df77fa991101d.js.map