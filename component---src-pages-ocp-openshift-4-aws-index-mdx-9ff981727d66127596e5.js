(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),r=a("NmYn"),o=a.n(r),l=a("Wbzz"),c=a("Xrax"),b=a("k4MR"),s=a("TSYQ"),m=a.n(s),p=a("QH2O"),u=a.n(p),d=a("qKvR"),h=function(e){var t,a=e.title,n=e.theme,i=e.tabs,r=void 0===i?[]:i;return Object(d.b)("div",{className:m()(u.a.pageHeader,(t={},t[u.a.withTabs]=r.length,t[u.a.darkMode]="dark"===n,t))},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12"},Object(d.b)("h1",{id:"page-title",className:u.a.text},a)))))},O=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,n=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||n,r=i.baseUrl,o=i.subDirectory,c=r+"/edit/"+i.branch+o+"/src/pages"+t;return r?Object(d.b)("div",{className:"bx--row "+O.row},Object(d.b)("div",{className:"bx--col"},Object(d.b)("a",{className:O.link,href:c},"Edit this page on GitHub"))):null},f=a("FCXl"),g=a("dI71"),x=a("I8xM"),N=function(e){function t(){return e.apply(this,arguments)||this}return Object(g.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,i=n.split("/").filter(Boolean).slice(-1)[0],r=a.map((function(e){var t,a=o()(e,{lower:!0,strict:!0}),r=a===i,c=new RegExp(i+"/?(#.*)?$"),b=n.replace(c,a);return Object(d.b)("li",{key:e,className:m()((t={},t[x.selectedItem]=r,t),x.listItem)},Object(d.b)(l.Link,{className:x.link,to:""+b},e))}));return Object(d.b)("div",{className:x.tabsContainer},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(d.b)("nav",{"aria-label":t},Object(d.b)("ul",{className:x.list},r))))))},t}(i.a.Component),v=a("MjG9"),w=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,i=e.Title,r=t.frontmatter,s=void 0===r?{}:r,m=t.relativePagePath,p=t.titleType,u=s.tabs,O=s.title,g=s.theme,x=s.description,k=s.keywords,T=Object(w.a)().interiorTheme,y=Object(l.useStaticQuery)("2456312558").site.pathPrefix,P=y?n.pathname.replace(y,""):n.pathname,I=u?P.split("/").filter(Boolean).slice(-1)[0]||o()(u[0],{lower:!0}):"",S=g||T;return Object(d.b)(b.a,{tabs:u,homepage:!1,theme:S,pageTitle:O,pageDescription:x,pageKeywords:k,titleType:p},Object(d.b)(h,{title:i?Object(d.b)(i,null):O,label:"label",tabs:u,theme:S}),u&&Object(d.b)(N,{title:O,slug:P,tabs:u,currentTab:I}),Object(d.b)(v.a,{padded:!0},a,Object(d.b)(j,{relativePagePath:m})),Object(d.b)(f.a,{pageContext:t,location:n,slug:P,tabs:u,currentTab:I}),Object(d.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},Q85f:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return s}));var n=a("wx14"),i=a("zLVn"),r=(a("q1tI"),a("7ljp")),o=a("013z"),l=(a("qKvR"),{}),c={_frontmatter:l},b=o.a;function s(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)(b,Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Documentation on installing Openshift 4 on AWS can be found\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.openshift.com/container-platform/4.3/installing/installing_aws/installing-aws-account.html"}),"here"),"."),Object(r.b)("p",null,"If possible, using the\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.openshift.com/container-platform/4.3/installing/installing_aws/installing-aws-default.html"}),"installer-provisioned infrastructure"),"\n(IPI) method is preferred."),Object(r.b)("p",null,"For custom requirements, the\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.openshift.com/container-platform/4.3/installing/installing_aws/installing-aws-customizations.html"}),"user-provisioned infrastructure"),"\n(UPI) method can be used."),Object(r.b)("p",null,"If the UPI method must be used, a terraform automation configuration may be\nhelpful. A sample configuration can be found here:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/ibm-cloud-architecture/terraform-openshift4-aws/"}),"https://github.com/ibm-cloud-architecture/terraform-openshift4-aws/"))),Object(r.b)("h3",null,Object(r.b)("strong",{parentName:"h3"},"Troubleshooting")),Object(r.b)("ul",null),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Problem"),": When using ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html#encryption-by-default"}),"automatic encryption of EBS volumes")," for EC2 instances, OpenShift Worker nodes will be terminated immediately as the generated user does not have the authority to use the default encryption key and the OpenShift installer will time out."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Solution:")," "),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Add the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://console.aws.amazon.com/iam/home"}),"generated user")," ",Object(r.b)("em",{parentName:"p"},"(whose name will be in the form of ",Object(r.b)("inlineCode",{parentName:"em"},"<infrastructureID>-openshift-machine-api-aws-<randomString>"),")")," to allow use the default EBS volume encryption key in ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://us-east-2.console.aws.amazon.com/kms/home"}),"AWS Key Management Service"),".")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Scale Worker MachineSets to 0 via ",Object(r.b)("inlineCode",{parentName:"p"},"oc --kubeconfig /path/to/install/dir/auth/kubeconfig scale machineset --all -n openshift-machine-api --replicas=0"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Scale Worker MachineSets back to previous values via ",Object(r.b)("inlineCode",{parentName:"p"},"oc --kubeconfig /path/to/install/dir/auth/kubeconfig scale machineset --all -n openshift-machine-api --replicas=1"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Verify Worker nodes are visible in the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://us-east-2.console.aws.amazon.com/ec2/v2/home"}),"AWS Console")," and via ",Object(r.b)("inlineCode",{parentName:"p"},"oc get nodes"),".")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Wait until all Operators in the ",Object(r.b)("inlineCode",{parentName:"p"},"oc get clusteroperators")," list are as expected."))))}s.isMDXComponent=!0},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-ocp-openshift-4-aws-index-mdx-9ff981727d66127596e5.js.map