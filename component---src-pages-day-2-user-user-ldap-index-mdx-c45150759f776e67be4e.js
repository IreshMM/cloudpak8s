(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),c=a("NmYn"),i=a.n(c),o=a("Wbzz"),b=a("Xrax"),s=a("k4MR"),l=a("TSYQ"),d=a.n(l),p=a("QH2O"),u=a.n(p),m=a("qKvR"),j=function(e){var t,a=e.title,n=e.theme,r=e.tabs,c=void 0===r?[]:r;return Object(m.b)("div",{className:d()(u.a.pageHeader,(t={},t[u.a.withTabs]=c.length,t[u.a.darkMode]="dark"===n,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:u.a.text},a)))))},O=a("BAC9"),h=function(e){var t=e.relativePagePath,a=e.repository,n=Object(o.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,c=r.baseUrl,i=r.subDirectory,b=c+"/edit/"+r.branch+i+"/src/pages"+t;return c?Object(m.b)("div",{className:"bx--row "+O.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:O.link,href:b},"Edit this page on GitHub"))):null},f=a("FCXl"),g=a("dI71"),N=a("I8xM"),P=function(e){function t(){return e.apply(this,arguments)||this}return Object(g.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],c=a.map((function(e){var t,a=i()(e,{lower:!0,strict:!0}),c=a===r,b=new RegExp(r+"/?(#.*)?$"),s=n.replace(b,a);return Object(m.b)("li",{key:e,className:d()((t={},t[N.selectedItem]=c,t),N.listItem)},Object(m.b)(o.Link,{className:N.link,to:""+s},e))}));return Object(m.b)("div",{className:N.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",{"aria-label":t},Object(m.b)("ul",{className:N.list},c))))))},t}(r.a.Component),w=a("MjG9"),L=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,c=t.frontmatter,l=void 0===c?{}:c,d=t.relativePagePath,p=t.titleType,u=l.tabs,O=l.title,g=l.theme,N=l.description,y=l.keywords,x=Object(L.a)().interiorTheme,v=Object(o.useStaticQuery)("2456312558").site.pathPrefix,D=v?n.pathname.replace(v,""):n.pathname,A=u?D.split("/").filter(Boolean).slice(-1)[0]||i()(u[0],{lower:!0}):"",T=g||x;return Object(m.b)(s.a,{tabs:u,homepage:!1,theme:T,pageTitle:O,pageDescription:N,pageKeywords:y,titleType:p},Object(m.b)(j,{title:r?Object(m.b)(r,null):O,label:"label",tabs:u,theme:T}),u&&Object(m.b)(P,{title:O,slug:D,tabs:u,currentTab:A}),Object(m.b)(w.a,{padded:!0},a,Object(m.b)(h,{relativePagePath:d})),Object(m.b)(f.a,{pageContext:t,location:n,slug:D,tabs:u,currentTab:A}),Object(m.b)(b.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},tBVH:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return l}));var n=a("wx14"),r=a("zLVn"),c=(a("q1tI"),a("7ljp")),i=a("013z"),o=(a("qKvR"),{}),b={_frontmatter:o},s=i.a;function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)(s,Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",null,"Configure LDAP Identity Provider"),Object(c.b)("p",null,"We will show you how to configre the LDAP Identity Provider (LDAP authentication)\nwith an OpenShift cluster.  "),Object(c.b)("h2",null,"Configure LDAP TLS Certificate Authority ConfigMap and Bind Password Secret"),Object(c.b)("p",null,"In our scenario, we will use the TLS for the LDAP protocol (a.k.a. LDAPS).\nWe will store the LDAP Server’s TLS certificate authority (CA) certificate in\na ConfigMap in the ",Object(c.b)("strong",{parentName:"p"},"openshift-config")," namespace. The LDAP Server which we will\nuse requires LDAP bind credentials to perform searches for user accounts. The\nbind user is configured as the ",Object(c.b)("strong",{parentName:"p"},"bindDN")," in the Identity Provider configuration.\nThe bind password must be stored as a secret using the ",Object(c.b)("strong",{parentName:"p"},"bindPassword")," data key.   "),Object(c.b)("p",null,"Create a ConfigMap as follows."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"$ oc --user=admin create configmap -n openshift-config <configmap_name> --from-file=ca.crt=<ca_file_name>\n")),Object(c.b)("p",null,"Here is the command output in our environment."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"$ oc --user=admin create configmap -n openshift-config opentlc-ipa-tls-ca --from-file=ca.crt=ipa-ca.crt\nconfigmap/opentlc-ipa-tls-ca created\n$ \n")),Object(c.b)("p",null,"Then, create a secret as follows."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"$ oc --user=admin create secret generic -n openshift-config <secret_name> --from-literal=bindPassword=<password>\n")),Object(c.b)("p",null,"Here is the command output in our environment."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"$ oc --user=admin create secret generic -n openshift-config opentlc-ipa-bind-password --from-literal=bindPassword='r3dh4t1!'\nsecret/opentlc-ipa-bind-password created\n$ \n")),Object(c.b)("h2",null,"Configure LDAP Identity Provider"),Object(c.b)("p",null,"Now, we have a ConfigMap and a secret for LDAP. The next step will configure\nthe identity provider. Edit the ",Object(c.b)("strong",{parentName:"p"},"oauth-config.yaml")," file and add the LDAP\nidentity provider configuration. Here are several fields you would use with\nyour LDAP authentication. It really depends on your LDAP server configuration.\nThis is just an example.  "),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Field"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ldap.attributes.email"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"User email address configured as mail")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ldap.attributes.id"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"User identity in LDAP configured as dn")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ldap.attributes.name"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Name attribute configured as cn")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ldap.attributes.preferredUsername"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Preferred username configured as uid")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ldap.bindDN"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"LDAP bind user DN for user search")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ldap.bindPassword.name"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"OpenShift secret name configured with bind password for LDAP user search bind")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ldap.ca.name"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"OpenShift ConfigMap name configured with ca.crt for your LDAP Server")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ldap.insecure"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Configured for secure communication with TLS encryption")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ldap.url"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"LDAP user search URL with base DN location for user accounts, username attribute set to uid, searching the LDAP subtree under the base DN, and filter to restrict users to only those that are member of specific group")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"name"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Identity provider name appears on the OpenShift Web Console")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"type"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"LDAP value indicates LDAP identity provider")))),Object(c.b)("p",null,"Here is an example of the ",Object(c.b)("strong",{parentName:"p"},"oauth-config.yaml")," file with an LDAP identity\nprovider."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),'apiVersion: config.openshift.io/v1\nkind: OAuth\nmetadata:\n  name: cluster\nspec:\n  identityProviders:\n  - name: Local Password\n    mappingMethod: claim\n    type: HTPasswd\n    htpasswd:\n      fileData:\n        name: htpasswd\n  - name: OPENTLC LDAP\n    challenge: true\n    login: true\n    mappingMethod: claim\n    type: LDAP\n    ldap:\n      attributes:\n        email: ["mail"]\n        id: ["dn"]\n        name: ["cn"]\n        preferredUsername: ["uid"]\n      bindDN: "uid=admin,cn=users,cn=accounts,dc=shared,dc=example,dc=opentlc,dc=com"\n      bindPassword:\n        name: opentlc-ipa-bind-password\n      insecure: false\n      ca:\n        name: opentlc-ipa-tls-ca\n      url: "ldaps://ipa.shared.example.opentlc.com:636/cn=users,cn=accounts,dc=shared,dc=example,dc=opentlc,dc=com?uid?sub?(memberOf=cn=ocp-users,cn=groups,cn=accounts,dc=shared,dc=example,dc=opentlc,dc=com)" \n\n')),Object(c.b)("p",null,"Once you create (or update) the yaml file, replace the OAuth configuration\nwith the LDAP settings in the ",Object(c.b)("strong",{parentName:"p"},"oauth-config.yaml")," file."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"$ oc --user=admin replace -f oauth-config.yaml\noauth.config.openshift.io/cluster replaced\n$ \n")),Object(c.b)("p",null,"In our scenario, we now have both Htpasswd and LDAP for the authentication.\nSince we have not logged in with the users via LDAP authentication yet, at\nthis moment, we don’t see those users with the ",Object(c.b)("inlineCode",{parentName:"p"},"oc get users")," command. We only\nsee users who have logged in before with the Htpasswd (Local Password) identity\nprovider. In other words, until we have logged in with those users, those users\nwon’t show up."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"$ oc --user=admin get users\nNAME    UID                                    FULL NAME   IDENTITIES\nalice   962fdf1e-1848-11ea-a3e1-0a580a80011d               Local Password:alice\nbob     d0d4f046-1845-11ea-a3e1-0a580a80011d               Local Password:bob\n$ \n$ oc --user=admin get identities\nNAME                   IDP NAME         IDP USER NAME   USER NAME   USER UID\nLocal Password:alice   Local Password   alice           alice       962fdf1e-1848-11ea-a3e1-0a580a80011d\nLocal Password:bob     Local Password   bob             bob         d0d4f046-1845-11ea-a3e1-0a580a80011d\n$ \n")),Object(c.b)("h2",null,"Test LDAP Identity Provider"),Object(c.b)("p",null,"Access the OpenShift Console and you see three options for ",Object(c.b)("strong",{parentName:"p"},"Log in with…"),"\nas shown in below."),Object(c.b)("img",{src:"/assets/img/day2/ldap_1.png",alt:"ldap_1"}),Object(c.b)("p",null,"For LDAP authentication, click on ",Object(c.b)("strong",{parentName:"p"},"OPENTLC LDAP")," on the list. Note that",Object(c.b)("br",{parentName:"p"}),"\n",Object(c.b)("strong",{parentName:"p"},"OPENTLC LDAP")," is configured for the\n",Object(c.b)("strong",{parentName:"p"},"spec.identityProviders.name")," in the ",Object(c.b)("strong",{parentName:"p"},"oauth-config.yaml")," file in the\nprevious step. Next, we see the following page."),Object(c.b)("img",{src:"/assets/img/day2/ldap_2.png",alt:"ldap_2"}),Object(c.b)("p",null,"Then type the user and its password for the LDAP authentication.  "),Object(c.b)("p",null,"In our case, two users named ",Object(c.b)("strong",{parentName:"p"},"andrew")," and ",Object(c.b)("strong",{parentName:"p"},"karla")," successfully logged in\nvia LDAP authentication. Check to see if those users are listed with\nthe ",Object(c.b)("inlineCode",{parentName:"p"},"oc")," commands."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"$ oc --user=admin get users\nNAME     UID                                    FULL NAME        IDENTITIES\nalice    962fdf1e-1848-11ea-a3e1-0a580a80011d                    Local Password:alice\nandrew   b8387e3f-1a70-11ea-abd6-0a580a80019a   andrew OSEUser   OPENTLC LDAP:dWlkPWFuZHJldyxjbj11c2Vycyxjbj1hY2NvdW50cyxkYz1zaGFyZWQsZGM9ZXhhbXBsZSxkYz1vcGVudGxjLGRjPWNvbQ\nbob      d0d4f046-1845-11ea-a3e1-0a580a80011d                    Local Password:bob\nkarla    2075f2ee-1a72-11ea-abd6-0a580a80019a   karla OSEUser    OPENTLC LDAP:dWlkPWthcmxhLGNuPXVzZXJzLGNuPWFjY291bnRzLGRjPXNoYXJlZCxkYz1leGFtcGxlLGRjPW9wZW50bGMsZGM9Y29t\n$ \n$ oc --user=admin get identities\nNAME                                                                                                          IDP NAME         IDP USER NAME                                                                                    USER NAME   USER UID\nLocal Password:alice                                                                                          Local Password   alice                                                                                            alice       962fdf1e-1848-11ea-a3e1-0a580a80011d\nLocal Password:bob                                                                                            Local Password   bob                                                                                              bob         d0d4f046-1845-11ea-a3e1-0a580a80011d\nOPENTLC LDAP:dWlkPWFuZHJldyxjbj11c2Vycyxjbj1hY2NvdW50cyxkYz1zaGFyZWQsZGM9ZXhhbXBsZSxkYz1vcGVudGxjLGRjPWNvbQ   OPENTLC LDAP     dWlkPWFuZHJldyxjbj11c2Vycyxjbj1hY2NvdW50cyxkYz1zaGFyZWQsZGM9ZXhhbXBsZSxkYz1vcGVudGxjLGRjPWNvbQ   andrew      b8387e3f-1a70-11ea-abd6-0a580a80019a\nOPENTLC LDAP:dWlkPWthcmxhLGNuPXVzZXJzLGNuPWFjY291bnRzLGRjPXNoYXJlZCxkYz1leGFtcGxlLGRjPW9wZW50bGMsZGM9Y29t     OPENTLC LDAP     dWlkPWthcmxhLGNuPXVzZXJzLGNuPWFjY291bnRzLGRjPXNoYXJlZCxkYz1leGFtcGxlLGRjPW9wZW50bGMsZGM9Y29t     karla       2075f2ee-1a72-11ea-abd6-0a580a80019a\n$\n")),Object(c.b)("p",null,"As you see above, ",Object(c.b)("strong",{parentName:"p"},"andrew")," and ",Object(c.b)("strong",{parentName:"p"},"karla")," are using the LDAP identity\nprovider for their authentication."))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-day-2-user-user-ldap-index-mdx-c45150759f776e67be4e.js.map