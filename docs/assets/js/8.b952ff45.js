(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{354:function(e,t,a){"use strict";a.r(t);var s=a(42),i=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"csv-features-summary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#csv-features-summary"}},[e._v("#")]),e._v(" CSV Features & Summary")]),e._v(" "),a("p",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://user-images.githubusercontent.com/153843/92571108-9e0ff800-f27a-11ea-9fe9-9f9dcbd7125a.png",width:"700",height:"500"}})]),e._v(" "),a("p",[e._v("Select "),a("strong",[e._v("Type")]),e._v(" of the query to "),a("code",[e._v("CSV")]),e._v(". You can either specify the URL of the CSV file or can provide inline CSV. Though your csv file have columns, specify them as columns manually and only that fields will be considered for display. Columns will appear in the same order you specify. Each column will have following properties")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Column")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("Title")]),e._v(" "),a("td",[e._v("Title of the column when using the table format")])]),e._v(" "),a("tr",[a("td",[e._v("Selector")]),e._v(" "),a("td",[e._v("Column name in CSV file. Case sensitive")])]),e._v(" "),a("tr",[a("td",[e._v("Format")]),e._v(" "),a("td",[e._v("Format of the column")])])])]),e._v(" "),a("h2",{attrs:{id:"csv-url"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#csv-url"}},[e._v("#")]),e._v(" CSV URL")]),e._v(" "),a("p",[e._v("In the below example, we are going to convert the CSV URL "),a("code",[e._v("https://gist.githubusercontent.com/yesoreyeram/64a46b02f0bf87cb527d6270dd84ea47/raw/32ae9b1a4a0183dceb3596226b818c8f428193af/sample-with-quotes.csv")]),e._v(" into a grafana datasource.")]),e._v(" "),a("p",[e._v("CSV data should have columns as its first line and comma delimited. You need to also specify the column names manually for display purposes.")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/153843/92382040-d8a35480-f103-11ea-8ff8-48c7ca211062.png",alt:"image"}})]),e._v(" "),a("p",[e._v("Ignore the root / rows as each line of CSV will be your rows.")]),e._v(" "),a("h2",{attrs:{id:"csv-inline"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#csv-inline"}},[e._v("#")]),e._v(" CSV Inline")]),e._v(" "),a("p",[e._v("Instead of specifying URL, you can use hardcoded csv values. For example, you can specify the csv in the following format")]),e._v(" "),a("div",{staticClass:"language-csv extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("country,population,capital\nindia,200,mumbai\nindia,100,chennai\nchina,500,beijing\nusa,200,washington\ncanada,100,ottawa\n")])])]),a("p",[e._v("Below screenshot shows the example of csv inline datasource")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/153843/92571108-9e0ff800-f27a-11ea-9fe9-9f9dcbd7125a.png",alt:"image"}})]),e._v(" "),a("h2",{attrs:{id:"csv-to-timeseries"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#csv-to-timeseries"}},[e._v("#")]),e._v(" CSV to timeseries")]),e._v(" "),a("h3",{attrs:{id:"one-time-field-and-one-metric-field"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#one-time-field-and-one-metric-field"}},[e._v("#")]),e._v(" One time field and one metric field")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/153843/92711761-b81c0a00-f350-11ea-9e57-30982f9322fe.png",alt:"image"}})]),e._v(" "),a("h3",{attrs:{id:"one-time-field-one-string-field-and-one-metric-field"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#one-time-field-one-string-field-and-one-metric-field"}},[e._v("#")]),e._v(" One time field, one string field and one metric field")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/153843/92711827-c66a2600-f350-11ea-9941-4d8d03a5dc6c.png",alt:"image"}})]),e._v(" "),a("h3",{attrs:{id:"one-time-field-one-string-field-and-multiple-metric-fields"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#one-time-field-one-string-field-and-multiple-metric-fields"}},[e._v("#")]),e._v(" One time field, one string field and multiple metric fields")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/153843/92711908-d84bc900-f350-11ea-94b8-7a02f98ff3ab.png",alt:"image"}})]),e._v(" "),a("h3",{attrs:{id:"one-time-field-and-multiple-metric-fields"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#one-time-field-and-multiple-metric-fields"}},[e._v("#")]),e._v(" One time field and multiple metric fields")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/153843/92711942-e568b800-f350-11ea-8191-4e8f493f1ec1.png",alt:"image"}})]),e._v(" "),a("h3",{attrs:{id:"one-string-field-and-one-number-field"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#one-string-field-and-one-number-field"}},[e._v("#")]),e._v(" One string field and one number field")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/153843/92711986-f3b6d400-f350-11ea-97f8-fae28f44e8ec.png",alt:"image"}})]),e._v(" "),a("h3",{attrs:{id:"one-time-field-multiple-string-and-number-fields"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#one-time-field-multiple-string-and-number-fields"}},[e._v("#")]),e._v(" One time field, multiple string and number fields")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/153843/92713171-8dcb4c00-f352-11ea-9050-6757fbbe3158.png",alt:"image"}})]),e._v(" "),a("h3",{attrs:{id:"all-number-fields-timestamp-userid-and-metric"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#all-number-fields-timestamp-userid-and-metric"}},[e._v("#")]),e._v(" All Number fields (Timestamp, UserId and Metric)")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/153843/92991051-bda45c00-f4d8-11ea-84dd-4ee1606e8125.png",alt:"image"}})]),e._v(" "),a("h2",{attrs:{id:"time-formats"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#time-formats"}},[e._v("#")]),e._v(" Time formats")]),e._v(" "),a("p",[e._v("Rows for the timestamp fields should be one of the standard javascript date format as specified "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/153843/92720934-3d0d2080-f35d-11ea-93e3-c1ff46d4ea59.png",alt:"image"}})]),e._v(" "),a("p",[e._v("For example, below is the valid csv with valid timestamps")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('year,population\n2017,8\n2017-02,9\n2017-03,9.3\n2017/04,9.4\n2017/05/23,9.4\n2017-06-25T12:10:00Z,10.1\n"July 12, 2017 03:24:00",12\n2017/08/23 10:30,9.4\n2017/09/23 10:30:20,9.4\n2017-10-23 10:30:20,9.4\nThu Nov 23 2017 10:30:20 GMT+0000 (Greenwich Mean Time),10.1\n"Sat, 23 Dec 2017 10:30:20 GMT",12\n01/29/2018,12.4\n')])])])])}),[],!1,null,null,null);t.default=i.exports}}]);