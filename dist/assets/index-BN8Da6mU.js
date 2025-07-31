import{r as c,j as e,d as o,R as l,C as a,a as s,b as t}from"./index-B6RK4WsZ.js";import{P as i}from"./prism-DJPzwsyN.js";import{C as d}from"./CardHeader-D0mZSqdG.js";const h=()=>(c.useEffect(()=>{i.highlightAll()},[]),e.jsx("div",{children:e.jsxs(o,{fluid:!0,children:[e.jsx(l,{className:"m-1",children:e.jsxs(a,{xs:12,children:[e.jsx("h4",{className:"main-title",children:"Collapse"}),e.jsxs("ul",{className:"app-line-breadcrumbs mb-3",children:[e.jsx("li",{className:"",children:e.jsx("a",{href:"#",className:"f-s-14 f-w-500",children:e.jsxs("span",{children:[e.jsx("i",{className:"ph-duotone  ph-briefcase f-s-16"})," Ui kits"]})})}),e.jsx("li",{className:"active",children:e.jsx("a",{href:"#",className:"f-s-14 f-w-500",children:"Collapse"})})]})]})}),e.jsxs(l,{children:[e.jsx(a,{xs:12,children:e.jsxs(s,{children:[e.jsxs(d,{className:"code-header",children:[e.jsx("h5",{children:"Basic collapse"}),e.jsx("a",{"data-bs-toggle":"collapse",href:"#collapse1","aria-expanded":"false","aria-controls":"collapse1",children:e.jsx("i",{className:"ti ti-code source","data-source":"coll1"})})]}),e.jsxs(t,{children:[e.jsxs("p",{className:"d-inline-flex flex-wrap gap-1",children:[e.jsx("a",{className:"btn btn-primary","data-bs-toggle":"collapse",href:"#collapseExample",role:"button","aria-expanded":"false","aria-controls":"collapseExample",children:"Link with href"}),e.jsx("button",{className:"btn btn-primary",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseExample","aria-expanded":"false","aria-controls":"collapseExample",children:"Button with data-bs-target"})]}),e.jsx("div",{className:"collapse",id:"collapseExample",children:e.jsx("div",{className:"card card-body dashed-1-secondary",children:"Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger."})})]}),e.jsx("pre",{className:"coll1 collapse mt-3",id:"collapse1",children:e.jsx("code",{className:"language-html",children:`
<div class="card">
  <div class="card-header">
    <h5>Basic collapse</h5>
  </div>
  <div class="card-body">
    <p class="d-inline-flex gap-1">
      <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
        Link with href
      </a>
      <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
        Button with data-bs-target
      </button>
    </p>
    <div class="collapse" id="collapseExample">
      <div class="card card-body">
        Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
      </div>
    </div>
  </div>
</div>

`})})]})}),e.jsx(a,{xs:12,children:e.jsxs(s,{children:[e.jsxs(d,{className:"code-header",children:[e.jsx("h5",{children:"Horizontal "}),e.jsx("a",{"data-bs-toggle":"collapse",href:"#collapse2","aria-expanded":"false","aria-controls":"collapse2",children:e.jsx("i",{className:"ti ti-code source","data-source":"coll2"})})]}),e.jsxs(t,{children:[e.jsx("p",{children:e.jsx("button",{className:"btn btn-primary",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseWidthExample","aria-expanded":"false","aria-controls":"collapseWidthExample",children:"Toggle width collapse"})}),e.jsx("div",{children:e.jsx("div",{className:"collapse collapse-horizontal",id:"collapseWidthExample",children:e.jsx("div",{className:"card card-body dashed-1-secondary w-280",children:"This is some placeholder content for a horizontal collapse. It's hidden by default and shown when triggered."})})})]}),e.jsx("pre",{className:"coll2 collapse mt-3",id:"collapse2",children:e.jsx("code",{className:"language-html",children:`
  <div class="card">
  <div class="card-header">
    <h5>Horizontal</h5>
  </div>
  <div class="card-body">
    <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
      Toggle width collapse
    </button>
    <div style="min-height: 120px;">
      <div class="collapse collapse-horizontal" id="collapseWidthExample">
        <div class="card card-body" style="width: 300px;">
          This is some placeholder content for a horizontal collapse. It's hidden by default and shown when triggered.
        </div>
      </div>
    </div>
  </div>
</div>

 `})})]})}),e.jsx(a,{xs:12,children:e.jsxs(s,{children:[e.jsxs(d,{className:"code-header",children:[e.jsx("h5",{className:"txt-ellipsis",children:"Multiple toggles and targets"}),e.jsx("a",{"data-bs-toggle":"collapse",href:"#collapse3","aria-expanded":"false","aria-controls":"collapse3",children:e.jsx("i",{className:"ti ti-code source","data-source":"coll3"})})]}),e.jsxs(t,{children:[e.jsxs("p",{className:"d-inline-flex flex-wrap gap-1",children:[e.jsx("a",{className:"btn btn-primary","data-bs-toggle":"collapse",href:"#multiCollapseExample1",role:"button","aria-expanded":"false","aria-controls":"multiCollapseExample1",children:"Toggle first element"}),e.jsx("button",{className:"btn btn-primary",type:"button","data-bs-toggle":"collapse","data-bs-target":"#multiCollapseExample2","aria-expanded":"false","aria-controls":"multiCollapseExample2",children:"Toggle second element"}),e.jsx("button",{className:"btn btn-primary",type:"button","data-bs-toggle":"collapse","data-bs-target":".multi-collapse","aria-expanded":"false","aria-controls":"multiCollapseExample1 multiCollapseExample2",children:"Toggle both elements"})]}),e.jsxs(l,{children:[e.jsx(a,{xs:12,sm:6,children:e.jsx("div",{className:"collapse multi-collapse",id:"multiCollapseExample1",children:e.jsx("div",{className:"card card-body dashed-1-secondary",children:"Some placeholder content for the first collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger."})})}),e.jsx(a,{xs:12,sm:6,children:e.jsx("div",{className:"collapse multi-collapse",id:"multiCollapseExample2",children:e.jsx("div",{className:"card card-body dashed-1-secondary",children:"Some placeholder content for the second collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger."})})})]})]}),e.jsx("pre",{className:"coll3 collapse mt-3",id:"collapse3",children:e.jsx("code",{className:"language-html",children:`
  <div class="card">
  <div class="card-header">
    <h5>Multiple toggles and targets</h5>
  </div>
  <div class="card-body">
    <p class="d-inline-flex gap-1">
      <a class="btn btn-primary" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Toggle first element</a>
      <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Toggle second element</button>
      <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">Toggle both elements</button>
    </p>
    <div class="row">
      <div class="col">
        <div class="collapse multi-collapse" id="multiCollapseExample1">
          <div class="card card-body">
            Some placeholder content for the first collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
          </div>
        </div>
      </div>
      <div class="col">
        <div class="collapse multi-collapse" id="multiCollapseExample2">
          <div class="card card-body">
            Some placeholder content for the second collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  `})})]})})]})]})}));export{h as default};
