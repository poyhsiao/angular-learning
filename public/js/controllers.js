function todoCtl($scope) {
    $scope.newItem = '';
    $scope.todoList = [{
        'label': 'buy me the milk'
    }, {
        'label': 'pay for phone fee'
    }];
    $scope.addItem = function() {
        if (this.newItem) {
            this.todoList.push({
                'label': this.newItem
            });
            this.newItem = '';
        }
    }
}

function todoCtrlRemove($scope) {
    $scope.newItem = '';
    $scope.todoList = [{
        label: 'happyer',
        isFinish: false
    }];
    $scope.addItem = function() {
        if (this.newItem) {
            this.todoList.push({
                label: this.newItem,
                isFinish: false
            });
            this.newItem = '';
        }
    };
    $scope.removeItem = function(item) {
        item.isFinish = true;
    };
}

function todoCtrlUpdate($scope) {
    $scope.newItem = '';
    $scope.todoList = [];
    $scope.addItem = function() {
        if (this.newItem) {
            this.todoList.push({
                label: this.newItem,
                isFinish: false
            });
            this.newItem = '';
        }
    }

    $scope.removeItem = function(item) {
        item.isFinish = true;
    }

    $scope.edit = function(item) {
        item.editing = true;
    }

    $scope.save = function(item) {
        item.editing = false;
    }
}

function resetHelloWorld($scope) {
    $scope.reset = function() {
        this.message = '';
        this.name = '';
    }

    $scope.$watch('name', function() {
        console.dir($scope.name);
    });
}

function showAndHideCtrl($scope) {
    $scope.isShow = false;
}

function friendCtrl($scope, $filter) {
    $scope.friends = [{
        name: '張學友',
        age: 33
    }, {
        name: '陳奕迅',
        age: 35
    }, {
        name: '周杰倫',
        age: 42
    }, {
        name: '王力宏',
        age: 21
    }];

    $scope.nu = $scope.friends.length;

    $scope.$watch('search', function() {
        $scope.nu = $filter('filter')($scope.friends, $scope.search).length;
    });
}
