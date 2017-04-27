(function() {
  angular.module('img.placeholder', []);
  angular.module('img.placeholder').provider('$placeholders', placeholdersProvider);
  angular.module('img.placeholder').directive('imgHolder', function() {
    return {
      restrict: 'A',
      scope: {
        'imgHolder': '=?'
      },
      controller: ['$placeholders', function($placeholders) {
        var vm = this;

        vm.placeholders = $placeholders.placeholders;
        vm.type = $placeholders.default;
      }],
      controllerAs: 'vm',
      link: directiveLink
    };
  });
  function directiveLink(scope, elem, attrs) {
    var _default = scope.imgHolder || scope.vm.type;
    var _placeholder = scope.vm.placeholders[scope.imgHolder] || scope.vm.placeholders[scope.vm.type]
    elem.on('error', function() {
      elem.attr('src', _placeholder);
    });
  };
  function placeholdersProvider() {
    var type = 'base';
    var placeholder = {
        base: 'data:image/png;base64,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VSA0O9EM47nnnjNj/vXXX6YEtmzZsv8g17neeecdue2228w7DS2DPf7440ZgLrjgAvOeRctlOofOe9hhhxl7zjvvvNY4Rx55pLHn0ksvrSYglKh4DCAAAQhUI/D000+bl+KaWeh7hNkCou8c9t57byMWM5e+I9H3It9++63JGp5//nkjFnrpS3UVFe23/fbbm9/0pbyOq1nJ3EvnGhoaapWw2iUA+o5kiy22kC+//FIuuugiY4+KxcyloqT2nHPOOcUFhBJVtWChFwQgAIHZBI4//njz4ly/sNJLS0f6rmLPPfeUZ555RhYvXiyffvqpKSHppZmEio6Wrvbff38588wzzfsNvfR9hvZTIVi4cKHcfffdrRLWqaeeKmedddb/MpDZAqI39WuvbbbZxpTDtIT1/fffy4EHHmjKWvo+RbOjBx980IyjbbRU9tRTT5nSlrWERYmK4IcABCDgjsDsDERnWb58uSkl6ddWupnrif+aa64xv997771y6623GjHRF9/6m36yq7/ri3fNFrQM9scffxixeeutt2TrrbduGT83A9Ebhx56qGy55ZZmDL00s/j444/lnnvuMe9dNNvQ0pgK1c0332w+G/7oo49kgw02aC8glKjcBQsjQwACEJhNYK6A/PDDDyZz0Cxlk002MZ/vXn311aaLlqz0yyj9Ckr/DkQ/8dWso7e312QNRx99tFx88cWmrX599eKLL8qqVavMZ8Kvv/66edehY2i2st1225ky19dffy36Jdarr75q/hZkv/32M+9IBgcHTWbz0EMPGdHSF//6Ka8Ki34OrFcrAxkYGOiy/SEKbocABCAAgfwIrO8VxsjIyHTX8PDw1MTERJeqnSrZ7L9IzA8VK4YABCAAgfUR0Pc1+qJd/2alu7t7+m8ua9wpYpHSJwAAAABJRU5ErkJggg=='
    };
    this.placeholders = setPlaceholders;
    this.default = setDefaultPlaceholder;

    this.$get = function () {

      return {
        default: type,
        placeholders: placeholder
      }
    }

    function setPlaceholders(placeholdersObject) {
      placeholder = placeholdersObject;
    };

    function setDefaultPlaceholder(propertyName) {
      if ("string" !== typeof propertyName) {
        console.error('param must be a string type');
        return;
      }
      type = propertyName;
    };
  };
})();