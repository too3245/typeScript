"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var todoItem_1 = __importDefault(require("./todoItem"));
var data = [
    {
        id: 1,
        task: "장보기",
        complete: true
    },
    {
        id: 2,
        task: "TS 학습하기",
        complete: false
    }
];
for (var i = 0; i < data.length; i++) {
    var todoItem = new todoItem_1.default(data[i].id, data[i].task, data[i].complete);
    todoItem.printDetails();
}
