import{r as a,j as e,d as x,R as r,C as d,a as l,b as s}from"./index-B6RK4WsZ.js";import{P as j}from"./prism-DJPzwsyN.js";const u=()=>{new DualListbox(".select1");var i=new DualListbox(".select2",{availableTitle:"Available numbers",selectedTitle:"Selected numbers",addButtonText:">",removeButtonText:"<",addAllButtonText:">>",removeAllButtonText:"<<",searchPlaceholder:"search numbers",enableDoubleClick:!1});i.addEventListener("added",function(t){document.querySelector(".changed-element").innerHTML=t.addedElement.outerHTML}),i.addEventListener("removed",function(t){document.querySelector(".changed-element").innerHTML=t.removedElement.outerHTML}),new DualListbox(".select3",{showAddButton:!1,showAddAllButton:!1,showRemoveButton:!1,showRemoveAllButton:!1}),new DualListbox(".select4",{showSortButtons:!0});for(var c=document.querySelectorAll(".source"),n=0;n<c.length;n++){var o=c[n];o.addEventListener("click",function(t){var h=document.querySelector("."+t.currentTarget.dataset.source);h.classList.toggle("open")})}},b=()=>(a.useEffect(()=>{j.highlightAll(),u()},[]),e.jsx("div",{children:e.jsxs(x,{fluid:!0,children:[e.jsx(r,{className:"m-1",children:e.jsxs(d,{xs:12,children:[e.jsx("h4",{className:"main-title",children:"Dual Listboxes"}),e.jsxs("ul",{className:"app-line-breadcrumbs mb-3",children:[e.jsx("li",{className:"",children:e.jsx("a",{href:"#",className:"f-s-14 f-w-500",children:e.jsxs("span",{children:[e.jsx("i",{className:"ph-duotone  ph-cardholder f-s-16"}),"  Forms elements"]})})}),e.jsx("li",{className:"active",children:e.jsx("a",{href:"#",className:"f-s-14 f-w-500",children:"Dual Listboxes"})})]})]})}),e.jsxs(r,{children:[e.jsx(d,{xl:6,children:e.jsxs(l,{children:[e.jsxs("a",{className:"card-header code-header","data-bs-toggle":"collapse",href:"#collapseExample","aria-expanded":"false","aria-controls":"collapseExample",children:[e.jsx("h5",{children:"Select by class"}),e.jsx("i",{className:"ti ti-code source","data-source":"dlb1"})]}),e.jsxs(s,{children:[e.jsxs("select",{className:"select1",multiple:!0,children:[e.jsx("option",{value:"1",children:"One"}),e.jsx("option",{value:"2",children:"Two"}),e.jsx("option",{value:"3",children:"Three"})]}),e.jsx("pre",{className:"dlb1 collapse mt-3",id:"collapseExample",children:e.jsx("code",{className:"language-html",children:`
<select class="select1" multiple>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
</select>

<script>
    let dlb1 = new DualListbox('.select1');
<\/script>
`})})]})]})}),e.jsx(d,{xl:6,children:e.jsxs(l,{children:[e.jsxs("a",{className:"card-header code-header","data-bs-toggle":"collapse",href:"#dlb2Example","aria-expanded":"false","aria-controls":"dlb2Example",children:[e.jsx("h5",{children:" Add options and add eventListeners "}),e.jsx("i",{className:"ti ti-code source","data-source":"dlb2"})]}),e.jsxs(s,{children:[e.jsxs("div",{className:"selected-element d-flex mb-2 f-w-600",children:[e.jsx("label",{children:"Selected element : "}),e.jsx("ul",{className:"changed-element text-primary",children:e.jsx("li",{children:" Nothing yet"})})]}),e.jsxs("select",{className:"select2 ",multiple:!0,children:[e.jsx("option",{value:"1",children:"One"}),e.jsx("option",{value:"2",children:"Two"}),e.jsx("option",{value:"3",children:"Three"})]}),e.jsx("pre",{className:"dlb2 collapse mt-3",id:"dlb2Example",children:e.jsx("code",{className:"language-html",children:`
<select class="select2" multiple>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
</select>

<script>
    let dlb2 = new DualListbox('.select2', {
        availableTitle: 'Available numbers',
        selectedTitle: 'Selected numbers',
        addButtonText: '>',
        removeButtonText: '>',
        addAllButtonText: '>>',
        removeAllButtonText: '>>',
        searchPlaceholder: 'search numbers'
    });

    dlb2.addEventListener('added', function(event) {
        console.log(event);
    });

    dlb2.addEventListener('removed', function(event) {
        console.log(event);
    });
<\/script>
`})})]})]})}),e.jsx(d,{xl:6,children:e.jsxs(l,{children:[e.jsxs("a",{className:"card-header code-header","data-bs-toggle":"collapse",href:"#dlb3Example","aria-expanded":"false","aria-controls":"dlb3Example",children:[e.jsx("h5",{children:"Remove all the buttons from being rendered."}),e.jsx("i",{className:"ti ti-code source","data-source":"dlb3"})]}),e.jsxs(s,{children:[e.jsxs("select",{className:"select3",multiple:!0,children:[e.jsx("option",{value:"1",children:"One"}),e.jsx("option",{value:"2",children:"Two"}),e.jsx("option",{value:"3",children:"Three"})]}),e.jsx("pre",{className:"dlb3 collapse mt-3",id:"dlb3Example",children:e.jsx("code",{className:"language-html",children:`
<select class="select3" multiple>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
</select>

<script>
    let dlb3 = new DualListbox('.select3', {
        showAddButton: false,
        showAddAllButton: false,
        showRemoveButton: false,
        showRemoveAllButton: false
    });
<\/script>
`})})]})]})}),e.jsx(d,{xl:6,children:e.jsxs(l,{children:[e.jsxs("a",{className:"card-header code-header","data-bs-toggle":"collapse",href:"#dlb4Example","aria-expanded":"false","aria-controls":"dlb4Example",children:[e.jsx("h5",{children:" Show the sort buttons"}),e.jsx("i",{className:"ti ti-code source","data-source":"dlb4"})]}),e.jsxs(s,{children:[e.jsxs("select",{className:"select4",multiple:!0,children:[e.jsx("option",{value:"1",children:"One"}),e.jsx("option",{value:"2",children:"Two"}),e.jsx("option",{value:"3",children:"Three"}),e.jsx("option",{value:"4",children:"Four"}),e.jsx("option",{value:"5",children:"Five"}),e.jsx("option",{value:"6",children:"Six"}),e.jsx("option",{value:"7",children:"Seven"}),e.jsx("option",{value:"8",children:"Eight"}),e.jsx("option",{value:"9",children:"Nine"})]}),e.jsx("pre",{className:"dlb4 collapse mt-3",id:"dlb4Example",children:e.jsx("code",{className:"language-html",children:`
<select class="select4" multiple>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
</select>

<script>
    let dlb4 = new DualListbox('.select4', {
        showSortButtons: true
    });
<\/script>
`})})]})]})}),e.jsxs("div",{className:"col-md-12",children:[e.jsxs(l,{children:[e.jsx("div",{className:"card-header",children:e.jsx("h5",{children:"All options"})}),e.jsx(s,{children:e.jsx("div",{className:"table-responsive",children:e.jsxs("table",{className:"table table-bottom-border table-hover mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Option"}),e.jsx("th",{children:"Default"}),e.jsx("th",{children:"Excepted values"}),e.jsx("th",{children:"Explanation"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("th",{children:"draggable"}),e.jsx("td",{children:e.jsx("code",{children:"true"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:"If the list items should be draggable."})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"showSortButtons"}),e.jsx("td",{children:e.jsx("code",{children:"false"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:" If the sort buttons should be shown. (up and down)"})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"enableDoubleClick"}),e.jsx("td",{children:e.jsx("code",{children:"true"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:" If double clicking a list items should change column."})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"showAddButton"}),e.jsx("td",{children:e.jsx("code",{children:"true"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:'If the "add" button should be shown.'})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"showRemoveButton"}),e.jsx("td",{children:e.jsx("code",{children:"true"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:'If the "remove" button should be shown.'})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"showAddAllButton"}),e.jsx("td",{children:e.jsx("code",{children:"true"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:'If the "add all" button should be shown.'})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"showRemoveAllButton"}),e.jsx("td",{children:e.jsx("code",{children:"true"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:'If the "remove all" button should be shown.'})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"availableTitle"}),e.jsx("td",{children:e.jsx("code",{children:'"Available options"'})}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:' The title that should be shown above the "Available options"'})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"selectedTitle"}),e.jsx("td",{children:e.jsx("code",{children:'"Selected options"'})}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:' The title that should be shown above the "Selected options"'})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"addButtonText"}),e.jsx("td",{children:e.jsx("code",{children:'"add"'})}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:' The text that should be displayed in the "add" button.'})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"removeButtonText"}),e.jsx("td",{children:e.jsx("code",{children:'"remove"'})}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:' The text that should be displayed in the "remove" button.'})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"addAllButtonText"}),e.jsx("td",{children:e.jsx("code",{children:'"add all"'})}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:' The text that should be displayed in the "add all" button.'})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"removeAllButtonText"}),e.jsx("td",{children:e.jsx("code",{children:'"remove all"'})}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:' The text that should be displayed in the "remove all" button.'})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"searchPlaceholder"}),e.jsx("td",{children:e.jsx("code",{children:'"Search"'})}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:' The text that should be displayed in the "search" fields.'})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"upButtonText"}),e.jsx("td",{children:e.jsx("code",{children:'"up"'})}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:' The text that should be displayed in the "up" button. (only when sorting is enabled)'})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"downButtonText"}),e.jsx("td",{children:e.jsx("code",{children:'"down"'})}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:' The text that should be displayed in the "down" button. (only when sorting is enabled)'})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"options"}),e.jsx("td",{children:e.jsx("code",{children:"undefined"})}),e.jsx("td",{children:e.jsx("code",{children:`
 Array<{text:"text to display",
value: "what the select value should be",
selected: false, order: 1
    }>
`})}),e.jsx("td",{children:" A list of options that should be added. This will overwrite the select options"})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"sortFunction"}),e.jsx("td",{children:e.jsx("code",{children:"Function"})}),e.jsx("td",{children:e.jsx("code",{children:"Function"})}),e.jsx("td",{children:" A function to overwrite the default sorting that will be applied."})]})]})]})})})]}),e.jsxs(l,{children:[e.jsx("div",{className:"card-header",children:e.jsx("h5",{children:"Public functions"})}),e.jsx(s,{children:e.jsx("div",{className:"table-responsive",children:e.jsxs("table",{className:"table table-bottom-border table-hover mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Function name"}),e.jsx("th",{children:"Arguments"}),e.jsx("th",{children:"Explanation"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("th",{children:"changeOrder"}),e.jsx("td",{children:"liItem, newPosition"}),e.jsx("td",{children:" Change the order of the given list Element and the new position"})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"addOptions"}),e.jsx("td",{children:"options"}),e.jsx("td",{children:"Add a single option to the options list."})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"addOption"}),e.jsx("td",{children:"option, index (optional)"}),e.jsx("td",{children:" Add a single option to the options list. Optionally add the index."})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"addEventListener"}),e.jsx("td",{children:"eventName, callback"}),e.jsx("td",{children:"Add an eventListener"})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"changeSelected"}),e.jsx("td",{children:"listItem"}),e.jsx("td",{children:" Change the selected state of the list element."})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"actionAllSelected"}),e.jsx("td",{children:"event (optional)"}),e.jsx("td",{children:"Change all items to be selected."})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"actionAllDeselected"}),e.jsx("td",{children:"event (optional)"}),e.jsx("td",{children:"Change all items to not be selected."})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"redraw"}),e.jsx("td",{}),e.jsx("td",{children:"Redraw the lists."})]})]})]})})})]})]})]})]})}));export{b as default};
