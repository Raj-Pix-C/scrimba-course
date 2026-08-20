import { propertiesArr as properties} from '../res/data/data.js';
import { placeholder_obj as placeholder} from '../res/data/placeholderObj.js';
import getArea from "../functions/getArea.js";

const containerEl = document.querySelector('.container');

function renderHTML (el, saleObj = placeholder) {
    let DOMStrings = saleObj.map( (prop) => {
        // const {l, c, p, d, r, i, gA} = prop;

        return `<section class="card">
                    <img src="${prop.image}" alt="property image"/>
                    <div class="card-right">
                        <h2>${prop.location}</h2>
                        <h3>${prop.currency}${prop.price}</h3>
                        <p>${prop.description}</p>
                        <h3>${prop.area} m&sup2;</h3>
                    </div>
                </section>`;
    }).join('\n');

    console.log(DOMStrings);
    el.innerHTML = DOMStrings;

}

// renderHTML(containerEl);
renderHTML(containerEl, properties);