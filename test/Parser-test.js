/**
 * Created by vincent on 2016/4/21.
 */
import SUMParse from '../src/design/parsers/SUMParser'
import ItemParser from '../src/design/parsers/ItemParser'

const dataSource = [
    {
        "id": 1,
        id2: "2",
        "a": "2011-01-01",
        "b": "2016-04-14",
        "c": "放款项目",
        "d": "1",
        "e": "123.00",
        "f": "2",
        "g": "-",
        "h": "0",
        "i": "0.00",
        "j": "-",
        "k": "-"
    },
    {
        "id": 1,
        id2: "2",
        "a": "2012-02-02",
        "b": "2016-04-14",
        "c": "到期项目",
        "d": "2",
        "e": "89751000.00",
        "f": "3",
        "g": "95866000.00",
        "h": "0",
        "i": "0.00",
        "j": "0",
        "k": "0.00"
    },
    {
        "id": 2,
        id2: "2",
        "a": "2013-03-03",
        "b": "2016-04-14",
        "c": "到期项目",
        "d": "3",
        "e": "89751000.00",
        "f": "3",
        "g": "95866000.00",
        "h": "0",
        "i": "0.00",
        "j": "0",
        "k": "0.00"
    },
    {
        "id": 2,
        id2: "2",
        "a": "2014-04-04",
        "b": "2016-04-14",
        "c": "到期项目",
        "d": "4",
        "e": "89751000.00",
        "f": "3",
        "g": "95866000.00",
        "h": "0",
        "i": "0.00",
        "j": "0",
        "k": "0.00"
    },
    {
        "id": 2,
        id2: "2",
        "a": "2015-05-05",
        "b": "2016-04-14",
        "c": "到期项目",
        "d": "5",
        "e": "89751000.00",
        "f": "3",
        "g": "95866000.00",
        "h": "0",
        "i": "0.00",
        "j": "0",
        "k": "0.00"
    },
    {
        "id": 2,
        id2: "1",
        "a": "2016-06-06",
        "b": "2016-04-14",
        "c": "到期项目",
        "d": "6",
        "e": "89751000.00",
        "f": "3",
        "g": "95866000.00",
        "h": "0",
        "i": "0.00",
        "j": "0",
        "k": "0.00"
    },
    {
        "id": 3,
        id2: "2",
        "a": "2017-07-07",
        "b": "2016-04-14",
        "c": "到期项目",
        "d": "7",
        "e": "89751000.00",
        "f": "3",
        "g": "95866000.00",
        "h": "0",
        "i": "0.00",
        "j": "0",
        "k": "0.00"
    },
    {
        "id": 3,
        id2: "2",
        "a": "2018-08-08",
        "b": "2016-04-14",
        "c": "到期项目",
        "d": "8",
        "e": "89751000.00",
        "f": "3",
        "g": "95866000.00",
        "h": "0",
        "i": "0.00",
        "j": "0",
        "k": "0.00"
    }
];


describe("Parse 解析器", ()=> {
    it("SUM 单一", ()=> {
        var sum = new SUMParse();
        var item = new ItemParser();
        item.addChild("${d}");
        sum.addChild(item);
        var result = sum.parse(dataSource);
        console.log("result", result);
        expect(result).toBe(36);
    });
    it("SUM 混合", ()=> {
        var sum = new SUMParse();
        var item = new ItemParser();
        item.addChild("${d} + ${f}");
        sum.addChild(item);
        var result = sum.parse(dataSource);
        console.log("result", result);
        expect(result).toBe(36+23);
    });
});