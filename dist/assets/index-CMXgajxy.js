import{r as d,j as s,d as c,R as r,C as e,a,b as l}from"./index-B6RK4WsZ.js";import{P as o}from"./prism-DJPzwsyN.js";import{C as i}from"./CardHeader-D0mZSqdG.js";const h=()=>(d.useEffect(()=>{o.highlightAll()},[]),s.jsx("div",{children:s.jsxs(c,{fluid:!0,children:[s.jsx(r,{className:"m-1",children:s.jsxs(e,{xs:12,children:[s.jsx("h4",{className:"main-title",children:"Prismjs"}),s.jsxs("ul",{className:"app-line-breadcrumbs mb-3",children:[s.jsx("li",{className:"",children:s.jsx("a",{href:"#",className:"f-s-14 f-w-500",children:s.jsxs("span",{children:[s.jsx("i",{className:"ph-duotone  ph-briefcase-metal f-s-16"})," Advance UI"]})})}),s.jsx("li",{className:"active",children:s.jsx("a",{href:"#",className:"f-s-14 f-w-500",children:"Prismjs"})})]})]})}),s.jsxs(r,{children:[s.jsx(e,{xxl:6,xl:6,lg:12,children:s.jsxs(r,{children:[s.jsx(e,{xs:12,children:s.jsxs(a,{children:[s.jsx(i,{children:s.jsx("h6",{children:"Dual Listboxes-html"})}),s.jsx(l,{children:s.jsx("div",{children:s.jsx("pre",{children:s.jsx("code",{className:"language-html",children:`<div class="container-fluid">
    <div class="row">
        <div class="col-md-6">
            <div class="card">
                <div class="card-header code-header" data-bs-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    <h5>Select by class</h5>
                    <i class="ti ti-code source" data-source="dlb1"></i>
                </div>
                <div class="card-body">
                    <select class="select1" multiple>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
</div>`})})})})]})}),s.jsx(e,{xs:12,children:s.jsxs(a,{children:[s.jsx(i,{children:s.jsx("h6",{children:"Dual Listboxes-css"})}),s.jsx(l,{children:s.jsx("pre",{children:s.jsx("code",{className:"language-css",children:`.dual-listbox .dual-listbox__button {
    border-radius: 5px;
    background-color: rgba(var(--primary), 0.9);
    padding: 7px 12px;
}
.dual-listbox .dual-listbox__button:hover {
    background-color: rgba(var(--primary), 1);
    transition: all 0.3s ease;
}
.dual-listbox .dual-listbox__item.dual-listbox__item--selected {
    background-color: rgba(var(--primary), 0.1);
    color: rgba(var(--primary), 1);
}`})})})]})})]})}),s.jsx(e,{xxl:6,xl:6,lg:12,children:s.jsxs(r,{children:[s.jsx(e,{xs:12,children:s.jsxs(a,{children:[s.jsx(i,{children:s.jsx("h6",{children:"Dual Listboxes-scss"})}),s.jsx(l,{children:s.jsx("pre",{className:"h-390",children:s.jsx("code",{className:"language-css",children:`.dual-listbox {
    width: 100%;
    .dual-listbox__container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: unset;
    }
    .dual-listbox__search {
        color: rgba(var(--secondary), 1);
        padding: 0.4rem 0.75rem;
        border: 1px solid var(--border_color);
        border-radius: 0.3rem;
        &:focus {
            color: rgba(var(--dark), 1);
            box-shadow: 0 0 0 0.25rem rgba(var(--primary), 0.3);
            border: 1px solid rgba(var(--primary), 1);
            outline: none;
        }
    }
    .dual-listbox__title {
        font-weight: 600;
        color: rgba(var(--dark), 0.60);
        padding: 0.6rem 1rem;
        border-radius: 0.3rem 0.3rem 0 0;
        border-color: rgba(var(--dark), 0.20);
    }
    .dual-listbox__available, .dual-listbox__selected {
        border-radius: 0 0 0.3rem 0.3rem;
        border: 1px solid rgba(var(--dark), 0.20);
    }
}`})})})]})}),s.jsx(e,{xs:12,children:s.jsxs(a,{children:[s.jsx(i,{children:s.jsx("h6",{children:"Dual Listboxes-javascript"})}),s.jsx(l,{children:s.jsx("pre",{children:s.jsx("code",{className:"language-javascript",children:`var dlb4 = new DualListbox(".select4", {
    showSortButtons: true,
});
var sources = document.querySelectorAll(".source");
for (var i = 0; i < sources.length; i++) {
    var source = sources[i];
    source.addEventListener("click", function(event) {
        var code = document.querySelector("." + event.currentTarget.dataset.source);
        code.classList.toggle("open");
    });
}`})})})]})})]})})]})]})}));export{h as default};
