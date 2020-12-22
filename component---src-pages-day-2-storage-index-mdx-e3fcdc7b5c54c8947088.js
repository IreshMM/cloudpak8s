(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),s=a("NmYn"),i=a.n(s),o=a("Wbzz"),l=a("Xrax"),b=a("k4MR"),c=a("TSYQ"),p=a.n(c),m=a("QH2O"),d=a.n(m),u=a("qKvR"),g=function(e){var t,a=e.title,n=e.theme,r=e.tabs,s=void 0===r?[]:r;return Object(u.b)("div",{className:p()(d.a.pageHeader,(t={},t[d.a.withTabs]=s.length,t[d.a.darkMode]="dark"===n,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:d.a.text},a)))))},h=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,n=Object(o.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,s=r.baseUrl,i=r.subDirectory,l=s+"/edit/"+r.branch+i+"/src/pages"+t;return s?Object(u.b)("div",{className:"bx--row "+h.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:h.link,href:l},"Edit this page on GitHub"))):null},O=a("FCXl"),f=a("dI71"),y=a("I8xM"),N=function(e){function t(){return e.apply(this,arguments)||this}return Object(f.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],s=a.map((function(e){var t,a=i()(e,{lower:!0,strict:!0}),s=a===r,l=new RegExp(r+"/?(#.*)?$"),b=n.replace(l,a);return Object(u.b)("li",{key:e,className:p()((t={},t[y.selectedItem]=s,t),y.listItem)},Object(u.b)(o.Link,{className:y.link,to:""+b},e))}));return Object(u.b)("div",{className:y.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",{"aria-label":t},Object(u.b)("ul",{className:y.list},s))))))},t}(r.a.Component),v=a("MjG9"),A=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,s=t.frontmatter,c=void 0===s?{}:s,p=t.relativePagePath,m=t.titleType,d=c.tabs,h=c.title,f=c.theme,y=c.description,w=c.keywords,S=Object(A.a)().interiorTheme,P=Object(o.useStaticQuery)("2456312558").site.pathPrefix,C=P?n.pathname.replace(P,""):n.pathname,k=d?C.split("/").filter(Boolean).slice(-1)[0]||i()(d[0],{lower:!0}):"",x=f||S;return Object(u.b)(b.a,{tabs:d,homepage:!1,theme:x,pageTitle:h,pageDescription:y,pageKeywords:w,titleType:m},Object(u.b)(g,{title:r?Object(u.b)(r,null):h,label:"label",tabs:d,theme:x}),d&&Object(u.b)(N,{title:h,slug:C,tabs:d,currentTab:k}),Object(u.b)(v.a,{padded:!0},a,Object(u.b)(j,{relativePagePath:p})),Object(u.b)(O.a,{pageContext:t,location:n,slug:C,tabs:d,currentTab:k}),Object(u.b)(l.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},d6YU:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return c}));var n=a("wx14"),r=a("zLVn"),s=(a("q1tI"),a("7ljp")),i=a("013z"),o=(a("qKvR"),{}),l={_frontmatter:o},b=i.a;function c(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(s.b)(b,Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h2",null,"Storage Overview"),Object(s.b)("p",null,"OpenShift Container Platform uses the kubernetes Persistent Volume (PV) framework that abstracts details of how storage is provided from how it is consumed. This is mainly done by two kubernetes API resources: PersistentVolumes and PersistentVolume Claims. "),Object(s.b)("p",null,"Persistent Volumes (PV) are storage units that have been provisioned by an administrator or dynamically provisioned using Storage Classes. They are independent of any single pod, breaking them free from the ephemeral life cycle of pods. At its core, a volume is just a directory, possibly with some data in it, which is accessible to the containers in a pod. How that directory comes to be, the medium that backs it, and the contents of it are determined by the particular volume type used."),Object(s.b)("p",null,"Persistent Volume Claims (PVC), on the other hand, are requests for the storage, i.e. PVs. Developers can use Persistent Volume Claims (PVCs) to request PV resources without having specific knowledge of the underlying storage infrastructure."),Object(s.b)("p",null,"There are two ways of dealing with kubernetes storage: static or dynamic which is more commonly used."),Object(s.b)("p",null,"With static provisioning, administrators provision PVs that they think pods might require before the actual requests are made, and these PVs are manually bound to specific pods with explicit PVCs."),Object(s.b)("p",null,"Dynamic provisioning is done with Storage Classes. Cluster administrators do not need to manually create the PVs beforehand. They instead create multiple profiles of storage, just like templates. When a developer makes a PVC, depending on the requirements of the request, one of these storage classes is used at the time of the request in order to dynamically provision the PV."),Object(s.b)("p",null,"The interaction between PVs and PVCs have the following lifecycle:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.openshift.com/container-platform/4.3/storage/understanding-persistent-storage.html#provisioning_understanding-persistent-storage"}),"Provision storage")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.openshift.com/container-platform/4.3/storage/understanding-persistent-storage.html#binding_understanding-persistent-storage"}),"Bind claims")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.openshift.com/container-platform/4.3/storage/understanding-persistent-storage.html#using-pods_understanding-persistent-storage"}),"Use Pods and claimed PVs")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.openshift.com/container-platform/4.3/storage/understanding-persistent-storage.html#pvcprotection_understanding-persistent-storage"}),"Storage Object in Use Protection")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.openshift.com/container-platform/4.3/storage/understanding-persistent-storage.html#releasing_understanding-persistent-storage"}),"Release volumes")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.openshift.com/container-platform/4.3/storage/understanding-persistent-storage.html#reclaiming_understanding-persistent-storage"}),"Reclaim volumes"))),Object(s.b)("p",null,"OpenShift Container Platform 4.3 supports the following PersistentVolume plug-ins:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"AWS Elastic Block Store (EBS)"),Object(s.b)("li",{parentName:"ul"},"Azure Disk"),Object(s.b)("li",{parentName:"ul"},"Azure File"),Object(s.b)("li",{parentName:"ul"},"Cinder"),Object(s.b)("li",{parentName:"ul"},"Fibre Channel"),Object(s.b)("li",{parentName:"ul"},"GCE Persistent Disk"),Object(s.b)("li",{parentName:"ul"},"HostPath"),Object(s.b)("li",{parentName:"ul"},"iSCSI"),Object(s.b)("li",{parentName:"ul"},"Local volume"),Object(s.b)("li",{parentName:"ul"},"NFS"),Object(s.b)("li",{parentName:"ul"},"Red Hat OpenShift Container Storage"),Object(s.b)("li",{parentName:"ul"},"VMware vSphere ")),Object(s.b)("h2",null,"Day 1 Platform"),Object(s.b)("p",null,"The Storage type used within OpenShift cluster is determined by the place where you decided to deploy your cluster (on-prem or cloud provider like IBM Cloud, AWS, Google Cloud, Azure) and by specific requirements of the workloads running on the cluster(s) like speed/iops or type like block, file or object storage. RedHat OpenShift 4.3 supports several ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.openshift.com/container-platform/4.3/storage/understanding-persistent-storage.html#types-of-persistent-volumes_understanding-persistent-storage"}),"types")," of storage and some of them are backed up by networked storage system such as EBS, NFS or Ceph and other are locally attached storage like Local Volume or HostPath.\nThe storage type used by the cluster and initial definition of storage classes should be part of the design and implementation phases (Day 0 and Day 1)."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Day 1 Platform tasks for Storage:")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Determine the initial storage requirements"),Object(s.b)("li",{parentName:"ul"},"Define the initial set of StorageClass resources  ")),Object(s.b)("h2",null,"Day 2 Platform"),Object(s.b)("p",null,"The following Day 2 Operations tasks for OpenShift platform are related to storage:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"#Adding-a-new-StorageClass"}),"Adding a new StorageClass")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"#Changing-a-default-StorageClass"}),"Changing a default StorageClass")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"#Provisioning-Persistent-Volumes"}),"Provisioning Persistent Volumes"),Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"#Static-Provisioning"}),"Static Provisioning")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"#Dynamic-Provisioning"}),"Dynamic Provisioning")))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"#Storage-Monitoring"}),"Storage Monitoring")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.openshift.com/container-platform/4.3/storage/expanding-persistent-volumes.html"}),"Expanding persistent volumes")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"#Persistent-Volume-backup"}),"Persistent Volume backup"))),Object(s.b)("h2",null,"Day 1 Application"),Object(s.b)("p",null,"Without storing data in a persistent volume, the file system of a container is ephemeral. When a container restarts, the file system is reset to whatever the file system state is in the container’s image and files not stored in a persistent volume don’t survive the restart."),Object(s.b)("p",null,"Enterprise application workloads frequently need a sustainable and supportable way to store data and objects in flight or as output from your applications, while taking advantage of the portability, scalability, and recoverability of containers. Instead of fighting the natural tendency of containers to be stateless and lightweight, the pattern looks to augment Kubernetes to facilitate the behaviors we want."),Object(s.b)("p",null,"There are many types of storage depending on application requirements: "),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Block storage: (ex. Elastic Block Store (EBS))"),Object(s.b)("li",{parentName:"ul"},"File storage: (ex. Elastic File System (EFS))"),Object(s.b)("li",{parentName:"ul"},"Object storage:  (ex. Simple Storage Service (S3))")),Object(s.b)("p",null,"Each of these offerings has individual performance characteristics, pros, and cons. You must align your application and workload with the proper type of storage for its needs. As part of the Day 0 and Day 1 you should also estimate the initial storage space needed for application workload."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Day 1 Application tasks for Storage:")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Estimate the initial storage space needed for application workload"),Object(s.b)("li",{parentName:"ul"},"Determine the storage type requirements for applications  ")),Object(s.b)("h2",null,"Day 2 Application"),Object(s.b)("p",null,"The following Day 2 Operations tasks for OpenShift applications are related to storage:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"#Setting-storage-quota-per-project--SRE-DevOps"}),"Setting storage quota per project")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.openshift.com/container-platform/4.3/storage/expanding-persistent-volumes.html"}),"Expanding Persistent Volumes")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"#Application-storage-monitoring--SRE-DevOps"}),"Application Storage Monitoring"))),Object(s.b)("h2",null,"Mapping to Personas"),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Persona"),Object(s.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"task"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"SRE, Storage Administrator"),Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Adding a new StorageClass")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"SRE, Storage Administrator"),Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Changing a default StorageClass")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"SRE, Storage Administrator"),Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Static Provisioning")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"SRE, Storage Administrator"),Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Backing up Persistent Volumes")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"SRE, Storage Administrator"),Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Expanding Persistent Volumes")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"SRE, Storage Administrator"),Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Setting storage quota per project")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"SRE, Storage Administrator"),Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Storage Monitoring")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"SRE, DevOps Engineer"),Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Application Storage Monitoring")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DevOps Engineer"),Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Dynamic Provisioning")))),Object(s.b)("h2",null,"Day 2 Operations Tasks for Storage"),Object(s.b)("a",{name:"Adding-a-new-StorageClass"}),Object(s.b)("h2",null,"Adding a new StorageClass: ","[ SRE ]"),Object(s.b)("p",null,"The ",Object(s.b)("inlineCode",{parentName:"p"},"StorageClass")," resource object describes and classifies storage that can be requested, as well as provides a means for passing parameters for dynamically provisioned storage on demand.  StorageClass objects can also serve as a management mechanism for controlling different levels of storage and access to the storage. SREs or Storage Administrators (storage-admin) define and create the StorageClass objects that users can request without needing any intimate knowledge about the underlying storage volume sources.\nStorageClass objects are a globally scoped object and must be created by ",Object(s.b)("inlineCode",{parentName:"p"},"cluster-admin")," or ",Object(s.b)("inlineCode",{parentName:"p"},"storage-admin")," users.\n",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.openshift.com/container-platform/4.3/storage/dynamic-provisioning.html#defining-storage-classes_dynamic-provisioning"}),"OpenShift 4.3 documentation specifies how to define StorageClass objects for various types of supported storage"),".  "),Object(s.b)("a",{name:"Changing-a-default-StorageClass"}),Object(s.b)("h2",null,"Changing a default StorageClass: ","[ SRE ]"),Object(s.b)("p",null,"The default StorageClass is used to dynamically provision storage for PersistentVolumeClaims that do not require any specific storage class. A new StorageClass can be marked as a new default by adding the following annotation:"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{}),'oc patch storageclass <your-class-name> -p \'{"metadata": {"annotations":{"storageclass.kubernetes.io/is-default-class":"true"}}}\'\n')),Object(s.b)("h2",null,"Provisioning Persistent Volumes"),Object(s.b)("p",null,"There are two ways PVs may be provisioned: statically or dynamically."),Object(s.b)("a",{name:"Static-Provisioning"}),Object(s.b)("ul",null),Object(s.b)("h3",null,"Static Provisioning: ","[ SRE ]"),Object(s.b)("p",null,"A cluster administrator creates a number of PVs. They carry the details of the real storage, which is available for use by cluster users. They exist in the Kubernetes API and are available for consumption.\nStatic provisioning is a feature that is native to Kubernetes and that allows cluster administrators to make existing storage devices available to a cluster. As a cluster administrator, you must know the details of the storage device, its supported configurations, and mount options."),Object(s.b)("p",null,"To make existing storage available to a cluster user, you must manually create the storage device, a PV, and a PVC."),Object(s.b)("p",null,"The following image shows how to statically provision file storage in a cluster. This sample flow works similar with other storage types, such as block storage."),Object(s.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"65.97222222222221%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAABYlAAAWJQFJUiTwAAACmklEQVQ4y22T3UsUURjG9y/qqrvAougyqOs+CLqpiAqysDIrQZEuKvowSdIUTYxUtL0oslLJiDJQ6Xtz/VrdXXWddWec2TnnzPw6M7tOSr3w8sKc933OM8/znphSCt/3oyxKgfQ8hPKRPhgFi9n5FJbjovT5Rgg9x6a5jYwFgJtjxfS42ZOlvmuBhu40dZ1zYb3WniI+JvmZTNP/ejzs9TddsBERoCuC6jOfU5x5ZFL5uMDZh1lO3vlNZavB8QcGrcNwr+MNe4/dDmeU8v5lKGUJcC61hmXaTC8rXk0oCg4srEimFy1WLUhmPV5MQuOTYfafagxnPO8/gK4rsdZdCmYRJQQTUxbjU8WAM6aRJZed01TMgA9vvsHdjqEIUJUBS1GqMdt2KBZFpMF8TvLgpaD/k6T3Q1AVzz8r2t669I1BU9cQ+07ejwADICE9jREw1gwNw8A0zegmR0pmlz0SaZ/EomRyymYyWeTHgkLoluanIxw43RRpGMTMosHg5BeKwiHW3NxMPB6PaCtfRfSDahgmBaMQ/UFLz3uOXny8xdlV3ZNMzWA7NrFE4jeZTBrTEjh2kdy6R4PGrxuA3o8+Q1q3h2+hqtsjrk3pHNCAl9rKQDZCb8da3mApu0w6nSFW0kI7mjHJGxa/0oKKWsnBuy75ghZG5mkfUWyrElT3QFvvKIerWkPARDJHfs1Bag1tp+RDTGhnXSHDj1pWrZ1g/y2fI42SwXGTsR85bgwIdtf71D/XgH2jHLrQEg4HM0EGOxwYEkgULbZXlm1q2WdPrcnOGoMd1QYVV/Lsqllj+/klrvZB67N37Dtxv7yHW19K4OtfwPLhQt7lem+ecx0ZLnevhHmhK0NlZ462UYevsylejX0PbfP/85b/AFGWr7iRfDjuAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(s.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"2020 02 26 11 16 12",title:"2020 02 26 11 16 12",src:"/static/9abb97080ee810fc112bfded06b606f5/3cbba/2020-02-26-11-16-12.png",srcSet:["/static/9abb97080ee810fc112bfded06b606f5/7fc1e/2020-02-26-11-16-12.png 288w","/static/9abb97080ee810fc112bfded06b606f5/a5df1/2020-02-26-11-16-12.png 576w","/static/9abb97080ee810fc112bfded06b606f5/3cbba/2020-02-26-11-16-12.png 1152w","/static/9abb97080ee810fc112bfded06b606f5/0b124/2020-02-26-11-16-12.png 1728w","/static/9abb97080ee810fc112bfded06b606f5/f5b13/2020-02-26-11-16-12.png 2228w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"The cluster admin gathers all the details about the existing storage device and creates a persistent volume (PV) in the cluster."),Object(s.b)("li",{parentName:"ol"},"Based on the storage details in the PV, the storage plug-in connects the PV with the storage device."),Object(s.b)("li",{parentName:"ol"},"The cluster admin or a developer creates a PVC. Because the PV and the storage device already exist, no storage class is specified in the PVC."),Object(s.b)("li",{parentName:"ol"},"After the PVC is created, the storage plug-in tries to match the PVC to an existing PV. When PVC and PV match, the status of the PVC and the PV changes to ",Object(s.b)("inlineCode",{parentName:"li"},"Bound"),". You can now use the PVC to mount persistent storage to your app. When you delete the PVC, the PV and the physical storage instance are not removed. You must remove the PVC, PV, and the physical storage instance separately.")),Object(s.b)("p",null,"The process described above can be automated and partially managed by the OpenShift Operators. For example provisioning of ",Object(s.b)("inlineCode",{parentName:"p"},"Local Volume")," storage is managed by the ",Object(s.b)("inlineCode",{parentName:"p"},"Local Storage Operator"),". The Local Storage Operator automatically creates Persistent Volumes on local disk devices attached to Nodes and StorageClass that can be used during definition of Persistent Volume Claims. When PVs are ready, the SRE or DevOps Engineer can statically create a PVC using StorageClass for Local Volume Storage. ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"./Local/"}),"More details about Local Volume storage with practical examples"),".  "),Object(s.b)("a",{name:"Dynamic-Provisioning"}),Object(s.b)("h3",null,"Dynamic Provisioning: ","[ DevOps Engineer ]"),Object(s.b)("p",null,"Dynamic volume provisioning allows storage volumes to be created on-demand. The dynamic provisioning feature eliminates the need for cluster administrators to pre-provision storage. Instead, it automatically provisions storage when it is requested by OpenShift cluster users like developers. The implementation of dynamic volume provisioning is based on the API object ",Object(s.b)("inlineCode",{parentName:"p"},"StorageClass"),". ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"#Adding-a-new-StorageClass"}),"To enable dynamic provisioning, a cluster administrator needs to pre-create one or more StorageClass objects for users"),".\nCluster Admins, SREs or users request dynamically provisioned storage by including a storage class in their ",Object(s.b)("inlineCode",{parentName:"p"},"PersistentVolumeClaim"),". Dynamic provisioning can be enabled on a cluster such that all claims are dynamically provisioned if no storage class is specified. A cluster administrator can enable this behavior by ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"#Changing-a-default-StorageClass"}),"marking one StorageClass object as default"),".  "),Object(s.b)("a",{name:"Storage-Monitoring"}),Object(s.b)("h2",null,"Storage Monitoring: ","[ SRE ]"),Object(s.b)("p",null,"Information about current PVC utilization is provided by both ",Object(s.b)("inlineCode",{parentName:"p"},"kubelet")," and ",Object(s.b)("inlineCode",{parentName:"p"},"kube_state_metrics")," in the form of Prometheus metrics.\nSREs should monitor the following metrics related to PVC utilization and PV status."),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Resource"),Object(s.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Metrics"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PVC"),Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"kubelet_volume_stats_available_bytes")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PVC"),Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"kubelet_volume_stats_capacity_bytes")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PVC"),Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"kubelet_volume_stats_used_bytes")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PVC"),Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"kubelet_volume_stats_inodes_used")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PVC"),Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"kubelet_volume_stats_inodes_free")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PVC"),Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"kubelet_volume_stats_inodes")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PV"),Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"kube_persistentvolume_status_phase")))),Object(s.b)("p",null,"The following PromQL query calculates the percentage utilization of PVCs:"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{}),"kubelet_volume_stats_used_bytes/kubelet_volume_stats_capacity_bytes*100\n")),Object(s.b)("p",null,"Here is a sample screen shot of the Prometheus console with results of the query listed above."),Object(s.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"43.75%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAABYlAAAWJQFJUiTwAAABPUlEQVQoz22SS24CMQyGcxTOgRhA4gBlW64wDJQ9N6HHoBfpFaquK3Um78dfOyRhFh30yfZvx3FCxOe3hVESUmmEEAoRMSWkGbGQZjZEqiP4c87BWgvx9UMNvCfBPxeXQu+rhmdzWlypX/U5L4Kz0FpDKdV2Yd8Yi0nKrHFjP7dcZ0zO1TWGYh5CyGmCYsbfhyU0IccRmhqqsebHllMlL0v8qBvzhoK78kFiinR3nnYJNDppKTQ/FuZ+jVP5ZY0ndDSus4ZGVv+itSQrSywbrD+ZMjyQMNyM7yDjoOnuKlmb+6WmWk8vouLouPxCxPV6Rd/3OJ/PmdPphIFo/jCgPx5bnnNvlwteDwfcP+7tyXCzfOT9/gXL5RKbzQbdaoXtdov1ep1jtl3XYVX0qu12OywWC7zfbrkh/xn12fwBxDSG2n6QozAAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(s.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"2020 02 26 19 29 14",title:"2020 02 26 19 29 14",src:"/static/0216d255973574ad768df74f40d52991/3cbba/2020-02-26-19-29-14.png",srcSet:["/static/0216d255973574ad768df74f40d52991/7fc1e/2020-02-26-19-29-14.png 288w","/static/0216d255973574ad768df74f40d52991/a5df1/2020-02-26-19-29-14.png 576w","/static/0216d255973574ad768df74f40d52991/3cbba/2020-02-26-19-29-14.png 1152w","/static/0216d255973574ad768df74f40d52991/0b124/2020-02-26-19-29-14.png 1728w","/static/0216d255973574ad768df74f40d52991/4ea69/2020-02-26-19-29-14.png 2304w","/static/0216d255973574ad768df74f40d52991/f9633/2020-02-26-19-29-14.png 2832w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(s.b)("p",null,"Alerts related to storage, predefined in OpenShift:"),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Alert"),Object(s.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Rule"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"KubePersistentVolumeErrors"),Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(s.b)("inlineCode",{parentName:"td"},'kube_persistentvolume_status_phase{job="kube-state-metrics",namespace=~"(openshift-.*\\|kube-.*\\|default\\|logging)",phase=~"Failed\\|Pending"} > 0'))),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"KubePersistentVolumeFullInFourDays"),Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(s.b)("inlineCode",{parentName:"td"},'(kubelet_volume_stats_available_bytes{job="kubelet",namespace=~"(openshift-.*\\|kube-.*\\|default\\|logging)"} / kubelet_volume_stats_capacity_bytes{job="kubelet",namespace=~"(openshift-.*\\|kube-.*\\|default\\|logging)"}) < 0.15 and predict_linear(kubelet_volume_stats_available_bytes{job="kubelet",namespace=~"(openshift-.*\\|kube-.*\\|default\\|logging)"}[6h], 4 * 24 * 3600) < 0'))),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"KubePersistentVolumeUsageCritical"),Object(s.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(s.b)("inlineCode",{parentName:"td"},'kubelet_volume_stats_available_bytes{job="kubelet",namespace=~"(openshift-.*\\|kube-.*\\|default\\|logging)"} / kubelet_volume_stats_capacity_bytes{job="kubelet",namespace=~"(openshift-.*\\|kube-.*\\|default\\|logging)"} < 0.03'))))),Object(s.b)("p",null,"Particular storage solutions also may provide additional monitoring metrics and dashboards. More information about ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/rook/rook/blob/master/Documentation/ceph-monitoring.md"}),"Rook Ceph monitoring"),". Example Rook Ceph Cluster Grafana dashboard is shown below.  "),Object(s.b)("p",null,Object(s.b)("span",Object(n.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"51.73611111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB8ElEQVQoz0VTSY7UQBD0I0Bju/Zybbbb7nVWzcCIA4eBC29ACPEEPsC3g3C1EIdQLlWZFZFpN8oO0Mai7QXaTqAXCkKpa9wrdEIzLyuENOiYu+G9Ld/x7k3bMydZp6vfbM2GS4B1bNw5+BDhVYDqE+zyiHB4gSoXmOkOl9evGG9fIdIRpw9vOH/8Aj3s4JJH2UUY7dA4G+BGD/dNwxwNtHBwb/RfHaSboPMC4Qr9wsIFcpggLB8LPIszeuVhvEPIEYLsG2cSzC1Z/XHQn8lSZ/jfDvb7AOlXsjyyyQ4yzJiXAyybdnwoTwvStEenA8KQMM/7Oq5motRnqfH0TuGFM3pSEs/vJeaWbK2DEqZK0YTkuZIW1jCvNlg4x/Hoqy+VQXNP/T+XDj9WYrO7Dr/WFp9Gi3kdUUqpyJsdC1LKjDPmMSOEhFgREWNic48m54R1XzBzqLsl4XCacbpdUaaRxRGJs9lsjJFNM9I4sdE1N/hADIjbIxOXw7gxXErPRbStrug6g76nLBcpxTPWEJTdE1WmGaq0Tb5U271Q5Wrj+blZNIUMDmS4X4mlYCXORzKecs1tZ+fTiN1MdqkgxBHex4oQcoVnU+e5XJJrping6aHg/q7gkfbh/mq3+J+/4XLOMHUZXJL1sPwhDFn9x3VpfwG/ih7HecTctAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(s.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"2020 02 27 09 23 25",title:"2020 02 27 09 23 25",src:"/static/8fa64a547c354afc0dfdb7140f861f43/3cbba/2020-02-27-09-23-25.png",srcSet:["/static/8fa64a547c354afc0dfdb7140f861f43/7fc1e/2020-02-27-09-23-25.png 288w","/static/8fa64a547c354afc0dfdb7140f861f43/a5df1/2020-02-27-09-23-25.png 576w","/static/8fa64a547c354afc0dfdb7140f861f43/3cbba/2020-02-27-09-23-25.png 1152w","/static/8fa64a547c354afc0dfdb7140f861f43/0b124/2020-02-27-09-23-25.png 1728w","/static/8fa64a547c354afc0dfdb7140f861f43/e957c/2020-02-27-09-23-25.png 1920w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),"    "),Object(s.b)("a",{name:"Persistent-Volume-backup"}),Object(s.b)("h2",null,"Persistent Volume backup ","[ SRE ]"),Object(s.b)("p",null,"OpenShift does not provide a Persistent Volume backup tooling. One of the backup options is to use third party tools ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://velero.io"}),"Velero")," or ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://stash.run/"}),"Stash"),".",Object(s.b)("br",{parentName:"p"}),"\n","Another option may be building a custom solution like in the following example: ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://blog.openshift.com/how-to-backup-clone-and-migrate-persistent-volume-claims-on-openshift/"}),"How to backup, clone and migrate Persistent Volume Claims on OpenShift"),"."),Object(s.b)("a",{name:"Setting-storage-quota-per-project--SRE-DevOps"}),Object(s.b)("h2",null,"Setting storage quota per project ","[ SRE, DevOps Engineer ]"),Object(s.b)("p",null,"A resource quota, defined by a ResourceQuota object, provides constraints that limit aggregate resource consumption per project. It can limit the quantity of objects that can be created in a project by type, as well as the total amount of compute resources and storage that may be consumed by resources in that project."),Object(s.b)("p",null,"Example storage quota for a given project:"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),'apiVersion: v1\nkind: ResourceQuota\nmetadata:\n  name: storage-consumption\nspec:\n  hard:\n    persistentvolumeclaims: "10" \n    requests.storage: "50Gi" \n    gold.storageclass.storage.k8s.io/requests.storage: "10Gi" \n    silver.storageclass.storage.k8s.io/requests.storage: "20Gi" \n    silver.storageclass.storage.k8s.io/persistentvolumeclaims: "5" \n')),Object(s.b)("p",null,"After a resource quota for a project is first created, the project restricts the ability to create any new resources that may violate a quota constraint until it has calculated updated usage statistics.\n",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.openshift.com/container-platform/4.3/applications/quotas/quotas-setting-per-project.html"}),"More information about OpenShift project quotas"),"."),Object(s.b)("a",{name:"Application-storage-monitoring--SRE-DevOps"}),Object(s.b)("h2",null,"Application storage monitoring ","[ SRE, DevOps Engineer]"),Object(s.b)("p",null,"The storage space for specific projects and applications is assigned via specific ",Object(s.b)("inlineCode",{parentName:"p"},"PersistentVolumeClaims")," and can be monitored using OpenShift platform metrics described in ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"#Storage-Monitoring"}),"Storage Monitoring"),". Mentioned metrics like ",Object(s.b)("inlineCode",{parentName:"p"},"kubelet_volume_stats_used_bytes")," can be filtered/aggregated by namespace name or PVC name. For example the following query returns total PVC storage usage in GB for all ",Object(s.b)("inlineCode",{parentName:"p"},"humio-data.*")," PVCs in the project ",Object(s.b)("inlineCode",{parentName:"p"},"humio"),":"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{}),'sum(kubelet_volume_stats_used_bytes{namespace="humio", persistentvolumeclaim=~"humio-data.*"}/1024/1024/1024)\n')),Object(s.b)("h2",null,"Storage configuration examples"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"ibmcloud"}),"IBM Cloud")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"./Local/"}),"Local Volumes")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"ceph-csi"}),"Ceph Block Storage via Container Storage Interface")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"vmware"}),"VMware vSphere")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"openshift-container-storage"}),"OpenShift Container Storage"))))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-day-2-storage-index-mdx-e3fcdc7b5c54c8947088.js.map