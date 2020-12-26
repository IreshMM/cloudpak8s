(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{"013z":function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),o=n("NmYn"),i=n.n(o),l=n("Wbzz"),b=n("Xrax"),s=n("k4MR"),c=n("TSYQ"),u=n.n(c),p=n("QH2O"),m=n.n(p),h=n("qKvR"),g=function(e){var t,n=e.title,a=e.theme,r=e.tabs,o=void 0===r?[]:r;return Object(h.b)("div",{className:u()(m.a.pageHeader,(t={},t[m.a.withTabs]=o.length,t[m.a.darkMode]="dark"===a,t))},Object(h.b)("div",{className:"bx--grid"},Object(h.b)("div",{className:"bx--row"},Object(h.b)("div",{className:"bx--col-lg-12"},Object(h.b)("h1",{id:"page-title",className:m.a.text},n)))))},d=n("BAC9"),O=function(e){var t=e.relativePagePath,n=e.repository,a=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,r=n||a,o=r.baseUrl,i=r.subDirectory,b=o+"/edit/"+r.branch+i+"/src/pages"+t;return o?Object(h.b)("div",{className:"bx--row "+d.row},Object(h.b)("div",{className:"bx--col"},Object(h.b)("a",{className:d.link,href:b},"Edit this page on GitHub"))):null},f=n("FCXl"),j=n("dI71"),N=n("I8xM"),y=function(e){function t(){return e.apply(this,arguments)||this}return Object(j.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.tabs,a=e.slug,r=a.split("/").filter(Boolean).slice(-1)[0],o=n.map((function(e){var t,n=i()(e,{lower:!0,strict:!0}),o=n===r,b=new RegExp(r+"/?(#.*)?$"),s=a.replace(b,n);return Object(h.b)("li",{key:e,className:u()((t={},t[N.selectedItem]=o,t),N.listItem)},Object(h.b)(l.Link,{className:N.link,to:""+s},e))}));return Object(h.b)("div",{className:N.tabsContainer},Object(h.b)("div",{className:"bx--grid"},Object(h.b)("div",{className:"bx--row"},Object(h.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(h.b)("nav",{"aria-label":t},Object(h.b)("ul",{className:N.list},o))))))},t}(r.a.Component),v=n("MjG9"),w=n("CzIb");t.a=function(e){var t=e.pageContext,n=e.children,a=e.location,r=e.Title,o=t.frontmatter,c=void 0===o?{}:o,u=t.relativePagePath,p=t.titleType,m=c.tabs,d=c.title,j=c.theme,N=c.description,T=c.keywords,P=Object(w.a)().interiorTheme,x=Object(l.useStaticQuery)("2456312558").site.pathPrefix,k=x?a.pathname.replace(x,""):a.pathname,S=m?k.split("/").filter(Boolean).slice(-1)[0]||i()(m[0],{lower:!0}):"",C=j||P;return Object(h.b)(s.a,{tabs:m,homepage:!1,theme:C,pageTitle:d,pageDescription:N,pageKeywords:T,titleType:p},Object(h.b)(g,{title:r?Object(h.b)(r,null):d,label:"label",tabs:m,theme:C}),m&&Object(h.b)(y,{title:d,slug:k,tabs:m,currentTab:S}),Object(h.b)(v.a,{padded:!0},n,Object(h.b)(O,{relativePagePath:u})),Object(h.b)(f.a,{pageContext:t,location:a,slug:k,tabs:m,currentTab:S}),Object(h.b)(b.a,null))}},"8ueE":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return c}));var a=n("wx14"),r=n("zLVn"),o=(n("q1tI"),n("7ljp")),i=n("013z"),l=(n("qKvR"),{}),b={_frontmatter:l},s=i.a;function c(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)(s,Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",null,"Metering Overview"),Object(o.b)("p",null,"Metering is an essential tool for organizations that use capacity from a Kubernetes cluster to run their services, as well as for IT departments that manage these clusters. In the past, many departments tended to overestimate their resource needs. This could easily result in wasted capacity and wasted capital."),Object(o.b)("p",null,"Management teams want to understand more concretely where budget is spent and by whom, and for which service. Metering provides that information, providing an understanding of how much it costs to run specific services, while also providing usage information that can lead to improved budgeting and capacity planning. With this information, IT Operation can also internally bill departments to reflect the costs directly associated with their actual infrastructure usage, driving accountability for service costs. This helps to eliminate some of the more manual IT “plumbing” work in tallying costs and usage by hand or managing spreadsheets. By using metering, IT teams can free up their time to tackle bigger problems and even drive business-wide innovation.  "),Object(o.b)("p",null,"Here are some examples of how metering could be applied in the real world:  "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Cloud budgeting: Teams can gain insight into how cloud resources are being used, especially in autoscaled clusters or hybrid cloud deployments.  "),Object(o.b)("li",{parentName:"ul"},"Cloud billing: Resource usage can be tracked by billing codes or labels that reflect your internal hierarchy."),Object(o.b)("li",{parentName:"ul"},"Telemetry/aggregation: Service usage and metrics can be viewed across many namespaces or teams, such as a Postgres Operator running hundreds of databases.  ")),Object(o.b)("p",null,"OpenShit Metering feature is managed by the metering operator. The metering operator depends on two components."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"a database engine ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://prestodb.io"}),"Presto"),". Presto is a distributed SQL database written in Java.  Presto can use several connectors, for the metering operator, it is configured to use ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://hive.apache.org"}),"Hive"),", a data warehousing application with distributed storage. See the ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.openshift.com/container-platform/4.3/metering/configuring_metering/metering-configure-hive-metastore.html"}),"OpenShift Document")," for detailed information."),Object(o.b)("li",{parentName:"ul"},"a reporting framework ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.openshift.com/container-platform/4.3/metering/configuring_metering/metering-configure-reporting-operator.html"}),"reporting operator"),".  This is the reporting engine making use of Presto data.  ")),Object(o.b)("h2",null,"Day 1 Platform"),Object(o.b)("p",null,"Metering can be a Day 1 or Day 2 activity depending on whether the business requirement for metering comes at the beginning of the OpenShift install or later.  If metering is considered as important by the business, it will be included in the design phase; then, it is a Day 1 activity.  However, some enterprises may only consider metering after they go to production.  In this case, metering is a Day 2 activity. "),Object(o.b)("p",null,"OpenShift provides a ",Object(o.b)("inlineCode",{parentName:"p"},"metering operator"),"; however, it is not installed by default.\nYou can ",Object(o.b)("strong",{parentName:"p"},"install the metering operator")," via the OpenShift web console."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Day 1 Platform task for Metering:")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Install the metering operator    ")),Object(o.b)("h2",null,"Day 2 Platform"),Object(o.b)("p",null,"Depending on the defined data source, metering can report either usage of the OpenShift platform, the application, or both.\nFor platform metering, you can use the data source from the OpenShift configured Prometheus. So before you start using the metering operator, you need to ",Object(o.b)("strong",{parentName:"p"},"verify Prometheus is collecting data"),". You can then ",Object(o.b)("strong",{parentName:"p"},"enable the metering operator’s report")," on the cluster, node, pod, PVC resources for the request, usage, and other collected information for a different period.\nFor example, the following list some of the available platform report:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"cluster CPU usage"),Object(o.b)("li",{parentName:"ul"},"node allocatable CPU cores"),Object(o.b)("li",{parentName:"ul"},"node allocatable memory bytes "),Object(o.b)("li",{parentName:"ul"},"node capacity CPU cores"),Object(o.b)("li",{parentName:"ul"},"persistent volume claim request bytes "),Object(o.b)("li",{parentName:"ul"},"persistent volume claim usage bytes "),Object(o.b)("li",{parentName:"ul"},"pod memory request raw "),Object(o.b)("li",{parentName:"ul"},"pod persistent volume claim request info"),Object(o.b)("li",{parentName:"ul"},"pod request CPU cores "),Object(o.b)("li",{parentName:"ul"},"pod request memory bytes "),Object(o.b)("li",{parentName:"ul"},"pod usage CPU cores")),Object(o.b)("p",null,"To summarize these are the activities that you need to perform for Day 2 Platform on metering:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#platform-verify"}),"Verify Prometheus is collecting data")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#platform-enable"}),"Enable the metering operator’s report"),"   ")),Object(o.b)("h2",null,"Day 1 Application"),Object(o.b)("p",null,"If metering is included as part of the cluster’s design and installation, to prepare for Day 2 activities, please ensure that you ",Object(o.b)("strong",{parentName:"p"},"obtain the business requirement documentation on metering"),"."),Object(o.b)("p",null,"As the application’s data does not come preconfigured with the OpenShift configured Prometheus, you need to configure Prometheus to collect the required data."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Day 1 Application task for Metering:")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Obtain the business requirement documentation on metering  ")),Object(o.b)("h2",null,"Day 2 Application"),Object(o.b)("p",null,"The following are the Day 2 activities in configuring the metering"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#requirement"}),"Capture and document the business requirement")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#report"}),"Develop the metering report")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#troubleshooting"}),"Troubleshoot the metering operator")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#uninstall"}),"Uninstall the metering operator"),"  ")),Object(o.b)("h2",null,"Mapping to Personas"),Object(o.b)("p",null,"To summarize, the following lists the topics that you may want to consider for Day 2 Operations on Metering: "),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Persona"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"task"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"SRE"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Verify Prometheus is collecting data")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"SRE"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Enable the metering operator’s report")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"SRE, DevOps Engineer"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Capture and document the business requirement")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"DevOps Engineer"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Develop the metering report")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"DevOps Engineer"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Troubleshoot the metering operator")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"DevOps Engineer"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Uninstall the metering operator")))),Object(o.b)("h2",null,"Platform tasks"),Object(o.b)("a",{name:"platform-verify"}),Object(o.b)("h2",null,"Verify Prometheus is collecting data: ","[SRE]"),Object(o.b)("p",null,"Setting up metering is covered in the Application tasks section later in the chapter. Metering requires data, and for OpenShift, the data collection to generate report comes predominantly from the Prometheus that comes with OpenShift. You can only get a good metering report if the data are valid and comes regularly.  Therefore an important activity for Day 2 platform is to ensure that Prometheus is collecting data."),Object(o.b)("p",null,"Information about Prometheus can be found in the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../Monitoring"}),"Monitoring")," section."),Object(o.b)("a",{name:"platform-enable"}),Object(o.b)("h2",null,"Enable the metering operator’s report: ","[SRE]"),Object(o.b)("p",null,"The metering operator is not installed by default.  So if this activity has not been performed, you need to install the metering operator first."),Object(o.b)("p",null,"Once you have a good stream of metrics data from Prometheus, you need to enable the metering operator. "),Object(o.b)("p",null,"OpenShift Metering make use of the following 4 CRD (Custom Resource Definition)"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"MeteringConfig")," to contain the configuration option."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Reports")," specifies the ",Object(o.b)("em",{parentName:"li"},"ReportDataSources")," to use, when, and how often the ",Object(o.b)("em",{parentName:"li"},"ReportQueries")," to run."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"ReportDataSources")," specifies the database connection."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"ReportQueries")," specifies the queries to use.")),Object(o.b)("p",null,"Before you configure your metering, you need to ensure that you have enough compute capacity such as ",Object(o.b)("em",{parentName:"p"},"StorageClass")," and ",Object(o.b)("em",{parentName:"p"},"worker node")," to perform metering. You can find the detailed information in the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.openshift.com/container-platform/4.3/metering/metering-installing-metering.html#metering-install-prerequisites_installing-metering"}),"OpenShift Documentation"),"."),Object(o.b)("p",null,"Once you ascertain that you had the required compute capacity, you can perform the installation.  The installation steps are detailed in the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.openshift.com/container-platform/4.3/metering/metering-installing-metering.html"}),"OpenShift Documentation"),", here is the summary:"),Object(o.b)("p",null,"The following steps install the metering function."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Install the Metering Operator"),Object(o.b)("li",{parentName:"ul"},"Install the Metering Stack including creating the MeteringConfig CRD, configuring the persistent storage and configuring the hive meta store"),Object(o.b)("li",{parentName:"ul"},"Verify the installation")),Object(o.b)("p",null,"The following are the configuration options that may need to be considered on metering:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Resource Request and Limit  "),Object(o.b)("li",{parentName:"ul"},"Node Selector"),Object(o.b)("li",{parentName:"ul"},"Configuring the persistent storage"),Object(o.b)("li",{parentName:"ul"},"Configuring the hive metastore"),Object(o.b)("li",{parentName:"ul"},"Configuring the reporting-operator"),Object(o.b)("li",{parentName:"ul"},"Optional: Correlating Cluster usage to Billing Information")),Object(o.b)("p",null,"All the above information is well described in ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.openshift.com/container-platform/4.3/metering/configuring-metering/metering-about-configuring.html"}),"the OpenShift 4.3 Metering documentation")),Object(o.b)("h2",null,"Application tasks"),Object(o.b)("a",{name:"requirement"}),Object(o.b)("h2",null,"Capture and document the business requirement: ","[ SRE, DevOps Engineer ]"),Object(o.b)("p",null,"At the end of the day, the reason that you perform metering is to produce a report per the business requirement. OpenShift provides the ",Object(o.b)("inlineCode",{parentName:"p"},"metering operator"),".  The ",Object(o.b)("inlineCode",{parentName:"p"},"metering operator")," comes with the ",Object(o.b)("inlineCode",{parentName:"p"},"reporting operator"),".  The ",Object(o.b)("inlineCode",{parentName:"p"},"reporting operator")," comes with some metering queries and reports.  However, the business requirement might require reports in a certain format that is different from what is provided out of the box.  A lot of the Day 2 activities on metering will be to generate queries and reports to fulfill the business requirement."),Object(o.b)("p",null,"As part of the activities in fulfilling your business requirement, you need to verify that you can get the data from the source of data for your report.\nMetering focuses primarily on in-cluster metric data using Prometheus as a default data source. This enables users of metering to do reporting on pods, namespaces, and most other Kubernetes resources.  You might need to look at the Prometheus monitoring metrics first, which are discussed further in this repository ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../Monitoring"}),"Monitoring")," chapter."),Object(o.b)("p",null,"Once you identify the data, you put that into the configuration stored in the custom resource definition of the operator.  The operator will use this information to create tables and view in Presto, the database component of the metering operator.  The user then creates SQL queries to extract this data and create the required metering report."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"As in any software development activities, when you develop your report design, it is essential to document the business requirement, design decision, and the design of your queries and reports.")),Object(o.b)("a",{name:"report"}),Object(o.b)("h2",null,"Develop the metering report: ","[ DevOps Engineer ]"),Object(o.b)("p",null,"The first step in getting the metering report is to install and configure the metering operator if it is not installed yet.  See the Platform tasks for the activities.  It is recommended for you to generate the platform metering report first, as the required Prometheus data source has been preconfigured.  A good platform metering report ensures that the metering operator works using the default configuration."),Object(o.b)("p",null,"Once you verify that your metering operator works, you most likely will spend most on your day-2 activities on metering producing reports as per the business requirement."),Object(o.b)("p",null,"OpenShift comes with preconfigured ",Object(o.b)("em",{parentName:"p"},"ReportDataSources")," and ",Object(o.b)("em",{parentName:"p"},"ReportQueries")," that the user can start using.  ",Object(o.b)("em",{parentName:"p"},"Report")," CRD is used to define the schedule of the report run."),Object(o.b)("p",null,"The user can write a custom report, and an example of a custom report can be found in the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.openshift.com/container-platform/4.3/metering/metering-usage-examples.html"}),"documentation"),"."),Object(o.b)("a",{name:"troubleshooting"}),Object(o.b)("h2",null,"Troubleshoot the metering operator: ","[ DevOps Engineer ]"),Object(o.b)("p",null,"These are basic causes for metering not to work:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Not enough compute resources  "),Object(o.b)("li",{parentName:"ul"},"StorageClass is not configured"),Object(o.b)("li",{parentName:"ul"},"Secret not configured correctly")),Object(o.b)("p",null,"Some of the debugging steps that can be performed:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Reporting Operator Logs"),Object(o.b)("li",{parentName:"ul"},"Query Presto using presto command-line interface"),Object(o.b)("li",{parentName:"ul"},"Query Hive using beeline"),Object(o.b)("li",{parentName:"ul"},"Go through the Hive web UI and HDFS UI.  You first need to configure port-forwarding to expose the UI first."),Object(o.b)("li",{parentName:"ul"},"Access the Ansible Logs.  Metering uses Ansible, and Ansible logs might provide some information.")),Object(o.b)("p",null,"Please refer to the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.openshift.com/container-platform/4.3/metering/metering-troubleshooting-debugging.html"}),"Troubleshooting Guide")," for more information.  "),Object(o.b)("a",{name:"uninstall"}),Object(o.b)("h2",null,"Uninstall the metering operator: ","[ DevOps Engineer]"),Object(o.b)("p",null,"You can uninstall the metering operator by going to the web console as a cluster administrator, then select from the menu ",Object(o.b)("inlineCode",{parentName:"p"},"Operators > Installed Operators"),".  Find the metering operator and then choose ",Object(o.b)("inlineCode",{parentName:"p"},"Uninstall Operator")," from the action menu."),Object(o.b)("p",null,"Please refer to the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.openshift.com/container-platform/4.3/metering/metering-uninstall.html"}),"Uninstalling metering")," for more information.   "),Object(o.b)("h2",null,"Implementing Metering"),Object(o.b)("p",null,"The Metering Operator is the technology that works with the Kubernetes as well as the OpenShift cluster."),Object(o.b)("h2",null,"Kubernetes"),Object(o.b)("p",null,"The following are collection of links related to the Metering Operator."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://coreos.com/blog/introducing-operator-framework-metering"}),"Information from CoreOS documentation")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/operator-framework/operator-metering/blob/master/Documentation/metering-architecture.md"}),"Git pages on operator-metering")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/operator-framework/operator-metering/blob/master/Documentation/install-metering.md"}),"Git pages on operator-metering installation")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/operator-framework/operator-metering/blob/master/Documentation/metering-config.md"}),"Git pages on operator-metering configuration"),"   ")),Object(o.b)("h2",null,"OpenShift"),Object(o.b)("p",null,"The information we provided in the previous sections in this document is based on the OpenShift Metering feature.",Object(o.b)("br",{parentName:"p"}),"\n","The following is a link related to OpenShift metering."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.openshift.com/container-platform/4.3/metering/metering-about-metering.html"}),"OpenShift 4.3 documentation on Metering"),"   ")),Object(o.b)("h2",null,"On IBM Cloud (Managed OpenShift)"),Object(o.b)("p",null,"n/a   "),Object(o.b)("h2",null,"With IBM Cloud Pak for MCM"),Object(o.b)("p",null,"The following is a link related to IBM Cloud Pak for Multicloud Management Metering feature."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.ibm.com/support/knowledgecenter/SSFC4F_1.2.0/admin/metering_service_mcm.html"}),"IBM Cloud Pak for MCM metering"),"  ")),Object(o.b)("h2",null,"Others"),Object(o.b)("p",null,"n/a  "),Object(o.b)("h2",null,"Other consideration"),Object(o.b)("p",null,"n/a   "))}c.isMDXComponent=!0},BAC9:function(e,t,n){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,n){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,n){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-day-2-metering-index-mdx-f2acde5a38fa7360e748.js.map