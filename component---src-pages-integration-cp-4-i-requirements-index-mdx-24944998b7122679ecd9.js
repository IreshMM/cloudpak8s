(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("NmYn"),i=a.n(l),o=a("Wbzz"),b=a("Xrax"),c=a("k4MR"),s=a("TSYQ"),d=a.n(s),p=a("QH2O"),m=a.n(p),u=a("qKvR"),O=function(e){var t,a=e.title,n=e.theme,r=e.tabs,l=void 0===r?[]:r;return Object(u.b)("div",{className:d()(m.a.pageHeader,(t={},t[m.a.withTabs]=l.length,t[m.a.darkMode]="dark"===n,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:m.a.text},a)))))},j=a("BAC9"),g=function(e){var t=e.relativePagePath,a=e.repository,n=Object(o.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,l=r.baseUrl,i=r.subDirectory,b=l+"/edit/"+r.branch+i+"/src/pages"+t;return l?Object(u.b)("div",{className:"bx--row "+j.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:j.link,href:b},"Edit this page on GitHub"))):null},h=a("FCXl"),N=a("dI71"),f=a("I8xM"),y=function(e){function t(){return e.apply(this,arguments)||this}return Object(N.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],l=a.map((function(e){var t,a=i()(e,{lower:!0,strict:!0}),l=a===r,b=new RegExp(r+"/?(#.*)?$"),c=n.replace(b,a);return Object(u.b)("li",{key:e,className:d()((t={},t[f.selectedItem]=l,t),f.listItem)},Object(u.b)(o.Link,{className:f.link,to:""+c},e))}));return Object(u.b)("div",{className:f.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",{"aria-label":t},Object(u.b)("ul",{className:f.list},l))))))},t}(r.a.Component),w=a("MjG9"),v=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,l=t.frontmatter,s=void 0===l?{}:l,d=t.relativePagePath,p=t.titleType,m=s.tabs,j=s.title,N=s.theme,f=s.description,C=s.keywords,k=Object(v.a)().interiorTheme,x=Object(o.useStaticQuery)("2456312558").site.pathPrefix,I=x?n.pathname.replace(x,""):n.pathname,P=m?I.split("/").filter(Boolean).slice(-1)[0]||i()(m[0],{lower:!0}):"",T=N||k;return Object(u.b)(c.a,{tabs:m,homepage:!1,theme:T,pageTitle:j,pageDescription:f,pageKeywords:C,titleType:p},Object(u.b)(O,{title:r?Object(u.b)(r,null):j,label:"label",tabs:m,theme:T}),m&&Object(u.b)(y,{title:j,slug:I,tabs:m,currentTab:P}),Object(u.b)(w.a,{padded:!0},a,Object(u.b)(g,{relativePagePath:d})),Object(u.b)(h.a,{pageContext:t,location:n,slug:I,tabs:m,currentTab:P}),Object(u.b)(b.a,null))}},"9dlO":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return j}));var n=a("wx14"),r=a("zLVn"),l=(a("q1tI"),a("7ljp")),i=a("013z"),o=(a("qKvR"),{}),b=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(l.b)("div",t)}},c=b("AnchorLinks"),s=b("AnchorLink"),d=b("InlineNotification"),p=b("Tabs"),m=b("Tab"),u={_frontmatter:o},O=i.a;function j(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)(O,Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)(c,{mdxType:"AnchorLinks"},Object(l.b)(s,{mdxType:"AnchorLink"},"Files to download"),Object(l.b)(s,{mdxType:"AnchorLink"},"CLI configuration"),Object(l.b)(s,{mdxType:"AnchorLink"},"Workload Requirements"),Object(l.b)(s,{mdxType:"AnchorLink"},"OCP Cluster Configuration Best-Practices")),Object(l.b)("h2",null,"Files to download"),Object(l.b)("p",null,"You will need one of the following downloads to perform the Cloud Pak installation"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"CC644EN")," - IBM Cloud Pak For Integration 2020.1.1 On Openshift For Linux English"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"CC645EN")," - IBM Cloud Pak For Integration 2020.1.1 On Openshift For Linux English Online Installer"),Object(l.b)("li",{parentName:"ul"},"IBM Cloud Pak for Integration 2020.2.x there is nothing required to download.")),Object(l.b)(d,{mdxType:"InlineNotification"},Object(l.b)("p",null,"For offline / airgap installations please follow the instructions in the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter/en/SSGT7J_20.2/install/mirroring_operators.html"}),"Knowledge Center"),".  During the latest update of this document, the process for air-gap installation was not yet reliable.  We will update the playbook once the new procedure is documented.")),Object(l.b)("h2",null,"CLI configuration"),Object(l.b)(p,{mdxType:"Tabs"},Object(l.b)(m,{label:"v2020.1 and Earlier",mdxType:"Tab"},Object(l.b)("p",null,"The system you use to run the installation requires both Docker and the Open Container CLI.  Docker provides very intuitive instructions for installation.  The ",Object(l.b)("inlineCode",{parentName:"p"},"oc")," CLI code and installation instructions can be accessed ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.openshift.com/container-platform/4.3/cli_reference/openshift_cli/getting-started-cli.html"}),"here from RedHat OpenShift"),".")),Object(l.b)(m,{label:"v2020.2 and Newer",mdxType:"Tab"},Object(l.b)("p",null,"The system you use to run the installation no longer requires Docker and the Open Container CLI.  The ",Object(l.b)("inlineCode",{parentName:"p"},"oc")," CLI is convenient for certain steps during deployment.  The CLI code and installation instructions can be accessed ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.openshift.com/container-platform/4.3/cli_reference/openshift_cli/getting-started-cli.html"}),"here from RedHat OpenShift"),"."))),Object(l.b)("h2",null,"Workload Requirements"),Object(l.b)("p",null,"General cluster sizing guidance is provided lower down in this page.  Avoid installing minimal environments.  Keep in mind that a realistic cluster running the Cloud Pak for Integration will contain multiple workloads from the below chart.  Your cluster will likely host other Cloud Pak workload or be shared with other non-Cloud Pak workload.  Of course, licensing for Cloud Paks only covers the exact equivalent licenses for the underlying OCP.  You can find discussion from this section in the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter/SSGT7J_20.1/install/sysreqs.html"}),"Requirements Knowledge Center article")," and for the Cloud Pak for Integration (choose the correct version)."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Integration Capability"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"CPU"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Memory"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Disk space"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"td"},"Platform Navigator"),":  A component product that provides easy access to deployed capabilities and their UIs.  For versions prior to v2020.2 can be easily used to deploy Cloud Pak for Integrations capabilities"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),".25 cores"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"256 MB"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Not Required")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"td"},"Common Services"),":  Required by the base product.  This can increase dramatically with usage depending on the enabled management services"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"8 cores"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"32 GB"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"40 GB")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"td"},"API Lifecycle and Management"),":  This capability is provided by deploying IBM API Connect. For specific requirements regarding this capability, see the ",Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"https://www.ibm.com/support/knowledgecenter/SSMNED_2018/com.ibm.apic.install.doc/overview_apimgmt_requirements.html?view=kc"}),"IBM API Connect system requirements")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"12 cores"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"48 GB"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"550 GB")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"td"},"Queue Manager"),": This capability is provided by deploying IBM MQ. The values given are a general default assuming a single instance of this capability.  Generally, when sizing a larger modernization effort, the modernized workload will be roughly equivalent to the traditional workload.  For specific requirements see the ",Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"https://www.ibm.com/software/reports/compatibility/clarity-reports/report/html/softwareReqsForProduct?deliverableId=8360DD50895F11E5816C133BBD3A3812&osPlatforms=Linux"}),"IBM MQ system requirements")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1 core"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1 GB"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2 GB")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"td"},"Event Streams"),": This capability is provided by deploying IBM Event Streams. For specific requirements regarding this capability, see the ",Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"https://www.ibm.com/links?url=https%3A%2F%2Fibm.github.io%2Fevent-streams%2Finstalling%2Fprerequisites%2F"}),"IBM Event Streams system requirements")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"16.2 cores"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"25.2 GB"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1.5 GB")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"td"},"Application Integration"),": This capability is provided by deploying IBM App Connect.  The values given here are for default settings for a default flow example.  You should adjust the resource requirements for your flow after observing its behavior under usage.  To plan capacity for modernizing a large set of workload, assume that the modernize and traditional workload would use roughly the same amount of compute and memory.  App Connect workload does use a considerable amount of container storage.  For specific requirements regarding this capability, see the ",Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"https://www.ibm.com/software/reports/compatibility/clarity-reports/report/html/softwareReqsForProduct?deliverableId=9305DA803ED511E7BE8E09C6CE305F89&osPlatforms=Linux%7CWindows&duComponentIds=D002%7CS001&optionalCapIds=341%7C7%7C47%7C9%7C1%7C131%7C39%7C8%7C184%7C27%7C186%7C15%7C26"}),"IBM App Connect system requirements")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1 core"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"4 GB"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2.3 GB")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"td"},"High Speed File Transfer"),": This capability is provided by deploying IBM Aspera. For specific requirements regarding this capability, see the ",Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"https://www.ibm.com/links?url=http%3A%2F%2Fdownload.asperasoft.com%2Fdownload%2Fdocs%2Ffaspex%2F4.0.0%2Fadmin_linux%2Fwebhelp%2Fdita%2Finstallation_requirements.html"}),"IBM Aspera system requirements")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"4 cores"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"4 GB"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Workload Dependent")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"td"},"Asset Repository"),":  Optional asset management capability"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"4.25 cores"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"8.5 GB"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2 GB")))),Object(l.b)("p",null,"Most of the capabilities provided by the Cloud Pak for Integration have state and thus require ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.openshift.com/container-platform/4.3/storage/understanding-persistent-storage.html"}),"Persistent Storage"),".  Your persistent storage provider will depend largely on the cloud environment you are deploying to.  Each ",Object(l.b)("strong",{parentName:"p"},"public cloud")," provider has their own storage services that can (and should) be used for your workload’s persistent storage.  These providers will easily match to the requirements in the chart below.  Take time to understand fully each column."),Object(l.b)("p",null,"There currently are more decisions to make when the solution is deployed into ",Object(l.b)("strong",{parentName:"p"},"private (on-premise) infrastructure"),".  OpenShift now has the industry leading solution for providing container storage called Red Hat OpenShift Container Storage (OCS).  See ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.openshift.com/container-platform/4.3/storage/persistent_storage/persistent-storage-ocs.html"}),"this document")," for a detailed explanation.  This solution is based upon Rook / Ceph and runs via operator.  It can be used without license in your lower environments without support.  At the time of this article being written OCS licensing for support etc. ",Object(l.b)("strong",{parentName:"p"},"is not included with Cloud Pak licenses")," and must be purchased separately.  IBM Storage also has a hardware / software available for purchase to provide first-class persistent storage to your private cloud stateful containers.  Outside of these solutions using your enterprise NFS provides a decent option for providing ",Object(l.b)("strong",{parentName:"p"},"File")," storage and Rook / Ceph provide adequate support for most ",Object(l.b)("strong",{parentName:"p"},"Block Storage")," requirements.  For production workloads please consider the resilience of the persistent storage provider you chose.  In the near future OCS will be the preferred solution for production workload that require resilient on-premise storage."),Object(l.b)("p",null,"With this guidance in mind, use the following table to help make your persistent storage decisions and create the required ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.openshift.com/container-platform/4.3/storage/understanding-persistent-storage.html"}),"storage classes")," prior to deployment."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Integration Capability"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Storage Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Access Mode"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Performance"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"td"},"Common Services"),":  Alert Manager"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Block"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"RWO"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Minimum 4 IOPS/GB Recommended 20 GB")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"td"},"Common Services"),":  Elk Data Logging"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Block"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"RWO"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Minimum 4 IOPS/GB Recommended 30 GB")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"td"},"Common Services"),":  Prometheus (Monitoring)"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Block"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"RWO"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Minimum 4 IOPS/GB Recommended 20 GB")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"td"},"Common Services"),":  MongoDB (Default 3 instances)"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Block"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"RWO"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Minimum 4 IOPS/GB Recommended 20 GB (each instance)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"td"},"Platform Navigator"),": Not persistent storage required"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"N/A"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"N/A"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"N/A")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"td"},"API Lifecycle and Management")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Block"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"RWO"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Minimum 4 IOPS/GB Recommend 10 IOPS/GB")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"td"},"Queue Manager")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"File"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"RWX"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"https://www.ibm.com/support/pages/testing-statement-ibm-mq-multi-instance-queue-manager-file-systems"}),"Affected by other limits applied to the file system"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"td"},"Event Messaging"),": See the ",Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"https://www.ibm.com/links?url=https%3A%2F%2Fibm.github.io%2Fevent-streams%2Finstalling%2Fprerequisites%2F%23file-systems-for-storage"}),"IBM Event Streams storage documentation")," There are three core components with their own requirements.  Kafka and Zookeeper will require Block for non-ephemeral deployments."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"File/Block"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"RWO"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"https://www.ibm.com/links?url=https%3A%2F%2Fibm.github.io%2Fevent-streams%2Finstalling%2Fprerequisites%2F%23file-systems-for-storage"}),"Notes"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"td"},"Application Integration"),": When deployed without including MQ capability no persistent volume is required.  This is the recommendation.  Whenever possible separate MQ into its own pods.  If MQ is included, the values here apply"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"File"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"RWX"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"https://www.ibm.com/support/pages/testing-statement-ibm-mq-multi-instance-queue-manager-file-systems"}),"Affected by other limits applied to the file system"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"td"},"High Speed File Transfer")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"File"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"RWX"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Not Specified")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"td"},"Asset Repository")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"File & Block"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"RWX + RWO"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Not Specified")))),Object(l.b)(d,{mdxType:"InlineNotification"},Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"A Couple Notes:")," RWX refers read-write-many meaning multiple containers can read and write to the storage volume simultaneously.  RWO refers to read-write-once stating that only a single container can access the storage simultaneously.  Finally, keep in mind that storage providers for public and private clouds are constantly evolving and you should be prepared to adjust your strategy.  Do not consider your choices for today to be the best decision for long term.  It is likely that improved options will make themselves available.")),Object(l.b)("h2",null,"OCP Cluster Configuration Best-Practices"),Object(l.b)("p",null,"This playbook contains a section that offers general OpenShift Cloud Platform configuration and installation procedures.  For environments that require resilience, the below is the best practice recommendation for hosting Cloud Pak for Integration on OCP 4.2 or 4.3.  You can configure smaller environments, but this is the getting-started suggestion.  Also, this cluster has a large enough control plane to grow in order to support a larger number of compute nodes for hosting additional workload."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Node"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Nodes"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"vCPU"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"RAM"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Storage"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"td"},"Control Plane Nodes (Masters)")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"3"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"8 vCPU"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"32 GB"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"300 GB")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"td"},"Compute Nodes (Workers)")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"5"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"8 vCPU"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"32 GB"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"200 GB")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"td"},"Compute & Storage Nodes"),": For use on primarily on-premise cluster to host OCS or Rook / Ceph storage.  These can run both storage and general workload."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"3"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"8 vCPU"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"32 GB"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"200 GB & 500 GB 2nd Disk")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"td"},"Install Node"),": ",Object(l.b)("strong",{parentName:"td"},"This component is no longer used for v2020.2 and newer.")," For offline installations of the Cloud Pak. See your specific OCP version and deployment mode for specifics.  Note that the offline Pak installation for Integration requires this larger disk."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"4 vCPU"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"16 GB"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"200 GB")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"td"},"Load Balancer(s)"),":  If you do not have enterprise load balancing available you can optionally install HA Proxy load balancers for managing internal and external load balancing.  Consider the resiliency you require.  You can accomplish this using a single load balancer, but your architecture may require further diligence."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1 or 2"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"4 vCPU"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"8 GB"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"100 GB")))))}j.isMDXComponent=!0},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-integration-cp-4-i-requirements-index-mdx-24944998b7122679ecd9.js.map