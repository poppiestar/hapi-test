exports.create = function(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      __renderer = __helpers.r,
      marko_node_modules_marko_layout_placeholder_tag = __renderer(require("marko/node_modules/marko-layout/placeholder-tag")),
      __tag = __helpers.t;

  return function render(data, out) {
    out.w('<!DOCTYPE html> <html lang="en-GB"><head><meta charset="utf-8"><title>');
    __tag(out,
      marko_node_modules_marko_layout_placeholder_tag,
      {
        "name": "title",
        "content": data.layoutContent
      },
      function(out) {
        out.w('Default title');
      });

    out.w('</title></head><body>');

    if (data.showHeader !== false) {
      out.w('<h1>');
      __tag(out,
        marko_node_modules_marko_layout_placeholder_tag,
        {
          "name": "title",
          "content": data.layoutContent
        });

      out.w('</h1>');
    }

    out.w('<p>This is some text in the page.</p>');
    __tag(out,
      marko_node_modules_marko_layout_placeholder_tag,
      {
        "name": "body",
        "content": data.layoutContent
      });

    out.w('<div>');
    __tag(out,
      marko_node_modules_marko_layout_placeholder_tag,
      {
        "name": "footer",
        "content": data.layoutContent
      },
      function(out) {
        out.w('Default footer');
      });

    out.w('</div></body></html>');
  };
}