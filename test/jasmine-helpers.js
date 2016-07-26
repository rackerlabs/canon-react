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
  jasmine.addMatchers({
    toHaveClass: function (util, customEqualityTesters) {
      return {
        compare: function (actual, selector) {
          var passed, message;

          try {
            passed = actual.className.indexOf(selector) > -1;
          } catch (e) {
            passed = false;
          }

          message =  [
          'Expected object ' + jasmine.pp(actual) + ' not to have class "' + selector + '" had "' + actual.className + '"',
          'Expected object ' + jasmine.pp(actual) + ' to have class "' + selector + '" had "' + actual.className + '"'
          ][passed ? 0 : 1];

          return {
            pass: passed,
            message: message
          };
        }
      };
    }
  });
});
