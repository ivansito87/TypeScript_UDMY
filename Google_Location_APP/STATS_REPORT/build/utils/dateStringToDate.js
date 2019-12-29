"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = function (dateString) {
    // 2020/01/15 i.e
    var dateParts = dateString.split("/").map(function (item) {
        return parseInt(item);
    });
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
