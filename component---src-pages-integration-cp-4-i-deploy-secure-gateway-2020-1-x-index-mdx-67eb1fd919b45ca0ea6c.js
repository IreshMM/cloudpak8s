(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("NmYn"),l=a.n(o),i=a("Wbzz"),b=a("Xrax"),c=a("k4MR"),s=a("TSYQ"),p=a.n(s),d=a("QH2O"),m=a.n(d),u=a("qKvR"),j=function(e){var t,a=e.title,n=e.theme,r=e.tabs,o=void 0===r?[]:r;return Object(u.b)("div",{className:p()(m.a.pageHeader,(t={},t[m.a.withTabs]=o.length,t[m.a.darkMode]="dark"===n,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:m.a.text},a)))))},O=a("BAC9"),h=function(e){var t=e.relativePagePath,a=e.repository,n=Object(i.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,o=r.baseUrl,l=r.subDirectory,b=o+"/edit/"+r.branch+l+"/src/pages"+t;return o?Object(u.b)("div",{className:"bx--row "+O.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:O.link,href:b},"Edit this page on GitHub"))):null},g=a("FCXl"),N=a("dI71"),f=a("I8xM"),x=function(e){function t(){return e.apply(this,arguments)||this}return Object(N.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],o=a.map((function(e){var t,a=l()(e,{lower:!0,strict:!0}),o=a===r,b=new RegExp(r+"/?(#.*)?$"),c=n.replace(b,a);return Object(u.b)("li",{key:e,className:p()((t={},t[f.selectedItem]=o,t),f.listItem)},Object(u.b)(i.Link,{className:f.link,to:""+c},e))}));return Object(u.b)("div",{className:f.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",{"aria-label":t},Object(u.b)("ul",{className:f.list},o))))))},t}(r.a.Component),w=a("MjG9"),y=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,o=t.frontmatter,s=void 0===o?{}:o,p=t.relativePagePath,d=t.titleType,m=s.tabs,O=s.title,N=s.theme,f=s.description,T=s.keywords,k=Object(y.a)().interiorTheme,v=Object(i.useStaticQuery)("2456312558").site.pathPrefix,I=v?n.pathname.replace(v,""):n.pathname,P=m?I.split("/").filter(Boolean).slice(-1)[0]||l()(m[0],{lower:!0}):"",C=N||k;return Object(u.b)(c.a,{tabs:m,homepage:!1,theme:C,pageTitle:O,pageDescription:f,pageKeywords:T,titleType:d},Object(u.b)(j,{title:r?Object(u.b)(r,null):O,label:"label",tabs:m,theme:C}),m&&Object(u.b)(x,{title:O,slug:I,tabs:m,currentTab:P}),Object(u.b)(w.a,{padded:!0},a,Object(u.b)(h,{relativePagePath:p})),Object(u.b)(g.a,{pageContext:t,location:n,slug:I,tabs:m,currentTab:P}),Object(u.b)(b.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},EKQI:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return u}));var n=a("wx14"),r=a("zLVn"),o=(a("q1tI"),a("7ljp")),l=a("013z"),i=(a("qKvR"),{}),b=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",t)}},c=b("InlineNotification"),s=b("AnchorLinks"),p=b("AnchorLink"),d={_frontmatter:i},m=l.a;function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)(m,Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)(c,{mdxType:"InlineNotification"},Object(o.b)("p",null,"Version 2020.2 is out for Cloud Pak for Ingegration.  This version is the first to feature Operators and has significant changes to the deployment and operations.  Please refer to the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter/en/SSGT7J_20.2/overview.html"}),"Knowledge Center")," while we update this playbook.  Thanks!")),Object(o.b)(s,{mdxType:"AnchorLinks"},Object(o.b)(p,{mdxType:"AnchorLink"},"Introduction"),Object(o.b)(p,{mdxType:"AnchorLink"},"Prepare Installation"),Object(o.b)(p,{mdxType:"AnchorLink"},"Begin Installation"),Object(o.b)(p,{mdxType:"AnchorLink"},"Validate installation"),Object(o.b)(p,{mdxType:"AnchorLink"},"Access Web Interface")),Object(o.b)("h3",null,Object(o.b)("strong",{parentName:"h3"},"Introduction")),Object(o.b)("p",null,"This page contains guidance on how to configure the Datapower Gateway\nrelease for both on-prem and IBM Cloud.  Note - you do not need to install this\nchart unless you are using DataPower as a standalone capability.\nWhen you install API Connect, it installs its own version of this chart\nas part of the APIC Cluster."),Object(o.b)("ul",null),Object(o.b)("h3",null,Object(o.b)("strong",{parentName:"h3"},"Prepare Installation")),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Change project to eventstreams"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"oc project datapower\n")))),Object(o.b)("ul",null),Object(o.b)("h3",null,Object(o.b)("strong",{parentName:"h3"},"Begin Installation")),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Go to CP4I Platform Home. Click ",Object(o.b)("strong",{parentName:"li"},"Create instance")," inside the\n",Object(o.b)("strong",{parentName:"li"},"DataPower")," tile."),Object(o.b)("li",{parentName:"ol"},"A window will pop up with a description of the requirements for\ninstalling. Click ",Object(o.b)("strong",{parentName:"li"},"Continue")," to the helm chart deployment configuration."),Object(o.b)("li",{parentName:"ol"},"Click ",Object(o.b)("strong",{parentName:"li"},"Overview")," to view the chart information and pre-reqs that were\ncovered in ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#prepare-installation"}),"Prepare Installation"),"."),Object(o.b)("li",{parentName:"ol"},"Click ",Object(o.b)("strong",{parentName:"li"},"Configure")),Object(o.b)("li",{parentName:"ol"},"Enter the Helm release name. In our example, ",Object(o.b)("strong",{parentName:"li"},"datapower")),Object(o.b)("li",{parentName:"ol"},"Enter Target Namespace - ",Object(o.b)("strong",{parentName:"li"},"datapower")),Object(o.b)("li",{parentName:"ol"},"Select a Cluster - ",Object(o.b)("strong",{parentName:"li"},"local-cluster"),"."),Object(o.b)("li",{parentName:"ol"},"Check the license agreement."),Object(o.b)("li",{parentName:"ol"},"Under Parameters click ",Object(o.b)("strong",{parentName:"li"},"All Parameters")," to expand.",Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},"Ingress - icp-proxy address defined during icp / common-services\ninstallation - icp-proxy.","<","openshift-router-domain",">"),Object(o.b)("li",{parentName:"ol"},"Image Pull Secret - Set to ",Object(o.b)("inlineCode",{parentName:"li"},"ibm-entitlement-key")," if using entitled\nregistry or if offline use the ",Object(o.b)("inlineCode",{parentName:"li"},"deployer-dockercfg-XX")," secret in your\ndatapower namespace.  Use ",Object(o.b)("inlineCode",{parentName:"li"},"oc get secrets")," to get the exact value for\nyour environment."))),Object(o.b)("li",{parentName:"ol"},"Scroll down to External access settings - enter the proxy\naddress - ",Object(o.b)("strong",{parentName:"li"},"icp-proxy.","<","openshift-router-domain",">",".")),Object(o.b)("li",{parentName:"ol"},"Note:  If you want to enable access to the WebUI and XML/Rest\nInterfaces for your datapower instance, you will need to change those\nmanually.  Otherwise, they will default to disabled."),Object(o.b)("li",{parentName:"ol"},"Scroll to the bottom. Click ",Object(o.b)("strong",{parentName:"li"},"Install"),".")),Object(o.b)("ul",null),Object(o.b)("h3",null,Object(o.b)("strong",{parentName:"h3"},"Validate Installation")),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"check pods using the command line",Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"oc get pods -n datapower\nNAME                                      READY     STATUS    RESTARTS   AGE\ndp-1-ibm-datapower-icp4i-fb888677-mvd9q   1/1       Running   0          3m\n")))),Object(o.b)("ul",null),Object(o.b)("h3",null,Object(o.b)("strong",{parentName:"h3"},"Access Web Interface")),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Access the web interface (if enabled) by port-forwarding\nthe port defined in the deployment (default 9090)."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"kubectl port-forward pod/dp-pod-name 9090:9090\n")),Object(o.b)("p",{parentName:"li"},"Access the web UI with local port"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"https://localhost:9090")),Object(o.b)("p",{parentName:"li"},"Login using default credentials"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"username: ",Object(o.b)("inlineCode",{parentName:"li"},"admin")),Object(o.b)("li",{parentName:"ul"},"password: ",Object(o.b)("inlineCode",{parentName:"li"},"admin"))),Object(o.b)("p",{parentName:"li"},"If other features such as SSH (default 9022) or REST management interface (default 5554) are enabled,\nthey can similarly be accessed via ",Object(o.b)("inlineCode",{parentName:"p"},"localhost")," by port-forwarding their respectively defined ports."))))}u.isMDXComponent=!0},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-integration-cp-4-i-deploy-secure-gateway-2020-1-x-index-mdx-67eb1fd919b45ca0ea6c.js.map