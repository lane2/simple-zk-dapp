(function(e){function t(t){for(var n,i,c=t[0],o=t[1],l=t[2],d=0,f=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&f.push(s[i][0]),s[i]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);u&&u(t);while(f.length)f.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,c=1;c<a.length;c++){var o=a[c];0!==s[o]&&(n=!1)}n&&(r.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},s={app:0},r=[];function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/simple-zk-dapp/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=o;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},1:function(e,t){},4678:function(e,t,a){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(e){var t=r(e);return a(t)}function r(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}s.keys=function(){return Object.keys(n)},s.resolve=r,e.exports=s,s.id="4678"},"56d7":function(e,t,a){"use strict";a.r(t);var n=a("2b0e"),s=a("c4c6"),r=a.n(s),i=a("57df"),c=a.n(i),o=a("b6c0"),l=a.n(o),u=(a("202f"),function(){var e=this,t=e._self._c;return e.mainLoading?t("div",{attrs:{id:"app"}},[t("div",{staticClass:"start-screen"},[e._m(2),t("h1",[e._v("Welcome to zksync era simple DApp!")]),t("a-button",{attrs:{type:"primary",size:"large"},on:{click:e.connectMetamask}},[e._v("Connect Metamask")])],1)]):t("div",{attrs:{id:"app"}},[e._m(0),t("h1",[e._v("Wish you lucky!")]),t("div",[e._v(" This a simple zksync era dApp, there are 3 contracts you can try. You can use it for free, but it's at your own risk. ")]),e._m(1),t("div",{staticClass:"main-box"},[t("div",{staticClass:"balance"},[t("p",[e._v(" Your balance: ")]),t("p",[e.retreivingBalance?t("span",[e._v("Loading...")]):t("span",[e._v(e._s(e.currentBalance)+" ETH")]),t("a-button",{staticClass:"refresh-button",attrs:{type:"primary"},on:{click:e.estimateFee}},[e._v("Estimate Fee")])],1),t("a-divider",{attrs:{dashed:""}}),t("p",[e._v(" Expected fee for pingpong: ")]),t("p",[e.retrievingFee?t("span",[e._v("Loading...")]):t("span",[e._v(e._s(e.contractArray["pingpong"].fee)+" ETH")]),t("span",[t("a-input",{staticClass:"value-input refresh-button",staticStyle:{width:"100px","margin-bottom":"1em"},attrs:{id:"inputNumber",placeholder:"0.001"},model:{value:e.contractArray["pingpong"].value,callback:function(t){e.$set(e.contractArray["pingpong"],"value",t)},expression:"contractArray['pingpong'].value"}}),e._v(" ETH ")],1),t("a-button",{attrs:{type:"primary",disabled:0!=e.txStatus||!e.feeRetrieved},on:{click:function(t){return e.interactContract("pingpong")}}},[e._v("Interact with PingPong")])],1)],1),t("a-divider",{attrs:{dashed:""}}),t("div",{staticClass:"balance"},[t("p",[e._v(" Expected fee for logger: ")]),t("p",[e.retrievingFee?t("span",[e._v("Loading...")]):t("span",[e._v(e._s(e.contractArray["logger"].fee)+" ETH")]),t("a-button",{staticClass:"refresh-button",attrs:{type:"primary",disabled:0!=e.txStatus||!e.feeRetrieved},on:{click:function(t){return e.interactContract("logger")}}},[e._v("Interact with Logger")])],1)]),t("a-divider",{attrs:{dashed:""}}),t("div",{staticClass:"balance"},[t("p",[e._v(" Expected fee for counter: ")]),t("p",[e.retrievingFee?t("span",[e._v("Loading...")]):t("span",[e._v(e._s(e.contractArray["counter"].fee)+" ETH")]),t("a-button",{staticClass:"refresh-button",attrs:{type:"primary",disabled:0!=e.txStatus||!e.feeRetrieved},on:{click:function(t){return e.interactContract("counter")}}},[e._v("Interact with Counter")])],1)]),t("div",{staticClass:"greeting-input"})],1)])}),d=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"heaeder"},[t("img",{staticClass:"header-img",attrs:{src:a("e39b")}})])},function(){var e=this,t=e._self._c;return t("div",[t("ul",{staticClass:"align-left"},[t("li",[e._v("pingpong: it will send 0.001 eth to the contract and contract will send it back")]),t("li",[e._v("logger: it will trigger log event")]),t("li",[e._v("counter: it will increase a counter")])])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"heaeder"},[t("img",{staticClass:"header-img",attrs:{src:a("e39b")}})])}],f=a("e6fe"),p=a("c030");const b="0x2d3E6388DAdf32c109CaAB5E35F819F35452b393",g=a("6166"),j="0xDCB9D388aa712A4Da8e96A4294B7511d7fe9fA1C",h=a("58d0"),m="0x07a9C10aaF83cBF4f645E3Bb99C1bA278712B963",v=a("c2e8");var y={name:"App",data(){return{contractArray:{pingpong:{name:"pingpong",address:b,abi:g,instance:null,function:"pingpong",gasEstimateCall:null,gasLimit:0,fee:0,value:"0.001"},logger:{name:"logger",address:j,abi:h,instance:null,function:"log",gasEstimateCall:null,gasLimit:0,fee:0,value:"0"},counter:{name:"counter",address:m,abi:v,instance:null,function:"increase",gasEstimateCall:null,gasLimit:0,fee:0,value:"0"}},mainLoading:!1,provider:null,signer:null,txStatus:0,retrievingFee:!1,feeRetrieved:!1,retreivingBalance:!1,currentBalance:""}},methods:{initializeProviderAndSigner(){this.provider=new f["Provider"]("https://testnet.era.zksync.dev"),this.signer=new f["Web3Provider"](window.ethereum).getSigner(),this.contractArray["pingpong"].instance=new f["Contract"](b,g,this.signer),this.contractArray["pingpong"].gasEstimateCall=this.contractArray["pingpong"].instance.estimateGas.pingpong,this.contractArray["logger"].instance=new f["Contract"](j,h,this.signer),this.contractArray["logger"].gasEstimateCall=this.contractArray["logger"].instance.estimateGas.log,this.contractArray["counter"].instance=new f["Contract"](m,v,this.signer),this.contractArray["counter"].gasEstimateCall=this.contractArray["counter"].instance.estimateGas.increase},async getBalance(){const e=await this.signer.getBalance();return Number(p["ethers"].utils.formatEther(e)).toFixed(8)},async interactContract(e){this.txStatus=1;let t=this.contractArray[e],a={gasLimit:t.gasLimit};Number(t.value)>0&&(a.value=p["ethers"].utils.parseEther(t.value));const n=await t.instance.functions[t.function](a);this.txStatus=2,await n.wait(),this.txStatus=0,this.currentBalance=await this.getBalance()},async estimateFee(){this.retrievingFee=!0;for(let e in this.contractArray){let t=this.contractArray[e];console.log(t);let a=await t.gasEstimateCall();t.gasLimit=p["ethers"].BigNumber.from(a).toBigInt();const n=await this.provider.getGasPrice();t.fee=Number(p["ethers"].utils.formatEther(a.mul(n))).toFixed(6),console.log(t)}this.retrievingFee=!1,this.feeRetrieved=!0},updateBalance(){this.retreivingBalance=!0,this.getBalance().then(e=>{this.currentBalance=e}).catch(e=>console.log(e)).finally(()=>{this.retreivingBalance=!1})},loadMainScreen(){this.initializeProviderAndSigner(),this.provider&&this.signer?(this.mainLoading=!0,this.updateBalance()):alert("Follow the tutorial to learn how to connect to Metamask!")},connectMetamask(){window.ethereum.request({method:"eth_requestAccounts"}).then(()=>{324==+window.ethereum.networkVersion?this.loadMainScreen():alert("Please switch network to zkSync!")}).catch(e=>console.log(e))}}},k=y,w=(a("7f47"),a("2877")),_=Object(w["a"])(k,u,d,!1,null,null,null),C=_.exports;n["default"].config.productionTip=!1,n["default"].component(r.a.name,r.a),n["default"].component(c.a.name,c.a),n["default"].component(l.a.name,l.a),new n["default"]({render:e=>e(C)}).$mount("#app")},"58d0":function(e){e.exports=JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"block","type":"uint256"}],"name":"TxConfirmed","type":"event"},{"inputs":[],"name":"log","outputs":[],"stateMutability":"payable","type":"function"}]')},6166:function(e){e.exports=JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"pingpong","outputs":[],"stateMutability":"payable","type":"function"}]')},"6e5b":function(e,t,a){},"7f47":function(e,t,a){"use strict";a("6e5b")},c2e8:function(e){e.exports=JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"count","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"increase","outputs":[],"stateMutability":"nonpayable","type":"function"}]')},e39b:function(e,t,a){e.exports=a.p+"img/zk.278450ae.png"}});