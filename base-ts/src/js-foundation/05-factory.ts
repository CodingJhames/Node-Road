// const { getAge } = require("../plugins/get-age.plugin");
// const { getUUID } = require("../plugins/get-id.plugin");

//const { getAge, getUUID } = require("../plugins");

interface BuildMakerPersonOptions {
  getUUID: () => string;
  getAge: (birthdate: string) => number;
}

interface PersonOptions {
  name: string;
  birthdate: string;
}

export const buildMakePerson = ({
  getAge,
  getUUID,
}: BuildMakerPersonOptions) => {
  return ({ name, birthdate }: PersonOptions) => {
    return {
      id: getUUID(),
      name: name,
      birthdate: birthdate,
      age: getAge(birthdate),
    };
  };
};

// const obj = {
//   name: "jhon",
//   birthdate: "1985-10-21",
// };

// const john = buildPerson(obj);
// console.log(john);

// module.exports = {
//   buildMakePerson,
// };
