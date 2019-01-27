export default function() {
  let str = "As _pname's _pweapon rang off of _tname's _tweapon, _pposdet eyes flicked up and down the _tgender's body, a fait scent of _tscent wafting over from _tobject. _tname was livid, _tperson wanted nothing more than to run _pname through with _tposdet _tweapon and wear _pposdet skin atop _tposdet _tclothes.";

  let objects = {
    _pname: "Conor",
    _pgender: "man",
    _pperson: "he",   //personal (they)
    _pobject: "him",  //object (them)
    _pposdet: "his",  //possessive determiner (their)
    _ppospro: "his",  //possessive pronoun (theirs)
    _pweapon: "sword",
    _pclothes: "t-shirt and jeans",
    _pscent: "fart",
    _tname: "Circé",
    _tgender: "woman",
    _tperson: "she",  //personal (they)
    _tobject: "her",  //object (them)
    _tposdet: "her",  //possessive determiner (their)
    _tpospro: "hers", //possessive pronoun (theirs)
    _tweapon: "lance",
    _tclothes: "hempen robe",
    _tscent: "lillies"
  }

  function escapeRegExp(str) {
    return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
  }

  function replaceAll(str, objects) {
    let objectReg = new RegExp(Object.keys(objects).join("|"), "gi");

    return str.replace(objectReg, function(matched) {
      return objects[matched.toLowerCase()];
    });
  }

  replaceAll(str, objects);
}
