"use strict";(self.webpackChunkpizzatime=self.webpackChunkpizzatime||[]).push([[351],{7351:function(t,e,r){r.r(e),r.d(e,{default:function(){return h}});var n=r(3433),c=r(1413),a=r(9439),i=r(1087),u=r(2791),s=r(7799),o=r(1516),f=r(2001),p=r(9164),b=r(7716),d=r(3329);function h(){var t=(0,u.useState)([]),e=(0,a.Z)(t,2),r=e[0],h=e[1],Z=(0,u.useState)([]),k=(0,a.Z)(Z,2),g=k[0],l=k[1],w=(0,i.lr)(),L=(0,a.Z)(w,2),m=L[0],y=L[1],z=m.get("sort"),P=(0,s.hJ)(o.db,"products");return(0,u.useEffect)((function(){(0,s.PL)(P).then((function(t){return t.docs.map((function(t){return(0,c.Z)({id:t.id},t.data())}))})).then(h).catch(alert)}),[]),(0,u.useEffect)((function(){switch(z){case b.L.byPriceDown:l((0,n.Z)(r.sort((function(t,e){return e.price-t.price}))));break;case b.L.byPriceUp:l((0,n.Z)(r.sort((function(t,e){return t.price-e.price}))));break;case b.L.byRatingDown:l((0,n.Z)(r.sort((function(t,e){return e.rating-t.rating}))));break;case b.L.byRatingUp:l((0,n.Z)(r.sort((function(t,e){return t.rating-e.rating}))));break;default:l((0,n.Z)(r))}}),[r,z]),(0,d.jsxs)(p.Z,{children:[(0,d.jsx)(f.wn,{setSearchParams:y}),(0,d.jsx)(f.RX,{products:g})]})}}}]);
//# sourceMappingURL=351.a38169cf.chunk.js.map