var $ltMAx$reactjsxruntime = require("react/jsx-runtime");
require("react");
var $ltMAx$reactdom = require("react-dom");
var $ltMAx$reactasynchook = require("react-async-hook");
var $ltMAx$datefnsaddDays = require("date-fns/addDays");
var $ltMAx$datefnsformat = require("date-fns/format");
var $ltMAx$formatnumber = require("format-number");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}












const $d995711ea8250ff2$var$YesNo = new Map([
    [
        true,
        "YES \uD83D\uDE31"
    ],
    [
        false,
        "nope"
    ], 
]);
function $d995711ea8250ff2$export$2e2bcd8739ae039({ yes: yes  }) {
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("span", {
        className: "hazard",
        children: $d995711ea8250ff2$var$YesNo.get(yes)
    });
}






const $239e18354db94e2d$var$formatter = (0, ($parcel$interopDefault($ltMAx$formatnumber)))();
function $239e18354db94e2d$export$2e2bcd8739ae039({ data: data  }) {
    return data.map((_, i)=>/*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("p", {
            children: [
                "Misses ",
                _.orbiting_body,
                " tomorrow at",
                " ",
                (0, ($parcel$interopDefault($ltMAx$datefnsformat)))(_.epoch_date_close_approach, "h:mmaaaa"),
                " by",
                " ",
                $239e18354db94e2d$var$formatter(parseInt(_.miss_distance.miles, 10)),
                " miles whilst travelling at ",
                (0, ($parcel$interopDefault($ltMAx$formatnumber)))({
                    truncate: 0
                })(_.relative_velocity.miles_per_hour),
                "mph"
            ]
        }, i));
}


function $1c22010c485faff5$export$2e2bcd8739ae039({ name: name , is_potentially_hazardous_asteroid: is_potentially_hazardous_asteroid , close_approach_data: close_approach_data , nasa_jpl_url: nasa_jpl_url ,  }) {
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
        className: is_potentially_hazardous_asteroid ? "is-hazard" : "no-hazard",
        children: [
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("h2", {
                children: name.replace(/[()]/g, "")
            }),
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("p", {
                children: [
                    "Potentially hazardous?",
                    " ",
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $d995711ea8250ff2$export$2e2bcd8739ae039), {
                        yes: is_potentially_hazardous_asteroid
                    })
                ]
            }),
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $239e18354db94e2d$export$2e2bcd8739ae039), {
                data: close_approach_data
            }),
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("p", {
                className: "more",
                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("a", {
                    href: nasa_jpl_url,
                    target: "_blank",
                    children: "Find out more"
                })
            })
        ]
    });
}


function $ab610c4af25f372a$var$getDate(d = new Date()) {
    return d.toJSON().split("T")[0];
}
const $ab610c4af25f372a$var$fetchData = ()=>fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${$ab610c4af25f372a$var$getDate()}&api_key=DEMO_KEY`).then((res)=>res.json());
function $ab610c4af25f372a$export$2e2bcd8739ae039() {
    const data1 = (0, $ltMAx$reactasynchook.useAsync)($ab610c4af25f372a$var$fetchData, []);
    if (data1.loading) {
        document.title = "Counting potential earth HAZARDS\u2026";
        return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("p", {
            children: "Getting data from NASA right now to check whether something from space is going to hit us. One moment\u2026"
        });
    }
    const day = $ab610c4af25f372a$var$getDate((0, ($parcel$interopDefault($ltMAx$datefnsaddDays)))(new Date(), 1));
    const hazards = data1.result.near_earth_objects[day].reduce((acc, curr)=>{
        if (curr.is_potentially_hazardous_asteroid) return acc + 1;
        return acc;
    }, 0);
    document.title = `${hazards} potential HAZARDS ${hazards > 0 ? "\uD83D\uDE31" : "\uD83D\uDC4D"}`;
    const results = data1.result.near_earth_objects[day];
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("p", {
                children: [
                    (0, ($parcel$interopDefault($ltMAx$datefnsformat)))((0, ($parcel$interopDefault($ltMAx$datefnsaddDays)))(new Date(), 1), "EEEE d-MMM"),
                    " there will be",
                    " ",
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("strong", {
                        children: results.length
                    }),
                    " fly pigs"
                ]
            }),
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("hr", {}),
            results.sort((a)=>a.is_potentially_hazardous_asteroid ? -1 : 1).map((data)=>/*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $1c22010c485faff5$export$2e2bcd8739ae039), {
                    ...data
                }, data.id))
        ]
    });
}


(0, $ltMAx$reactdom.render)(/*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ab610c4af25f372a$export$2e2bcd8739ae039), {}), document.getElementById("app"));
if (null) null.accept(function() {
    window.location.reload();
});


//# sourceMappingURL=index.js.map
