
import { Component, VirtualDom, VirtualDomTypes } from "bayrell-web-js";


class App
{

    /**
     * Render
     */
    render(vdom, old_layout, new_layout, model_path, params = {}, content = null)
    {
        let model = new_layout;

        // <div class="label">Hello world</div>
        let div1 = vdom.e("div", { "class": "label" });
        div1.html("Hello " + model["username"]);
        div1.p();
    }


    /**
     * Patch
     */
    patch(vdom, old_layout, new_layout, model_path)
    {
        let old_model = old_layout;
        let new_model = new_layout;

        /* Change label */
        if (old_model["username"] != new_model["username"])
        {
            let label = vdom.elem.querySelector(".label");
            if (label) label.innerHTML = "Hello " + new_model["username"];
        }
    }
}

let layout =
{
    "username": "John",
};
let elem = document.getElementById("root");
let vdom = VirtualDom.create(elem, VirtualDomTypes.ELEMENT);
let app = new App();
app.render( vdom, layout, layout, [] );
vdom.p();
