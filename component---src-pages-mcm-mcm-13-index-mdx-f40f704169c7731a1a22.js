(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),l=a("NmYn"),i=a.n(l),r=a("Wbzz"),c=a("Xrax"),s=a("k4MR"),b=a("TSYQ"),u=a.n(b),m=a("QH2O"),p=a.n(m),d=a("qKvR"),g=function(e){var t,a=e.title,n=e.theme,o=e.tabs,l=void 0===o?[]:o;return Object(d.b)("div",{className:u()(p.a.pageHeader,(t={},t[p.a.withTabs]=l.length,t[p.a.darkMode]="dark"===n,t))},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12"},Object(d.b)("h1",{id:"page-title",className:p.a.text},a)))))},O=a("BAC9"),h=function(e){var t=e.relativePagePath,a=e.repository,n=Object(r.useStaticQuery)("1364590287").site.siteMetadata.repository,o=a||n,l=o.baseUrl,i=o.subDirectory,c=l+"/edit/"+o.branch+i+"/src/pages"+t;return l?Object(d.b)("div",{className:"bx--row "+O.row},Object(d.b)("div",{className:"bx--col"},Object(d.b)("a",{className:O.link,href:c},"Edit this page on GitHub"))):null},j=a("FCXl"),f=a("dI71"),M=a("I8xM"),C=function(e){function t(){return e.apply(this,arguments)||this}return Object(f.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,o=n.split("/").filter(Boolean).slice(-1)[0],l=a.map((function(e){var t,a=i()(e,{lower:!0,strict:!0}),l=a===o,c=new RegExp(o+"/?(#.*)?$"),s=n.replace(c,a);return Object(d.b)("li",{key:e,className:u()((t={},t[M.selectedItem]=l,t),M.listItem)},Object(d.b)(r.Link,{className:M.link,to:""+s},e))}));return Object(d.b)("div",{className:M.tabsContainer},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(d.b)("nav",{"aria-label":t},Object(d.b)("ul",{className:M.list},l))))))},t}(o.a.Component),v=a("MjG9"),x=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,o=e.Title,l=t.frontmatter,b=void 0===l?{}:l,u=t.relativePagePath,m=t.titleType,p=b.tabs,O=b.title,f=b.theme,M=b.description,P=b.keywords,k=Object(x.a)().interiorTheme,w=Object(r.useStaticQuery)("2456312558").site.pathPrefix,I=w?n.pathname.replace(w,""):n.pathname,T=p?I.split("/").filter(Boolean).slice(-1)[0]||i()(p[0],{lower:!0}):"",N=f||k;return Object(d.b)(s.a,{tabs:p,homepage:!1,theme:N,pageTitle:O,pageDescription:M,pageKeywords:P,titleType:m},Object(d.b)(g,{title:o?Object(d.b)(o,null):O,label:"label",tabs:p,theme:N}),p&&Object(d.b)(C,{title:O,slug:I,tabs:p,currentTab:T}),Object(d.b)(v.a,{padded:!0},a,Object(d.b)(h,{relativePagePath:u})),Object(d.b)(j.a,{pageContext:t,location:n,slug:I,tabs:p,currentTab:T}),Object(d.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},dW42:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return b}));var n=a("wx14"),o=a("zLVn"),l=(a("q1tI"),a("7ljp")),i=a("013z"),r=(a("qKvR"),{}),c={_frontmatter:r},s=i.a;function b(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(l.b)(s,Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"While\n",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter/en/SSFC4F_2.0.0/kc_welcome_cloud_pak.html"}),"IBM Cloud Pak for Multicloud Management 2.0"),"\nis the most current version available, the 1.3 version of the Cloud Pak remains available,\nsupported, and in broad use. The information on installing, configuring, and using IBM\nCloud Pak for Multicloud Management 1.3 from this Cloud Pak Playbook is preserved at the links\nbelow for your continued use."),Object(l.b)("p",null,Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"./cp4mcm_requirements/"}),"CP for MCM 1.3 Installation Requirements")),Object(l.b)("p",null,Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"./cp4mcm_mcm_install/"}),"CP for MCM 1.3 Installation")),Object(l.b)("p",null,Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"./cp4mcm_cluster_onboarding/"}),"CP for MCM 1.3 Importing a Kubernetes Cluster")),Object(l.b)("p",null,Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"./cp4mcm_mcm_concepts/"}),"CP for MCM 1.3 Concepts")),Object(l.b)("p",null,Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"./cp4mcm_governance_risk/"}),"CP for MCM 1.3 Governance and Risk")),Object(l.b)("p",null,Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"./cp4mcm_icam_install/"}),"CP for MCM 1.3 IBM Cloud Application Monitoring (iCAM) Installation")),Object(l.b)("p",null,Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"./cp4mcm_icam_post_server_install/"}),"CP for MCM 1.3 IBM Cloud Application Monitoring (iCAM) Post-Install Setup")),Object(l.b)("p",null,Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"./cp4mcm_cam_install/"}),"CP for MCM 1.3 Cloud Automation Manager (CAM) Installation")),Object(l.b)("p",null,Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"./cp4mcm_cloudforms/"}),"CP for MCM 1.3 CloudForms Installation")),Object(l.b)("p",null,Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"./cp4mcm_cloudforms_policies/"}),"CP for MCM 1.3 CloudForms Policies")),Object(l.b)("p",null,Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"./cp4mcm_troubleshooting/"}),"CP for MCM 1.3 Troubleshooting")),Object(l.b)("h2",null,"Solution Overview"),Object(l.b)("p",null,"The IBM Cloud Pak™ for Multicloud Management, running on Red Hat® OpenShift®, provides consistent visibility, governance and automation from on premises to the edge. Enterprises gain capabilities such as multicluster management, event management, application management and infrastructure management. Enterprises can leverage this IBM Cloud Pak to help increase operational efficiency that is driven by intelligent data analysis and predictive golden signals, and gain built-in support for their compliance management."),Object(l.b)("p",null,"The IBM Cloud Pak for Multicloud Management includes IBM Multicloud Manager, IBM Cloud Automation Manager, and IBM Cloud App Management, which includes IBM Cloud Event Management. With IBM Cloud Pak for Multicloud Management, you get more application and cluster visibility across the enterprise to any public or private cloud. You can improve automation by simplifying your IT and application operations management with increased flexibility and cost savings, and intelligent data analysis driven by predictive signals."),Object(l.b)("p",null,"You can also take advantage of the governance, as with this IBM Cloud Pak for Multicloud Management, you can manage your multicloud environments with a consistent set of configuration and security policies across all applications and clusters."),Object(l.b)("img",{src:"/assets/img/cp4mcm/cp4mcm_overview.png",alt:"CP4MCM Overview"}),Object(l.b)("p",null,"This repository provides documentation and access to automation for:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Installing the Cloud Pak for Multicloud Management on Red Hat OpenShift on IBM Cloud, including automation (terraforms) for the installation."),Object(l.b)("li",{parentName:"ol"},"Installating Cloud Pak for Multicloud Management on VMWare, including automation (terraforms) for the installation."),Object(l.b)("li",{parentName:"ol"},"A set of common use cases the documentation on how to demonstrate them.")),Object(l.b)("h2",null,"MCM Component Architecture"),Object(l.b)("img",{src:"/assets/img/cp4mcm/mcm_arch_3.2.1.png",alt:"CP4MCM Component Architecture"}),Object(l.b)("h2",null,"Other Resources"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{href:"https://www.ibm.com/support/knowledgecenter/SSFC4F_1.2.0/kc_welcome_cloud_pak.html"},"Cloud Pak for MCM Knowledge Center")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{href:"https://www.ibm.com/demos/collection/Cloud-Pak-for-Multicloud-Management/"},"IBM Demos (Videos, Product Tours and Hands on Labs)"))))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-mcm-mcm-13-index-mdx-f40f704169c7731a1a22.js.map