"use strict";
// const { getAge } = require("../plugins/get-age.plugin");
// const { getUUID } = require("../plugins/get-id.plugin");
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildMakePerson = void 0;
const buildMakePerson = ({ getAge, getUUID, }) => {
    return ({ name, birthdate }) => {
        return {
            id: getUUID(),
            name: name,
            birthdate: birthdate,
            age: getAge(birthdate),
        };
    };
};
exports.buildMakePerson = buildMakePerson;
// const obj = {
//   name: "jhon",
//   birthdate: "1985-10-21",
// };
// const john = buildPerson(obj);
// console.log(john);
// module.exports = {
//   buildMakePerson,
// };
