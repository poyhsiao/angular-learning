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
