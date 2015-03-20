exports.create = function(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      __loadTemplate = __helpers.l,
      __layout_layout_marko = __loadTemplate(require.resolve("./layout/layout.marko")),
      __renderer = __helpers.r,
      marko_node_modules_marko_layout_use_tag = __renderer(require("marko/node_modules/marko-layout/use-tag")),
      __tag = __helpers.t,
      marko_node_modules_marko_layout_put_tag = __renderer(require("marko/node_modules/marko-layout/put-tag")),
      marko_node_modules_marko_async_async_fragment_tag = __renderer(require("marko/node_modules/marko-async/async-fragment-tag")),
      escapeXml = __helpers.x;

  return function render(data, out) {
    __tag(out,
      marko_node_modules_marko_layout_use_tag,
      {
        "template": __layout_layout_marko,
        "getContent": function(__layoutHelper) {
          __tag(out,
            marko_node_modules_marko_layout_put_tag,
            {
              "into": "title",
              "layout": __layoutHelper
            },
            function(out) {
              out.w('Home page');
            });
          __tag(out,
            marko_node_modules_marko_layout_put_tag,
            {
              "into": "body",
              "layout": __layoutHelper
            },
            function(out) {
              out.w('<p>This is the Hello page template</p><p>This is the Hello page template</p><p>This is the Hello page template</p><p>This is the Hello page template</p><p>This is the Hello page template</p><p>This is the Hello page template</p><p>This is the Hello page template</p><p>This is the Hello page template</p><p>This is the Hello page template</p><p>This is the Hello page template</p>');
              __tag(out,
                marko_node_modules_marko_async_async_fragment_tag,
                {
                  "dataProvider": data.bodyProvider,
                  "_name": "data.bodyProvider"
                },
                function(out,body) {
                  out.w('<div><p>' +
                    escapeXml(body.content) +
                    '</p></div>');
                });
            });
        },
        "*": {
          "showHeader": true
        }
      });
  };
}