var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var a = 12;
var b = "pippo";
var c;
var list = [1, 2, 3];
function dummy() {
    return 123;
}
//var r = dummy() as number;
var r = dummy();
// classi
var User = /** @class */ (function () {
    function User(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    User.prototype.getFullName = function () {
        return this.name + " " + this.surname;
    };
    return User;
}());
var u1 = new User("Andrea", "Dottor");
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, surname, school) {
        var _this = _super.call(this, name, surname) || this;
        _this.school = school;
        return _this;
    }
    return Student;
}(User));
var s1 = new Student("Andrea", "Dottor", "ITS");
var s1name = s1.getFullName();
var s2 = new Student("Pippo", "pluto", "ITS");
var ITSSTudent = /** @class */ (function (_super) {
    __extends(ITSSTudent, _super);
    function ITSSTudent(name, surname) {
        return _super.call(this, name, surname, "ITS") || this;
    }
    return ITSSTudent;
}(Student));
var its1 = new ITSSTudent("Andrea", "Dottor");
var studentList = [u1, s1, s2, its1];
var GenericProduct = /** @class */ (function () {
    function GenericProduct(name, price, qta) {
        this.name = name;
        this.price = price;
        this.qta = qta;
    }
    return GenericProduct;
}());
var cartItems = [];
function addToCart(item) {
    cartItems.push(item);
}
addToCart(new GenericProduct("Bici", 1000, 1));
//# sourceMappingURL=main.js.map