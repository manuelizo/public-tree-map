var app = this.app || {};

(function(module) {

  function ColorFilter(map, legend) {
    this.map    = map;
    this.legend = legend;

    var filter = document.getElementById('color-filter');

    filter.addEventListener('change', (function(e) {
      this.onChange(e.target.value);
    }).bind(this));

    this.onChange(filter.value);
  }

  ColorFilter.prototype.onChange = function(key) {
    this.map.setPalette(module.palettes[key]);
    this.legend.setLegend(module.palettes[key]);
  }

  // Exports
  module.ColorFilter = ColorFilter;

})(app);
