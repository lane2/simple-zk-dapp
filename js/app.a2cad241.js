(function(t){function e(e){for(var r,o,s=e[0],c=e[1],u=e[2],p=0,g=[];p<s.length;p++)o=s[p],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&g.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(g.length)g.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(r=!1)}r&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={app:0},i=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034fb":function(t,e,n){"use strict";n("85ec")},1:function(t,e){},2:function(t,e){},5601:function(t){t.exports=JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"count","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"increase","outputs":[],"stateMutability":"nonpayable","type":"function"}]')},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.mainLoading?n("div",{attrs:{id:"app"}},[n("div",{staticClass:"start-screen"},[n("h1",[t._v("Welcome to zksync era simple DApp!")]),n("button",{on:{click:t.connectMetamask}},[t._v("Connect Metamask")])])]):n("div",{attrs:{id:"app"}},[n("h1",[t._v("Wish you lucky!")]),n("div",[t._v(" This a simple zksync era dApp, there are 3 contracts you can try. You can use it for free, but it's at your own risk. ")]),t._m(0),n("div",{staticClass:"main-box"},[n("div",{staticClass:"balance"},[n("p",[t._v(" Your balance: "),t.retreivingBalance?n("span",[t._v("Loading...")]):n("span",[t._v(t._s(t.currentBalance)+" ETH")]),n("button",{staticClass:"refresh-button",on:{click:t.estimateFee}},[t._v("Estimate Fee")])]),n("p",[t._v(" Expected fee for pingpong: "),t.retrievingFee?n("span",[t._v("Loading...")]):n("span",[t._v(t._s(t.contractArray["pingpong"].fee)+" ETH")]),n("span",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.contractArray["pingpong"].value,expression:"contractArray['pingpong'].value"}],staticClass:"value-input",attrs:{type:"text",placeholder:"0.001"},domProps:{value:t.contractArray["pingpong"].value},on:{input:function(e){e.target.composing||t.$set(t.contractArray["pingpong"],"value",e.target.value)}}}),t._v("ETH")]),n("button",{staticClass:"refresh-button",attrs:{disabled:0!=t.txStatus||!t.feeRetrieved},on:{click:function(e){return t.interactContract("pingpong")}}},[t._v("Interact with PingPong")])])]),n("div",{staticClass:"balance"},[n("p",[t._v(" Expected fee for logger: "),t.retrievingFee?n("span",[t._v("Loading...")]):n("span",[t._v(t._s(t.contractArray["logger"].fee)+" ETH")]),n("button",{staticClass:"refresh-button",attrs:{disabled:0!=t.txStatus||!t.feeRetrieved},on:{click:function(e){return t.interactContract("logger")}}},[t._v("Interact with Logger")])])]),n("div",{staticClass:"balance"},[n("p",[t._v(" Expected fee for counter: "),t.retrievingFee?n("span",[t._v("Loading...")]):n("span",[t._v(t._s(t.contractArray["counter"].fee)+" ETH")]),n("button",{staticClass:"refresh-button",attrs:{disabled:0!=t.txStatus||!t.feeRetrieved},on:{click:function(e){return t.interactContract("counter")}}},[t._v("Interact with Counter")])])]),n("div",{staticClass:"greeting-input"})])])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ul",{staticClass:"align-left"},[n("li",[t._v("pingpong: it will send 0.001 eth to the contract and contract will send it back")]),n("li",[t._v("logger: it will trigger log event")]),n("li",[t._v("counter: it will increase a counter")])])])}],o=n("1da1"),s=(n("96cf"),n("b680"),n("a9e3"),n("d3b7"),n("ddb0"),n("e6fe")),c=n("c030"),u="0x2d3E6388DAdf32c109CaAB5E35F819F35452b393",l=n("7b7f"),p="0xDCB9D388aa712A4Da8e96A4294B7511d7fe9fA1C",g=n("8dfd"),f="0x07a9C10aaF83cBF4f645E3Bb99C1bA278712B963",d=n("5601"),v={name:"App",data:function(){return{contractArray:{pingpong:{name:"pingpong",address:u,abi:l,instance:null,function:"pingpong",gasEstimateCall:null,gasLimit:0,fee:0,value:"0.001"},logger:{name:"logger",address:p,abi:g,instance:null,function:"log",gasEstimateCall:null,gasLimit:0,fee:0,value:"0"},counter:{name:"counter",address:f,abi:d,instance:null,function:"increase",gasEstimateCall:null,gasLimit:0,fee:0,value:"0"}},mainLoading:!0,provider:null,signer:null,txStatus:0,retrievingFee:!1,feeRetrieved:!1,retreivingBalance:!1,currentBalance:""}},methods:{initializeProviderAndSigner:function(){this.provider=new s["Provider"]("https://testnet.era.zksync.dev"),this.signer=new s["Web3Provider"](window.ethereum).getSigner(),this.contractArray["pingpong"].instance=new s["Contract"](u,l,this.signer),this.contractArray["pingpong"].gasEstimateCall=this.contractArray["pingpong"].instance.estimateGas.pingpong,this.contractArray["logger"].instance=new s["Contract"](p,g,this.signer),this.contractArray["logger"].gasEstimateCall=this.contractArray["logger"].instance.estimateGas.log,this.contractArray["counter"].instance=new s["Contract"](f,d,this.signer),this.contractArray["counter"].gasEstimateCall=this.contractArray["counter"].instance.estimateGas.increase},getBalance:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.signer.getBalance();case 2:return n=e.sent,e.abrupt("return",Number(c["ethers"].utils.formatEther(n)).toFixed(8));case 4:case"end":return e.stop()}}),e)})))()},interactContract:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){var r,a,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.txStatus=1,r=e.contractArray[t],a={gasLimit:r.gasLimit},Number(r.value)>0&&(a.value=c["ethers"].utils.parseEther(r.value)),n.next=6,r.instance.functions[r.function](a);case 6:return i=n.sent,e.txStatus=2,n.next=10,i.wait();case 10:return e.txStatus=0,n.next=13,e.getBalance();case 13:e.currentBalance=n.sent;case 14:case"end":return n.stop()}}),n)})))()},estimateFee:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n,r,a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.retrievingFee=!0,e.t0=regeneratorRuntime.keys(t.contractArray);case 2:if((e.t1=e.t0()).done){e.next=17;break}return n=e.t1.value,r=t.contractArray[n],console.log(r),e.next=8,r.gasEstimateCall();case 8:return a=e.sent,r.gasLimit=c["ethers"].BigNumber.from(a).toBigInt(),e.next=12,t.provider.getGasPrice();case 12:i=e.sent,r.fee=Number(c["ethers"].utils.formatEther(a.mul(i))).toFixed(6),console.log(r),e.next=2;break;case 17:t.retrievingFee=!1,t.feeRetrieved=!0;case 19:case"end":return e.stop()}}),e)})))()},updateBalance:function(){var t=this;this.retreivingBalance=!0,this.getBalance().then((function(e){t.currentBalance=e})).catch((function(t){return console.log(t)})).finally((function(){t.retreivingBalance=!1}))},loadMainScreen:function(){this.initializeProviderAndSigner(),this.provider&&this.signer?(this.mainLoading=!1,this.updateBalance()):alert("Follow the tutorial to learn how to connect to Metamask!")},connectMetamask:function(){var t=this;window.ethereum.request({method:"eth_requestAccounts"}).then((function(){324==+window.ethereum.networkVersion?t.loadMainScreen():alert("Please switch network to zkSync!")})).catch((function(t){return console.log(t)}))}}},h=v,m=(n("034fb"),n("2877")),b=Object(m["a"])(h,a,i,!1,null,null,null),y=b.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(y)}}).$mount("#app")},"7b7f":function(t){t.exports=JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"pingpong","outputs":[],"stateMutability":"payable","type":"function"}]')},"85ec":function(t,e,n){},"8dfd":function(t){t.exports=JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"block","type":"uint256"}],"name":"TxConfirmed","type":"event"},{"inputs":[],"name":"log","outputs":[],"stateMutability":"payable","type":"function"}]')}});