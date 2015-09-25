function setFixtures (html) { //eslint-disable-line no-unused-vars
  jasmine.getFixtures().set(html);
}

jasmine.getFixtures = function() {
  jasmine.currentFixtures_ = jasmine.currentFixtures_ || new jasmine.Fixtures();
  return jasmine.currentFixtures_;
};

jasmine.Fixtures = function() {
  this.containerId = 'jasmine-fixtures';
};

jasmine.Fixtures.prototype.set = function(html) {
  this.cleanUp();
  this.createContainer_(html);
};

jasmine.Fixtures.prototype.cleanUp = function() {
  var ele = document.getElementById(this.containerId);
  if (ele) {
    ele.parentNode.removeChild(ele);
  }
};

jasmine.Fixtures.prototype.createContainer_ = function(html) {
  var container, body;

  container = document.createElement('div');
  container.setAttribute('id', this.containerId);

  container.innerHTML = html;

  body = document.getElementsByTagName('body')[0];
  body.appendChild(container);
};

beforeEach(function () {
  this.addMatchers({
    toHaveClass: function (cssClass) {
      this.message = function () {
        return [
          'Expected object ' + jasmine.pp(this.actual) + ' to have class "' + cssClass + '" had "' + this.actual.className + '"',
          'Expected object ' + jasmine.pp(this.actual) + ' not to have class "' + cssClass + '" had "' + this.actual.className + '"'
        ];
      };
      return this.actual.className.indexOf(cssClass) > -1;
    }
  });
});
