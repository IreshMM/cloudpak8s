(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),r=a("NmYn"),s=a.n(r),i=a("Wbzz"),c=a("Xrax"),p=a("k4MR"),l=a("TSYQ"),b=a.n(l),u=a("QH2O"),m=a.n(u),d=a("qKvR"),h=function(e){var t,a=e.title,n=e.theme,o=e.tabs,r=void 0===o?[]:o;return Object(d.b)("div",{className:b()(m.a.pageHeader,(t={},t[m.a.withTabs]=r.length,t[m.a.darkMode]="dark"===n,t))},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12"},Object(d.b)("h1",{id:"page-title",className:m.a.text},a)))))},g=a("BAC9"),f=function(e){var t=e.relativePagePath,a=e.repository,n=Object(i.useStaticQuery)("1364590287").site.siteMetadata.repository,o=a||n,r=o.baseUrl,s=o.subDirectory,c=r+"/edit/"+o.branch+s+"/src/pages"+t;return r?Object(d.b)("div",{className:"bx--row "+g.row},Object(d.b)("div",{className:"bx--col"},Object(d.b)("a",{className:g.link,href:c},"Edit this page on GitHub"))):null},O=a("FCXl"),j=a("dI71"),A=a("I8xM"),w=function(e){function t(){return e.apply(this,arguments)||this}return Object(j.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,o=n.split("/").filter(Boolean).slice(-1)[0],r=a.map((function(e){var t,a=s()(e,{lower:!0,strict:!0}),r=a===o,c=new RegExp(o+"/?(#.*)?$"),p=n.replace(c,a);return Object(d.b)("li",{key:e,className:b()((t={},t[A.selectedItem]=r,t),A.listItem)},Object(d.b)(i.Link,{className:A.link,to:""+p},e))}));return Object(d.b)("div",{className:A.tabsContainer},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(d.b)("nav",{"aria-label":t},Object(d.b)("ul",{className:A.list},r))))))},t}(o.a.Component),y=a("MjG9"),v=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,o=e.Title,r=t.frontmatter,l=void 0===r?{}:r,b=t.relativePagePath,u=t.titleType,m=l.tabs,g=l.title,j=l.theme,A=l.description,N=l.keywords,k=Object(v.a)().interiorTheme,x=Object(i.useStaticQuery)("2456312558").site.pathPrefix,S=x?n.pathname.replace(x,""):n.pathname,I=m?S.split("/").filter(Boolean).slice(-1)[0]||s()(m[0],{lower:!0}):"",T=j||k;return Object(d.b)(p.a,{tabs:m,homepage:!1,theme:T,pageTitle:g,pageDescription:A,pageKeywords:N,titleType:u},Object(d.b)(h,{title:o?Object(d.b)(o,null):g,label:"label",tabs:m,theme:T}),m&&Object(d.b)(w,{title:g,slug:S,tabs:m,currentTab:I}),Object(d.b)(y.a,{padded:!0},a,Object(d.b)(f,{relativePagePath:b})),Object(d.b)(O.a,{pageContext:t,location:n,slug:S,tabs:m,currentTab:I}),Object(d.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},CYwN:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return l}));var n=a("wx14"),o=a("zLVn"),r=(a("q1tI"),a("7ljp")),s=a("013z"),i=(a("qKvR"),{}),c={_frontmatter:i},p=s.a;function l(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)(p,Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",null,"Support Overview"),Object(r.b)("p",null,"As a part of Day 2 operations, you may experience issues that require opening a trouble ticket with Red Hat support.  The Red Hat Support Portal is the primary mechanism for opening and managing trouble tickets for the platform.  "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"If this is a OpenShift platform provided/managed by a third party, please ensure that you utilize the defined procedures provided to you as they may own/manage issues")),Object(r.b)("p",null,"In addition, Red Hat support (unless an add-on Entitlement has been purchased), will not accept problems related to Application Development.  However, if the Platform issue is the root cause of the Application Development issue, then it would be supported..\nAs part of opening the trouble ticket, it is expected and normal that you have the following information ready and available to ensure rapid response.  Detailed instructions on using the Red Hat Support Portal can be found at:\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://access.redhat.com/articles/38363"}),"Red Hat Support Portal"),"  "),Object(r.b)("h2",null,"Mapping to Personas"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Persona"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"task"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DevOps Engineer, SRE"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Getting support")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DevOps Engineer, SRE"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Gathering data")))),Object(r.b)("h2",null,"Getting support"),Object(r.b)("p",null,"In case you need help from Red Hat Support team, through the Customer Portal, you can submit a support case to Red Hat Support.\nYou access the URL ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://access.redhat.com/"}),"https://access.redhat.com/")," and click ",Object(r.b)("strong",{parentName:"p"},"Open a Support Case")," button.  "),Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"81.94444444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAABcSAAAXEgFnn9JSAAADzElEQVQ4y51S+0+bVRj+DKDC1gK9MHqD0trboBQQGEPMNiLZXCZsDYJFYTCmjqjES6JbNmDqNnCJ2RLj1jHd5H5zy/4I92dIgEIpLZZ+bSkf0J7H9/uYxJ/8wZM8ed+c95znvM9zXu50UzP76vJVDFz/nn373Q3cuDmIvv4BXL5yFV9/c0WK1/oG0PcC115AzPv7r+PmrSHcGvwBg0O3UXeiAdzhkgrWdPIMzl/sYe4PLqCxtR3n2jpxprkNbk8HPBcuoaWjG+62DjS3d8HTfQmerg/R1v0xOnt68S7VGls8ONl0FgUOJziVSseKVFqYbC6mNDqgMFigLLRDrjXDYC+D3l4OtdFGsELvKIfRWYkcvRnZWiOhEK/Q3cw8A0UNnS8FpyiwsbzXiqGzljKz6yhMzmroLSVQF1ihoIu5OhPUhVaoDGYoiEBnc+L46Sac87TjneZWnG15D63nL8L9fifMpZXgdBYXs1LiqjnGKt5swNH6t1FzrAFakw1aswMGawmMjjJ66HUYLHbI8rSYffIU4trcTGA3mZJyQdiCzUkdFhyuZOV1b+GU28OOn2pEWe0JFFfVwV5WheKKIyitqoWjvBo6kxWaQhMy5TkYn32GXSKJCyns7vEhGovBWVkNrqSmnnX1fIE7D8bZ0F0vLK4jkGmKINcUQqbWIys3j6DGq9kKCRkH5Pj08y8xOfcMj0YnMDY5jenfn2JsahauN+rBqU0l0meoTE6WW2CDQmeGXKWDTKnBQcUh5BzSQ6kzkqf0SbZS5JPfE9Oz4CMbWFxcxGoggGAohD+eP4eruhZcWo6WpeVokKHQs/TsfHAvHwSXnrWHjANIkymRLlfhpUw50innsrLx0Se9eDw2gZ/ueeEdfogf79xFz2e9yC+ygBudmmNiuyMTM2xseo7iNEbGp0jKDCZnn2CcaqOTU5K0iZk56m4GDx+PwPvrb7g3/At+vu/F/QfDeDQyKtU58pOJpsZjUba1lcD2tkA7DP93cXxcYKvBMBYWFpjoSYA8CYfDWF9f30d4IwKfP4j5+T/FcxTn4fP5sOL3I0T+BYNBbGxsIJlMgotv7bC19QgZvMCWlpbgp0NicR9EHo3GiJRHYHUVa2tr0oNiLRKJ0CxuSkgkEiSMgRN2kmwzIYDnI4znebrMS8V/IA6vIAhIplLY3tmR8G9DmGQPQ4rqEiGTdhj24n8sIsIujTPJYttEKkbG9rHvIbXLRJm+5RUW4gUEwnHEqatAYBXLoRh8oTh2qMOwOHOLy/CvkL/+EBIkm49GEY4m8Be/p0LE3/IwY0f00jvQAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"support_1",title:"support_1",src:"/static/d3f7abaa3ee7926b44ff14473db79e3a/3cbba/support_1.png",srcSet:["/static/d3f7abaa3ee7926b44ff14473db79e3a/7fc1e/support_1.png 288w","/static/d3f7abaa3ee7926b44ff14473db79e3a/a5df1/support_1.png 576w","/static/d3f7abaa3ee7926b44ff14473db79e3a/3cbba/support_1.png 1152w","/static/d3f7abaa3ee7926b44ff14473db79e3a/e35c7/support_1.png 1372w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(r.b)("p",null,"Or you access the URL ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://access.redhat.com/support/"}),"https://access.redhat.com/support/")," and click ",Object(r.b)("strong",{parentName:"p"},"OPEN NEW CASE")," button.  "),Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"80.20833333333334%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAABcSAAAXEgFnn9JSAAADbElEQVQ4y21SbWsUVxQeUPxglWAotSIi1g/aikm0QesnpRES/SABWwpCFcyuiaZ5s+36HlBUzMafYksaWtuG0j8gaNx03c3Ozsy+JTub3ZnZ2ZnZnVmTPJ5zE4u0Xng455577nOec8+V2jo+R3hgEN9fv40fCJGb4wJjP97AwHdjCF8eQv/g6DsY+dfn8+GrEdwZv4srg8PoONQJqXX7Dpw/dw6RyHUMjY5hcHgEt+6M4969+7j/4CEmopOITj7GxERUIBpd8ycp9ujRBG7eIiHXbqD37Ndo/ehjSJu2tuCTzZuxa8dObGn9ELv37EV7+yHs3/cpvjh6DIcPd+LgwXYRa2vrQGfnERw40Cbsvv2f4YOWVkjSBkgbN5G/DdLxL7vQfaYXXT2n0fvVNwj3X0ZfuB/hSwMIXerHxYsh9PWFEQqFyYbEnvHt+Qs403sWXd2ncLK7h2wPTnSdhOTV6whsG95SCfVyGV6J7NKS2LslHQ06rzcaCIIAKysrAsvLy/8DL8MwIDWbTbhEWC4WUdaLwhpExlZfWBBJJSrgOI64tLq6iv+utzGbeCTf99EgBQuFPMqkzq5WUSWwKsd1USRS2zJhmaYgr5PiCnWiLy7CNCoEQ8S5A74nBYEPx/OQKiwib1go1RwUSR0Tm1RRIT9XMZAr6ijpuiBcMi2oegnFWg0l7oCEcKdrCsmpGyYK09PQp6ZgPp1GlRQ4pNzJaDB+nYLxy08wnz+DRW27FLcTcRhTT2BM/wxrPkmFawg4LghJql+1UP17BvbMU1h//QGbWnH9AE4+D2vmd1S5SGwWNj1BPWjCS8uw//xN5Duaghqpfk3C1lum6dGD+oSA0GQ0X8NvrsBffSfG55y7PtH3LaGwUqnAo1Y8Yvf4+7BPb+p5LjxS5Dk1uPRWLsV5SDztGu1rdnUN7BP4TqFQgKRpGrLUQjoWgxKPI51OQ1EUAVmWwecLNGnGIk32feAzHmQikYCUzWaR1nKYfSVDVjQiUKGqqiDkM3GJkpOyhn+SCmIJRVhNXc8jcFGdfkAqlVojlNUsns+loGZy9B8LQjoTcVVOFNWTKczFk5iXVSqcWS+uIZPJCMs53JGkkpIEVX8Wk/EqKZOytEjI04TfIpfLYy4h48XcPF7GZcSom1my86m0eCJWym3H6cneAFVTHu8JkOtVAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"support_3",title:"support_3",src:"/static/315e72f13022492a28d6aae28c8d117c/3cbba/support_3.png",srcSet:["/static/315e72f13022492a28d6aae28c8d117c/7fc1e/support_3.png 288w","/static/315e72f13022492a28d6aae28c8d117c/a5df1/support_3.png 576w","/static/315e72f13022492a28d6aae28c8d117c/3cbba/support_3.png 1152w","/static/315e72f13022492a28d6aae28c8d117c/b5909/support_3.png 1400w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(r.b)("p",null,"Then you will get an ",Object(r.b)("strong",{parentName:"p"},"OPEN A SUPPORT CASE")," page as follow and fill in blanks.  Then, submit it to the support.    "),Object(r.b)("p",null,Object(r.b)("span",Object(n.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"80.55555555555556%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAABcSAAAXEgFnn9JSAAACu0lEQVQ4y41TWU8TURSehOgDRohoJKjRaEwkBqhshvhmFAIkClEeJIYQsQVToAWx2BTxAUwo9R/64lK6znS2zlLazv2855bWNgTiTb6cOef0fvc7S6V+35DjXwmyT5HPXmQ76kWjMW9jc8tbD2146+thLxTe9MIbH1uwuhbyVj4EhaU7sZ1dEfc9GvGkru4ed+HNPCKRbbYaCiO4FsLO7lfs7e1jf/8bDg8TiMcTODiIC8TjhwKJxHfEuR+LfcHWdhSzr+dwvecmpIuXO9277e24feMW67jWze7cu898vkHW2/uQjY09YUNDo6y/3ydiAwODbHj4MevrG2Ajw6PsAf/Npc4uJkltTGq7wDquXGXS0+fj7uTLWUy9mGHzbxcQDK7C718+QQBLS368fx9AILDciJO/uPgOM6/mMD45jYmpaWGfTUxCchzHdR0HuqYxwzBAOD4+BmMMnuc1bDPo8HAtx+G4JVSqVZimCalUKrmUqFarrH6B/POOY1uwraKwlmVBVjWUyhXu25BclwQ6KBaLjJOjUqkIUv7AmcjkVfxOF3CU15HiyCo6KuUy57BqCvmBruuc8PhcIoLnVZHTbPxMq8jINULNdIRyLqpGSD3j0pl70rvaRe8UanEGyzQg5zJQ5Bzy3GpqQRBS+Q2FJi+ZiOsln40qVNNFRnVh2GXoFhfjlFsVUu8M02JlTnaWurpCqkDVdPz6k0QqlRZQlMI/QpJX5g2lkv9nIJTXizbvn4Z8wRADMS37NKFt24ymTeDfLaC8eIh2kCtUNBOpjAyZK8vLBbG7LYT0Mu+f6GEdRNKsqhkGX+BMNo9sXhHIcVArGkOhUrkVe0gDIkuoLzjZOriHrOrgx5GOtGIhKRe5XytZ/FO4TLHYXDajAMmmEuibLOVIbbN6RVGQTCaRTh0hm0lBLShiOyj+F3f3RODHLGriAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"support_2",title:"support_2",src:"/static/e8d2c4b5ecffa44d58f4bc812199aaa7/3cbba/support_2.png",srcSet:["/static/e8d2c4b5ecffa44d58f4bc812199aaa7/7fc1e/support_2.png 288w","/static/e8d2c4b5ecffa44d58f4bc812199aaa7/a5df1/support_2.png 576w","/static/e8d2c4b5ecffa44d58f4bc812199aaa7/3cbba/support_2.png 1152w","/static/e8d2c4b5ecffa44d58f4bc812199aaa7/b5909/support_2.png 1400w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),"  "),Object(r.b)("h2",null,"Gathering data about your cluster"),Object(r.b)("p",null,"When opening and submitting a support case, it is recommended to provide the following information about your cluster to Red Hat Support to aid in troubleshooting:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Data gathered using the ",Object(r.b)("strong",{parentName:"li"},"oc adm must-gather")," command"),Object(r.b)("li",{parentName:"ul"},"The unique cluster ID.")),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.ibm.com/CASE/OCP-Day2-operations/blob/master/Support/must-gather.txt"}),"Here")," is the sample output of the ",Object(r.b)("strong",{parentName:"p"},"oc adm must-gather")," command.",Object(r.b)("br",{parentName:"p"}),"\n","Note that the oc adm must-gather command will take a few minutes to complete.    "),Object(r.b)("p",null,"There are a few ways to get the unique cluster ID.",Object(r.b)("br",{parentName:"p"}),"\n","You can get it via the ",Object(r.b)("strong",{parentName:"p"},"oc get clusterversion")," command as follow."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"$ oc get  clusterversion version -o jsonpath='{.spec.clusterID}{\"\\n\"}'\n")),Object(r.b)("p",null,"You can also access this information from the console using the (?), help, button, located in the top right corner of the UI, and selecting the ",Object(r.b)("strong",{parentName:"p"},"About")," option.",Object(r.b)("br",{parentName:"p"}),"\n","Then, you will get a new window and see the Cluster ID as shown in below.\n",Object(r.b)("span",Object(n.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"515px"}}),"\n      ",Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"98.95833333333333%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAACJElEQVQ4y5VUzW7TQBi013Zi58d2nNhxwiVSo9CcuBEOSD3wFPACnHLgABJJc8rr8ERcqVpVrYqEEJFyGXbW/qxSkmAszf54d2dnv292La/RgOe6cJSCZVlwdbuh/xGe58H3/f+CZWuC2FF4NT3D64sLDIdDtFotdLtdhGFoNrBtuzYst1TXbbeRZhniODZEURSZNpUqPe44Ti0YQlUe9xDqqJINDY9RyLg1m1XsmmVb6iAI/oDE63G/IrRthaTXw/z5DLNZgclkgul0ivP53NSMa7/fx2AwqNrSz3SYGB4qNUdm4QdtJNkYeT7CeDTSk1LkemE+zDQBF4TodDoVmDAB+4w5VZahs3D+5h3ef7nC1+vvuLm9w9XtPa7vf+Dq7ie+adw8/MJ+vz+I3W4Hfsvlsoi7rYvs7AVevv2ID59WuFyv8XlFrMp6jdX6EpvN5iDWev52u8VisSgIlT5yO/AxThPE+mhK2WbAD1pHM38MlW0cx4XrFTeDaDSa6MR9RNkzBJ3I3CRxwDFU9lNKK9SmzvMcI50QZo4DYdjFUGdQ+nVMXRDqBq9amqbGU/QeB3vaSmEYmT4nPoUQ/HVTWJCIvmJb/ERltMXTRUWInKOqK0IemWpIyEVUTFKpaWiaWOYdJTRZLmNIcwohFSdJYiC3QmoKkJMcVMgduVDczn/y2hCMJyH9kwrlvZOXpcrWCb+dTIr453Hq61rk5HtY9wH9F34Dllv0/FvqnxIAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"support_4",title:"support_4",src:"/static/4ae8fe880671e58861e56a1e346235e1/ecb64/support_4.png",srcSet:["/static/4ae8fe880671e58861e56a1e346235e1/7fc1e/support_4.png 288w","/static/4ae8fe880671e58861e56a1e346235e1/ecb64/support_4.png 515w"],sizes:"(max-width: 515px) 100vw, 515px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),"  "),Object(r.b)("h2",null,"Impacting to your SLA"),Object(r.b)("p",null,"When you had an issue with your OpenShift which caused an outage of your service, you opened an issue with Red Hat. If they took 4 hours to get you a solution, you lost 4 hours of uptime.  "),Object(r.b)("p",null,"To solve the issue quicker, you need to understand how to open a support ticket and how to gather necessary data for problem determination.  We would recommend you to do a rehearsal if possible.\nFor example, you would have an experience to open a support ticket to get familiar with the procedure including how to find out the cluster ID as we mentioned before.  "),Object(r.b)("p",null,"Here is another example. If you kicked off the ",Object(r.b)("strong",{parentName:"p"},"oc adm must-gather")," command from remote terminal and the network transfer is not high enough, it may take longer than you would expect.  We saw that it took an hour to complete the command. You probably need to try the command to find out how long it will take because it will impact your SLA. You would gather data as quick as possible to send it to the support when you have an outage. Any incidents that cause outages or hits against the agreed upon SLAs should be capture and included within the platform performance measurements / your root cause analysis.  "),Object(r.b)("h2",null,"Simplifying OpenShift Case Information Gathering Workflow: Must-Gather Operator"),Object(r.b)("p",null,"While using the ",Object(r.b)("strong",{parentName:"p"},"must-gather")," command is fairly straightforward, the full end-to-end process to facilitate all of the available tasks can be time consuming. This process involves issuing the command, waiting for the associated tasks to complete, and then upload the resulting information to the Red Hat case management system.",Object(r.b)("br",{parentName:"p"}),"\n","The must-gather operator streamlines running the must-gather command and uploading the results to the Red Hat case management system. The ",Object(r.b)("strong",{parentName:"p"},"must-gather")," operator is intended to be used only by the cluster administrator as it requires elevated permissions on the cluster.  "),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://blog.openshift.com/simplifying-openshift-case-information-gathering-workflow-must-gather-operator/"}),"https://blog.openshift.com/simplifying-openshift-case-information-gathering-workflow-must-gather-operator/"),"   "),Object(r.b)("h2",null,"Implementing Support"),Object(r.b)("p",null,"In this section, we will put a couple of lines.  Mainly, you will put the link to other page which discussed “how”."),Object(r.b)("h2",null,"Kubernetes"),Object(r.b)("p",null,"n/a "),Object(r.b)("h2",null,"OpenShift"),Object(r.b)("p",null,"The information we provide in this page is based on the OpenShift implementation."),Object(r.b)("h2",null,"On IBM Cloud"),Object(r.b)("p",null,"In case you are using OpenShift ",Object(r.b)("strong",{parentName:"p"},"Managed")," service from your cloud provider such as IBM Cloud and Azure, you would need to understand the support policy with your cloud provider."),Object(r.b)("h2",null,"With IBM Cloud Pak for MCM"),Object(r.b)("p",null,"n/a"),Object(r.b)("h2",null,"Others"),Object(r.b)("p",null,"If you have contract from 3rd vender to manage your OpenShift cluster, you need to follow the support policy provided by them. "),Object(r.b)("h2",null,"Other consideration"),Object(r.b)("p",null,"n/a"),Object(r.b)("h2",null,"Link to the official document"),Object(r.b)("p",null,"Please read the official document for more information.  "),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.openshift.com/container-platform/4.3/support/getting-support.html"}),"https://docs.openshift.com/container-platform/4.3/support/getting-support.html"),"\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.openshift.com/container-platform/4.3/support/gathering-cluster-data.html"}),"https://docs.openshift.com/container-platform/4.3/support/gathering-cluster-data.html"),"  "))}l.isMDXComponent=!0},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-day-2-misc-support-index-mdx-de742427ed0aec6145c0.js.map