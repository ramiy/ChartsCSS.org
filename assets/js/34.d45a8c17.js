(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{410:function(t,s,a){"use strict";a.r(s);var e=a(46),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"reverse-order"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reverse-order"}},[t._v("#")]),t._v(" Reverse Order")]),t._v(" "),a("p",[t._v("You can reverse the order of the elements without changing the HTML markup.")]),t._v(" "),a("h2",{attrs:{id:"reordering-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reordering-data"}},[t._v("#")]),t._v(" Reordering Data")]),t._v(" "),a("p",[t._v("Generally speaking, the framework doesn't deal with data - it only styles the data.")]),t._v(" "),a("p",[t._v("But in some unique cases you don't have access to the HTML markup. In other cases you receive an auto-generate HTML table from a backend server you have no control over.")]),t._v(" "),a("p",[t._v("You can use JS to alter the content, but "),a("strong",[t._v("Chart.css")]),t._v(" has two utility classes that can change displayed order without changing the HTML markup.")]),t._v(" "),a("p",[t._v("Note: Before changing content order using CSS, make sure there are no focusable elements ("),a("code",[t._v("<button>")]),t._v(", "),a("code",[t._v("<a>")]),t._v(" etc.). It can be very confusing for users using a keyboard.")]),t._v(" "),a("h2",{attrs:{id:"reverse-data-order"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reverse-data-order"}},[t._v("#")]),t._v(" Reverse Data Order")]),t._v(" "),a("p",[t._v("When using a single datasets, you can use the "),a("code",[t._v(".reverse-data")]),t._v(" class to reverse the order of your data.")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("table")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("charts-css column reverse-data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  ...\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("table")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("Original data:")]),t._v(" "),a("code-example",{attrs:{"code-example-id":"reverse-data-example-1"},scopedSlots:t._u([{key:"css-code",fn:function(){return[t._v("\n#reverse-data-example-1 {\n  height: 250px;\n  max-width: 800px;\n  margin: 0 auto;\n}\n")]},proxy:!0},{key:"html-code",fn:function(){return[a("table",{staticClass:"charts-css column show-labels hide-data",attrs:{id:"reverse-data-example-1"}},[a("caption",[t._v(" Reverse Data Example #1 ")]),t._v(" "),a("thead",[a("tr",[a("th",{attrs:{scope:"col"}},[t._v(" Month ")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v(" Progress ")])])]),t._v(" "),a("tbody",[a("tr",[a("th",{attrs:{scope:"row"}},[t._v(" Jan ")]),t._v(" "),a("td",{staticStyle:{"--size":"0.3"}},[a("span",{staticClass:"data"},[t._v(" 30 ")])])]),t._v(" "),a("tr",[a("th",{attrs:{scope:"row"}},[t._v(" Feb ")]),t._v(" "),a("td",{staticStyle:{"--size":"0.5"}},[a("span",{staticClass:"data"},[t._v(" 50 ")])])]),t._v(" "),a("tr",[a("th",{attrs:{scope:"row"}},[t._v(" Mar ")]),t._v(" "),a("td",{staticStyle:{"--size":"0.8"}},[a("span",{staticClass:"data"},[t._v(" 80 ")])])]),t._v(" "),a("tr",[a("th",{attrs:{scope:"row"}},[t._v(" Apr ")]),t._v(" "),a("td",{staticStyle:{"--size":"1"}},[a("span",{staticClass:"data"},[t._v(" 100 ")])])]),t._v(" "),a("tr",[a("th",{attrs:{scope:"row"}},[t._v(" May ")]),t._v(" "),a("td",{staticStyle:{"--size":"0.65"}},[a("span",{staticClass:"data"},[t._v(" 65 ")])])]),t._v(" "),a("tr",[a("th",{attrs:{scope:"row"}},[t._v(" Jun ")]),t._v(" "),a("td",{staticStyle:{"--size":"0.45"}},[a("span",{staticClass:"data"},[t._v(" 45 ")])])]),t._v(" "),a("tr",[a("th",{attrs:{scope:"row"}},[t._v(" Jul ")]),t._v(" "),a("td",{staticStyle:{"--size":"0.15"}},[a("span",{staticClass:"data"},[t._v(" 15 ")])])]),t._v(" "),a("tr",[a("th",{attrs:{scope:"row"}},[t._v(" Aug ")]),t._v(" "),a("td",{staticStyle:{"--size":"0.32"}},[a("span",{staticClass:"data"},[t._v(" 32 ")])])]),t._v(" "),a("tr",[a("th",{attrs:{scope:"row"}},[t._v(" Sep ")]),t._v(" "),a("td",{staticStyle:{"--size":"0.6"}},[a("span",{staticClass:"data"},[t._v(" 60 ")])])]),t._v(" "),a("tr",[a("th",{attrs:{scope:"row"}},[t._v(" Oct ")]),t._v(" "),a("td",{staticStyle:{"--size":"0.9"}},[a("span",{staticClass:"data"},[t._v(" 90 ")])])]),t._v(" "),a("tr",[a("th",{attrs:{scope:"row"}},[t._v(" Nov ")]),t._v(" "),a("td",{staticStyle:{"--size":"0.55"}},[a("span",{staticClass:"data"},[t._v(" 55 ")])])]),t._v(" "),a("tr",[a("th",{attrs:{scope:"row"}},[t._v(" Dec ")]),t._v(" "),a("td",{staticStyle:{"--size":"0.4"}},[a("span",{staticClass:"data"},[t._v(" 40 ")])])])])])]},proxy:!0}])}),t._v(" "),a("p",[t._v("Reversed data:")]),t._v(" "),a("code-example",{attrs:{"code-example-id":"reverse-data-example-2"},scopedSlots:t._u([{key:"css-code",fn:function(){return[t._v("\n#reverse-data-example-2 {\n  height: 250px;\n  max-width: 800px;\n  margin: 0 auto;\n}\n")]},proxy:!0},{key:"html-code",fn:function(){return[a("table",{staticClass:"charts-css column show-labels hide-data reverse-data",attrs:{id:"reverse-data-example-2"}},[a("caption",[t._v(" Reverse Data Example #2 ")]),t._v(" "),a("thead",[a("tr",[a("th",{attrs:{scope:"col"}},[t._v(" Month ")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v(" Progress ")])])]),t._v(" "),a("tbody",[a("tr",[a("th",{attrs:{scope:"row"}},[t._v(" Jan ")]),t._v(" "),a("td",{staticStyle:{"--size":"0.3"}},[a("span",{staticClass:"data"},[t._v(" 30 ")])])]),t._v(" "),a("tr",[a("th",{attrs:{scope:"row"}},[t._v(" Feb ")]),t._v(" "),a("td",{staticStyle:{"--size":"0.5"}},[a("span",{staticClass:"data"},[t._v(" 50 ")])])]),t._v(" "),a("tr",[a("th",{attrs:{scope:"row"}},[t._v(" Mar ")]),t._v(" "),a("td",{staticStyle:{"--size":"0.8"}},[a("span",{staticClass:"data"},[t._v(" 80 ")])])]),t._v(" "),a("tr",[a("th",{attrs:{scope:"row"}},[t._v(" Apr ")]),t._v(" "),a("td",{staticStyle:{"--size":"1"}},[a("span",{staticClass:"data"},[t._v(" 100 ")])])]),t._v(" "),a("tr",[a("th",{attrs:{scope:"row"}},[t._v(" May ")]),t._v(" "),a("td",{staticStyle:{"--size":"0.65"}},[a("span",{staticClass:"data"},[t._v(" 65 ")])])]),t._v(" "),a("tr",[a("th",{attrs:{scope:"row"}},[t._v(" Jun ")]),t._v(" "),a("td",{staticStyle:{"--size":"0.45"}},[a("span",{staticClass:"data"},[t._v(" 45 ")])])]),t._v(" "),a("tr",[a("th",{attrs:{scope:"row"}},[t._v(" Jul ")]),t._v(" "),a("td",{staticStyle:{"--size":"0.15"}},[a("span",{staticClass:"data"},[t._v(" 15 ")])])]),t._v(" "),a("tr",[a("th",{attrs:{scope:"row"}},[t._v(" Aug ")]),t._v(" "),a("td",{staticStyle:{"--size":"0.32"}},[a("span",{staticClass:"data"},[t._v(" 32 ")])])]),t._v(" "),a("tr",[a("th",{attrs:{scope:"row"}},[t._v(" Sep ")]),t._v(" "),a("td",{staticStyle:{"--size":"0.6"}},[a("span",{staticClass:"data"},[t._v(" 60 ")])])]),t._v(" "),a("tr",[a("th",{attrs:{scope:"row"}},[t._v(" Oct ")]),t._v(" "),a("td",{staticStyle:{"--size":"0.9"}},[a("span",{staticClass:"data"},[t._v(" 90 ")])])]),t._v(" "),a("tr",[a("th",{attrs:{scope:"row"}},[t._v(" Nov ")]),t._v(" "),a("td",{staticStyle:{"--size":"0.55"}},[a("span",{staticClass:"data"},[t._v(" 55 ")])])]),t._v(" "),a("tr",[a("th",{attrs:{scope:"row"}},[t._v(" Dec ")]),t._v(" "),a("td",{staticStyle:{"--size":"0.4"}},[a("span",{staticClass:"data"},[t._v(" 40 ")])])])])])]},proxy:!0}])}),t._v(" "),a("h2",{attrs:{id:"reverse-datasets-order"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reverse-datasets-order"}},[t._v("#")]),t._v(" Reverse Datasets Order")]),t._v(" "),a("p",[t._v("When using a multiple datasets, you can use the "),a("code",[t._v(".reverse-datasets")]),t._v(" class to reverse the order of your datasets.")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("table")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("charts-css column reverse-datasets"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  ...\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("table")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("Original:")]),t._v(" "),a("code-example",{attrs:{"code-example-id":"reverse-datasets-example-1"},scopedSlots:t._u([{key:"css-code",fn:function(){return[t._v("\n#reverse-datasets-example-1 {\n  height: 250px;\n  max-width: 800px;\n  margin: 0 auto;\n}\n")]},proxy:!0},{key:"html-code",fn:function(){return[a("table",{staticClass:"charts-css column multiple show-labels hide-data show-data-axes data-spacing-20 datasets-spacing-4",attrs:{id:"reverse-datasets-example-1"}},[a("caption",[t._v(" Reverse Datasets Example #1 ")]),t._v(" "),a("thead",[a("tr",[a("th",{attrs:{scope:"col"}},[t._v(" Year ")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v(" Progress 1 ")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v(" Progress 2 ")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v(" Progress 3 ")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v(" Progress 4 ")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v(" Progress 5 ")])])]),t._v(" "),a("tbody",[a("tr",[a("th",{attrs:{scope:"row"}},[t._v(" 2000 ")]),t._v(" "),a("td",{staticStyle:{"--size":"0.2"}},[a("span",{staticClass:"data"},[t._v(" 20 ")])]),t._v(" "),a("td",{staticStyle:{"--size":"0.5"}},[a("span",{staticClass:"data"},[t._v(" 50 ")])]),t._v(" "),a("td",{staticStyle:{"--size":"1.0"}},[a("span",{staticClass:"data"},[t._v(" 100 ")])]),t._v(" "),a("td",{staticStyle:{"--size":"0.7"}},[a("span",{staticClass:"data"},[t._v(" 70 ")])]),t._v(" "),a("td",{staticStyle:{"--size":"0.4"}},[a("span",{staticClass:"data"},[t._v(" 40 ")])])]),t._v(" "),a("tr",[a("th",{attrs:{scope:"row"}},[t._v(" 2010 ")]),t._v(" "),a("td",{staticStyle:{"--size":"0.9"}},[a("span",{staticClass:"data"},[t._v(" 90 ")])]),t._v(" "),a("td",{staticStyle:{"--size":"0.6"}},[a("span",{staticClass:"data"},[t._v(" 60 ")])]),t._v(" "),a("td",{staticStyle:{"--size":"0.4"}},[a("span",{staticClass:"data"},[t._v(" 40 ")])]),t._v(" "),a("td",{staticStyle:{"--size":"0.7"}},[a("span",{staticClass:"data"},[t._v(" 70 ")])]),t._v(" "),a("td",{staticStyle:{"--size":"1.0"}},[a("span",{staticClass:"data"},[t._v(" 100 ")])])]),t._v(" "),a("tr",[a("th",{attrs:{scope:"row"}},[t._v(" 2020 ")]),t._v(" "),a("td",{staticStyle:{"--size":"0.2"}},[a("span",{staticClass:"data"},[t._v(" 20 ")])]),t._v(" "),a("td",{staticStyle:{"--size":"0.4"}},[a("span",{staticClass:"data"},[t._v(" 40 ")])]),t._v(" "),a("td",{staticStyle:{"--size":"0.6"}},[a("span",{staticClass:"data"},[t._v(" 60 ")])]),t._v(" "),a("td",{staticStyle:{"--size":"0.8"}},[a("span",{staticClass:"data"},[t._v(" 80 ")])]),t._v(" "),a("td",{staticStyle:{"--size":"1.0"}},[a("span",{staticClass:"data"},[t._v(" 100 ")])])])])])]},proxy:!0}])}),t._v(" "),a("p",[t._v("Reversed datasets:")]),t._v(" "),a("code-example",{attrs:{"code-example-id":"reverse-datasets-example-2"},scopedSlots:t._u([{key:"css-code",fn:function(){return[t._v("\n#reverse-datasets-example-2 {\n  height: 250px;\n  max-width: 800px;\n  margin: 0 auto;\n}\n")]},proxy:!0},{key:"html-code",fn:function(){return[a("table",{staticClass:"charts-css column multiple show-labels hide-data show-data-axes data-spacing-20 datasets-spacing-4 reverse-datasets",attrs:{id:"reverse-datasets-example-2"}},[a("caption",[t._v(" Reverse Datasets Example #2 ")]),t._v(" "),a("thead",[a("tr",[a("th",{attrs:{scope:"col"}},[t._v(" Year ")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v(" Progress 1 ")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v(" Progress 2 ")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v(" Progress 3 ")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v(" Progress 4 ")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v(" Progress 5 ")])])]),t._v(" "),a("tbody",[a("tr",[a("th",{attrs:{scope:"row"}},[t._v(" 2000 ")]),t._v(" "),a("td",{staticStyle:{"--size":"0.2"}},[a("span",{staticClass:"data"},[t._v(" 20 ")])]),t._v(" "),a("td",{staticStyle:{"--size":"0.5"}},[a("span",{staticClass:"data"},[t._v(" 50 ")])]),t._v(" "),a("td",{staticStyle:{"--size":"1.0"}},[a("span",{staticClass:"data"},[t._v(" 100 ")])]),t._v(" "),a("td",{staticStyle:{"--size":"0.7"}},[a("span",{staticClass:"data"},[t._v(" 70 ")])]),t._v(" "),a("td",{staticStyle:{"--size":"0.4"}},[a("span",{staticClass:"data"},[t._v(" 40 ")])])]),t._v(" "),a("tr",[a("th",{attrs:{scope:"row"}},[t._v(" 2010 ")]),t._v(" "),a("td",{staticStyle:{"--size":"0.9"}},[a("span",{staticClass:"data"},[t._v(" 90 ")])]),t._v(" "),a("td",{staticStyle:{"--size":"0.6"}},[a("span",{staticClass:"data"},[t._v(" 60 ")])]),t._v(" "),a("td",{staticStyle:{"--size":"0.4"}},[a("span",{staticClass:"data"},[t._v(" 40 ")])]),t._v(" "),a("td",{staticStyle:{"--size":"0.7"}},[a("span",{staticClass:"data"},[t._v(" 70 ")])]),t._v(" "),a("td",{staticStyle:{"--size":"1.0"}},[a("span",{staticClass:"data"},[t._v(" 100 ")])])]),t._v(" "),a("tr",[a("th",{attrs:{scope:"row"}},[t._v(" 2020 ")]),t._v(" "),a("td",{staticStyle:{"--size":"0.2"}},[a("span",{staticClass:"data"},[t._v(" 20 ")])]),t._v(" "),a("td",{staticStyle:{"--size":"0.4"}},[a("span",{staticClass:"data"},[t._v(" 40 ")])]),t._v(" "),a("td",{staticStyle:{"--size":"0.6"}},[a("span",{staticClass:"data"},[t._v(" 60 ")])]),t._v(" "),a("td",{staticStyle:{"--size":"0.8"}},[a("span",{staticClass:"data"},[t._v(" 80 ")])]),t._v(" "),a("td",{staticStyle:{"--size":"1.0"}},[a("span",{staticClass:"data"},[t._v(" 100 ")])])])])])]},proxy:!0}])}),t._v(" "),a("h2",{attrs:{id:"reverse-data-datasets-order"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reverse-data-datasets-order"}},[t._v("#")]),t._v(" Reverse Data & Datasets Order")]),t._v(" "),a("p",[t._v("You can combine the two classes to reverse data order and datasets order.")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("table")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("charts-css column reverse-data reverse-datasets"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  ...\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("table")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("Original:")]),t._v(" "),a("code-example",{attrs:{"code-example-id":"reverse-data-datasets-example-1"},scopedSlots:t._u([{key:"css-code",fn:function(){return[t._v("\n#reverse-data-datasets-example-1 {\n  height: 250px;\n  max-width: 800px;\n  margin: 0 auto;\n}\n")]},proxy:!0},{key:"html-code",fn:function(){return[a("table",{staticClass:"charts-css column multiple show-labels hide-data show-data-axes data-spacing-20 datasets-spacing-4",attrs:{id:"reverse-data-datasets-example-1"}},[a("caption",[t._v(" Reverse Data & Datasets Example #1 ")]),t._v(" "),a("thead",[a("tr",[a("th",{attrs:{scope:"col"}},[t._v(" Year ")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v(" Progress 1 ")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v(" Progress 2 ")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v(" Progress 3 ")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v(" Progress 4 ")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v(" Progress 5 ")])])]),t._v(" "),a("tbody",[a("tr",[a("th",{attrs:{scope:"row"}},[t._v(" 2000 ")]),t._v(" "),a("td",{staticStyle:{"--size":"0.2"}},[a("span",{staticClass:"data"},[t._v(" 20 ")])]),t._v(" "),a("td",{staticStyle:{"--size":"0.5"}},[a("span",{staticClass:"data"},[t._v(" 50 ")])]),t._v(" "),a("td",{staticStyle:{"--size":"1.0"}},[a("span",{staticClass:"data"},[t._v(" 100 ")])]),t._v(" "),a("td",{staticStyle:{"--size":"0.7"}},[a("span",{staticClass:"data"},[t._v(" 70 ")])]),t._v(" "),a("td",{staticStyle:{"--size":"0.4"}},[a("span",{staticClass:"data"},[t._v(" 40 ")])])]),t._v(" "),a("tr",[a("th",{attrs:{scope:"row"}},[t._v(" 2010 ")]),t._v(" "),a("td",{staticStyle:{"--size":"0.9"}},[a("span",{staticClass:"data"},[t._v(" 90 ")])]),t._v(" "),a("td",{staticStyle:{"--size":"0.6"}},[a("span",{staticClass:"data"},[t._v(" 60 ")])]),t._v(" "),a("td",{staticStyle:{"--size":"0.4"}},[a("span",{staticClass:"data"},[t._v(" 40 ")])]),t._v(" "),a("td",{staticStyle:{"--size":"0.7"}},[a("span",{staticClass:"data"},[t._v(" 70 ")])]),t._v(" "),a("td",{staticStyle:{"--size":"1.0"}},[a("span",{staticClass:"data"},[t._v(" 100 ")])])]),t._v(" "),a("tr",[a("th",{attrs:{scope:"row"}},[t._v(" 2020 ")]),t._v(" "),a("td",{staticStyle:{"--size":"0.2"}},[a("span",{staticClass:"data"},[t._v(" 20 ")])]),t._v(" "),a("td",{staticStyle:{"--size":"0.4"}},[a("span",{staticClass:"data"},[t._v(" 40 ")])]),t._v(" "),a("td",{staticStyle:{"--size":"0.6"}},[a("span",{staticClass:"data"},[t._v(" 60 ")])]),t._v(" "),a("td",{staticStyle:{"--size":"0.8"}},[a("span",{staticClass:"data"},[t._v(" 80 ")])]),t._v(" "),a("td",{staticStyle:{"--size":"1.0"}},[a("span",{staticClass:"data"},[t._v(" 100 ")])])])])])]},proxy:!0}])}),t._v(" "),a("p",[t._v("Reversed data & datasets:")]),t._v(" "),a("code-example",{attrs:{"code-example-id":"reverse-data-datasets-example-2"},scopedSlots:t._u([{key:"css-code",fn:function(){return[t._v("\n#reverse-data-datasets-example-2 {\n  height: 250px;\n  max-width: 800px;\n  margin: 0 auto;\n}\n")]},proxy:!0},{key:"html-code",fn:function(){return[a("table",{staticClass:"charts-css column multiple show-labels hide-data show-data-axes data-spacing-20 datasets-spacing-4 reverse-data reverse-datasets",attrs:{id:"reverse-data-datasets-example-2"}},[a("caption",[t._v(" Reverse Data & Datasets Example #2 ")]),t._v(" "),a("thead",[a("tr",[a("th",{attrs:{scope:"col"}},[t._v(" Year ")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v(" Progress 1 ")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v(" Progress 2 ")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v(" Progress 3 ")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v(" Progress 4 ")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v(" Progress 5 ")])])]),t._v(" "),a("tbody",[a("tr",[a("th",{attrs:{scope:"row"}},[t._v(" 2000 ")]),t._v(" "),a("td",{staticStyle:{"--size":"0.2"}},[a("span",{staticClass:"data"},[t._v(" 20 ")])]),t._v(" "),a("td",{staticStyle:{"--size":"0.5"}},[a("span",{staticClass:"data"},[t._v(" 50 ")])]),t._v(" "),a("td",{staticStyle:{"--size":"1.0"}},[a("span",{staticClass:"data"},[t._v(" 100 ")])]),t._v(" "),a("td",{staticStyle:{"--size":"0.7"}},[a("span",{staticClass:"data"},[t._v(" 70 ")])]),t._v(" "),a("td",{staticStyle:{"--size":"0.4"}},[a("span",{staticClass:"data"},[t._v(" 40 ")])])]),t._v(" "),a("tr",[a("th",{attrs:{scope:"row"}},[t._v(" 2010 ")]),t._v(" "),a("td",{staticStyle:{"--size":"0.9"}},[a("span",{staticClass:"data"},[t._v(" 90 ")])]),t._v(" "),a("td",{staticStyle:{"--size":"0.6"}},[a("span",{staticClass:"data"},[t._v(" 60 ")])]),t._v(" "),a("td",{staticStyle:{"--size":"0.4"}},[a("span",{staticClass:"data"},[t._v(" 40 ")])]),t._v(" "),a("td",{staticStyle:{"--size":"0.7"}},[a("span",{staticClass:"data"},[t._v(" 70 ")])]),t._v(" "),a("td",{staticStyle:{"--size":"1.0"}},[a("span",{staticClass:"data"},[t._v(" 100 ")])])]),t._v(" "),a("tr",[a("th",{attrs:{scope:"row"}},[t._v(" 2020 ")]),t._v(" "),a("td",{staticStyle:{"--size":"0.2"}},[a("span",{staticClass:"data"},[t._v(" 20 ")])]),t._v(" "),a("td",{staticStyle:{"--size":"0.4"}},[a("span",{staticClass:"data"},[t._v(" 40 ")])]),t._v(" "),a("td",{staticStyle:{"--size":"0.6"}},[a("span",{staticClass:"data"},[t._v(" 60 ")])]),t._v(" "),a("td",{staticStyle:{"--size":"0.8"}},[a("span",{staticClass:"data"},[t._v(" 80 ")])]),t._v(" "),a("td",{staticStyle:{"--size":"1.0"}},[a("span",{staticClass:"data"},[t._v(" 100 ")])])])])])]},proxy:!0}])})],1)}),[],!1,null,null,null);s.default=r.exports}}]);