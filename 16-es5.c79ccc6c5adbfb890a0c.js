function _classCallCheck(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _createClass(t,n,e){return n&&_defineProperties(t.prototype,n),e&&_defineProperties(t,e),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"2yxt":function(t,n,e){"use strict";e.r(n),e.d(n,"ChatPageModule",(function(){return _}));var i=e("ofXK"),a=e("3Pt+"),o=e("TEn/"),c=e("tyNb"),s=e("fXoL");function r(t,n){if(1&t&&(s.Ob(0,"div",24),s.Ob(1,"ion-avatar",25),s.Mb(2,"img",26),s.Nb(),s.Nb()),2&t){var e=s.Xb().$implicit;s.zb(2),s.ac("src",e.avatar,s.gc)}}function b(t,n){if(1&t&&s.Mb(0,"div",27),2&t){var e=s.Xb().$implicit,i=s.Xb();s.ac("innerHtml",i.nl2br(e.body),s.fc)}}function l(t,n){if(1&t&&s.Mb(0,"img",26),2&t){var e=s.Xb().$implicit;s.ac("src",e.body,s.gc)}}function g(t,n){1&t&&(s.Ob(0,"div",28),s.Mb(1,"ion-icon",29),s.Nb())}function m(t,n){1&t&&(s.Ob(0,"div",30),s.kc(1," Seen "),s.Nb())}var u=function(t){return{"chat-item-sender":t}},d=function(t){return{"bubble-image":t}};function h(t,n){if(1&t&&(s.Ob(0,"div",15),s.Ob(1,"div",16),s.kc(2),s.Nb(),s.Ob(3,"div",17),s.jc(4,r,3,1,"div",18),s.Ob(5,"div",19),s.jc(6,b,1,1,"div",20),s.jc(7,l,1,1,"img",21),s.Nb(),s.jc(8,g,2,0,"div",22),s.Nb(),s.jc(9,m,2,0,"div",23),s.Nb()),2&t){var e=n.$implicit;s.ac("ngClass",s.dc(8,u,e.isSender)),s.zb(2),s.lc(" ",e.timestamp," "),s.zb(2),s.ac("ngIf",!e.isSender),s.zb(1),s.ac("ngClass",s.dc(10,d,"image"===e.type)),s.zb(1),s.ac("ngIf","image"!==e.type),s.zb(1),s.ac("ngIf","image"===e.type),s.zb(1),s.ac("ngIf",!e.isSender&&"image"===e.type),s.zb(1),s.ac("ngIf",e.isSender)}}function p(t,n){1&t&&(s.Ob(0,"ion-buttons",1),s.Ob(1,"ion-button"),s.Mb(2,"ion-icon",31),s.Nb(),s.Ob(3,"ion-button"),s.Mb(4,"ion-icon",32),s.Nb(),s.Ob(5,"ion-button"),s.Mb(6,"ion-icon",33),s.Nb(),s.Ob(7,"ion-button"),s.Mb(8,"ion-icon",34),s.Nb(),s.Nb())}function f(t,n){1&t&&(s.Ob(0,"ion-buttons",1),s.Ob(1,"ion-button"),s.Mb(2,"ion-icon",35),s.Nb(),s.Nb())}var O,M,y,C=[{path:"",component:(O=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){this.messages=[{isSender:!1,avatar:"assets/img/avatars/5.jpg",type:"text",body:"Hey yo what's up?",timestamp:"May 2, 2020 9:48 AM"},{isSender:!0,type:"image",body:"https://media.giphy.com/media/1g0Nz8xkYaqiBBYyLe/giphy.gif",timestamp:"May 2, 2020 9:50 AM"},{isSender:!1,avatar:"assets/img/avatars/5.jpg",type:"image",body:"https://media.giphy.com/media/4BWByhavc3Hr2/giphy.gif",timestamp:"May 2, 2020 9:52 AM"},{isSender:!0,type:"text",body:"Where are you, buddy?",timestamp:"May 2, 2020 9:53 AM"},{isSender:!1,avatar:"assets/img/avatars/5.jpg",type:"text",body:"I'm almost there",timestamp:"May 2, 2020 9:53 AM"}]}},{key:"toggleFocus",value:function(t){this.isFocus=t}},{key:"nl2br",value:function(t){return t?t.replace(/\n/gi,"<br>"):t}}]),t}(),O.\u0275fac=function(t){return new(t||O)},O.\u0275cmp=s.Fb({type:O,selectors:[["app-chat"]],decls:24,vars:4,consts:[[1,"ion-no-border"],["slot","start"],["defaultHref","/tabs/tab1"],[1,"avatar-sm","ion-margin-start"],["src","assets/img/avatars/5.jpg","alt",""],[1,"ion-text-left"],["slot","end"],["slot","icon-only","name","call"],["slot","icon-only","name","videocam"],[1,"ion-padding"],[1,"chat-list"],["class","chat-item",3,"ngClass",4,"ngFor","ngForOf"],["slot","start",4,"ngIf"],["placeholder","Aa",1,"message-input",3,"ngModel","ngModelChange","ionFocus","ionBlur"],["slot","icon-only","name","thumbs-up-sharp"],[1,"chat-item",3,"ngClass"],[1,"chat-timestamp"],[1,"chat-item-content"],["class","chat-avatar",4,"ngIf"],[1,"chat-item-bubble",3,"ngClass"],["class","chat-body",3,"innerHtml",4,"ngIf"],[3,"src",4,"ngIf"],["class","chat-item-reaction",4,"ngIf"],["class","chat-item-status",4,"ngIf"],[1,"chat-avatar"],[1,"avatar-sm"],[3,"src"],[1,"chat-body",3,"innerHtml"],[1,"chat-item-reaction"],["name","share-outline"],[1,"chat-item-status"],["slot","icon-only","name","add-circle"],["slot","icon-only","name","camera"],["slot","icon-only","name","image"],["slot","icon-only","name","mic"],["slot","icon-only","name","chevron-forward"]],template:function(t,n){1&t&&(s.Ob(0,"ion-header",0),s.Ob(1,"ion-toolbar"),s.Ob(2,"ion-buttons",1),s.Mb(3,"ion-back-button",2),s.Ob(4,"ion-avatar",3),s.Mb(5,"img",4),s.Nb(),s.Nb(),s.Ob(6,"ion-title",5),s.kc(7,"Scarlet Witch"),s.Nb(),s.Ob(8,"ion-buttons",6),s.Ob(9,"ion-button"),s.Mb(10,"ion-icon",7),s.Nb(),s.Ob(11,"ion-button"),s.Mb(12,"ion-icon",8),s.Nb(),s.Nb(),s.Nb(),s.Nb(),s.Ob(13,"ion-content",9),s.Ob(14,"div",10),s.jc(15,h,10,12,"div",11),s.Nb(),s.Nb(),s.Ob(16,"ion-footer",0),s.Ob(17,"ion-toolbar"),s.jc(18,p,9,0,"ion-buttons",12),s.jc(19,f,3,0,"ion-buttons",12),s.Ob(20,"ion-input",13),s.Vb("ngModelChange",(function(t){return n.messageInput=t}))("ionFocus",(function(){return n.toggleFocus(!0)}))("ionBlur",(function(){return n.toggleFocus(!1)})),s.Nb(),s.Ob(21,"ion-buttons",6),s.Ob(22,"ion-button"),s.Mb(23,"ion-icon",14),s.Nb(),s.Nb(),s.Nb(),s.Nb()),2&t&&(s.zb(15),s.ac("ngForOf",n.messages),s.zb(3),s.ac("ngIf",!n.isFocus),s.zb(1),s.ac("ngIf",n.isFocus),s.zb(1),s.ac("ngModel",n.messageInput))},directives:[o.l,o.C,o.g,o.c,o.d,o.b,o.B,o.f,o.m,o.j,i.i,o.k,i.j,o.n,o.J,a.d,a.e,i.h],styles:[".chat-list[_ngcontent-%COMP%]   .chat-item[_ngcontent-%COMP%]{margin-bottom:8px}.chat-list[_ngcontent-%COMP%]   .chat-item.chat-item-sender[_ngcontent-%COMP%]{text-align:right}.chat-list[_ngcontent-%COMP%]   .chat-item.chat-item-sender[_ngcontent-%COMP%]   .chat-item-content[_ngcontent-%COMP%]{justify-content:flex-end}.chat-list[_ngcontent-%COMP%]   .chat-item.chat-item-sender[_ngcontent-%COMP%]   .chat-body[_ngcontent-%COMP%]{color:#fff;background:var(--ion-color-primary);border-radius:20px;border-color:transparent}.chat-list[_ngcontent-%COMP%]   .chat-timestamp[_ngcontent-%COMP%]{text-align:center;font-size:13px;padding:8px;color:var(--ion-color-medium);text-transform:uppercase}.chat-list[_ngcontent-%COMP%]   .chat-item-status[_ngcontent-%COMP%]{font-size:13px;color:var(--ion-color-medium);margin-right:8px}.chat-list[_ngcontent-%COMP%]   .chat-item-content[_ngcontent-%COMP%]{display:flex;flex-direction:row;margin-bottom:4px}.chat-list[_ngcontent-%COMP%]   .chat-item-content[_ngcontent-%COMP%]   .chat-avatar[_ngcontent-%COMP%]{margin-right:8px;align-self:flex-end}.chat-list[_ngcontent-%COMP%]   .chat-item-content[_ngcontent-%COMP%]   .chat-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:inline-block;width:100%;border-radius:50%}.chat-list[_ngcontent-%COMP%]   .chat-item-bubble[_ngcontent-%COMP%]{position:relative;max-width:75%}.chat-list[_ngcontent-%COMP%]   .chat-item-bubble[_ngcontent-%COMP%]   .chat-body[_ngcontent-%COMP%]{display:inline-block;background:var(--ion-color-light);border-radius:20px;padding:12px 16px;white-space:normal;max-width:100%;text-align:left}.chat-list[_ngcontent-%COMP%]   .chat-item-bubble.bubble-image[_ngcontent-%COMP%]{font-size:0}.chat-list[_ngcontent-%COMP%]   .chat-item-bubble.bubble-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;max-width:480px;border-radius:16px}.chat-list[_ngcontent-%COMP%]   .chat-item-reaction[_ngcontent-%COMP%]{text-align:left;margin-left:8px;font-size:18px;align-self:center;flex-grow:99}.message-input[_ngcontent-%COMP%]{--background:var(--ion-color-light);--padding-start:12px;--padding-end:12px;border-radius:20px}"]}),O)}],v=((y=function t(){_classCallCheck(this,t)}).\u0275mod=s.Jb({type:y}),y.\u0275inj=s.Ib({factory:function(t){return new(t||y)},imports:[[c.i.forChild(C)],c.i]}),y),_=((M=function t(){_classCallCheck(this,t)}).\u0275mod=s.Jb({type:M}),M.\u0275inj=s.Ib({factory:function(t){return new(t||M)},imports:[[i.b,a.a,o.D,v]]}),M)}}]);