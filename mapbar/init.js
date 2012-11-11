/*
 * Mapbar Maplet Engine (C)2005 Mapbar Inc
 * Date: 2012-5-14
 * Time: 16:04:11
 */
if (typeof strImgsvrUrl == "undefined") strImgsvrUrl = "http://img.mapbar.com/maplite/";
if (typeof strMapsvrUrl == "undefined") strMapsvrUrl = "http://api.mapbar.com/api/";
//add by panx
CTLIMG_RESOURCE = [{
    url: strImgsvrUrl + "images/mapbar31.2.1.png",
    w: 210,
    h: 235
}];
var transparencyLevel = 60;
var DirectionInfo = '';
var strLicenseKey = "3409";
var strRemoteIP = "www.mapbar.com";
if (typeof iToolTipStyle == "undefined") {
    var iToolTipStyle = 1;
}
var mapwidth = 600;
var mapheight = 400;
var MapBackgroundColor = "#EBEAE8";
var arrayCity = new Array();
arrayCity["\u5168\u56FD"] = "GGEJDBVUUEARA";
arrayCity["\u5317\u4EAC\u5E02"] = "HETCUFWVVHUEE";
arrayCity["\u5929\u6D25\u5E02"] = "HHCIWHXVVJDBG";
arrayCity["\u5858\u6CBD"] = "HIAUDWXVWBRBG";
arrayCity["\u5927\u6E2F\u533A"] = "HHWJIRXVVHCUF";
arrayCity["\u4E0A\u6D77\u5E02"] = "IJSRVJXVIWCHC";
arrayCity["\u91CD\u5E86\u5E02"] = "HFISFCXTWJRFB";
arrayCity["\u5E7F\u4E1C\u7701"] = "IJITUVWUABJGJ";
arrayCity["\u5E7F\u5DDE\u5E02"] = "IJITUVWUABJGJ";
arrayCity["\u6E05\u8FDC\u5E02"] = "IIFAAAVUARHGU";
arrayCity["\u4F5B\u5C71\u5E02"] = "IJHUEEXTWSGVB";
arrayCity["\u6DF1\u5733\u5E02"] = "ISTBEAVUAIIDF";
arrayCity["\u6E5B\u6C5F\u5E02"] = "IICSURVTITUFU";
arrayCity["\u8087\u5E86\u5E02"] = "IIHDAVWTVUETJ";
arrayCity["\u4E2D\u5C71\u5E02"] = "IRRTRJXTWFUSG";
arrayCity["\u4E1C\u839E\u5E02"] = "IRHDSEVUASTDU";
arrayCity["\u97F6\u5173\u5E02"] = "IHIJCWXUDDDST";
arrayCity["\u6C55\u5934\u5E02"] = "IVHBSGXUFSBTW";
arrayCity["\u987A\u5FB7\u5E02"] = "IRBBEVXTWRHIS";
arrayCity["\u73E0\u6D77\u5E02"] = "ISFWBTXTWDEUF";
arrayCity["\u63ED\u9633\u5E02"] = "IURJHGVUFHRSU";
arrayCity["\u4ECE\u5316\u5E02"] = "IJHDBRVUBEBAJ";
arrayCity["\u6F6E\u5DDE\u5E02"] = "IUVGRVWUGBCDU";
arrayCity["\u60E0\u5DDE\u5E02"] = "ISGGRHVUBTSBE";
arrayCity["\u6C5F\u95E8\u5E02"] = "IRCSTCXTWBEAW";
arrayCity["\u8302\u540D\u5E02"] = "IICVSCXTRDWRD";
arrayCity["\u6885\u5DDE\u5E02"] = "ITCCETVUGDGIS";
arrayCity["\u6CB3\u6E90\u5E02"] = "IRUDJJXUDDIWR";
arrayCity["\u6C55\u5C3E\u5E02"] = "IUFAWHXUCTDWC";
arrayCity["\u9633\u6C5F\u5E02"] = "IJIJHFWTTDFTV";
arrayCity["\u4E91\u6D6E\u5E02"] = "IIAGBIWTUVVGB";
arrayCity["\u6C88\u9633\u5E02"] = "HTJTRBXWTBGET";
arrayCity["\u961C\u65B0\u5E02"] = "HJJCFJXWJSHWV";
arrayCity["\u76D8\u9526\u5E02"] = "HSEHGRXWJBBHU";
arrayCity["\u629A\u987A\u5E02"] = "HUBGDJXWTSTTT";
arrayCity["\u8425\u53E3\u5E02"] = "HTIACGXWIIVJH";
arrayCity["\u5927\u8FDE\u5E02"] = "HVDFTDXWEVHRR";
arrayCity["\u846B\u82A6\u5C9B\u5E02"] = "HRERFAXWGITHJ";
arrayCity["\u978D\u5C71\u5E02"] = "HTWGIRXWRHBRU";
arrayCity["\u4E39\u4E1C\u5E02"] = "IAJJRUXWRWGTR";
arrayCity["\u5357\u4EAC\u5E02"] = "IEGDCTWVGDBVS";
arrayCity["\u5F90\u5DDE\u5E02"] = "HVJDGSWVHBRHC";
arrayCity["\u8FDE\u4E91\u6E2F\u5E02"] = "IBBDTHWVRJVHE";
arrayCity["\u6DEE\u9634\u5E02"] = "ICGHTUWVIURHG";
arrayCity["\u76D0\u57CE\u5E02"] = "IEGSSTXVRDWJB";
arrayCity["\u626C\u5DDE\u5E02"] = "IEUWEUXVHRSJG";
arrayCity["\u6CF0\u5DDE\u5E02"] = "IFGWVFXVIIUDV";
arrayCity["\u9547\u6C5F\u5E02"] = "IFCRFFWVHGGAI";
arrayCity["\u5357\u901A\u5E02"] = "IHJVAAWVJEAFH";
arrayCity["\u5E38\u5DDE\u5E02"] = "IGJGIVWVHIHHB";
arrayCity["\u65E0\u9521\u5E02"] = "IHGVVGWVHSTJB";
arrayCity["\u82CF\u5DDE\u5E02"] = "IIEIVUWVHTJBE";
arrayCity["\u6DEE\u5B89\u5E02"] = "ICGJGDWVIVFJA";
arrayCity["\u5BBF\u8FC1\u5E02"] = "IASVJUWVIFASV";
arrayCity["\u6C5F\u9634\u5E02"] = "IGUWDTXVIDIHW";
arrayCity["\u5B9C\u5174\u5E02"] = "IIFVGWTGXHJAWEBHF";
arrayCity["\u6B66\u6C49\u5E02"] = "HWTARHXUUAIWI";
arrayCity["\u8346\u95E8\u5E02"] = "HSVJRCWURJETS";
arrayCity["\u8346\u5DDE\u5E02"] = "HUARAVWUJIHSU";
arrayCity["\u5341\u5830\u5E02"] = "HHEGSCXURTGGW";
arrayCity["\u968F\u5DDE\u5E02"] = "HTRADCXUUGCVW";
arrayCity["\u8944\u6A0A\u5E02"] = "HRDVUGWUTBDJS";
arrayCity["\u5B9C\u660C\u5E02"] = "HSATBHVUISGJI";
arrayCity["\u5B5D\u611F\u5E02"] = "HVRJGCWUUAHRH";
arrayCity["\u6210\u90FD\u5E02"] = "HABIJDVTUJEGA";
arrayCity["\u6CF8\u5DDE\u5E02"] = "HEUSFAXTTWJSS";
arrayCity["\u8FBE\u5DDE\u5E02"] = "HEGUGBXUDJWFE";
arrayCity["\u5E7F\u5B89\u5E02"] = "HEEGTJVUBDGJR";
arrayCity["\u5E7F\u5143\u5E02"] = "HAAIBIXUCWGSS";
arrayCity["\u4E50\u5C71\u5E02"] = "HBEBFWXTSGWFC";
arrayCity["\u5185\u6C5F\u5E02"] = "HDDDRIXTUGWRS";
arrayCity["\u6500\u679D\u82B1\u5E02"] = "HCRHCWXTDSAST";
arrayCity["\u9042\u5B81\u5E02"] = "HCJJUFXTWRIGC";
arrayCity["\u5B9C\u5BBE\u5E02"] = "HDTRTSXTSIWBV";
arrayCity["\u81EA\u8D21\u5E02"] = "HDCDSUVTTRIJA";
arrayCity["\u897F\u5B89\u5E02"] = "HBWSJFXURIERE";
arrayCity["\u54B8\u9633\u5E02"] = "HBIIBFWUREFVC";
arrayCity["\u77F3\u5BB6\u5E84\u5E02"] = "HESUBVWVITTHS";
arrayCity["\u5510\u5C71\u5E02"] = "HHWAWWXWATUCT";
arrayCity["\u79E6\u7687\u5C9B\u5E02"] = "HJJVGFXWDGIEG";
arrayCity["\u627F\u5FB7\u5E02"] = "HFHJHWXWCHACR";
arrayCity["\u5ECA\u574A\u5E02"] = "HFTVWAXVVFSCH";
arrayCity["\u5F20\u5BB6\u53E3\u5E02"] = "HBBTDBWVUISAG";
arrayCity["\u4FDD\u5B9A\u5E02"] = "HEWGEJXVSICHV";
arrayCity["\u90A2\u53F0\u5E02"] = "HGDDSHWVHDJBV";
arrayCity["\u90AF\u90F8\u5E02"] = "HGVCGVWVGIBRD";
arrayCity["\u6CA7\u5DDE\u5E02"] = "HHVAAFWVTTRDT";
arrayCity["\u592A\u539F\u5E02"] = "HCAFICWVFITUB";
arrayCity["\u957F\u6CBB\u5E02"] = "HFGISAWVDTTJH";
arrayCity["\u5927\u540C\u5E02"] = "GWSVEUXVRAJVR";
arrayCity["\u664B\u57CE\u5E02"] = "HGBDAUWVCFJIA";
arrayCity["\u664B\u4E2D\u5E02"] = "HCIWDTXVFIGDH";
arrayCity["\u4E34\u6C7E\u5E02"] = "HDCJHGWVBDIBB";
arrayCity["\u5415\u6881\u5730\u533A"] = "HAGDSSXVCUGWA";
arrayCity["\u6714\u5DDE\u5E02"] = "GWJHIEXVHJBJF";
arrayCity["\u5FFB\u5DDE\u5E02"] = "HBHFJSWVGJVDT";
arrayCity["\u9633\u6CC9\u5E02"] = "HDIVBIXVHAUWW";
arrayCity["\u8FD0\u57CE\u5E02"] = "HDWEIIXUVUARJ";
arrayCity["\u90D1\u5DDE\u5E02"] = "HIGSCCWVCHAHF";
arrayCity["\u6D1B\u9633\u5E02"] = "HGRDWVXVAFWVU";
arrayCity["\u5E73\u9876\u5C71\u5E02"] = "HJHARHWVAFTSR";
arrayCity["\u8BB8\u660C\u5E02"] = "HJTUEIWVBJITU";
arrayCity["\u5357\u9633\u5E02"] = "HJGEVGXUVAWHW";
arrayCity["\u9A7B\u9A6C\u5E97\u5E02"] = "HSSISAWVAEVVB";
arrayCity["\u5468\u53E3\u5E02"] = "HSRTHWXVCDTSR";
arrayCity["\u5546\u4E18\u5E02"] = "HSWBAEXVEWSCS";
arrayCity["\u5F00\u5C01\u5E02"] = "HJGVEGXVDIWGW";
arrayCity["\u65B0\u4E61\u5E02"] = "HHWEWDXVDJSIC";
arrayCity["\u4E09\u95E8\u5CE1\u5E02"] = "HERHERWUVSTUF";
arrayCity["\u6FEE\u9633\u5E02"] = "HJADAVWVGATIH";
arrayCity["\u4FE1\u9633\u5E02"] = "HUBFDBXUWBFVV";
arrayCity["\u9E64\u58C1\u5E02"] = "HHGUUJWVFADAE";
arrayCity["\u5B89\u9633\u5E02"] = "HHHDVVXVFIVEW";
arrayCity["\u7126\u4F5C\u5E02"] = "HHBCJJXVCIHWI";
arrayCity["\u6F2F\u6CB3\u5E02"] = "HRUCUFWVBDVRA";
arrayCity["\u957F\u6625\u5E02"] = "HTESJCVBACCRUU";
arrayCity["\u5409\u6797\u5E02"] = "HVCVBJWBAEBVVR";
arrayCity["\u54C8\u5C14\u6EE8\u5E02"] = "HSHWUDXBAHARIG";
arrayCity["\u9F50\u9F50\u54C8\u5C14\u5E02"] = "HEWGJRXBAFGFFH";
arrayCity["\u5927\u5E86\u5E02"] = "HHSSFDVBAFUUUG";
arrayCity["\u4E94\u5927\u8FDE\u6C60\u5E02"] = "HGERCVWBARSCIS";
arrayCity["\u7261\u4E39\u6C5F\u5E02"] = "IBTVJCXBAJTWCB";
arrayCity["\u547C\u548C\u6D69\u7279\u5E02"] = "GTCIEDWVIRJSI";
arrayCity["\u9521\u6797\u90ED\u52D2"] = "GVBWHFXWECWVC";
arrayCity["\u6D4E\u5357\u5E02"] = "HRRRBTWVRIHDU";
arrayCity["\u804A\u57CE\u5E02"] = "HJFDFSWVIJVDI";
arrayCity["\u70DF\u53F0\u5E02"] = "HWWUHDXWCHRJC";
arrayCity["\u5A01\u6D77\u5E02"] = "IBCGUJXWDIRTI";
arrayCity["\u9752\u5C9B\u5E02"] = "IARACCWVVUDCU";
arrayCity["\u6CF0\u5B89\u5E02"] = "HSIVBAXVJWASD";
arrayCity["\u83B1\u829C\u5E02"] = "HTFICSXVRTHWC";
arrayCity["\u6D4E\u5B81\u5E02"] = "HSVHFHWVHVRAG";
arrayCity["\u83CF\u6CFD\u5E02"] = "HRHRJJXVFWWUG";
arrayCity["\u4E34\u6C82\u5E02"] = "HWCAADXVRBECV";
arrayCity["\u5FB7\u5DDE\u5E02"] = "HIEVBTWVRSSVF";
arrayCity["\u6DC4\u535A\u5E02"] = "HTAVDJWVTEHVC";
arrayCity["\u6F4D\u574A\u5E02"] = "HUTJUUWVUSVIC";
arrayCity["\u65E5\u7167\u5E02"] = "IAFTHRWVTFJJS";
arrayCity["\u4E1C\u8425\u5E02"] = "HSUERIWVVBGCU";
arrayCity["\u6EE8\u5DDE\u5E02"] = "HSAWCDXVUBRBV";
arrayCity["\u67A3\u5E84\u5E02"] = "HVDUUEWVIIUTH";
arrayCity["\u5408\u80A5\u5E02"] = "ICGAACWVDIGSD";
arrayCity["\u829C\u6E56\u5E02"] = "IEUISRWVEGSBF";
arrayCity["\u9EC4\u5C71\u5E02"] = "IHDTICWVBUURU";
arrayCity["\u5B89\u5E86\u5E02"] = "IEBDSUWVBDBHE";
arrayCity["\u868C\u57E0\u5E02"] = "IAUUAAWVFFCHB";
arrayCity["\u4EB3\u5DDE\u5E02"] = "HUAIWVXVEFIFU";
arrayCity["\u5DE2\u6E56\u5E02"] = "IDRTRDWVEBHRV";
arrayCity["\u6C60\u5DDE\u5E02"] = "IEIGTWXVCAUIC";
arrayCity["\u6EC1\u5DDE\u5E02"] = "IDEJCAWVFUDAJ";
arrayCity["\u961C\u9633\u5E02"] = "HVJGCUXVCWCGG";
arrayCity["\u6DEE\u5317\u5E02"] = "HVHEGJXVFWWCI";
arrayCity["\u516D\u5B89\u5E02"] = "IBFVUSXVCDSWT";
arrayCity["\u9A6C\u978D\u5C71\u5E02"] = "IEHRWSXVFDABT";
arrayCity["\u5BBF\u5DDE\u5E02"] = "HWDSDFXVFUGHA";
arrayCity["\u94DC\u9675\u5E02"] = "IEJTFVWVCVFJF";
arrayCity["\u5BA3\u57CE\u5E02"] = "IGAAECWVEHBGD";
arrayCity["\u6DEE\u5357\u5E02"] = "IASFHWXVEDVTE";
arrayCity["\u676D\u5DDE\u5E02"] = "IJDAJAWVFJGCB";
arrayCity["\u7ECD\u5174\u5E02"] = "IREBUTXVFTERW";
arrayCity["\u5B81\u6CE2\u5E02"] = "ISWIFCXVHBBAS";
arrayCity["\u6E56\u5DDE\u5E02"] = "IIDGEDWVGFJRI";
arrayCity["\u5609\u5174\u5E02"] = "IJFTGAWVHDDBJ";
arrayCity["\u91D1\u534E\u5E02"] = "IRDGFTXVCWSAH";
arrayCity["\u4E3D\u6C34\u5E02"] = "ISRHIDWVCGJFI";
arrayCity["\u6E29\u5DDE\u5E02"] = "IUGWBGXVCUHFD";
arrayCity["\u4E50\u6E05\u5E02"] = "IUSDHJWVDHSSV";
arrayCity["\u53F0\u5DDE\u5E02"] = "IUJGDSWVFAFUE";
arrayCity["\u8862\u5DDE\u5E02"] = "IJEDARWVBJCGD";
arrayCity["\u798F\u5DDE\u5E02"] = "IVGDHIXUUTREW";
arrayCity["\u8386\u7530\u5E02"] = "IVUGHUWUTGHGG";
arrayCity["\u5357\u5E73\u5E02"] = "ISRAGEWUTVCRB";
arrayCity["\u53A6\u95E8\u5E02"] = "IVVSDUWUJJTJR";
arrayCity["\u6CC9\u5DDE\u5E02"] = "IVWVHJXURWGTT";
arrayCity["\u6F33\u5DDE\u5E02"] = "IVCTCHWUIVUGC";
arrayCity["\u4E09\u660E\u5E02"] = "ISHCWSXUSIFFT";
arrayCity["\u9F99\u5CA9\u5E02"] = "ITFFFUWUIUVGC";
arrayCity["\u957F\u6C99\u5E02"] = "IBGRTCVUHGRSF";
arrayCity["\u5F20\u5BB6\u754C\u5E02"] = "HTDSDJVUFATFG";
arrayCity["\u5CB3\u9633\u5E02"] = "HWURCEXUJHAEH";
arrayCity["\u682A\u6D32\u5E02"] = "ICDADVXUHCBWH";
arrayCity["\u90F4\u5DDE\u5E02"] = "IFCBUEVUDUGGU";
arrayCity["\u5E38\u5FB7\u5E02"] = "HVDAVWXUGSCRI";
arrayCity["\u8861\u9633\u5E02"] = "ICUVVBXUEUWGE";
arrayCity["\u90B5\u9633\u5E02"] = "IAJDWAXUDRJDW";
arrayCity["\u6E58\u6F6D\u5E02"] = "IBUTBWXUGTIBI";
arrayCity["\u76CA\u9633\u5E02"] = "HWVBGTXUHAUAB";
arrayCity["\u6E58\u897F"] = "HTESRDVUCRFHC";
arrayCity["\u5357\u5B81\u5E02"] = "ICIFVTWTIBCAU";
arrayCity["\u6842\u6797\u5E02"] = "IBTCGEWTVUSVH";
arrayCity["\u767e\u8272\u5e02"] = "HVEHATXTHCIWJ";
arrayCity["\u5357\u660C\u5E02"] = "IFCEUTVUTJJDU";
arrayCity["\u8D35\u9633\u5E02"] = "HRFBHUVTSGBFI";
arrayCity["\u6606\u660E\u5E02"] = "HGIVRBXTCWBDG";
arrayCity["\u7389\u6EAA\u5E02"] = "HHFUSFXTBJWHG";
arrayCity["\u695A\u96C4\u5E02"] = "HEGDTDUTBSTCC";
arrayCity["\u5FB7\u5B8F"] = "HAECBGXSSEAWD";
arrayCity["\u8FEA\u5E86"] = "GTWSURXTCJAJS";
arrayCity["\u4E2A\u65E7\u5E02"] = "HJECWRXTBDUCF";
arrayCity["\u4E34\u6CA7\u5E02"] = "HDFFEHUSTSDDI";
arrayCity["\u6012\u6C5F\u5E02"] = "GUTHDTWTAATVU";
arrayCity["\u66F2\u9756\u5E02"] = "HHGUGEVTFUBJH";
arrayCity["\u601D\u8305\u5E02"] = "HGAEUCVSUHFHU";
arrayCity["\u62C9\u8428\u5E02"] = "FUUVCJWSIEVAR";
arrayCity["\u6D77\u53E3\u5E02"] = "IJTRTWXTGUUSR";
arrayCity["\u4E09\u4E9A\u5E02"] = "ISECARWTCVVAD";
arrayCity["\u743C\u6D77\u5E02"] = "ISDJDGWTFVIAS";
arrayCity["\u5170\u5DDE\u5E02"] = "GHFHGUWUFFUUV";
arrayCity["\u94F6\u5DDD\u5E02"] = "GHIEETXUTURWF";
arrayCity["\u897F\u5B81\u5E02"] = "GDIATWXUDCTBA";
arrayCity["\u4E4C\u9C81\u6728\u9F50\u5E02"] = "ECTRRTUTIIAJH";
arrayCity["\u9999\u6E2F"] = "ITDUDHWUADIVI";
arrayCity["\u6FB3\u95E8"] = "ISGWHUXTWBWWT";
arrayCity["\u53F0\u6E7E"] = "JESFTTXUTRWJW";
arrayCity["\u9E64\u5C97\u5E02"] = "HVREATXBAVVGWH";
arrayCity["\u5305\u5934\u5E02"] = "GJJSCSZVFRAIA";
arrayCity["\u8861\u6C34\u5E02"] = "HGWVHSZVRBHDV";
arrayCity["\u6986\u6797\u5E02"] = "GUBBADZVBUWWA";
arrayCity["\u901A\u8FBD\u5E02"] = "HIAJGGXWUBWRC";
arrayCity["\u8D64\u5CF0\u5E02"] = "HFAGBIXWGAFHI";
arrayCity["\u547C\u4F26\u8D1D\u5C14"] = "GSRDHWXBABUCHH";
arrayCity["\u5174\u5B89\u76DF"] = "HDWGITXBAAIVAR";
arrayCity["\u5B81\u5FB7\u5E02"] = "IUSTGRXUWBCGA";
arrayCity["\u8D63\u5DDE\u5E02"] = "IHWSERZUGUBUJ";
arrayCity["\u67f3\u5dde\u5e02"] = "IBVATEZTTBBTS";

function getPid(a) {
    if (typeof arrayCity[a] == "undefined") return a;
    return arrayCity[a];
};
var topColor = "#FFFFFF";
var subColor = "#FFFFFF";
var xoffset = 0;
var yoffset = 0;
/*
Mapbar Maplet Engine (C)2005 Mapbar Inc
*/
var sN = function () {
    this.clear = function () {};
    this.paint = function () {};
    this.lB = function () {};
    this.lE = function () {};
    this.setColor = function () {}
};
var jsGraphics = function (a) {};
var gq = function (a, b, c, d, e, f, g, i) {
    var h = document.createElement("div");
    h.unselectable = "on";
    h.id = a;
    h.style.position = "absolute";
    h.style.top = parseInt(c) + "px";
    h.style.left = parseInt(b) + "px";
    h.style.zIndex = g;
    h.style.width = d + (d == "auto" ? "" : "px");
    h.style.height = e + (e == "auto" ? "" : "px");
    h.style.visibility = (f) ? 'visible' : 'hidden';
    h.innerHTML = i;
    return h
};
var PerformControl = function (e, a, b) {
    var c = a.parentNode.q9;
    switch (b) {
    case 1:
        c.panTo(parseInt(c.width) / 2, 0);
        break;
    case 2:
        c.panTo(0, parseInt(c.height) / 2);
        break;
    case 3:
        c.panTo(-parseInt(c.width) / 2, 0);
        break;
    case 4:
        c.panTo(0, -parseInt(c.height) / 2);
        break;
    case 5:
        c.zoomIn();
        break;
    case 6:
        c.zoomOut();
        break;
    case 7:
        c.setMode(ts.tb);
        break;
    case 8:
        var d = parseInt(a.style.top) - 96 + parseInt(c.controlCanvas.top);
        var y = parseInt((px) ? event.clientY : e.clientY) - parseInt(c.offsetY) - parseInt(c.top);
        y -= d;
        if (!px && c.panel.style.position != "absolute") {}
        AB = MAX_ZOOM_LEVEL - Math.max(0, Math.min(MAX_ZOOM_LEVEL, parseInt((parseInt(y) - 100) / gb.p91_)));
        a.parentNode.update(AB);
        c.CK0();
        c.setZoomLevel(AB, true, false);
        break;
    default:
        break
    }
};
var y4 = null;
var showMouseTipBox = function (x, y, a, b) {
    try {
        if (y4 == null || y4 == "undefined") {
            if (maplet.sS != ts.tw) {
                y4 = gq("mousetipbox", parseInt(x) + 10, parseInt(y) + 18, "auto", "auto", 1, 100, a);
                y4.className = "ptlabel";
                y4.style.backgroundColor = "#FFFFFF";
                y4.style.padding = "2px";
                y4.style.border = "1px solid #0E347F";
                y4.style.color = "#D50F1E"
            } else {
                y4 = gq("mousetipbox", parseInt(x) + 10, parseInt(y) + 18, "auto", "auto", 1, 100, a)
            }
            y4.unselectable = "on";
            y4.style.MozUserSelect = "none"
        } else {
            y4.style.left = (parseInt(x) + 10) + "px";
            y4.style.top = (parseInt(y) + 18) + "px";
            y4.visibility = "visible"
        }
        if (y4 != null && (y4.parentNode == null || y4.parentNode != b)) {
            b.appendChild(y4)
        }
    } catch (e) {}
};
var nX = function () {
    if (y4 != null) {
        if (y4.parentNode != null) {
            _removeNode(y4)
        }
        y4 = null
    }
};
var imageTileError = function (a) {
    if (a.width == 300 && a.ntry == "0") {
        a.ntry = "1";
        a.src = a.src + "?"
    } else if (a.width == 300 && a.ntry == "1") {
        a.ntry = "2";
        a.src = a.src + "?"
    } else {
        a.ntry = "3";
        a.onerror = null;
        a.src = strImgsvrUrl + "images/mask.gif";
        a.style.width = "300px";
        a.style.height = "300px"
    }
};
var imageTileOk = function (a) {
    a.onerror = null;
    a.onload = null;
    a.style.width = "300px";
    a.style.height = "300px"
};
var fJ = function (a, b) {
    var c = false;
    while (a != null) {
        if ((typeof b == "string" && a.id == b) || (a == b)) {
            c = true;
            break
        }
        a = a.parentNode
    }
    return c
};
var y5 = null;
var waitHideTip = function () {
    if (y5) clearTimeout(y5);
    y5 = null;
    y5 = setTimeout("hideToolTipMenu()", 2000)
};
var lbp = function (a, x, y, w, b, c, d, e) {
    am$n[a] = {
        x: x,
        y: y,
        w: w,
        wO: b,
        y6: c,
        yU: d,
        gy91: e
    };
    p33(a, x, y, w, b, c, d, e)
};
var p33 = function (a, x, y, w, b, c, d, e) {
    if (typeof a == "string" && a != null && document.getElementById(a) != null && typeof b == "string" && b != null) {
        if (!e) {
            document.getElementById(a).innerHTML += "<div unselectable=\"on\" class=\"hotspotlabel\" onmouseout=\"javascript:waitHideTip();\" onmouseover=\"javascript:{var e = arguments[0];setToolTipMenu(e,e,'" + c + "','" + (d) + "',e)};\" style=\"position:absolute;left:" + x + "px;top:" + y + "px;width:" + w + "px;height:0px\">" + b + "</div>"
        } else {
            document.getElementById(a).innerHTML += "<div unselectable=\"on\"  style=\"position:absolute;left:" + x + "px;top:" + y + "px;width:" + w + "px;height:0px\">" + b + "</div>"
        }
    }
};
var am$n = {};

function CreateToolTip(a, b, c) {
    var d = '<table id="mytooltip_container" border="0" width="150" cellspacing="0" cellpadding="0"><tr><td width="100%" bgcolor="#FF0000"><table border="0" width="150" cellspacing="1" cellpadding="0">' + '<tr><td width="100%" bgcolor="#FF0000">' + '<table border="0" width="100%" cellspacing="0" cellpadding="0">' + '<tr><td width="100%" bgcolor=' + topColor + '>' + '<table border="0" width="100%" cellspacing="0" cellpadding="0" align="center">' + '<tr><td id="mytooltiptitle"width="100%" class="tooltiptitle">' + b + '</td>' + '<td style="cursor:pointer;" valign="top" align="right">' + '<img src="' + strImgsvrUrl + 'images/xclose.gif" onclick="javascript:hideToolTipMenu();">' + '</td>' + '</tr>' + '</table>' + '</td></tr>' + '<tr><td width="100%" bgcolor=' + subColor + '>' + '<table border="0" width="100%" cellpadding="0" cellspacing="0" align="center">' + '<tr><td id="mytooltipcontent" width="100%" class="tooltipcontent">' + c + '</td></tr>' + '</table>' + '</td></tr>' + '</table>' + '</td></tr>' + '</table></td></tr></table>';
    document.getElementById(a).innerHTML = d;
    var e = document.getElementById(a).childNodes[0];
    document.getElementById(a).style.width = e.clientWidth;
    document.getElementById(a).style.height = e.clientHeight
};
var setToolTipMenu = function (x, y, a, b, e) {
    var c = document["mapbar-maplet"];
    if (c != null && c.width && c.height) {
        mapwidth = c.width;
        mapheight = c.height;
        if (typeof x == "undefined" || typeof e == "object") {
            x = ((px) ? event.clientX : e.clientX) - c.offsetX - c.left;
            y = ((px) ? event.clientY : e.clientY) - c.offsetY - c.top
        }
    }
    UpdateContent("ToolTip", a, b);
    var d = document.getElementById("ToolTip").clientWidth;
    var f = document.getElementById("ToolTip").clientHeight;
    if (x > mapwidth - d) {
        x = x - d
    };
    if (y > mapheight - f) {
        y = y - f
    };
    MoveToolTip("ToolTip", y + yoffset, x + xoffset);
    document.getElementById("ToolTip").style.visibility = 'visible'
};
var hideToolTipMenu = function () {
    document.getElementById("ToolTip").style.visibility = "hidden";
    var a = document["mapbar-maplet"];
    if (a.getContextMenu() != null) {
        a.getContextMenu().hide()
    }
    MoveToolTip("ToolTip", 0, 0)
};
var MoveToolTip = function (a, b, c) {
    if (px) {
        document.getElementById(a).style.top = parseInt(eval(b)) + "px"
    } else {
        document.getElementById(a).style.top = parseInt(eval(b)) + "px"
    }
    document.getElementById(a).style.left = parseInt(eval(c)) + "px"
};
var UpdateContent = function (a, b, c) {
    if (initialize == 0) {
        CreateToolTip(a, b, c);
        initialize = 1
    }
    if (document.getElementById("mytooltiptitle")) document.getElementById("mytooltiptitle").innerHTML = b;
    if (document.getElementById("mytooltipcontent")) document.getElementById("mytooltipcontent").innerHTML = c;
    var d = document.getElementById("ToolTip");
    var e = document.getElementById("mytooltip_container");
    if (e) {
        d.style.width = e.clientWidth + "px";
        d.style.height = e.clientHeight + "px"
    }
};
var ts = {
    tz: 1,
    tA: 2,
    ty: 3,
    tv: 5,
    tw: 6,
    tx: 7,
    tt: 8,
    lz: 9,
    ly: 10,
    tb: 11,
    np: 12,
    l3: 13,
    tM: 14,
    tu: 23,
    ta: 15,
    u4XWR: 24,
    y2A: 25
};

function t63s(a) {
    if (typeof a == "undefined" || !a) return false;
    return a.constructor.toString().indexOf("Array") != -1
};

function U411(a) {
    var b = 0,
        KYl4 = 0;
    if (typeof a == "string" && a) a = document.getElementById(a);
    if (typeof a == "object" && a) {
        do {
            b += a.offsetTop || 0;
            KYl4 += a.offsetLeft || 0;
            if (a.offsetParent == document.body) if (a.style.position == 'absolute') break;
            a = a.offsetParent
        } while (a)
    }
    return [KYl4, b]
};

function dP2(a, b) {
    var r = null;
    if (typeof a == "string" && a) a = aa(a);
    if (typeof a == "object" && a) {
        do {
            r = a.getAttribute(b);
            if (r || a.parentNode == maplet.map) break;
            a = a.parentNode
        } while (a)
    }
    return r
};
var $6R = function (f, g, h, j) {
    var k = function (d, a, v) {
        if (typeof d.setAttribute != "undefined") d.setAttribute(a, v)
    };
    var l = function (d, a, v, b) {
        if (typeof d == "object" && d && typeof d.childNodes != "undefined") {
            var e = d.childNodes;
            for (var i = 0; i < e.length; i++) {
                var c = e[i];
                if (c.childNodes.length > 0) {
                    l(c, a, v, b)
                } else if (typeof c.tagName == "string" && !b[c.tagName.toLowerCase()]) {
                    k(c, a, v)
                }
            }
            k(d, a, v)
        }
    };
    if (t63s(j)) {
        for (var i = 0; i < j.length; i++) j[j[i].toLowerCase()] = 1
    } else {
        j = []
    }
    l(f, g, h, j)
};
var l4q2x = function (e, f) {
    var g = function (d, a) {
        if (typeof d.removeAttribute != "undefined") d.removeAttribute(a)
    };
    var h = function (d, a) {
        if (typeof d == "object" && d && typeof d.childNodes != "undefined") {
            var b = d.childNodes;
            for (var i = 0; i < b.length; i++) {
                var c = b[i];
                if (c.childNodes.length > 0) {
                    h(c, a)
                } else if (typeof c.tagName == "string") {
                    g(c, a)
                }
            }
            g(d, a)
        }
    };
    h(e, f)
};

function _getStyle(a, b, c) {
    var x = null;
    if (typeof a == "string" && a) x = document.getElementById(a);
    else x = a;
    if (typeof x != "object" || !x) return "";
    if (!b && !c) return "";
    if (b && !c) c = b;
    if (!b && c) b = c;
    var y = "";
    if (x.currentStyle) {
        y = x.currentStyle[b]
    } else if (document.defaultView && document.defaultView.getComputedStyle) {
        var d = document.defaultView.getComputedStyle(x, null);
        if (jn6 || M$PE) {
            y = d ? d.getPropertyValue(b) : ""
        } else {
            y = d ? d.getPropertyValue(c) : ""
        }
    }
    return y
};

function $9tU(s, d) {
    if (isNaN(parseInt(s))) return (typeof d != "number" ? 0 : d);
    else
    return parseInt(s)
};

function _isInsidePolygon(a, b) {
    for (var c = false, i = -1, l = b.length, qC = l - 1; ++i < l; qC = i) {
        if (((b[i].y <= a.y && a.y < b[qC].y) || (b[qC].y <= a.y && a.y < b[i].y)) && (a.x < (b[qC].x - b[i].x) * (a.y - b[i].y) / (b[qC].y - b[i].y) + b[i].x)) c = !c
    }
    return c
};

function _isInsideRect(a, b) {
    if (b.max.x > a.x && b.min.x <= a.x && b.max.y > a.y && b.min.y <= a.y) return true;
    return false
};

function _isRectint(a, b) {
    return Math.abs((a.min.x + a.max.x) / 2 - (b.min.x + b.max.x) / 2) < ((a.max.x + b.max.x - a.min.x - b.min.x) / 2) && Math.abs((a.min.y + a.max.y) / 2 - (b.min.y + b.max.y) / 2) < ((a.max.y + b.max.y - a.min.y - b.min.y) / 2)
};

function _IsIntersect(a, b) {
    var d = (a.end.y - a.start.y) * (b.end.x - b.start.x) - (b.end.y - b.start.y) * (a.end.x - a.start.x);
    if (d == 0) {
        return false
    } else {
        var c = ((a.end.x - a.start.x) * (b.end.x - b.start.x) * (b.start.y - a.start.y) + (a.end.y - a.start.y) * (b.end.x - b.start.x) * a.start.x - (b.end.y - b.start.y) * (a.end.x - a.start.x) * b.start.x) / d;
        var e = ((a.end.y - a.start.y) * (b.end.y - b.start.y) * (b.start.x - a.start.x) + (a.end.x - a.start.x) * (b.end.y - b.start.y) * a.start.y - (b.end.x - b.start.x) * (a.end.y - a.start.y) * b.start.y) / (-d);
        if ((c - a.start.x) * (c - a.end.x) <= 0 && (c - b.start.x) * (c - b.end.x) <= 0 && (e - a.start.y) * (e - a.end.y) <= 0 && (e - b.start.y) * (e - b.end.y) <= 0) {
            return true
        }
    }
    return false
};
var P6A4 = function (a) {
    if (window.event) {
        return window.event
    } else {
        while (a.caller) a = a.caller;
        if (typeof a.arguments != "undefined" && a.arguments && a.arguments.length > 0) {
            if (a.arguments[0].constructor.toString().indexOf("Event")) return a.arguments[0]
        }
    }
    return null
};
var PI7 = function (e, a) {
    if (typeof e == "undefined") return;
    if (window.event) {
        window.event.returnValue = false;
        window.event.cancelBubble = true
    } else {
        if (typeof a != "boolean") a = true;
        if (a) e.preventDefault();
        e.stopPropagation()
    }
};

function aa(a) {
    if (typeof a == 'string') {
        return document.getElementById(a)
    } else {
        return null
    }
};
_removeNode = document.all ?
function () {
    var d;
    return function (n) {
        if (n && n.tagName != 'BODY') {
            d = d || document.createElement('div');
            d.appendChild(n);
            d.innerHTML = ''
        }
    }
}() : function (n) {
    if (n && n.parentNode && n.tagName != 'BODY') {
        n.parentNode.removeChild(n)
    }
};
d8k = function (s) {
    var r = new RegExp("<.*?>|\r|\n", "gi");
    return function (s) {
        return s.replace(r, "")
    }
}();
var q1iCE = function (a, b, c, d, e, f, g) {
    this.URL = a;
    this.$7938 = b;
    this._MuC = e;
    this.a84 = f;
    this.aB = g;
    this.Un$ = c;
    this.BNdc5 = d
};
q1iCE.prototype.IB2TC = function () {
    var a = document.getElementById("scriptTemp");
    if (a) {
        _removeNode(a)
    }
    var s = document.createElement("script");
    s.language = "javascript";
    s.type = "text/javascript";
    s.id = (this.BNdc5 && this.BNdc5 == true) ? "Temp" + Math.random() : "scriptTemp";
    s.src = (this.Un$ && this.Un$ == true) ? this.URL + "?" + Math.random() : this.URL;
    var b = this.$7938 ? (this.$7938) : parseInt;
    var c = s.id,
        PdCk = this;
    var d = this._MuC;
    var e = this.a84;
    var f = typeof this.aB == "undefined" || !this.aB ? [] : this.aB;
    s.onload = s.onreadystatechange = function () {
        if (typeof ActiveXObject != "undefined") {
            if (s.readyState == "loaded" || s.readyState == "complete") {
                if (typeof b == "function") {
                    f.push(s.id);
                    b.apply(d, f)
                }
                PdCk.Kh_96(c);
                s.onerror = null;
                s.onload = null;
                s.onreadystatechange = null
            }
        } else {
            if (typeof b == "function") {
                f.push(s.id);
                b.apply(d, f)
            }
            PdCk.Kh_96(c);
            s.onerror = null;
            s.onload = null;
            s.onreadystatechange = null
        }
    };
    s.onerror = function () {
        if (s && s.parentNode) s.parentNode.removeChild(s);
        if (typeof e == "function") {
            f.push(s.id);
            e.apply(d, f)
        }
        PdCk.Kh_96(c);
        s.onerror = null;
        s.onload = null;
        s.onreadystatechange = null
    };
    document.body.insertBefore(s, document.body.firstChild)
};
q1iCE.prototype.Kh_96 = function (a) {
    var b = document.getElementById(a);
    b && document.body.removeChild(b)
};
var yHC42 = function () {
    if (f$uP7) return document.documentElement.scrollTop;
    else
    return document.body.scrollTop
};
var j10N = function () {
    if (f$uP7) return document.documentElement.scrollLeft;
    else
    return document.body.scrollLeft
};
var sC = function (x, y, a) {
    document.getElementById("myalert").style.top = (parseInt(y) - 60 + yHC42()) + "px";
    document.getElementById("myalert").style.left = (parseInt(x) - 100 + j10N()) + "px";
    var b = (en == 1) ? "Close" : tX("%u5175%uE760");
    document.getElementById("myalert").innerHTML = '<table width="196px" border="0" cellpadding="0" cellspacing="0" style="border:2px solid #0E347F;"><tr><td height="100px" align="center" valign="middle" bgcolor="#FFFFFF"><table width="167px" height="79px" border="0" cellpadding="0" cellspacing="0"><tr><td height="55px" align="center" valign="middle" style="font-size: 12px;color: #0065AD;">' + a + '</td></tr><tr><td height="24px" align="center" valign="middle"><input type="button" value="' + b + '" onClick="document.getElementById(\'myalert\').style.display = \'none\'"onMouseOver="style.background=\'#DEE7EF\';style.cursor=\'hand\';style.cursor=\'pointer\'"onMouseOut="this.style.background=\'FDFAF3\'" style="font-size: 9pt; border: 1px solid #4A799C;background-color: #FDFAF3"></td></tr></table></td></tr></table>';
    document.getElementById("myalert").style.display = ""
};
var gP = function (a) {
    if (gQ) sC(300, 100, a)
};
var D89 = new RegExp("<(?:!(?:--[\\s\\S]*?--\\s*)?(>)\\s*|(?:script|style|SCRIPT|STYLE)[\\s\\S]*?<\\/(?:script|style|SCRIPT|STYLE)>)", "gi");
var r95$0 = new RegExp("[\\r\\n]", "gi");
var cG$$g = function (a, b) {
    if (typeof b != "boolean") b = false;
    if (typeof a == "string" && a) {
        var s = a.replace(D89, "");
        if (b) s = s.replace(r95$0, "");
        return s
    } else {
        return a
    }
};
var p2s = null;
var _bcx = function (s) {
    var a = {
        nI54i: 0,
        EDT: 0,
        rJC2: 0,
        ch: 0
    };
    if (typeof s == "string" && s && maplet && maplet.panel) {
        if (!p2s) {
            p2s = document.createElement("DIV");
            with(p2s.style) {
                position = "absolute";
                left = -Number.MAX_VALUE + "px";
                top = -Number.MAX_VALUE + "px"
            }
            maplet.sF.div.appendChild(p2s)
        }
        p2s.innerHTML = s;
        a.nI54i = p2s.offsetWidth;
        a.EDT = p2s.offsetHeight;
        a.rJC2 = p2s.clientWidth;
        a.ch = p2s.clientHeight;
        p2s.innerHTML = ""
    }
    return a
};
var x50X5 = function (f, g) {
    function p_74(x, y, a, b, d, e) {
        var c = 0;
        if (y > e) c |= d242;
        else if (y < b) c |= YSu3b;
        if (x > d) c |= T_8r$;
        else if (x < a) c |= R02X;
        return c
    };
    var h = f.AH5n.x,
        H1799 = f.AH5n.y,
        x2 = f._8$7.x,
        N_7 = f._8$7.y;
    var i = g.min.x,
        j420 = g.min.y,
        j7M = g.max.x,
        $46y3 = g.max.y;
    var j, N2u, d_3T, _$3S = 0;
    var k = false,
        ln = false;
    j = p_74(h, H1799, i, j420, j7M, $46y3);
    N2u = p_74(x2, N_7, i, j420, j7M, $46y3);
    do {
        if ((j | N2u) == 0) {
            k = true;
            ln = true
        } else if ((j & N2u) > 0) {
            ln = true
        } else {
            var x = 0,
                y = 0;
            d_3T = j != 0 ? j : N2u;
            if ((d_3T & d242) > 0) {
                x = h + (x2 - h) * ($46y3 - H1799) / (N_7 - H1799);
                y = $46y3
            } else if ((d_3T & YSu3b) > 0) {
                x = h + (x2 - h) * (j420 - H1799) / (N_7 - H1799);
                y = j420
            } else if ((d_3T & T_8r$) > 0) {
                y = H1799 + (N_7 - H1799) * (j7M - h) / (x2 - h);
                x = j7M
            } else if ((d_3T & R02X) > 0) {
                y = H1799 + (N_7 - H1799) * (i - h) / (x2 - h);
                x = i
            }
            if (d_3T == j) {
                h = x;
                H1799 = y;
                j = p_74(h, H1799, i, j420, j7M, $46y3)
            } else {
                x2 = x;
                N_7 = y;
                N2u = p_74(x2, N_7, i, j420, j7M, $46y3)
            }
        }
        _$3S++
    } while (ln != true && _$3S < 5000);
    if (k) {
        f.AH5n.x = Math.floor(h);
        f.AH5n.y = Math.floor(H1799);
        f._8$7.x = Math.floor(x2);
        f._8$7.y = Math.floor(N_7)
    }
    return k
};
var T_8r$ = 2;
var d242 = 8;
var YSu3b = 4;
var R02X = 1;
var lV5Ro = 6;

function ww7Gf(a) {
    var i = 0;
    var c = [];
    var d = a.length;
    if (d <= 0) return c;
    while (i < d) {
        var b = 0;
        var e = 0;
        var f = 0;
        var g = lV5Ro;
        do {
            b = (a.charCodeAt(i++)) - 63;
            var h = (((b >> 1) ^ (g++)) & 0x1f);
            f |= h << e;
            e += 5
        } while ((b & 0x1) == 0);
        f = ((f & 0x01) == 0x01) ? ~ (f >> 1) : (f >> 1);
        c.push(f)
    }
    return c
};

function ren(a, b, c, d) {
    var e = Math.atan((d - b) / (c - a));
    var f = 180 / Math.PI * e;
    if (a <= c && b >= d) f = f + 90;
    else if (a <= c && b < d) f = f + 90;
    else if (a > c && b <= d) f = 90 + f + 180;
    else if (a > c && b > d) f = f + 270;
    return f
};

function _removeArrayItem(a, b, c) {
    if (!t63s(a)) return;
    var d, $68t = a.length;
    b = b < 0 ? b - 0 + $68t : b;
    c = c < 0 ? c - 0 + $68t : c;
    if (c < b || b >= $68t || c >= $68t) return;
    d = a.slice((c || b) + 1 || a.length);
    a.length = b < 0 ? a.length + b : b;
    return a.push.apply(a, d)
};

function xInoP(a) {
    if (typeof a == "object") {
        for (var i in a) {
            a[i] = null;
            delete a[i]
        }
    }
    a = null
};
var cq = {
    pu: {},
    vp: function (l) {
        return this.pu[l] ||
        function (a, b) {
            var c;
            if (b.indexOf(",") == -1) {
                var d = -1;
                var e = 0;
                var f = '';
                var g = '';
                if (b != null && parseInt(b.charAt(0), 36) >= 33) {
                    g = b.charAt(0);
                    b = b.substring(1)
                }
                for (var i = 0; i < (b.length - (c75 ? 1 : 0)); i++) {
                    var h = parseInt(b.charAt(i), 36) - 10;
                    if (h >= 17) h = h - 7;
                    f += (h).toString(36);
                    if (h > e) {
                        d = i;
                        e = h
                    }
                }
                var j = parseInt(f.substring(0, d), 16);
                var k = parseInt(f.substring(d + 1), 16);
                if ("X" == g) {
                    j = -j
                }
                if ("Y" == g) {
                    k = -k
                }
                c = new Array();
                c[0] = (j + k - parseInt(strLicenseKey)) / 2;
                c[1] = (k - c[0]) / 100000.0;
                c[0] /= 100000.0;
                if (c[0] > 180) c[0] -= 360;
                a[b] = c;
                return c
            } else {
                c = V7i5B(b);
                a[b] = c;
                return c
            }
        }(this.pu, l)
    },
    zn: function (a, b, c) {
        if (typeof c != "boolean") c = false;
        if (typeof a != "undefined" && typeof b != "undefined") {
            this.lf = parseFloat(b);
            this.li = parseFloat(a)
        }
        if (apiType == 1 && !c) {
            return O6122(this.li + "," + this.lf).join(",")
        } else {
            var d = '';
            var e = parseInt(parseFloat(Math.max(-90, Math.min(90, this.lf))) * 100000);
            var f = parseInt(parseFloat((this.li < 0) ? (this.li + 360) : this.li) * 100000);
            var g = f - e + parseInt(strLicenseKey);
            var h = f + e;
            if (g < 0) {
                d = 'X';
                g = -g
            }
            if (h < 0) {
                d = 'Y';
                h = -h
            }
            var j = (g).toString(16);
            var k = (h).toString(16);
            for (var i = 0; i < j.length; i++) {
                var l = parseInt(j.charAt(i), 16);
                d += (((l >= 10) ? (l + 7) : l) + 10).toString(36)
            }
            d += 'z';
            for (var m = 0; m < k.length; m++) {
                var n = parseInt(k.charAt(m), 16);
                d += (((n >= 10) ? (n + 7) : n) + 10).toString(36)
            }
            if (c75) {
                d += d.charAt(c75)
            }
            return d.toUpperCase()
        }
    }
};
var xE = function (a) {
    var c = '';
    for (var i = 0; i < a.length; i++) {
        var b = a.charCodeAt(i).toString(36).toUpperCase();
        if (b.length <= 1) {
            b = "0" + b
        }
        c += b
    }
    return c
};
var sdc = function (a) {
    var c = '';
    for (var i = 0; i < a.length; i += 2) {
        var b = a.substring(i, i + 2);
        c += String.fromCharCode(parseInt(b, 36))
    }
    return c
};
var tX = function (a) {
    a = unescape(a);
    var c = String.fromCharCode(a.charCodeAt(0) - a.length);
    for (var i = 1; i < a.length; i++) {
        c += String.fromCharCode(a.charCodeAt(i) - c.charCodeAt(i - 1))
    }
    return c
};

function O6122(a) {
    var b = a.split(",");
    var x = parseFloat(b[0]) * 100000 % 36000000;
    var y = parseFloat(b[1]) * 100000 % 36000000;
    var c = parseInt(O38(x, y) + x);
    var d = parseInt(Rgo(x, y) + y);
    return [c / 100000.0, d / 100000.0]
};

function V7i5B(a) {
    var b = a.split(",");
    var x = parseFloat(b[0]) * 100000 % 36000000;
    var y = parseFloat(b[1]) * 100000 % 36000000;
    var c = parseInt(-C6_(x, y) + x);
    var d = parseInt(-nlo(x, y) + y);
    c = parseInt(-C6_(c, d) + x + ((x > 0) ? 1 : -1));
    d = parseInt(-nlo(c, d) + y + ((y > 0) ? 1 : -1));
    return [c / 100000.0, d / 100000.0]
};

function O38(x, y) {
    return Q13f2(x, y)
};

function Rgo(x, y) {
    return F5o7(x, y)
};

function C6_(x, y) {
    return Q13f2(x, y)
};

function nlo(x, y) {
    return F5o7(x, y)
};

function Q13f2(x, y) {
    return f28(P0D1(C22(y, x), qxX84(x, y)), P0D1(o885(x, y), m5e1(y, x)))
};

function F5o7(x, y) {
    return f28(P0D1(o885(y, x), qxX84(x, y)), P0D1(C22(x, y), m5e1(y, x)))
};

function P0D1(x, y) {
    return x * y
};

function f28(x, y) {
    return x + y
};

function C22(x, y) {
    return Math.cos(x / 100000)
};

function o885(x, y) {
    return Math.sin(x / 100000)
};

function m5e1(x, y) {
    return x / 9000
};

function qxX84(x, y) {
    return x / 18000
};
var fD = function (b, c, d, f, g, i, j, k, l) {
    this.n7 = k;
    this.container = l;
    this.name = b;
    this.qe = 1;
    this.hide = function () {
        this.style.visibility = "hidden"
    };
    this.show = function () {
        this.style.visibility = "visible"
    };
    this.setVisible = function (a) {
        if (this.style.display != (a ? "" : "none")) this.style.display = a ? "" : "none"
    };
    this.moveTo = function (x, y) {
        eval(document.body.scrollTop);
        this.style.left = parseInt(x) + "px";
        this.style.top = parseInt(y) + "px"
    };
    this.resize = function (w, h) {
        if (parseInt(w) >= 0 && parseInt(h) >= 0) {
            this.style.width = parseInt(w) + "px";
            this.style.height = parseInt(h) + "px"
        }
    };
    this.nz = function () {
        return parseInt(this.style.height)
    };
    this.nH = function () {
        return parseInt(this.style.width)
    };
    this.qn = function (x, y) {
        return (x > parseInt(this.style.left) && x < (parseInt(this.style.left) + parseInt(this.style.width)) && y > parseInt(this.style.top) && y < (parseInt(this.style.top) + parseInt(this.style.height)))
    };
    this.appendChild = function (a) {
        try {
            this.div.appendChild(a)
        } catch (e) {}
    };
    this.removeChild = function (a) {
        try {
            _removeNode(a)
        } catch (e) {}
    };
    this.clear = function () {
        this.div.innerHTML = ""
    };
    this.clean = this.clear;
    this.getName = function () {
        return this.name
    };
    try {
        this.div = gq(this.name, c, d, f, g, i, j, k);
        this.div.unselectable = "on";
        if (this.container) this.container.appendChild(this.div);
        this.style = this.div.style;
        this.graphics = (px) ? new sN() : new jsGraphics(this.name)
    } catch (e) {}
};
var MBound = function (d, e, f, g, h, i) {
    this.s4 = f;
    this.tj = d;
    this.s6 = g;
    this.tl = e;
    this.s0 = (typeof i == "undefined") ? MAX_ZOOM_LEVEL : parseInt(i);
    this.tp = (typeof h == "undefined") ? MIN_ZOOM_LEVEL : parseInt(h);
    this.qn = function (a, b) {
        if (this.s4 < a || this.tj > a) return false;
        var c = (b - this.tl) % 360;
        if (c < 0) c += 360;
        return ((this.s6 - this.tl) >= c)
    }
};
var MBrush = function (a, b, c, d, e, f, g, h, i) {
    this.color = (typeof a == "undefined") ? "#FF0000" : a;
    this.stroke = (typeof b == "undefined") ? 5 : parseInt(b);
    this.style = (typeof c == "undefined") ? 0 : parseInt(c);
    this.fill = (typeof d == "undefined") ? false : d;
    this.bgcolor = (typeof e == "undefined") ? this.color : e;
    this.transparency = (typeof f == "undefined") ? transparencyLevel : parseInt(f);
    this.bgtransparency = (typeof g == "undefined") ? transparencyLevel / 2 : parseInt(g);
    this.arrow = (typeof h == "undefined") ? bArrow : h;
    this.dmstyle = (typeof i == "undefined") ? {
        color: "#0000ff",
        size: this.stroke * 4,
        transparency: this.transparency,
        strokeWidth: 1,
        strokeColor: "#FFFFFF",
        strokeTransparency: 100
    } : i;
    this.overlap = {
        enable: false,
        stroke: null,
        color: "white",
        transparency: transparencyLevel
    };
    this.toString = function () {
        return 'com.mapbar.maplet.MBrush'
    }
};
var MPoint = function (b, c, d, e) {
    this.pid = null;
    this.lat = null;
    this.lon = null;
    this.maplet = null;
    var f = null;
    var g = null;
    this.mapX = null;
    this.mapY = null;
    this.$2J = null;
    this.encrypt = (typeof d == "boolean" ? d : true);
    this.levelGroup = (typeof e == "number" && e >= 0 && e <= 3 ? e : 3);
    if (typeof b != "undefined" || typeof c != "undefined") {
        if (t63s(b)) b = b.join(",");
        if (typeof b == "string" && b.indexOf(",") != -1) {
            if (this.encrypt) {
                this.pid = b;
                this.lon = parseFloat(b.split(",")[0]);
                this.lat = parseFloat(b.split(",")[1])
            } else {
                g = parseFloat(b.split(",")[0]);
                f = parseFloat(b.split(",")[1])
            }
        } else if (!isNaN(parseFloat(b)) && !isNaN(parseFloat(c))) {
            if (this.encrypt) {
                this.pid = b + "," + c;
                this.lon = parseFloat(b);
                this.lat = parseFloat(c)
            } else {
                g = b;
                f = c
            }
        } else {
            this.pid = (typeof getPid == "undefined") ? b : getPid(b);
            if (apiType == 1) {
                var h = cq.vp(this.pid);
                g = h[0];
                f = h[1];
                this.lon = parseFloat(this.pid.split(",")[0]);
                this.lat = parseFloat(this.pid.split(",")[1])
            }
        }
        if (this.encrypt && g == null && f == null) {
            var r = cq.vp(this.pid);
            g = r[0];
            f = r[1]
        }
    };
    this.inLevelRange = function (a) {
        if (a >= 0 && a <= 3 && this.levelGroup == 3) return true;
        else if (a >= 4 && a <= 7 && this.levelGroup >= 2) return true;
        else if (a >= 8 && a <= 11 && this.levelGroup >= 1) return true;
        else if (a >= 12 && a <= 18 && this.levelGroup >= 0) return true;
        else
        return false
    };
    this.getPid = function () {
        if (!this.encrypt && !this.pid) {
            this.pid = cq.zn(g, f);
            if (apiType == 1) {
                this.lon = this.pid.split(",")[0];
                this.lat = this.pid.split(",")[1]
            } else if (this.lon != null) {
                var r = O6122(g + "," + f);
                this.lon = r[0];
                this.lat = r[1]
            }
        }
        return this.pid
    };
    this.setMapCoords = function (x, y) {
        this.mapX = x;
        this.mapY = y;
        g = this.maplet.zp(x, y);
        f = this.maplet.zo(x, y);
        this.pid = cq.zn(g, f);
        if (apiType == 1) {
            this.lon = this.pid.split(",")[0];
            this.lat = this.pid.split(",")[1]
        } else if (this.lon != null) {
            var r = O6122(g + "," + f);
            this.lon = r[0];
            this.lat = r[1]
        }
    };
    this.recalcScreenCoords = function () {
        this.mapX = this.maplet.zl(g, f);
        this.mapY = this.maplet.zm(f, g)
    };
    this._galn = function () {
        return g
    };
    this.NtC = function (v) {
        g = v
    };
    this._galt = function () {
        return f
    };
    this.eKU5 = function (v) {
        f = v
    };
    this.clone = function () {
        var a = new MPoint(undefined, undefined, this.encrypt, this.levelGroup);
        a.pid = this.pid;
        a.lat = this.lat;
        a.lon = this.lon;
        a.maplet = this.maplet;
        a.NtC(this._galn());
        a.eKU5(this._galt());
        a.mapX = this.mapX;
        a.mapY = this.mapY;
        return a
    };
    this.j1u9 = function () {
        return !isNaN(g) && !isNaN(f)
    };
    this.initialize = function (a) {
        this.maplet = a;
        this.recalcScreenCoords()
    };
    this.toString = function () {
        return 'com.mapbar.maplet.MPoint'
    }
};
var f1 = {
    fx: [],
    uo: 100,
    nk: function (a, b, w, h) {
        if (typeof a != "object" || !a) return;
        this.fx[this.fx.length] = new Image();
        var c = this.fx.length - 1;
        this.fx[c].q9 = a;
        a.style.filter = "alpha(opacity=" + this.uo + ");";
        a.style.MozOpacity = (this.uo / 100.0);
        a.style.opacity = (this.uo / 100.0);
        a.style.qK = (this.uo / 100);
        if (typeof w != "undefined") {
            a.width = parseInt(w) + "px";
            this.fx[c].width = parseInt(w) + "px"
        }
        if (typeof h != "undefined") {
            a.height = parseInt(h) + "px";
            this.fx[c].height = parseInt(h) + "px"
        }
        this.fx[c].container = this;
        this.fx[c].pn = c;
        this.fx[c].ln = "0";
        this.fx[c].onload = function () {
            if (typeof w != "undefined") {
                this.width = parseInt(w) + "px"
            }
            if (typeof h != "undefined") {
                this.height = parseInt(h) + "px"
            }
            this.q9.src = this.src;
            this.q9.style.filter = null;
            this.q9.style.MozOpacity = 1;
            this.q9.style.opacity = 1;
            this.q9.style.qK = 1;
            if (typeof w != "undefined" && !rs) {
                this.q9.width = parseInt(w) + "px";
                this.q9.style.width = parseInt(w) + "px"
            }
            if (typeof h != "undefined" && !rs) {
                this.q9.height = parseInt(h) + "px";
                this.q9.style.height = parseInt(h) + "px"
            }
            this.q9.setAttribute("done", "1");
            this.ln = "1";
            this.container[this.pn] = null;
            this.container.clearCache();
            this.container = null;
            this.q9 = null;
            this.onload = null;
            this.onerror = null
        };
        this.fx[c].onerror = function () {
            if (rs) return false;
            if (typeof w != "undefined") {
                this.width = parseInt(w) + "px"
            }
            if (typeof h != "undefined") {
                this.height = parseInt(h) + "px"
            }
            this.q9.style.filter = null;
            if (typeof w != "undefined" && !rs) {
                this.q9.width = parseInt(w) + "px"
            }
            if (typeof h != "undefined" && !rs) {
                this.q9.height = parseInt(h) + "px"
            }
            this.ln = "1";
            this.q9.width = "300";
            this.q9.height = "300";
            this.q9.style.width = "300";
            this.q9.style.height = "300";
            this.q9.src = sX;
            this.q9.style.backgroundColor = "#ebeae8";
            this.q9.setAttribute("done", "1");
            this.container[this.pn] = null;
            this.container.clearCache();
            this.container = null;
            this.q9 = null;
            this.onload = null;
            this.onerror = null
        };
        this.fx[c].src = b
    },
    clearCache: function () {
        var a = 1;
        for (var i = 0; i < this.fx.length; i++) {
            if (this.fx[i] != null && this.fx[i].ln == "0") {
                a = 0
            } else if (this.fx[i] != null) {
                this.fx[i].q9 = null;
                this.fx[i].container = null;
                this.fx[i].onload = null;
                this.fx[i].onerror = null;
                delete(this.fx[i])
            }
        }
        if (a) {
            for (var b = 0; i < this.fx.length; b++) {
                if (this.fx[b] != null) {
                    this.fx[b].q9 = null;
                    this.fx[b].container = null;
                    this.fx[b].onload = null;
                    this.fx[b].onerror = null;
                    delete(this.fx[b])
                }
            }
            this.fx.length = 0;
            MEvent.trigger(this, "clean")
        }
    }
};
var gb = function (k) {
    this.initialize = function (a) {
        this.maplet = a;
        var b = [];
        l(b, "ctrlPan", 0, 0, 50, 49, -25, 0, "_pan_map");
        l(b, "ctrlZoomOut", 14, 54, 24, 24, 0, 0, "_zo_map");
        var c = n();
        l(b, "ctrlRuler", 14, 78, 24, c, 0, -24);
        l(b, "ctrlZoomIn", 14, 77 + c, 24, 27, 0, -181, "_zi_map");
        l(b, "ctrlSlider", 0, 0, 17, 7, -25, -51);
        b.push("<map name=\"_pan_map\" id=\"_pan_map\">");
        b.push("<area id=\"_fb_n_ctrl_imap\" shape=\"poly\" title=\"" + xN[1] + "\" coords=\"35,6,39,3,42,2,47,1,51,1,56,2,61,4,63,6,63,7,55,15,50,13,48,13,43,15,35,7\" onFocus=\"this.blur()\" onclick=\"PerformControl(event, this,2);\"/>");
        b.push("<area id=\"_fb_s_ctrl_imap\" shape=\"poly\" title=\"" + xN[3] + "\" coords=\"64,38,55,29,50,31,48,31,43,29,34,38,34,39,37,42,42,44,47,45,51,45,56,44,61,42,64,39\" onFocus=\"this.blur()\" onclick=\"PerformControl(event, this,4);\"/>");
        b.push("<area id=\"_fb_w_ctrl_imap\" shape=\"poly\" title=\"" + xN[0] + "\" coords=\"34,8,42,16,40,21,40,23,42,28,33,37,32,37,30,35,28,30,27,25,27,21,28,16,30,11,33,8\" onFocus=\"this.blur()\" onclick=\"PerformControl(event, this,1);\"/>");
        b.push("<area id=\"_fb_e_ctrl_imap\" shape=\"poly\" title=\"" + xN[2] + "\" coords=\"64,8,56,16,58,21,58,23,56,28,65,37,66,37,68,35,70,30,71,25,71,21,70,16,68,11,65,8\" onFocus=\"this.blur()\" onclick=\"PerformControl(event, this,3);\" />");
        b.push("<area id=\"_fb_m_ctrl_imap\" shape=\"circle\" title=\"" + xN[4] + "\" coords=\"48,22,8\" onclick=\"PerformControl(event, this,7);\" onFocus=\"this.blur()\" />");
        b.push("</map>");
        b.push("<map name=\"_zo_map\" id=\"_zo_map\">");
        b.push("<area id=\"_fb_zo_ctrl_imap\" shape=\"poly\" title=\"" + xN[6] + "\" coords=\"8,0,5,1,1,5,0,8,0,21,20,21,20,8,19,5,15,1,12,0\" onFocus=\"this.blur()\" onclick=\"PerformControl(event, this,5);\" />");
        b.push("</map>");
        b.push("<map name=\"_zi_map\" id=\"_zi_map\">");
        b.push("<area id=\"_fb_zi_ctrl_imap\" shape=\"poly\" title=\"" + xN[7] + "\" coords=\"0,183,0,196,1,199,5,203,8,204,12,204,15,203,19,199,20,196,20,183\" onFocus=\"this.blur()\" onclick=\"PerformControl(event, this,6);\" />");
        b.push("</map>");
        b.push("<div id=\"_fb_ctrl_leveltip\" style=\"position:absolute;left:0px;top:0px;width:" + gb.x4E + "px;height:121px;display:none;\">");
        m(b, "_fb_ctrl_lt_s", gb.h2GU[0], 0, 0, gb.x4E, gb.a1o89, -26, -65, 13);
        m(b, "_fb_ctrl_lt_c", gb.h2GU[1], 0, 40, gb.x4E, gb.a1o89, -26, -65, 8);
        m(b, "_fb_ctrl_lt_p", gb.h2GU[2], 0, 72, gb.x4E, gb.a1o89, -26, -65, 4);
        m(b, "_fb_ctrl_lt_cr", gb.h2GU[3], 0, 104, gb.x4E, gb.a1o89, -26, -65, 0);
        b.push("</div>");
        this.dom = new fD("LayerControl", bc, bd, 0, 0, true, 3, b.join(""), this.maplet.panel);
        O = aa("ctrlPan");
        P = aa("ctrlZoomOut");
        Q = aa("ctrlZoomIn");
        R = aa("ctrlRuler");
        S = aa("ctrlSlider");
        T = aa("_fb_ctrl_leveltip");
        U = aa("_fb_ctrl_lt_s");
        V = aa("_fb_ctrl_lt_c");
        W = aa("_fb_ctrl_lt_p");
        X = aa("_fb_ctrl_lt_cr");
        S.firstChild.id = "ctrlSliderImg";
        aa("_pan_map").q9 = this.maplet;
        aa("_zo_map").q9 = this.maplet;
        aa("_zi_map").q9 = this.maplet;
        Y["_ctlSlider_mousedown"] = MEvent.bindDom(S, "mousedown", this, z);
        Y["document_mousemove"] = MEvent.bindDom(document, "mousemove", this, A);
        Y["document_mouseup"] = MEvent.bindDom(document, "mouseup", this, B);
        Y["_ctlRuler_click"] = MEvent.bindDom(R, "click", this, C);
        Y["_ctlRuler_mouseover"] = MEvent.bindDom(R, "mouseover", this, F);
        Y["_ctlRuler_mouseout"] = MEvent.bindDom(R, "mouseout", this, G);
        Y["_ctlRuler_mouseout"] = MEvent.bindDom(R, "mousedown", this, D);
        Y["_ctlRuler_mouseout"] = MEvent.bindDom(R, "mouseup", this, E);
        Y["_zo_map_mouseover"] = MEvent.bindDom(aa("_zo_map"), "mouseover", this, F);
        Y["_zo_map_mouseout"] = MEvent.bindDom(aa("_zo_map"), "mouseout", this, G);
        Y["_zi_map_mouseover"] = MEvent.bindDom(aa("_zi_map"), "mouseover", this, F);
        Y["_zi_map_mouseout"] = MEvent.bindDom(aa("_zi_map"), "mouseout", this, G);
        Y["_ctlSlider_mouseover"] = MEvent.bindDom(S, "mouseover", this, F);
        Y["_ctlSlider_mouseout"] = MEvent.bindDom(S, "mouseout", this, G);
        Y["_ltStreet_click"] = MEvent.bindDom(U, "click", this, H);
        Y["_ltCity_click"] = MEvent.bindDom(V, "click", this, H);
        Y["_ltProvince_click"] = MEvent.bindDom(W, "click", this, H);
        Y["_ltCountry_click"] = MEvent.bindDom(X, "click", this, H);
        Y["_ltStreet_mouseup"] = MEvent.bindDom(U, "mouseup", this, I);
        Y["_ltCity_mouseup"] = MEvent.bindDom(V, "mouseup", this, I);
        Y["_ltProvince_mouseup"] = MEvent.bindDom(W, "mouseup", this, I);
        Y["_ltCountry_mouseup"] = MEvent.bindDom(X, "mouseup", this, I);
        Y["_ltStreet_mousedown"] = MEvent.bindDom(U, "mousedown", this, J);
        Y["_ltCity_mousedown"] = MEvent.bindDom(V, "mousedown", this, J);
        Y["_ltProvince_mousedown"] = MEvent.bindDom(W, "mousedown", this, J);
        Y["_ltCountry_mousedown"] = MEvent.bindDom(X, "mousedown", this, J);
        Y["_zo_map_mouseup"] = MEvent.bindDom(aa("_zo_map"), "mouseup", this, I);
        Y["_zi_map_mouseup"] = MEvent.bindDom(aa("_zi_map"), "mouseup", this, I);
        Y["_fb_n_ctrl_imap_mouseup"] = MEvent.bindDom(aa("_fb_n_ctrl_imap"), "mouseup", this, I);
        Y["_fb_s_ctrl_imap_mouseup"] = MEvent.bindDom(aa("_fb_s_ctrl_imap"), "mouseup", this, I);
        Y["_fb_w_ctrl_imap_mouseup"] = MEvent.bindDom(aa("_fb_w_ctrl_imap"), "mouseup", this, I);
        Y["_fb_e_ctrl_imap_mouseup"] = MEvent.bindDom(aa("_fb_e_ctrl_imap"), "mouseup", this, I);
        Y["_fb_m_ctrl_imap_mouseup"] = MEvent.bindDom(aa("_fb_m_ctrl_imap"), "mouseup", this, I);
        L.apply(this)
    };
    var l = function (a, b, c, d, e, f, g, h, i) {
        a.push("<div id=\"" + b + "\" style=\"position:absolute;left:" + c + "px;top:" + d + "px;width:" + e + "px;height:" + f + "px;overflow:hidden;\" onmousedown=\"return false;\">");
        if (_sqi) {
            a.push("<img id=\"" + b + "_img\" src=\"" + sX + "\" style=\"position:absolute;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=" + CTLIMG_RESOURCE[0].url + ",sizingMethod=scale);width:" + CTLIMG_RESOURCE[0].w + "px;height:" + CTLIMG_RESOURCE[0].h + "px;left:" + g + "px;top:" + h + "px;border:0px;cursor:pointer;\"  onmousedown=\"return false;\" unselectable=\"on\" " + (typeof i == "string" && i ? "usemap=\"#" + i + "\"" : "") + " galleryimg=\"no\" />")
        } else {
            a.push("<img id=\"" + b + "_img\" src=\"" + CTLIMG_RESOURCE[0].url + "\" style=\"position:absolute;left:" + g + "px;top:" + h + "px;width:" + CTLIMG_RESOURCE[0].w + "px;height:" + CTLIMG_RESOURCE[0].h + "px;border:0px;cursor:pointer;\" onmousedown=\"return false;\" unselectable=\"on\" " + (typeof i == "string" && i ? "usemap=\"#" + i + "\"" : "") + " galleryimg=\"no\"/>")
        }
        a.push("</div>")
    };
    var m = function (a, b, c, d, e, f, g, h, i, j) {
        a.push("<div id=\"" + b + "\" style=\"position:absolute;left:" + d + "px;top:" + e + "px;width:" + f + "px;height:" + g + "px;overflow:hidden;\" onmousedown=\"return false;\">");
        a.push("<div id=\"" + b + "_text\" style=\"position:absolute;padding-left:16px;padding-top:1px;color:white;z-index:1;width:" + (f$uP7 || !px ? 35 : 45) + "px;text-align:center;font-size:12px;cursor:pointer;background-image:url('" + sX + "');\" _ml=\"" + j + "\">" + c + "</div>");
        if (_sqi) {
            a.push("<img src=\"" + sX + "\" style=\"position:absolute;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=" + CTLIMG_RESOURCE[0].url + ",sizingMethod=scale);width:" + CTLIMG_RESOURCE[0].w + "px;height:" + CTLIMG_RESOURCE[0].h + "px;left:" + h + "px;top:" + i + "px;border:0px;cursor:pointer;\"  onmousedown=\"return false;\" unselectable=\"on\" galleryimg=\"no\" />")
        } else {
            a.push("<img src=\"" + CTLIMG_RESOURCE[0].url + "\" style=\"position:absolute;left:" + h + "px;top:" + i + "px;width:" + CTLIMG_RESOURCE[0].w + "px;height:" + CTLIMG_RESOURCE[0].h + "px;border:0px;cursor:pointer;\" onmousedown=\"return false;\" unselectable=\"on\" galleryimg=\"no\" />")
        }
        a.push("</div>")
    };
    var n = function () {
        var a = MAX_ZOOM_LEVEL - MIN_ZOOM_LEVEL + 1;
        return a * gb.p91_ + a * gb.xDC7 + gb.p91_ - 1
    };
    var o = function (a) {
        a = MAX_ZOOM_LEVEL - a;
        return a * gb.p91_ + a * gb.xDC7 + q().max.y + 3
    };
    var p = function () {
        var r = {
            min: {
                x: 0,
                y: 0
            },
            max: {
                x: 0,
                y: 0
            },
            width: 0,
            height: 0
        };
        if (O) {
            r.width = $9tU(O.style.width, 0);
            r.height = $9tU(O.style.height, 0);
            r.min.x = $9tU(O.style.left, 0);
            r.min.y = $9tU(O.style.top, 0);
            r.max.x = r.min.x + r.width;
            r.max.y = r.min.y + r.height
        }
        return r
    };
    var q = function () {
        var r = {
            min: {
                x: 0,
                y: 0
            },
            max: {
                x: 0,
                y: 0
            },
            width: 0,
            height: 0
        };
        if (P) {
            r.width = $9tU(P.style.width, 0);
            r.height = $9tU(P.style.height, 0);
            r.min.x = $9tU(P.style.left, 0);
            r.min.y = $9tU(P.style.top, 0);
            r.max.x = r.min.x + r.width;
            r.max.y = r.min.y + r.height
        }
        return r
    };
    var s = function () {
        var r = {
            min: {
                x: 0,
                y: 0
            },
            max: {
                x: 0,
                y: 0
            },
            width: 0,
            height: 0
        };
        if (R) {
            r.width = $9tU(R.style.width, 0);
            r.height = $9tU(R.style.height, 0);
            r.min.x = $9tU(R.style.left, 0);
            r.min.y = $9tU(R.style.top, 0);
            r.max.x = r.min.x + r.width;
            r.max.y = r.min.y + r.height
        }
        return r
    };
    var t = function () {
        var r = {
            min: {
                x: 0,
                y: 0
            },
            max: {
                x: 0,
                y: 0
            },
            width: 0,
            height: 0
        };
        if (Q) {
            r.width = $9tU(Q.style.width, 0);
            r.height = $9tU(Q.style.height, 0);
            r.min.x = $9tU(Q.style.left, 0);
            r.min.y = $9tU(Q.style.top, 0);
            r.max.x = r.min.x + r.width;
            r.max.y = r.min.y + r.height
        }
        return r
    };
    var u = function () {
        var r = {
            min: {
                x: 0,
                y: 0
            },
            max: {
                x: 0,
                y: 0
            },
            width: 0,
            height: 0
        };
        if (T) {
            r.width = $9tU(T.style.width, 0);
            r.height = $9tU(T.style.height, 0);
            r.min.x = $9tU(T.style.left, 0) + bc;
            r.min.y = $9tU(T.style.top, 0) + bd;
            r.max.x = r.min.x + r.width;
            r.max.y = r.min.y + r.height
        }
        return r
    };
    var w = function () {
        var a = s();
        ba.min = a.min.y + gb.p91_;
        ba.max = a.max.y - 1 - gb.p91_;
        bb.min = a.min.x;
        bb.max = a.max.x - 3
    };
    var x = function () {
        with(this.options.location) {
            var a = this.getRect();
            var b = s();
            if (type == Maplet.LEFT_TOP) {
                bc = marginx;
                bd = marginy;
                be = b.max.x + 5
            } else {
                if (type == Maplet.LEFT_BOTTOM) {
                    bc = marginx;
                    bd = this.maplet.height - marginy - a.height;
                    be = b.max.x + 5
                } else if (type == Maplet.RIGHT_TOP) {
                    bc = this.maplet.width - marginx - a.width;
                    bd = marginy;
                    be = b.min.x - gb.x4E - 5
                } else if (type == Maplet.RIGHT_BOTTOM) {
                    bc = this.maplet.width - marginx - a.width;
                    bd = this.maplet.height - marginy - a.height;
                    be = b.min.x - gb.x4E - 5
                }
            }
        }
        bf = s().min.y - 2
    };
    this.setLocation = function (a, b) {
        a = a || {};
        if (typeof a.type != "number" && !(a.type == Maplet.LEFT_TOP || a.type == Maplet.LEFT_BOTTOM || a.type == Maplet.RIGHT_TOP || a.type == Maplet.LEFT_BOTTOM)) a.type = Maplet.LEFT_TOP;
        if (typeof a.fr6FJ != "number") a.marginx = 10;
        if (typeof a.c9175 != "number") a.marginy = 10;
        this.options.location = a;
        if (typeof b != "boolean") b = true;
        if (b) M.apply(this)
    };
    this.setView = function (a, b) {
        a = a || {};
        if (typeof a.pan != "boolean") a.pan = true;
        if (typeof a.zoomout != "boolean") a.zoomout = true;
        if (typeof a.ruler != "boolean") a.ruler = true;
        if (typeof a.zoomin != "boolean") a.zoomin = true;
        this.options.view = a;
        if (typeof b != "boolean") b = true;
        if (b) L.apply(this, [b])
    };
    var z = function (e) {
        PI7(e);
        if (!Z && (e.target == S || e.target == S.firstChild)) {
            w.apply(this);
            Z = true;
            this.maplet.k93("move", S)
        } else {
            Z = false
        }
        return Z
    };
    var A = function (e) {
        if (Z) {
            var a = e.clientY - this.maplet.offsetY - this.maplet.top - bd;
            if (a >= ba.min && a <= ba.max) {
                S.style.top = (a - 3) + "px";
                if (ZOOM_TRANSITION && (!ContentInfo || !ContentInfo.isVisible())) {
                    var h = (this.isVisible(O) ? 0 : 49 + 10) + (this.isVisible(P) ? 0 : 24);
                    var b = MAX_ZOOM_LEVEL - ((a + h) / (gb.p91_ + gb.xDC7) - 10);
                    this.maplet.AN(b)
                }
                this.maplet.k93("move", document.body)
            }
            if (!bh && px) {
                document.body.setCapture();
                bh = true
            }
        }
        return Z
    };
    var B = function (e) {
        PI7(e, !BLCi);
        if (Z) {
            var y = e.clientY - this.maplet.offsetY - this.maplet.top - bd;
            y = y < ba.min ? ba.min : y;
            y = y > ba.max ? ba.max : y;
            var h = (this.isVisible(O) ? 0 : 49 + 10) + (this.isVisible(P) ? 0 : 24);
            var a = Math.ceil(MAX_ZOOM_LEVEL - ((y + h) / (gb.p91_ + gb.xDC7) - 10));
            if (this.maplet.AG == a) {
                this.maplet.L4uq1(true);
                this.maplet.lA.setVisible(true);
                if (this.maplet.a7Vg) this.maplet.a7Vg.setVisible(true);
                this.update(a)
            } else {
                this.maplet.setZoomLevel(parseInt(a))
            }
            Z = false;
            if (bh) {
                document.body.releaseCapture();
                bh = false;
                bg = true;
                getTimeout(this, K, 700)
            }
            return true
        }
        this.maplet.k93("default", document.body);
        this.maplet.k93("default", S);
        return false
    };
    var C = function (e) {
        PI7(e);
        w.apply(this);
        var e = e || window.event;
        var y = e.clientY - bd - this.maplet.offsetY - this.maplet.top;
        y = y < ba.min ? ba.min : y;
        y = y > ba.max ? ba.max : y;
        var h = (this.isVisible(O) ? 0 : 49 + 10) + (this.isVisible(P) ? 0 : 24);
        var a = Math.ceil(MAX_ZOOM_LEVEL - ((y + h) / (gb.p91_ + gb.xDC7) - 10));
        if (this.maplet.AG != a) this.maplet.setZoomLevel(parseInt(a))
    };
    var D = function (e) {
        PI7(e)
    };
    var E = function (e) {
        this.maplet.a6(e);
        B.apply(this, [e]);
        if (this.maplet.sS != ts.u4XWR && this.maplet.sS != ts.tz && this.maplet.sS != ts.tA && this.maplet.sS != ts.tv) PI7(e)
    };
    var F = function (e) {
        PI7(e);
        if (!this.isVisible(R)) return;
        bg = false;
        if (!this.isVisible(T)) {
            this.Ej9(true)
        }
    };
    var G = function (e) {
        PI7(e);
        bg = true;
        getTimeout(this, K, 700)
    };
    var H = function (e) {
        PI7(e);
        var a = e.target.getAttribute("_ml");
        if (a) {
            this.maplet.setZoomLevel($9tU(a))
        }
    };
    var I = function (e) {
        this.maplet.a6(e);
        this.maplet.overview.l1(e);
        B.apply(this, [e]);
        PI7(e)
    };
    var J = function (e) {
        PI7(e)
    };
    var K = function () {
        if (!bg) return;
        var a = false;
        if (this.isVisible(T)) {
            var r = u();
            var b = {
                x: this.maplet.moveX,
                y: this.maplet.moveY
            };
            var c = {
                min: {
                    x: r.min.x,
                    y: r.min.y
                },
                max: {
                    x: r.max.x,
                    y: r.max.y
                }
            };
            if (_isInsideRect(b, c)) a = true
        }
        if (Z) a = true;
        if (a) {
            getTimeout(this, K, 700);
            return
        }
        this.Ej9(false)
    };
    this.update = function (a) {
        if (this.options && this.options.location) {
            x.apply(this);
            this.dom.style.left = bc + "px";
            this.dom.style.top = bd + "px"
        }
        if (S && R && this.isVisible(S) && this.isVisible(R)) {
            with(S.style) {
                left = $9tU(R.style.left, 0) + 2 + "px";
                top = o(a) + "px"
            }
        }
    };
    this.showCtlPan = function (a, b, c) {
        if (!O) return;
        if (typeof a != "boolean") a = true;
        if (this.isVisible(O) != a) {
            if (a) {
                O.style.height = "49px";
                P.style.left = "14px";
                R.style.left = "14px";
                Q.style.left = "14px"
            } else {
                O.style.height = "0px";
                P.style.left = "0px";
                R.style.left = "0px";
                Q.style.left = "0px"
            }
            N.apply(this, [O, a]);
            if (typeof c != "boolean") c = true;
            if (c) this.options.view.pan = a;
            if (typeof b != "boolean") b = true;
            if (b) M.apply(this)
        }
    };
    this.showZOButton = function (a, b, c) {
        if (!P) return;
        if (typeof a != "boolean") a = true;
        if (this.isVisible(P) != a) {
            if (a) {
                if (!this.isVisible(R)) {
                    P.style.height = "23px"
                } else {
                    P.style.height = "24px"
                }
            } else {
                P.style.height = "0px"
            }
            N.apply(this, [P, a]);
            if (typeof c != "boolean") c = true;
            if (c) this.options.view.zoomout = a;
            if (typeof b != "boolean") b = true;
            if (b) M.apply(this)
        }
    };
    this.showCtlRuler = function (a, b, c) {
        if (!R) return;
        if (typeof a != "boolean") a = true;
        if (this.isVisible(R) != a) {
            if (a) {
                R.style.height = n() + "px";
                P.style.height = ($9tU(P.style.height, 0) + 1) + "px";
                Q.style.height = ($9tU(Q.style.height, 0) + 1) + "px";
                Q.firstChild.style.top = ($9tU(Q.firstChild.style.top, 0) + 2) + "px"
            } else {
                R.style.height = "0px";
                P.style.height = Math.max(($9tU(P.style.height, 0) - 1), 0) + "px";
                Q.style.height = Math.max(($9tU(Q.style.height, 0) - 1), 0) + "px";
                Q.firstChild.style.top = ($9tU(Q.firstChild.style.top, 0) - 2) + "px"
            }
            N.apply(this, [S, a]);
            N.apply(this, [R, a]);
            if (typeof c != "boolean") c = true;
            if (c) this.options.view.ruler = a;
            if (typeof b != "boolean") b = true;
            if (b) M.apply(this)
        }
    };
    this.showZIButton = function (a, b, c) {
        if (!Q) return;
        if (typeof a != "boolean") a = true;
        if (this.isVisible(Q) != a) {
            if (a) Q.style.height = "24px";
            else Q.style.height = "0px";
            N.apply(this, [Q, a]);
            if (typeof c != "boolean") c = true;
            if (c) this.options.view.zoomin = a;
            if (typeof b != "boolean") b = true;
            if (b) M.apply(this)
        }
    };
    this.Ej9 = function (a) {
        if (!T) return;
        if (typeof a != "boolean") a = true;
        if (this.isVisible(T) != a) {
            if (a) {
                T.style.left = be + "px";
                T.style.top = bf + "px";
                if (this.options.location.type == Maplet.LEFT_TOP || this.options.location.type == Maplet.LEFT_BOTTOM) {
                    U.childNodes[1].style.top = V.childNodes[1].style.top = W.childNodes[1].style.top = X.childNodes[1].style.top = "-65px";
                    U.childNodes[0].style.paddingLeft = V.childNodes[0].style.paddingLeft = W.childNodes[0].style.paddingLeft = X.childNodes[0].style.paddingLeft = "16px";
                    U.childNodes[0].style.paddingRight = V.childNodes[0].style.paddingRight = W.childNodes[0].style.paddingRight = X.childNodes[0].style.paddingRight = "0px"
                } else {
                    U.childNodes[1].style.top = V.childNodes[1].style.top = W.childNodes[1].style.top = X.childNodes[1].style.top = "-84px";
                    U.childNodes[0].style.paddingLeft = V.childNodes[0].style.paddingLeft = W.childNodes[0].style.paddingLeft = X.childNodes[0].style.paddingLeft = "0px";
                    U.childNodes[0].style.paddingRight = V.childNodes[0].style.paddingRight = W.childNodes[0].style.paddingRight = X.childNodes[0].style.paddingRight = "16px"
                }
                N.apply(this, [X, MIN_ZOOM_LEVEL <= 0]);
                N.apply(this, [W, (4 >= MIN_ZOOM_LEVEL && 4 <= MAX_ZOOM_LEVEL)]);
                N.apply(this, [V, (8 >= MIN_ZOOM_LEVEL && 8 <= MAX_ZOOM_LEVEL)]);
                N.apply(this, [U, MAX_ZOOM_LEVEL >= 13]);
                if (!this.isVisible(U)) {
                    var c = 13 - MAX_ZOOM_LEVEL;
                    T.style.top = bf - (c * gb.p91_ + c * gb.xDC7) + "px"
                } else if (MAX_ZOOM_LEVEL > 13) {
                    var c = MAX_ZOOM_LEVEL - 13;
                    T.style.top = bf + (c * gb.p91_ + c * gb.xDC7) + "px"
                }
            }
            N.apply(this, [T, a])
        }
    };
    var L = function (a) {
        if (typeof a != "boolean") a = true;
        with(this.options.view) {
            this.showCtlPan(pan, false);
            this.showZOButton(zoomout, false);
            this.showCtlRuler(ruler, false);
            this.showZIButton(zoomin, false)
        }
        if (a) M.apply(this)
    };
    var M = function () {
        this.Ej9(false);
        P.style.top = (p().max.y + (this.isVisible(O) ? 5 : -5)) + "px";
        R.style.top = q().max.y + "px";
        Q.style.top = s().max.y + "px";
        this.maplet._PaX();
        this.maplet.p7S();
        this.update(this.maplet.AG)
    };
    this.hide = function () {
        N.apply(this, [this.dom, false])
    };
    this.show = function () {
        N.apply(this, [this.dom, true])
    };
    var N = function (a, b) {
        if (!this.dom || typeof a != "object" || !a) return;
        if (a.style.display != (b ? "" : "none")) a.style.display = b ? "" : "none"
    };
    this.isVisible = function (a) {
        if (typeof a != "object" || !a) a = this.dom;
        if (!a) return false;
        return a.style.display == ""
    };
    this.g1 = function () {
        MEvent.removeBuiltInListener(S, "mousedown", Y["_ctlSlider_mousedown"]);
        MEvent.removeBuiltInListener(document, "mousemove", Y["document_mousemove"]);
        MEvent.removeBuiltInListener(document, "mouseup", Y["document_mouseup"]);
        MEvent.removeBuiltInListener(R, "click", Y["_ctlRuler_click"]);
        MEvent.removeBuiltInListener(R, "mouseover", Y["_ctlRuler_mouseover"]);
        MEvent.removeBuiltInListener(R, "mouseout", Y["_ctlRuler_mouseout"]);
        MEvent.removeBuiltInListener(R, "mousedown", Y["_ctlRuler_mouseout"]);
        MEvent.removeBuiltInListener(R, "mouseup", Y["_ctlRuler_mouseout"]);
        MEvent.removeBuiltInListener(aa("_zo_map"), "mouseover", Y["_zo_map_mouseover"]);
        MEvent.removeBuiltInListener(aa("_zo_map"), "mouseout", Y["_zo_map_mouseout"]);
        MEvent.removeBuiltInListener(aa("_zi_map"), "mouseover", Y["_zi_map_mouseover"]);
        MEvent.removeBuiltInListener(aa("_zi_map"), "mouseout", Y["_zi_map_mouseout"]);
        MEvent.removeBuiltInListener(S, "mouseover", Y["_ctlSlider_mouseover"]);
        MEvent.removeBuiltInListener(S, "mouseout", Y["_ctlSlider_mouseout"]);
        MEvent.removeBuiltInListener(U, "click", Y["_ltStreet_click"]);
        MEvent.removeBuiltInListener(V, "click", Y["_ltCity_click"]);
        MEvent.removeBuiltInListener(W, "click", Y["_ltProvince_click"]);
        MEvent.removeBuiltInListener(X, "click", Y["_ltCountry_click"]);
        MEvent.removeBuiltInListener(U, "mouseup", Y["_ltStreet_mouseup"]);
        MEvent.removeBuiltInListener(V, "mouseup", Y["_ltCity_mouseup"]);
        MEvent.removeBuiltInListener(W, "mouseup", Y["_ltProvince_mouseup"]);
        MEvent.removeBuiltInListener(X, "mouseup", Y["_ltCountry_mouseup"]);
        MEvent.removeBuiltInListener(U, "mousedown", Y["_ltStreet_mousedown"]);
        MEvent.removeBuiltInListener(V, "mousedown", Y["_ltCity_mousedown"]);
        MEvent.removeBuiltInListener(W, "mousedown", Y["_ltProvince_mousedown"]);
        MEvent.removeBuiltInListener(X, "mousedown", Y["_ltCountry_mousedown"]);
        MEvent.removeBuiltInListener(aa("_zo_map"), "mouseup", Y["_zo_map_mouseup"]);
        MEvent.removeBuiltInListener(aa("_zi_map"), "mouseup", Y["_zi_map_mouseup"]);
        MEvent.removeBuiltInListener(aa("_fb_n_ctrl_imap"), "mouseup", Y["_fb_n_ctrl_imap_mouseup"]);
        MEvent.removeBuiltInListener(aa("_fb_s_ctrl_imap"), "mouseup", Y["_fb_s_ctrl_imap_mouseup"]);
        MEvent.removeBuiltInListener(aa("_fb_w_ctrl_imap"), "mouseup", Y["_fb_w_ctrl_imap_mouseup"]);
        MEvent.removeBuiltInListener(aa("_fb_e_ctrl_imap"), "mouseup", Y["_fb_e_ctrl_imap_mouseup"]);
        MEvent.removeBuiltInListener(aa("_fb_m_ctrl_imap"), "mouseup", Y["_fb_m_ctrl_imap_mouseup"]);
        if (this.dom) this.dom.finalize();
        if (aa("_pan_map")) aa("_pan_map").q9 = null;
        if (aa("_zo_map")) aa("_zo_map").q9 = null;
        if (aa("_zi_map")) aa("_zi_map").q9 = null;
        xInoP(this)
    };
    this.getRect = function () {
        var r = {
            min: {
                x: null,
                y: null
            },
            max: {
                x: null,
                y: null
            },
            fNi3A: {
                x: null,
                y: null
            },
            _I42: {
                x: null,
                y: null
            },
            width: null,
            height: null
        };
        if (this.isVisible(this.dom)) {
            if (this.isVisible(O)) {
                r = p();
                r.fNi3A = {
                    x: null,
                    y: null
                };
                r._I42 = {
                    x: null,
                    y: null
                }
            }
            if (this.isVisible(P)) {
                var v = q();
                if (r.min.x == null) r.min.x = v.min.x;
                if (r.min.y == null) r.min.y = v.min.y;
                if (r.max.x == null) r.max.x = v.max.x;
                r.max.y = v.max.y
            }
            if (this.isVisible(R)) {
                var v = s();
                if (r.min.x == null) r.min.x = v.min.x;
                if (r.min.y == null) r.min.y = v.min.y;
                if (r.max.x == null) r.max.x = v.max.x;
                r.max.y = v.max.y
            }
            if (this.isVisible(Q)) {
                var v = t();
                if (r.min.x == null) r.min.x = v.min.x;
                if (r.min.y == null) r.min.y = v.min.y;
                if (r.max.x == null) r.max.x = v.max.x;
                r.max.y = v.max.y
            }
            r.fNi3A.x = r.min.x + bc;
            r.fNi3A.y = r.min.x + bd;
            r._I42.x = r.max.x + bc;
            r._I42.y = r.max.y + bd;
            r.width = r.max.x - r.min.x;
            r.height = r.max.y - r.min.y
        }
        return r
    };
    var O = null;
    var P = null;
    var Q = null;
    var R = null;
    var S = null;
    var T = null;
    var U = null;
    var V = null;
    var W = null;
    var X = null;
    var Y = [];
    var Z = false;
    var ba = {
        min: 0,
        max: 0
    };
    var bb = {
        min: 0,
        max: 0
    };
    var bc = -Number.MAX_VALUE;
    var bd = -Number.MAX_VALUE;
    var be = -Number.MAX_VALUE;
    var bf = -Number.MAX_VALUE;
    var bg = true;
    var bh = false;
    this.maplet = null;
    this.dom = null;
    this.options = k || {};
    with(this.options) {
        this.setLocation(typeof location != "object" ? undefined : location, false);
        this.setView(typeof view != "object" ? undefined : view, false)
    };
    this.controlCanvas = {};
    this.controlCanvas.div = {};
    this.controlCanvas.div.update = function () {};
    this.onmousedown = z;
    this.onmousemove = A;
    this.onmouseup = B;
    this.onmouseout = function () {}
};
gb.p91_ = 6;
gb.xDC7 = 2;
gb.x4E = 52;
gb.a1o89 = 18;
gb.h2GU = ["\u8857\u9053", "\u57ce\u5e02", "\u7701", "\u56fd\u5bb6"];

function ny(e) {
    if (!e) {
        e = window.event
    }
    if (e && !e.target) {
        e.target = e.srcElement
    }
    if (e && typeof e.button == "undefined") {
        e.button = e.which
    }
    return e
};

function getTimeout(a, b, c) {
    return window.setTimeout(function () {
        b.apply(a)
    }, c)
};

function nB(a, b, c) {
    return window.setInterval(function () {
        b.apply(a)
    }, c)
};
var MEvent = {
    nD: function (a) {
        return "_e__" + a
    },
    addListener: function (a, b, c) {
        var d = this.nD(b);
        if (a[d]) {
            var e = true;
            for (var i = 0; i < a[d].length; i++) {
                var h = a[d][i];
                if (h == c) {
                    e = false;
                    break
                }
            }
            if (e) a[d].push(c)
        } else {
            a[d] = [c]
        }
        return {
            qg: a,
            propertyName: d,
            q0: c
        }
    },
    removeListener: function (a) {
        var b = a.qg[a.propertyName];
        for (var c = 0; c < b.length; c++) {
            if (b[c] == a.q0) {
                b.splice(c, 1);
                return
            }
        }
    },
    contains: function (a, b) {
        var c = this.nD(b);
        if (typeof a[c] != "undefined") return a[c].length;
        else
        return 0
    },
    clearListeners: function (a, b) {
        var c = this.nD(b);
        a[c] = null
    },
    trigger: function (a, b) {
        var c = this.nD(b);
        var d = a[c];
        if (d && d.length > 0) {
            var f = [];
            for (var g = 2; g < arguments.length; g++) {
                f.push(arguments[g])
            }
            for (var i = 0; i < d.length; i++) {
                var h = d[i];
                if (h) {
                    try {
                        h.apply(a, f)
                    } catch (e) {}
                }
            }
        }
    },
    addBuiltInListener: function (a, b, c) {
        if (a.addEventListener) {
            a.addEventListener(b, c, false)
        } else if (a.attachEvent) {
            a.attachEvent("on" + b, c)
        } else {
            a["on" + b] = c
        }
        return c
    },
    removeBuiltInListener: function (a, b, c) {
        if (a.removeEventListener) {
            a.removeEventListener(b, c, false)
        } else if (a.detachEvent) {
            a.detachEvent("on" + b, c)
        } else {
            a["on" + b] = null
        }
    },
    bind: function (a, b, c, d) {
        return this.addListener(a, b, function () {
            d.apply(c, arguments)
        })
    },
    bindDom: function (a, b, c, d) {
        var e = this.gm(c, d);
        return this.addBuiltInListener(a, b, e)
    },
    gm: function (a, b) {
        return function (e) {
            e = ny(e);
            b.call(a, e)
        }
    },
    callback: function (a, b) {
        return function () {
            return b.apply(a, arguments)
        }
    }
};
var MIcon = function (f, g, h, i, j, k) {
    this.ao = new Array();
    this.$5577 = 1;
    this.div = document.createElement("div");
    this.div.unselectable = "on";
    this.div.style.zIndex = this.$5577;
    this.div.style.position = "absolute";
    g = (typeof g == "undefined") ? 16 : g;
    h = (typeof h == "undefined") ? 16 : h;
    this.img = document.createElement("div");
    this.img.unselectable = "on";
    this.img.style.MozUserSelect = "none";
    this.img.style.zIndex = this.$5577;
    this.img.style.position = "absolute";
    this.img.style.top = "0px";
    this.img.style.left = "0px";
    this.imgUrl = f;
    this.left = 0;
    this.top = 0;
    this.WX7H = this.left;
    this.m2rT2 = this.top;
    this.wz = function (a) {
        this.div.id = "OverlayBg" + a;
        this.img.id = a
    };
    this.initialize = function (a) {
        if (px) this.img.ondragstart = function () {
            return false
        };
        this.sW = a;
        $6R(this.img.firstChild, "oid", this.sW.id);
        this.ao["mouseover"] = MEvent.bindDom(this.img.firstChild, "mouseover", this.sW, this.sW.hiliteIcon);
        this.ao["mouseout"] = MEvent.bindDom(this.img.firstChild, "mouseout", this.sW, this.sW.v4)
    };
    this.setContextMenu = function (a) {};
    this.getImgUrl = function () {
        var a = "";
        var b = this.img;
        if (b.innerHTML.indexOf(Maplet.MICON_IMGSRC_FLAG) != -1) {
            var c = new RegExp(Maplet.MICON_IMGSRC_FLAG + "=\"?([^\"\t ]*)", "gi");
            var d = c.exec(b.innerHTML);
            if (d != null) a = d[1]
        } else if (b.firstChild && b.firstChild.tagName.toUpperCase() == "IMG") {
            a = b.firstChild.src
        } else {
            a = this.imgUrl
        }
        return a
    };
    this.enableDragMap = function (a) {
        if (!this.img || !this.img.firstChild) return;
        if (a) $6R(this.img.firstChild, G9kd3, "true");
        else l4q2x(this.img.firstChild, G9kd3)
    };
    this.updateImage = function (a, b, c) {
        if ((this.img.firstChild && this.imgUrl == a) || !a) return;
        this.imgUrl = a;
        if (typeof this.imgUrl == "string") {
            if (this.imgUrl.indexOf("<") >= 0) {
                this.img.innerHTML = this.imgUrl
            } else {
                this.img.innerHTML = "<img src=" + this.imgUrl + " width=" + (typeof b == "undefined" ? g : b) + " height=" + (typeof b == "undefined" ? h : c) + ">";
                if (this.sW) {
                    if (this.sW.label && typeof b != "undefined") {
                        this.sW.label.xoffset += b - g;
                        g = b
                    }
                    if (this.sW.maplet) {
                        this.sW.initialize(this.sW.maplet)
                    }
                }
            }
        } else {
            this.img.innerHTML = "";
            this.img.appendChild(this.imgUrl)
        }
        this.img.firstChild.onmousedown = function (e) {
            return false
        };
        $6R(this.img.firstChild, a0oX, "marker");
        this.enableDragMap(this.sW ? !this.sW.bEditable : true)
    };
    this.updateImage(f);
    this.width = (typeof g == "undefined") ? parseInt(this.img.width) : parseInt(g);
    this.height = (typeof h == "undefined") ? parseInt(this.img.height) : parseInt(h);
    this.div.style.width = this.width + "px";
    this.div.style.height = this.height + "px";
    this.ks1H2 = (typeof k == "undefined") ? f : k;
    this.anchorX = (typeof i == "undefined") ? this.width / 2 : parseInt(i);
    this.anchorY = (typeof j == "undefined") ? this.height / 2 : parseInt(j);
    this.div.appendChild(this.img);
    this.update = function (a, b, c) {
        var d = parseInt(b) - parseInt(this.anchorX);
        var e = parseInt(c) - parseInt(this.anchorY);
        if (this.sW.autoHide && !this.sW.ls && (d > a.width || d < -this.width || e > a.height || e < -this.height)) {
            if (this.div.parentNode) {
                this.div.style.top = e + "px";
                this.div.style.left = d + "px";
                this.div.parentNode.removeChild(this.div);
                if (this.sW.label) this.sW.label.remove();
                this.fu = false
            }
        } else {
            if (this.div.parentNode != a.lA.div && !this.sW.ls) {
                a.lA.appendChild(this.div);
                this.div.style.width = this.width + "px";
                this.div.style.height = this.height + "px";
                this.img.width = this.width + "px";
                this.img.height = this.height + "px";
                this.fu = true
            }
            this.div.style.top = e + "px";
            this.div.style.left = d + "px";
            this.WX7H = this.left;
            this.m2rT2 = this.top;
            this.left = d;
            this.top = e;
            b = d;
            c = e;
            if (this.sW.label) this.sW.label.update(this.sW.maplet, b, c)
        }
    };
    this.isVisible = function () {
        return (this.fu)
    };
    this.zq = function () {
        return (this.img.firstChild.src) + "," + this.width + "," + this.height
    };
    this.hilite = function () {
        if (this.sW) {
            this.sW.hiliteIcon({
                target: this.img
            })
        }
    };
    this.finalize = function () {
        this.remove(true)
    };
    this.remove = function (a) {
        if (typeof a != "boolean") a = false;
        if (this.img.firstChild) {
            if (px) this.img.ondragstart = null;
            this.img.firstChild.onmousedown = null;
            for (var b in this.ao) {
                MEvent.removeBuiltInListener(this.img.firstChild, b, this.ao[b]);
                this.ao[b] = null;
                if (a) delete this.ao[b]
            }
        }
        if (a) this.ao = null;
        if (this.div) {
            if (!a) {
                if (this.div.parentNode) this.div.parentNode.removeChild(this.div)
            } else {
                _removeNode(this.div);
                this.div = null
            }
        }
        if (a) this.sW = null
    };
    this.setZIndex = function (a) {
        if (this.div && this.div.parentNode && a != this.div.style.zIndex) {
            this.$5577 = this.div.style.zIndex;
            this.div.style.zIndex = a
        }
    };
    this._b68 = function () {
        if (!this.div) return;
        if (this.$5577 != this.div.style.zIndex) {
            this.setZIndex(this.$5577)
        }
    };
    this.getRect = function () {
        var r = {
            min: {
                x: this.div.offsetLeft,
                y: this.div.offsetTop
            },
            max: {
                x: 0,
                y: 0
            }
        };
        r.max.x = r.min.x + this.div.offsetWidth;
        r.max.y = r.min.y + this.div.offsetHeight;
        return r
    };
    this.toString = function () {
        return 'com.mapbar.maplet.MIcon'
    }
};
var MMarker = function (k, l, m, n, o) {
    this.id = new Date().getTime() + "" + parseInt(Math.random() * 10000);
    this.pt = k;
    this.icon = (typeof l == "undefined") ? null : l;
    if (this.icon && this.icon.wz) {
        this.icon.wz(this.id)
    }
    this.shadow = typeof o == "undefined" ? null : o;
    if (this.shadow && this.shadow.wz) this.shadow.wz(this.id);
    this.label = (typeof n == "undefined") ? null : n;
    if (this.label && this.label.wz) {
        this.label.wz(this.id)
    }
    this.info = null;
    if (typeof m != "undefined" && m) {
        this.info = m;
        this.info.setOverlay(this)
    }
    this.lw = 0;
    this.ls = false;
    this.bEditable = false;
    this.rotation = 0;
    this.ao = new Array();
    this.contextmenu = null;
    this.autoHide = true;
    this.dragAnimation = true;
    this.O69c5 = false;
    this.creator = MLayer.USER;
    this.tx4 = false;
    this.setContextMenu = function (a) {
        this.contextmenu = a;
        if (a && typeof this.maplet == "object" && this.maplet) {
            if (!this.contextmenu.maplet) this.contextmenu.initialize(this.maplet);
            if (!this.contextmenu.containsOverlay(this)) this.contextmenu.addOverlay(this)
        } else if (!a) {
            this.removeContextMenu()
        }
    };
    this.getContextMenu = function (a) {
        return this.contextmenu
    };
    this.wz = function (a) {
        this.id = a;
        if (this.icon && this.icon.wz) {
            this.icon.wz(a)
        }
        if (this.shadow && this.shadow.wz) this.shadow.wz(a)
    };
    this.setEditable = function (a) {
        this.bEditable = (typeof a == "undefined") ? false : a;
        if (REFRESH_MK_INDEX) this.refreshZIndex();
        if (this.icon) this.icon.enableDragMap(!this.bEditable)
    };
    this.refreshZIndex = function (a) {
        if (!this.icon) return;
        if (typeof a != "boolean") a = true;
        if (this.maplet) {
            var c = this.maplet.getMarkerPolygons(this);
            if (c.length > 0) {
                var b = false;
                for (var i = 0; i < c.length; i++) {
                    if (c[i].bEditable) {
                        b = true;
                        break
                    }
                }
                if (this.bEditable || !b) {
                    if (this.icon.div.style.zIndex < 0) this._b68()
                } else {
                    if (this.icon.div.style.zIndex >= 0) this.setZIndex(-1)
                }
                if (a) {
                    for (var i = 0; i < c.length; i++) {
                        c[i].tvq(this)
                    }
                }
            }
        }
    };
    this.initialize = function (a) {
        this._4ye9(true);
        this.maplet = a;
        this.dragAnimation = this.maplet.markerDragAnimation && this.dragAnimation;
        if (typeof this.contextmenu == "object" && this.contextmenu) {
            if (!this.contextmenu.maplet) this.contextmenu.initialize(this.maplet);
            if (!this.contextmenu.containsOverlay(this)) this.contextmenu.addOverlay(this)
        }
        this.ao["mousedown"] = MEvent.bindDom(this.maplet.map, "mousedown", this, this.w0);
        if (this.icon != null) {
            this.icon.initialize(this)
        }
        if (this.label != null) {
            this.label.initialize(this)
        }
        if (this.shadow != null) {
            this.shadow.initialize(this)
        } {
            if (this.info != null) {
                this.ao["info_" + this.info.yd] = MEvent.bindDom(this.maplet.map, this.info.yd, this, this.openInfoWindow)
            } else {
                this.ao["click"] = MEvent.bindDom(this.maplet.map, "click", this, this.openInfoWindow)
            }
        }
        if (typeof this.maplet.lA != "undefined") {
            this.paint()
        }
        if (REFRESH_MK_INDEX) this.refreshZIndex()
    };
    this.toString = function () {
        return 'com.mapbar.maplet.MMarker'
    };
    this.paint = function () {
        if (!this.maplet) return;
        if (!this.pt.maplet) this.pt.initialize(this.maplet);
        if (this.maplet.X7jjM) {
            if (this.maplet.$2J != this.pt.$2J) {
                this.pt.mapX += this.maplet.B824;
                this.pt.mapY += this.maplet.DHPs;
                this.pt.$2J = this.maplet.$2J
            }
        } else {
            this.pt.recalcScreenCoords()
        }
        if (this.icon) {
            if (!this.icon.sW) this.icon.initialize(this);
            this.icon.update(this.maplet, this.pt.mapX, this.pt.mapY)
        }
        if (this.shadow) {
            if (!this.shadow.sW) this.shadow.initialize(this);
            this.shadow.update(this.maplet, this.pt.mapX, this.pt.mapY)
        }
    };
    this.zq = function () {
        return (this.icon.isVisible()) ? "1" + "," + this.pt.getPid() + "," + this.icon.zq() : ""
    };
    this.finalize = function () {
        this.remove(true)
    };
    this.remove = function (a) {
        if (typeof a != "boolean") a = false;
        if (this.maplet && this.maplet.markerDragAnimation) this.maplet.U287(false);
        if (a) this.removeContextMenu();
        if (this.icon) {
            this.icon.remove(a)
        }
        if (this.label) {
            this.label.remove(a)
        }
        if (this.shadow) {
            this.shadow.remove(a)
        }
        this._4ye9(a);
        if (this.maplet) {
            if (this.maplet.u5[this.id]) {
                this.maplet.u5[this.id] = null;
                delete this.maplet.u5[this.id]
            }
        }
        if (a) this.ao = null;
        this.maplet = null
    };
    this._4ye9 = function (a) {
        if (this.maplet) {
            for (var b in this.ao) {
                var c = b.substring(0, 5) == "info_" ? b.substring(5) : b;
                MEvent.removeBuiltInListener(this.maplet.map, c, this.ao[b]);
                this.ao[b] = null;
                if (a) delete this.ao[b]
            }
        }
    };
    this.removeContextMenu = function () {
        if (typeof this.contextmenu == "object" && this.contextmenu) {
            this.contextmenu.removeOverlay(this);
            this.contextmenu = null
        }
    };
    this.openInfoWindow = function (e) {
        if (this.openInfoWindow.caller == null) {}
        if (this.maplet != null) {
            if ((new Date().getTime() - this.lw) < 200) return;
            if (this.maplet.gq6 && typeof e == "object" && ((this.icon && fJ(e.target, this.icon.img)) || (this.label && fJ(e.target, this.label.div)))) {
                this.maplet.gq6 = false;
                if (this.maplet.U3551 || (ContentInfo && ContentInfo.isVisible() && avBubble.overlay == this)) return
            }
            var x = this.pt.mapX;
            var y = this.pt.mapY;
            if (typeof e == "undefined" || (typeof e == "object" && this.icon && fJ(e.target, this.icon.img)) || (typeof e == "object" && this.label && fJ(e.target, this.label.div))) {
                if (typeof e == "object" && this.maplet.sS != ts.ty && this.maplet.sS != ts.tu) {
                    return
                }
                if (!this.icon.isVisible()) {
                    if (x >= this.maplet.width * 1.5 || x <= -(this.maplet.width / 2) || y <= -(this.maplet.height / 2) || y >= this.maplet.height * 1.5) {
                        this.maplet.setCenter(this.pt.getPid());
                        x = this.maplet.width / 2;
                        y = this.maplet.height / 2
                    }
                }
                this.x = x;
                this.y = y;
                if (this.openInfoWindow.caller && this.openInfoWindow.caller.toString().indexOf(".call(") != -1) {
                    avBubble.D8g = false;
                    MEvent.trigger(this, "click", this)
                }
                if (!this.maplet) return;
                if (!this.info) {
                    return
                } else if (!this.info.getOverlay()) {
                    this.info.setOverlay(this)
                }
                if (iToolTipStyle != 2) {
                    this.hiliteIcon({
                        target: {
                            id: this.id
                        }
                    });
                    this.maplet.wN(x, y, this.info, "", "", true)
                }
            } else if (typeof e == "boolean" && e || e == "true") {
                if (!this.info) {
                    return
                } else if (!this.info.getOverlay()) {
                    this.info.setOverlay(this)
                }
                if (x > this.maplet.width * 2 || x < -this.maplet.width || y < -this.maplet.height || y > this.maplet.height * 2) {
                    this.maplet.setCenter(this.pt.getPid());
                    x = this.maplet.width / 2;
                    y = this.maplet.height / 2
                }
                this.maplet.wN(x, y, this.info, true)
            }
        }
    };
    this.w0 = function (e) {
        if (this.icon != null && this.maplet && (this.bEditable || this.maplet.sS == ts.tu) && fJ(e.target, this.icon.img) && e.button != 2) {
            this.qo = true;
            this.fd = false;
            this.l6 = this.id;
            this.l0 = parseInt(e.clientX - this.maplet.offsetX - this.maplet.left) - parseInt(this.icon.div.style.left);
            this.na = parseInt(e.clientY - this.maplet.offsetY - this.maplet.top) - parseInt(this.icon.div.style.top);
            if (this.rotation == 1) {
                var a = this.l0 - this.icon.width / 2;
                var b = this.na - this.icon.height / 2;
                var c = Math.sqrt(a * a + b * b);
                if (c > (this.icon.width / 4 - 5)) {
                    this.fd = true;
                    this.downX = e.clientX;
                    this.downY = e.clientY
                }
            }
            this.ao["mousemove"] = MEvent.bindDom(document, "mousemove", this, this.f9);
            this.ao["mouseup"] = MEvent.bindDom(document, "mouseup", this, this.l1);
            if (px) this.ao["losecapture"] = MEvent.bindDom(document.body, "losecapture", this, this.l1);
            else this.ao["blur"] = MEvent.bindDom(window, "blur", this, this.l1)
        }
    };
    this.f9 = function (e) {
        if (this.icon != null && this.maplet && (this.bEditable || this.maplet.sS == ts.tu) && (fJ(e.target, this.icon.img) || this.l6 == this.id)) {
            if (this.qo) {
                if (avBubble.overlay && avBubble.overlay.id == this.id) this.maplet.hideBubble();
                if (!this.fd) {
                    var x = e.clientX - this.maplet.offsetX - this.maplet.left - this.l0;
                    var y = e.clientY - this.maplet.offsetY - this.maplet.top - this.na;
                    var a = this.maplet.Ge4;
                    var b = 0,
                        UX23 = 0;
                    if (this.icon.div.parentNode == this.maplet.lA.div) {
                        this.maplet.panel.appendChild(this.icon.div);
                        if (this.label) this.maplet.panel.appendChild(this.label.div);
                        if (this.shadow) this.maplet.panel.appendChild(this.shadow.div);
                        this.setZIndex(pF);
                        if (px) document.body.setCapture();
                        if (this.maplet.markerDragAnimation) {
                            b = a.js112;
                            UX23 = a.e34B
                        }
                    }
                    if (!p) p = nB(this, q, 100);
                    if (this.dragAnimation) {
                        y = y + this.icon.anchorY - a.height / 2;
                        this.maplet.U287(true, x + this.icon.anchorX - a.width / 2, y);
                        y = y - a.offsetY - this.icon.height
                    }
                    this.x = x;
                    this.y = y;
                    this.lw = new Date().getTime();
                    this.ls = true;
                    this.icon.update(this.maplet, x + this.icon.anchorX, y + this.icon.anchorY);
                    if (this.shadow) {
                        var c = this.icon.left - this.icon.WX7H;
                        var d = this.icon.top - this.icon.m2rT2;
                        this.shadow.update(this.maplet, this.shadow.left + c + this.shadow.anchorX + b, this.shadow.top + d + this.shadow.anchorY + UX23)
                    }
                    if ((MEvent.contains(this, "dragstart") && !this.O69c5) || MEvent.contains(this, "draging")) {
                        var f = null;
                        if (this.dragAnimation) {
                            f = new MPoint(this.maplet.toMapCoordinate($9tU(a.fC.div.style.left) + a.width / 2, $9tU(a.fC.div.style.top) + a.height / 2))
                        } else {
                            f = new MPoint(this.maplet.toMapCoordinate(this.x + this.icon.anchorX, this.y + this.icon.anchorY))
                        }
                        f.initialize(this.maplet);
                        if (MEvent.contains(this, "dragstart") && !this.O69c5) {
                            MEvent.trigger(this, "dragstart", this, f);
                            this.O69c5 = true
                        }
                        if (MEvent.contains(this, "draging")) {
                            MEvent.trigger(this, "draging", this, f)
                        }
                    }
                } else {
                    var g = parseInt(e.clientX - this.maplet.offsetX - this.maplet.left) - parseInt(this.icon.div.style.left);
                    var h = parseInt(e.clientY - this.maplet.offsetY - this.maplet.top) - parseInt(this.icon.div.style.top);
                    var i = Math.atan2((h - this.icon.height / 2), g - this.icon.width / 2);
                    var j = ((90 + i * 180 / Math.PI) + 360) % 360;
                    MEvent.trigger(this, "rotate", j)
                }
                if (px) this.maplet.a3(e)
            }
        }
    };
    this.l1 = function (e) {
        if (this.icon != null && this.maplet && (this.bEditable || this.maplet.sS == ts.tu) && this.qo && this.ls) {
            if (this.maplet.fa) this.maplet.finishupPan();
            MEvent.removeBuiltInListener(document, "mousemove", this.ao["mousemove"]);
            this.ao["mousemove"] = null;
            MEvent.removeBuiltInListener(document, "mouseup", this.ao["mouseup"]);
            this.ao["mouseup"] = null;
            if (px) {
                MEvent.removeBuiltInListener(document.body, "losecapture", this.ao["losecapture"]);
                this.ao["losecapture"] = null
            } else {
                MEvent.removeBuiltInListener(window, "blur", this.ao["blur"]);
                this.ao["blur"] = null
            }
            this.O69c5 = false;
            if (!this.fd) {
                var x = e.clientX - this.maplet.offsetX - this.maplet.left - this.l0;
                var y = e.clientY - this.maplet.offsetY - this.maplet.top - this.na;
                if (isNaN(x)) x = this.x;
                if (isNaN(y)) y = this.y;
                if (this.icon.div.parentNode != this.maplet.lA.div) {
                    this.maplet.lA.appendChild(this.icon.div);
                    if (this.label) this.maplet.lA.appendChild(this.label.div);
                    if (this.shadow) {
                        this.maplet.lA.appendChild(this.shadow.div);
                        this.shadow._b68()
                    }
                    with(this.maplet.Ge4.fC) {
                        if (div.parentNode != this.maplet.lA.div) {
                            this.maplet.lA.div.appendChild(div);
                            div.style.zIndex = this.icon.div.style.zIndex - 1
                        }
                    }
                    if (px) document.body.releaseCapture()
                }
                if (this.dragAnimation) {
                    y = parseInt(this.maplet.Ge4.fC.style.top) + this.maplet.Ge4.height / 2 - this.icon.anchorY
                }
                this.pt.setMapCoords(x + this.icon.anchorX, y + this.icon.anchorY);
                this.x = x;
                this.y = y;
                if (this.dragAnimation) r.apply(this)
            } else {}
            MEvent.trigger(this, "drag", this);
            MEvent.trigger(this.maplet, "edit", this);
            if (this.ls) {
                this.lw = new Date().getTime();
                this.ls = false
            }
            if (this.maplet.sS == ts.tb || this.maplet.sS == ts.ta || this.maplet.sS == ts.lz || this.maplet.sS == ts.ly) this.maplet.Pth = false
        }
        if (this.l6 == this.id) {
            this.l6 = null
        }
        this.qo = false
    };
    this.hiliteIcon = function (e) {
        if (this.icon != null && fJ(e.target, this.id) && !this.qo) {
            if (this.maplet.sS == ts.tz || this.maplet.sS == ts.tA || this.maplet.sS == ts.u4XWR) {
                this.maplet.k93("no-drop", this.icon.img)
            } else if (this.info || MEvent.contains(this, "click") > 0 || this.bEditable) {
                this.maplet.k93("pointer", this.icon.img)
            }
            if (this.icon.div.style.zIndex < pF) {
                pF++
            }
            this.icon.setZIndex(pF);
            if (this.label) this.label.setZIndex(pF);
            var x = this.maplet.zl(this.pt.lon, this.pt.lat);
            var y = this.maplet.zm(this.pt.lat, this.pt.lon);
            this.x = x;
            this.y = y;
            if (typeof e.button != "undefined" && !this.tx4) {
                this.tx4 = true;
                MEvent.trigger(this, "mouseover", this)
            }
        }
    };
    this.v4 = function (e) {
        this.maplet.k93("default", this.icon.img);
        if (this.icon != null && fJ(e.target, this.id) && !this.qo) {
            var x = this.maplet.zl(this.pt.lon, this.pt.lat);
            var y = this.maplet.zm(this.pt.lat, this.pt.lon);
            this.x = x;
            this.y = y;
            MEvent.trigger(this, "mouseout", this);
            this.tx4 = false
        }
    };
    this.setZIndex = function (a) {
        if (this.icon) this.icon.setZIndex(a);
        if (this.label) this.label.setZIndex(a);
        if (this.shadow) this.shadow.setZIndex(a)
    };
    this._b68 = function () {
        if (this.icon) this.icon._b68();
        if (this.label) this.label._b68();
        if (this.shadow) this.shadow._b68()
    };
    this.setIcon = function (a, b) {
        if (typeof b != "boolean") b = true;
        if (this.icon) {
            this.icon.remove();
            this.icon = null
        }
        if (a) {
            this.icon = a;
            this.icon.wz(this.id);
            this.icon.initialize(this);
            this.icon.enableDragMap(!this.bEditable);
            if (b) this.paint()
        }
    };
    this.setLabel = function (a, b) {
        if (typeof b != "boolean") b = true;
        if (this.label) {
            this.label.remove();
            this.label = null
        }
        if (a) {
            this.label = a;
            this.label.wz(this.id);
            this.label.initialize(this);
            if (b) this.paint()
        }
    };
    this.setShadow = function (a, b) {
        if (typeof b != "boolean") b = true;
        if (this.shadow) {
            this.shadow.remove();
            this.shadow = null
        }
        if (a) {
            this.shadow = a;
            this.shadow.wz(this.id);
            this.shadow.initialize(this);
            if (b) this.paint()
        }
    };
    this.setInfoWindow = function (a) {
        if (this.info) {
            if (avBubble.overlay && avBubble.overlay.id == this.id && ContentInfo && ContentInfo.isVisible()) this.maplet.hideBubble();
            this.info = null
        }
        if (a) {
            this.info = a;
            this.info.setOverlay(this)
        }
    };
    this.setPoint = function (a, b) {
        if (typeof b != "boolean") b = true;
        this.pt = a;
        if (avBubble.overlay && avBubble.overlay.id == this.id) this.maplet.hideBubble();
        if (b) this.paint()
    };
    var p = null;
    var q = function () {
        if (this.ls) {
            var a = this.maplet.S4c4;
            var b = this.icon.getRect();
            if (b.min.x == b.max.x || b.min.y == b.max.y) return;
            var c = 0,
                vk = 0;
            if (b.min.x < a) c = 50;
            if (b.min.y < a) vk = 50;
            if (b.max.x > this.maplet.width - a) c = -50;
            if (b.max.y + (this.dragAnimation ? (this.maplet.Ge4.height + this.maplet.Ge4.offsetY) : 0) + 2 > this.maplet.height - a) vk = -50;
            if ((c != 0 || vk != 0)) {
                this.maplet.panTo(c, vk);
                if (MEvent.contains(this, "draging")) {
                    var d = null;
                    if (this.dragAnimation) {
                        var e = this.maplet.Ge4;
                        d = new MPoint(this.maplet.toMapCoordinate($9tU(e.fC.div.style.left) + e.width / 2, $9tU(e.fC.div.style.top) + e.height / 2))
                    } else d = new MPoint(this.maplet.toMapCoordinate(this.x + this.icon.anchorX, this.y + this.icon.anchorY));
                    d.initialize(this.maplet);
                    MEvent.trigger(this, "draging", this, d)
                }
                return
            }
        }
        window.clearInterval(p);
        p = null
    };
    n1B2 = null;
    var r = function () {
        window.clearTimeout(n1B2);
        this.maplet.Ge4.overlay = this;
        var a = 0,
            d = 50;
        var b = {
            b: parseInt(this.icon.div.style.top),
            c: 0
        };
        b.c = this.pt.mapY - this.icon.anchorY - b.b;
        var c = null,
            e = null;
        if (this.shadow) {
            var c = {
                b: parseInt(this.shadow.div.style.left),
                c: 0
            };
            c.c = this.pt.mapX - this.shadow.anchorX - c.b;
            var e = {
                b: parseInt(this.shadow.div.style.top),
                c: 0
            };
            e.c = this.pt.mapY - this.shadow.anchorY - e.b
        }
        function R78() {
            if (a < d) {
                a++;
                this.icon.update(this.maplet, this.pt.mapX, Math.ceil(s(a, b.b, b.c, d)) + this.icon.anchorY);
                if (this.shadow) this.shadow.update(this.maplet, Math.ceil(s(a, c.b, c.c, d)) + this.shadow.anchorX, Math.ceil(s(a, e.b, e.c, d)) + this.shadow.anchorY);
                n1B2 = getTimeout(this, R78, 10)
            } else {
                this.maplet.U287(false)
            }
        };
        R78.apply(this)
    };
    this.Vr$83 = function () {
        if (n1B2) {
            window.clearTimeout(n1B2);
            n1B2 = null
        }
        this.paint()
    };
    var s = function (a, b, c, d) {
        if ((a /= d) < (1 / 2.75)) {
            return c * (7.5625 * a * a) + b
        } else if (a < (2 / 2.75)) {
            return c * (7.5625 * (a -= (1.5 / 2.75)) * a + .75) + b
        } else if (a < (2.5 / 2.75)) {
            return c * (7.5625 * (a -= (2.25 / 2.75)) * a + .9375) + b
        } else {
            return c * (7.5625 * (a -= (2.625 / 2.75)) * a + .984375) + b
        }
    }
};
var MPolyline = function (A, B, C, D, E) {
    this.options = E || {};
    if (typeof this.options.editHilite != "boolean") this.options.editHilite = true;
    this.id = new Date().getTime() + "" + parseInt(Math.random() * 10000) + "MPolyline";
    this.pts = A;
    this.brush = (typeof B == "undefined") ? new MBrush() : B;
    this.info = null;
    if (typeof C != "undefined" && C) {
        this.info = C;
        this.info.setOverlay(this)
    }
    this.label = (typeof D == "undefined") ? null : D;
    this.qo = false;
    this.wk = null;
    this.z9 = null;
    this.um = new MContextMenu();
    this.un = new MContextMenuItem('\u5220\u9664\u8282\u70B9');
    this.um.addItem(this.un);
    this.contextmenu = null;
    this.pathNodeMenu = null;
    this.ao = new Array();
    this.H7804 = new Object();
    this.isRefreshMkIndex = REFRESH_MK_INDEX;
    this.tn = Number.MAX_VALUE;
    this.to = this.tn;
    this.d7gX2 = -Number.MAX_VALUE;
    this.vq_ = this.d7gX2;
    this.maplet = null;
    this.bEditable = false;
    this.owX = false;
    this.$d16 = false;
    this.M$T = true;
    this.hH1 = null;
    var F = {
        yN: null,
        rAEs: {
            x: null,
            y: null
        },
        cpU: {
            x: null,
            y: null
        },
        _C811: {
            x: null,
            y: null
        }
    };
    this.Gjx1 = [];
    var G = [];
    this.creator = MLayer.USER;
    this.setEditable = function (a) {
        this.bEditable = (typeof a != "boolean") ? false : a;
        if (!this.bEditable && this.z9) this.c5E4();
        if (this.maplet != null) this.update()
    };
    this.setEditMode = function (a, b) {
        if (typeof b != "boolean") b = true;
        var c = false;
        if (a == "path") {
            c = !this.traffic;
            this.traffic = true
        } else if (a == "default") {
            c = this.traffic;
            this.traffic = false
        }
        if (c && this.maplet) this.G7iy();
        if (b && !this.bEditable) this.setEditable(true)
    };
    this.G7iy = function () {
        if (!this.maplet) return;
        if (this.contextmenu) this.contextmenu.hide();
        if (this.pathNodeMenu) this.pathNodeMenu.hide();
        if (this.um) this.um.hide();
        MEvent.removeBuiltInListener(this.maplet.map, "mousedown", this.ao["mousedown"]);
        this.ao["mousedown"] = null;
        MEvent.removeBuiltInListener(this.maplet.map, "mouseup", this.ao["mouseup"]);
        this.ao["mouseup"] = null;
        this.update();
        if (!this.traffic) {
            MEvent.removeBuiltInListener(this.maplet.map, "mousemove", this.ao["mousemove"][0]);
            MEvent.removeBuiltInListener(this.maplet.map, "mousemove", this.ao["mousemove"][1]);
            this.ao["mousemove"] = null;
            this.ao["mousemove"] = MEvent.bindDom(this.maplet.map, "mousemove", this, this.f9);
            this.ao["mousedown"] = MEvent.bindDom(this.maplet.map, "mousedown", this, this.w0);
            this.ao["mouseup"] = MEvent.bindDom(this.maplet.map, "mouseup", this, this.l1);
            if (this.z9) {
                this.z9.style.overflow = "";
                this.z9.style.width = "";
                this.z9.style.height = "";
                this.z9.style.left = "";
                this.z9.style.top = ""
            }
        } else {
            MEvent.removeBuiltInListener(this.maplet.map, "mousemove", this.ao["mousemove"]);
            this.ao["mousemove"] = null;
            this.ao["mousedown"] = MEvent.bindDom(this.maplet.map, "mousedown", this, this.R91s7);
            this.ao["mouseup"] = MEvent.bindDom(this.maplet.map, "mouseup", this, this.Nmc_);
            this.ao["mousemove"] = [];
            this.ao["mousemove"][0] = MEvent.bindDom(this.maplet.map, "mousemove", this, this.uG);
            this.ao["mousemove"][1] = MEvent.bindDom(this.maplet.map, "mousemove", this, this.x2g);
            if (this.z9) this.z9.style.overflow = "hidden"
        }
    };
    this.initialize = function (a) {
        this.maplet = a;
        if (typeof this.contextmenu == "object" && this.contextmenu) {
            if (!this.contextmenu.maplet) this.contextmenu.initialize(this.maplet);
            if (!this.contextmenu.containsOverlay(this)) this.contextmenu.addOverlay(this)
        }
        if (this.pathNodeMenu) {
            if (!this.pathNodeMenu.maplet) this.pathNodeMenu.initialize(this.maplet);
            if (!this.pathNodeMenu.containsOverlay(this)) this.pathNodeMenu.addOverlay(this)
        }
        this.um.initialize(this.maplet);
        this.ao["click"] = MEvent.bindDom(this.maplet.map, "click", this, this.openInfoWindow);
        if (this.traffic) {
            this.ao["mouseover"] = MEvent.bindDom(this.maplet.map, "mouseover", this, this.uG);
            this.ao["mousedown"] = MEvent.bindDom(this.maplet.map, "mousedown", this, this.R91s7);
            this.ao["mouseup"] = MEvent.bindDom(this.maplet.map, "mouseup", this, this.Nmc_);
            this.ao["mousemove"] = [];
            this.ao["mousemove"][0] = MEvent.bindDom(this.maplet.map, "mousemove", this, this.uG);
            this.ao["mousemove"][1] = MEvent.bindDom(this.maplet.map, "mousemove", this, this.x2g)
        } else {
            this.ao["mouseover"] = MEvent.bindDom(this.maplet.map, "mouseover", this, this.uG);
            this.ao["mousemove"] = MEvent.bindDom(this.maplet.map, "mousemove", this, this.f9);
            this.ao["mousedown"] = MEvent.bindDom(this.maplet.map, "mousedown", this, this.w0);
            this.ao["mouseup"] = MEvent.bindDom(this.maplet.map, "mouseup", this, this.l1)
        }
        if (this.brush.fill && this.pts[0].getPid() != this.pts[this.pts.length - 1].getPid()) {
            this.pts.push(this.pts[0])
        }
        if (typeof this.maplet.lA != "undefined") {
            this.paint()
        }
    };
    this.toString = function () {
        return 'com.mapbar.maplet.MPolyline'
    };
    this.zq = function () {
        return ""
    };
    this.zn = function () {
        if (apiType == 1) return {
            brush: this.brush,
            points: this.pts
        };
        else {
            var a = this.brush.filled ? "2" : "0";
            var b = this.brush.stroke + "," + a + "," + this.brush.color + ":";
            for (var i = 0; i < this.pts.length; i++) b += this.pts[i].getPid() + ",";
            return b
        }
    };
    this.paint = function () {
        this.zX = this.maplet.c1663();
        if (!jF74S) {
            if (!this.z0) {
                this.z0 = document.createElement("v:shape");
                this.z0.style.width = "1px";
                this.z0.style.height = "1px";
                this.z0.coordsize = "1,1";
                this.z0.unselectable = "on";
                this.z0.id = this.id;
                this.z0.setAttribute("MStrName", this.toString());
                this.z0.strokecolor = this.brush.color;
                this.z0.strokeweight = this.brush.stroke + 'px';
                this.z0.fill = this.brush.fill;
                this.z0.filled = this.brush.fill;
                this.z0.style.position = "absolute";
                this.z0.contextmenu = this.contextmenu;
                $6R(this.z0, G9kd3, "true");
                $6R(this.z0, a0oX, "polyline");
                $6R(this.z0, "oid", this.id);
                this.Ad = document.createElement("v:stroke");
                this.Ad.opacity = parseInt(this.brush.stroke) == 0 ? 0 : this.brush.transparency / 100.0;
                this.Ad.joinstyle = "round";
                this.Ad.endcap = "round";
                this.Ad.fill = this.brush.fill;
                this.Ad.endarrow = this.brush.arrow ? "classic" : "";
                this.Ad.dashstyle = parseInt(this.brush.style) ? "dash" : "";
                this.zY = document.createElement("v:fill");
                this.zY.opacity = ((this.brush.bgtransparency) / 100);
                this.zY.color = this.brush.bgcolor;
                this.z0.appendChild(this.zY);
                this.z0.appendChild(this.Ad);
                this.zX.appendChild(this.z0);
                if (!this.brush.fill && this.brush.overlap.enable) {
                    var a = this.brush.overlap;
                    this.hH1 = document.createElement("v:shape");
                    this.hH1.style.width = "1px";
                    this.hH1.style.height = "1px";
                    this.hH1.coordsize = "1,1";
                    this.hH1.unselectable = "on";
                    this.hH1.strokecolor = a.color;
                    this.hH1.strokeweight = (a.stroke && !isNaN(a.stroke) ? a.stroke : this.brush.stroke - 2) + "px";
                    this.hH1.fill = false;
                    this.hH1.filled = false;
                    this.hH1.style.position = "absolute";
                    $6R(this.hH1, G9kd3, "true");
                    $6R(this.hH1, a0oX, "polyline");
                    $6R(this.hH1, "oid", this.id);
                    var s = document.createElement("v:stroke");
                    s.opacity = a.transparency / 100.0;
                    s.joinstyle = "round";
                    s.endcap = "round";
                    s.fill = false;
                    s.endarrow = this.brush.arrow ? "classic" : "";
                    s.dashstyle = parseInt(this.brush.style) ? "dash" : "";
                    this.hH1.appendChild(s);
                    this.zX.appendChild(this.hH1)
                }
                this.z0.onmouseover = MEvent.gm(this, H);
                this.z0.onmouseout = MEvent.gm(this, I);
                this.z0.onmousedown = MEvent.gm(this, J);
                this.z0.onmouseup = MEvent.gm(this, K);
                if (this.hH1) {
                    this.hH1.onmouseover = MEvent.gm(this, H);
                    this.hH1.onmouseout = MEvent.gm(this, I);
                    this.hH1.onmousedown = MEvent.gm(this, J);
                    this.hH1.onmouseup = MEvent.gm(this, K)
                }
            }
        } else {
            this.z0 = this.zX.firstChild;
            if (!this.Ad) {
                this.Ad = document.createElementNS("http://www.w3.org/2000/svg", "path");
                this.Ad.setAttribute("id", this.id);
                this.Ad.setAttribute("MStrName", this.toString());
                this.Ad.setAttribute("stroke-linejoin", "round");
                this.Ad.setAttribute("stroke-linecap", "round");
                this.Ad.setAttribute("marker-end", this.brush.arrow ? "url(#svgArrow)" : "");
                this.Ad.setAttribute("stroke", this.brush.color);
                this.Ad.setAttribute("stroke-width", this.brush.stroke + "px");
                this.Ad.setAttribute("stroke-opacity", this.brush.transparency / 100);
                this.Ad.setAttribute("style", parseInt(this.brush.style) ? "stroke-dasharray:3,15" : "");
                this.Ad.setAttribute("fill-opacity", this.brush.bgtransparency / 100);
                this.Ad.setAttribute("fill", (this.brush.fill) ? this.brush.bgcolor : "none");
                $6R(this.Ad, G9kd3, "true");
                $6R(this.Ad, a0oX, "polyline");
                $6R(this.Ad, "oid", this.id);
                if (!this.brush.fill && this.brush.overlap.enable) {
                    var a = this.brush.overlap;
                    this.hH1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
                    this.hH1.setAttribute("stroke-linejoin", "round");
                    this.hH1.setAttribute("stroke-linecap", "round");
                    this.hH1.setAttribute("marker-end", this.brush.arrow ? "url(#svgArrow)" : "");
                    this.hH1.setAttribute("stroke", a.color);
                    this.hH1.setAttribute("stroke-width", (a.stroke && !isNaN(a.stroke) ? a.stroke : this.brush.stroke - 2) + "px");
                    this.hH1.setAttribute("stroke-opacity", a.transparency / 100);
                    this.hH1.setAttribute("style", parseInt(this.brush.style) ? "stroke-dasharray:3,15" : "");
                    this.hH1.setAttribute("fill", "none");
                    $6R(this.hH1, G9kd3, "true");
                    $6R(this.hH1, a0oX, "polyline");
                    $6R(this.hH1, "oid", this.id)
                }
                this.ao["vstroke_mouseover"] = MEvent.bindDom(this.Ad, "mouseover", this, H);
                this.ao["vstroke_mouseout"] = MEvent.bindDom(this.Ad, "mouseout", this, I);
                this.ao["vstroke_mousedown"] = MEvent.bindDom(this.Ad, "mousedown", this, J);
                this.ao["vstroke_mouseup"] = MEvent.bindDom(this.Ad, "mouseup", this, K);
                this.ao["vstroke_mousemove"] = MEvent.bindDom(this.Ad, "mousemove", this, L);
                if (this.hH1) {
                    this.ao["overlapLine_mouseover"] = MEvent.bindDom(this.hH1, "mouseover", this, H);
                    this.ao["overlapLine_mouseout"] = MEvent.bindDom(this.hH1, "mouseout", this, I);
                    this.ao["overlapLine_mousedown"] = MEvent.bindDom(this.hH1, "mousedown", this, J);
                    this.ao["overlapLine_mouseup"] = MEvent.bindDom(this.hH1, "mouseup", this, K);
                    this.ao["overlapLine_mousemove"] = MEvent.bindDom(this.hH1, "mousemove", this, L)
                }
                if (typeof this.contextmenu == "object" && this.contextmenu) {
                    this.Ad.contextmenu = this.contextmenu
                }
                this.z0.appendChild(this.Ad);
                if (this.hH1) this.z0.appendChild(this.hH1)
            }
        }
        this.update()
    };
    var H = function (e) {
        var a = e.target;
        if (this.maplet.sS == ts.tz || this.maplet.sS == ts.tA || this.maplet.sS == ts.u4XWR) this.maplet.k93("crosshair", a);
        else if (this.info || MEvent.contains(this, "click")) this.maplet.k93("pointer", a);
        else this.maplet.k93("default", a);
        if (e.type == "mouseover") MEvent.trigger(this, "mouseover", this)
    };
    var I = function (e) {
        if (this.maplet.sS != ts.tz && this.maplet.sS != ts.tA && this.maplet.sS != ts.u4XWR) this.maplet.k93("default", e.target);
        MEvent.trigger(this, "mouseout", this)
    };
    var J = function (e) {
        if (!px) {
            this.owX = true;
            this.$d16 = false
        }
        if (this.maplet.sS != ts.tz && this.maplet.sS != ts.tA && this.maplet.sS != ts.u4XWR) this.maplet.k93("move", e.target)
    };
    var K = function (e) {
        if (!px) this.owX = false;
        H.apply(this, [e])
    };
    var L = function (e) {
        if (this.owX && !this.$d16) this.$d16 = true
    };
    this.setContextMenu = function (a) {
        this.contextmenu = a;
        if (a && typeof this.maplet == "object" && this.maplet) {
            if (!this.contextmenu.maplet) this.contextmenu.initialize(this.maplet);
            if (!this.contextmenu.containsOverlay(this)) this.contextmenu.addOverlay(this)
        } else if (!a) {
            this.removeContextMenu()
        }
    };
    this.getContextMenu = function (a) {
        if (!a) return null;
        if (typeof a.id == "string" && a.id.indexOf("traffic") != -1 && this.traffic) return this.pathNodeMenu;
        else
        return this.contextmenu
    };
    this.setPathNodeMenu = function (a) {
        this.pathNodeMenu = a;
        if (a && typeof this.maplet == "object" && this.maplet) {
            if (!this.pathNodeMenu.maplet) this.pathNodeMenu.initialize(this.maplet);
            if (!this.pathNodeMenu.containsOverlay(this)) this.pathNodeMenu.addOverlay(this)
        } else if (!a) {
            this.removePathNodeMenu()
        }
    };
    this.removePathNodeMenu = function () {
        if (this.pathNodeMenu) {
            this.pathNodeMenu.removeOverlay(this);
            this.pathNodeMenu = null
        }
    };
    this.setBrush = function (a) {
        if (!(a instanceof MBrush)) return;
        this.brush = a;
        if (!jF74S) {
            if (this.z0 && this.Ad && this.zY) {
                this.z0.strokecolor = a.color;
                this.z0.strokeweight = a.stroke + 'px';
                this.Ad.opacity = parseInt(a.stroke) == 0 ? 0 : a.transparency / 100.0;
                this.Ad.fill = a.fill;
                this.Ad.endarrow = a.arrow ? "classic" : "none";
                this.Ad.dashstyle = parseInt(a.style) ? "dash" : "";
                this.zY.opacity = ((a.bgtransparency) / 100);
                this.zY.color = a.bgcolor
            }
        } else {
            if (this.arrow) {
                this.arrow.setAttribute("fill", a.color);
                this.arrow.setAttribute("fill-opacity", a.bgtransparency / 100 + 0.3)
            }
            if (this.Ad) {
                this.Ad.setAttribute("marker-end", a.arrow ? "url(#svgArrow)" : "");
                this.Ad.setAttribute("stroke", a.color);
                this.Ad.setAttribute("stroke-width", a.stroke + "px");
                this.Ad.setAttribute("stroke-opacity", a.transparency / 100);
                this.Ad.setAttribute("style", parseInt(a.style) ? "stroke-dasharray:10,15" : "");
                this.Ad.setAttribute("fill-opacity", a.bgtransparency / 100);
                this.Ad.setAttribute("fill", (a.fill) ? a.bgcolor : "none")
            }
        }
        if (this.brush.fill != a.fill) this.update()
    };
    this.setInfoWindow = function (a) {
        if (this.info) {
            if (avBubble.overlay && avBubble.overlay.id == this.id && ContentInfo && ContentInfo.isVisible()) this.maplet.hideBubble();
            this.info = null
        }
        if (a) {
            this.info = a;
            this.info.setOverlay(this)
        }
    };
    this.setPoints = function (a) {
        this.pts = a;
        if (this.maplet) this.update()
    };
    this.update = function () {
        this.z9 = document.getElementById(this.id + "vNodeLayer");
        if (this.bEditable || this.maplet.sS == ts.tu) {
            if ((!this.traffic || (this.traffic && !this.qo)) && this.z9) {
                this.c5E4()
            }
            if (!this.z9) {
                this.z9 = document.createElement("div");
                this.z9.id = this.id + "vNodeLayer";
                this.z9.style.position = "absolute";
                this.z9.style.display = "none";
                this.z9.unselectable = "on";
                this.z9.style.zIndex = 1;
                this.zX.appendChild(this.z9)
            }
            if (this.traffic) {
                var a = document.getElementById(this.id + "_node_traffic");
                if (a == null) {
                    a = document.createElement("IMG");
                    a.style.width = CTLIMG_RESOURCE[0].w + "px";
                    a.style.height = CTLIMG_RESOURCE[0].h + "px";
                    if (_sqi) {
                        a.src = sX;
                        a.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src=" + CTLIMG_RESOURCE[0].url + ",sizingMethod=scale);"
                    } else {
                        a.src = CTLIMG_RESOURCE[0].url
                    }
                    a.id = this.id + "_node_traffic";
                    a.style.position = "absolute";
                    a.unselectable = "on";
                    a.alt = lt;
                    a.title = lt;
                    a.style.left = "-65px";
                    a.style.top = "-112px";
                    a.B0E1 = "no";
                    a.style.cursor = "pointer";
                    a.onmousedown = function () {
                        return false
                    };
                    $6R(a, "oid", this.id);
                    this.z9.style.width = "11px";
                    this.z9.style.height = "11px";
                    this.z9.style.overflow = "hidden";
                    this.z9.appendChild(a)
                }
                if (!this.qo) this.z9.style.display = "none"
            }
        }
        R.apply(this);
        this.aP = new Array();
        this.aR = new Array();
        var b = 10;
        if (this.pts == null || this.pts.length < 2) {
            return
        }
        var d = false;
        var e = this.maplet.width;
        var f = this.maplet.height;
        this.tn = Number.MAX_VALUE;
        this.to = this.tn;
        this.d7gX2 = -Number.MAX_VALUE;
        this.vq_ = this.d7gX2;
        this.Gjx1 = [];
        var g = {
            min: {
                x: -this.maplet.width,
                y: -this.maplet.height
            },
            max: {
                x: this.maplet.width * 2,
                y: this.maplet.height * 2
            }
        };
        var h = null;
        var j = null;
        var k = [];
        var l = [];
        for (var m = 0; m < this.pts.length; m++) {
            if (this.pts[m].inLevelRange(this.maplet.AG)) {
                k.push(this.pts[m]);
                l.push(m)
            }
        }
        for (var m = 0; m < k.length; m++) {
            var n = k[m];
            if (!n.maplet) n.initialize(this.maplet);
            if (this.maplet.X7jjM) {
                if (this.maplet.$2J != n.$2J) {
                    n.mapX += $9tU(this.maplet.B824);
                    n.mapY += $9tU(this.maplet.DHPs);
                    n.$2J = this.maplet.$2J
                }
            } else {
                n.recalcScreenCoords()
            }
            var o = k[(m == k.length - 1) ? m : m + 1];
            if (!o.maplet) o.initialize(this.maplet);
            if (this.maplet.X7jjM) {
                if (this.maplet.$2J != o.$2J) {
                    o.mapX += $9tU(this.maplet.B824);
                    o.mapY += $9tU(this.maplet.DHPs);
                    o.$2J = this.maplet.$2J
                }
            } else {
                o.recalcScreenCoords()
            }
            this.aP.push(n.mapX);
            this.aR.push(n.mapY);
            this.tn = Math.min(this.tn, n.mapX);
            this.to = Math.min(this.to, n.mapY);
            this.d7gX2 = Math.max(this.d7gX2, n.mapX);
            this.vq_ = Math.max(this.vq_, n.mapY);
            var p = {
                AH5n: {
                    x: n.mapX,
                    y: n.mapY
                },
                _8$7: {
                    x: o.mapX,
                    y: o.mapY
                }
            };
            var q = !this.brush.fill ? x50X5(p, g) : true;
            if (q) {
                if (!h) {
                    h = [p.AH5n];
                    j = p.AH5n
                } else if (p.AH5n.x != j.x || p.AH5n.y != j.y) {
                    h.push(p.AH5n);
                    j = p.AH5n
                }
                if (p._8$7.x != j.x || p._8$7.y != j.y) {
                    h.push(p._8$7);
                    j = p._8$7
                }
            }
            if ((!q && h) || (p._8$7.x != o.mapX || p._8$7.y != o.mapY)) {
                if (h.length >= 2) this.Gjx1.push(h);
                h = null;
                j = null
            }
        }
        if (h) {
            if (h.length >= 2) this.Gjx1.push(h);
            h = null;
            j = null
        }
        var t = [];
        if (this.Gjx1.length > 0) {
            for (var i = 0; i < this.Gjx1.length; i++) {
                var u = [];
                var n = null;
                for (var m = 0; m < this.Gjx1[i].length; m++) {
                    n = this.Gjx1[i][m];
                    if (m != 0) u.push(n.x + "," + n.y)
                }
                n = this.Gjx1[i][0];
                t.push("M" + n.x + "," + n.y + " L" + u.join(px ? "," : " L"))
            }
        }
        j = null;
        for (var i = 0; i < this.aP.length; i++) {
            var x = this.aP[i];
            var y = this.aR[i];
            if ((this.bEditable || this.maplet.sS == ts.tu) && !this.traffic) {
                var r = b + 1;
                if (j) r = Math.abs(x - j.x) + Math.abs(y - j.y);
                if (x > 0 && x < this.maplet.width && y > 0 && y < this.maplet.height && r > b) {
                    var v = document.getElementById(this.id + "_node_" + i);
                    if (v == null) {
                        v = new Image();
                        v.id = this.id + "_node_" + i;
                        v.qf = i;
                        v.qk = l[i];
                        v.src = ul;
                        v.unselectable = "on";
                        v.alt = lt;
                        v.title = lt;
                        v.style.position = "absolute";
                        v.onmousedown = function () {
                            return false
                        };
                        v.contextmenu = this.um
                    }
                    v.style.left = (x - 5) + "px";
                    v.style.top = (y - 5) + "px";
                    this.z9.appendChild(v);
                    j = {
                        x: x,
                        y: y
                    }
                }
                if (i > 0 && r > b) {
                    x = (x + this.aP[i - 1]) / 2 - 5;
                    y = (y + this.aR[i - 1]) / 2 - 5;
                    if (x > 0 && x < this.maplet.width && y > 0 && y < this.maplet.height) {
                        var w = document.getElementById(this.id + "_midnode_" + i);
                        if (w == null) {
                            w = new Image();
                            w.id = this.id + "_midnode_" + i;
                            w.qf = i;
                            w.qk = l[i];
                            w.unselectable = "on";
                            w.src = ul;
                            w.alt = lt;
                            w.title = lt;
                            w.style.position = "absolute";
                            w.style.filter = "alpha(opacity=60);";
                            w.style.MozOpacity = 0.6;
                            w.style.opacity = 0.6;
                            w.onmousedown = function () {
                                return false
                            };
                            w.contextmenu = this.um
                        }
                        w.style.left = x + "px";
                        w.style.top = y + "px";
                        this.z9.appendChild(w)
                    }
                }
            }
        }
        if (this.z0) {
            if (!jF74S) {
                _removeNode(document.getElementById("fix_id"));
                var s = document.createElement("script");
                s.id = "fix_id";
                document.body.insertBefore(s, document.body.firstChild);
                this.z0.style.display = "none";
                this.z0.path = t.join(" ") + " e";
                this.z0.style.display = "";
                if (this.hH1) {
                    this.hH1.style.display = "none";
                    this.hH1.path = t.join(" ") + " e";
                    this.hH1.style.display = ""
                }
            } else {
                this.Ad.setAttribute("d", t.join(" "));
                if (this.hH1) this.hH1.setAttribute("d", t.join(" "))
            }
        }
        var z = this.options.dirmark;
        if (this.maplet.AG >= z.minLevel && this.maplet.AG <= z.maxLevel) {
            for (var i = 1; i < l.length; i++) {
                if (typeof z.gsSN9[l[i]] == "undefined") continue;
                if (l[i] == this.pts.length - 1) break;
                var n = k[i];
                if (n.mapX > 0 && n.mapX < this.maplet.width && n.mapY > 0 && n.mapY < this.maplet.height) {
                    var c = 1,
                        D5x = k[i - c];
                    while (n.mapX == D5x.mapX && n.mapY == D5x.mapY && (i - (c + 1)) >= 0) {
                        D5x = k[i - (++c)]
                    }
                    if (n.mapX == D5x.mapX && n.mapY == D5x.mapY) continue;
                    Q.apply(this, [D5x.mapX, D5x.mapY, n.mapX, n.mapY])
                }
            }
        }
        if (this.isRefreshMkIndex && !(this.maplet.sS == ts.tb || this.maplet.sS == ts.ta || this.maplet.sS == ts.lz || this.maplet.sS == ts.ly)) this.refreshMarkerZIndex()
    };
    this.refreshMarkerZIndex = function () {
        if (!this.Scp() || !this.maplet) return;
        var a = this.maplet.getMarkersInPolygon(this);
        var b = new Object();
        if (a.length > 0) {
            for (var i = 0; i < a.length; i++) {
                if (this.bEditable && !a[i].bEditable) {
                    a[i].setZIndex(-1)
                } else if (a[i].icon && a[i].icon.div.style.zIndex < 0) {
                    a[i]._b68()
                }
                b[a[i].id] = a[i]
            }
        }
        for (var c in this.H7804) {
            if (!b[this.H7804[c].id]) {
                if (typeof this.H7804[c]._b68 == "function") {
                    this.H7804[c]._b68()
                }
            }
        }
        this.H7804 = b
    };
    this.Scp = function () {
        if (!this.Ad) return false;
        return this.Ad.getAttribute("fill") != "none" || this.Ad.getAttribute("fill") == eval(true)
    };
    this.tvq = function (a) {
        if (!this.H7804[a.id]) this.H7804[a.id] = a
    };
    this.c5E4 = function () {
        if (this.z9) {
            var a = this.z9.childNodes;
            for (var i = 0; i < a.length; i++) {
                a[i].onmousedown = null;
                a[i].contextmenu = null
            }
            _removeNode(this.z9);
            this.z9 = null
        }
    };
    this.finalize = function () {
        this.remove(true)
    };
    this.remove = function (a) {
        if (typeof a != "boolean") a = false;
        if (this.Scp() && this.bEditable) {
            this.bEditable = false;
            this.refreshMarkerZIndex();
            if (!a) this.bEditable = true
        }
        if (px) {
            if (this.z0) {
                this.z0.onmouseover = null;
                this.z0.onmouseout = null;
                this.z0.onmousedown = null;
                this.z0.onmouseup = null
            }
            if (this.hH1) {
                this.hH1.onmouseover = null;
                this.hH1.onmouseout = null;
                this.hH1.onmousedown = null;
                this.hH1.onmouseup = null
            }
        }
        for (var b in this.ao) {
            if (b.substring(0, 8) == "vstroke_") {
                if (this.Ad) MEvent.removeBuiltInListener(this.Ad, b.substring(8), this.ao[b])
            } else if (b.substring(0, 10) == "vpolyline_") {
                if (this.z0) MEvent.removeBuiltInListener(this.z0, b.substring(10), this.ao[b])
            } else if (b.substring(0, 12) == "overlapLine_") {
                if (this.hH1) MEvent.removeBuiltInListener(this.hH1, b.substring(12), this.ao[b])
            } else {
                if (this.maplet) {
                    var c = this.ao[b];
                    if (t63s(c)) {
                        for (var i = 0; i < c.length; i++) MEvent.removeBuiltInListener(this.maplet.map, b, c[i])
                    } else {
                        MEvent.removeBuiltInListener(this.maplet.map, b, c)
                    }
                }
            }
            this.ao[b] = null;
            if (a) delete this.ao[b]
        }
        if (a) {
            this.ao = null;
            this.removeContextMenu();
            if (this.um) {
                this.um.remove(true);
                this.um = null
            }
        }
        R.apply(this);
        if (typeof this.hH1 == "object" && this.hH1) {
            _removeNode(this.hH1);
            this.hH1 = null
        }
        if (!jF74S) {
            if (typeof this.z0 == "object" && this.z0) {
                _removeNode(this.z0);
                this.z0 = null
            }
        } else {
            if (typeof this.Ad == "object" && this.Ad) {
                _removeNode(this.Ad);
                this.Ad = null
            }
        }
        if (this.maplet) {
            if (this.maplet.J1t5 == this) this.maplet.J1t5 = null;
            if (this.maplet.u5[this.id]) {
                this.maplet.u5[this.id] = null;
                delete this.maplet.u5[this.id]
            }
        }
        this.c5E4();
        if (a) this.maplet = null
    };
    this.removeContextMenu = function () {
        if (typeof this.contextmenu == "object" && this.contextmenu) {
            this.contextmenu.removeOverlay(this);
            this.contextmenu = null
        }
    };
    this.getCenterXY = function () {
        var a = 0;
        var b = 0;
        if (this.brush.fill) {
            a = this.tn + (this.d7gX2 - this.tn) / 2;
            b = this.to + (this.vq_ - this.to) / 2
        } else if (this.maplet) {
            var c = Math.ceil(this.aP.length / 2) - (this.aP.length % 2);
            if (c < this.aP.length) {
                a = this.aP[c];
                b = this.aR[c]
            }
        }
        return {
            x: a,
            y: b
        }
    };
    this.getCenterPt = function () {
        if (this.tn != Number.MAX_VALUE && this.maplet) {
            var a = this.getCenterXY();
            var b = new MPoint(this.maplet.toMapCoordinate(a.x, a.y));
            b.initialize(this.maplet);
            return b
        } else {
            return null
        }
    };
    this.getPointsByLevelGroup = function (a, b) {
        var c = [];
        a = $9tU(a);
        a = Math.max(Math.min(a, this.pts.length - 1), 0);
        b = $9tU(b, this.pts.length - 1);
        b = Math.max(Math.min(b, this.pts.length - 1), 0);
        var d = this.pts[a];
        d.levelGroup = 3;
        c.push(d);
        for (var i = a + 1; i < b; i++) {
            if (this.pts[i].inLevelRange(this.maplet.AG)) {
                d = this.pts[i];
                d.levelGroup = 3;
                c.push(d)
            }
        }
        var d = this.pts[b];
        d.levelGroup = 3;
        c.push(d);
        return c
    };
    this.openInfoWindow = function (e) {
        if (this.maplet) {
            if (typeof e != "undefined" && (e.target.id == this.id || e.target == this.hH1) && this.maplet.b04) {
                this.maplet.b04 = false;
                if (this.maplet.U3551 || (ContentInfo && ContentInfo.isVisible() && avBubble.overlay == this)) return
            }
            if (this.maplet.sS != ts.ty && this.maplet.sS != ts.tu) return;
            if (this.info && !this.info.getOverlay()) this.info.setOverlay(this);
            if (typeof e == "undefined") {
                if (this.info != null && this.pts.length >= 2) {
                    var a = this.getCenterXY();
                    var b = a.x;
                    var c = a.y;
                    if (b >= this.maplet.width * 1.5 || b <= -(this.maplet.width / 2) || c <= -(this.maplet.height / 2) || c >= this.maplet.height * 1.5) {
                        this.maplet.setCenter(new MPoint(this.maplet.toMapCoordinate(b, c)));
                        b = this.maplet.width / 2;
                        c = this.maplet.height / 2
                    }
                    if (iToolTipStyle == 2) {
                        this.x = b;
                        this.y = c;
                        MEvent.trigger(this, "click", this)
                    } else {
                        this.maplet.wN(b, c, this.info, "", "", true)
                    }
                }
            } else if ((e.target.id == this.id || e.target == this.hH1) && !this.maplet.b04) {
                var x = e.clientX - this.maplet.offsetX - this.maplet.left;
                var y = e.clientY - this.maplet.offsetY - this.maplet.top;
                if (iToolTipStyle == 2) {
                    this.x = x;
                    this.y = y;
                    MEvent.trigger(this, "click", this)
                } else {
                    if (MEvent.contains(this, "click") > 0) {
                        with(this.maplet) {
                            var d = e.clientX - offsetX - left;
                            var f = e.clientY - offsetY - top;
                            var g = cq.zn(zp(d, f), zo(d, f))
                        }
                        if (apiType == 1) {
                            var h = new MPoint(g);
                            h.initialize(this.maplet);
                            MEvent.trigger(this, 'click', this, e, h)
                        } else MEvent.trigger(this, 'click', this, e, g)
                    }
                    if (this.info) {
                        if (!this.info.getOverlay()) this.info.setOverlay(this);
                        this.maplet.wN(x, y, this.info, false);
                        avBubble.oj0_ = true
                    }
                }
            }
        }
    };
    this.wQ = function (a) {
        if (this.z9 != null) {
            if (a) {
                this.z9.style.display = "block";
                this.z9.style.zIndex = 10;
                this.maplet.J1t5 = this
            } else {
                this.z9.style.display = "none";
                this.z9.style.zIndex = 0;
                this.maplet.J1t5 = null
            }
        }
    };
    this.uG = function (e) {
        if (!this.maplet) return;
        if (this.maplet.sS == ts.tb || this.maplet.sS == ts.ta || this.maplet.sS == ts.lz || this.maplet.sS == ts.ly || this.maplet.cN) {
            return
        }
        if (this.traffic) {
            if ((this.bEditable || this.maplet.sS == ts.tu) && !this.qo && (!this.maplet.J1t5 || this.maplet.J1t5 == this) && !this.ls) {
                if (typeof e.target.getAttribute == "function" && e.target.getAttribute(a0oX) == "marker") {
                    this.wQ(false);
                    return
                }
                var a = this.d48([e.clientX - this.maplet.offsetX, e.clientY - this.maplet.offsetY], this.Gjx1);
                if (this.zX != null && this.maplet && a != null || fJ(e.target, this.z9)) {
                    this.wQ(true);
                    var b = {
                        x: -10,
                        y: -10
                    };
                    if (a != null && this.maplet) {
                        b = this.Q86to(a[0], a[1], [e.clientX - this.maplet.offsetX, e.clientY - this.maplet.offsetY]);
                        this.y22 = a;
                        if (px) this.z0.style.cursor = "pointer";
                        else this.Ad.style.cursor = "pointer"
                    } else {
                        if (px) this.z0.style.cursor = "default";
                        else this.Ad.style.cursor = "default"
                    }
                    this.M0j9 = true;
                    clearTimeout(this.bfJ1);
                    this.bfJ1 = null;
                    var c = [0, 0];
                    switch (this.NA8) {
                    case 1:
                        c = [0, 1];
                        break;
                    case 2:
                        c = [1, 0];
                        break;
                    case 3:
                        c = [1, 1];
                        break;
                    case 4:
                        c = [0, 0];
                        break;
                    default:
                        c = [0, 0];
                        break
                    }
                    this.z9.style.left = (b.x - (px ? (5 + c[0]) : 5)) + "px";
                    this.z9.style.top = (b.y - (px ? (5 + c[1]) : 5)) + "px"
                } else {
                    if (px) this.z0.style.cursor = "default";
                    else this.Ad.style.cursor = "default";
                    if (this.z9 != null && this.z9.style.display == "none") return;
                    if (this.bfJ1 != null) return;
                    this.M0j9 = false;
                    this.bfJ1 = getTimeout(this, function () {
                        if (this.M0j9) return;
                        if (this.z9 != null && this.z9.style.display == "none") return;
                        this.wQ(false);
                        clearTimeout(this.bfJ1);
                        this.bfJ1 = null
                    }, 500)
                }
            } else if (this.qo) {
                this.x2g(e)
            }
        } else {
            if (this.bEditable || this.maplet.sS == ts.tu) {
                if (this.ls || this.zX && this.maplet && fJ(e.target, jF74S ? this.Ad : this.z0) || fJ(e.target, this.z9) || fJ(e.target, this.hH1) || e.target.getAttribute(a0oX) == "linemarker") {
                    if (this.options.editHilite) {
                        if (px) {
                            this.Ad.opacity = parseInt(this.brush.stroke) == 0 ? 0 : 1
                        } else {
                            this.Ad.setAttribute("stroke-opacity", 1)
                        }
                    }
                    this.wQ(true)
                } else {
                    if (this.options.editHilite) {
                        if (px) {
                            this.Ad.opacity = parseInt(this.brush.stroke) == 0 ? 0 : this.brush.transparency / 100.0
                        } else {
                            this.Ad.setAttribute("stroke-opacity", this.brush.transparency / 100.0)
                        }
                    }
                    this.wQ(false)
                }
            }
        }
    };
    this.w0 = function (e) {
        if (this.zX != null && this.maplet && (!jF74S && e.button == 1 || jF74S && e.button == 0) && (this.bEditable || this.maplet.sS == ts.tu) && (fJ(e.target, !jF74S ? this.z9 : this.Ad) || jF74S && fJ(e.target, this.z9)) && e.target.id.indexOf("node") != -1) {
            this.qo = true;
            this.maplet.l6 = e.target.id;
            this.l0 = (px || d04) ? e.offsetX : e.layerX;
            this.na = (px || d04) ? e.offsetY : e.layerY;
            R96$k = e.target;
            if (this.wk == null) {
                if (!jF74S) {
                    this.wk = document.createElement("v:polyline");
                    this.wk.unselectable = "on";
                    this.wk.id = this.id;
                    this.wk.strokecolor = this.brush.color;
                    this.wk.strokeweight = this.brush.stroke + 'px';
                    this.wk.fill = this.brush.fill;
                    this.wk.filled = this.brush.fill;
                    this.wk.style.position = "absolute";
                    this.Ac = document.createElement("v:stroke");
                    this.Ac.opacity = parseInt(this.brush.stroke) == 0 ? 0 : 1;
                    this.Ac.joinstyle = "round";
                    this.Ac.endcap = "round";
                    this.Ac.fill = this.brush.fill;
                    this.Ac.dashstyle = "dash";
                    var a = document.createElement("v:fill");
                    a.opacity = ((this.brush.bgtransparency) / 100);
                    a.color = this.brush.bgcolor;
                    this.wk.appendChild(a)
                } else {
                    this.wk = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                    this.wk.setAttribute("version", "1.1");
                    this.wk.setAttribute("overflow", "visible");
                    this.wk.setAttribute("viewBox", "0 0 " + this.maplet.width + " " + this.maplet.height);
                    this.wk.setAttribute("height", this.maplet.height + "px");
                    this.wk.setAttribute("width", this.maplet.width + "px");
                    this.wk.setAttribute("unselectable", "on");
                    this.Ac = document.createElementNS("http://www.w3.org/2000/svg", "path");
                    this.Ac.setAttribute("MStrName", this.toString());
                    this.Ac.setAttribute("stroke-linejoin", "round");
                    this.Ac.setAttribute("stroke-linecap", "round");
                    this.Ac.setAttribute("stroke", this.brush.color);
                    this.Ac.setAttribute("stroke-width", this.brush.stroke + "px");
                    this.Ac.setAttribute("stroke-opacity", 1);
                    this.Ac.setAttribute("style", "stroke-dasharray:10,15");
                    this.Ac.setAttribute("fill-opacity", this.brush.bgtransparency / 100);
                    this.Ac.setAttribute("fill", (this.brush.fill) ? this.brush.bgcolor : "none");
                    if (this.brush.arrow) {
                        this.arrow = document.createElementNS("http://www.w3.org/2000/svg", "path");
                        this.arrow.setAttribute("d", "M 0 0 L 10 5 L 0 10 L 4 5 z");
                        this.arrow.setAttribute("fill", this.brush.color);
                        this.arrow.setAttribute("fill-opacity", this.brush.bgtransparency / 100 + 0.3);
                        this.zY = document.createElementNS("http://www.w3.org/2000/svg", "marker");
                        this.zY.setAttribute("id", "arrow" + this.id);
                        this.zY.setAttribute("viewBox", "0 0 10 10");
                        this.zY.setAttribute("refX", "6");
                        this.zY.setAttribute("refY", "5");
                        this.zY.setAttribute("markerUnits", "strokeWidth");
                        this.zY.setAttribute("orient", "auto");
                        this.zY.appendChild(this.arrow);
                        this.zY.appendChild(this.arrow);
                        this.wk.appendChild(this.zY)
                    }
                }
            }
            this.wk.appendChild(this.Ac);
            this.zX.appendChild(this.wk)
        }
    };
    this.f9 = function (e) {
        if (R96$k != null && (this.bEditable || this.maplet.sS == ts.tu) && R96$k.id.indexOf("node") > 0 && this.qo) {
            if (R96$k != null) {
                if (avBubble.overlay && avBubble.overlay.id == this.id) this.maplet.hideBubble();
                var x = e.clientX - this.maplet.offsetX - this.maplet.left - this.l0;
                var y = e.clientY - this.maplet.offsetY - this.maplet.top - this.na;
                R96$k.style.left = (parseInt(x)) + "px";
                R96$k.style.top = (parseInt(y)) + "px";
                this.lw = new Date().getTime();
                this.ls = true;
                var a = parseInt(R96$k.qf);
                var b = "M";
                if (R96$k.id.indexOf("_midnode_") > 0) {
                    b += this.aP[a - 1] + ',' + this.aR[a - 1];
                    b += (!jF74S ? "," : "L") + (x + 5) + ',' + (y + 5);
                    b += (!jF74S ? "," : "L") + this.aP[a] + ',' + this.aR[a]
                } else {
                    if (a > 0) {
                        b += this.aP[a - 1] + ',' + this.aR[a - 1] + (px ? "," : "")
                    }
                    b += ((a > 0 && !px) ? "L" : "") + (x + 5) + ',' + (y + 5);
                    if (a < this.aP.length - 1) {
                        b += (!jF74S ? "," : "L") + this.aP[a + 1] + ',' + this.aR[a + 1]
                    }
                }
                if (this.wk != null) {
                    if (this.wk.points) {
                        this.wk.points.value = b
                    } else if (!jF74S) {
                        this.wk.value = b
                    } else {
                        this.Ac.setAttribute("d", b)
                    }
                }
            }
        }
    };
    this.l1 = function (e) {
        if (this.zX != null && this.maplet && (this.bEditable || this.maplet.sS == ts.tu) && this.qo) {
            if (R96$k != null && this.ls) {
                var x = parseInt(e.clientX) - parseInt(this.maplet.offsetX) - parseInt(this.maplet.left) - this.l0;
                var y = parseInt(e.clientY) - parseInt(this.maplet.offsetY) - parseInt(this.maplet.top) - this.na;
                var a = $9tU(R96$k.qk);
                var b = new MPoint(this.maplet.zp(x + 5, y + 5), this.maplet.zo(x + 5, y + 5), false);
                if (R96$k.id.indexOf("_midnode_") > 0) this.pts.splice(a, 0, b);
                else this.pts.splice(a, 1, b);
                this.lw = new Date().getTime();
                this.ls = false;
                R96$k = null;
                this.update();
                MEvent.trigger(this, "drag", this, b);
                MEvent.trigger(this.maplet, "edit", this, b)
            }
            this.qo = false;
            if (this.wk.parentNode != null) {
                _removeNode(this.wk);
                this.wk = null
            }
        }
        if (this.maplet && this.maplet.l6 == this.id) {
            this.maplet.l6 = null
        }
    };
    this.removeNode = function (a, b, c) {
        var d = b.B882;
        if (typeof d != "undefined") {
            if (d.toString().indexOf(this.id) >= 0 && d.toString().lastIndexOf("_") >= 0) {
                d = d.toString().substring(d.toString().lastIndexOf("_") + 1)
            }
            d = parseInt(d);
            if (!isNaN(d) && d < this.pts.length) {
                this.pts.splice(d, 1);
                MEvent.trigger(this, "edit", this);
                MEvent.trigger(this.maplet, "edit", this);
                if (this.wk != null && this.wk.parentNode != null) {
                    _removeNode(this.wk);
                    this.wk = null
                }
                this.update()
            }
        }
    };
    MEvent.bind(this.un, "select", this, this.removeNode);
    this.F1Pm = function (d, e, f, g) {
        this.t1I1 = function (a) {
            var b = Math.atan2(e - a.LP0O, d - a.xLK52) - a.o523a;
            var c = Math.atan2(g - a.LP0O, f - a.xLK52) - a.o523a;
            while (b < 0) b += 2 * Math.PI;
            while (c < 0) c += 2 * Math.PI;
            while (b > 2 * Math.PI) b -= 2 * Math.PI;
            while (c > 2 * Math.PI) c -= 2 * Math.PI;
            return (b - Math.PI) * (c - Math.PI) < 0 && (b > Math.PI ? 2 * Math.PI - b : b) + (c > Math.PI ? 2 * Math.PI - c : c) < Math.PI
        }
    };
    this.NG8 = function (a, b, c) {
        this.xLK52 = a;
        this.LP0O = b;
        this.o523a = c
    };
    this.h7qm = function (a) {
        var b = null;
        var c = parseInt(a[0].x);
        var d = parseInt(a[0].y);
        var e = parseInt(a[1].x);
        var f = parseInt(a[1].y);
        var g = Math.abs(c - e);
        var h = Math.abs(d - f);
        var i = parseInt(this.brush.stroke);
        var j = i * h / Math.sqrt(Math.pow(g, 2) + Math.pow(h, 2));
        var k = j * g / h;
        var l = 4;
        this.NA8 = 0;
        if (c == e) {
            this.NA8 = 1;
            b = [
                [c - i - l, d],
                [c + i + l, d],
                [e + i + l, f],
                [e - i - l, f]
            ]
        } else if (d == f) {
            this.NA8 = 2;
            b = [
                [c, d + i + l],
                [e, f + i + l],
                [e, f - i - l],
                [c, d - i - l]
            ]
        } else if (d < f && c < e) {
            this.NA8 = 3;
            b = [
                [parseInt(c - j - l), parseInt(d + k + l)],
                [parseInt(e - j - l), parseInt(f + k + l)],
                [parseInt(e + j + l), parseInt(f - k - l)],
                [parseInt(c + j + l), parseInt(d - k - l)]
            ]
        } else if (d > f && c < e) {
            this.NA8 = 4;
            b = [
                [parseInt(c - j - l), parseInt(d - k - l)],
                [parseInt(e - j - l), parseInt(f - k - l)],
                [parseInt(e + j + l), parseInt(f + k + l)],
                [parseInt(c + j + l), parseInt(d + k + l)]
            ]
        } else if (d > f && c > e) {
            this.NA8 = 3;
            b = [
                [parseInt(c - j - l), parseInt(d + k + l)],
                [parseInt(c + j + l), parseInt(d - k - l)],
                [parseInt(e + j + l), parseInt(f - k - l)],
                [parseInt(e - j - l), parseInt(f + k + l)]
            ]
        } else if (d < f && c > e) {
            this.NA8 = 4;
            b = [
                [parseInt(c - j - l), parseInt(d - k - l)],
                [parseInt(c + j + l), parseInt(d + k + l)],
                [parseInt(e + j + l), parseInt(f + k + l)],
                [parseInt(e - j - l), parseInt(f - k - l)]
            ]
        }
        return b
    };
    this.$K_ = [];
    this.r816 = function (a, b) {
        var c = this.h7qm(b);
        for (var i = 0; i < c.length; i++) {
            this.$K_.push(new this.F1Pm(c[i][0], c[i][1], c[(i + 1) % c.length][0], c[(i + 1) % c.length][1]))
        }
        var d = new this.NG8(a[0], a[1], parseFloat("0.523112313123"));
        var e = 0;
        for (var f = 0; f < this.$K_.length; f++) {
            if (this.$K_[f].t1I1(d)) e++
        }
        this.$K_ = [];
        return e % 2 != 0
    };
    this.d48 = function (a, b) {
        for (var i = 0; i < b.length; i++) {
            var c = b[i];
            for (var d = 0; d < c.length - 1; d++) {
                var e = c[d];
                var f = c[d + 1];
                if (this.r816(a, [e, f])) {
                    return [e, f]
                }
            }
        }
        return null
    };
    this.Q86to = function (a, b, c) {
        var d = [b.x - a.x, b.y - a.y];
        var e = [parseInt(c[0]) - a.x, parseInt(c[1]) - a.y];
        var f = e[0] * d[0] + e[1] * d[1];
        if (f <= 0) return a;
        var g = d[0] * d[0] + d[1] * d[1];
        if (g <= f) return b;
        return {
            x: a.x + d[0] * f / g,
            y: a.y + d[1] * f / g
        }
    };
    this.R91s7 = function (e) {
        if (this.zX != null && this.maplet && (px && e.button == 1 || !px && e.button == 0) && (this.bEditable || this.maplet.sS == ts.tu) && fJ(e.target, this.z9)) {
            this.qo = true;
            this.maplet.l6 = e.target.id;
            var a = parseInt(e.target.style.left) + (px ? 1 : 0);
            var b = parseInt(e.target.style.top) + (px ? 1 : 0);
            this.l0 = ((px || d04) ? e.offsetX : e.layerX) + a;
            this.na = ((px || d04) ? e.offsetY : e.layerY) + b;
            R96$k = e.target
        }
    };
    this.Nmc_ = function (e) {
        if (this.zX != null && this.maplet && (this.bEditable || this.maplet.sS == ts.tu) && this.qo) {
            this.qo = false;
            var x = parseInt(e.clientX) - parseInt(this.maplet.offsetX) - parseInt(this.maplet.left) - this.l0;
            var y = parseInt(e.clientY) - parseInt(this.maplet.offsetY) - parseInt(this.maplet.top) - this.na;
            if (x > 0 && y > 0) {
                MEvent.trigger(this, "nodedrag", this, new MMarker(new MPoint(this.maplet.toMapCoordinate(x + 5, y + 5))), (this.q8q8(this, this.y22)).slice(0, 2))
            }
            this.wQ(false);
            this.M0j9 = false;
            clearTimeout(this.bfJ1);
            this.bfJ1 = null
        }
        this.ls = false;
        if (this.maplet && this.maplet.l6 == this.id) {
            this.maplet.l6 = null
        }
    };
    this.q8q8 = function (a, b) {
        var c = [];
        var d = a.pts;
        for (var i = 0; i < d.length; i++) {
            if ((d[i].mapX == b[0].x && d[i].mapY == b[0].y) || (d[i].mapX == b[1].x && d[i].mapY == b[1].y)) {
                c.push(i)
            }
        }
        return c
    };
    this.x2g = function (e) {
        if (R96$k != null && (this.bEditable || this.maplet.sS == ts.tu) && this.qo) {
            if (R96$k != null) {
                var x = e.clientX - this.maplet.offsetX - this.maplet.left - this.l0;
                var y = e.clientY - this.maplet.offsetY - this.maplet.top - this.na;
                this.z9.style.left = (parseInt(x)) + "px";
                this.z9.style.top = (parseInt(y)) + "px";
                if (MEvent.contains(this, "nodedrag_move") > 0) {
                    var a = new MPoint(this.maplet.toMapCoordinate(x + 5, y + 5));
                    a.initialize(this.maplet);
                    MEvent.trigger(this, "nodedrag_move", this, new MMarker(a), (this.q8q8(this, this.y22)).slice(0, 2))
                }
                this.lw = new Date().getTime();
                this.ls = true;
                with(F) {
                    cpU.x = x;
                    cpU.y = y;
                    if (!yN) {
                        rAEs.x = x;
                        rAEs.y = y;
                        _C811.x = x;
                        _C811.y = y;
                        yN = nB(this, M, LPN_HOVERING_TIME)
                    }
                }
            }
        }
    };
    var M = function () {
        with(F) {
            if (!this.qo && yN) {
                clearInterval(yN);
                yN = null;
                return
            }
            if (rAEs.x == cpU.x && rAEs.y == cpU.y && (cpU.x != _C811.x || cpU.y != _C811.y)) {
                _C811.x = cpU.x;
                _C811.y = cpU.y;
                MEvent.trigger(this, "drag_hovering", this, new MMarker(new MPoint(this.maplet.toMapCoordinate(cpU.x + 5, cpU.y + 5))), (this.q8q8(this, this.y22)).slice(0, 2))
            } else {
                rAEs.x = cpU.x;
                rAEs.y = cpU.y
            }
        }
    };
    this.appendPoint = function (a, b, c) {
        if (typeof a != "object" || !(a instanceof MPoint) || !a) throw new Error("para new_pt is not a valid MPoint object.");
        if (!a.maplet) a.initialize(this.maplet);
        this.pts.push(a);
        if (typeof c != "boolean") c = false;
        if (typeof b != "boolean") b = true;
        if (c) {
            var d = this.options.dirmark;
            d.pts.push(this.pts.length - 2);
            d.gsSN9[this.pts.length - 2] = null
        }
        if (b) this.update()
    };
    this.setDirMark = function (a, b) {
        if (typeof a != "object") a = {
            minLevel: MAX_ZOOM_LEVEL - 1,
            maxLevel: MAX_ZOOM_LEVEL,
            pts: []
        };
        if (typeof a.minLevel != "number" || a.minLevel < MIN_ZOOM_LEVEL || a.minLevel > MAX_ZOOM_LEVEL) a.minLevel = MAX_ZOOM_LEVEL - 1;
        if (typeof a.maxLevel != "number" || a.maxLevel < MIN_ZOOM_LEVEL || a.maxLevel > MAX_ZOOM_LEVEL) a.maxLevel = MAX_ZOOM_LEVEL;
        a.gsSN9 = {};
        if (!t63s(a.pts)) {
            a.pts = []
        } else {
            for (var i = 0; i < a.pts.length; i++) a.gsSN9[a.pts[i]] = null
        }
        this.options.dirmark = a;
        if (!this.maplet) return;
        if (typeof b != "boolean") b = true;
        if (b) this.update()
    };
    var N = function (r, a, b, c, d) {
        return parseInt(r + r * Math.sin(Math.PI / 180 * (a + b)) + c) + "," + parseInt(r + r * Math.cos(Math.PI / 180 * (a + b)) + d)
    };
    var O = function (a, b) {
        a = a * 100;
        b = 180 - b;
        var c = a / 2;
        var d = N(c, b, 0, 0, 0);
        var e = N(c, b, 125, 0, 0);
        var f = N(c, b, 235, 0, 0);
        return "M" + d + " L" + e + "," + a / 2 + "," + a / 2 + "," + f + "," + d + "E"
    };
    var P = function (a, b, c, d) {
        d = 180 - d;
        var e = c / 2;
        var f = N(e, d, 0, a, b);
        var g = N(e, d, 125, a, b);
        var h = N(e, d, 235, a, b);
        return "M " + f + " L " + g + " L " + (c / 2 + a) + " " + (c / 2 + b) + " L " + h + " L " + f + "z"
    };
    var Q = function (a, b, c, d) {
        var e = null;
        var f = this.brush.dmstyle.color;
        var g = this.brush.dmstyle.size;
        var h = this.brush.dmstyle.transparency;
        var i = this.brush.dmstyle.strokeWidth;
        var j = this.brush.dmstyle.strokeColor;
        var k = this.brush.dmstyle.strokeTransparency;
        var l = Math.floor(ren(a, b, c, d));
        var m = g / 2;
        zh = Math.PI / 180 * (l % 360);
        var n = -m * (1 + Math.sin(zh));
        var o = -m * (1 - Math.cos(zh));
        if (px) {
            e = document.createElement("v:shape");
            with(e.style) {
                position = "absolute";
                left = c + n + "px";
                top = d + o + "px";
                height = width = "1px";
                MozUserSelect = "none"
            }
            with(e) {
                setAttribute("coordsize", "100,100");
                setAttribute("filled", "t");
                setAttribute("strokecolor", j);
                setAttribute("strokeweight", i + "px");
                setAttribute("fillcolor", f);
                setAttribute("path", O(g, l));
                setAttribute(a0oX, "linemarker");
                setAttribute(G9kd3, "true")
            }
            var p = document.createElement("v:fill");
            p.setAttribute("opacity", h / 100.0);
            var q = document.createElement("v:stroke");
            q.setAttribute("opacity", k / 100.0);
            e.appendChild(p);
            e.appendChild(q);
            this.zX.appendChild(e)
        } else {
            e = document.createElementNS("http://www.w3.org/2000/svg", "path");
            with(e) {
                setAttribute("d", P(n + c, o + d, g, l));
                setAttribute("fill", f);
                setAttribute("fill-opacity", h / 100.0);
                setAttribute("stroke", j);
                setAttribute("stroke-width", i + "px");
                setAttribute("stroke-opacity", k / 100);
                setAttribute(a0oX, "linemarker");
                setAttribute(G9kd3, "true")
            }
            this.maplet.c1663().firstChild.appendChild(e)
        }
        G.push(e)
    };
    var R = function () {
        if (G.length > 0) {
            for (var i = 0; i < G.length; i++) {
                G[i].onmousedown = null;
                _removeNode(G[i]);
                G[i] = null
            }
            G = []
        }
    };
    this.setDirMark(this.options.dirmark, false)
};
MPolyline.Er7r6 = 24;
var MEllipse = function (f, g, h, i, j) {
    this.id = new Date().getTime() + "" + parseInt(Math.random() * 10000) + "Ellipse";
    this.gC = f;
    this.sax = typeof g != "undefined" && !isNaN(g) ? parseInt(g) : 300;
    this.say = typeof h != "undefined" && !isNaN(h) ? parseInt(h) : null;
    this.brush = (typeof i == "undefined") ? new MBrush() : i;
    this.info = (typeof j == "undefined") ? null : j;
    this.ao = new Array();
    this.zX = null;
    this.S_88R = null;
    this.Ad = null;
    this.zY = null;
    this.M$T = true;
    this.data = {
        ix: 0,
        iy: 0,
        ax: 0,
        ay: 0,
        sax: 0,
        say: 0
    };
    this.owX = false;
    this.$d16 = false;
    this.creator = MLayer.USER;
    this.initialize = function (a) {
        this.maplet = a;
        if (this.info) {
            this.ao["click"] = MEvent.bindDom(this.maplet.map, "click", this, this.openInfoWindow)
        }
        this.paint()
    };
    this.toString = function () {
        return 'com.mapbar.maplet.MEllipse'
    };
    this.paint = function () {
        if (!this.S_88R) {
            this.zX = this.maplet.c1663();
            if (!jF74S) {
                this.S_88R = document.createElement("v:oval");
                this.S_88R.strokecolor = this.brush.color;
                this.S_88R.strokeweight = this.brush.stroke + 'px';
                this.S_88R.filled = this.brush.fill;
                this.Ad = document.createElement("v:stroke");
                this.Ad.opacity = (this.brush.transparency / 100.0);
                this.zY = document.createElement("v:fill");
                this.zY.opacity = ((this.brush.bgtransparency) / 100);
                this.zY.color = this.brush.bgcolor;
                this.S_88R.appendChild(this.Ad);
                this.S_88R.appendChild(this.zY);
                this.zX.appendChild(this.S_88R)
            } else {
                this.S_88R = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
                this.S_88R.setAttribute("stroke", this.brush.color);
                this.S_88R.setAttribute("fill", this.brush.fill ? this.brush.bgcolor : 'none');
                this.S_88R.setAttribute("stroke-width", this.brush.stroke);
                this.S_88R.setAttribute("stroke-opacity", this.brush.transparency / 100);
                this.S_88R.setAttribute("fill-opacity", this.brush.bgtransparency / 100);
                this.zX.firstChild.appendChild(this.S_88R)
            }
            this.S_88R.id = this.id;
            $6R(this.S_88R, "oid", this.id);
            this.S_88R.style.position = "absolute";
            this.S_88R.unselectable = "on";
            this.S_88R.setAttribute(G9kd3, "true");
            this.S_88R.setAttribute(a0oX, "true");
            this.ao["ellipse_mouseover"] = MEvent.bindDom(this.S_88R, "mouseover", this, function (e) {
                if (this.maplet.sS == ts.tz || this.maplet.sS == ts.tA || this.maplet.sS == ts.u4XWR) this.maplet.k93("crosshair", this.S_88R);
                else if (this.info || MEvent.contains(this, "click")) this.maplet.k93("pointer", this.S_88R);
                else this.maplet.k93("default", this.S_88R);
                if (e.type == "mouseover") MEvent.trigger(this, "mouseover", this)
            });
            this.ao["ellipse_mouseout"] = MEvent.bindDom(this.S_88R, "mouseout", this, function () {
                if (this.maplet.sS != ts.tz && this.maplet.sS != ts.tA && this.maplet.sS != ts.u4XWR) this.maplet.k93("default", this.S_88R);
                MEvent.trigger(this, "mouseout", this)
            });
            this.ao["ellipse_mousedown"] = MEvent.bindDom(this.S_88R, "mousedown", this, function () {
                this.owX = true;
                this.$d16 = false;
                if (this.maplet.sS != ts.tz && this.maplet.sS != ts.tA && this.maplet.sS != ts.u4XWR) this.maplet.k93("move", this.S_88R)
            });
            this.ao["ellipse_mouseup"] = MEvent.bindDom(this.S_88R, "mouseup", this, function (e) {
                this.owX = false;
                this.ao["ellipse_mouseover"](e)
            });
            this.ao["ellipse_mousemove"] = MEvent.bindDom(this.S_88R, "mousemove", this, function () {
                if (this.owX && !this.$d16) this.$d16 = true
            })
        }
        this.update()
    };
    this.setBrush = function (a) {
        if (!(a instanceof MBrush)) return;
        this.brush = a;
        if (!jF74S) {
            if (this.S_88R) {
                this.S_88R.strokecolor = a.color;
                this.S_88R.strokeweight = a.stroke + 'px';
                this.S_88R.filled = this.brush.fill;
                this.Ad.opacity = (a.transparency / 100.0);
                this.zY.opacity = ((a.bgtransparency) / 100);
                this.zY.color = a.bgcolor
            }
        } else {
            if (this.S_88R) {
                this.S_88R.setAttribute("stroke", a.color);
                this.S_88R.setAttribute("fill", this.brush.fill ? a.bgcolor : 'none');
                this.S_88R.setAttribute("stroke-width", a.stroke);
                this.S_88R.setAttribute("stroke-opacity", a.transparency / 100);
                this.S_88R.setAttribute("fill-opacity", a.bgtransparency / 100)
            }
        }
    };
    this.update = function () {
        if (this.S_88R) {
            if (!this.gC.maplet) this.gC.initialize(this.maplet);
            if (this.maplet.X7jjM) {
                if (this.maplet.$2J != this.gC.$2J) {
                    this.gC.mapX += this.maplet.B824;
                    this.gC.mapY += this.maplet.DHPs;
                    this.gC.$2J = this.maplet.$2J
                }
            } else {
                this.gC.recalcScreenCoords()
            }
            var a = this.gC.mapX;
            var b = this.gC.mapY;
            var c = parseInt(this.sax / 111111.0 / this.maplet.xg * this.maplet.imgWidth / 0.8);
            var d = c;
            if (this.say) d = parseInt(this.say / 111111.0 / this.maplet.xf * this.maplet.imgHeight);
            this.data.ix = a - c;
            this.data.iy = b - d;
            this.data.ax = a + c;
            this.data.ay = b + d;
            this.data.sax = c;
            this.data.say = d;
            if (!jF74S) {
                this.S_88R.style.left = this.data.ix + "px";
                this.S_88R.style.top = this.data.iy + "px";
                this.S_88R.style.width = c * 2 + "px";
                this.S_88R.style.height = d * 2 + "px"
            } else {
                this.S_88R.setAttribute("cx", a + "px");
                this.S_88R.setAttribute("cy", b + "px");
                this.S_88R.setAttribute("rx", c + "px");
                this.S_88R.setAttribute("ry", d + "px")
            }
        }
    };
    this.finalize = function () {
        this.remove(true)
    };
    this.remove = function (a) {
        for (var b in this.ao) {
            if (b.substring(0, 8) == "ellipse_") {
                if (this.S_88R) MEvent.removeBuiltInListener(this.S_88R, b.substring(8), this.ao[b])
            } else {
                if (this.maplet) MEvent.removeBuiltInListener(this.maplet.map, b, this.ao[b])
            }
            this.ao[b] = null;
            delete this.ao[b]
        }
        if (typeof this.S_88R == "object" && this.S_88R && this.S_88R.parentNode) {
            _removeNode(this.S_88R);
            this.Ad = null;
            this.zY = null;
            this.S_88R = null
        }
        this.zX = null;
        if (this.maplet) {
            if (this.maplet.u5[this.id]) {
                this.maplet.u5[this.id] = null;
                delete this.maplet.u5[this.id]
            }
        }
        if (a) {
            this.ao = null;
            this.maplet = null
        }
    };
    this.openInfoWindow = function (e) {
        if (this.maplet != null) {
            if (this.$d16) {
                if (e.target.id == this.id && this.maplet.b04) {
                    this.maplet.b04 = false
                }
                if (this.maplet.U3551 || (ContentInfo && ContentInfo.isVisible() && avBubble.overlay == this)) return
            }
            if (!this.info || (this.maplet.sS != ts.ty && this.maplet.sS != ts.tu)) return;
            var x = this.gC.mapX;
            var y = this.gC.mapY;
            if (!this.info.getOverlay()) this.info.setOverlay(this);
            var a = true;
            if (typeof e == "undefined") {} else if (e.target.id == this.id && !this.maplet.b04) {
                MEvent.trigger(this, "click", this);
                x = e.clientX - this.maplet.offsetX - this.maplet.left;
                y = e.clientY - this.maplet.offsetY - this.maplet.top
            } else if (e.target.id == this.id && this.maplet.b04) {
                this.maplet.b04 = false;
                a = false
            } else {
                a = false
            }
            if (a) this.maplet.wN(x, y, this.info)
        }
    };
    this.setContextMenu = function (a) {
        if (!a instanceof MContextMenu) return;
        this.contextmenu = a;
        if (a && typeof this.maplet == "object" && this.maplet) {
            if (!this.contextmenu.maplet) {
                this.contextmenu.initialize(this.maplet)
            }
            if (!this.contextmenu.containsOverlay(this)) {
                this.contextmenu.addOverlay(this)
            }
        }
    };
    this.removeContextMenu = function () {
        if (typeof this.contextmenu == "object" && this.contextmenu) {
            this.contextmenu.removeOverlay(this);
            this.contextmenu = null
        }
    };
    this.getContextMenu = function (a) {
        if (!a) return null;
        return this.contextmenu
    }
};
var MRoundRect = function (c, d, f, g, h) {
    this.id = new Date().getTime() + "" + parseInt(Math.random() * 10000) + "RRect";
    this.b6y1 = c;
    this.mV31 = d;
    this.arcsize = typeof f == "number" ? f : 0.1;
    this.width = 0;
    this.height = 0;
    this.brush = (typeof g == "undefined") ? new MBrush() : g;
    this.info = (typeof h == "undefined") ? null : h;
    this.ao = new Array();
    this.zX = null;
    this.rect = null;
    this.M$T = true;
    this.owX = false;
    this.$d16 = false;
    this.creator = MLayer.USER;
    this.initialize = function (a) {
        this.maplet = a;
        if (this.info) {
            this.ao["click"] = MEvent.bindDom(this.maplet.map, "click", this, this.openInfoWindow)
        }
        this.paint()
    };
    this.toString = function () {
        return 'com.mapbar.maplet.MRoundRect'
    };
    this.paint = function () {
        if (!this.rect) {
            this.zX = this.maplet.c1663();
            if (!jF74S) {
                this.rect = document.createElement("v:roundrect");
                this.rect.arcsize = this.arcsize;
                this.Ad = document.createElement("v:stroke");
                this.zY = document.createElement("v:fill");
                this.rect.appendChild(this.Ad);
                this.rect.appendChild(this.zY);
                this.zX.appendChild(this.rect)
            } else {
                this.rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                this.zX.firstChild.appendChild(this.rect)
            }
            this.L06V();
            this.rect.id = this.id;
            $6R(this.rect, "oid", this.id);
            this.rect.style.position = "absolute";
            this.rect.unselectable = "on";
            this.rect.setAttribute(G9kd3, "true");
            this.ao["rect_mouseover"] = MEvent.bindDom(this.rect, "mouseover", this, function () {
                if (this.maplet.sS == ts.tz || this.maplet.sS == ts.tA || this.maplet.sS == ts.u4XWR) this.maplet.k93("crosshair", this.rect);
                else if (this.info || MEvent.contains(this, "click")) this.maplet.k93("pointer", this.rect);
                else this.maplet.k93("default", this.rect)
            });
            this.ao["rect_mouseout"] = MEvent.bindDom(this.rect, "mouseout", this, function () {
                if (this.maplet.sS != ts.tz && this.maplet.sS != ts.tA && this.maplet.sS != ts.u4XWR) this.maplet.k93("default", this.rect)
            });
            this.ao["rect_mousedown"] = MEvent.bindDom(this.rect, "mousedown", this, function () {
                this.owX = true;
                this.$d16 = false;
                if (this.maplet.sS != ts.tz && this.maplet.sS != ts.tA && this.maplet.sS != ts.u4XWR) this.maplet.k93("move", this.rect)
            });
            this.ao["rect_mouseup"] = MEvent.bindDom(this.rect, "mouseup", this, function (e) {
                this.owX = false;
                this.ao["rect_mouseover"](e)
            });
            this.ao["rect_mousemove"] = MEvent.bindDom(this.rect, "mousemove", this, function () {
                if (this.owX && !this.$d16) this.$d16 = true
            })
        }
        this.update()
    };
    this.update = function () {
        if (this.rect) {
            if (!this.b6y1.maplet) this.b6y1.initialize(this.maplet);
            if (!this.mV31.maplet) this.mV31.initialize(this.maplet);
            if (this.maplet.X7jjM) {
                if (this.maplet.$2J != this.b6y1.$2J) {
                    this.b6y1.mapX += this.maplet.B824;
                    this.b6y1.mapY += this.maplet.DHPs;
                    this.b6y1.$2J = this.maplet.$2J
                }
                if (this.maplet.$2J != this.mV31.$2J) {
                    this.mV31.mapX += this.maplet.B824;
                    this.mV31.mapY += this.maplet.DHPs;
                    this.mV31.$2J = this.maplet.$2J
                }
            } else {
                this.b6y1.recalcScreenCoords();
                this.mV31.recalcScreenCoords()
            }
            var x = this.b6y1.mapX;
            var y = this.b6y1.mapY;
            this.width = Math.abs(this.mV31.mapX - x);
            this.height = Math.abs(this.mV31.mapY - y);
            if (!jF74S) {
                this.rect.style.left = x + "px";
                this.rect.style.top = y + "px";
                this.rect.style.width = this.width + "px";
                this.rect.style.height = this.height + "px"
            } else {
                this.rect.setAttribute("x", x + "px");
                this.rect.setAttribute("y", y + "px");
                this.rect.setAttribute("width", this.width + "px");
                this.rect.setAttribute("height", this.height + "px");
                this.rect.setAttribute("ry", this.height * this.arcsize)
            }
        }
    };
    this.finalize = function () {
        this.remove(true)
    };
    this.remove = function (a) {
        for (var b in this.ao) {
            if (b.substring(0, 5) == "rect_") {
                if (this.rect) MEvent.removeBuiltInListener(this.rect, b.substring(5), this.ao[b])
            } else {
                if (this.maplet) MEvent.removeBuiltInListener(this.maplet.map, b, this.ao[b])
            }
            this.ao[b] = null;
            delete this.ao[b]
        }
        if (typeof this.rect == "object" && this.rect && this.rect.parentNode) {
            _removeNode(this.rect);
            this.rect = null
        }
        this.zX = null;
        if (this.maplet) {
            if (this.maplet.u5[this.id]) {
                this.maplet.u5[this.id] = null;
                delete this.maplet.u5[this.id]
            }
        }
        if (a) {
            this.ao = null;
            this.maplet = null
        }
    };
    this.openInfoWindow = function (e) {
        if (this.maplet != null) {
            if (this.$d16) {
                if (e.target.id == this.id && this.maplet.b04) {
                    this.maplet.b04 = false
                }
                if (this.maplet.U3551 || (ContentInfo && ContentInfo.isVisible() && avBubble.overlay == this)) return
            }
            if (!this.info || (this.maplet.sS != ts.ty && this.maplet.sS != ts.tu)) return;
            var x = 0;
            var y = 0;
            if (!this.info.getOverlay()) this.info.setOverlay(this);
            var a = true;
            if (typeof e == "undefined") {
                x = this.b6y1.mapX + this.width / 2;
                y = this.b6y1.mapY + this.height / 2
            } else if (e.target.id == this.id && !this.maplet.b04) {
                MEvent.trigger(this, "click", this);
                x = e.clientX - this.maplet.offsetX - this.maplet.left;
                y = e.clientY - this.maplet.offsetY - this.maplet.top
            } else if (e.target.id == this.id && this.maplet.b04) {
                this.maplet.b04 = false;
                a = false
            } else {
                a = false
            }
            if (a) this.maplet.wN(x, y, this.info)
        }
    };
    this.getCenterXY = function () {
        var a = this.b6y1.mapX + this.width / 2;
        var b = this.b6y1.mapY + this.height / 2;
        return {
            x: a,
            y: b
        }
    };
    this.setBrush = function (a) {
        if (!(a instanceof MBrush)) return;
        this.brush = a;
        this.L06V()
    };
    this.L06V = function () {
        if (!jF74S) {
            if (this.rect && this.Ad && this.zY) {
                this.rect.strokecolor = this.brush.color;
                this.rect.strokeweight = this.brush.stroke + 'px';
                this.rect.filled = this.brush.fill;
                this.Ad.opacity = (this.brush.transparency / 100.0);
                this.Ad.dashstyle = parseInt(this.brush.style) ? "dash" : "";
                this.zY.opacity = ((this.brush.bgtransparency) / 100);
                this.zY.color = this.brush.bgcolor
            }
        } else {
            if (this.rect) {
                this.rect.setAttribute("stroke", this.brush.color);
                this.rect.setAttribute("fill", this.brush.fill ? this.brush.bgcolor : 'none');
                this.rect.setAttribute("stroke-width", this.brush.stroke);
                this.rect.setAttribute("stroke-opacity", this.brush.transparency / 100);
                this.rect.setAttribute("fill-opacity", this.brush.bgtransparency / 100);
                this.rect.setAttribute("style", parseInt(this.brush.style) ? "stroke-dasharray:10,15" : "")
            }
        }
    };
    this.setContextMenu = function (a) {
        if (!a instanceof MContextMenu) return;
        this.contextmenu = a;
        if (a && typeof this.maplet == "object" && this.maplet) {
            if (!this.contextmenu.maplet) {
                this.contextmenu.initialize(this.maplet)
            }
            if (!this.contextmenu.containsOverlay(this)) {
                this.contextmenu.addOverlay(this)
            }
        }
    };
    this.removeContextMenu = function () {
        if (typeof this.contextmenu == "object" && this.contextmenu) {
            this.contextmenu.removeOverlay(this);
            this.contextmenu = null
        }
    };
    this.getContextMenu = function (a) {
        if (!a) return null;
        return this.contextmenu
    }
};
var MLabel = function (d, e, f, g, h) {
    this.label = d;
    if (typeof e == "object" && e) h = e;
    if (typeof h != "object" || !h) h = {};
    if (typeof e == "object" && e) {
        if ("number,string".indexOf(typeof h.xoffset) == -1) h.xoffset = undefined;
        if ("number,string".indexOf(typeof h.yoffset) == -1) h.yoffset = undefined;
        if ("number,string".indexOf(typeof h.opacity) == -1) h.opacity = undefined
    } else {
        h.xoffset = e;
        h.yoffset = f;
        h.opacity = g
    }
    if (typeof h.enableStyle != "boolean") h.enableStyle = true;
    if (typeof h.visible != "boolean") h.visible = true;
    var i = false;
    this.visible = h.visible;
    this.xoffset = (typeof h.xoffset == "undefined") ? null : parseInt(h.xoffset);
    this.yoffset = (typeof h.yoffset == "undefined") ? null : parseInt(h.yoffset);
    this.opacity = typeof h.opacity != "undefined";
    this.div = document.createElement("div");
    if (h.enableStyle) this.div.className = "tiplabel";
    this.div.style.left = "-1000px";
    this.div.style.top = "-1000px";
    this.div.unselectable = "on";
    this.div.style.zIndex = 10;
    this.div.style.position = "absolute";
    if (px && typeof h.opacity != "undefined") {
        this.div.style.filter = "alpha( opacity = " + parseInt(h.opacity) + " )"
    } else if (!px && typeof h.opacity != "undefined") {
        this.div.style.MozOpacity = parseInt(h.opacity) / 100
    }
    this.sW = null;
    this.wz = function (a) {
        this.div.id = "mk_label_" + a
    };
    this.setContextMenu = function (a) {};
    this.initialize = function (a) {
        this.sW = a
    };
    this.update = function (a, b, c) {
        if (this.div.parentNode != a.lA.div && !this.sW.ls) {
            if (typeof this.label == "string") {
                this.div.innerHTML = this.label
            } else {
                this.div.appendChild(this.label)
            }
            a.lA.appendChild(this.div)
        }
        if (this.xoffset == null) this.xoffset = this.sW.icon.width;
        if (this.yoffset == null) this.yoffset = this.sW.icon.height / 2 - this.div.offsetHeight / 2;
        if (!i) {
            this.div.style.display = this.visible ? "" : "none";
            i = true
        }
        this.div.style.left = (parseInt(b) + this.xoffset) + "px";
        this.div.style.top = (parseInt(c) + this.yoffset) + "px"
    };
    this.finalize = function () {
        this.remove(true)
    };
    this.remove = function (a) {
        if (typeof a != "boolean") a = false;
        if (this.div) {
            if (!a) {
                if (this.div.parentNode) this.div.parentNode.removeChild(this.div)
            } else {
                _removeNode(this.div);
                this.div = null
            }
        }
        if (a) this.sW = null
    };
    this.toString = function () {
        return 'com.mapbar.maplet.MLabel'
    };
    this.$5577 = this.div.style.zIndex;
    this.setZIndex = function (a) {
        if (this.div && this.div.parentNode && a != this.div.style.zIndex) {
            this.$5577 = this.div.style.zIndex;
            this.div.style.zIndex = a
        }
    };
    this._b68 = function () {
        if (!this.div) return;
        if (this.$5577 != this.div.style.zIndex) this.setZIndex(this.$5577)
    };
    this.setVisible = function (a) {
        if (a != (this.div.style.display == "none" ? false : true)) {
            this.div.style.display = a ? "" : "none";
            this.visible = a
        }
    };
    this.resetLabel = function (a) {
        if (typeof a != "object" || !a) return;
        var b = parseInt(this.div.style.left);
        var c = parseInt(this.div.style.top);
        if (a.content) {
            this.label = a.content;
            this.div.innerHTML = "";
            if (typeof a.content == "string") {
                this.div.innerHTML = this.label
            } else {
                this.div.appendChild(this.label)
            }
        }
        if (typeof a.enableStyle == "boolean") {
            this.div.className = a.enableStyle ? "tiplabel" : ""
        }
        if ("number,string".indexOf(typeof a.xoffset) != -1) this.xoffset = parseInt(a.xoffset);
        else if (typeof a.xoffset == "object" && a.xoffset == null) this.xoffset = null;
        if ("number,string".indexOf(typeof a.yoffset) != -1) this.yoffset = parseInt(a.yoffset);
        else if (typeof a.yoffset == "object" && a.yoffset == null) this.yoffset = null;
        if ("number,string".indexOf(typeof a.opacity) != -1) {
            if (px && typeof a.opacity != "undefined") {
                this.div.style.filter = "alpha( opacity = " + parseInt(a.opacity) + " )"
            } else if (!px && typeof a.opacity != "undefined") {
                this.div.style.MozOpacity = parseInt(a.opacity) / 100
            }
        }
        this.update(this.sW.maplet, this.sW.icon.left, this.sW.icon.top)
    };
    this.getText = function () {
        var a = "";
        var s = this.div.innerHTML;
        if (s.indexOf(Maplet.MLABEL_TEXT_FLAG) != -1) {
            var b = new RegExp(Maplet.MLABEL_TEXT_FLAG + "=\"?([^\"\t ]*)", "gi");
            var c = b.exec(s);
            if (c != null) a = c[1]
        } else if (s != "") {
            a = d8k(s)
        } else {
            a = s
        }
        return a
    }
};
var MInfoWindow = function (d, e, f, g) {
    this.title = d;
    this.content = cG$$g(e, true);
    this.yd = (typeof f != "undefined" && "mouseover" == f.toLowerCase()) ? "mouseover" : "click";
    this.options = g || {};
    if (typeof this.options.xoffset != "number") this.options.xoffset = 0;
    if (typeof this.options.yoffset != "number") this.options.yoffset = 0;
    this.U6359 = {
        LD6: false,
        width: 0,
        height: 0
    };
    this.gv = function (x, y) {
        MEvent.trigger(this.getOverlay(), "iw_beforeopen", this.getOverlay(), x, y);
        if (this.getOverlay().maplet.customInfoWindow) return null;
        avBubble.overlay = this.getOverlay();
        var b = gp(this.title, x, y, this.content);
        this.setTabs(k);
        return b
    };
    var j = null;
    this.setOverlay = function (a) {
        j = a
    };
    this.getOverlay = function () {
        return j
    };
    this.toString = function () {
        return 'com.mapbar.maplet.MInfoWindow'
    };
    this.setTitle = function (a, b, c) {
        this.title = a;
        if (ContentInfo) {
            ContentInfo.setTitle(a);
            this.U6359.LD6 = false;
            if (typeof b != "boolean") b = true;
            if (typeof c != "boolean") c = false;
            if (b) X63g$(c)
        }
    };
    this.setContent = function (c, a, b) {
        this.content = cG$$g(c, true);
        if (ContentInfo) {
            ContentInfo.setContent(c);
            this.U6359.LD6 = false;
            if (typeof a != "boolean") a = true;
            if (typeof b != "boolean") b = true;
            if (a) X63g$(b)
        }
    };
    this.zoomTo = function (a, w, h) {
        if (a == "zoomin") this.zoomIn(w, h);
        else if (a == "zoomout") this.zoomOut(w, h)
    };
    this.zoomOut = function (w, h) {
        if (ContentInfo && typeof ContentInfo.onZoomOut == "function") {
            ContentInfo.onZoomOut(w, h)
        }
    };
    this.zoomIn = function (w, h) {
        if (ContentInfo && typeof ContentInfo.onZoomIn == "function") {
            ContentInfo.onZoomIn(w, h)
        }
    };
    this.getBodySize = function () {
        var a = {
            width: 0,
            height: 0
        };
        if (ContentInfo) {
            return ContentInfo.bK063()
        }
        return a
    };
    this.setZMBtnVisible = function (a) {
        if (ContentInfo) {
            ContentInfo.setZMBtnVisible(a)
        } else {
            avBubble.JvY = a
        }
    };
    this.getZMBtnVisible = function () {
        return ContentInfo && ContentInfo.h98()
    };
    var k = [];
    this.setTabs = function (a) {
        if (t63s(a)) k = a;
        if (ContentInfo && ContentInfo.isVisible() && (j && avBubble.overlay.id == j.id) && k.length > 0) {
            for (var i = 0; i < a.length; i++) {
                ContentInfo.NB9(a[i].clone())
            }
            this.U6359.LD6 = false;
            X63g$()
        }
    };
    this.getTabs = function () {
        return k
    };
    this.clearTabs = function () {
        k = [];
        if (ContentInfo && ContentInfo.isVisible()) {
            ContentInfo.F4p();
            if (j && avBubble.overlay.id == j.id) {
                this.U6359.LD6 = false;
                X63g$()
            }
        }
    };
    this.setCurrentTab = function (a) {
        if (ContentInfo) {
            ContentInfo.setCurrentTab(a)
        }
    };
    this.getCurrentTab = function () {
        if (ContentInfo && ContentInfo.tabIndex != -1) {
            return ContentInfo.A3M1[ContentInfo.tabIndex]
        } else {
            return null
        }
    };
    this.finalize = function () {
        this.clearTabs();
        xInoP(this)
    }
};
var ContentInfo = null;
var gp = function (l, m, n, o) {
    hideBubble(maplet);
    avBubble.calcLatLon();
    if (ContentInfo == null) {
        ContentInfo = new P2GE(maplet);
        ContentInfo.initialize();
        ContentInfo.onClosed = function () {
            avBubble.X16 = false;
            avBubble.N$G7W = false;
            avBubble._7r = false;
            MEvent.trigger(maplet, "iw_hide", avBubble.overlay);
            maplet.viewOverlay(avBubble.overlay, 50, 50)
        };
        ContentInfo.onZoomOut = function (w, h) {
            MEvent.trigger(avBubble.overlay, "bubble_zoomout", avBubble.overlay);
            var a = {
                width: avBubble.width,
                height: avBubble.height
            };
            if (avBubble.overlay.info && avBubble.overlay.info.U6359.width > 0) a = avBubble.overlay.info.U6359;
            if (w) {
                if (w < avBubble.minWidth) w = avBubble.minWidth;
                a.width = w
            }
            if (h) {
                if (h < avBubble.minHeight) h = avBubble.minHeight;
                a.height = h
            }
            ContentInfo.width = a.width;
            ContentInfo.height = a.height;
            ContentInfo.NFi_4("zoomin");
            avBubble.rlcv8 = true;
            var b = maplet.viewOverlay(avBubble.overlay, 50, 50);
            if (b.tSu0 == 0 && b.e8jNA == 0) maplet.refresh();
            avBubble._7r = false;
            avBubble.C1o6 = "out"
        };
        ContentInfo.onZoomIn = function (w, h) {
            var a = avBubble.overlay;
            MEvent.trigger(a, "bubble_zoomin", avBubble.overlay);
            w = $9tU(w, null);
            h = $9tU(h, null);
            var b = maplet.getMaxBubbleSize();
            if (w && w < b.width) b.width = w;
            if (h && h < b.height) b.height = h;
            var c = 0;
            var d = 0;
            if (typeof a == "object" && a) {
                if (a.toString().indexOf("MMarker") != -1) {
                    if (a.icon) {
                        c = a.icon.height;
                        d = a.icon.width;
                        b.height -= c;
                        b.width -= d
                    }
                } else {
                    c = 50;
                    b.height -= c
                }
            }
            var e = maplet.toScreenCoordinate(avBubble.pD0);
            var f = ContentInfo.g9n0$(e[0], e[1], b.width, b.height, "top", true, true, a);
            avBubble.Vm1Jf = f.lcC_7;
            avBubble.left = f.Ww5tR;
            avBubble.top = f.iYKQ;
            avBubble.rlcv8 = true;
            ContentInfo.show(f, null);
            ContentInfo.NFi_4("zoomout");
            var g = f.Ww5tR;
            var i = f.iYKQ;
            var j = g + f.width;
            var k = i + f.height;
            with(f.arrow) {
                if (dir == "left") {
                    g = g - d - f.arrow.width
                } else if (dir == "right") {
                    j = j + d + f.arrow.width
                } else if (dir == "top") {
                    i = i - c - f.arrow.height
                } else if (dir == "bottom") {
                    k = k + c + f.arrow.height
                }
            }
            maplet.nH_({
                jpl: g,
                qp5pK: i,
                i8L3: j,
                R53: k,
                x9W07: 10,
                c9566: 10
            }, {
                AYu0v: true,
                $52x8: true,
                d81C3: false
            });
            avBubble._7r = true;
            avBubble.C1o6 = "in"
        }
    } else {}
    avBubble.X16 = false;
    avBubble.N$G7W = false;
    ContentInfo.F4p();
    var p = {
        width: 0,
        height: 0
    };
    if (avBubble.overlay.info.U6359.LD6) {
        p.width = avBubble.overlay.info.U6359.width;
        p.height = avBubble.overlay.info.U6359.height;
        ContentInfo.setTitle(l);
        ContentInfo.setContent(o)
    } else {
        p = ContentInfo.e1F5V(l, o);
        if (p.width == 0) {
            p = {
                width: avBubble.width,
                height: avBubble.height
            }
        } else {
            if (p.width < avBubble.minWidth) p.width = avBubble.minWidth;
            if (p.height < avBubble.minHeight) p.height = avBubble.minHeight;
            var q = maplet.getMaxBubbleSize();
            if (p.width > q.width) p.width = q.width;
            if (p.height > q.height) p.height = q.height
        }
        avBubble.overlay.info.U6359.width = p.width;
        avBubble.overlay.info.U6359.height = p.height;
        avBubble.overlay.info.U6359.LD6 = true
    }
    var r = ContentInfo.g9n0$(m, n, p.width, p.height, avBubble.tipInitPlace, avBubble.X16, avBubble.N$G7W, avBubble.overlay);
    avBubble.Vm1Jf = r.lcC_7;
    avBubble.left = r.Ww5tR;
    avBubble.top = r.iYKQ;
    avBubble.head = l;
    avBubble.body = o;
    ContentInfo.show(r, avBubble.JvY, true, avBubble.overlay.info.options.xoffset, avBubble.overlay.info.options.yoffset);
    if (maplet.fa) {
        ContentInfo.setVisible(false);
        avBubble.L0l = true
    }
    var s = 0;
    var t = 0;
    if (r.kS5) {
        avBubble.pD0 = avBubble.overlay.pt.getPid();
        if (avBubble.overlay.icon) {
            s = avBubble.overlay.icon.width;
            t = avBubble.overlay.icon.height
        }
    } else {
        avBubble.pD0 = maplet.toMapCoordinate(m, n)
    }
    if (avBubble.JvY != null) avBubble.JvY = null;
    var u = r.Ww5tR;
    var v = r.iYKQ;
    var x = u + r.width;
    var y = v + r.height;
    with(r.arrow) {
        if (dir == "left") {
            u = u - s - r.arrow.width
        } else if (dir == "right") {
            x = x + s + r.arrow.width
        } else if (dir == "top") {
            v = v - t - r.arrow.height
        } else if (dir == "bottom") {
            y = y + t + r.arrow.height
        }
    }
    maplet.nH_({
        jpl: u,
        qp5pK: v,
        i8L3: x,
        R53: y,
        x9W07: 10,
        c9566: 10
    });
    MEvent.trigger(avBubble.overlay, "iw_afteropen", avBubble.overlay);
    return ContentInfo.dom
};

function X63g$(a) {
    if (!ContentInfo || !ContentInfo.isVisible()) return;
    if (typeof a != "boolean") a = false;
    var b = maplet.toScreenCoordinate(avBubble.pD0);
    var r = ContentInfo.getRect(false, false);
    if (a) {
        var c = ContentInfo.e1F5V(avBubble.overlay.info.title, avBubble.overlay.info.content);
        if (c.width == 0) {
            c = {
                width: r.width,
                height: r.height
            }
        } else {
            if (c.width < avBubble.minWidth) c.width = avBubble.minWidth;
            if (c.height < avBubble.minHeight) c.height = avBubble.minHeight;
            var d = maplet.getMaxBubbleSize();
            if (c.width > d.width) c.width = d.width;
            if (c.height > d.height) c.height = d.height
        }
        avBubble.overlay.info.U6359.width = c.width;
        avBubble.overlay.info.U6359.height = c.height;
        r.width = c.width;
        r.height = c.height
    }
    var e = ContentInfo.g9n0$(b[0], b[1], r.width, r.height, avBubble.Vm1Jf, avBubble.X16, avBubble.N$G7W, avBubble.overlay);
    ContentInfo.show(e, avBubble.JvY, true, avBubble.overlay.info.options.xoffset, avBubble.overlay.info.options.yoffset);
    r = ContentInfo.getRect();
    if (!avBubble._7r) {
        avBubble.overlay.info.U6359.width = r.width;
        avBubble.overlay.info.U6359.height = r.height
    }
    var f = 0;
    var g = 0;
    if (e.kS5 && avBubble.overlay.icon) {
        f = avBubble.overlay.icon.width;
        g = avBubble.overlay.icon.height
    }
    var h = r.min.x;
    var i = r.min.y;
    var j = r.max.x;
    var k = r.max.y;
    with(e.arrow) {
        if (dir == "left") {
            h = h - f
        } else if (dir == "right") {
            j = j + f
        } else if (dir == "top") {
            i = i - g
        } else if (dir == "bottom") {
            k = k + g
        }
    }
    maplet.fa = false;
    maplet.nH_({
        jpl: h,
        qp5pK: i,
        i8L3: j,
        R53: k,
        x9W07: 10,
        c9566: 10
    })
};

function hideBubble(a) {
    if (!ContentInfo) return;
    if (ContentInfo.isVisible()) {
        ContentInfo.setVisible(false);
        MEvent.trigger(a, "iw_hide", avBubble.overlay)
    }
    if (typeof a != "undefined" && a.fp != null) {
        a.fp = null;
        a.refresh()
    } else if (document["mapbar-maplet"] != "undefined" && document["mapbar-maplet"].fp != null) {
        document["mapbar-maplet"].fp = null;
        document["mapbar-maplet"].refresh()
    }
    ContentInfo.NFi_4("zoomin")
};
var _s523 = function () {
    this.xR = "";
    this.JvY = false;
    this.left = 0;
    this.top = 0;
    this.head = new String();
    this.body = new String();
    this.width = 260;
    this.height = 240;
    this.overlay = null;
    this.arrow_tip_xoffset = 27;
    this.arrow_tip_yoffset = 3;
    this.xoffset = 0;
    this.pD0 = "";
    this.tipInitPlace = "top";
    this.Vm1Jf = "auto";
    this.X16 = false;
    this.N$G7W = false;
    this.T_y = true;
    this.L0l = false;
    this._X8 = "";
    this.dng4 = "";
    this.rlcv8 = false;
    this.C1o6 = "";
    this.minWidth = 100;
    this.minHeight = 60;
    this.Co_X = true;
    this._7r = false;
    this.u498d = function (a) {
        this.head = a
    };
    this.F22n = function (a) {
        this.body = a
    };
    this.gl = function () {};
    this.calcLatLon = function () {
        this.xR = maplet.toMapCoordinate(this.left, this.top)
    };
    this.syncContentInfoPosition = function () {
        if (ContentInfo) {
            this.left = ContentInfo.q3;
            this.top = ContentInfo.zt
        }
    };
    this.k2iB = function () {
        if (ContentInfo) {
            if (!px) ContentInfo.qc2f(false);
            if (this.pD0 && (this.L0l || ContentInfo.isVisible())) {
                if (this.L0l) this.L0l = false;
                if (this.T_y) {
                    var a = maplet.toScreenCoordinate(this.pD0);
                    avBubble.X16 = true;
                    var b = ContentInfo.g9n0$(a[0], a[1], ContentInfo.width, ContentInfo.height, avBubble.Vm1Jf, avBubble.X16, this.N$G7W, avBubble.overlay, false, false);
                    this.Vm1Jf = b.lcC_7;
                    ContentInfo.show(b, null, this.rlcv8, avBubble.overlay.info.options.xoffset, avBubble.overlay.info.options.yoffset);
                    if (this.rlcv8) this.rlcv8 = false;
                    if (this.C1o6 != "" && this.overlay) {
                        MEvent.trigger(this.overlay, "bubble_zoomend", this.C1o6 == "in" ? "out" : "in");
                        if (this.overlay.info) MEvent.trigger(maplet, "iw_zoomend", this.overlay.info, this.C1o6 == "in" ? "zoomin" : "zoomout");
                        if (this.C1o6 == "in") {
                            this.X16 = true;
                            this.N$G7W = true
                        } else {
                            this.X16 = false;
                            this.N$G7W = false
                        }
                        this.C1o6 = ""
                    }
                } else {
                    this.T_y = true
                }
            }
        }
    }
};
var avBubble = new _s523();
var MInfoWindowTab = function (b, c, d) {
    var e = b;
    var f = c;
    var g = null;
    var h = 0;
    var i = true;
    this.bj6 = typeof d != "boolean" ? false : d;
    this.$1K = -1;
    this._p0 = [];
    this.setVisible = function (a) {
        i = a
    };
    this.L8Y29 = function () {
        return i
    };
    this.$B3 = function (a) {
        h = a
    };
    this.getIndex = function () {
        return h
    };
    this.setLabel = function (a) {
        e = a
    };
    this.getLabel = function () {
        return e
    };
    this.setContent = function (a) {
        f = a
    };
    this.getContent = function () {
        return f
    };
    this.toString = function () {
        return "com.mapbar.maplet.MInfoWindowTab"
    };
    this.HW4H = function (a) {
        g = a
    };
    this.QuK = function () {
        return g
    };
    this.clone = function () {
        return new MInfoWindowTab(this.getLabel(), this.getContent(), this.bj6)
    };
    this.rXK8 = function () {
        g = null;
        i = false;
        $1K = -1
    }
};
MInfoWindowTab.w7sI = function (a) {
    return typeof a == "object" && a && typeof a.toString == "function" && a.toString().indexOf("MInfoWindowTab") != -1
};
var P2GE = function (T) {
    var U = T;
    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;
    this.content = "";
    this.dom = null;
    this.Mng90 = null;
    this.V491U = null;
    this.GY1 = null;
    this.U3K7 = null;
    this.smnK = null;
    this.f0_ = null;
    this.R088 = null;
    this.j5G8 = null;
    this.nOje = null;
    this.Ge008 = [];
    this.uw8XR = null;
    this.J1fS = null;
    this.KP0j = "";
    this.A3M1 = [];
    this.tabIndex = -1;
    this.W26v = 0;
    this.JsY = 0;
    this.W7$y = 0;
    this.w7c = 0;
    this.y146H = 0;
    this.j5Ex = null;
    this.onZoomOut = null;
    this.onZoomIn = null;
    this.onClosed = null;
    this.x1q = null;
    this.Rumn = null;
    this.X7770 = null;
    this.sv1B = {
        type: "zoomin",
        q9: null
    };
    this.y66ie = 0;
    this.u6U5 = 0;
    this.initialize = function () {
        this.dom = document.createElement("TABLE");
        this.dom.cellSpacing = 0;
        this.dom.cellPadding = 0;
        this.dom.border = 0;
        this.dom.style.cssText = this.L70$("TIP_TABLE");
        this.dom.setAttribute(Mq_mL, true);
        var a = this.dom.insertRow(-1);
        var b = a.insertCell(-1);
        b.vAlign = "top";
        b.style.cssText = this.L70$("TITLE_CONTAINER_TD");
        this.Mng90 = this.pk46();
        b.appendChild(this.Mng90);
        b = this.dom.insertRow(-1).insertCell(-1);
        b.style.cssText = this.L70$("TAB_TD");
        this.smnK = this.C62();
        this.smnK.style.cssText = this.L70$("TAB_CONTAINER");
        b.appendChild(this.smnK);
        this.smnK.style.display = "none";
        this.dom.rows[1].style.display = "none";
        a = this.dom.insertRow(-1);
        b = a.insertCell(-1);
        b.vAlign = "top";
        b.style.cssText = this.L70$("CONTENT_TD");
        this.nOje = this.If6();
        b.appendChild(this.nOje);
        this.RTH();
        var c = U ? U.sF : document.body;
        c.appendChild(this.dom);
        c.appendChild(this.e645());
        for (var i = 0; i < this.Ge008.length; i++) {
            c.appendChild(this.Ge008[i])
        }
        c.appendChild(this._4X6N())
    };
    this._4X6N = function () {
        this.J1fS = document.createElement("DIV");
        this.J1fS.style.cssText = this.L70$("TIP_BORDER");
        return this.J1fS
    };
    this.e645 = function () {
        this.uw8XR = document.createElement("DIV");
        this.uw8XR.style.cssText = this.L70$("ARROW_DIV");
        return this.uw8XR
    };
    this.If6 = function () {
        var a = document.createElement("DIV");
        a.style.cssText = this.L70$("CONTENT_DIV");
        return a
    };
    this.RTH = function () {
        if (this.dom) {
            var a = this.L70$("SHADOW_AMOUNT");
            for (var i = 0; i < a; i++) {
                var b = document.createElement("DIV");
                b.id = "_iw_shadow_" + i;
                b.style.cssText = this.L70$("SHADOW_DIV");
                b.setAttribute(G9kd3, "true");
                if (window.attachEvent) b.style.filter = "alpha(opacity=" + (this.L70$("SHADOW_OPACITY")[i] * 100) + ");";
                else b.style.opacity = this.L70$("SHADOW_OPACITY")[i];
                b.style.zIndex = this.L70$("TIP_DEFAULT_INFO").zIndex - (i + 1);
                b.onmousedown = function () {
                    return false
                };
                this.Ge008.push(b)
            }
        }
    };
    this.C62 = function () {
        var a = document.createElement("UL");
        this.R088 = document.createElement("LI");
        this.R088.style.cssText = this.L70$("TAB_NAV_L");
        this.f0_ = document.createElement("LI");
        this.f0_.style.cssText = this.L70$("TAB_SPACER");
        this.j5G8 = document.createElement("LI");
        this.j5G8.style.cssText = this.L70$("TAB_NAV_R");
        a.appendChild(this.R088);
        a.appendChild(this.f0_);
        a.appendChild(this.j5G8);
        return a
    };
    this.pk46 = function () {
        var a = this.L70$("TITLE_INFO");
        var b = document.createElement("TABLE");
        b.width = "100%";
        b.cellSpacing = 0;
        b.cellPadding = 0;
        b.border = 0;
        b.style.cssText = this.L70$("TITLE_TABLE");
        var c = b.insertRow(-1);
        this.V491U = c.insertCell(-1);
        this.V491U.vAlign = "top";
        this.V491U.style.cssText = this.L70$("TITLE_TD");
        var d = c.insertCell(-1);
        d.style.cssText = this.L70$("TITLE_SPACER");
        d.innerHTML = "&nbsp;";
        this.GY1 = c.insertCell(-1);
        this.GY1.vAlign = "top";
        this.GY1.style.cssText = this.L70$("RT_BTN_TD");
        this.GY1.innerHTML = this.L70$("ZOOMIN_IMG");
        this.GY1.style.width = "0px";
        this.lDW32();
        this.U3K7 = c.insertCell(-1);
        this.U3K7.vAlign = "top";
        this.U3K7.style.cssText = this.L70$("RT_BTN_TD");
        this.U3K7.innerHTML = this.L70$("CLOSE_IMG");
        this.x1q = MEvent.bindDom(this.U3K7, "click", this, this.o1Q);
        return b
    };
    this.bK063 = function () {
        return {
            width: this.J1fS.offsetWidth,
            height: this.J1fS.offsetHeight
        }
    };
    this.getRect = function (a, b) {
        if (typeof a != "boolean") a = true;
        if (typeof b != "boolean") b = true;
        var c = a ? this.J1fS : this.dom;
        var d = $9tU(this.dom.style.left);
        var e = $9tU(this.dom.style.top);
        var f = d + this.dom.offsetWidth;
        var g = e + this.dom.offsetHeight;
        if (b) {
            if (this.KP0j == "LEFT") {
                d = $9tU(this.uw8XR.style.left)
            } else if (this.KP0j == "RIGHT") {
                f += this.uw8XR.offsetWidth
            } else if (this.KP0j == "TOP") {
                e = $9tU(this.uw8XR.style.top)
            } else if (this.KP0j == "BOTTOM") {
                g += this.uw8XR.offsetHeight
            }
        }
        return {
            min: {
                x: d,
                y: e
            },
            max: {
                x: f,
                y: g
            },
            width: f - d,
            height: g - e
        }
    };
    this.e1F5V = function (a, b) {
        if (!this.dom) this.initialize();
        var d = -100000;
        var e = {
            Ww5tR: d,
            iYKQ: d,
            wa0Rs: d,
            n4y3f: d,
            width: avBubble.minWidth,
            height: avBubble.minHeight,
            arrow: {
                dir: "left"
            }
        };
        this.show(e, null, false);
        this.setTitle(a);
        this.setContent(b);
        this.qc2f(true);
        var h = 0;
        var w = 0;
        var c = this.nOje.firstChild;
        if (c && c.offsetWidth && this.nOje.childNodes.length == 1 && (_getStyle(c, "width") != "auto" || c.tagName == "IMG")) {
            w = c.offsetWidth + $9tU(_getStyle(c, "marginLeft", "margin-left")) + $9tU(_getStyle(c, "marginRight", "margin-right"));
            h = c.offsetHeight + $9tU(_getStyle(c, "marginTop", "margin-top")) + $9tU(_getStyle(c, "marginBottom", "margin-bottom"));
            if (px) {
                if (!f$uP7) {
                    w = w + $9tU(_getStyle(this.nOje, "paddingLeft", "padding-left")) * 2;
                    h = h + $9tU(_getStyle(this.nOje, "paddingTop", "padding-top")) * 2
                } else {
                    h += 1
                }
            }
            this.nOje.style.width = w + "px";
            this.nOje.style.height = h + "px";
            this.dom.style.width = this.nOje.offsetWidth + $9tU(this.dom.style.borderWidth) * 2 + "px";
            h = this.dom.offsetHeight;
            w = this.dom.offsetWidth
        }
        this.qc2f(false);
        this.setVisible(false);
        return {
            width: w,
            height: h
        }
    };
    this.g9n0$ = function (x, y, a, b, c, d, e, f, g, h) {
        if (typeof a != "number") a = this.L70$("TIP_DEFAULT_INFO").width;
        if (typeof b != "number") b = this.L70$("TIP_DEFAULT_INFO").height;
        if (typeof c != "string") c = "auto";
        if (typeof d != "boolean") d = false;
        if (typeof e != "boolean") e = false;
        if (typeof g != "boolean") g = true;
        if (typeof h != "boolean") h = true;
        var i = 0;
        var j = 0;
        var k = 0;
        var l = 0;
        var m = "right";
        var n = 0;
        var o = 0;
        var p = false;
        var q = false;
        if (U) {
            var r = U.width;
            var t = U.height;
            var u = this.L70$("ARROW_INFO");
            var v = a + u.q9Q;
            var w = b + u.i17;
            var z = a / 2;
            var A = b / 2;
            var B = 0;
            var C = 0;
            if (typeof f == "object" && f) {
                var s = f.toString();
                p = s.indexOf("MMarker") != -1;
                q = s.indexOf("MPolyline") != -1
            }
            if (p && f.icon) {
                B = f.icon.width / 2;
                C = f.icon.height / 2;
                x = x - f.icon.anchorX + B;
                y = y - f.icon.anchorY + C
            }
            if (e) {
                j = y - A;
                i = x - z
            } else {
                if (y - A <= 0) j = 5;
                else if (y + A > t) j = t - b - 5;
                else j = y - A;
                if (x - z <= 0) i = 5;
                else if (x + z > r) i = r - a - 5;
                else i = x - z
            }
            var D = false;
            var E = false;
            var F = false;
            var G = false;
            var H = {
                min: {
                    x: 0,
                    y: 0
                },
                max: {
                    x: 0,
                    y: 0
                }
            };
            var I = U.getControlRect();
            var J = U.getOverviewRect();
            var K = x >= v && y >= u.a14 && y + u.a14 <= t;
            if (K) {
                var L = x - B - u.q9Q;
                var M = L - a;
                if (!isNaN(parseInt(this.dom.style.borderRightWidth))) M += parseInt(this.dom.style.borderRightWidth);
                H = {
                    min: {
                        x: M,
                        y: j
                    },
                    max: {
                        x: M + v,
                        y: j + w
                    }
                };
                if (g) K = !_isRectint(H, I);
                if (h && K) K = !_isRectint(H, J)
            }
            var N = y >= w && x >= u._9yo && x <= r - u._9yo;
            if (N) {
                var O = y - C - u.i17;
                var P = O - b;
                if (!isNaN(parseInt(this.dom.style.borderBottomWidth))) P += parseInt(this.dom.style.borderBottomWidth);
                H = {
                    min: {
                        x: i,
                        y: P
                    },
                    max: {
                        x: i + v,
                        y: P + w
                    }
                };
                if (g) N = !_isRectint(H, I);
                if (h && N) N = !_isRectint(H, J)
            }
            var Q = r - x >= v && y >= u.a14 && y + u.a14 <= t;
            if (Q) {
                var L = x + B;
                var M = L + u.q9Q;
                if (!isNaN(parseInt(this.dom.style.borderLeftWidth))) M -= parseInt(this.dom.style.borderLeftWidth);
                H = {
                    min: {
                        x: M,
                        y: j
                    },
                    max: {
                        x: M + v,
                        y: j + w
                    }
                };
                if (g) Q = !_isRectint(H, I);
                if (h && Q) Q = !_isRectint(H, J)
            }
            var R = t - y >= w && x >= u._9yo && x <= r - u._9yo;
            if (R) {
                var O = y + C;
                var P = O + u.i17;
                if (!isNaN(parseInt(this.dom.style.borderTopWidth))) P -= parseInt(this.dom.style.borderTopWidth);
                H = {
                    min: {
                        x: i,
                        y: P
                    },
                    max: {
                        x: i + v,
                        y: P + w
                    }
                };
                if (g) R = !_isRectint(H, I);
                if (h && R) R = !_isRectint(H, J)
            }
            if (c != "auto") {
                if (d) {
                    if (c == "left") D = true;
                    else if (c == "top") E = true;
                    else if (c == "right") F = true;
                    else if (c == "bottom") G = true
                } else {
                    if (c == "left" && K) D = true;
                    else if (c == "top" && N) E = true;
                    else if (c == "right" && Q) F = true;
                    else if (c == "bottom" && R) G = true;
                    else c = "auto"
                }
            }
            if (c == "auto") {
                D = K;
                E = N;
                F = Q;
                G = R
            }
            var S = "";
            if (D) {
                S = "left";
                k = x - B - u.q9Q;
                l = y - u.a14 / 2;
                i = k - a;
                if (!isNaN(parseInt(this.dom.style.borderRightWidth))) i += parseInt(this.dom.style.borderRightWidth);
                if (l < j + 5) j = l - 5;
                else if (l + u.a14 >= j + b - 5) j = l - b + u.a14 + 5
            } else if (F) {
                S = "right";
                m = "left";
                k = x + B;
                l = y - u.a14 / 2;
                i = k + u.q9Q;
                if (!isNaN(parseInt(this.dom.style.borderLeftWidth))) i -= parseInt(this.dom.style.borderLeftWidth);
                if (l < j + 5) j = l - 5;
                else if (l + u.a14 >= j + b - 5) j = l - b + u.a14 + 5
            } else if (E || (!F && !E && !D && !G)) {
                S = "top";
                m = "bottom";
                k = x - u._9yo / 2;
                l = y - C - u.i17;
                j = l - b;
                if ((!F && !E && !D && !G)) {
                    if (i == 5 || (i == r - a - 5)) {
                        i = x - z
                    }
                }
                if (!isNaN(parseInt(this.dom.style.borderBottomWidth))) j += parseInt(this.dom.style.borderBottomWidth);
                if (k < i + 5) i = k - 5;
                else if (k + u._9yo >= i + a - 5) i = k - a + u._9yo + 5
            } else if (G) {
                S = "bottom";
                m = "top";
                k = x - u._9yo / 2;
                l = y + C;
                j = l + u.i17;
                if (!isNaN(parseInt(this.dom.style.borderTopWidth))) j -= parseInt(this.dom.style.borderTopWidth);
                if (k < i + 5) i = k - 5;
                else if (k + u._9yo >= i + a - 5) i = k - a + u._9yo + 5
            }
            if (S == "left" || S == "right") {
                n = u.q9Q;
                o = u.a14
            } else {
                n = u._9yo;
                o = u.i17
            }
        }
        return {
            Ww5tR: i,
            iYKQ: j,
            wa0Rs: k,
            n4y3f: l,
            width: a,
            height: b,
            lcC_7: S,
            arrow: {
                dir: m,
                width: n,
                height: o
            },
            kS5: p,
            uu4l: q
        }
    };
    this.show = function (a, b, c, d, e) {
        this.x = a.Ww5tR;
        this.y = a.iYKQ;
        this.width = a.width;
        this.height = a.height;
        if (!this.dom) this.initialize();
        this.y66ie = (typeof d != "number") ? 0 : d;
        this.u6U5 = (typeof e != "number") ? 0 : e;
        this.dom.style.left = this.x + (a.lcC_7 == "top" || a.lcC_7 == "bottom" ? this.y66ie : 0) + "px";
        this.dom.style.top = this.y + (a.lcC_7 == "left" || a.lcC_7 == "right" ? this.u6U5 : 0) + "px";
        this.dom.style.width = this.width + "px";
        this.dom.style.height = this.height + "px";
        this.nOje.style.width = "1px";
        this.nOje.style.height = "1px";
        if (!d04) this.nOje.style.overflow = "hidden";
        this.setVisible(true);
        if (typeof b == "boolean") this.setZMBtnVisible(b);
        this.h3$7j(a.wa0Rs, a.n4y3f, a.arrow.dir);
        this.Nu86(c);
        if (!d04) this.nOje.style.overflow = "auto"
    };
    this.h3$7j = function (x, y, a) {
        a = a.toUpperCase();
        this.KP0j = a;
        var b = "";
        var c = this.L70$("ARROW_INFO");
        b = this.L70$("ARROW_" + a + "_CHILD");
        var d = c.q9Q;
        var e = c.a14;
        if (a == "TOP" || a == "BOTTOM") {
            d = c._9yo;
            e = c.i17
        }
        this.uw8XR.innerHTML = b;
        this.uw8XR.style.left = x + (a == "TOP" || a == "BOTTOM" ? this.y66ie : 0) + "px";
        this.uw8XR.style.top = y + (a == "RIGHT" || a == "LEFT" ? this.u6U5 : 0) + "px";
        this.uw8XR.style.width = d + "px";
        this.uw8XR.style.height = e + "px";
        this.uw8XR.style.display = ""
    };
    this.M14 = function () {
        this.uw8XR.style.display = "none"
    };
    this.Nu86 = function (a) {
        if (!this.isVisible()) return;
        var b = this.Mng90.offsetHeight;
        if (!isNaN(parseInt(this.Mng90.style.marginTop))) b += parseInt(this.Mng90.style.marginTop);
        if (!isNaN(parseInt(this.Mng90.style.marginBottom))) b += parseInt(this.Mng90.style.marginBottom);
        var h = this.dom.offsetHeight - b - this.W26v;
        if (f$uP7 || BLCi || jn6 || M$PE) {
            if (!isNaN(parseInt(this.nOje.style.paddingTop))) h -= $9tU(this.nOje.style.paddingTop);
            if (!isNaN(parseInt(this.nOje.style.paddingBottom))) h -= $9tU(this.nOje.style.paddingBottom)
        }
        if (!isNaN(parseInt(this.dom.style.borderTopWidth))) h -= parseInt(this.dom.style.borderTopWidth);
        if (!isNaN(parseInt(this.dom.style.borderBottomWidth))) h -= parseInt(this.dom.style.borderBottomWidth);
        var w = this.dom.offsetWidth;
        if (f$uP7 || jn6 || M$PE || BLCi) {
            if (!isNaN(parseInt(this.nOje.style.paddingLeft))) w -= parseInt(this.nOje.style.paddingLeft);
            if (!isNaN(parseInt(this.nOje.style.paddingRight))) w -= parseInt(this.nOje.style.paddingRight)
        }
        w = w - $9tU(this.dom.style.borderWidth) * 2;
        this.nOje.style.height = h + "px";
        this.nOje.style.width = w + "px";
        if (this.nOje.scrollWidth > this.nOje.offsetWidth) {
            if (!isNaN(parseInt(this.dom.style.borderLeftWidth))) w -= parseInt(this.dom.style.borderLeftWidth);
            if (!isNaN(parseInt(this.dom.style.borderRightWidth))) w -= parseInt(this.dom.style.borderRightWidth);
            this.nOje.style.width = w + "px"
        }
        if (typeof a != "boolean") a = true;
        if (this.A3M1.length > 0 && a) {
            this.$$y();
            this.qf5Xd();
            var c = this.tabIndex;
            this.tabIndex = -1;
            if (c != -1) {
                if (!this.A3M1[c].L8Y29()) this.setCurrentTab(0);
                else this.setCurrentTab(c)
            }
        }
        var d = this.KP0j == "TOP" || this.KP0j == "BOTTOM" ? this.y66ie : 0;
        var e = this.KP0j == "RIGHT" || this.KP0j == "LEFT" ? this.u6U5 : 0;
        for (var i = 0; i < this.Ge008.length; i++) {
            var f = this.Ge008[i];
            f.style.left = (this.x + 3 + ((i) * 3)) + d + "px";
            f.style.top = (this.y + 3 + ((i) * 3)) + e + "px";
            f.style.width = this.width + "px";
            f.style.height = this.height + "px";
            f.style.display = ""
        }
        this.J1fS.style.width = this.width + 2 + "px";
        this.J1fS.style.height = this.height + 2 + "px";
        this.J1fS.style.left = this.x - 1 + d + "px";
        this.J1fS.style.top = this.y - 1 + e + "px";
        if ($42) {
            U.sF.moveTo(1, 0);
            U.sF.moveTo(0, 0)
        }
    };
    this.gM_e1 = function () {
        return this.dom
    };
    this.NB9 = function (a) {
        if (!this.gM_e1()) return;
        if (this.A3M1.length >= this.L70$("TAB_AMOUNT")) return false;
        if (MInfoWindowTab.w7sI(a)) {
            if (this.A3M1.length == 0) {
                var b = [];
                if (this.content != "") {
                    b.push(new MInfoWindowTab(this.L70$("TAB_DEFAULT_LABEL"), this.content, !a.bj6));
                    this.nOje.innerHTML = ""
                }
                if (b.length == 0 && !a.bj6) a.bj6 = true;
                b.push(a);
                this.Qd8iL(b)
            } else {
                this.h52F9(a, -1)
            }
        }
    };
    this.F4p = function () {
        if (!this.gM_e1()) return;
        if (this.A3M1.length > 0) {
            var a = this.A3M1;
            for (var i = a.length - 1; i >= 0; i--) {
                this.Hfr(i, false)
            }
            this.A3M1 = []
        }
    };
    this.GL6 = function () {
        this.tabIndex = -1;
        this.y146H = 0;
        this.j5Ex = null
    };
    this.Hfr = function (a, b) {
        if (!this.gM_e1()) return;
        if (this.smnK && this.A3M1.length > a) {
            if (typeof b != "boolean") b = true;
            var c = [];
            var d = null;
            var e = this.tabIndex;
            this.tabIndex = -1;
            var f = 0;
            for (var i = 0; i < this.A3M1.length; i++) {
                if (i != a) {
                    var g = this.A3M1[i];
                    var h = g.getIndex();
                    c.push(g);
                    g.$B3(c.length - 1);
                    var j = g.QuK();
                    if (j) j.setAttribute("tabIndex", g.getIndex());
                    if (h == e) f = g.getIndex()
                } else {
                    d = this.A3M1[i]
                }
            }
            if (d) {
                this.A3M1 = c;
                var k = d.QuK();
                if (d._p0.length > 0) {
                    for (var i = 0; i < d._p0.length; i++) {
                        var l = d._p0[i];
                        MEvent.removeBuiltInListener(k, l.event, l.q9)
                    }
                }
                if (k) {
                    _removeNode(k)
                }
            }
            this.$$y();
            this.qf5Xd();
            if (this.A3M1.length > f && !this.A3M1[f].L8Y29()) f = 0;
            if (b) this.setCurrentTab(f);
            if (this.A3M1.length == 0) {
                this.wQ39()
            }
        }
    };
    this.wQ39 = function () {
        this.W26v = 0;
        this.dom.rows[1].style.display = "none";
        this.GL6();
        if (this.content) this.setContent(this.content);
        this.Nu86()
    };
    this.h52F9 = function (a, b) {
        if (!MInfoWindowTab.w7sI(a)) {
            return false
        }
        var c = this.A3M1.length;
        var d = this.f0_;
        if (!MInfoWindowTab.w7sI(b) || !b.QuK()) {
            b = null
        }
        if (b) {
            d = b.QuK();
            var e = this.tabIndex == b.getIndex();
            var f = [];
            for (var i = 0; i < this.A3M1.length; i++) {
                var g = this.A3M1[i];
                if (g == b) {
                    f.push(a);
                    a.$B3(f.length - 1)
                }
                f.push(g);
                g.$B3(f.length - 1);
                var h = g.QuK();
                if (h) h.setAttribute("tabIndex", g.getIndex())
            }
            if (e) this.tabIndex = b.getIndex();
            this.A3M1 = f
        } else {
            this.A3M1.push(a);
            a.$B3(this.A3M1.length - 1)
        }
        var h = this.eJ1_1(a, d);
        if (isNaN(parseInt(this.smnK.style.height))) {
            this.smnK.style.height = parseInt(this.smnK.parentNode.clientHeight) + "px"
        }
        if (a.bj6) this.setCurrentTab(a.getIndex());
        this.qf5Xd()
    };
    this.eJ1_1 = function (a, b) {
        var c = document.createElement("LI");
        c.innerHTML = a.getLabel();
        c.style.cssText = this.L70$("TAB_TEXT_BLUR");
        c.setAttribute("tabIndex", a.getIndex());
        a.HW4H(c);
        this.smnK.insertBefore(c, b);
        a._p0.push({
            event: "click",
            q9: MEvent.bindDom(c, "click", this, this.wtd)
        });
        if (this.A3M1.length == 1) {
            if (this.JsY == 0) {
                this.JsY = c.clientHeight;
                if (parseInt(c.style.paddingTop)) this.JsY -= parseInt(c.style.paddingTop);
                if (parseInt(c.style.paddingBottom)) this.JsY -= parseInt(c.style.paddingBottom)
            }
            if (this.W7$y == 0) {
                this.W7$y = c.clientHeight
            }
        }
        return c
    };
    this.qf5Xd = function () {
        var a = this.A3M1;
        this.hjM2(true);
        this.CQb(true);
        var b = this.R088.firstChild.offsetWidth;
        var c = this.j5G8.firstChild.offsetWidth;
        var d = null;
        var e = null;
        for (var i = a.length - 1; i >= 0; i--) {
            e = a[i];
            if (e.L8Y29()) {
                var f = e.QuK();
                if (f) {
                    var g = f.clientWidth;
                    if (f.offsetTop >= f.offsetHeight * 2 - 5) {
                        h = 0
                    } else {
                        var h = this.Cy234(true);
                        if (f.offsetTop == 0) h += g;
                        else if (f.offsetLeft != 0) h = 0
                    }
                    if (g >= h) {
                        if (h <= 20) {
                            this._1k(e, false);
                            h = 0
                        } else {
                            h = h - parseInt(f.style.paddingLeft) - parseInt(f.style.paddingRight);
                            f.style.width = h + "px";
                            d = e
                        }
                    } else {
                        d = e
                    }
                    if (h != 0) break
                }
            }
        }
        this.hjM2(false);
        this.CQb(false);
        if (a.length > 0) {
            this.hjM2(!a[0].L8Y29());
            this.CQb(!a[a.length - 1].L8Y29())
        }
        if (d && d.QuK()) {
            this.j5Ex = d;
            var j = d.QuK();
            var k = j.clientWidth;
            if (!isNaN(parseInt(j.style.paddingLeft))) k -= parseInt(j.style.paddingLeft);
            if (!isNaN(parseInt(j.style.paddingRight))) k -= parseInt(j.style.paddingRight);
            if (!this.M59()) {
                k += b
            }
            if (!this.D42K6()) {
                k += c
            }
            if (this.tabIndex == d.getIndex()) k -= 2;
            j.style.width = k + "px"
        }
        for (var i = 0; i < a.length; i++) {
            e = a[i];
            if (e.L8Y29()) {
                e.$1K = this.y146H;
                if (e.QuK()) {
                    e.QuK().style.height = this.JsY + "px"
                }
            }
        }
        this.GI8B()
    };
    this._1k = function (a, b) {
        var c = a.QuK();
        if (c) {
            if (b) {
                c.style.cssText = this.L70$("TAB_TEXT_BLUR")
            } else {
                c.style.width = "0px";
                c.style.padding = "0px"
            }
            a.setVisible(b)
        }
    };
    this.$$y = function () {
        var a = this.A3M1;
        for (var i = 0; i < a.length; i++) {
            this._1k(a[i], true)
        }
    };
    this.CQb = function (a) {
        if (!this.X7770) this.X7770 = MEvent.bindDom(this.j5G8, "click", this, this.aG25);
        if (a) {
            this.j5G8.innerHTML = this.L70$("TAB_NAV_R_CHILD");
            this.j5G8.style.cursor = "pointer";
            this.j5G8.style.width = this.L70$("TAB_NAV_INFO").width + "px"
        } else {
            this.j5G8.innerHTML = "";
            this.j5G8.style.cursor = "";
            this.j5G8.style.width = "0px"
        }
    };
    this.hjM2 = function (a) {
        if (!this.Rumn) this.Rumn = MEvent.bindDom(this.R088, "click", this, this.y4H$N);
        if (a) {
            this.R088.innerHTML = this.L70$("TAB_NAV_L_CHILD");
            this.R088.style.cursor = "pointer";
            this.R088.style.width = this.L70$("TAB_NAV_INFO").width + "px"
        } else {
            this.R088.innerHTML = "";
            this.R088.style.cursor = "";
            this.R088.style.width = "0px"
        }
    };
    this.GI8B = function () {
        var a = this.Cy234(false);
        if (a < 0) a = 0;
        this.f0_.style.width = a + "px";
        this.f0_.style.height = this.W7$y + "px"
    };
    this.M59 = function () {
        if (this.R088.firstChild) return this.R088.firstChild.offsetWidth > 0;
        else
        return false
    };
    this.D42K6 = function () {
        if (this.j5G8.firstChild) return this.j5G8.firstChild.offsetWidth > 0;
        else
        return false
    };
    this.Cy234 = function () {
        var a = 0;
        if (this.smnK) {
            if (this.A3M1.length > 0) {
                var b = this.A3M1;
                var c = null;
                var d = null;
                for (var i = b.length - 1; i >= 0; i--) {
                    c = b[i];
                    d = c.QuK();
                    if (d && d.offsetTop == this.R088.offsetTop) {
                        break
                    }
                }
                if (d) {
                    if (c.getIndex() == 0 && d.offsetTop != this.R088.offsetTop) d = this.R088;
                    a = this.smnK.parentNode.offsetWidth - d.offsetLeft - d.offsetWidth - this.j5G8.offsetWidth
                }
            }
        }
        return a
    };
    this.Qd8iL = function (a) {
        if (this.smnK && a.length > 0) {
            if (this.dom.rows[1].style.display == "none") {
                this.dom.rows[1].style.display = ""
            }
            if (this.smnK.style.display == "none") {
                this.smnK.style.display = ""
            }
            for (var i = 0; i < a.length; i++) {
                this.h52F9(a[i])
            }
            this._7Q();
            var b = this.dom.rows[1].clientHeight;
            if (!isNaN(parseInt(this.dom.rows[1].style.paddingTop))) b -= parseInt(this.dom.rows[1].style.paddingTop);
            if (!isNaN(parseInt(this.dom.rows[1].style.paddingBottom))) b -= parseInt(this.dom.rows[1].style.paddingBottom);
            this.dom.rows[1].style.height = b + "px";
            this.W26v = b;
            this.Nu86()
        }
    };
    this._7Q = function () {
        if (this.w7c == 0) {
            var a = this.A3M1[0].QuK();
            var b = this.tabIndex == 0 ? parseInt(a.style.borderTopWidth) : parseInt(a.style.borderBottomWidth);
            if (isNaN(b)) b = 0;
            this.w7c = a.offsetHeight - parseInt(a.style.paddingTop) - b
        }
        this.R088.style.height = this.w7c + "px";
        this.R088.style.lineHeight = this.w7c + "px";
        this.j5G8.style.height = this.w7c + "px";
        this.j5G8.style.lineHeight = this.w7c + "px"
    };
    this._g8 = function (a) {
        if (!a.L8Y29()) return;
        var b = a.QuK();
        if (b) {
            var c = {
                width: b.style.width,
                height: b.style.height
            };
            b.style.cssText = this.L70$("TAB_TEXT_BLUR");
            b.style.width = c.width;
            b.style.height = c.height;
            this.tabIndex = -1
        }
    };
    this.F8448 = function (a) {
        var b = a.QuK();
        if (b) {
            var c = {
                width: b.style.width,
                height: b.style.height
            };
            b.style.cssText = this.L70$("TAB_TEXT_FOCUS");
            b.style.width = c.width;
            b.style.height = c.height;
            this.tabIndex = a.getIndex();
            var d = a.getContent();
            if (typeof d == "string") {
                this.nOje.innerHTML = d
            } else if (typeof d == "object" && typeof d.tagName != "undefined") {
                this.nOje.innerHTML = "";
                this.nOje.appendChild(d)
            }
        }
    };
    this.setCurrentTab = function (a) {
        var b = this.A3M1;
        if (this.tabIndex == a || b.length <= 0 || a < 0 || a >= b.length) return;
        if (this.tabIndex != -1) this._g8(this.A3M1[this.tabIndex]);
        var c = b[a];
        if (!c.L8Y29()) {
            if (c.$1K != -1) {
                this.y146H = c.$1K;
                for (var i = 0; i < b.length; i++) {
                    var d = b[i];
                    if (d.$1K == c.$1K) {
                        this._1k(d, true)
                    } else {
                        this._1k(d, false)
                    }
                }
                this.qf5Xd()
            } else {
                while (!c.L8Y29()) {
                    this.aG25(null)
                }
            }
        }
        if (c.L8Y29()) {
            this.F8448(c)
        }
    };
    this.y4H$N = function (e) {
        if (!this.M59()) return;
        this.y146H--;
        var a = this.A3M1;
        var b = null;
        if (this.tabIndex != -1) this._g8(this.A3M1[this.tabIndex]);
        for (var i = a.length - 1; i >= 0; i--) {
            var c = a[i];
            if (c.$1K == this.y146H) {
                this._1k(c, true);
                b = c
            } else {
                this._1k(c, false)
            }
        }
        this.qf5Xd();
        this.setCurrentTab(b.getIndex())
    };
    this.aG25 = function (e) {
        if (!this.D42K6()) return;
        this.y146H++;
        var a = this.A3M1;
        var b = null;
        if (this.tabIndex != -1) this._g8(this.A3M1[this.tabIndex]);
        for (var i = 0; i < a.length; i++) {
            var c = a[i];
            if (c.getIndex() <= this.j5Ex.getIndex()) {
                if (c.L8Y29()) this._1k(c, false)
            } else {
                if (!c.L8Y29()) {
                    if (!b) b = c;
                    this._1k(c, true)
                }
            }
        }
        this.qf5Xd();
        if (b) this.setCurrentTab(b.getIndex())
    };
    this.o1Q = function (e) {
        e = ny(e);
        if (e.target.tagName == "IMG") {
            this.setVisible(false);
            if (this.onClosed) this.onClosed()
        }
    };
    this.setVisible = function (a) {
        if (!this.dom) return;
        if (this.isVisible() == a) return;
        this.dom.style.display = a ? "" : "none";
        for (var i = 0; i < this.Ge008.length; i++) {
            this.Ge008[i].style.display = a ? "" : "none"
        }
        if (!a) this.M14();
        this.J1fS.style.display = a ? "" : "none"
    };
    this.isVisible = function () {
        return this.dom && this.dom.style.display != "none"
    };
    this.setZMBtnVisible = function (a) {
        if (this.h98() == a) return;
        if (a) this.GY1.style.width = this.L70$("RT_BTN_TD_INFO").width + "px";
        else this.GY1.style.width = "0px"
    };
    this.h98 = function () {
        return this.GY1 && parseInt(this.GY1.style.width) != 0
    };
    this.wtd = function (e) {
        var a = e.target.getAttribute("tabIndex");
        if (a != null) this.setCurrentTab(parseInt(a))
    };
    this.NFi_4 = function (a) {
        if (this.GY1 && this.sv1B.type != a) {
            this.sv1B.type = a;
            if (this.sv1B.type == "zoomin") {
                this.GY1.innerHTML = this.L70$("ZOOMIN_IMG")
            } else {
                this.GY1.innerHTML = this.L70$("ZOOMOUT_IMG")
            }
            this.lDW32()
        }
    };
    this.lDW32 = function () {
        if (this.sv1B.q9) MEvent.removeBuiltInListener(this.GY1, "click", this.sv1B.q9);
        if (this.sv1B.type == "zoomin") {
            this.sv1B.q9 = MEvent.bindDom(this.GY1, "click", this, this.D42)
        } else if (this.sv1B.type == "zoomout") {
            this.sv1B.q9 = MEvent.bindDom(this.GY1, "click", this, this.V38)
        }
    };
    this.D42 = function (e) {
        e = ny(e);
        if (e.target.tagName == "IMG") {
            if (this.onZoomIn) this.onZoomIn()
        }
    };
    this.V38 = function (e) {
        e = ny(e);
        if (e.target.tagName == "IMG") {
            if (this.onZoomOut) this.onZoomOut()
        }
    };
    this.setTitle = function (a) {
        if (this.V491U) {
            this.V491U.innerHTML = a
        }
    };
    this.setContent = function (a) {
        this.content = a;
        if (this.nOje) {
            if (MEvent.contains(U, "iw_setcontent") > 0) MEvent.trigger(U, "iw_setcontent", this.nOje);
            var b = this.nOje.parentNode;
            _removeNode(this.nOje);
            this.nOje = this.If6();
            b.appendChild(this.nOje);
            if (typeof a == "string") this.nOje.innerHTML = a;
            else if (typeof a == "object" && typeof a.tagName != "undefined") {
                this.nOje.innerHTML = "";
                this.nOje.appendChild(a)
            }
            if (this.A3M1.length > 0) this.A3M1[0].setContent(a)
        }
    };
    this.Vi5O = function (w, h) {
        if (!this.gM_e1()) return;
        this.width = w;
        this.height = h;
        if (this.dom) {
            this.dom.style.width = w + "px";
            this.dom.style.height = h + "px";
            this.Nu86()
        }
    };
    this.moveTo = function (x, y) {
        if (!this.gM_e1()) return;
        this.x = x;
        this.y = y;
        this.dom.style.left = x + "px";
        this.dom.style.top = y + "px";
        for (var i = 0; i < this.Ge008.length; i++) {
            var a = this.Ge008[i];
            a.style.left = (this.x + 3 + ((i) * 3)) + "px";
            a.style.top = (this.y + 3 + ((i) * 3)) + "px"
        }
    };
    this.qc2f = function (a) {
        if (this.isVisible()) {
            if ((this.nOje.style.overflow == "hidden" ? true : false) != a) {
                this.nOje.style.overflow = a ? "hidden" : "auto"
            }
        }
    };
    this.L70$ = function (a) {
        return P2GE.Cdv.CFl(a)
    };
    this.jCs3F = function (a, b) {
        P2GE.Cdv.ql9(a, b)
    };
    this.finalize = function () {
        if (this.Rumn) MEvent.removeBuiltInListener(this.R088, "click", this.Rumn);
        if (this.X7770) MEvent.removeBuiltInListener(this.j5G8, "click", this.X7770);
        if (this.x1q) MEvent.removeBuiltInListener(this.U3K7, "click", this.x1q);
        this.F4p();
        _removeNode(this.dom);
        for (var i = 0; i < this.Ge008.length; i++) {
            _removeNode(this.Ge008[i])
        }
        _removeNode(this.J1fS);
        _removeNode(this.uw8XR);
        xInoP(this);
        P2GE.Cdv.finalize()
    }
};
P2GE.Cdv = new
function () {
    var c = [];
    var d = false;
    if (navigator.userAgent.indexOf(";") >= 0) {
        if (!window.XMLHttpRequest) d = true
    }
    c["TIP_DEFAULT_INFO"] = {
        width: 300,
        height: 300,
        u127: false,
        zIndex: 100
    };
    c["COLOR"] = "#81807f";
    c["TIP_TABLE_BORDER_COLOR"] = "#0e347f";
    c["IMAGE_RESOURCE"] = CTLIMG_RESOURCE[0].url;
    c["IMAGE_RESOURCE_INFO"] = {
        width: CTLIMG_RESOURCE[0].w,
        height: CTLIMG_RESOURCE[0].h
    };
    c["BLANK_IMG_SRC"] = strImgsvrUrl + "images/newbubbleimg/mbblank.gif";
    c["TIP_TABLE"] = "position:absolute;border:2px solid " + c["TIP_TABLE_BORDER_COLOR"] + ";background-color:#FFFFFF;display:none;spacing:10px;table-layout:fixed;overflow:hidden;z-index:" + c["TIP_DEFAULT_INFO"].zIndex + ";";
    c["TIP_BORDER"] = "position:absolute;background:white;z-index:99;";
    c["TITLE_CONTAINER_TD"] = "";
    c["TITLE_TABLE"] = "table-layout:fixed;margin-bottom:5px;margin-top:4px;/*background-color:green;*/";
    c["TITLE_TD"] = "overflow:hidden;padding-left:4px;padding-top:2px;font-weight:bold;font-size:14px;";
    c["TITLE_SPACER"] = "width:10px;-moz-user-select:none;-moz-user-focus:none;";
    var e = function (w, h, x, y, a) {
        if (typeof a != "string") a = "";
        var s = "<div style=\"position:absolute;width:" + w + "px;height:" + h + "px;overflow:hidden;-moz-user-select:none;-moz-user-focus:none;" + a + "\">";
        if (d) {
            s += "<img src=\"" + c["BLANK_IMG_SRC"] + "\" style=\"position:absolute;left:" + x + "px;top:" + y + "px;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=" + c["IMAGE_RESOURCE"] + ",sizingMethod=scale);width:" + c["IMAGE_RESOURCE_INFO"].width + "px;height:" + c["IMAGE_RESOURCE_INFO"].height + "px;\">"
        } else {
            s += "<img src=\"" + c["IMAGE_RESOURCE"] + "\" style=\"position:absolute;left:" + x + "px;top:" + y + "px;\">"
        }
        s += "</div>";
        return s
    };
    c["RT_BTN_TD_INFO"] = {
        width: 18
    };
    c["RT_BTN_TD"] = "width:" + c["RT_BTN_TD_INFO"].width + "px";
    c["RT_BTN_IMG_INFO"] = {
        width: 12,
        height: 12
    };
    c["CLOSE_IMG"] = e(c["RT_BTN_IMG_INFO"].width, c["RT_BTN_IMG_INFO"].height, -64, -51, "cursor:pointer;");
    c["ZOOMIN_IMG"] = e(c["RT_BTN_IMG_INFO"].width, c["RT_BTN_IMG_INFO"].height, -42, -51, "cursor:pointer;");
    c["ZOOMOUT_IMG"] = e(c["RT_BTN_IMG_INFO"].width, c["RT_BTN_IMG_INFO"].height, -53, -51, "cursor:pointer;");
    c["SHADOW_COLOR"] = c["COLOR"];
    c["SHADOW_AMOUNT"] = 2;
    c["SHADOW_OPACITY"] = [0.5, 0.3];
    c["SHADOW_DIV"] = "position:absolute;background-color:" + c["SHADOW_COLOR"] + ";display:none;";
    c["TAB_AMOUNT"] = 5;
    c["TAB_DEFAULT_LABEL"] = "\u4e3b\u8981";
    c["TAB_TD"] = "-moz-user-select:none;-moz-user-focus:none;";
    c["TAB_CONTAINER"] = "list-style-type:none;margin:0px;padding:0px;overflow:hidden;";
    c["TAB_LINE"] = "1px solid " + c["COLOR"] + ";";
    c["TAB_TEXT_COMMON"] = "float:left;cursor:pointer;white-space:nowrap;overflow:hidden;outline:none;font-size:12px;padding-bottom:4px;";
    c["TAB_TEXT_FOCUS"] = c["TAB_TEXT_COMMON"] + "border-top:" + c["TAB_LINE"] + ";border-left:" + c["TAB_LINE"] + ";border-right:" + c["TAB_LINE"] + ";padding-top:5px;padding-left:4px;padding-right:4px;";
    c["TAB_TEXT_BLUR"] = c["TAB_TEXT_COMMON"] + "border-bottom:" + c["TAB_LINE"] + "padding-top:5px;padding-left:5px;padding-right:5px;";
    c["TAB_SPACER"] = "float:left;border-bottom:" + c["TAB_LINE"];
    c["TAB_NAV_INFO"] = {
        width: 10,
        height: 10
    };
    c["TAB_NAV_LR_COMMON"] = "float:left;padding-top:5px;padding-left:4px;padding-right:4px;border-bottom:" + c["TAB_LINE"] + ";";
    c["TAB_NAV_L"] = c["TAB_NAV_LR_COMMON"];
    c["TAB_NAV_R"] = c["TAB_NAV_LR_COMMON"] + "float:right;";
    c["TAB_NAV_L_CHILD"] = e(c["TAB_NAV_INFO"].width, c["TAB_NAV_INFO"].height, -66, -160);
    c["TAB_NAV_R_CHILD"] = e(c["TAB_NAV_INFO"].width, c["TAB_NAV_INFO"].height, -66, -148);
    c["CONTENT_TD"] = "";
    c["CONTENT_DIV"] = "position:relative;padding:5px;width:100%;height:100%;overflow:auto;/*background-color:yellow;*/";
    c["ARROW_INFO"] = {
        q9Q: 15,
        a14: 23,
        _9yo: 23,
        i17: 15,
        zIndex: c["TIP_DEFAULT_INFO"].zIndex + 1
    };
    c["ARROW_DIV"] = "position:absolute;top:0px;left:0px;width:" + c["ARROW_INFO"].width + "px;height:" + c["ARROW_INFO"].height + "px;display:none;z-index:" + c["ARROW_INFO"].zIndex + ";-moz-user-select:none;-moz-user-focus:none;";
    c["ARROW_TOP_CHILD"] = e(c["ARROW_INFO"]._9yo, c["ARROW_INFO"].i17, -43, -177);
    c["ARROW_BOTTOM_CHILD"] = e(c["ARROW_INFO"]._9yo, c["ARROW_INFO"].i17, -43, -192);
    c["ARROW_LEFT_CHILD"] = e(c["ARROW_INFO"].q9Q, c["ARROW_INFO"].a14, -61, -124);
    c["ARROW_RIGHT_CHILD"] = e(c["ARROW_INFO"].q9Q, c["ARROW_INFO"].a14, -25, -178);
    this.ql9 = function (a, b) {
        if (typeof c[a] != "undefined") c[a] = b
    };
    this.CFl = function (a) {
        return c[a]
    };
    this.finalize = function () {
        xInoP(c);
        c = null
    }
};
var MPanel = function (d) {
    this.initialize = function (a) {
        this.maplet = a;
        this.paint()
    };
    this.setLocation = function (a, b) {
        if (typeof b != "boolean") b = true;
        this.location = a || {};
        with(this.location) {
            if (typeof pt != "object" || !(pt instanceof MPoint) || !pt) this.location.pt = null;
            if (typeof type != "string" || !type || (type == "latlon" && !pt)) this.location.type = "xy";
            if (typeof x != "number") this.location.x = 0;
            if (typeof y != "number") this.location.y = 0;
            if (type == "latlon" && pt && !pt.maplet && this.maplet) pt.initialize(this.maplet)
        }
        this.options.location = this.location;
        if (b) this.paint()
    };
    this.setContent = function (c) {
        if (typeof c != "undefined" && c) {
            if (typeof c == "string") {
                this.dom.innerHTML = c
            } else if (typeof c == "object") {
                this.dom.appendChild(c)
            }
        } else {
            c = null;
            this.dom.innerHTML = ""
        }
        this.options.content = c
    };
    this.setMouseWheel = function (a) {
        if (typeof a != "boolean") a = true;
        if (this.dom) this.dom.setAttribute(Mq_mL, !a);
        this.options.mousewheel = a
    };
    this.setZoomHide = function (a) {
        if (typeof a != "boolean") a = false;
        this.options.zoomhide = a
    };
    this.setCreator = function (a) {
        if (typeof a != "number" || (a != MPanel.USER && a != MPanel.SYSTEM)) a = MPanel.USER;
        this.options.creator = a
    };
    this.setPin = function (p, a) {
        if (typeof p != "boolean") p = false;
        if (typeof a != "boolean") a = true;
        this.options.pin = p;
        if (!p && typeof this.location != "undefined" && this.location.pt) {
            this.location.type = "xy";
            this.location.pt = null
        }
        if (a) this.paint()
    };
    this.setContainer = function (c) {
        if (typeof c != "object" || !c) c = null;
        this.options.container = c
    };
    this.setZIndex = function (i) {
        if (typeof i != "number") i = this.options.pin ? 200 : 2;
        this.dom.style.zIndex = i;
        this.options.zindex = i
    };
    this.paint = function () {
        if (!this.dom || !this.maplet) return;
        if (this.options.container) {
            if (this.dom.parentNode != this.options.container) this.options.container.appendChild(this.dom)
        } else {
            if (this.options.pin) {
                if (this.dom.parentNode != this.maplet.sF.div) this.maplet.sF.div.appendChild(this.dom)
            } else {
                if (this.dom.parentNode != this.maplet.panel) this.maplet.panel.appendChild(this.dom)
            }
        }
        with(this.location) {
            if (this.options.pin || type == "latlon") {
                if (typeof pt == "undefined" || !pt) pt = new MPoint(this.maplet.toMapCoordinate(x, y));
                if (!pt.maplet) {
                    pt.initialize(this.maplet)
                } else if (this.options.pin) {
                    if (this.maplet.X7jjM) {
                        if (this.maplet.$2J != pt.$2J) {
                            pt.mapX += this.maplet.B824;
                            pt.mapY += this.maplet.DHPs;
                            pt.$2J = this.maplet.$2J
                        }
                    } else {
                        pt.recalcScreenCoords()
                    }
                }
                x = pt.mapX;
                y = pt.mapY
            }
            this.dom.style.left = x + "px";
            this.dom.style.top = y + "px"
        }
    };
    this.show = function () {
        this.setVisible(true);
        this.J96.v7q0 = false
    };
    this.hide = function () {
        this.setVisible(false);
        this.J96.v7q0 = true
    };
    this.setVisible = function (a) {
        if (!this.dom) return;
        if (this.dom.style.display != (a ? "" : "none")) this.dom.style.display = a ? "" : "none"
    };
    this.isVisible = function () {
        return this.dom.style.display == ""
    };
    this.finalize = function () {
        this.remove(true)
    };
    this.remove = function (a) {
        if (typeof a != "boolean") a = false;
        if (this.dom) {
            if (!a) {
                if (this.dom.parentNode) this.dom.parentNode.removeChild(this.dom)
            } else {
                _removeNode(this.dom);
                this.dom = null
            }
        }
        this.maplet = null
    };
    this.clone = function () {
        return new MPanel({
            pin: this.options.pin,
            parent: this.options.parent,
            zindex: this.options.zindex,
            content: this.options.content,
            location: this.location,
            mousewheel: this.options.mousewheel,
            zoomhide: this.options.zoomhide,
            creator: this.options.creator
        })
    };
    this.toString = function () {
        return 'com.mapbar.maplet.MPanel'
    };
    this.id = "panel" + MPanel.e6yg2;
    MPanel.e6yg2++;
    this.maplet = null;
    this.dom = document.createElement("DIV");
    this.dom.style.position = "absolute";
    this.J96 = {
        v7q0: false
    };
    this.options = d || {};
    with(this.options) {
        this.setPin(typeof pin != "undefined" ? pin : undefined, false);
        this.setContainer(typeof container != "undefined" ? container : undefined);
        this.setZIndex(typeof zindex != "undefined" ? zindex : undefined);
        this.setContent(typeof content != "undefined" ? content : undefined);
        this.setLocation(typeof location != "undefined" ? location : undefined, false);
        this.setMouseWheel(typeof mousewheel != "undefined" ? mousewheel : undefined);
        this.setZoomHide(typeof zoomhide != "undefined" ? zoomhide : undefined);
        this.setCreator(typeof creator != "undefined" ? creator : undefined)
    }
};
MPanel.enableDragMap = function (a, b, c) {
    if (typeof b != "boolean") b = true;
    if (b) $6R(a, G9kd3, "true", c);
    else l4q2x(a, G9kd3)
};
MPanel.USER = 1;
MPanel.SYSTEM = 2;
MPanel.e6yg2 = 0;
var MLayer = function (m) {
    this.initialize = function (a) {
        this.maplet = a;
        this.paint()
    };
    this.setServerPath = function (a) {
        if (typeof a != "string" || !a) a = "";
        this.options.serverPath = a
    };
    this.setZIndex = function (i) {
        if (typeof i != "number") i = 0;
        this.dom.style.zIndex = i;
        this.options.zindex = i;
        if (this.maplet) {
            this.maplet.sfuU(this)
        }
    };
    this.setImgType = function (a) {
        if (typeof a != "string" || !a) a = "png";
        this.options.imgType = a.toLowerCase()
    };
    this.setDataType = function (a) {
        if (typeof a != "string" || !a) a = "js";
        this.options.dataType = a
    };
    this.setDataPattern = function (a) {
        if (typeof a != "string" || !a) a = "data" + MLayer.DPLACEHOLDER;
        this.options.dataPattern = a
    };
    this.setImgWidth = function (w) {
        if (typeof w != "number" || w <= 0) w = 5;
        this.options.imgWidth = w;
        this.r0Q03 = Math.ceil(w / 2)
    };
    this.setImgHeight = function (h) {
        if (typeof h != "number" || h <= 0) h = 5;
        this.options.imgHeight = h;
        this.Q3043 = Math.ceil(h / 2)
    };
    this.setLevelRange = function (a, b, c) {
        if (typeof a != "number" || a < MIN_ZOOM_LEVEL || a > MAX_ZOOM_LEVEL) a = MIN_ZOOM_LEVEL;
        if (typeof b != "number" || b < MIN_ZOOM_LEVEL || b > MAX_ZOOM_LEVEL) b = MAX_ZOOM_LEVEL;
        this.options.minLevel = a;
        this.options.maxLevel = b;
        if (typeof c != "boolean") c = true;
        if (c) this.update()
    };
    this.setNeedData = function (a, b) {
        if (typeof a != "boolean") a = false;
        if (typeof b != "boolean") b = true;
        var c = this.options.needData;
        this.options.needData = a;
        if (b && this.options.needData != c) {
            if (c) {
                this.clearData()
            } else {
                F.apply(this)
            }
        }
    };
    this.setCreator = function (a) {
        if (typeof a != "fBc2" || (a != MLayer.USER && a != MLayer.SYSTEM)) a = MLayer.USER;
        this.options.creator = a
    };
    this.setImgUrlPreprocessor = function (a) {
        a = a || {};
        if (typeof a.fun != "function" || !a.fun) a.fun = null;
        if (typeof a.thisObj != "object" || !a.thisObj) a.thisObj = null;
        this.options.imgUrlPreprocessor = a
    };
    this.setDataUrlPreprocessor = function (a) {
        a = a || {};
        if (typeof a.fun != "function" || !a.fun) a.fun = null;
        if (typeof a.thisObj != "object" || !a.thisObj) a.thisObj = null;
        this.options.dataUrlPreprocessor = a
    };
    this.setFireEvent = function (a) {
        if (typeof a != "number") a = MLayer.ALL;
        this.options.events = a
    };
    this.c789 = function (a) {
        a = a || {};
        if (typeof a.fun != "function" || !a.fun) a.fun = null;
        if (typeof a.thisObj != "object" || !a.thisObj) a.thisObj = null;
        this.options.mouseover = a
    };
    this.m000A = function (a) {
        a = a || {};
        if (typeof a.fun != "function" || !a.fun) a.fun = null;
        if (typeof a.thisObj != "object" || !a.thisObj) a.thisObj = null;
        this.options.mouseout = a
    };
    this.$70 = function (a) {
        a = a || {};
        if (typeof a.fun != "function" || !a.fun) a.fun = null;
        if (typeof a.thisObj != "object" || !a.thisObj) a.thisObj = null;
        this.options.click = a
    };
    this.setDataLoadMode = function (a) {
        if (typeof a != "number" || (a != MLayer.DL_INITIATIVE && a != MLayer.DL_PASSIVE)) a = MLayer.DL_INITIATIVE;
        this.options.dataLoadMode = a
    };
    this.yw95 = function (a, b) {
        var c = this.maplet.layerData[a];
        if (typeof c == "object" && c && t63s(b) && b.length > 0) {
            this.data[a] = b;
            var d = c.x;
            var e = c.y;
            for (var i = 0; i < b.length; i++) {
                var f = b[i];
                f.grid = a;
                var g = d + f.r.i.x;
                var h = e + f.r.i.y;
                f.rect = {
                    min: {
                        x: g,
                        y: h
                    },
                    max: {
                        x: g + f.r.a.x,
                        y: h + f.r.a.y
                    }
                };
                p.apply(this, [f])
            }
            b = null
        }
    };
    this.U1MD = function () {
        return this.options.dataPattern.replace(MLayer.DPLACEHOLDER, "")
    };
    this.setServerPathType = function (a) {
        if (typeof a != "number" || (a != MLayer.PT_NORMAL && a != MLayer.PT_COMBINER)) a = MLayer.PT_NORMAL;
        this.options.serverPathType = a
    };
    this.setCombinerParas = function (a) {
        if (typeof a != "string") a = "";
        this.options.combinerParas = a
    };
    this.enableNPS = function (a) {
        if (typeof a != "boolean") a = false;
        this.options.nps = a
    };
    this.getFilename = function (a, b) {
        var c = "";
        if (this.maplet) {
            if (typeof b == "string") b = this.maplet.layerData[b];
            if (typeof b == "object" && b) {
                c = sI[this.maplet.AG] + "/" + (this.options.nps && this.maplet.AG >= 14 ? b.dirx + "/" : "") + b.dirname + "/" + b.xyname + "." + (a ? this.options.imgType : this.options.dataType)
            }
        }
        return c
    };
    this.enableSafeLevel = function (a) {
        if (typeof a != "boolean") a = false;
        this.options.safeLevel = a
    };
    this.setTip = function (a, b) {
        a = a || {};
        if (typeof a.mode != "number" || (a.mode & MLayer.TM_ALWAYS != MLayer.TM_ALWAYS && a.mode & MLayer.TM_MOUSEOVER != MLayer.TM_MOUSEOVER)) a.mode = MLayer.TM_NEVER;
        if (typeof a.otiLevel != "number" || a.otiLevel < MIN_ZOOM_LEVEL || a.otiLevel > MAX_ZOOM_LEVEL) a.otiLevel = MIN_ZOOM_LEVEL;
        if (typeof a.otaLevel != "number" || a.otaLevel < MIN_ZOOM_LEVEL || a.otaLevel > MAX_ZOOM_LEVEL) a.otaLevel = MAX_ZOOM_LEVEL;
        if (typeof a.atiLevel != "number" || a.atiLevel < MIN_ZOOM_LEVEL || a.atiLevel > MAX_ZOOM_LEVEL) a.atiLevel = MIN_ZOOM_LEVEL;
        if (typeof a.ataLevel != "number" || a.ataLevel < MIN_ZOOM_LEVEL || a.ataLevel > MAX_ZOOM_LEVEL) a.ataLevel = MAX_ZOOM_LEVEL;
        this.options.tip = a;
        if (typeof b != "boolean") b = true;
        if (b) this.refreshTip()
    };
    this.refreshTip = function () {
        for (var i in this.data) o.apply(this, [this.data[i]])
    };
    var o = function (a) {
        if (typeof a != "object" || !a) return;
        for (var i = 0; i < a.length; i++) p.apply(this, [a[i]])
    };
    var p = function (a) {
        if (typeof a != "object" || !a || !a.n) return;
        var b = O.apply(this, [true, true]);
        var c = P.apply(this, [a]);
        if (b && !a.tip && c) {
            this.wR(a)
        } else if (a.tip && (!b || !c)) {
            E.apply(this, [a])
        }
    };
    this.setNeedImg = function (a, b) {
        if (typeof a != "boolean") a = true;
        if (typeof b != "boolean") b = true;
        var c = this.options.needImg;
        this.options.needImg = a;
        if (b && this.options.needImg != c) {
            if (c) {
                this.clearImgs()
            } else {
                F.apply(this)
            }
        }
    };
    this.inZoomRange = function (a) {
        if (a >= this.options.minLevel && a <= this.options.maxLevel) return true;
        else
        return false
    };
    this.paint = function () {
        if (!this.dom || !this.maplet) return;
        if (!this.maplet.a7Vg) this.maplet.W794();
        if (this.dom.parentNode != this.maplet.a7Vg) {
            this.resize(this.maplet.width, this.maplet.height);
            this.maplet.a7Vg.appendChild(this.dom)
        }
    };
    var q = function (a, b) {
        if (typeof a.bR7 == "undefined") a.bR7 = b;
        else a.bR7 = b
    };
    var s = function (a) {
        return typeof a.bR7 == "undefined" || a.bR7
    };
    var t = function () {
        for (var i in this.data) q.apply(this, [this.data[i], false])
    };
    var u = function () {
        for (var i in this.data) {
            if (!s.apply(this, [this.data[i]])) D.apply(this, [i])
        }
    };
    var v = function (a, b) {
        a.setAttribute(R, b ? "yes" : "no")
    };
    var z = function () {
        for (var i in this.S9976) v.apply(this, [this.S9976[i], false])
    };
    var A = function (a) {
        return a.getAttribute(R) == "yes"
    };
    var B = function () {
        for (var i in this.S9976) {
            if (!A.apply(this, [this.S9976[i]])) C.apply(this, [i])
        }
    };
    var C = function (a) {
        if (typeof this.S9976[a] == "object") {
            var b = this.S9976[a];
            b.onload = null;
            b.onerror = null;
            _removeNode(b);
            b = null;
            delete this.S9976[a]
        }
    };
    var D = function (a) {
        if (typeof this.data[a] == "object") {
            if (this.S9976[a] && this.S9976[a].getAttribute(MLayer.e8I9)) {
                this.S9976[a].removeAttribute(MLayer.e8I9)
            }
            for (var i = 0; i < this.data[a].length; i++) {
                E.apply(this, [this.data[a][i]])
            }
            if (V && V.grid == a) {
                M.apply(this);
                V = null
            }
            this.data[a] = null;
            delete this.data[a]
        }
    };
    var E = function (a) {
        if (!this.maplet || !a || !a.tip) return;
        this.maplet.removePanel(a.tip, true);
        a.tip = null;
        if (U[a.p]) delete U[a.p]
    };
    this.update = function () {
        if (!this.dom || !this.maplet) return;
        if (!this.inZoomRange(this.maplet.AG)) {
            this.clear();
            return
        }
        F.apply(this)
    };
    this.refresh = function () {
        if (!this.dom || !this.maplet) return;
        this.clear();
        F.apply(this)
    };
    var F = function () {
        if (!this.isVisible() || !this.inZoomRange(this.maplet.AG)) return;
        t.apply(this);
        z.apply(this);
        for (var i in this.maplet.layerData) {
            var c = this.maplet.layerData[i];
            if (c.x + this.maplet.imgWidth < 0 || c.x > this.maplet.width || c.y + this.maplet.imgHeight < 0 || c.y > this.maplet.height) continue;
            if (this.options.needImg) {
                var d = this.S9976[i];
                if (typeof d != "object" || !d) {
                    d = document.createElement("IMG");
                    d.style.position = "absolute";
                    d.setAttribute("unselectable", "on");
                    d.style.MozUserSelect = "none";
                    d.setAttribute(G9kd3, "true");
                    d.setAttribute(Ov5Ok, "yes");
                    d.onerror = function (a, b) {
                        return function () {
                            H.apply(a, [b])
                        }
                    }(this, i);
                    d.onload = function (a, b) {
                        return function () {
                            I.apply(a, [b])
                        }
                    }(this, i);
                    this.S9976[i] = d
                }
                v.apply(this, [d, true]);
                d.style.left = c.x + "px";
                d.style.top = c.y + (this.options.safeLevel ? w8[this.maplet.AG] : 0) + "px";
                if (!d.src && d.tagName != "DIV") {
                    var e = "";
                    var f = this.getFilename(true, c);
                    if (this.options.imgUrlPreprocessor.fun) {
                        e = this.options.imgUrlPreprocessor.fun.apply(this.options.imgUrlPreprocessor.thisObj, [c]);
                        if (!e) continue
                    } else if (this.options.serverPathType == MLayer.PT_COMBINER) {
                        e += G.apply(this, [this.options.serverPath, c.Q2L74, c.R_3a8]);
                        e += (this.options.serverPath.indexOf("?") != -1 ? "&" : "?") + "n=" + this.options.combinerParas;
                        e += "&p=" + f;
                        e += "&g=" + c.grid
                    } else {
                        e = G.apply(this, [this.options.serverPath, c.Q2L74, c.R_3a8]) + f
                    }
                    d.src = e
                } else {
                    J.apply(this, [i])
                }
            } else {
                J.apply(this, [i])
            }
        }
        B.apply(this);
        u.apply(this)
    };
    var G = function (a, b, c) {
        var d = "img.mapbar.com";
        if (strImgsvrUrl.substring(7, 21) == d) {
            return a.replace(d, "img" + this.maplet.aK$3(b, c) + ".mapbar.com")
        } else {
            return a
        }
    };
    var H = function (a) {
        C.apply(this, [a])
    };
    var I = function (a) {
        var b = this.S9976[a];
        if (typeof b != "undefined" && b) {
            if (b.width <= 1 || b.height <= 1) {
                C.apply(this, [a]);
                return
            }
            b.onerror = null;
            b.onload = null;
            if (_sqi && this.options.imgType == "png") {
                var d = document.createElement("DIV");
                d.style.position = "absolute";
                d.style.width = this.maplet.imgWidth + "px";
                d.style.height = this.maplet.imgHeight + "px";
                d.style.left = b.style.left;
                d.style.top = b.style.top;
                d.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src=" + b.src + ",sizingMethod=scale);";
                d.style.MozUserSelect = "none";
                d.setAttribute("unselectable", "on");
                d.setAttribute(G9kd3, "true");
                d.setAttribute(Ov5Ok, "yes");
                v.apply(this, [d, true]);
                this.dom.appendChild(d);
                C.apply(this, [a]);
                this.S9976[a] = d
            } else {
                this.dom.appendChild(b)
            }
            J.apply(this, [a])
        }
    };
    this.refreshDataXY = function () {
        if (!this.options.needData) return;
        for (var a in this.data) {
            var b = this.data[a];
            for (var i = 0; i < b.length; i++) {
                var c = b[i];
                var d = this.maplet.layerData[a].x + c.r.i.x;
                var e = this.maplet.layerData[a].y + c.r.i.y;
                c.rect.min.x = d;
                c.rect.min.y = e;
                c.rect.max.x = d + c.r.a.x;
                c.rect.max.y = e + c.r.a.y
            }
        }
    };
    var J = function (a) {
        if (!this.options.needData) return;
        var b = this.S9976[a];
        if (!this.options.needImg || (typeof b == "object" && b && ((typeof b.src != "undefined" && b.src != sX) || (_sqi && this.options.imgType == "png")))) {
            if (!this.data[a] && typeof this.maplet.layerData[a] == "object") {
                if (this.options.dataLoadMode == MLayer.DL_PASSIVE) return;
                if (b) {
                    if (b.getAttribute(MLayer.e8I9)) return;
                    else b.setAttribute(MLayer.e8I9, true)
                }
                var c = this.maplet.layerData[a];
                var d = "";
                var e = this.getFilename(false, c);
                if (this.options.dataUrlPreprocessor.fun) {
                    d = this.options.dataUrlPreprocessor.fun.apply(this.options.dataUrlPreprocessor.thisObj, [c]);
                    if (!d) return
                } else {
                    d = G.apply(this, [this.options.serverPath, c.Q2L74, c.R_3a8]) + e
                }
                new q1iCE(d, K, false, true, this, undefined, [a]).IB2TC()
            } else {
                var f = this.data[a];
                var g = this.maplet.layerData[a];
                if (typeof f == "undefined" || !f || typeof g == "undefined" || !g) return;
                q.apply(this, [f, true]);
                var h = g.x;
                var j = g.y;
                for (var i = 0; i < f.length; i++) {
                    var c = f[i];
                    c.rect.min.x = h + c.r.i.x;
                    c.rect.min.y = j + c.r.i.y;
                    c.rect.max.x = c.rect.min.x + c.r.a.x;
                    c.rect.max.y = c.rect.min.y + c.r.a.y;
                    p.apply(this, [c])
                }
            }
        }
    };
    var K = function (a, b) {
        if (typeof this.maplet == "object" && this.maplet && typeof this.maplet.layerData == "object" && this.maplet.layerData) {
            if (typeof this.maplet.layerData[a] == "undefined" || !this.maplet.layerData[a]) return;
            var c = this.maplet.layerData[a];
            var d = this.options.dataPattern.replace(MLayer.DPLACEHOLDER, c.dirname + "_" + c.xyname);
            var e = eval("typeof " + d + "==\"undefined\"?null:" + d);
            this.yw95(a, e)
        }
        _removeNode(aa(b))
    };
    this.getDataByXY = function (a, x, y, b) {
        if (typeof b != "boolean") b = false;
        if (this.data[a]) {
            var e = {
                x: x,
                y: y
            };
            for (var i = 0; i < this.data[a].length; i++) {
                if (_isInsideRect(e, this.data[a][i].rect)) {
                    var d = this.data[a][i];
                    if (b) {
                        if (d.c.length > 0) {
                            var r = d.rect;
                            var f = this.maplet.layerData[a].x;
                            var g = this.maplet.layerData[a].y;
                            for (var h = 0; h < d.c.length; h++) {
                                var c = d.c[h];
                                var j = f + c.i.x;
                                var k = g + c.i.y;
                                var l = {
                                    min: {
                                        x: j,
                                        y: k
                                    },
                                    max: {
                                        x: j + c.a.x,
                                        y: k + c.a.y
                                    }
                                };
                                if (_isInsideRect(e, l)) {
                                    d = this.data[a][c.f]
                                }
                            }
                        }
                    }
                    return d
                }
            }
        }
        return null
    };
    this.b$f4 = function (a, x, y) {
        if (!this.isVisible()) return null;
        var d = this.getDataByXY(a, x, y, N.apply(this, [true, true]));
        var b = true;
        if (this.options.mouseout.fun) M.apply(this, [d]);
        if (this.options.mouseover.fun && d) {
            b = L.apply(this, [d])
        }
        if (d && b) {
            this.maplet.k93("pointer", this.maplet.panel)
        }
        V = d;
        if (this.options.mouseover.fun) return null;
        if (d && N.apply(this, [true, true]) && !O.apply(this, [true, true]) && d.n) {
            this.wR(d)
        } else {
            this.u6V()
        }
        return d
    };
    var L = function (d) {
        var a = true;
        if (this.options.mouseover.fun) {
            if (!V || V != d) {
                a = this.options.mouseover.fun.apply(this.options.mouseover.thisObj, [d]);
                W = a
            } else {
                a = W
            }
        }
        return a
    };
    var M = function (d) {
        if (this.options.mouseout.fun && V && (V != d || !d)) {
            this.options.mouseout.fun.apply(this.options.mouseout.thisObj, [V])
        }
    };
    var N = function (a, b) {
        with(this.options.tip) {
            return (!a || (mode & MLayer.TM_MOUSEOVER) == MLayer.TM_MOUSEOVER) && (!b || (this.maplet.AG >= otiLevel && this.maplet.AG <= otaLevel))
        }
    };
    var O = function (a, b) {
        if (this.options.dataLoadMode != MLayer.DL_INITIATIVE) return;
        with(this.options.tip) {
            return (!a || (mode & MLayer.TM_ALWAYS) == MLayer.TM_ALWAYS) && (!b || (this.maplet.AG >= atiLevel && this.maplet.AG <= ataLevel))
        }
    };
    this.wR = function (a) {
        if (N.apply(this, [true, true]) && !O.apply(this, [true, true])) {
            if (!T) {
                this.maplet.addPanel(MLayer.TIPANEL);
                T = aa(MLayer.TIPID)
            }
            if (S != a || (S == a && !MLayer.TIPANEL.isVisible())) {
                S = a;
                T.innerHTML = a.n;
                MLayer.TIPANEL.dom.style.visibility = "hidden";
                MLayer.TIPANEL.show();
                var b = Q.apply(this, [a]);
                MLayer.TIPANEL.setLocation({
                    type: "xy",
                    x: b.x,
                    y: b.y
                });
                MLayer.TIPANEL.dom.style.visibility = "visible"
            }
        } else if (O.apply(this, [true, true]) && a && a.n) {
            if (a.p && U[a.p]) return;
            U[a.p] = true;
            a.tip = MLayer.TIPANEL2.clone();
            a.tip.setContainer(this.maplet.a7Vg.div);
            var n = a.n;
            if (n.length > 8) {
                n = a.n.substring(0, 8) + "...";
                a.tip.dom.title = a.n
            }
            a.tip.setContent(a.tip.options.content.replace(MLayer.TPLACEHOLDER, n));
            a.tip.dom.firstChild.setAttribute(G9kd3, "true");
            a.tip.dom.style.visibility = "hidden";
            this.maplet.addPanel(a.tip);
            var b = Q.apply(this, [a]);
            a.tip.setLocation({
                type: "xy",
                x: b.x,
                y: b.y
            });
            a.tip.dom.style.visibility = "visible"
        }
    };
    this.u6V = function () {
        if (MLayer.TIPANEL.maplet && S) {
            S = null;
            MLayer.TIPANEL.hide()
        }
    };
    var P = function (a) {
        return _isRectint(a.rect, {
            min: {
                x: 0,
                y: 0
            },
            max: {
                x: this.maplet.width,
                y: this.maplet.height
            }
        })
    };
    var Q = function (a, b) {
        var c = MLayer.TIPANEL.dom;
        if (O.apply(this, [true, true])) c = a.tip.dom;
        var d = {
            x: 0,
            y: 0
        };
        var e = a.rect.min.x;
        var f = a.rect.min.y;
        var g = a.rect.max.x;
        var h = a.rect.max.y;
        var i = c.offsetWidth;
        var j = c.offsetHeight;
        if (N.apply(this, [true, true])) {
            if (g + 2 + i <= this.maplet.width - 5) {
                d.x = g + 2;
                d.y = f + (h - f) / 2 - j / 2
            } else {
                d.x = e - i - 2;
                d.y = f + (h - f) / 2 - j / 2
            }
        } else {
            d.x = g + 2;
            d.y = f + (h - f) / 2 - j / 2
        }
        return d
    };
    this.click = function (a, x, y) {
        var b = {
            center2map: true,
            firevent: false,
            data: null
        };
        if (this.isVisible() && (this.options.click.fun || this.options.events & MLayer.CLICK == MLayer.CLICK)) {
            b.data = this.getDataByXY(a, x, y, true);
            if (b.data) {
                if (this.options.click.fun) {
                    var c = this.options.click.fun.apply(this.options.click.thisObj, [b.data]);
                    b.center2map = c.center2map;
                    b.firevent = c.firevent
                } else {
                    b.firevent = true
                }
            }
        }
        return b
    };
    this.clearImgs = function () {
        for (var i in this.S9976) {
            C.apply(this, [i])
        }
    };
    this.clearData = function () {
        for (var i in this.data) {
            D.apply(this, [i])
        }
    };
    this.clear = function () {
        this.clearImgs();
        this.clearData();
        if (!this.dom) return;
        this.dom.innerHTML = ""
    };
    this.getImgCount = function (a) {
        var c = 0;
        if (this.isVisible() && this.maplet && this.inZoomRange(this.maplet.AG)) for (var i in this.S9976) c++;
        return c
    };
    this.resize = function (w, h) {
        if (!this.dom) return;
        if ($9tU(this.dom.style.width, 0) != w) this.dom.style.width = (w - 1) + "px";
        if ($9tU(this.dom.style.height, 0) != h) this.dom.style.height = (h - 2) + "px"
    };
    this.show = function () {
        var a = this.isVisible();
        this.setVisible(true);
        if (!a) F.apply(this)
    };
    this.hide = function () {
        var a = this.isVisible();
        this.setVisible(false);
        if (a) this.clear()
    };
    this.setVisible = function (a) {
        if (!this.dom) return;
        if (this.dom.style.display != (a ? "" : "N$3")) this.dom.style.display = a ? "" : "none"
    };
    this.isVisible = function () {
        return this.dom && this.dom.parentNode == this.maplet.a7Vg.div && this.dom.style.display != "none"
    };
    this.finalize = function () {
        this.remove(true)
    };
    this.remove = function (a) {
        if (typeof a != "boolean") a = false;
        this.clear();
        if (this.dom) {
            if (!a) {
                if (this.dom.parentNode) this.dom.parentNode.removeChild(this.dom)
            } else {
                _removeNode(this.dom);
                this.dom = null
            }
        }
        if (this.options.imgUrlPreprocessor.thisObj) this.options.imgUrlPreprocessor.thisObj = null;
        if (this.options.dataUrlPreprocessor.thisObj) this.options.dataUrlPreprocessor.thisObj = null;
        if (this.options.mouseover.thisObj) this.options.mouseover.thisObj = null;
        if (this.options.mouseout.thisObj) this.options.mouseout.thisObj = null;
        if (this.options.click.thisObj) this.options.click.thisObj = null;
        this.maplet = null
    };
    this.toString = function () {
        return 'com.mapbar.maplet.MLayer'
    };
    this.id = new Date().getTime() + "_layer";
    this.maplet = null;
    this.dom = document.createElement("DIV");
    this.dom.style.position = "absolute";
    this.S9976 = {};
    this.data = {};
    this.r0Q03 = 0;
    this.Q3043 = 0;
    var R = "_using";
    var S = null;
    var T = null;
    var U = {};
    var V = null;
    var W = false;
    this.options = m || {};
    with(this.options) {
        this.setServerPath(typeof serverPath != "undefined" ? serverPath : undefined);
        this.setZIndex(typeof zindex != "undefined" ? zindex : undefined);
        this.setImgType(typeof imgType != "undefined" ? imgType : undefined);
        this.setDataType(typeof dataType != "undefined" ? dataType : undefined);
        this.setDataPattern(typeof dataPattern != "undefined" ? dataPattern : undefined);
        this.setLevelRange((typeof minLevel != "undefined" ? minLevel : undefined), (typeof maxLevel != "undefined" ? maxLevel : undefined), false);
        this.setImgWidth(typeof imgWidth != "undefined" ? imgWidth : undefined);
        this.setImgHeight(typeof imgHeight != "undefined" ? imgHeight : undefined);
        this.setNeedData(typeof needData != "undefined" ? needData : undefined, false);
        this.setNeedImg(typeof needImg != "undefined" ? needImg : undefined, false);
        this.setCreator(typeof creator != "undefined" ? creator : undefined);
        this.setImgUrlPreprocessor(typeof imgUrlPreprocessor != "undefined" ? imgUrlPreprocessor : undefined);
        this.setDataUrlPreprocessor(typeof dataUrlPreprocessor != "undefined" ? dataUrlPreprocessor : undefined);
        this.setFireEvent(typeof events != "undefined" ? events : undefined);
        this.setTip(typeof tip != "undefined" ? tip : undefined, false);
        this.c789(typeof mouseover != "undefined" ? mouseover : undefined);
        this.m000A(typeof mouseout != "undefined" ? mouseout : undefined);
        this.$70(typeof click != "undefined" ? click : undefined);
        this.setDataLoadMode(typeof dataLoadMode != "undefined" ? dataLoadMode : undefined);
        this.setServerPathType(typeof serverPathType != "undefined" ? serverPathType : undefined);
        this.setCombinerParas(typeof combinerParas != "undefined" ? combinerParas : undefined);
        this.enableNPS(typeof nps != "undefined" ? nps : undefined);
        this.enableSafeLevel(typeof safeLevel != "undefined" ? safeLevel : undefined)
    }
};
MLayer.USER = 1;
MLayer.SYSTEM = 2;
MLayer.DPLACEHOLDER = "[xyname]";
MLayer.NONE = 0;
MLayer.CLICK = 1;
MLayer.sg4v5 = 2;
MLayer.ALL = 255;
MLayer.TM_NEVER = 1;
MLayer.TM_ALWAYS = 2;
MLayer.TM_MOUSEOVER = 4;
MLayer.TIPID = "_map_layertip";
MLayer.TIPANEL = new MPanel({
    pin: true,
    location: {
        type: "xy"
    },
    content: "<div id='" + MLayer.TIPID + "' style='border:1px solid gray;background:white;padding:1px 3px;padding:2px 3px 0\a;font-size:13px;line-height:17px;color:gray;' onmouseover='MLayer.setTipVisible(false);'></div>",
    creator: MPanel.SYSTEM
});
MLayer.TPLACEHOLDER = "[TPLACEHOLDER]";
MLayer.TIPANEL2 = new MPanel({
    pin: true,
    location: {
        type: "xy",
        x: 0,
        y: 0
    },
    content: "<div style='border:1px solid gray;background:white;padding:1px 3px;padding:2px 3px 0\a;font-size:12px;color:gray;white-space:nowrap;' unselectable='on'>" + MLayer.TPLACEHOLDER + "</div>",
    creator: MPanel.SYSTEM
});
MLayer.setTipVisible = function (a) {
    if (MLayer.TIPANEL.maplet) MLayer.TIPANEL.setVisible(a)
};
MLayer.e8I9 = "_loadingdata";
MLayer.DL_INITIATIVE = 1;
MLayer.DL_PASSIVE = 2;
MLayer.PT_NORMAL = 1;
MLayer.PT_COMBINER = 2;
var MTraffic = function (c) {
    this.initialize = function (a) {
        this.maplet = a;
        this.layer = new MLayer({
            serverPath: this.options.serverPath,
            zindex: -1,
            imgType: this.options.imgType,
            needData: false,
            minLevel: this.options.minLevel,
            maxLevel: this.options.maxLevel,
            creator: MLayer.SYSTEM,
            imgUrlPreprocessor: {
                fun: e,
                thisObj: this
            },
            uli8: ""
        });
        this.maplet.addLayer(this.layer);
        this.refresh();
        k = nB(this, f, this.options.interval)
    };
    var e = function (a) {
        if (l) return this.options.serverPath + l + (this.maplet.AG - 1) + "/o" + a.grid + "." + this.options.imgType;
        else
        return ""
    };
    this.refresh = function () {
        if (!this.layer || !this.layer.inZoomRange(this.maplet.AG)) return;
        this.layer.clear();
        m = true;
        f.apply(this)
    };
    var f = function () {
        g.apply(this)
    };
    var g = function () {
        var a = h.apply(this);
        a += (a.indexOf("?") != -1 ? "&" : "?") + "_" + new Date().getTime() + "=";
        new q1iCE(a, j, false, true, this).IB2TC()
    };
    var h = function () {
        return this.options.magicPath.replace("[city]", this.options.city)
    };
    var j = function () {
        var d = eval(MTraffic.MAGIC_RESULT_NAME);
        if (typeof d != "string" || !d) return;
        if (!l || d != l || m) {
            l = eval(MTraffic.MAGIC_RESULT_NAME);
            m = false;
            this.layer.clear();
            this.layer.update();
            MEvent.trigger(this.layer.maplet, "traffic_update", {
                magicPath: l
            })
        }
    };
    this.getTimestamp = function () {
        var a = null;
        if (l) {
            var b = l.split("/");
            if (b.length > 8) {
                a = new Date(b[4], $9tU(b[5][0] == "0" ? b[5][1] : b[5]) - 1, b[6], b[7], b[8].replace(b[4] + b[5] + b[6] + b[7], ""), 0)
            }
        }
        return a
    };
    this.getTimestampDir = function () {
        var a = "";
        if (l) {
            var b = l.split("/");
            if (b.length > 9) {
                a = b.slice(4, 9).join("/")
            }
        }
        return a
    };
    this.setServerPath = function (a) {
        if (typeof a != "string" || !a) a = "http://lukuang.mapbar.com/";
        this.options.serverPath = a
    };
    this.setImgType = function (a) {
        if (typeof a != "string" || !a) a = "png";
        this.options.imgType = a.toLowerCase()
    };
    this.setMagicPath = function (a) {
        if (typeof a != "string" || !a) a = "http://lukuang.mapbar.com/[city]/traffic/images/traffic.js";
        this.options.magicPath = a
    };
    this.setLevelRange = function (a, b) {
        if (typeof a != "number" || a < TRAFFIC_MIN_LEVEL || a > TRAFFIC_MAX_LEVEL) a = TRAFFIC_MIN_LEVEL;
        if (typeof b != "number" || b < TRAFFIC_MIN_LEVEL || b > TRAFFIC_MAX_LEVEL) b = TRAFFIC_MAX_LEVEL;
        this.options.minLevel = a;
        this.options.maxLevel = b
    };
    this.setInterval = function (i) {
        if (typeof i != "number" || i < TRAFFIC_REFRESH_INTERVAL) i = TRAFFIC_REFRESH_INTERVAL;
        this.options.interval = i * 1000;
        if (k) {
            window.clearInterval(k);
            k = nB(this, f, this.options.interval)
        }
    };
    this.setCity = function (a, b) {
        if (typeof a != "string" || !a) a = "beijing";
        this.options.city = a;
        if (typeof b != "boolean") b = true;
        if (b) {
            m = true;
            f.apply(this)
        }
    };
    this.show = function () {
        if (this.layer) this.layer.show()
    };
    this.hide = function () {
        if (this.layer) this.layer.hide()
    };
    this.finalize = function () {
        this.remove(true)
    };
    this.remove = function (a) {
        if (typeof a != "boolean") a = false;
        if (k) window.clearTimeout(k);
        k = null;
        if (this.maplet) this.maplet.removeLayer(this.layer, a);
        this.maplet = null
    };
    this.toString = function () {
        return 'com.mapbar.maplet.MTraffic'
    };
    this.id = new Date().getTime() + "_traffic";
    this.maplet = null;
    this.layer = null;
    var k = null;
    var l = null;
    var m = true;
    this.options = c || {};
    with(this.options) {
        this.setServerPath(typeof serverPath != "undefined" ? serverPath : undefined);
        this.setLevelRange((typeof minLevel != "undefined" ? minLevel : undefined), (typeof maxLevel != "undefined" ? maxLevel : undefined));
        this.setInterval(typeof interval != "undefined" ? interval : undefined);
        this.setCity(typeof city != "undefined" ? city : undefined, false);
        this.setMagicPath(typeof magicPath != "undefined" ? magicPath : undefined);
        this.setImgType(typeof imgType != "undefined" ? imgType : undefined)
    }
};
MTraffic.MAGIC_RESULT_NAME = "__mapbar_magic_id";
var MPOILayer = function (d) {
    this.initialize = function (a) {
        this.maplet = a;
        this.layer = new MLayer({
            serverPath: this.options.serverPath,
            zindex: -2,
            needImg: false,
            needData: true,
            minLevel: this.options.minLevel,
            maxLevel: this.options.maxLevel,
            creator: MLayer.SYSTEM,
            dataLoadMode: this.options.loadMode,
            mouseover: {
                fun: e,
                thisObj: this
            },
            mouseout: {
                fun: f,
                thisObj: this
            },
            click: {
                fun: g,
                thisObj: this
            },
            dataPattern: "basepoi" + MLayer.DPLACEHOLDER
        });
        this.maplet.addLayer(this.layer)
    };
    var e = function (a) {
        var b = h.apply(this, [a]);
        if (b && MEvent.contains(this.maplet, "poi_mouseover") > 0) {
            MEvent.trigger(this.maplet, "poi_mouseover", j.apply(this, [a]))
        }
        return b
    };
    var f = function (a) {
        if (h.apply(this, [a]) && MEvent.contains(this.maplet, "poi_mouseout") > 0) {
            MEvent.trigger(this.maplet, "poi_mouseout", j.apply(this, [a]))
        }
    };
    var g = function (a) {
        var b = {
            center2map: !h.apply(this, [a]),
            firevent: false
        };
        if (!b.center2map && MEvent.contains(this.maplet, "poi_click") > 0) {
            MEvent.trigger(this.maplet, "poi_click", j.apply(this, [a]))
        }
        return b
    };
    var h = function (a) {
        if (typeof a == "object" && a && typeof a.d == "string" && a.d) var b = k.apply(this, [a.d.substring(0, 1)]);
        return ((this.options.dataTypes & b) == MPOILayer.DT_POI) || ((this.options.dataTypes & b) == MPOILayer.DT_BUSTOP) || ((this.options.dataTypes & b) == MPOILayer.DT_SUBWAY)
    };
    var j = function (a) {
        if (typeof a == "object" && a && typeof a.d == "string" && a.d) var b = a.d;
        var c = k.apply(this, [b.substring(0, 1)]);
        if (b.length >= 2) b = b.substring(2);
        return {
            type: c,
            pid: a.p,
            area: a.l,
            data: b,
            name: a.n,
            rect: a.rect
        }
    };
    var k = function (s) {
        var i = $9tU(s);
        if (i == MPOILayer.DT_POI) return MPOILayer.DT_POI;
        else if (i == MPOILayer.DT_BUSTOP) return MPOILayer.DT_BUSTOP;
        else if (i == MPOILayer.DT_SUBWAY) return MPOILayer.DT_SUBWAY;
        else
        return MPOILayer.DT_NONE
    };
    this.remove = function (a) {
        if (typeof a != "boolean") a = false;
        if (this.maplet && this.layer) {
            this.maplet.removeLayer(this.layer, a);
            this.layer = null;
            this.maplet = null
        }
    };
    this.setServerPath = function (a, b) {
        if (typeof a != "string" || !a) a = MPOILayer.INITIATIVE_URL;
        if (a == MPOILayer.INITIATIVE_URL || a == MPOILayer.PASSIVE_URL) {
            if (this.options.loadMode & MLayer.DL_INITIATIVE == MLayer.DL_INITIATIVE) a = MPOILayer.INITIATIVE_URL;
            else a = MPOILayer.PASSIVE_URL
        }
        this.options.serverPath = a;
        if (this.layer) this.layer.setServerPath(a, b)
    };
    this.setLevelRange = function (a, b, c) {
        if (typeof a != "number" || a < TRAFFIC_MIN_LEVEL || a > TRAFFIC_MAX_LEVEL) a = TRAFFIC_MIN_LEVEL;
        if (typeof b != "number" || b < TRAFFIC_MIN_LEVEL || b > TRAFFIC_MAX_LEVEL) b = TRAFFIC_MAX_LEVEL;
        this.options.minLevel = a;
        this.options.maxLevel = b;
        if (this.layer) this.layer.setLevelRange(a, b, c)
    };
    this.setDataTypes = function (a, b) {
        if (typeof a != "number" || (a & MPOILayer.DT_POI != MPOILayer.DT_POI && a & MPOILayer.DT_SUBWAY != MPOILayer.DT_SUBWAY && a & MPOILayer.DT_BUSTOP != MPOILayer.DT_BUSTOP)) a = MPOILayer.DT_ALL;
        this.options.dataTypes = a
    };
    this.setLoadMode = function (a, b) {
        if (typeof a != "number" || (a != MLayer.DL_INITIATIVE && a != MLayer.DL_PASSIVE)) a = MLayer.DL_INITIATIVE;
        this.options.loadMode = a;
        this.setServerPath(this.options.serverPath, b)
    };
    this.maplet = null;
    this.layer = null;
    this.options = d || {};
    with(this.options) {
        this.setServerPath(typeof serverPath != "undefined" ? serverPath : undefined, false);
        this.setLevelRange((typeof minLevel != "undefined" ? minLevel : undefined), (typeof maxLevel != "undefined" ? maxLevel : undefined), false);
        this.setDataTypes((typeof dataTypes != "undefined" ? dataTypes : undefined), false);
        this.setLoadMode(typeof loadMode != "undefined" ? loadMode : undefined, false)
    }
};
MPOILayer.DT_NONE = 0;
MPOILayer.DT_POI = 1;
MPOILayer.DT_BUSTOP = 2;
MPOILayer.DT_SUBWAY = 4;
MPOILayer.DT_ALL = 255;
MPOILayer.INITIATIVE_URL = "http://img.mapbar.com/maplite/mapbank/maplayer/basepoi/";
MPOILayer.PASSIVE_URL = "http://192.168.0.241:8084/servlet/mg";

function _8L8(t) {
    this.maplet = t;
    document["mapbar-overview"] = this;
    this.yl = "mapbar";
    var u = 0;
    var v = 0;
    var z = 0;
    var A = 0;
    this.c3 = oo;
    this.fg = true;
    this.panel = document.createElement("div");
    this.panel.unselectable = "on";
    this.panel.style.position = "absolute";
    this.panel.style.zIndex = 999;
    this.panel.style.backgroundColor = "white";
    this.panel.style.border = "1px solid #A6A5A1";
    this.panel.setAttribute(Mq_mL, true);
    this.panel.style.overflow = "hidden";
    this.panel.style.display = "none";
    this.fC = document.createElement("div");
    this.fC.id = "mapbar-overview-canvas";
    this.fC.unselectable = "on";
    this.fC.style.position = "absolute";
    this.fC.style.visibility = "visible";
    this.fC.style.zIndex = 0;
    this.fC.style.top = (uU - 2) + "px";
    this.fC.style.left = (px) ? "5px" : "7px";
    this.fC.style.backgroundColor = MapBackgroundColor;
    this.fC.style.border = "2px solid #0E347F";
    this.fC.style.overflow = "hidden";
    this.fC.selected = false;
    this.panel.appendChild(this.fC);
    this.z3 = document.createElement("div");
    this.z3.id = "mapbar-overview-viewport";
    this.z3.unselectable = "on";
    this.fC.appendChild(this.z3);
    this.z1 = document.createElement("div");
    this.z1.id = "mapbar-overview-viewframe";
    this.z1.unselectable = "on";
    this.fC.appendChild(this.z1);
    this.z2 = document.createElement("div");
    this.z2.id = "mapbar-overview-viewpad_ctrl";
    this.z2.unselectable = "on";
    this.z2.style.MozUserSelect = "none";
    this.fC.appendChild(this.z2);
    this.z2.style.cursor = "move";
    this.z2.selected = false;
    this.ao = new Array();
    this.cW = 0;
    this.$9T1 = [2, 4, 8, 6];
    this.shadow = document.createElement("div");
    this.shadow.unselectable = "on";
    this.shadow.style.position = "absolute";
    this.shadow.style.zIndex = 998;
    this.shadow.setAttribute(Mq_mL, true);
    this.shadow.style.display = "none";
    var B = null;
    var C = null;
    this._n1 = new fD("OvwImgs", 0, 0, 0, 0, true, 0, '', this.fC);
    this.show = function () {
        this.fg = true
    };
    this.hide = function () {
        this.fg = false
    };
    this.nF = function () {
        if (this.fg) {
            if (this.c3) return $9tU(this.shadow.style.top);
            else
            return A
        } else {
            return 0
        }
    };
    this.Pf315 = function () {
        if (this.fg) {
            if (this.c3) return $9tU(this.shadow.style.left);
            else
            return z
        } else {
            return 0
        }
    };
    this.nz = function () {
        if (this.fg) {
            if (this.c3) return $9tU(this.shadow.offsetHeight);
            else
            return $9tU(this.img.offsetHeight)
        } else {
            return 0
        }
    };
    this.w0 = function (e) {
        PI7(e);
        if (this.cW != 0) return;
        if (e.target.id == this.z2.id || H2h == this.z2.id) {
            H2h = this.z2.id;
            this.z2.selected = true;
            this.downX = (px) ? event.clientX : e.clientX;
            this.downY = (px) ? event.clientY : e.clientY;
            this.xa = this.downX;
            this.xb = this.downY
        } else if (fJ(e.target, this.fC) || H2h == this.fC.id) {
            H2h = this.fC.id;
            this.fC.selected = true;
            this.downX = (px) ? event.clientX : e.clientX;
            this.downY = (px) ? event.clientY : e.clientY;
            this.xa = this.downX;
            this.xb = this.downY
        }
        if (H2h) {
            this.ao["doc_mousemove"] = MEvent.bindDom(document, "mousemove", this, this.f9);
            this.ao["doc_mouseup"] = MEvent.bindDom(document, "mouseup", this, this.l1);
            if (px) this.ao["losecapture"] = MEvent.bindDom(document.body, "losecapture", this, this.l1);
            else this.ao["blur"] = MEvent.bindDom(window, "blur", this, this.l1)
        }
    };
    this.f9 = function (e) {
        if (H2h == this.z2.id && this.z2.selected) {
            this.moveX = (px) ? event.clientX : e.clientX;
            this.moveY = (px) ? event.clientY : e.clientY;
            var a = (this.moveX - this.downX);
            var b = (this.moveY - this.downY);
            this.downX = this.moveX;
            this.downY = this.moveY;
            if (this.z2.style.top) {
                this.z2.style.top = (parseInt(this.z2.style.top) + b) + "px";
                this.z2.style.left = (parseInt(this.z2.style.left) + a) + "px"
            }
        } else if (H2h == this.fC.id && this.fC.selected) {
            this.moveX = (px) ? event.clientX : e.clientX;
            this.moveY = (px) ? event.clientY : e.clientY;
            var a = (this.moveX - this.downX);
            var b = (this.moveY - this.downY);
            this.downX = this.moveX;
            this.downY = this.moveY;
            this._n1.style.top = (parseInt(this._n1.style.top) + b) + "px";
            this._n1.style.left = (parseInt(this._n1.style.left) + a) + "px";
            if (this.z3.style.top) {
                this.z3.style.top = (parseInt(this.z3.style.top) + b) + "px";
                this.z3.style.left = (parseInt(this.z3.style.left) + a) + "px";
                this.z1.style.top = (parseInt(this.z1.style.top) + b) + "px";
                this.z1.style.left = (parseInt(this.z1.style.left) + a) + "px"
            }
        }
        if (!B && this.z2.offsetWidth < this.fC.offsetWidth) {
            if (px) document.body.setCapture();
            B = nB(this, N, 100);
            C = nB(this, P, 100)
        }
    };
    this.l1 = function (e) {
        if (this.maplet.sS != ts.u4XWR && this.maplet.sS != ts.tz && this.maplet.sS != ts.tA && this.maplet.sS != ts.tv) PI7(e);
        if (B) {
            this.maplet.hideBubble();
            window.clearInterval(B);
            B = null;
            window.clearInterval(C);
            C = null;
            if (px) document.body.releaseCapture()
        }
        if (this.ao["doc_mousemove"]) {
            MEvent.removeBuiltInListener(document, "mousemove", this.ao["doc_mousemove"]);
            this.ao["doc_mousemove"] = null;
            MEvent.removeBuiltInListener(document, "mouseup", this.ao["doc_mouseup"]);
            this.ao["doc_mouseup"] = null;
            if (px) {
                MEvent.removeBuiltInListener(document.body, "losecapture", this.ao["losecapture"]);
                this.ao["losecapture"] = null
            } else {
                MEvent.removeBuiltInListener(window, "blur", this.ao["blur"]);
                this.ao["blur"] = null
            }
        }
        if (this.z2.selected) {
            H2h = null;
            this.z2.selected = false;
            var a = (px) ? event.clientX : e.clientX;
            var b = (px) ? event.clientY : e.clientY;
            if (typeof a == "undefined") a = this.moveX;
            if (typeof b == "undefined") b = this.moveY;
            var c = (a - this.xa - $9tU(this._n1.style.left));
            var d = (b - this.xb - $9tU(this._n1.style.top));
            var f = -d * this.xf / this.maplet.imgHeight;
            var g = c * this.xg / this.maplet.imgWidth;
            this.gK = this.maplet.gx + f;
            this.gL = this.maplet.gA + g;
            this.cW = 1;
            var l = $9tU(this.z2.style.left);
            if (l < -this.z2.offsetWidth) l = -this.z2.offsetWidth;
            else if (l >= this.fC.offsetWidth) l = this.fC.offsetWidth;
            var h = parseInt(this.z2.style.top);
            if (h < -this.z2.offsetHeight) h = -this.z2.offsetHeight;
            else if (h >= this.fC.offsetHeight) h = this.fC.offsetHeight;
            this.z2.style.left = l + "px";
            this.z2.style.top = h + "px";
            this.vh = getTimeout(this, this.vO, 20)
        } else if (this.fC.selected) {
            H2h = null;
            this.fC.selected = false;
            var a = (px) ? event.clientX : e.clientX;
            var b = (px) ? event.clientY : e.clientY;
            var c = -(a - this.xa);
            var d = -(b - this.xb);
            var f = -d * this.xf / this.maplet.imgHeight;
            var g = c * this.xg / this.maplet.imgWidth;
            this.gK = this.maplet.gx + f;
            this.gL = this.maplet.gA + g;
            this.cW = 2;
            var l = $9tU(this.z3.style.left);
            if (l < -this.z3.offsetWidth) l = -this.z3.offsetWidth;
            else if (l >= this.fC.offsetWidth) l = this.fC.offsetWidth;
            var h = $9tU(this.z3.style.top);
            if (h < -this.z3.offsetHeight) h = -this.z3.offsetHeight;
            else if (h >= this.fC.offsetHeight) h = this.fC.offsetHeight;
            this.z3.style.left = l + "px";
            this.z3.style.top = h + "px";
            this.z1.style.left = l + "px";
            this.z1.style.top = h + "px";
            this.vh = getTimeout(this, this.vO, 20)
        }
    };
    var D = function (e) {
        PI7(e)
    };
    this.vO = function () {
        if (this.vh) {
            clearTimeout(this.vh);
            this.vh = null
        }
        if (!this.z3.style.top || !this.z2.style.top) {
            this.maplet.setCenter(this.gK, this.gL, true);
            this.cW = 0;
            return
        }
        var a = parseInt(this.z2.style.top) - parseInt(this.z3.style.top);
        var b = parseInt(this.z2.style.left) - parseInt(this.z3.style.left);
        var c = Math.round(b);
        var d = Math.round(a);
        if ((Math.abs(b) + Math.abs(a)) >= 10) {
            var c = Math.round(b * 10.0 / (Math.abs(b) + Math.abs(a)));
            var d = Math.round(a * 10.0 / (Math.abs(b) + Math.abs(a)))
        }
        if (this.cW == 2) {
            if ((Math.abs(b) + Math.abs(a)) == 0) {
                this.maplet.setCenter(this.gK, this.gL, true);
                this.cW = 0
            } else {
                this.z3.style.top = (parseInt(this.z3.style.top) + d) + "px";
                this.z3.style.left = (parseInt(this.z3.style.left) + c) + "px";
                this.z1.style.top = (parseInt(this.z1.style.top) + d) + "px";
                this.z1.style.left = (parseInt(this.z1.style.left) + c) + "px";
                this.vh = getTimeout(this, this.vO, 20)
            }
        } else if (this.cW == 1) {
            c = -c;
            d = -d;
            if ((Math.abs(b) + Math.abs(a)) == 0) {
                this.maplet.setCenter(this.gK, this.gL, true);
                this.cW = 0
            } else {
                for (var i in this.pU) {
                    if (typeof this.pU[i] == "object" && (this.pU[i] != null)) {
                        this.pU[i].style.top = (parseInt(this.pU[i].style.top) + d) + "px";
                        this.pU[i].style.left = (parseInt(this.pU[i].style.left) + c) + "px"
                    }
                }
                this.z2.style.top = (parseInt(this.z2.style.top) + d) + "px";
                this.z2.style.left = (parseInt(this.z2.style.left) + c) + "px";
                this.vh = getTimeout(this, this.vO, 20)
            }
        }
    };
    this.pU = new Array();
    this.yN = null;
    this.c4 = false;
    this.cl = false;
    this.sa = new Array();
    this.nH = function () {
        if (this.fg && this.c3) return OVER_WIN_WIDTH;
        else
        return uS
    };
    this.addListener = function (a) {
        this.sa[a.id] = a
    };
    this.removeListener = function (a) {
        this.sa[a.id] = null
    };
    this.uq = function () {
        for (var a in this.sa) {
            if (this.sa[a] && this.sa[a].onresize) {
                this.sa[a].onresize()
            }
        }
        this.maplet.onresize()
    };
    this.g1 = function () {
        for (var a in this.sa) {
            if (this.sa[a]) {
                this.sa[a] = null
            }
            this.sa = null
        }
        this.clearImgs();
        this.pU = null;
        for (var b in this.ao) {
            try {
                if (this.ao[b] != null) {
                    MEvent.removeBuiltInListener(this.fC, b, this.ao[b]);
                    this.ao[b] = null
                }
            } catch (e) {}
            this.ao = null
        }
        this.img.overview = null;
        this.img.onclick = null;
        this.img.onmousedown = null;
        this.img.onmouseup = null;
        this.img.ondblclick = null;
        this.z2.w0 = null;
        this.z2.f9 = null;
        if (this.panel.parentNode != null) {
            _removeNode(this.panel)
        }
        this.maplet = null;
        _removeNode(this.img);
        _removeNode(this.shadow);
        xInoP(this)
    };
    this.onresize = function () {
        this.Nu86();
        this.uq()
    };
    this.close = function () {
        if (this.cl) return;
        if (typeof this.img == "undefined") {
            this.c3 = oo = false;
            return
        } else if (this.img.style.display == "none" && this.c3) {
            this.c3 = oo = false
        }
        K.apply(this);
        this.cl = true;
        this.yN = getTimeout(this, I, 10);
        this.c4 = false;
        this.uq()
    };
    this.open = function () {
        if (typeof this.img == "undefined") {
            this.c3 = oo = true;
            return
        }
        if (this.c4) return;
        K.apply(this);
        this.c4 = true;
        this.yN = getTimeout(this, J, 10);
        this.cl = false
    };
    this.qa = function (a) {
        var b = (px) ? 0 : 2;
        this.img = document.createElement("div");
        this.img.unselectable = "on";
        this.img.style.position = "absolute";
        this.img.style.zIndex = 1000;
        this.img.overview = this;
        this.img.style.cursor = (px) ? "hand" : "pointer";
        this.img.style.overflow = "hidden";
        this.img.style.display = "none";
        this.f61_2 = document.createElement("img");
        this.f61_2.unselectable = "on";
        this.f61_2.style.position = "absolute";
        this.f61_2.src = CTLIMG_RESOURCE[0].url;
        this.f61_2.style.width = CTLIMG_RESOURCE[0].w + "px";
        this.f61_2.style.height = CTLIMG_RESOURCE[0].h + "px";
        this.f61_2.B0E1 = "no";
        if (px) this.img.style.filter = "alpha(opacity=0)";
        else this.img.style.opacity = "0";
        this.img.onmousedown = function (e) {
            PI7(e || window.event)
        };
        this.img.onmouseup = function (e) {
            this.overview.l1(e);
            PI7(e || window.event)
        };
        this.img.ondblclick = function (e) {
            PI7(e || window.event)
        };
        this.img.onclick = function (e) {
            PI7(e || window.event);
            if (this.overview.c3) {
                this.overview.close()
            } else {
                this.overview.open()
            }
        };
        a.appendChild(this.img);
        this.img.appendChild(this.f61_2);
        a.appendChild(this.panel);
        a.appendChild(this.shadow);
        this.ao["mousedown"] = MEvent.bindDom(this.fC, "mousedown", this, this.w0);
        this.ao["mouseup"] = MEvent.bindDom(this.fC, "dblclick", this, D);
        this.onresize();
        if (!this.fg) return;
        if (oo) {
            this.open()
        } else {
            this.close()
        }
    };
    this.clearImgs = function () {
        for (var i in this.pU) E.apply(this, [i])
    };
    var E = function (a) {
        try {
            if (this.pU[a] != null) {
                _removeNode(this.pU[a]);
                this.pU[a].onmousedown = null;
                this.pU[a].onerror = null;
                this.pU[a].onload = null;
                this.pU[a] = null;
                delete this.pU[a]
            }
        } catch (e) {}
    };
    var F = function () {
        for (var i in this.pU) {
            if (this.pU[i] && !this.pU[i].c2) E.apply(this, [i])
        }
    };
    this.paint = function () {
        if (!this.c3 || !this.fg) return;
        this.width = OVER_WIN_WIDTH - 10;
        this.height = OVER_WIN_HEIGHT - 10;
        this.gx = this.maplet.gx;
        this.gA = this.maplet.gA;
        this.AG = Math.max(Math.max(0, MIN_ZOOM_LEVEL - 2), uW[this.maplet.AG]);
        this.imgWidth = this.maplet.imgWidth;
        this.imgHeight = this.maplet.imgHeight;
        this.xK = this.maplet.xK;
        if (this.yl != this.maplet.yl) {
            this.yl = this.maplet.yl;
            this.clearImgs()
        }
        var a = this.yl;
        this.z4 = Math.ceil((this.width) / (this.imgWidth) / 2);
        this.z5 = Math.ceil((this.height) / (this.imgHeight) / 2);
        this.xg = sj[this.AG];
        this.xf = qP[this.AG];
        this.sR = sI[this.AG] + "/";
        this.gD = Math.floor((this.maplet.gA) / this.xg);
        this.gE = Math.floor((this.maplet.gx) / this.xf);
        if (this.gD < 0) this.gD += 1;
        this.mapX = this.width / 2 - Math.round(((this.gA * wp) % (this.xg * wp)) * this.imgWidth / (this.xg * wp));
        if (this.gx >= 0) {
            this.mapY = this.height / 2 - this.imgHeight + Math.round(((this.gx * wp) % (this.xf * wp)) * this.imgHeight / (this.xf * wp))
        } else {
            this.mapY = this.height / 2 + Math.round(((this.gx * wp) % (this.xf * wp)) * this.imgHeight / (this.xf * wp))
        }
        var b = nM[this.AG];
        this.sZ = 0;
        this.s1 = 0;
        this.tf1 = this.width;
        this.tg = this.height;
        this.s2 = parseInt(this.gD);
        this.s3 = parseInt(this.gE);
        this.th = parseInt(this.gD);
        this.ti = parseInt(this.gE);
        var c = (360 / sj[this.AG]);
        this.gk = 1.0;
        this.wT = 0.0;
        for (var i in this.pU) {
            if (this.pU[i] != null) {
                this.pU[i].c2 = false
            }
        }
        for (ix = -this.z4 - 1; ix <= this.z4; ix++) {
            for (iy = -this.z5 - 1; iy <= this.z5; iy++) {
                try {
                    var d = this.maplet.strImgUrl + "mapbank/" + a + "/" + this.sR;
                    var f = parseInt(this.gD + ix);
                    var g = parseInt(this.gE + iy);
                    f = (f) % c;
                    if (f >= (c / 2)) f -= c;
                    if (f < (-c / 2)) f += c;
                    var h = parseInt(Math.floor((f) / b));
                    var j = parseInt(Math.floor((g) / b)); {
                        if (h < 0) h += 1;
                        if (j < 0) j += 1
                    }
                    var k = (f) - h * b;
                    var l = (g) - j * b;
                    d += h + "_" + j + "/";
                    d += k + "_" + l + "." + this.xK;
                    var m = (ix * this.imgWidth) + parseInt(this.mapX);
                    var n = (-(iy * this.imgHeight) + parseInt(this.mapY));
                    var o = n;
                    if (this.yl != "aerial" && this.yl.indexOf("aerial") < 0) {
                        n = n + w8[this.AG]
                    }
                    if (m < -this.imgWidth || m > this.width || n > this.height || n < -this.imgHeight) continue;
                    if (this.sZ < (m + this.imgWidth)) {
                        this.sZ = (m + this.imgWidth);
                        this.s2 = parseInt(this.gD) + parseInt(ix)
                    }
                    if (this.s1 < (n + this.imgHeight)) {
                        this.s1 = (n + this.imgHeight);
                        this.ti = parseInt(this.gE) + parseInt(iy)
                    }
                    if (this.tf1 > m) {
                        this.tf1 = m;
                        this.th = parseInt(this.gD) + parseInt(ix)
                    }
                    if (this.tg > n) {
                        this.tg = n;
                        this.s3 = parseInt(this.gE) + parseInt(iy)
                    }
                    var p = "__ov_ctrl_" + ((this.AG).toString(16) + (this.gD + ix).toString(16) + 'l' + (this.gE + iy).toString(16)).toLowerCase();
                    if (d && d.indexOf("NaN") < 0) {
                        if (this.pU[p] == null) {
                            this.pU[p] = new Image();
                            this.pU[p].id = p;
                            this.pU[p].name = p;
                            this.pU[p].ntry = "0";
                            this.pU[p].unselectable = "on";
                            this.pU[p].style.position = "absolute";
                            this.pU[p].onmousedown = function () {
                                return false
                            };
                            this.pU[p].B0E1 = "no";
                            this.pU[p].src = d
                        }
                        var q = (m + this.imgWidth / 2 - this.width / 2) * this.gk - (n + this.imgHeight / 2 - this.height / 2) * this.wT + this.width / 2;
                        var r = (m + this.imgWidth / 2 - this.width / 2) * this.wT + (n + this.imgHeight / 2 - this.height / 2) * this.gk + this.height / 2;
                        this.pU[p].style.top = parseInt(r - this.imgHeight / 2) + "px";
                        this.pU[p].style.left = parseInt(q - this.imgWidth / 2) + "px";
                        this.pU[p].c2 = true
                    }
                    d = null;
                    p = null
                } catch (e) {}
            }
        }
        for (var i in this.pU) {
            var s = this.pU[i];
            if (s && s.c2 && s.parentNode != this._n1) this._n1.appendChild(s)
        }
        F.apply(this);
        G.apply(this);
        this._n1.style.top = this._n1.style.left = "0px"
    };
    var G = function () {
        var a = parseInt(this.maplet.width * this.maplet.xg / this.xg);
        var b = parseInt(this.maplet.height * this.maplet.xf / this.xf);
        if (a > this.width && b > this.height) {
            H.apply(this, [false])
        } else {
            this.z3.style.left = parseInt(this.width - a) / 2 + "px";
            this.z3.style.top = parseInt(this.height - b) / 2 + "px";
            this.z3.style.width = (a) + "px";
            this.z3.style.height = (b) + "px";
            this.z1.style.left = parseInt(this.width - a) / 2 + "px";
            this.z1.style.top = parseInt(this.height - b) / 2 + "px";
            this.z1.style.width = (a) + "px";
            this.z1.style.height = (b) + "px";
            this.z2.style.left = parseInt(this.width - a) / 2 + "px";
            this.z2.style.top = parseInt(this.height - b) / 2 + "px";
            this.z2.style.width = (a) + "px";
            this.z2.style.height = (b) + "px";
            H.apply(this, [true])
        }
    };
    var H = function (a) {
        this.z3.style.visibility = a ? "visible" : "hidden";
        this.z1.style.visibility = a ? "visible" : "hidden";
        this.z2.style.visibility = a ? "visible" : "hidden"
    };
    this.getRect = function () {
        var r = {
            min: {
                x: 0,
                y: 0
            },
            max: {
                x: 0,
                y: 0
            }
        };
        if (typeof this.img != "undefined") {
            var a = (this.panel.style.display != "none");
            var b = (this.img.style.display != "none");
            if (a || b) {
                var d = this.c3 ? this.shadow : this.img;
                r = {
                    min: {
                        x: d.offsetLeft,
                        y: d.offsetTop
                    },
                    max: {
                        x: 0,
                        y: 0
                    }
                };
                r.max.x = r.min.x + d.offsetWidth;
                r.max.y = r.min.y + d.offsetHeight
            }
        }
        return r
    };
    var I = function () {
        var a = (this.panel.style.display != "none");
        if (this.fg) this.img.style.display = "";
        this.uq();
        K.apply(this);
        H.apply(this, [false]);
        this.shadow.style.display = "none";
        if (this.fg || a) {
            with(this.panel.style) {
                if (px) {
                    filter = "alpha(opacity=100)"
                } else {
                    opacity = "1"
                }
            }
        }
        if (this.fg) {
            with(this.f61_2.style) {
                left = "-26px";
                top = "-124px"
            }
        }
        with(this.img.style) {
            if (px) {
                filter = "alpha(opacity=0)"
            } else {
                opacity = "0"
            }
        }
        var b = 0,
            d = 10;
        var p = {
            b: 0,
            c: 1
        };
        var c = {
            b: 0,
            c: 1
        };

        function R78() {
            if (b < d) {
                b++;
                if (px) {
                    this.panel.style.filter = "alpha(opacity=" + (100 - L(b, p.b, p.c, d) * 100) + ")";
                    if (this.fg) this.img.style.filter = "alpha(opacity=" + L(b, c.b, c.c, d) * 100 + ")";
                    else this.img.style.filter = "alpha(opacity=" + (100 - L(b, c.b, c.c, d) * 100) + ")"
                } else {
                    this.panel.style.opacity = 1 - L(b, p.b, p.c, d);
                    if (this.fg) this.img.style.opacity = L(b, c.b, c.c, d);
                    else this.img.style.opacity = 1 - L(b, c.b, c.c, d)
                }
                this.yN = getTimeout(this, R78, 100)
            } else {
                this.panel.style.display = "none";
                this.img.style.display = this.fg ? "" : "none";
                this.cl = false;
                this.c3 = false;
                this.uq()
            }
        };
        R78.apply(this)
    };
    var J = function () {
        if (this.panel.style.display != "none") return;
        K.apply(this);
        H.apply(this, [false]);
        with(this.panel.style) {
            display = this.fg ? "" : "none";
            if (px) {
                filter = "alpha(opacity=0)"
            } else {
                opacity = "0"
            }
        }
        with(this.img.style) {
            display = this.fg ? "" : "none";
            if (px) {
                filter = "alpha(opacity=0)"
            } else {
                opacity = "0"
            }
        }
        with(this.f61_2.style) {
            top = "-125px";
            left = "-42px"
        }
        var a = 0,
            d = 10;
        var p = {
            b: 0,
            c: 1
        };
        var b = {
            b: 0,
            c: 1
        };

        function R78() {
            if (a < d) {
                a++;
                if (px) {
                    this.panel.style.filter = "alpha(opacity=" + L(a, p.b, p.c, d) * 100 + ")";
                    this.img.style.filter = "alpha(opacity=" + L(a, b.b, b.c, d) * 100 + ")"
                } else {
                    this.panel.style.opacity = L(a, p.b, p.c, d);
                    this.img.style.opacity = L(a, b.b, b.c, d)
                }
                this.yN = getTimeout(this, R78, 100)
            } else {
                if (px) {
                    this.panel.style.filter = null
                } else {
                    this.shadow.style.opacity = 1
                }
                this.shadow.style.display = this.fg ? "" : "none";
                this.c4 = false;
                this.c3 = true;
                this.uq();
                this.paint()
            }
        };
        R78.apply(this)
    };
    var K = function () {
        if (this.yN) {
            window.clearTimeout(this.yN);
            this.yN = null
        }
    };
    var L = function (a, b, c, d) {
        if (a == 0) return b;
        if (a == d) return b + c;
        if ((a /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (a - 1)) + b;
        return c / 2 * (-Math.pow(2, -10 * --a) + 2) + b
    };
    this.J6i = function (a) {
        a = a || {};
        if (typeof a.type != "number" && !(a.type == Maplet.LEFT_TOP || a.type == Maplet.LEFT_BOTTOM || a.type == Maplet.RIGHT_TOP || a.type == Maplet.LEFT_BOTTOM)) a.type = Maplet.RIGHT_BOTTOM;
        if (typeof a.marginx != "number") a.marginx = 6;
        if (typeof a.marginy != "number") a.marginy = 6;
        return a
    };
    this.setLocation = function (a) {
        this.location = this.J6i(a);
        this.Nu86()
    };
    this.resizeTo = function (w, h) {
        if (typeof w != "number") {
            w = 150
        } else {
            if (w < 100) w = 100;
            else if (w > 210) w = 210
        }
        if (typeof h != "number") {
            h = 140
        } else {
            if (h < 100) h = 100;
            else if (h > 210) h = 210
        }
        OVER_WIN_WIDTH = w;
        OVER_WIN_HEIGHT = h;
        this.onresize();
        this.paint()
    };
    var M = function () {
        with(this.location) {
            if (type == Maplet.LEFT_TOP) {
                u = marginx;
                v = marginy;
                z = u + _8L8.bHC7B + 4;
                A = v + _8L8.n4Y7 + 4
            } else if (type == Maplet.LEFT_BOTTOM) {
                u = marginx;
                v = this.maplet.height - OVER_WIN_HEIGHT - marginy;
                z = u + _8L8.bHC7B + 4;
                A = v + OVER_WIN_HEIGHT - uS - _8L8.n4Y7 - 1
            } else if (type == Maplet.RIGHT_TOP) {
                u = this.maplet.width - OVER_WIN_WIDTH - marginx;
                v = marginy;
                z = u + OVER_WIN_WIDTH - uS - _8L8.bHC7B - 2;
                A = v + _8L8.n4Y7 + 4
            } else if (type == Maplet.RIGHT_BOTTOM) {
                u = this.maplet.width - OVER_WIN_WIDTH - marginx;
                v = this.maplet.height - OVER_WIN_HEIGHT - marginy;
                z = u + OVER_WIN_WIDTH - uS - _8L8.bHC7B - 2;
                A = v + OVER_WIN_HEIGHT - uS - _8L8.n4Y7 - 1
            }
        }
    };
    this.Nu86 = function () {
        M.apply(this);
        with(this.panel.style) {
            width = OVER_WIN_WIDTH + "px";
            height = OVER_WIN_HEIGHT + "px";
            left = u + "px";
            top = v + "px"
        }
        with(this.shadow.style) {
            width = OVER_WIN_WIDTH + _8L8.M0mx7 + "px";
            height = OVER_WIN_HEIGHT + _8L8.M0mx7 + "px";
            left = u - _8L8.M0mx7 / 2 + "px";
            top = v - _8L8.M0mx7 / 2 + "px"
        }
        with(this.fC.style) {
            width = OVER_WIN_WIDTH - _8L8.bHC7B * 2 - $9tU(borderWidth) * 2 + "px";
            height = OVER_WIN_HEIGHT - _8L8.n4Y7 * 2 - $9tU(borderWidth) * 2 + "px";
            left = _8L8.bHC7B + "px";
            top = _8L8.n4Y7 + "px"
        }
        with(this._n1.style) {
            width = this.fC.style.width;
            height = this.fC.style.height;
            top = left = "0px"
        }
        with(this.img.style) {
            width = uS + "px";
            height = uS + "px";
            left = z + "px";
            top = A + "px"
        }
        with(this.f61_2.style) {
            if (this.c3) {
                top = "-125px";
                left = "-42px"
            } else {
                left = "-26px";
                top = "-124px"
            }
        }
        this.shadow.innerHTML = "";
        if (_sqi) {
            for (var i = 0; i < this.$9T1.length; i++) {
                var a = document.createElement("div");
                a.unselectable = "on";
                a.style.position = "absolute";
                a.style.zIndex = i;
                a.style.backgroundColor = "black";
                a.setAttribute(Mq_mL, true);
                a.style.left = i * 2 + "px";
                a.style.top = i * 2 + "px";
                a.style.width = (OVER_WIN_WIDTH + (this.$9T1.length - i) * 4 + 2) + "px";
                a.style.height = (OVER_WIN_HEIGHT + (this.$9T1.length - i) * 4 + 2) + "px";
                if (px) a.style.filter = "alpha(opacity=" + this.$9T1[i] + ")";
                else a.style.opacity = this.$9T1[i] / 100;
                this.shadow.appendChild(a)
            }
        } else {
            var x = _8L8.M0mx7 / 2 - _8L8.G4mB;
            var y = x;
            var w = _8L8.GmM2p;
            var h = _8L8.GmM2p;
            var s = ["<div style=\"position:absolute;left:" + x + "px;top:" + y + "px;width:" + w + "px;height:" + h + "px;overflow:hidden;\"><img src=\"" + CTLIMG_RESOURCE[0].url + "\" style=\"position:absolute;left:-28px;top:-103px;\"></div>"];
            x += _8L8.GmM2p;
            w = OVER_WIN_WIDTH - _8L8.GmM2p + 1;
            h = _8L8.G4mB;
            s.push("<div style=\"position:absolute;left:" + x + "px;top:" + y + "px;width:" + w + "px;height:" + h + "px;overflow:hidden;\"><img src=\"" + CTLIMG_RESOURCE[0].url + "\" style=\"position:absolute;left:0px;top:-226px;\"></div>");
            x += w;
            w = _8L8.GmM2p;
            h = w;
            s.push("<div style=\"position:absolute;left:" + x + "px;top:" + y + "px;width:" + w + "px;height:" + h + "px;overflow:hidden;\"><img src=\"" + CTLIMG_RESOURCE[0].url + "\" style=\"position:absolute;left:-38px;top:-103px;\"></div>");
            x = OVER_WIN_WIDTH + _8L8.GmM2p + _8L8.G4mB;
            y += _8L8.GmM2p;
            h = OVER_WIN_HEIGHT - _8L8.GmM2p + 1;
            s.push("<div style=\"position:absolute;left:" + x + "px;top:" + y + "px;width:" + w + "px;height:" + h + "px;overflow:hidden;\"><img src=\"" + CTLIMG_RESOURCE[0].url + "\" style=\"position:absolute;left:-81px;top:0px;\"></div>");
            x = x - _8L8.G4mB - 1;
            y += h;
            w = _8L8.GmM2p;
            h = w;
            s.push("<div style=\"position:absolute;left:" + x + "px;top:" + y + "px;width:" + w + "px;height:" + h + "px;overflow:hidden;\"><img src=\"" + CTLIMG_RESOURCE[0].url + "\" style=\"position:absolute;left:-38px;top:-113px;\"></div>");
            x = _8L8.M0mx7 / 2 - _8L8.G4mB + _8L8.GmM2p;
            y += _8L8.G4mB + 1;
            w = OVER_WIN_WIDTH - _8L8.GmM2p + 1;
            s.push("<div style=\"position:absolute;left:" + x + "px;top:" + y + "px;width:" + w + "px;height:" + h + "px;overflow:hidden;\"><img src=\"" + CTLIMG_RESOURCE[0].url + "\" style=\"position:absolute;left:0px;top:-229px;\"></div>");
            x = _8L8.M0mx7 / 2 - _8L8.G4mB;
            y = y - _8L8.G4mB - 1;
            w = _8L8.GmM2p;
            h = w;
            s.push("<div style=\"position:absolute;left:" + x + "px;top:" + y + "px;width:" + w + "px;height:" + h + "px;overflow:hidden;\"><img src=\"" + CTLIMG_RESOURCE[0].url + "\" style=\"position:absolute;left:-28px;top:-113px;\"></div>");
            y = _8L8.M0mx7 / 2 - _8L8.G4mB + _8L8.GmM2p;
            h = OVER_WIN_HEIGHT - _8L8.GmM2p + 1;
            w = _8L8.G4mB;
            s.push("<div style=\"position:absolute;left:" + x + "px;top:" + y + "px;width:" + w + "px;height:" + h + "px;overflow:hidden;\"><img src=\"" + CTLIMG_RESOURCE[0].url + "\" style=\"position:absolute;left:-78px;top:0px;\"></div>");
            this.shadow.innerHTML = s.join("")
        }
    };
    var N = function () {
        var a = O.apply(this);
        var b = 0,
            vk = 0;
        if (a.min.x < 0) b = 5;
        if (a.min.y < 0) vk = 5;
        if (a.max.x > $9tU(this.fC.style.width)) b = -5;
        if (a.max.y > $9tU(this.fC.style.height)) vk = -5;
        if ((b != 0 || vk != 0)) {
            this.panTo(b, vk)
        }
    };
    var O = function () {
        var r = {
            min: {
                x: this.z2.offsetLeft,
                y: this.z2.offsetTop
            },
            max: {
                x: 0,
                y: 0
            }
        };
        r.max.x = r.min.x + this.z2.offsetWidth;
        r.max.y = r.min.y + this.z2.offsetHeight;
        return r
    };
    this.panTo = function (x, y) {
        this._n1.style.top = $9tU(this._n1.style.top) + y + "px";
        this._n1.style.left = $9tU(this._n1.style.left) + x + "px"
    };
    var P = function () {
        if (this.fs || this.c0) return;
        var a = parseInt(this._n1.style.left);
        var b = parseInt(this._n1.style.top);
        if ((a + this.tf1) >= 0 || (a + this.sZ - this.width) <= 0 || (b + this.tg) >= 0 || (b + this.s1 - this.height) <= 0) {
            this.fs = true;
            Q.apply(this)
        }
    };
    var Q = function () {
        if (this.fs == false) return;
        var a = parseInt(this._n1.style.left);
        var b = parseInt(this._n1.style.top);
        if ((a + this.tf1) >= 0 || (a + this.sZ - this.width) <= 0) {
            if (this.c0 == true) return;
            this.c0 = true;
            var c = 0;
            var d = 0;
            if ((a + this.tf1) >= 0) {
                this.th--;
                this.tf1 -= parseInt(this.imgWidth);
                c = this.th;
                d = this.tf1
            }
            if ((a + this.sZ - this.width) <= 0) {
                this.s2++;
                d = this.sZ;
                this.sZ += parseInt(this.imgWidth);
                c = this.s2
            }
            var e = c;
            var f = nM[this.AG];
            var g = parseInt(360 / sj[this.AG]);
            c = (c) % g;
            if (c >= (g / 2)) c -= g;
            if (c < (-g / 2)) c += g;
            var h = this.yl;
            for (var i = this.ti; i <= this.s3; i++) {
                var j = i;
                var k = (-(i - this.ti + 1) * this.imgHeight) + this.s1;
                R.apply(this, [d, k, c, j, e, i, h])
            }
            this.c0 = false
        }
        if ((b + this.tg) >= 0 || (b + this.s1 - this.height) <= 0) {
            if (this.c0 == true) return;
            this.c0 = true;
            var j = 0;
            var k = 0;
            if ((b + this.tg) >= 0) {
                this.s3++;
                this.tg -= parseInt(this.imgHeight);
                j = this.s3;
                k = this.tg
            }
            if ((b + this.s1 - this.height) <= 0) {
                this.ti--;
                k = this.s1;
                this.s1 += parseInt(this.imgHeight);
                j = this.ti
            }
            var i = j;
            var f = nM[this.AG];
            var g = parseInt(360 / sj[this.AG]);
            var h = this.yl;
            for (var e = this.th; e <= this.s2; e++) {
                var c = e;
                c = (c) % g;
                if (c >= (g / 2)) c -= g;
                if (c < (-g / 2)) c += g;
                var d = ((e - this.th) * this.imgWidth) + this.tf1;
                R.apply(this, [d, k, c, j, e, i, h])
            }
            this.c0 = false
        }
        this.fs = false
    };
    var R = function (a, b, c, d, e, f, g) {
        var h = nM[this.AG];
        var i = parseInt(Math.floor((c) / h));
        var j = parseInt(Math.floor((d) / h));
        if (i < 0) i += 1;
        if (j < 0) j += 1;
        var k = (c) - i * h;
        var l = (d) - j * h;
        var m = this.maplet.strImgUrl.replace("img", "img" + this.maplet.aK$3(k, l)) + "mapbank/" + g + "/" + this.sR;
        var n = "__ov_ctrl_" + ((this.AG).toString(16) + e.toString(16) + 'l' + f.toString(16)).toLowerCase();
        m += i + "_" + j + "/";
        m += k + "_" + l + "." + this.xK;
        if (m && m.indexOf("NaN") < 0) {
            if (this.pU[n] == null) {
                this.pU[n] = new Image();
                this.pU[n].id = n;
                this.pU[n].name = n;
                this.pU[n].ntry = "0";
                this.pU[n].unselectable = "on";
                this.pU[n].style.position = "absolute";
                this.pU[n].onmousedown = function () {
                    return false
                };
                this.pU[n].B0E1 = "no";
                this.pU[n].src = m
            }
            var o = (a + this.imgWidth / 2 - this.width / 2) * this.gk - (b + this.imgHeight / 2 - this.height / 2) * this.wT + this.width / 2;
            var p = (a + this.imgWidth / 2 - this.width / 2) * this.wT + (b + this.imgHeight / 2 - this.height / 2) * this.gk + this.height / 2;
            this.pU[n].style.top = parseInt(p - this.imgHeight / 2) + "px";
            this.pU[n].style.left = parseInt(o - this.imgWidth / 2) + "px";
            this.pU[n].c2 = true;
            this._n1.div.appendChild(this.pU[n]);
            n = null
        }
        m = null
    };
    this.location = this.J6i(OVER_LOCATION)
};
_8L8.bHC7B = 2;
_8L8.n4Y7 = 2;
_8L8.G4mB = 3;
_8L8.M0mx7 = 16;
_8L8.GmM2p = 7;

function MStandardControl(b, c, d, e) {
    this.x6 = (typeof b == "undefined") ? "mapbar" : b;
    this.left = (typeof c == "undefined") ? 0 : parseInt(c);
    this.top = (typeof d == "undefined") ? 0 : parseInt(d);
    this.fi = (typeof e == "undefined") ? 0 : parseInt(e);
    this.id = new Date().getTime() + parseInt(Math.random() * 1000);
    this.nR = null;
    this.initialize = function (a) {
        this.maplet = a;
        if (this.maplet.gc[this.id] == null) {
            if (!this.fi && this.maplet.height < 300) {
                if (bsc) this.fi = 1
            }
            this.maplet.gc[this.id] = this;
            this.nR = new gb(typeof this.x6 != "object" ? null : this.x6);
            this.nR.initialize(this.maplet);
            if (this.maplet.controlCanvas == null) this.maplet.controlCanvas = this.nR
        }
    };
    this.remove = function () {
        this.maplet = null;
        if (this.nR) {
            if (this.nR == this.maplet.controlCanvas) this.maplet.controlCanvas = null;
            this.nR.g1();
            this.nR = null
        }
        xInoP(this)
    };
    this.toString = function () {
        return 'com.mapbar.maplet.MStandardControl'
    }
};

function MLookupControl(b, c, d) {
    this.ya = (typeof b == "undefined") ? tX("%u62CD%uCB0F%uD02B%uF3C7") : b;
    this.left = (typeof c == "undefined") ? 0 : parseInt(c);
    this.top = (typeof d == "undefined") ? 0 : parseInt(d);
    this.id = new Date().getTime() + parseInt(Math.random() * 1000);
    this.onresize = function (a) {
        if (this.maplet.overview.nF() <= 37) {
            this.tY.style.left = (this.maplet.width - 132 + this.left - this.maplet.overview.nH()) + "px"
        } else {
            this.tY.style.left = (this.maplet.width - 132 + this.left) + "px"
        }
    };
    this.initialize = function (a) {
        this.maplet = a;
        if (this.maplet.gc[this.id] == null) {
            this.maplet.gc[this.id] = this;
            this.tY = document.createElement("div");
            this.tY.style.position = "absolute";
            this.onresize(this.maplet);
            this.tY.style.top = (10 + this.top) + "px";
            this.tY.style.zIndex = 10;
            this.tY.style.visibility = "visible";
            this.tU = document.createElement("img");
            this.tU.unselectable = "on";
            this.tU.src = strImgsvrUrl + "images/lookup.png";
            this.tU.alt = this.ya;
            this.tU.style.cursor = "hand";
            this.tU.style.cursor = "pointer";
            this.tU.panel = this;
            this.tU.maplet = this.maplet;
            this.tU.onclick = function () {
                this.maplet.setMode("lookup");
                MEvent.trigger(this.panel, "onclick")
            };
            this.tY.appendChild(this.tU);
            this.maplet.panel.appendChild(this.tY)
        }
    };
    this.remove = function () {
        this.maplet = null;
        if (this.tY != null && this.tY.parentNode != null) {
            this.tY.parentNode.removeChild(this.tY);
            this.tY = null;
            this.tU.maplet = null;
            this.tU.onclick = null;
            this.tU = null
        }
    };
    this.toString = function () {
        return 'com.mapbar.maplet.MLookupControl'
    }
};
var MContextMenuItem = function (b, c) {
    this.ao = [];
    this.title = b;
    this.callback = (typeof c == "undefined") ? null : c;
    this.t6 = document.createElement("tr");
    this.tW = document.createElement("td");
    this.tW.className = "contextmenuitem";
    this.tW.innerHTML = "&nbsp;" + b;
    this.t6.appendChild(this.tW);
    this.uK = function (e) {
        this.panel.hide();
        if (typeof this.callback == "function" && this.callback) {
            this.callback.apply(null, [this, this.panel, this.panel.overlay])
        } else if (typeof this.callback == "string" && this.callback) {
            eval(this.callback)
        } else {
            MEvent.trigger(this, "select", this, this.panel, this.panel.overlay)
        }
    };
    this.uG = function (e) {
        this.t6.style.backgroundColor = "#d2e1ff"
    };
    this.uJ = function (e) {
        this.t6.style.backgroundColor = "#FFFFFF"
    };
    this.paint = function (a) {
        this.panel = a;
        this.panel.t8.appendChild(this.t6)
    };
    this.toString = function () {
        return "com.mapbar.maplet.MContextMenuItem"
    };
    this.ao["click"] = MEvent.bindDom(this.t6, "click", this, this.uK);
    this.ao["mouseover"] = MEvent.bindDom(this.t6, "mouseover", this, this.uG);
    this.ao["mouseout"] = MEvent.bindDom(this.t6, "mouseout", this, this.uJ);
    this.remove = function () {
        if (this.panel) this.panel = null;
        for (var a in this.ao) {
            MEvent.removeBuiltInListener(this.t6, a, this.ao[a]);
            delete this.ao[a]
        }
        this.ao = null;
        if (this.t6) {
            if (this.t6.parentNode) _removeNode(this.t6);
            this.t6 = null
        }
        if (typeof this.callback == "function" && this.callback) this.callback = null
    }
};
var MContextMenu = function () {
    this.overlay = null;
    this.u5 = {};
    this.B882 = "";
    this.qt = new Array();
    this.id = new Date().getTime() + parseInt(Math.random() * 1000);
    this.tY = document.createElement("div");
    this.tY.className = "mapcontextmenu";
    this.t7 = document.createElement("table");
    this.t7.className = "contextmenutable";
    this.t8 = document.createElement("tbody");
    this.t7.appendChild(this.t8);
    this.tY.appendChild(this.t7);
    this.initialize = function (a) {
        this.maplet = a;
        this.maplet.sF.appendChild(this.tY)
    };
    this.a36IW = function (a) {
        this.B882 = a
    };
    this.Bcd = function (a) {
        this.overlay = a
    };
    this.addOverlay = function (a) {
        this.u5[a.id] = a
    };
    this.removeOverlay = function (a) {
        if (this.u5[a.id]) {
            if (this.overlay == this.u5[a.id]) this.hide();
            this.u5[a.id] = null;
            delete this.u5[a.id]
        }
    };
    this.getOverlaySize = function () {
        var c = 0;
        for (var i in this.u5) c++;
        return c
    };
    this.containsOverlay = function (a) {
        return typeof this.u5[a.id] != "undefined" && this.u5[a.id]
    };
    this.update = function () {
        for (var i in this.t8.childNodes) {
            if (typeof this.t8.childNodes[i] == "object") {
                if (this.t8.childNodes[i].panel != null) this.t8.childNodes[i].panel = null;
                this.t8.removeChild(this.t8.childNodes[i])
            }
        }
        for (var a = 0; a < this.qt.length; a++) {
            this.qt[a].paint(this)
        }
    };
    this.addItem = function (a, b) {
        if (typeof b == "undefined") {
            this.qt[this.qt.length] = a
        } else {
            b = parseInt(b);
            this.qt.splice(b, 0, a)
        }
        this.update()
    };
    this.finalize = function () {
        this.remove(true)
    };
    this.remove = function (a) {
        if (this.getOverlaySize() > 0) {
            for (var i in this.u5) this.u5[i].removeContextMenu()
        }
        if (typeof this.maplet == "object" && this.maplet) {
            if (this == this.maplet.xc) this.maplet.xc = null;
            this.maplet = null
        }
        if (typeof a != "boolean") a = false;
        if (a) {
            this.clear();
            _removeNode(this.tY);
            this.tY = null;
            this.qt = null
        }
    };
    this.removeItem = function (a) {
        if (a < this.qt.length) this.qt[a].remove();
        this.qt.splice(a, 1);
        this.update()
    };
    this.clear = function () {
        for (var i = 0; i < this.qt.length; i++) {
            this.qt[i].remove()
        }
        this.qt = new Array();
        this.update()
    };
    this.show = function (x, y) {
        this.tY.style.left = parseInt(x) + "px";
        this.tY.style.top = parseInt(y) + "px";
        this.tY.style.visibility = "visible"
    };
    this.hide = function () {
        this.tY.style.visibility = "hidden"
    };
    this.toString = function () {
        return "com.mapbar.maplet.MContextMenu"
    }
};
var MSnapshotBox = function (p, q) {
    if (!(p instanceof Maplet) && !p) throw new Error("parameter para_maplet is invalid Maplet object.");
    var r = (typeof q != "string" || !q) ? "" : q + "/";
    var s = SNAPSHOT_SERVER;
    var t = SNAPSHOT_SERVER + "get";
    var u = p;
    var v = new Date().getTime();
    var z = [];
    var A = "MSnapshotSizeTip" + v;
    var B = A + "_td";
    var C = '<table cellpadding="2" cellspacing="0" style="background-color:#0E347F;color:#ff0;font-size:14px;font-family:Arial;-moz-user-select:none;-khtml-user-select:none;user-select:none;" onselectstart="return false;"><tr><td id="' + B + '"></td></tr></table>';
    var D = new fD(A, 0, 0, 0, 0, false, 24, C, u.panel);
    D.div.style.width = "auto";
    D.div.style.height = "auto";
    var E = "MSnapshotBox" + v;
    var F = '<table width="100%" height="100%" style="border:2px solid #0E347F;-moz-user-select:none;-khtml-user-select:none;user-select:none;" onselectstart="return false;" cellpadding="0" cellspacing="0"><tr><td style="background-color:#FFFFFF;filter:alpha(opacity=30);opacity:0.3;"></td></tr></table>';
    var G = new fD(E, 0, 0, 0, 0, false, 24, F, u.panel);
    G.div.style.overflow = "hidden";
    var H = 117;
    var I = 23;
    var J = "MSnapshotBar" + v;
    var K = "MSnapshotBtn_preview_" + v;
    var L = "MSnapshotBtn_download_" + v;
    var M = "MSnapshotBtn_cancel_" + v;
    var N = "";
    N = '<font id="' + K + '" class="snapshotTextBtn">\u9884\u89c8</font><font id="' + L + '" class="snapshotTextBtn">\u4fdd\u5b58</font><font id="' + M + '" class="snapshotTextBtn" style="border-right: 1px solid #0E347F;">\u53d6\u6d88</font>';
    var O = new fD(J, 0, 0, 0, 0, false, 24, N, u.panel);
    O.style.lineHeight = I + "px";
    var P = "mapbar_snapshot_iframe";
    var Q = null;
    var R = "mapbar_snapshot_frm";
    var S = null;
    var T = 0;
    var U = {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        rect: {
            min: {
                x: 0,
                y: 0
            },
            max: {
                x: 0,
                y: 0
            }
        },
        center: ""
    };
    this.O7di = false;
    this.nDvU = false;
    this.show = function () {
        if (z.length == 0) {
            z.push(MEvent.bindDom(document.getElementById(J), "mousedown", this, be));
            z.push(MEvent.bindDom(document.getElementById(K), "click", this, bc));
            z.push(MEvent.bindDom(document.getElementById(L), "click", this, bd));
            z.push(MEvent.bindDom(document.getElementById(M), "click", this, this.hide))
        }
        bm();
        this.hide();
        G.show();
        D.show()
    };
    this.hide = function () {
        var a = P6A4(this.hide);
        if (typeof a != "undefined" && a) {
            if (a.type == "click") {
                var b = typeof a.target != "undefined" ? a.target : a.srcElement;
                var c = b.id;
                if (c == M) MEvent.trigger(u, "snapshot_done", "cancel");
                else if (c == K) MEvent.trigger(u, "snapshot_done", "preview");
                else if (c == L) MEvent.trigger(u, "snapshot_done", "download")
            }
        }
        V();
        W();
        X()
    };
    var V = function () {
        G.hide();
        G.resize(0, 0)
    };
    var W = function () {
        D.hide();
        D.moveTo(-1000, -1000)
    };
    var X = function () {
        O.hide();
        O.resize(0, 0)
    };
    this.moveTo = function (x, y) {
        G.moveTo(x, y);
        var a = y - D.div.firstChild.clientHeight - 2;
        D.moveTo(x, a);
        if (y - D.div.offsetHeight < 0) {
            D.moveTo(x + 3, a + D.div.offsetHeight + 5)
        }
    };
    this.resize = function (w, h) {
        w = w < 0 ? 0 : w;
        h = h < 0 ? 0 : h;
        G.resize(w, h);
        this.v6P2(w + " x " + h)
    };
    this.v6P2 = function (a) {
        document.getElementById(B).innerHTML = a
    };
    this.isVisible = function () {
        return document.getElementById(E).style.visibility != "hidden" ? true : false
    };
    this.j64 = function () {
        this.O7di = true;
        bl();
        var x = U.x + U.width - H - 2;
        var y = U.y + U.height;
        if (y + I > u.height) y -= I + (px ? 4 : 3);
        O.resize(H, I);
        O.moveTo(x, y);
        O.show();
        u.k93("pointer", document.getElementById(K));
        u.k93("pointer", document.getElementById(L));
        u.k93("pointer", document.getElementById(M));
        MEvent.trigger(u, "snapshot_select", {
            x: U.x,
            y: U.y,
            width: U.width,
            height: U.height
        })
    };
    this.snapshot = function (a) {
        if (typeof a != "object") a = {};
        if (typeof a.mode != "string" || (a.mode != "fullscreen" && a.mode != "custom")) a.mode = SNAPSHOT_OPTIONS.mode;
        if (typeof a.x == "undefined" || isNaN(a.x)) a.x = 0;
        if (typeof a.y == "undefined" || isNaN(a.y)) a.y = 0;
        if (typeof a.width == "undefined" || isNaN(a.width)) a.width = u.width;
        if (typeof a.height == "undefined" || isNaN(a.height)) a.height = u.height;
        if (typeof a.zoom == "undefined" || isNaN(a.zoom)) a.zoom = u.getZoomLevel();
        if (typeof a.format != "string") a.format = SNAPSHOT_OPTIONS.format;
        if (typeof a.depth == "undefined" || isNaN(a.depth)) a.depth = SNAPSHOT_OPTIONS.depth;
        if (a.processMode != "string" && (a.processMode != "event" && a.processMode != "download")) a.processMode = SNAPSHOT_OPTIONS.processMode;
        bl.apply(this, [a]);
        Y.apply(this, [a])
    };
    var Y = function (a) {
        var b = {};
        b.center = Z.apply(this, [U.center]);
        b.point = "";
        b.Do6s = "";
        b.area = "";
        b.width = U.width;
        b.height = U.height;
        b.zoom = typeof a.zoom == "undefined" ? u.getZoomLevel() : a.zoom;
        b.format = typeof a.format == "undefined" ? SNAPSHOT_OPTIONS.format : a.format;
        b.depth = typeof a.depth == "undefined" ? SNAPSHOT_OPTIONS.depth : a.depth;
        b.processMode = typeof a.processMode == "undefined" ? SNAPSHOT_OPTIONS.processMode : a.processMode;
        b.S_88R = "";
        b.b0QBc = "";
        b.traffic = false;
        b.c3O = "";
        b._aX = "";
        var c = bf();
        if (c.length > 0) {
            b.point = [];
            for (var i = 0; i < c.length; i++) {
                var d = c[i];
                b.point.push(Z.apply(this, [d.sW.pt.getPid()]) + "," + d.text + "," + d.a_7$0 + "," + d.N81N + ",,," + d.src + "," + d.x9W07 + "," + d.c9566)
            }
            b.point = b.point.join("|")
        }
        var e = bg();
        if (e.length > 0) {
            b.Do6s = [];
            b.area = [];
            for (var i = 0; i < e.length; i++) {
                var f = [];
                var g = e[i].pts;
                for (var h = 0; h < g.length; h++) {
                    f.push(Z.apply(this, [g[h].getPid()]))
                }
                var j = e[i].brush;
                if (e[i].brush.fill) {
                    b.area.push(f.join(",") + ";" + bb(j.bgcolor) + ";" + (parseFloat(j.bgtransparency) / 100) + ";" + bb(j.color) + ";" + j.stroke + ";" + j.style + ";" + (parseFloat(j.transparency) / 100))
                } else {
                    b.Do6s.push(f.join(",") + ";" + bb(j.color) + ";" + j.stroke + ";" + j.style + ";" + (parseFloat(j.transparency) / 100))
                }
            }
            if (b.Do6s.length > 0) b.Do6s = b.Do6s.join("|");
            else b.Do6s = "";
            if (b.area.length > 0) b.area = b.area.join("|");
            else b.area = ""
        }
        var k = u.getEllipse();
        if (k.length > 0) {
            b.S_88R = [];
            for (var i = 0; i < k.length; i++) {
                var l = k[i];
                var j = l.brush;
                b.S_88R.push(Z.apply(this, [l.gC.getPid()]) + "," + l.sax + "," + $9tU(l.say, "") + "," + bb(j.bgcolor) + "," + (parseFloat(j.bgtransparency) / 100) + "," + bb(j.color) + "," + j.stroke + "," + j.style + "," + (parseFloat(j.transparency) / 100))
            }
            if (b.S_88R.length > 0) b.S_88R = b.S_88R.join("|");
            else b.S_88R = ""
        }
        var m = bh();
        if (m.length > 0) {
            b.b0QBc = [];
            for (var i = 0; i < m.length; i++) {
                var l = m[i];
                var j = l.b0QBc.brush;
                b.b0QBc.push(Z.apply(this, [l.b0QBc.b6y1.getPid()]) + "," + Z.apply(this, [l.b0QBc.mV31.getPid()]) + "," + l.KTTDd + "," + l.u7II + "," + bb(j.bgcolor) + "," + (parseFloat(j.bgtransparency) / 100) + "," + bb(j.color) + "," + j.stroke + "," + j.style + "," + (parseFloat(j.transparency) / 100))
            }
            if (b.b0QBc.length > 0) b.b0QBc = b.b0QBc.join("|");
            else b.b0QBc = ""
        }
        if (u.traffic && u.traffic.layer.getImgCount()) {
            b.traffic = true;
            b.c3O = u.traffic.options.city;
            b._aX = u.traffic.getTimestampDir()
        }
        bj.apply(this, [b])
    };
    var Z = function (a) {
        return a.indexOf(",") != -1 ? a.replace(",", "_") : a
    };
    var ba = function () {
        if (T >= 3) return;
        var b = S["taskId"].value;
        if (typeof _snapshot_result == "object" && _snapshot_result) {
            if (_snapshot_result.url != "inexistence") {
                switch (_snapshot_result.processMode) {
                case "event":
                case "preview":
                    MEvent.trigger(u, "snapshot", _snapshot_result.url);
                    break;
                default:
                    break
                }
                return
            }
        }
        window.setTimeout(function (a) {
            return function () {
                T++;
                new q1iCE(t + "?taskId=" + b, function () {
                    ba.apply(a)
                }).IB2TC()
            }
        }.apply(this, [this]), 1000)
    };
    var bb = function (a) {
        if (a.substring(0, 3).toLowerCase() == "rgb") {
            return a.replace(new RegExp(",", "g"), "@")
        }
        return a
    };
    var bc = function () {
        this.hide();
        var a = {};
        a.processMode = "preview";
        Y.apply(this, [a])
    };
    var bd = function () {
        this.hide();
        var a = {};
        a.processMode = "download";
        Y.apply(this, [a])
    };
    var be = function (e) {
        PI7(e)
    };
    var bf = function () {
        var a = [];
        var b = u.getMarkers();
        if (b.length > 0) {
            for (var i = 0; i < b.length; i++) {
                if (!b[i].icon) continue;
                if (!b[i].icon.isVisible()) continue;
                var c = b[i];
                var d = c.icon;
                var e = 0,
                    w00 = 0,
                    $JB$6 = 0,
                    A53 = 0;
                var f = 0,
                    a87JW = 0;
                f = e = parseInt(d.div.style.left);
                a87JW = w00 = parseInt(d.div.style.top);
                $JB$6 = d.div.clientWidth;
                A53 = d.div.clientHeight;
                var g = "",
                    b2O6 = "",
                    I_6 = "";
                if (b[i].label) {
                    var h = c.label;
                    g = h.getText();
                    b2O6 = parseInt(h.div.style.left);
                    I_6 = parseInt(h.div.style.top);
                    var j = h.div.clientWidth;
                    var k = h.div.clientHeight;
                    if (b2O6 < e) e = b2O6;
                    if (I_6 < w00) w00 = I_6;
                    if ((b2O6 + j) > (e + $JB$6)) $JB$6 = b2O6 + j;
                    if ((I_6 + k) > (w00 + A53)) A53 = I_6 + k
                }
                if (_isRectint(U.rect, {
                    min: {
                        x: e,
                        y: w00
                    },
                    max: {
                        x: e + $JB$6,
                        y: w00 + A53
                    }
                })) {
                    a.push({
                        x: f,
                        y: a87JW,
                        x9W07: b[i].icon.anchorX,
                        c9566: b[i].icon.anchorY,
                        src: d.getImgUrl(),
                        text: g,
                        a_7$0: b[i].label ? b[i].label.xoffset : 0,
                        N81N: b[i].label ? b[i].label.yoffset : 0,
                        sW: b[i]
                    })
                }
            }
        }
        return a
    };
    var bg = function () {
        var a = [];
        var b = u.getPolylines();
        if (b.length > 0) {
            for (var i = 0; i < b.length; i++) {
                var c = b[i].pts;
                var d = false;
                for (var e = 0; e < c.length; e++) {
                    var f = c[e].mapX;
                    var g = c[e].mapY;
                    if (_isInsideRect({
                        x: f,
                        y: g
                    }, U.rect)) {
                        d = true;
                        break
                    }
                    if (e > 0) {
                        var h = c[e - 1].mapX;
                        var j = c[e - 1].mapY;
                        var k = {
                            start: {
                                x: U.rect.max.x,
                                y: U.rect.max.y
                            },
                            end: {
                                x: U.rect.max.x,
                                y: U.rect.min.y
                            }
                        };
                        var l = {
                            start: {
                                x: h,
                                y: j
                            },
                            end: {
                                x: f,
                                y: g
                            }
                        };
                        if (_IsIntersect(k, l)) {
                            d = true;
                            break
                        }
                        k = {
                            start: {
                                x: U.rect.max.x,
                                y: U.rect.min.y
                            },
                            end: {
                                x: U.rect.min.x,
                                y: U.rect.min.y
                            }
                        };
                        if (_IsIntersect(k, l)) {
                            d = true;
                            break
                        }
                        k = {
                            start: {
                                x: U.rect.min.x,
                                y: U.rect.min.y
                            },
                            end: {
                                x: U.rect.min.x,
                                y: U.rect.max.y
                            }
                        };
                        if (_IsIntersect(k, l)) {
                            d = true;
                            break
                        }
                        k = {
                            start: {
                                x: U.rect.min.x,
                                y: U.rect.max.y
                            },
                            end: {
                                x: U.rect.max.x,
                                y: U.rect.max.y
                            }
                        };
                        if (_IsIntersect(k, l)) {
                            d = true;
                            break
                        }
                    }
                }
                if (!d && b[i].brush.fill) {
                    var m = b[i].pts;
                    var n = [];
                    for (var e = 0; e < m.length; e++) n.push({
                        x: m[e].mapX,
                        y: m[e].mapY
                    });
                    var o = [{
                        x: U.rect.max.x,
                        y: U.rect.max.y
                    }, {
                        x: U.rect.max.x,
                        y: U.rect.min.y
                    }, {
                        x: U.rect.min.x,
                        y: U.rect.min.y
                    }, {
                        x: U.rect.min.x,
                        y: U.rect.max.y
                    }];
                    for (var e = 0; e < n.length; e++) {
                        if (_isInsidePolygon(n[e], o)) {
                            d = true
                        }
                    }
                    if (!d) {
                        for (var e = 0; e < o.length; e++) {
                            if (_isInsidePolygon(o[e], n)) {
                                d = true
                            }
                        }
                    }
                }
                if (d) {
                    a.push(b[i])
                }
            }
        }
        return a
    };
    var bh = function () {
        var a = [];
        var b = u.getRoundRect();
        if (b.length > 0) {
            for (var i = 0; i < b.length; i++) {
                var c = b[i];
                var d = {
                    min: {
                        x: c.b6y1.mapX,
                        y: c.b6y1.mapY
                    },
                    max: {
                        x: c.mV31.mapX,
                        y: c.mV31.mapY
                    }
                };
                if (_isRectint(U.rect, d)) {
                    a.push({
                        KTTDd: parseInt(c.width * c.arcsize) * 2,
                        u7II: parseInt(c.height * c.arcsize) * 2,
                        b0QBc: c
                    })
                }
            }
        }
        return a
    };
    var bi = function (a) {
        var b = null;
        if (px) {
            b = document.createElement("<input name='" + a + "'>")
        } else {
            b = document.createElement("input");
            b.name = a
        }
        b.type = "hidden";
        return b
    };
    var bj = function (b) {
        try {
            T = 0;
            if (typeof _snapshot_result == "object" && _snapshot_result) _snapshot_result = null;
            if (!Q) {
                if (px) {
                    Q = document.createElement("<IFRAME name='" + P + "'>")
                } else {
                    Q = document.createElement("IFRAME");
                    Q.name = P
                }
                Q.id = P;
                Q.frameBorder = "0";
                Q.style.width = "0px";
                Q.style.height = "0px";
                Q.style.zIndex = -1;
                u.panel.appendChild(Q);
                var c = function (a) {
                    return function () {
                        bk.apply(a)
                    }
                };
                if (px) Q.attachEvent("onreadystatechange", c(this));
                else Q.addEventListener("load", c(this), false);
                S = document.createElement("FORM");
                S.id = R;
                S.method = "POST";
                S.target = P;
                S.action = s;
                u.panel.appendChild(S);
                S.appendChild(bi("center"));
                S.appendChild(bi("customer"));
                S.appendChild(bi("size"));
                S.appendChild(bi("markers"));
                S.appendChild(bi("polylines"));
                S.appendChild(bi("polygons"));
                S.appendChild(bi("format"));
                S.appendChild(bi("depth"));
                S.appendChild(bi("processMode"));
                S.appendChild(bi("taskId"));
                S.appendChild(bi("codeform"));
                S.appendChild(bi("zoom"));
                S.appendChild(bi("ellipse"));
                S.appendChild(bi("roundrect"));
                S.appendChild(bi("traffic"));
                S.appendChild(bi("tcity"));
                S.appendChild(bi("ttime"))
            }
            S["center"].value = b.center;
            S["customer"].value = (strLicenseKey == "3409") ? 0 : 1;
            S["size"].value = b.width + "x" + b.height;
            S["markers"].value = b.point;
            S["polylines"].value = b.Do6s;
            S["polygons"].value = b.area;
            S["format"].value = b.format;
            S["depth"].value = b.depth;
            S["processMode"].value = b.processMode;
            S["taskId"].value = new Date().getTime();
            S["codeform"].value = "1";
            S["zoom"].value = b.zoom;
            S["ellipse"].value = b.S_88R;
            S["roundrect"].value = b.b0QBc;
            S["traffic"].value = b.traffic;
            S["tcity"].value = b.c3O;
            S["ttime"].value = b._aX;
            if (!px) S.target = P;
            S.submit()
        } catch (nc) {
            Q = null;
            S = null
        }
    };
    var bk = function () {
        if (px && Q.readyState != "complete") return;
        ba.apply(this)
    };
    var bl = function (a) {
        if (typeof a == "undefined") {
            with(U) {
                x = parseInt(G.div.style.left);
                y = parseInt(G.div.style.top);
                width = G.div.clientWidth;
                height = G.div.clientHeight
            }
        } else {
            if (a.mode == "fullscreen") {
                a.width = u.width;
                a.height = u.height
            }
            with(U) {
                x = a.x;
                y = a.y;
                width = a.width;
                height = a.height
            }
        }
        with(U) {
            rect = {
                min: {
                    x: x,
                    y: y
                },
                max: {
                    x: x + width,
                    y: y + height
                }
            };
            center = u.toMapCoordinate(x + width / 2, y + height / 2)
        }
    };
    var bm = function () {
        with(U) {
            x = 0;
            y = 0;
            width = 0;
            height = 0;
            rect = null
        }
    };
    this.finalize = function () {
        for (var i = 0; i < z.length; i++) {
            MEvent.removeBuiltInListener(z[i]);
            z[i] = null
        }
        z = null;
        D.finalize();
        D = null;
        G.finalize();
        G = null;
        O.finalize();
        O = null;
        _removeNode(Q);
        Q = null;
        _removeNode(S);
        S = null;
        u = null
    };
    this.toString = function () {
        return 'com.mapbar.maplet.MSnapshotBox'
    }
};
var MIconShadow = function (f, g, h, i, j) {
    this.$5577 = 0;
    this.div = document.createElement("div");
    this.div.unselectable = "on";
    this.div.style.zIndex = this.$5577;
    this.div.style.position = "absolute";
    if (typeof g == "number") g = parseInt(g);
    if (typeof h == "number") h = parseInt(h);
    this.div.style.lineHeight = "0px";
    this.div.style.left = Number.MAX_VALUE + "px";
    this.div.style.top = Number.MAX_VALUE + "px";
    maplet.lA.appendChild(this.div);
    this.img = null;
    if (typeof f == "string" && f.indexOf("<") < 0) {
        this.img = (_sqi) ? document.createElement("v:Image") : new Image();
        this.img.unselectable = "on";
        this.img.style.MozUserSelect = "none";
        this.img.style.zIndex = this.$5577;
        this.img.src = (typeof f == "undefined") ? strImgsvrUrl + "images/Shadow.png" : f;
        this.div.appendChild(this.img);
        if (typeof g == "number") this.img.style.width = g + "px";
        if (typeof h == "number") this.img.style.height = h + "px"
    } else {
        if (typeof f == "string") this.div.innerHTML = f;
        else this.div.appendChild(f);
        if (typeof g == "number") this.div.style.width = g + "px";
        if (typeof h == "number") this.div.style.height = h + "px"
    }
    MPanel.enableDragMap(this.div, true);
    this.width = this.div.offsetWidth;
    this.height = this.div.offsetHeight;
    this.anchorX = this.width / 2;
    this.anchorY = this.height / 2;
    this.anchorX = parseInt((typeof i == "undefined") ? this.anchorX : this.anchorX + i);
    this.anchorY = parseInt((typeof j == "undefined") ? this.anchorY : this.anchorY + j);
    this.left = 0;
    this.top = 0;
    this.wz = function (a) {
        this.div.id = "mk_shadow_c_" + a;
        if (this.img) this.img.id = "mk_shadow_" + a
    };
    this.initialize = function (a) {
        this.sW = a;
        if (this.img) {
            if (px) this.img.ondragstart = function () {
                return false
            };
            this.img.onmousedown = function () {
                return false
            }
        }
    };
    this.update = function (a, b, c) {
        if (this.sW.autoHide && !this.sW.icon.isVisible()) {
            if (this.div.parentNode) {
                this.div.parentNode.removeChild(this.div);
                this.fu = false
            }
        } else {
            var d = parseInt(b) - parseInt(this.anchorX);
            var e = parseInt(c) - parseInt(this.anchorY);
            if (this.div.parentNode != a.lA.div && !this.sW.ls) {
                a.lA.appendChild(this.div);
                this.fu = true
            }
            this.div.style.top = e + "px";
            this.div.style.left = d + "px";
            this.top = e;
            this.left = d
        }
    };
    this.isVisible = function () {
        return (this.fu)
    };
    this.zq = function () {
        return (this.img ? this.img.src : "") + "," + this.width + "," + this.height
    };
    this.hilite = function () {
        if (this.div) {
            if (this.div.style.zIndex < pF) {
                pF++
            }
            this.setZIndex(pF)
        }
    };
    this.finalize = function () {
        this.remove(true)
    };
    this.remove = function (a) {
        if (typeof a != "boolean") a = false;
        if (this.img) {
            if (px) this.img.ondragstart = null;
            this.img.onmousedown = null
        }
        if (this.div) {
            if (!a) {
                if (this.div.parentNode) this.div.parentNode.removeChild(this.div)
            } else {
                _removeNode(this.div);
                this.div = null
            }
        }
        if (a) this.sW = null
    };
    this.setZIndex = function (a) {
        if (this.div && this.div.parentNode && a != this.div.style.zIndex) {
            this.$5577 = this.div.style.zIndex;
            this.div.style.zIndex = a
        }
    };
    this._b68 = function () {
        if (!this.div) return;
        if (this.$5577 != this.div.style.zIndex) {
            this.setZIndex(this.$5577)
        }
    };
    this.toString = function () {
        return 'com.mapbar.maplet.MIconShadow'
    }
};
window["MVersion"] = {
    "version": "31.2",
    "build": "1205141604"
};
var Maplet = function (a, b, c, w, h, d, e, f, g) {
    if (px) {
        try {
            document.execCommand("BackgroundImageCache", false, true)
        } catch (nc) {}
    }
    this.downX = 0;
    this.downY = 0;
    this.moveX = 0;
    this.moveY = 0;
    this.fS = 0;
    this.fT = 0;
    this.offsetX = 0;
    this.offsetY = 0;
    this.bl8I = {
        cursor: strImgsvrUrl + "images/measure.cur",
        _H28: _sqi ? "<div style='position:absolute;width:11px;height:11px;overflow:hidden;'><img src='" + sX + "' style='position:absolute;width:" + CTLIMG_RESOURCE[0].w + "px;height:" + CTLIMG_RESOURCE[0].h + "px;left:-65px;top:-100px;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=" + CTLIMG_RESOURCE[0].url + ",sizingMethod=scale);' galleryimg='no' unselectable='on' onmousedown='return false;' /></div>" : "<div style='position:absolute;width:11px;height:11px;overflow:hidden;'><img src='" + CTLIMG_RESOURCE[0].url + "' style='position:absolute;width:" + CTLIMG_RESOURCE[0].w + "px;height:" + CTLIMG_RESOURCE[0].h + "px;left:-65px;top:-100px;' galleryimg='no' unselectable='on' onmousedown='return false;'></div>",
        vPr2H: "\u5355\u51fb\u786e\u5b9a\u8d77\u70b9",
        jN0wX: "\u603b\u957f: <font color='red'>[DISTANCE]</font></br><font color='gray'>\u5355\u51fb\u786e\u5b9a\u5730\u70b9\uff0c\u53cc\u51fb\u7ed3\u675f</font>",
        V8U: "\u8d77\u70b9",
        s8T: "[DISTANCE]",
        aD6: "<div style='position:absolute;width:12px;height:12px;overflow:hidden;top:50%;margin-top:-6px;left:2px;'><img src='" + CTLIMG_RESOURCE[0].url + "' style='position:absolute;width:" + CTLIMG_RESOURCE[0].w + "px;height:" + CTLIMG_RESOURCE[0].h + "px;left:-86px;top:0px;cursor:pointer' galleryimg='no' unselectable='on' onmousedown='return false;'></div><span style='padding-left:14px;height:18px;line-height:18px;display:block;float:left;'>\u603b\u957f: [DISTANCE]</span>",
        _w5Dw: "[DISTANCE]",
        AFk8G: "[TIP]",
        tip: "<div style='position:absolute;height:18px;line-height:19px;_line-height:18px;border:1px solid gray;background:white;padding:0 3px;padding:2px 3px 0\a;font-size:12px;color:gray;white-space:nowrap;border-radius:3px;-webkit-border-radius:3px;-moz-border-radius:3px;' unselectable='on'>[TIP]</div>",
        XJS: new MBrush("#FF0000", 3, 0, false, "#FF0000", 50),
        J6kO: new MBrush("#FF0000", 3, 0, false, "#FF0000", 30)
    };
    this.V9Jd = [];
    ac = new Date();
    this.imgWidth = 300;
    this.imgHeight = 300;
    this.clickToCenter = true;
    this.WEF7 = {};
    this.XI00u = {};
    this.customInfoWindow = false;
    this.g3K = -1;
    this.e63X = -1;
    this.$19 = 200;
    this.ignoreMoveRange = 2;
    this.U3551 = false;
    this.YD9_0 = 0;
    this.pr9P9 = 0;
    this.X7jjM = false;
    this.b04 = false;
    this.$2J = null;
    this.B824 = null;
    this.DHPs = null;
    this.B7JUS = [];
    ktg = [];
    this.c97 = "";
    this.VDH = -1;
    this.f29 = -1;
    this.I9h5g = "";
    this.k01 = null;
    this.J1t5 = null;
    this.vg4 = {
        container: null,
        $E5$A: [],
        yN: null,
        xd: 0.12,
        D63iA: 4,
        N8d$8: 1,
        interval: 100,
        maXj: {
            width: 85,
            height: 68
        },
        Ot8: {
            width: 35,
            height: 27
        }
    };
    this.Ge4 = {
        fC: null,
        width: 16,
        height: 16,
        offsetY: 5,
        js112: 3,
        e34B: 4,
        overlay: null
    };
    this.mA88 = -1;
    this.sEq2R = false;
    this.m6a3 = true;
    this.v3JK7 = false;
    this._9_ = bpp[0];
    this.traffic = null;
    this.J12 = true;
    this.S4c4 = 5;
    this.markerDragAnimation = true;
    this.qS = {};
    this.layerData = {};
    this.bWX = [];
    this.layerDataPassiveUrl = "";
    this.B95w = null;
    this.R0933 = null;
    this.k4F = {
        width: 41,
        height: 20
    };
    this.S4b9G = {
        width: 0,
        height: 0
    };
    this.rlConfig = {
        url: "http://3in1.mapbar.com/s?t=snsn",
        resultName: "rlm" + new Date().getTime(),
        o3tH: false,
        _H28: _sqi ? "<div style='position:absolute;width:11px;height:11px;overflow:hidden;'><img src='" + sX + "' style='position:absolute;width:" + CTLIMG_RESOURCE[0].w + "px;height:" + CTLIMG_RESOURCE[0].h + "px;left:-65px;top:-112px;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=" + CTLIMG_RESOURCE[0].url + ",sizingMethod=scale);' galleryimg='no' unselectable='on' onmousedown='return false;' /></div>" : "<div style='position:absolute;width:11px;height:11px;overflow:hidden;'><img src='" + CTLIMG_RESOURCE[0].url + "' style='position:absolute;width:" + CTLIMG_RESOURCE[0].w + "px;height:" + CTLIMG_RESOURCE[0].h + "px;left:-65px;top:-112px;' galleryimg='no' unselectable='on' onmousedown='return false;'></div>",
        tip: {
            start: "\u70b9\u51fb\u5f00\u59cb\u6cbf\u9053\u8def\u753b\u4e00\u6761\u7ebf",
            one: "\u70b9\u51fb\u7ee7\u7eed\u753b\u7ebf",
            end: "\u70b9\u51fb\u6700\u540e\u4e00\u4e2a\u70b9\uff0c\u53ef\u7ed3\u675f\u6b64\u7ebf\u8def",
            n04: "<div class='roadlineTip'><div class='roadlineTip_distance' style='display:none'></div><div></div></div>"
        }
    };
    this.JX4w = {
        mik2: [],
        Gjx1: [],
        A63: false,
        j74R: null,
        s4N: {
            KD_: 0,
            X2x9: 0,
            e4013: 0,
            Pu4: 0
        },
        tip: new MPanel({
            location: {
                type: "xy"
            },
            content: this.rlConfig.tip.n04,
            creator: MPanel.SYSTEM
        }),
        $1u: {
            eg$8: 0,
            JOxeK: 0
        },
        yDS03: 1
    };
    this.mapBound = null;
    this.rbt = false;
    this._2015 = null;
    this.allowDrawingDragMap = true;
    this.Pth = true;
    this.gq6 = false;
    this.sS = ts.ty;
    this.id = "mapbar";
    this.yt = ((new Date().getTime()) % 86400000).toString(36) + (parseInt(Math.random() * 1000)).toString(36);
    if (typeof strRemoteIP != "undefined" && strRemoteIP) {
        this.yt += "*" + strRemoteIP
    }
    document["mapbar-maplet"] = this;
    this.left = (typeof d == "undefined") ? 0 : parseInt(d);
    this.top = (typeof e == "undefined") ? 0 : parseInt(e);
    this.width = (typeof w == "undefined") ? 600.00001 : parseInt(w);
    this.height = (typeof h == "undefined") ? 400.00001 : parseInt(h);
    if (isNaN(parseFloat(a)) || (typeof a == "string" && a.length > 3 && a.substring(0, 3).toLowerCase() == "inf")) {
        this.id = a;
        this.panel = (typeof a == "object") ? a : document.getElementById(a);
        if (b != null && b != "undefined") {
            var i = cq.vp(b);
            this.gx = Math.min(sy[1], Math.max(sy[0], parseFloat(i[1])));
            this.gA = Math.min(sz[1], Math.max(sz[0], parseFloat(i[0]) % 360));
            i = null
        }
        if (typeof this.panel != "undefined" && this.panel != null) {
            if (!this.panel.style.zIndex) this.panel.style.zIndex = 0;
            this.left = 0;
            this.top = 0;
            if (this.panel.style.left) this.left = parseInt(this.panel.style.left);
            if (this.panel.style.top) this.top = parseInt(this.panel.style.top);
            if (this.panel.style.width) this.width = parseInt(this.panel.style.width);
            if (this.panel.style.height) this.height = parseInt(this.panel.style.height)
        }
    } else {
        this.gA = b;
        this.gx = a
    }
    this.strImgUrl = strImgsvrUrl;
    this.AG = (typeof c == "undefined") ? 0 : parseInt(c);
    this.nT = 0;
    this.py = 0;
    this.rotation = 0;
    this.gk = Math.cos(this.rotation / 180 * Math.PI);
    this.wT = Math.sin(this.rotation / 180 * Math.PI);
    this.yv = (f == "undefined") ? "" : f;
    this.pU = new Array();
    this.qE = new Array();
    this.yl = (typeof g == "undefined" || g == null) ? ds : g;
    this.u2 = null;
    this.u3 = '';
    this.xK = "png";
    this.xw = this.yl;
    this.yh = "";
    this.x4 = this.yl;
    this.x3 = null;
    this.uu = null;
    this.xX = this.yl;
    this.pJ = null;
    this.PPf2 = [
        ["", 1],
        [2, 3]
    ];
    this.bp = true;
    this.ff = false;
    this.fe = true;
    this.sf = null;
    this.fj = (typeof bDefaultControlOn == "undefined") ? true : bDefaultControlOn;
    this.fa = false;
    this.z4 = Math.ceil((this.width) / (this.imgWidth) / 2);
    this.z5 = Math.ceil((this.height) / (this.imgHeight) / 2);
    this.aO = new Array();
    this.aN = new Array();
    this.yG = new Array();
    this.fp = null;
    this.pU = new Array();
    this.aE = new Array();
    this.aF = null;
    this.aG = null;
    this.aH = null;
    this.zy = null;
    this.tG = null;
    this.brush = new MBrush("#FF0000", 3);
    this.sv = 0;
    this.fo = false;
    this.gJ = null;
    this.gI = new Image();
    this.pb7 = new MBound(0, 0, 0, 0);
    this.bInitialized = false;
    this.c0 = false;
    this.w3 = new Array();
    this.cI = true;
    this.cn = false;
    this.gc = [];
    this.u5 = [];
    this.vA = this.sS;
    this.fs = false;
    this.c9 = false;
    this.ArQ = null;
    this.tD = 0;
    this.gM = 1.0;
    this.xc = null;
    this.mapContextMenu = null;
    this.overview = new _8L8(this);
    this.ovw = this.overview;
    this.wK = new Array();
    if (typeof this.panel == "undefined" || this.panel == null) {
        document.writeln('<div unselectable="on" id="' + this.id + '" style="position:absolute;overflow:hidden; width:' + this.width + 'px; height:' + this.height + 'px; left:' + this.left + 'px; top:' + this.top + 'px;"></div>');
        this.panel = aa(this.id)
    } else {
        this.panel.style.overflow = "hidden"
    }
    this.map = this.panel;
    if (this.map) {
        this.map.setAttribute("align", "left");
        if (this.map.style.position != "absolute") {
            this.map.style.position = "relative"
        }
        var j = "http://www.mapbar.com/ApiCopyrightLink.html?referrer=" + window.location.host;
        this.q94s = document.createElement("div");
        this.q94s.style.width = this.k4F.width + "px";
        this.q94s.style.height = this.k4F.height + "px";
        this.q94s.style.overflow = "hidden";
        this.q94s.innerHTML = "<img src='" + CTLIMG_RESOURCE[0].url + "' style='position:absolute;width:" + CTLIMG_RESOURCE[0].w + "px;height:" + CTLIMG_RESOURCE[0].h + "px;left:-25px;top:-158px' />";
        this.q94s.id = "ImgCopyright";
        this.q94s.style.position = "absolute";
        this.q94s.style.zIndex = 3;
        this.q94s.style.top = (this.height - 22) + "px";
        this.q94s.setAttribute("whohide", "");
        this.q94s.style.cursor = "pointer";
        this.q94s.onclick = function () {
            window.open(j)
        };
        this.Wg4f = document.createElement('div');
        this.Wg4f.style.position = 'absolute';
        this.Wg4f.style.zIndex = 3;
        this.Wg4f.style.fontSize = '11px';
        this.Wg4f.style.fontFamily = 'Arial';
        this.Wg4f.style.top = (this.height - 25) + 'px';
        this.Wg4f.style.left = (this.width - 70) + 'px';
        this.Wg4f.style.background = 'none';
        this.Wg4f.style.whiteSpace = 'nowrap';
        var k = document.createElement('span');
        k.style.color = '#000';
        k.style.margin = '0 10px 0 0';
        k.innerHTML = 'GS(2011)1617\u53F7';
        var l = document.createElement('a');
        l.setAttribute('target', '_blank');
        l.setAttribute('href', 'http://www.navinfo.com.cn');
        l.innerHTML = 'Data&nbsp;&copy;&nbsp;NavInfo';
        l.style.color = 'blue';
        l.style.textDecoration = 'none';
        this.Wg4f.appendChild(k);
        this.Wg4f.appendChild(l);
        this.map.appendChild(this.q94s);
        this.map.appendChild(this.Wg4f);
        this.S4b9G.width = this.Wg4f.offsetWidth;
        this.S4b9G.height = this.Wg4f.offsetHeight
    }
    this.Lb71 = false;
    this.A0BGB = false;
    this.uw = 0;
    this.t9 = 0;
    this.xe = 10;
    if (bp) {
        this.setOverlay('base')
    }
    this.fM = null;
    this.AY = 0.2;
    this.AS = -1;
    this.AT = 0;
    this.AZ = null;
    this.vg = 20.0;
    this.vh = null;
    this.Ah = null;
    this.vc = 0;
    this.vd = 0;
    this.vi = 0;
    this.tB = {
        "zoomin": 1,
        "zoomout": 2,
        "pan": 3,
        "erase": 13,
        "edit": 23,
        "lookup": 5,
        "bookmark": 6,
        "drawline": 9,
        "drawarea": 10,
        "measure": 11,
        "measarea": 15,
        "snapshot": 24,
        "roadline": 25
    }
};
Maplet.MICON_IMGSRC_FLAG = "imgsrc";
Maplet.MLABEL_TEXT_FLAG = "lbltext";
Maplet.LEFT_TOP = 1;
Maplet.LEFT_BOTTOM = 2;
Maplet.RIGHT_TOP = 3;
Maplet.RIGHT_BOTTOM = 4;
Maplet.UNLOAD = 0;
Maplet.LOADING = 1;
Maplet.LOADED = 2;
Maplet.sMGm9 = 3;
Maplet.prototype = {
    onresize: function () {
        if (this.controlCanvas && this.controlCanvas.options.view.ruler) {
            if (this.height >= 270) {
                this.controlCanvas.showCtlRuler(true, true, false)
            } else {
                this.controlCanvas.showCtlRuler(false, true, false)
            }
        }
        this._PaX();
        this.p7S()
    },
    _PaX: function () {
        var a = {
            w: 0,
            h: this.k4F.height
        };
        if (this.q94s.style.display != "none") a.w = a.w + this.k4F.width + 5;
        if (this.J12) a.w = a.w + this.S4b9G.width + 5;
        var b = this.width;
        if (this.controlCanvas && this.controlCanvas.options.location.type == Maplet.RIGHT_BOTTOM) {
            b = b - this.controlCanvas.getRect().width
        }
        if (this.overview.location.type == Maplet.RIGHT_BOTTOM) {
            var c = this.overview.getRect();
            if (b >= c.min.x && c.min.x != 0) {
                b = c.min.x;
                if ((this.width - c.max.x >= a.w) || (this.height - c.max.y >= a.h)) b = this.width
            }
        }
        var d = this.J12 ? this.S4b9G.width : 0;
        var e = this.J12 ? $9tU(this.Wg4f.style.left) : b;
        if (this.J12) {
            with(this.Wg4f.style) {
                left = b - d - 5 + "px";
                top = (this.height - 23) + "px";
                e = this.J12 ? $9tU(left) : b
            }
        }
        with(this.q94s) {
            if (style.display != "none") {
                style.left = e - offsetWidth - 5 + "px";
                style.top = (this.height - 26) + "px"
            }
        }
    },
    nI: function () {
        if (!this.ff) return null;
        if (this.AP == null) {
            this.AP = new AO(this, -1, this.width - 16, 0, 16, this.height, this.ff, this.panel)
        }
        return this.AP
    },
    wP: function (e) {
        PI7(e);
        if (this.U3551) return false;
        var a = new MPoint(this.toMapCoordinate(this.moveX, this.moveY));
        a.initialize(this);
        MEvent.trigger(this, "contextmenu", a);
        var b = (px) ? event.srcElement : e.target;
        if (this.xc) this.xc.hide();
        var c = null;
        var d = b.getAttribute("oid");
        d = typeof this.u5[d] != "undefined" ? this.u5[d] : null;
        if (d && typeof d.getContextMenu == "function") {
            c = d.getContextMenu(b)
        } else if (typeof b.contextmenu != "undefined" && b.contextmenu) {
            c = b.contextmenu
        }
        if (c) {
            this.xc = c;
            c.a36IW(typeof b.id == "string" ? b.id : "");
            c.Bcd(d);
            c.show(this.zQ, this.zR)
        } else {
            if (this.mapContextMenu != null) {
                this.xc = this.mapContextMenu;
                this.mapContextMenu.show(this.zQ, this.zR)
            }
        }
    },
    getContextMenu: function () {
        return this.mapContextMenu
    },
    setContextMenu: function (a) {
        if (this.mapContextMenu != a) {
            this.removeContextMenu()
        }
        this.mapContextMenu = a;
        if (this.mapContextMenu != null) {
            this.mapContextMenu.initialize(this)
        }
    },
    setStandardContextMenu: function (a) {
        this.xc = a
    },
    removeContextMenu: function () {
        if (this.mapContextMenu != null) {
            if (this.xc == this.mapContextMenu) this.xc = null;
            this.sF.div.removeChild(this.mapContextMenu.tY);
            this.mapContextMenu.maplet = null;
            this.mapContextMenu = null
        }
    },
    showMap: function () {
        if (_sqi && this.width > 0) {
            this.panel.style.width = (this.width - 1) + "px";
            this.panel.style.height = (this.height - 1) + "px";
            this.panel.style.width = this.width + "px";
            this.panel.style.height = this.height + "px"
        }
        if (jn6 || M$PE) this.panel.onselectstart = function () {
            return false
        };
        if (MapBackgroundColor) this.panel.style.backgroundColor = MapBackgroundColor;
        MEvent.bindDom(this.panel, "contextmenu", this, this.wP);
        this.sG = new fD("MapContainerBg", 0, 0, this.width, this.height, true, 0, '', this.panel);
        this.sF = new fD("MapContainer", 0, 0, this.width, this.height, true, 2, '', this.panel);
        this.zs = new fD("ToolTip", 0, 0, 0, 0, false, 24, '', this.sF);
        this.sE = new fD("LayerMap", 0, 0, this.width, this.height, true, 2, '', this.sF);
        this.vx = new fD("LayerPoiMap", 0, 0, this.width, this.height, true, 3, '', this.sF);
        this.nI();
        if (this.fj) {
            var a = new MStandardControl();
            this.addControl(a);
            this.controlCanvas = a.nR
        }
        this.wq = new fD("LayerScale", 1, this.height - 24, 70, 24, this.fe, 3, '', this.panel);
        var b = '<table border="0" width="100%" height="100%" style="border:2px solid #0E347F;"><tr ><td align="center" valign="middle" style="filter:alpha(opacity=30);opacity:0.3;background-color:#FFFFFF;"></td></tr></table>';
        this.sD = new fD("LayerBorder", 1, 1, 1, 1, false, 6, b, this.panel);
        this.sD.style.border = "1px solid #FFFFFF";
        this.snapshotBox = new MSnapshotBox(this);
        b = "<div style=\"position:absolute;border-width:2px 0px 0px 2px;border-style:solid;border-color:red;width:4px;height:4px;left:0px;top:0px;line-height:1px;\"></div><div style=\"position:absolute;border-width:2px 2px 0px 0px;border-style:solid;border-color:red;width:4px;height:4px;left:28px;top:0px;line-height:1px;\"></div><div style=\"position:absolute;border-width:0px 0px 2px 2px;border-style:solid;border-color:red;width:4px;height:4px;left:0px;top:20px;line-height:1px;\"></div><div style=\"position:absolute;border-width:0px 2px 2px 0px;border-style:solid;border-color:red;width:4px;height:4px;left:28px;top:20px;line-height:1px;\"></div>";
        this.vg4.container = new fD("_mapbar_mw_indicator", 0, 0, this.vg4.Ot8.width, this.vg4.Ot8.height, true, 100, b, this.panel).div;
        this.vg4.container.style.display = "none";
        this.vg4.$E5$A = this.vg4.container.getElementsByTagName("div");
        this.lA = new fD("LayerDrawMap", 0, 0, this.width, this.height, true, 4, '', this.sF);
        if (px) this.lA.style.backgroundImage = "url(" + sX + ")";
        if (!px) {
            this.lA.style.MozUserSelect = "none"
        }
        this.lA.div.setAttribute(G9kd3, "true");
        this.Ge4.fC = new fD("_mapbar_drag_cross", 0, 0, this.Ge4.width, this.Ge4.height, true, 2, '', this.panel);
        with(this.Ge4.fC.div) {
            style.width = this.Ge4.width + "px";
            style.height = this.Ge4.height + "px";
            style.display = "none";
            style.overflow = "hidden"
        }
        if (_sqi) this.Ge4.fC.div.innerHTML = "<v:image  style=\"position:absolute;width:" + CTLIMG_RESOURCE[0].w + "px;height:" + CTLIMG_RESOURCE[0].h + "px;left:-49px;top:-108px;\" src='" + CTLIMG_RESOURCE[0].url + "' />";
        else this.Ge4.fC.div.innerHTML = "<img src=\"" + CTLIMG_RESOURCE[0].url + "\" style=\"position:absolute;width:" + CTLIMG_RESOURCE[0].w + "px;height:" + CTLIMG_RESOURCE[0].h + "px;left:-49px;top:-108px;\">";
        this.overview.qa(this.panel); {
            var c = 15;
            var d = 0;
            this.sg = (this.width > 360) ? 150 : 73;
            if ((this.overview.nF() + this.overview.nz()) > (this.height - 23)) {
                d += Math.max(0, this.overview.nH() - (this.sg - 70))
            }
        } {
            this.WEF7["map_mousemove"] = MEvent.bindDom(this.map, "mousemove", this, this.a3);
            this.WEF7["map_mousedown"] = MEvent.bindDom(this.map, "mousedown", this, this.a2);
            this.WEF7["map_mouseup"] = MEvent.bindDom(this.map, "mouseup", this, this.a6);
            this.WEF7["map_click"] = MEvent.bindDom(this.map, "click", this, this.aZ);
            this.WEF7["map_dblclick"] = MEvent.bindDom(this.map, "dblclick", this, this.a1);
            this.WEF7["map_mouseout"] = MEvent.bindDom(this.map, "mouseout", this, this.a4);
            this.WEF7["map_drag"] = MEvent.bindDom(this.map, "drag", this, this.a3);
            this.WEF7["map_dragstart"] = MEvent.bindDom(this.map, "dragstart", this, this.a3);
            this.WEF7["map_dragend"] = MEvent.bindDom(this.map, "dragend", this, this.a3);
            this.WEF7["map_mouseover"] = MEvent.bindDom(this.map, "mouseover", this, this.a5);
            this.WEF7["map_mousewheel"] = MEvent.bindDom(this.map, "mousewheel", this, this.a7);
            this.WEF7["map_DOMMouseScroll"] = MEvent.bindDom(this.map, "DOMMouseScroll", this, this.a7);
            if (kp) {
                this.WEF7["document_keydown"] = MEvent.bindDom(document, "keydown", this, this.onkeydown)
            }
        }
        this.qd();
        this.setZoomLevel(this.AG);
        this.setMode(this.sS);
        if (this.zP == null) {
            this.zP = setInterval("document['mapbar-maplet'].zL()", 100)
        }
    },
    qd: function () {
        this.sD.hide();
        this.sD.resize(1, 1);
        this.sD.moveTo(-10, -10);
        if (document.all) {
            this.sE.moveTo(0, 0);
            this.sE.show();
            this.vx.moveTo(0, 0);
            this.vx.show();
            this.lA.moveTo(0, 0);
            this.lA.show()
        }
    },
    setStyle: function (a, b) {
        if (this.yl != a) {
            this.yl = a;
            if ("aerial" == this.yl || this.yl.indexOf("aerial") >= 0) {
                this.xK = "jpg"
            } else {
                this.xK = "png"
            }
            if (typeof b != "undefined") {
                this.xK = b
            }
            if (typeof this.sF != "undefined") {
                for (var i in this.pU) {
                    try {
                        if (this.pU[i] != null && typeof this.pU[i] == "object") {
                            if (this.pU[i].parentNode != null) {
                                this.pU[i].parentNode.removeChild(this.pU[i])
                            }
                            this.pU[i] = null
                        }
                    } catch (e) {}
                }
                this.refresh();
                MEvent.trigger(this, "style", a)
            }
        }
    },
    setRotation: function (a) {
        if (px && rs) {
            this.rotation = a;
            this.gk = Math.cos(this.rotation / 180 * Math.PI);
            this.wT = Math.sin(this.rotation / 180 * Math.PI)
        }
    },
    setHeadMode: function (a) {
        this.nT = a
    },
    setOverlay: function (a, b) {
        if (typeof b == "string") {
            this.u3 = b
        }
        if (this.u2 != a) {
            this.u2 = a
        }
        if (typeof this.sF != "undefined") {
            this.refresh()
        }
    },
    _J6: function () {
        var a = sj[this.AG] * this.width / this.imgWidth;
        this.pb7.tl = (this.gA - a / 2);
        this.pb7.s6 = (this.gA + a / 2);
        var b = qP[this.AG] * this.height / this.imgHeight;
        this.pb7.tj = (this.gx - b / 2);
        this.pb7.s4 = (this.gx + b / 2)
    },
    refresh: function () {
        this.u0();
        this.u8()
    },
    fL: function () {
        if (this.fM != null) {
            clearTimeout(this.fM);
            this.fM = null
        }
        if (this.c0 || this.fs || f1.fx.length > 0) {
            this.fM = getTimeout(this, this.fL, 100);
            return
        }
        this.no()
    },
    no: function () {
        var a = 0;
        for (var i in this.pU) {
            try {
                if (this.pU[i] != null && typeof this.pU[i] == "object") {
                    if (this.pU[i].c2 == true) {} else {
                        if (this.pU[i].parentNode != null) {
                            _removeNode(this.pU[i])
                        }
                        this.pU[i].onerror = null;
                        this.pU[i].onload = null;
                        this.pU[i] = null;
                        delete this.pU[i];
                        a++
                    }
                }
            } catch (e) {}
        }
    },
    zL: function () {
        if (this.sEq2R || this.fs || this.c0 || (typeof this.Ai != "undefined" && this.Ai != 0)) return;
        var a = parseInt(this.sF.style.left);
        var b = parseInt(this.sF.style.top);
        if ((a + this.tf1) >= 0 || (a + this.sZ - this.width) <= 0 || (b + this.tg) >= 0 || (b + this.s1 - this.height) <= 0) {
            this.fs = true;
            this.zA()
        }
    },
    zA: function () {
        if (this.fs == false) return;
        var a = parseInt(this.sF.style.left);
        var b = parseInt(this.sF.style.top);
        if ((a + this.tf1) >= 0 || (a + this.sZ - this.width) <= 0) {
            if (this.c0 == true) return;
            this.c0 = true;
            try {
                var c = 0;
                var d = 0;
                if ((a + this.tf1) >= 0) {
                    this.th--;
                    this.tf1 -= parseInt(this.imgWidth);
                    c = this.th;
                    d = this.tf1
                }
                if ((a + this.sZ - this.width) <= 0) {
                    this.s2++;
                    d = this.sZ;
                    this.sZ += parseInt(this.imgWidth);
                    c = this.s2
                }
                var f = c;
                var g = nM[this.AG];
                var h = parseInt(360 / sj[this.AG]);
                c = (c) % h;
                if (c >= (h / 2)) c -= h;
                if (c < (-h / 2)) c += h;
                var i = this.yl;
                for (var j = this.ti; j <= this.s3; j++) {
                    var k = j;
                    var l = (-(j - this.ti + 1) * this.imgHeight) + this.s1;
                    this.aA(d, l, c, k, f, j, i)
                }
                this.c0 = false
            } catch (e) {}
        }
        if ((b + this.tg) >= 0 || (b + this.s1 - this.height) <= 0) {
            if (this.c0 == true) return;
            this.c0 = true;
            try {
                var k = 0;
                var l = 0;
                if ((b + this.tg) >= 0) {
                    this.s3++;
                    this.tg -= parseInt(this.imgHeight);
                    k = this.s3;
                    l = this.tg
                }
                if ((b + this.s1 - this.height) <= 0) {
                    this.ti--;
                    l = this.s1;
                    this.s1 += parseInt(this.imgHeight);
                    k = this.ti
                }
                var j = k;
                var g = nM[this.AG];
                var h = parseInt(360 / sj[this.AG]);
                var i = this.yl;
                for (var f = this.th; f <= this.s2; f++) {
                    var c = f;
                    c = (c) % h;
                    if (c >= (h / 2)) c -= h;
                    if (c < (-h / 2)) c += h;
                    var d = ((f - this.th) * this.imgWidth) + this.tf1;
                    this.aA(d, l, c, k, f, j, i)
                }
                this.c0 = false
            } catch (e) {}
        }
        this.fs = false
    },
    aA: function (a, b, c, d, e, f, g) {
        var h = nM[this.AG];
        var i = parseInt(Math.floor((c) / h));
        var j = parseInt(Math.floor((d) / h));
        if (i < 0) i += 1;
        if (j < 0) j += 1;
        var k = (c) - i * h;
        var l = (d) - j * h;
        var m = this.strImgUrl.replace("img", "img" + this.aK$3(k, l)) + "mapbank/" + g + "/" + this.sR;
        var n = ((this.AG).toString(16) + e.toString(16) + 'l' + f.toString(16)).toLowerCase();
        if (this.AG >= 14) m += i + "/";
        m += i + "_" + j + "/";
        m += k + "_" + l + "." + this.xK;
        if (m && m.indexOf("NaN") < 0) {
            if (this.pU[n] == null) {
                if (rs == 0 || !px) {
                    this.pU[n] = new Image();
                    this.pU[n].id = n;
                    this.pU[n].name = n;
                    this.pU[n].ntry = "0";
                    this.pU[n].unselectable = "on";
                    this.pU[n].style.position = "absolute"
                } else {
                    this.pU[n] = document.createElement("v:Image");
                    this.pU[n].id = n;
                    this.pU[n].name = n;
                    this.pU[n].ntry = "0";
                    this.pU[n].unselectable = "on";
                    this.pU[n].style.position = "absolute";
                    this.pU[n].cE = "f";
                    this.pU[n].style.rotation = this.rotation;
                    this.pU[n].style.width = this.imgWidth + "px";
                    this.pU[n].style.height = this.imgHeight + "px"
                }
                f1.nk(this.pU[n], m, this.imgWidth, this.imgHeight);
                this.sE.div.appendChild(this.pU[n])
            } else {
                if (px && rs) {
                    this.pU[n].style.rotation = this.rotation
                }
            }
            var o = (a + this.imgWidth / 2 - this.width / 2) * this.gk - (b + this.imgHeight / 2 - this.height / 2) * this.wT + this.width / 2;
            var p = (a + this.imgWidth / 2 - this.width / 2) * this.wT + (b + this.imgHeight / 2 - this.height / 2) * this.gk + this.height / 2;
            this.pU[n].style.top = parseInt(p - this.imgHeight / 2) + "px";
            this.pU[n].style.left = parseInt(o - this.imgWidth / 2) + "px";
            this.pU[n].c2 = true;
            this.pU[n].setAttribute("origy", parseInt(p - this.imgHeight / 2));
            this.pU[n].setAttribute("origx", parseInt(o - this.imgWidth / 2));
            n = null
        }
        m = null
    },
    D_164: function () {
        this.no();
        this.sG.div.style.width = this.sE.div.style.width;
        this.sG.div.style.height = this.sE.div.style.height;
        this.sG.div.style.left = this.sE.div.style.left;
        this.sG.div.style.top = this.sE.div.style.top;
        this.sG.div.style.visibility = "visible";
        for (var i in this.pU) {
            var a = this.pU[i];
            if (a && a.parentNode) {
                a.parentNode.removeChild(a);
                this.sG.div.appendChild(a)
            }
        }
        this.np8();
        this.m6a3 = false
    },
    np8: function () {
        for (var i in this.pU) {
            var a = this.pU[i];
            if (a && a.parentNode) a.c2 = false
        }
    },
    CK0: function () {
        this.np8();
        this.no()
    },
    u8: function (a, b) {
        if (this.fe) {
            var c = (this.xg * 100 * 60 / parseInt(this.imgWidth)) * this.gM;
            var d = "#000000";
            var e = (en) ? "km" : tX("%u516E%uE338");
            var f = (en) ? "mi" : tX("%u54EA");
            c = (c < 10) ? (c).toPrecision(1) : parseInt(c);
            if (this.wq.div.innerHTML == "") {
                var g = ["<div id=\"_scaleValue\" style=\"position:absolute;font-family: arial;FONT-SIZE: 12px; color:" + d + ";FONT-WEIGHT: bold;left:4px;top:0px;\">&nbsp;" + c + " " + e + "</div>"];
                g.push("<div style=\"position:absolute;width:69px;height:11px;overflow:hidden;top:8px;\">");
                if (_sqi) {
                    g.push("<img src=\"" + sX + "\" style=\"position:absolute;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=" + CTLIMG_RESOURCE[0].url + ",sizingMethod=scale);width:" + CTLIMG_RESOURCE[0].w + "px;height:" + CTLIMG_RESOURCE[0].h + "px;left:-8px;top:-209px;border:0px;\" onmousedown=\"return false;\" unselectable=\"on\" galleryimg=\"no\" />")
                } else {
                    g.push("<img src=\"" + CTLIMG_RESOURCE[0].url + "\" style=\"position:absolute;left:-8px;top:-209px;width:" + CTLIMG_RESOURCE[0].w + "px;height:" + CTLIMG_RESOURCE[0].h + "px;border:0px;\" onmousedown=\"return false;\" unselectable=\"on\" galleryimg=\"no\" />")
                }
                g.push("</div>");
                if (en == 1) {
                    this.wq.style.top = $9tU(this.wq.style.top) - 10 + "px";
                    this.wq.style.height = $9tU(this.wq.style.height) + 10 + "px";
                    g.push("<div id=\"_scaleValue2\" style=\"position:absolute;font-family: arial;FONT-SIZE: 12px; color:" + d + ";FONT-WEIGHT: bold;left:4px;top:19px;\">&nbsp;" + c + ' ' + f + "</div>")
                }
                this.wq.div.innerHTML = g.join("")
            } else {
                if (en == 1) {
                    aa("_scaleValue").innerHTML = "&nbsp;" + c + ' ' + e;
                    if (aa("_scaleValue2")) aa("_scaleValue2").innerHTML = "&nbsp;" + c + ' ' + f
                } else aa("_scaleValue").innerHTML = "&nbsp;" + c + ' ' + e
            }
            this.wq.show()
        } else {
            this.wq.hide()
        }
    },
    p7S: function () {
        if (!this.wq) return;
        if (this.fe) {
            var l = 4,
                yw;
            if (en == 1) yw = this.height - 34;
            else yw = this.height - 24;
            var a = 0,
                xLK52 = 0;
            if (this.controlCanvas && this.controlCanvas.options.location.type == Maplet.LEFT_BOTTOM) {
                a = this.controlCanvas.getRect().max.x + 10
            }
            if (this.overview && this.overview.location.type == Maplet.LEFT_BOTTOM) {
                xLK52 = this.overview.getRect().max.x + 10
            }
            this.wq.moveTo(Math.max(l, Math.max(a, xLK52)), yw)
        }
    },
    showNavLogo: function (a) {
        if (!a) {
            this.Wg4f.style.display = "none"
        } else {
            this.Wg4f.style.display = "block"
        }
        this.J12 = a;
        this._PaX()
    },
    waitPan: function (x, y, a) {
        if (this.Ah) clearTimeout(this.Ah);
        this.Ah = null;
        if (x && y) {
            if (this.vi == 0) {
                this.vi = 1;
                this.vc = x;
                this.vd = y;
                this.fy = a;
                this.Ah = getTimeout(this, this.waitPan, 500)
            }
        } else {
            if (this.vi) {
                this.vi = 0;
                this.panTo(this.vc, this.vd, this.fy)
            }
        }
    },
    doPan: function () {
        this.fa = true;
        this.v3JK7 = true;
        if (!px && ContentInfo && ContentInfo.isVisible()) {
            ContentInfo.qc2f(true)
        }
        if (!this.m6a3) {
            this.no();
            this.m6a3 = true
        }
        if (this.markerDragAnimation) {
            with(this.Ge4) {
                if (overlay != null && !overlay.ls) this.U287(false)
            }
        }
        var a = parseInt(Math.sqrt(this.Aq * this.Aq + this.Aw * this.Aw));
        if (this.vh) clearTimeout(this.vh);
        this.vh = null;
        if ((this.va - a) <= (1.2 * this.vg)) {
            this.Aq = this.xoffset;
            this.Aw = this.yoffset;
            this.sF.moveTo(this.Aq, this.Aw);
            this.vh = getTimeout(this, this.finishupPan, 10)
        } else {
            var b = this.xoffset * this.vg / this.va;
            var c = this.yoffset * this.vg / this.va;
            this.Aq += b;
            this.Aw += c;
            this.sF.moveTo(this.Aq, this.Aw);
            this.vh = getTimeout(this, this.doPan, 10)
        }
    },
    finishupPan: function () {
        this.fa = false;
        this.X7jjM = true;
        this.$2J = new Date().getTime();
        this.B824 = this.Aq;
        this.DHPs = this.Aw;
        if (this.vh) clearTimeout(this.vh);
        this.vh = null;
        this.setCenter(this.ve, this.vf);
        this.X7jjM = false;
        if (this.fp && this.fp.parentNode != this.sF.div) {
            this.sF.div.appendChild(this.fp)
        } else {} if (this.fy != null && this.fy != "undefined") eval(this.fy);
        this.v3JK7 = false
    },
    AN: function (a, x, y) {
        this.lA.hide();
        if (this.a7Vg) {
            this.a7Vg.setVisible(false);
            MLayer.setTipVisible(false)
        }
        for (var i in this.XI00u) {
            var p = this.XI00u[i];
            if (p.options.zoomhide && p.isVisible()) {
                p.setVisible(false)
            }
        }
        if (!this.m6a3) this.no();
        this.sEq2R = true;
        if (typeof x != "number") x = 0;
        if (typeof y != "number") y = 0;
        var b = Math.pow(2, parseFloat(a)) / Math.pow(2, this.AG);
        for (var i in this.pU) {
            var c = this.pU[i];
            if (c.c2) {
                with(c.style) {
                    if (c.getAttribute("done") != "1") {
                        _removeNode(c);
                        c = null;
                        delete this.pU[i]
                    } else {
                        width = (this.imgWidth * b < 10 ? 0 : this.imgWidth * b + 1) + "px";
                        height = (this.imgHeight * b < 10 ? 0 : this.imgHeight * b + 1) + "px";
                        left = $9tU(c.getAttribute("origx")) * b + 1 + "px";
                        top = $9tU(c.getAttribute("origy")) * b + 1 + "px"
                    }
                }
            }
        }
        with(this.sE.div.style) {
            width = this.width * b + "px";
            height = this.height * b + "px";
            left = (this.width / 2 - $9tU(width) / 2 + x) + "px";
            top = (this.height / 2 - $9tU(height) / 2 + y) + "px"
        }
    },
    L4uq1: function (a) {
        if ($9tU(this.sE.div.style.width) != this.width) {
            with(this.sE.div.style) {
                width = this.width + "px";
                height = this.height + "px";
                left = "0px";
                top = "0px"
            }
        }
        if (typeof a == "boolean" && a) {
            for (var i in this.pU) {
                var b = this.pU[i];
                if (typeof b == "object" && b.c2) {
                    b.style.left = $9tU(b.getAttribute("origx"), 0) + "px";
                    b.style.top = $9tU(b.getAttribute("origy"), 0) + "px";
                    b.style.width = this.imgWidth + "px";
                    b.style.height = this.imgHeight + "px"
                }
            }
        }
        this.sEq2R = false
    },
    removeLineAt: function () {},
    addHotspot: function (a, b, c, d, e) {
        var f = "hotspot" + this.aE.length;
        if (typeof b == "object" && b.toString() == "com.mapbar.maplet.MPoint") {
            a = b.lat;
            b = b.lon
        } else {
            var g = cq.vp(b);
            a = Math.min(sy[1], Math.max(sy[0], parseFloat(g[1])));
            b = Math.min(sz[1], Math.max(sz[0], parseFloat(g[0]) % 360))
        }
        this.aE[this.aE.length] = new a8(f, parseFloat(a), parseFloat(b), c, d, e)
    },
    zp: function (x, y, a) {
        var b = (x - this.width / 2);
        if (this.rotation != 0) {
            var c = (y - this.height / 2);
            b = b * this.gk + c * this.wT
        }
        a = $9tU(a, this.AG);
        var d = sj[a];
        var e = this.gA + b * d / this.imgWidth;
        e = Math.min(sz[1], Math.max(sz[0], e % 360));
        return e
    },
    zo: function (x, y, a) {
        var b = (y - this.height / 2);
        if (this.rotation != 0) {
            var c = (x - this.width / 2);
            b = -c * this.wT + b * this.gk
        }
        a = $9tU(a, this.AG);
        var d = qP[a];
        var e = this.gx - b * d / this.imgHeight;
        e = Math.min(sy[1], Math.max(sy[0], e));
        return e
    },
    zl: function (a, b) {
        var c = ((parseFloat(a) - this.gA) % 360);
        if (c > 180) c -= 360;
        if (c < -180) c += 360;
        var d = Math.round(this.width / 2 + c / sj[this.AG] * this.imgWidth);
        if (this.rotation != 0) {
            var e = Math.round(this.height / 2 - ((parseFloat(b) - this.gx) % 360) / qP[this.AG] * this.imgHeight);
            d = (d - this.width / 2) * this.gk - (e - this.height / 2) * this.wT + this.width / 2
        }
        return d
    },
    zm: function (a, b) {
        var c = Math.round(this.height / 2 - ((parseFloat(a) - this.gx) % 360) / qP[this.AG] * this.imgHeight);
        if (this.rotation != 0) {
            var d = ((parseFloat(b) - this.gA) % 360);
            if (d > 180) d -= 360;
            if (d < -180) d += 360;
            var e = Math.round(this.width / 2 + d / sj[this.AG] * this.imgWidth);
            c = (e - this.width / 2) * this.wT + (c - this.height / 2) * this.gk + this.height / 2
        }
        return c
    },
    setMode: function (a, b) {
        a = a.toString().toLowerCase();
        a = (this.tB[a]) ? parseInt(this.tB[a]) : parseInt(a);
        if ((a != 3 && a != 23) && this.sS == a) return null;
        if (this.sS == 3 || this.sS == 23) this.vA = this.sS;
        this.sS = parseInt(a);
        this.Fgr();
        var c = null;
        if (a != 'measure' && a != 11) {
            clearInterval(this.yr3);
            this.yr3 = undefined
        }
        switch (a) {
        case 'zoomin':
        case '1':
        case 1:
            this.cS = true;
            this.k93('crosshair', this.map);
            this.sS = 1;
            c = 'zoomin';
            break;
        case 'zoomout':
        case '2':
        case 2:
            this.cS = true;
            this.sS = 2;
            this.k93('crosshair', this.map);
            c = 'zoomout';
            break;
        case ts.ty:
        case "pan":
        case 3:
            this.sS = 3;
            c = 'pan';
            a = null;
            this.setCursorStyle("default", "");
        case ts.l3:
        case 13:
        case 'erase':
            if (a) {
                this.sS = 13;
                c = 'erase';
                a = null
            }
        case ts.tu:
        case 'edit':
        case 23:
            if (a) {
                this.sS = 23;
                c = 'edit';
                a = null
            }
            this.cO = true;
            this.k93('default', this.map);
            break;
        case ts.tv:
        case "lookup":
        case 5:
            this.cS = true;
            this.k93('crosshair', this.map);
            this.sS = 5;
            c = 'lookup';
            break;
        case '6':
        case 6:
        case 'bookmark':
            this.k93('default', this.map);
            c = 'bookmark';
            this.sS = 6;
            break;
        case '7':
        case 7:
            this.k93('default', this.map);
            break;
        case '8':
        case 8:
            this.k93('default', this.map);
            break;
        case '9':
        case 9:
        case 'drawline':
            this.k93('default', this.map);
            this.po = -1;
            this.sS = 9;
            c = 'drawline';
            if (this.allowDrawingDragMap) this.cO = true;
            break;
        case '10':
        case 10:
        case 'drawarea':
            this.k93('default', this.map);
            this.po = -1;
            this.sS = 10;
            c = 'drawarea';
            if (this.allowDrawingDragMap) this.cO = true;
            break;
        case '11':
        case 11:
        case 'measure':
            this.setCursorStyle("default", this.bl8I.cursor);
            this.k93('default', this.map);
            c = 'measure';
            this.sS = 11;
            if (this.allowDrawingDragMap) this.cO = true;
            break;
        case '15':
        case 15:
        case 'measarea':
            this.k93('default', this.map);
            c = 'measarea';
            this.sS = 15;
            if (this.allowDrawingDragMap) this.cO = true;
            break;
        case '24':
        case 24:
        case 'snapshot':
            this.cS = true;
            this.k93('crosshair', this.map);
            c = 'snapshot';
            this.sS = 24;
            break;
        case '25':
        case 25:
        case 'roadline':
            this.k93('pointer', this.map);
            c = 'roadline';
            this.sS = ts.y2A;
            if (this.allowDrawingDragMap) this.cO = true;
            break;
        default:
            break
        };
        var d = null;
        if (c != null && typeof b == "function") d = MEvent.addListener(this, c, b);
        if (c != null) {
            MEvent.trigger(this, "setmode", c)
        }
        return d
    },
    I36: function (a, n) {
        var b = new MMarker(a, new MIcon(this.rlConfig._H28, 11, 11));
        b.creator = MLayer.SYSTEM;
        this.addOverlay(b);
        this.JX4w.mik2.push(b)
    },
    BuP: function (a, b, c, d) {
        if (this.sS == ts.y2A || (this.sS != ts.y2A && a)) {
            var r = eval("typeof " + this.rlConfig.resultName + "=='undefined'?null:" + this.rlConfig.resultName);
            if (r) {
                if (this.JX4w.j74R) {
                    this.removeOverlay(this.JX4w.j74R, true);
                    this.JX4w.j74R = null
                }
                var e = [];
                var f = 0;
                if (r.a.length) {
                    var g = r.a[0];
                    var e = this.decodeLine(g.a, g.b);
                    f = $9tU(g.e, 0)
                } else {
                    e.push(b);
                    e.push(c)
                }
                var h = new MPolyline(e);
                if (this.sS == ts.y2A) h.creator = MLayer.SYSTEM;
                if (a) {
                    this.JX4w.Gjx1.push(h);
                    this.JX4w.$1u.eg$8 += f;
                    this.JX4w.$1u.JOxeK = 0
                } else {
                    this.JX4w.j74R = h;
                    this.JX4w.$1u.JOxeK = f
                }
                this.addOverlay(h);
                r = undefined;
                eval(this.rlConfig.resultName + "=undefined");
                this.E10Jb()
            }
            with(this.JX4w.s4N) {
                if (KD_ != e4013 || X2x9 != Pu4) {
                    e4013 = KD_;
                    Pu4 = X2x9;
                    this.qYhaL(new MPoint(KD_, X2x9, false), false)
                } else {
                    this.JX4w.A63 = false
                }
            }
        }
        _removeNode(aa(d))
    },
    qYhaL: function (a, b) {
        if (typeof b != "boolean") b = false;
        this.JX4w.A63 = true;
        var c = this.JX4w.mik2;
        var d = "%252C";
        var e = c[c.length - 1].pt;
        var f = this.rlConfig.url + "&_=" + new Date().getTime() + "&nh=" + e.getPid() + "_" + d + a.getPid() + "_&ri=" + this.rlConfig.resultName;
        new q1iCE(f, this.BuP, false, true, this, this.BuP, [b, e, a]).IB2TC()
    },
    E10Jb: function () {
        with(this.JX4w) {
            if (!tip.maplet) this.addPanel(tip);
            if (!tip.isVisible()) tip.show();
            var d = tip.dom.firstChild.childNodes[0];
            var a = "start";
            if (mik2.length == 0) {
                d.style.display = "none"
            } else {
                if (mik2.length == 1) a = "one";
                else a = "end";
                var b = $1u.eg$8 + $1u.JOxeK;
                d.innerHTML = b < 1000 ? b + " \u7c73" : (b / 1000).toFixed(1) + " \u516c\u91cc";
                d.style.display = ""
            }
            if (this.rlConfig.tip[a]) tip.dom.firstChild.childNodes[1].innerHTML = this.rlConfig.tip[a];
            tip.setLocation({
                x: this.moveX + 20,
                y: this.moveY
            })
        }
    },
    setCursorStyle: function (a, b) {
        if (typeof a == "string" && typeof b == "string" && a) {
            if ("default,pointer,move,crosshair".indexOf(a) != -1) {
                ktg[a] = b
            }
        }
    },
    k93: function (a, b) {
        var c = ktg[a];
        var d = "";
        if (typeof c == "string" && c) {
            d = "url('" + c + "'),auto"
        } else {
            d = a
        }
        if (b.style.cursor != d) {
            b.style.cursor = d
        }
    },
    wN: function (x, y, a, b, c) {
        if (typeof a == "undefined" || a == null) return;
        if (iToolTipStyle == "undefined" || iToolTipStyle == 1) {
            var d = (typeof a == "object") ? a : null;
            if (d) {
                avBubble.gl(d.title, d.content);
                c = b
            } else {
                avBubble.gl(a, b)
            }
            if (d) {
                this.fp = d.gv(x, y, true)
            } else {
                this.fp = gp(a, x, y, b, true)
            }
        } else {
            var d = (typeof a == "object") ? a : null;
            if (d) {
                setToolTipMenu(x, y, d.title, d.content)
            } else {
                setToolTipMenu(x, y, a, b)
            }
        }
    },
    hideBubble: function () {
        hideBubble(this);
        if (this.fp) {
            if (this.fp.parentNode) this.fp.parentNode.removeChild(this.fp);
            this.fp = null
        }
    },
    aY: function () {
        if ((this.moveX > 0) && (this.moveX < this.width) && (this.moveY > 0) && (this.moveY < this.height) && (this.downX > 0) && (this.downX < this.width) && (this.downY > 0) && (this.downY < this.height)) {
            return true
        } else {
            return false
        }
    },
    lu: function () {
        var w = 0,
            h = 0,
            x = 0,
            y = 0;
        if (this.moveX < this.downX && this.moveY < this.downY) {
            w = this.downX - this.moveX;
            h = this.downY - this.moveY;
            x = this.moveX;
            y = this.moveY
        } else if (this.moveX > this.downX && this.moveY < this.downY) {
            w = this.moveX - this.downX;
            h = this.downY - this.moveY;
            x = this.downX;
            y = this.moveY
        } else if (this.moveX < this.downX && this.moveY > this.downY) {
            w = this.downX - this.moveX;
            h = this.moveY - this.downY;
            x = this.moveX;
            y = this.downY
        } else if (this.moveX > this.downX && this.moveY > this.downY) {
            w = parseInt(this.moveX) - this.downX;
            h = parseInt(this.moveY) - this.downY;
            x = this.downX;
            y = this.downY
        } else {
            w = this.moveX - this.downX;
            h = this.moveY - this.downY;
            x = this.downX;
            y = this.downY
        }
        if (this.sS == ts.u4XWR) {
            this.snapshotBox.resize(w, h);
            this.snapshotBox.moveTo(x, y)
        } else {
            this.sD.resize(w, h);
            this.sD.moveTo(x, y)
        }
    },
    Fgr: function () {
        this.cL = false;
        this.cS = false;
        this.cO = false;
        this.cN = false;
        this.cR = false;
        this.closeMeasureCurrPath();
        this.setCursorStyle("default", "");
        if (this.zy) {
            this.zy.remove(true);
            this.zy = null
        }
        if (this.tG) {
            this.tG.remove(true);
            this.tG = null
        }
        if (this.sD.style.visibility == "visible") {
            this.sD.hide();
            this.sD.resize(1, 1);
            this.sD.moveTo(-10, -10)
        }
        if (this.snapshotBox.isVisible() && !this.snapshotBox.O7di) {
            this.snapshotBox.hide()
        }
        nX();
        with(this.JX4w) {
            $1u.eg$8 = 0;
            $1u.JOxeK = 0;
            if (tip.maplet && tip.isVisible()) tip.hide();
            s4N.e4013 = s4N.KD_ = 0;
            s4N.Pu4 = s4N.X2x9 = 0;
            if (j74R) {
                this.removeOverlay(j74R, true);
                j74R = null
            }
            if (mik2.length) {
                for (var i = 0; i < mik2.length; i++) {
                    mik2[i].creator = MLayer.USER;
                    if (yDS03) {
                        this.removeOverlay(mik2[i], true);
                        mik2[i] = null
                    }
                }
            }
            if (Gjx1.length) {
                for (var i = 0; i < Gjx1.length; i++) {
                    Gjx1[i].creator = MLayer.USER;
                    if (yDS03) {
                        this.removeOverlay(Gjx1[i], true);
                        Gjx1[i] = null
                    }
                }
            }
            mik2 = [];
            Gjx1 = [];
            A63 = false;
            yDS03 = 1
        }
    },
    clean: function () {
        this.hideBubble();
        this.refresh()
    },
    showBasePois: function (a) {
        this.bp = a;
        this.refresh()
    },
    addControl: function (a, b, c, d) {
        if (typeof a == "string" || (typeof a == "object" && a.toString().indexOf("MStandardControl") > 0)) {
            if (this.controlCanvas) {
                this.controlCanvas.g1();
                this.controlCanvas = null
            }
            var e = null;
            if (typeof a == "string") {
                if (c == null || c == "undefined") {
                    c = 0
                }
                if (d == null || d == "undefined") {
                    d = 0
                }
                e = new MStandardControl(a, c, d, b)
            } else if (typeof a == "object") {
                e = a
            }
            if (e) {
                e.initialize(this)
            }
        } else if (typeof a == "object") {
            if (this.gc[a.id]) {
                return
            }
            a.initialize(this);
            this.gc[a.id] = a;
            this.overview.addListener(this.gc[a.id])
        }
    },
    removeControl: function (a) {
        if (typeof a == "object" && this.gc[a.id]) {
            this.gc[a.id].remove();
            this.gc[a.id] = null
        }
    },
    getCurrentMap: function () {
        var a = this.width * sj[this.AG] / this.imgWidth;
        cq.lf = this.gx;
        cq.li = this.gA;
        var b = cq.zn();
        var c = (this.aO.length > 0) ? "&pois=" + this.aO.length + "," : "";
        for (var i = 0; i < this.aO.length; i++) {
            c += this.aO[i].zn() + "," + this.aO[i].xP + ","
        }
        var d = (this.aN.length > 0) ? "&plines=" + this.aN.length + "," : "";
        for (var i = 0; i < this.aN.length; i++) {
            d += this.aN[i].zn() + ";"
        }
        var e = "";
        for (var i in this.u5) {
            if (typeof this.u5[i] == "object" && this.u5[i] != null && this.u5[i].zq) {
                if (e.length == 0) {
                    e = "&overlays="
                }
                e += this.u5[i].zq() + ";"
            }
        }
        return "&map=" + this.AG + "," + b + "," + this.width + "," + this.height + "&zm=" + (Math.round(parseFloat(a) * 1000) / 10.0) + "&width=" + this.width + "&height=" + this.height + "&ctr=" + b + c + d + "&client=" + strLicenseKey + e
    },
    setCursorIcon: function (a) {
        this.gJ = a;
        this.gI.src = a;
        nX()
    },
    v1: function () {
        this.gJ = null;
        this.gI.src = null
    },
    setBgColor: function (a) {
        this.panel.style.backgroundColor = a
    },
    setTransparency: function (a) {
        this.sE.div.style.filter = "alpha(opacity=" + a + ");";
        this.sE.div.style.MozOpacity = (a / 100.0);
        this.sE.div.style.opacity = (a / 100.0);
        this.sE.div.style.qK = (a / 100)
    },
    ql: function () {
        return this.cI
    },
    setActive: function (a) {
        this.cI = a
    },
    onkeydown: function (e) {
        var a = (e) ? e : (window.event) ? window.event : null;
        if (a) {
            var b = (a.fG) ? a.fG : ((a.keyCode) ? a.keyCode : ((a.which) ? a.which : 0));
            if (b == "37" || b == "38" || b == "39" || b == "40") {
                if (this.ql()) {
                    if (a.target && ((a.target.nodeName == "INPUT" && a.target.getAttribute("type").toLowerCase() == "text") || a.target.nodeName == "TEXTAREA")) {
                        return
                    }
                    if (a.srcElement && ((a.srcElement.tagName == "INPUT" && a.srcElement.type == "text") || a.srcElement.tagName == "TEXTAREA")) {
                        return
                    }
                    if (a.shiftKey || a.ctrlKey) {
                        if (b == "37") {
                            this.setRotation(this.rotation - 15);
                            this.refresh()
                        }
                        if (b == "39") {
                            this.setRotation(this.rotation + 15);
                            this.refresh()
                        }
                    } else {
                        if (b == "37") this.panTo(this.width / 2, 0);
                        if (b == "38") this.panTo(0, this.height / 2);
                        if (b == "39") this.panTo(-this.width / 2, 0);
                        if (b == "40") this.panTo(0, -this.height / 2)
                    }
                }
            }
        }
    },
    getMaxBubbleSize: function () {
        var a = 0;
        var b = 0;
        var c = this.width;
        var d = this.height;
        var e = this.getOverviewRect();
        var f = {
            tn: e.min.x,
            d7gX2: e.max.x,
            width: e.max.x - e.min.x
        };
        var g = this.getControlRect();
        var i = {
            tn: g.min.x,
            d7gX2: g.max.x
        };
        if (this.controlCanvas) {
            with(this.controlCanvas) {
                if (isVisible()) {
                    if (options.location.type == Maplet.LEFT_TOP || options.location.type == Maplet.LEFT_BOTTOM) {
                        a = Math.max(a, g.max.x)
                    } else {
                        c = Math.min(c, g.min.x)
                    }
                }
            }
        }
        if (this.overview) {
            with(this.overview) {
                if (fg) {
                    if (location.type == Maplet.LEFT_TOP || location.type == Maplet.LEFT_BOTTOM) {
                        a = Math.max(a, e.max.x + location.marginx)
                    } else {
                        c = Math.min(c, e.min.x)
                    }
                }
            }
        }
        var w = c - a;
        var h = d - b;
        if (!isNaN(parseInt(avBubble._X8)) && parseInt(avBubble._X8) < w) w = parseInt(avBubble._X8);
        if (!isNaN(parseInt(avBubble.dng4)) && parseInt(avBubble.dng4) < h) h = parseInt(avBubble.dng4);
        return {
            min: {
                x: a,
                y: b
            },
            max: {
                x: c,
                y: d
            },
            width: w,
            height: h,
            f0: i,
            overview: f
        }
    },
    O73w6: function (a) {
        this.A0BGB = true;
        new q1iCE(bpp[0] + "/poireport.txt" + (GOLDPOI_TXTRQT_RANDOM ? "?" + Math.random() : ""), this.DV8, null, null, this, this.DV8).IB2TC()
    },
    DV8: function () {
        if (typeof basepoilist == "object" && basepoilist) this.refresh();
        this.A0BGB = false
    },
    setTrajectory: function (a, b, c, d) {
        this.ux = (c == null || c == "undefined") ? 5 : parseInt(c);
        this.pid = a;
        this.lX = d;
        var e = b.pts;
        if (e != null && e.length > 0) {
            var f = 0;
            this.zf = new Array();
            this.zg = new Array();
            this.p9 = 0;
            for (var i = 0; i < e.length; i++) {
                {
                    var g = cq.vp(e[i].getPid());
                    this.zg[f] = parseFloat(g[0]);
                    this.zf[f] = parseFloat(g[1]);
                    f++;
                    g = null
                }
            }
            e = null
        }
    },
    rotate: function (a) {
        if (this.uw <= this.t9) {
            this.uw = Math.min(this.t9, this.uw + this.xe)
        } else if (this.uw >= this.t9) {
            this.uw = Math.max(this.t9, this.uw - this.xe)
        }
        this.setRotation(this.uw);
        this.refresh();
        if (this.uw == this.t9) {
            setTimeout(a, 100)
        } else {
            setTimeout("maplet.rotate(\"" + a + "\")", 100)
        }
    },
    doEmulation: function () {
        try {
            if (this.p9 == 0) {
                this.wY = this.zf[0];
                this.wZ = this.zg[0];
                this.py = this.p9;
                this.p9++
            }
            if (this.p9 < this.zf.length) {
                this.vh = null;
                if (this.pid.icon.div.parentNode != this.lA) {
                    this.lA.appendChild(this.pid.icon.div.parentNode);
                    this.pid.icon.div.style.zIndex = 200
                }
                if (this.nT == 1 && rs && this.py != this.p9) {
                    this.py = this.p9;
                    if (typeof this.lY == "undefined" || this.lY == null) {
                        this.lY = document.createElement("div");
                        this.lY.style.position = "absolute";
                        this.lY.style.zIndex = 1000;
                        this.lY.style.width = parseFloat(this.pid.icon.div.style.width) + "px";
                        this.lY.style.height = parseFloat(this.pid.icon.div.style.height) + "px";
                        this.lY.style.left = (this.width / 2 - parseFloat(this.pid.icon.div.style.width) / 2) + "px";
                        this.lY.style.top = (this.height / 2 - parseFloat(this.pid.icon.div.style.height) / 2) + "px";
                        this.lY.innerHTML = "<img src='" + this.pid.icon.imgUrl + "' width='" + parseFloat(this.pid.icon.div.style.width) + "px' height='" + this.pid.icon.div.style.height + "px'>";
                        this.map.appendChild(this.lY)
                    }
                    var a = -90 + parseFloat(180 * Math.atan2(this.zf[this.p9] - this.zf[this.p9 - 1], 0.8 * (this.zg[this.p9] - this.zg[this.p9 - 1])) / Math.PI);
                    if (a < 0) {
                        a += 360
                    }
                    a = a % 360;
                    if ((Math.abs(a - this.rotation) % 360) > 180) {
                        this.rotation += 360
                    }
                    if (this.rotation - 180 - 360 > 0) {
                        this.rotation = (this.rotation - 720)
                    }
                    this.uw = this.rotation;
                    this.t9 = a;
                    if (this.p9 == 1) {
                        this.setRotation(a);
                        this.setCenter(this.wY, this.wZ)
                    } else {
                        this.setCenter(this.wY, this.wZ);
                        setTimeout("maplet.rotate(\"maplet.doEmulation()\")", 500);
                        return
                    }
                }
                var b = this.zl(this.zg[this.p9 - 1], this.zf[this.p9 - 1]);
                var c = this.zm(this.zf[this.p9 - 1], this.zg[this.p9 - 1]);
                var d = this.zl(this.zg[this.p9], this.zf[this.p9]);
                var e = this.zm(this.zf[this.p9], this.zg[this.p9]);
                var f = this.zl(this.wZ, this.wY);
                var g = this.zm(this.wY, this.wZ);
                var h = parseFloat(Math.sqrt((d - b) * (d - b) + (e - c) * (e - c)));
                var i = parseFloat(Math.sqrt((f - b) * (f - b) + (g - c) * (g - c))) + this.ux;
                if (i <= (h - this.ux)) {
                    f = b + i * (d - b) / h;
                    g = c + i * (e - c) / h;
                    this.wZ = this.zg[this.p9 - 1] + i * (this.zg[this.p9] - this.zg[this.p9 - 1]) / h;
                    this.wY = this.zf[this.p9 - 1] + i * (this.zf[this.p9] - this.zf[this.p9 - 1]) / h
                } else {
                    f = d;
                    g = e;
                    this.wZ = this.zg[this.p9];
                    this.wY = this.zf[this.p9];
                    this.p9++
                }
                if (this.nT == 0) {
                    this.pid.icon.div.style.top = (g - parseFloat(this.pid.icon.div.style.height)) + "px";
                    this.pid.icon.div.style.left = (f - parseFloat(this.pid.icon.div.style.width) / 2) + "px"
                }
                if (this.nT == 1 && rs) {
                    this.sF.div.style.top = parseFloat(this.sF.div.style.top) + this.ux;
                    this.vh = getTimeout(this, this.doEmulation, 100)
                } else {
                    if (f < 0) {
                        this.panTo(this.width / 2, this.height / 2 - g, "maplet.doEmulation()")
                    } else if (f > this.width) {
                        this.panTo(-this.width / 2, this.height / 2 - g, "maplet.doEmulation()")
                    } else if (g < 0) {
                        this.panTo(this.width / 2 - f, this.height / 2, "maplet.doEmulation()")
                    } else if (g > this.height) {
                        this.panTo(this.width / 2 - f, -this.height / 2, "maplet.doEmulation()")
                    } else {
                        this.vh = getTimeout(this, this.doEmulation, 10)
                    }
                }
            } else {
                this.vh = null;
                this.zf = null;
                this.zg = null;
                this.pid.icon.div.style.zIndex = 1;
                if (this.lY) {
                    if (this.lY.parentNode) {
                        this.lY.parentNode.removeChild(this.lY);
                        this.lY = null
                    }
                }
                this.setRotation(0);
                this.refresh();
                if (this.lX != null || this.lX != "undefined") {
                    this.lX()
                }
            }
        } catch (nf) {}
    },
    stopEmulation: function () {
        if (this.p9 && this.zf) this.p9 = this.zf.length
    },
    getMarkersInPolygon: function (a) {
        var b = [];
        var c = [];
        for (var i = 0; i < a.pts.length; i++) {
            c.push({
                x: a.pts[i].mapX,
                y: a.pts[i].mapY
            })
        }
        var d = this.getMarkers();
        for (var i = 0; i < d.length; i++) {
            var e = {
                x: d[i].pt.mapX,
                y: d[i].pt.mapY
            };
            if (_isInsidePolygon(e, c)) b.push(d[i])
        }
        return b
    },
    getMarkerPolygons: function (a) {
        var b = this.getPolylines(2);
        var c = [];
        if (b.length > 0) {
            var d = {
                x: a.pt.mapX,
                y: a.pt.mapY
            };
            for (var i = 0; i < b.length; i++) {
                var e = [];
                var f = b[i];
                for (var g = 0; g < f.pts.length; g++) e.push({
                    x: f.pts[g].mapX,
                    y: f.pts[g].mapY
                });
                if (_isInsidePolygon(d, e)) c.push(f)
            }
        }
        return c
    },
    aK$3: function (x, y) {
        return this.PPf2[(x % 2) < 0 ? 0 : x % 2][(y % 2) < 0 ? 0 : y % 2]
    },
    fkl2: function (a) {
        var w = parseInt(this.vg4.$E5$A[0].style.borderTopWidth);
        if (this.vg4.yN != null && ((a < 0 && w == 0) || (a > 0 && w == 2))) {
            return
        }
        var b = {
            left: this.moveX,
            top: this.moveY
        };
        var c = null;
        var d = null;
        if (a < 0) {
            d = this.OI28;
            c = this.vg4.maXj;
            this.t1EO1(true)
        } else {
            d = this._1N;
            c = this.vg4.Ot8;
            this.t1EO1(false)
        }
        b.left -= c.width / 2;
        b.top -= c.height / 2;
        this.Ka9r(true, c, b);
        this.vg4.yN = getTimeout(this, d, this.vg4.interval)
    },
    t1EO1: function (a) {
        var b = this.vg4.$E5$A;
        if (a) {
            b[0].style.borderWidth = "0px 2px 2px 0px";
            b[1].style.borderWidth = "0px 0px 2px 2px";
            b[2].style.borderWidth = "2px 2px 0px 0px";
            b[3].style.borderWidth = "2px 0px 0px 2px"
        } else {
            b[0].style.borderWidth = "2px 0px 0px 2px";
            b[1].style.borderWidth = "2px 2px 0px 0px";
            b[2].style.borderWidth = "0px 0px 2px 2px";
            b[3].style.borderWidth = "0px 2px 2px 0px"
        }
    },
    _1N: function () {
        this.a05L$(false)
    },
    OI28: function () {
        this.a05L$(true)
    },
    a05L$: function (a) {
        if (this.vg4.N8d$8 <= this.vg4.D63iA) {
            var c = this.vg4.container;
            var b = this.vg4.xd * this.vg4.N8d$8;
            var d = c.offsetWidth * b;
            c.style.left = (a ? c.offsetLeft + d / 2 : c.offsetLeft - d / 2) + "px";
            c.style.width = (a ? c.offsetWidth - d : c.offsetWidth + d) + "px";
            d = c.offsetHeight * b;
            c.style.top = (a ? c.offsetTop + d / 2 : c.offsetTop - d / 2) + "px";
            c.style.height = (a ? c.offsetHeight - d : c.offsetHeight + d) + "px";
            this.a8863();
            this.vg4.N8d$8++;
            this.vg4.yN = getTimeout(this, (a ? this.OI28 : this._1N), this.vg4.interval - this.vg4.interval * this.vg4.xd)
        } else {
            this.Ka9r(false)
        }
    },
    a8863: function () {
        var c = this.vg4.container;
        var i = 4;
        var w = c.offsetWidth;
        var h = c.offsetHeight;
        this.vg4.$E5$A[1].style.left = w - i + "px";
        this.vg4.$E5$A[2].style.top = h - i + "px";
        this.vg4.$E5$A[3].style.left = w - i + "px";
        this.vg4.$E5$A[3].style.top = h - i + "px"
    },
    Ka9r: function (a, b, d) {
        var c = this.vg4.container;
        c.style.left = "100px";
        c.style.top = "100px";
        if (this.vg4.yN) {
            window.clearTimeout(this.vg4.yN);
            this.vg4.yN = null
        }
        this.vg4.N8d$8 = 1;
        this.vg4.container.style.display = a ? "" : "none";
        var c = this.vg4.container;
        if (typeof d == "object" && d) {
            c.style.left = d.left + "px";
            c.style.top = d.top + "px"
        }
        if (typeof b == "object" && b) {
            c.style.width = b.width + "px";
            c.style.height = b.height + "px";
            this.a8863()
        }
    },
    getControlRect: function () {
        var r = {
            min: {
                x: 0,
                y: 0
            },
            max: {
                x: 0,
                y: 0
            }
        };
        if (this.controlCanvas) {
            with(this.controlCanvas) {
                var a = getRect();
                if (isVisible()) {
                    r.min = a.fNi3A;
                    r.max = a._I42
                }
            }
        }
        return r
    },
    getOverviewRect: function () {
        var r = {
            min: {
                x: 0,
                y: 0
            },
            max: {
                x: 0,
                y: 0
            }
        };
        if (this.overview) r = this.overview.getRect();
        if (r.min.x == 0 && r.max.x == 0) r = {
            min: {
                x: this.width,
                y: this.height
            },
            max: {
                x: this.width,
                y: this.height
            }
        };
        return r
    },
    KhE_: function (a, b, c) {
        if (typeof b != "boolean") b = true;
        if (typeof c != "boolean") c = true;
        var d = a.jpl;
        var e = a.qp5pK;
        var f = a.i8L3;
        var g = a.R53;
        var h = 0;
        var i = 0;
        var j = 0;
        var k = 0;
        var m = this.width;
        var n = this.height;
        if (b || c) {
            var r = {
                min: {
                    x: a.jpl,
                    y: a.qp5pK
                },
                max: {
                    x: a.i8L3,
                    y: a.R53
                },
                width: a.i8L3 - a.jpl,
                height: a.R53 - a.qp5pK
            };
            var o, l, yw;
            if (c && this.controlCanvas) {
                var p = this.getControlRect();
                o = this.controlCanvas.options.location;
                l = (o.type == Maplet.LEFT_TOP || o.type == Maplet.LEFT_BOTTOM);
                yw = (o.type == Maplet.LEFT_TOP || o.type == Maplet.RIGHT_TOP);
                if (_isRectint(r, p)) {
                    if (l) {
                        j = p.max.x
                    } else m = p.min.x
                } else {
                    if (l) {
                        if (yw && r.min.x < p.max.x && (r.min.y < p.max.y || (r.height > this.height - p.max.y))) {
                            j = p.max.x
                        } else if (!yw && r.min.x < p.max.x && (r.max.y > p.min.y || (r.height > p.min.y))) {
                            j = p.max.x
                        }
                    } else {
                        if (yw && r.max.x > p.min.x && (r.min.y < p.max.y || (r.height > this.height - p.max.y))) {
                            m = p.min.x
                        } else if (!yw && r.max.x > p.min.x && (r.max.y > p.min.y || (r.height > p.min.y))) {
                            m = p.min.x
                        }
                    }
                }
            }
            if (b && this.overview) {
                var q = this.getOverviewRect();
                o = this.overview.location;
                l = (o.type == Maplet.LEFT_TOP || o.type == Maplet.LEFT_BOTTOM);
                yw = (o.type == Maplet.LEFT_TOP || o.type == Maplet.RIGHT_TOP);
                if (_isRectint(r, q)) {
                    if (l) j = Math.max(j, q.max.x);
                    else m = Math.min(m, q.min.x)
                } else {
                    if (l) {
                        if (yw && r.min.x < q.max.x && (r.min.y < q.max.y || (r.height > this.height - q.max.y))) {
                            j = Math.max(j, q.max.x)
                        } else if (!yw && r.min.x < q.max.x && (r.max.y > q.min.y || (r.height > q.min.y))) {
                            j = Math.max(j, q.max.x)
                        }
                    } else {
                        if (yw && r.max.x > q.min.x && (r.min.y < q.max.y || (r.height > this.height - q.max.y))) {
                            m = Math.min(m, q.min.x)
                        } else if (!yw && r.max.x > q.min.x && (r.max.y > q.min.y || (r.height > q.min.y))) {
                            m = Math.min(m, q.min.x)
                        }
                    }
                }
            }
        }
        if (d < j) h = d - j;
        if (e < k) i = e - k;
        if (f > m) {
            if (h == 0) h = f - m;
            else h = 0
        }
        if (g > n) {
            if (i == 0) i = g - n;
            else i = 0
        }
        return {
            tSu0: h,
            e8jNA: i
        }
    },
    nH_: function (a, b) {
        if (typeof b != "object" || !b) b = {
            AYu0v: true,
            $52x8: true,
            d81C3: true
        };
        var c = this.KhE_(a, b.AYu0v, b.$52x8, b.d81C3);
        var d = c.tSu0;
        var e = c.e8jNA;
        if (d != 0 || e != 0) {
            if (typeof a.x9W07 != "number") a.x9W07 = 0;
            if (typeof a.c9566 != "number") a.c9566 = 0;
            if (d != 0) d = (d < 0 ? d - a.x9W07 : d + a.x9W07);
            if (e != 0) e = (e < 0 ? e - a.c9566 : e + a.c9566);
            maplet.panTo(-d, -e)
        }
        return c
    },
    viewOverlay: function (a, b, c) {
        var s = a.toString();
        var d = s.indexOf("MMarker") != -1;
        var e = s.indexOf("MPolyline") != -1;
        var f = s.indexOf("MEllipse") != -1;
        var g = s.indexOf("MRoundRect") != -1;
        var h = 0,
            iy = 0,
            ax = 0,
            ay = 0;
        if (d && a.icon) {
            var i = a;
            h = i.pt.mapX - i.icon.anchorX;
            iy = i.pt.mapY - i.icon.anchorY;
            ax = h + parseInt(i.icon.div.style.width);
            ay = iy + parseInt(i.icon.div.style.height)
        } else if (e) {
            var j = a.getCenterXY();
            h = j.x - 16;
            iy = j.y - 16;
            ax = h + 32;
            ay = iy + 32
        } else if (f) {
            h = a.gC.mapX - 16;
            iy = a.gC.mapY - 16;
            ax = h + 32;
            ay = iy + 32
        } else if (g) {
            var k = a.getCenterXY();
            h = k.x - 16;
            iy = k.y - 16;
            ax = h + 32;
            ay = iy + 32
        }
        return this.nH_({
            jpl: h,
            qp5pK: iy,
            i8L3: ax,
            R53: ay,
            x9W07: b,
            c9566: c
        })
    },
    W794: function () {
        this.a7Vg = new fD("LayerContainer", 0, 0, this.width, this.height, true, 2, '', this.sF)
    },
    E7h9E: function () {
        for (var i in this.layerData) {
            this.layerData[i] = null;
            delete this.layerData[i]
        }
    },
    getImgByXY: function (x, y, a) {
        if (typeof a != "boolean") a = false;
        var b = this.pU[((this.AG).toString(16) + (this.gD).toString(16) + 'l' + (this.gE).toString(16)).toLowerCase()];
        if (typeof b == "object" && b) {
            var c = Math.floor((x - parseInt(b.style.left)) / this.imgWidth);
            var d = -Math.floor((y - parseInt(b.style.top) + (a ? w8[this.AG] : 0)) / this.imgHeight);
            return ((this.AG).toString(16) + (this.gD + c).toString(16) + 'l' + (this.gE + d).toString(16)).toLowerCase()
        }
        return null
    },
    U287: function (a, b, c) {
        with(this.Ge4) {
            if (typeof b != "undefined") fC.div.style.left = b + "px";
            if (typeof c != "undefined") fC.div.style.top = c + "px";
            if (fC.div.parentNode != this.panel) {
                this.panel.appendChild(fC.div);
                fC.div.style.zIndex = 2
            }
            if (fC.div.style.display != (a ? "" : "none")) {
                fC.div.style.display = (a ? "" : "none")
            }
            if (overlay) {
                overlay.Vr$83();
                overlay = null
            }
        }
    },
    c1663: function () {
        if (!this._2015) {
            this._2015 = document.createElement("div");
            this._2015.id = jF74S ? 'vCanvasSVG' : 'vCanvasVML';
            this._2015.style.position = "absolute";
            this._2015.unselectable = "on";
            this._2015.style.zIndex = 0;
            this._2015.style.MozUserSelect = "none";
            this.lA.appendChild(this._2015);
            if (jF74S) {
                var a = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                a.setAttribute("id", "LayerDrawSVG");
                a.setAttribute("version", "1.1");
                a.setAttribute("overflow", "visible");
                a.setAttribute("viewBox", "-" + this.width + " -" + this.height + " " + this.width * 3 + " " + this.height * 3);
                a.setAttribute("style", "position: absolute; left: -" + this.width + "px; top: -" + this.height + "px; z-index: 0;");
                a.setAttribute("height", this.height * 3 + "px");
                a.setAttribute("width", this.width * 3 + "px");
                a.setAttribute(G9kd3, "true");
                var b = document.createElementNS("http://www.w3.org/2000/svg", "path");
                b.setAttribute("d", "M 0 0 L 10 5 L 0 10 L 4 5 z");
                b.setAttribute("fill", this.brush.color);
                b.setAttribute("fill-opacity", this.brush.bgtransparency / 100 + 0.3);
                var c = document.createElementNS("http://www.w3.org/2000/svg", "marker");
                c.setAttribute("id", "svgArrow");
                c.setAttribute("viewBox", "0 0 10 10");
                c.setAttribute("refX", "6");
                c.setAttribute("refY", "5");
                c.setAttribute("markerUnits", "strokeWidth");
                c.setAttribute("orient", "auto");
                c.appendChild(b);
                a.appendChild(c);
                this._2015.appendChild(a)
            }
        }
        return this._2015
    },
    _fq: function (x, y) {
        if (this.YD9_0 > this.ignoreMoveRange || this.YD9_0 < -this.ignoreMoveRange) {
            x = Math.abs(x);
            if (this.YD9_0 < 0) this.YD9_0 = Math.abs(this.YD9_0)
        }
        this.YD9_0 += x;
        if (this.pr9P9 > this.ignoreMoveRange || this.pr9P9 < -this.ignoreMoveRange) {
            y = Math.abs(y);
            if (this.pr9P9 < 0) this.pr9P9 = Math.abs(this.pr9P9)
        }
        this.pr9P9 += y
    },
    autoZoomLogo: function () {},
    clearMeasurePaths: function () {
        if (this.V9Jd.length > 0) {
            for (var i = 0; i < this.V9Jd.length; i++) this.removeMeasurePath(i, false)
        }
        this.V9Jd = []
    },
    removeMeasurePath: function (a, b) {
        if (this.V9Jd.length > a) {
            if (typeof b != "boolean") b = true;
            var c = this.V9Jd[a];
            if (c.gWI) {
                MEvent.removeBuiltInListener(c.gWI, "click", c.q9);
                c.gWI = null
            }
            for (var i = 0; i < c.mik2.length; i++) {
                var d = c.mik2[i];
                d.sW.finalize();
                d.sW = null;
                d.point = null
            }
            if (c.Do6s) {
                c.Do6s.finalize();
                c.Do6s = null
            }
            if (b) _removeArrayItem(this.V9Jd, a, a)
        }
    },
    PyqSc: function (a, b) {
        if (typeof b != "boolean") b = false;
        var c = this.bl8I;
        var d = null;
        if (b) {
            d = {
                mik2: [],
                Do6s: null
            };
            if (this.V9Jd.length == 0) this.V9Jd[0] = d;
            else this.V9Jd.push(d)
        } else {
            d = this.V9Jd[this.V9Jd.length - 1]
        }
        var e = 0;
        var f = "";
        if (d.mik2.length > 0) {
            var g = d.mik2[d.mik2.length - 1];
            if (g.point._galt() == a._galt() && g.point._galn() == a._galn()) return;
            e = this.measDistance([g.point, a]);
            e = g.$1u + e;
            f = c.s8T.replace(c._w5Dw, (e < 1000) ? e + "\u7c73" : parseInt(e / 100) / 10 + "\u516c\u91cc")
        } else {
            f = c.V8U
        }
        f = c.tip.replace(c.AFk8G, f);
        var h = new MMarker(a, new MIcon(c._H28, 11, 11), null, new MLabel(f, 15, undefined, undefined, {
            enableStyle: false
        }));
        h.autoHide = false;
        h.creator = MLayer.SYSTEM;
        this.addOverlay(h);
        d.mik2.push({
            point: a,
            $1u: e,
            sW: h
        })
    },
    closeMeasureCurrPath: function () {
        if (this.V9Jd.length == 0) return;
        var a = 0;
        var b = [];
        var c = this.V9Jd[this.V9Jd.length - 1];
        var d = this.bl8I;
        if (c.Do6s) return;
        if (c.mik2.length == 1) {
            this.removeMeasurePath(this.V9Jd.length - 1);
            return
        }
        for (var i = 0; i < c.mik2.length; i++) {
            b.push(c.mik2[i].point);
            if (i == c.mik2.length - 1) a = c.mik2[i].$1u
        }
        var e = new MPolyline(b, d.XJS);
        e.creator = MLayer.SYSTEM;
        this.addOverlay(e);
        var f = d.aD6.replace(d._w5Dw, (a < 1000) ? a + "\u7c73" : parseInt(a / 100) / 10 + "\u516c\u91cc");
        f = d.tip.replace(d.AFk8G, f);
        var g = c.mik2[c.mik2.length - 1].sW;
        g.label.resetLabel({
            content: f
        });
        c.gWI = g.label.div.firstChild.firstChild.firstChild;
        c.q9 = MEvent.bindDom(c.gWI, "click", this, this.f8W);
        c.Do6s = e
    },
    f8W: function (e) {
        PI7(e);
        for (var i = 0; i < this.V9Jd.length; i++) {
            if (e.target == this.V9Jd[i].gWI) {
                this.removeMeasurePath(i)
            }
        }
    }
};
Maplet.prototype.toString = function () {
    return "com.mapbar.maplet.Maplet"
};
Maplet.prototype.setIwStdSize = function (w, h) {
    if (typeof w != "number") w = 260;
    if (typeof h != "number") h = 240;
    if (w < avBubble.minWidth) w = avBubble.minWidth;
    if (h < avBubble.minHeight) h = avBubble.minHeight;
    avBubble.width = w;
    avBubble.height = h
};
Maplet.prototype.setIwZoomInSize = function (w, h) {
    if (typeof w != "number") w = "";
    if (typeof h != "number") h = "";
    if (w < avBubble.width) w = "";
    if (h < avBubble.height) h = "";
    avBubble._X8 = w;
    avBubble.dng4 = h
};
Maplet.prototype.addLayer = function (a) {
    if (a && a instanceof MLayer) {
        if (!this.qS[a.id]) {
            a.initialize(this);
            this.qS[a.id] = a;
            var i = a.options.zindex + 10;
            if (typeof this.bWX[i] != "undefined") {
                this.bWX[i].push(a)
            } else {
                this.bWX[i] = [a]
            }
            this.refresh()
        }
    } else {
        return false
    }
    return true
};
Maplet.prototype.removeLayer = function (b, c) {
    if (typeof c != "boolean") c = false;
    if (b && b instanceof MLayer && this.qS[b.id] && typeof b.remove == "function") {
        if (this.B95w && this.R0933 == b) {
            if (MEvent.contains(this, "layer_mouseout") > 0) {
                MEvent.trigger(this, "layer_mouseout", {
                    layer: this.R0933,
                    pid: this.B95w.p,
                    area: this.B95w.l,
                    data: this.B95w.d,
                    name: this.B95w.n,
                    rect: this.B95w.rect
                })
            }
            this.B95w = null;
            this.R0933 = null
        }
        this.qS[b.id].remove(c);
        this.qS[b.id] = null;
        delete this.qS[b.id];
        var d = b.options.zindex + 10;
        if (typeof this.bWX[d] != "undefined") {
            var a = this.bWX[d];
            if (a.length == 1) {
                this.bWX[d] = undefined
            } else {
                for (var i = 0; i < a.length; i++) {
                    if (a[i] == b) {
                        a.splice(i, 1)
                    }
                }
            }
        }
    }
};
Maplet.prototype.clearLayers = function (a) {
    if (!this.a7Vg) return;
    for (var i in this.qS) {
        if (this.qS[i].options.creator == MLayer.USER) this.removeLayer(this.qS[i], a)
    }
    if (!this.traffic && !this.DxR41) {
        this.a7Vg.clear();
        _removeNode(this.a7Vg.div);
        this.a7Vg = null;
        this.bWX = []
    }
};
Maplet.prototype.getLayers = function () {
    var a = [];
    for (var i in this.qS) {
        if (this.qS[i].options.creator == MLayer.USER) a.push(this.qS[i])
    }
    return a
};
Maplet.prototype.sfuU = function (a) {
    if (typeof a == "object" && a && a instanceof MLayer) {
        for (var i = this.bWX.length - 1; i >= 0; i--) {
            if (typeof this.bWX[i] != "undefined") {
                var c = this.bWX[i];
                for (var b = c.length - 1; b >= 0; b--) {
                    if (c[b] == a) {
                        if (c.length == 1) this.bWX[i] = undefined;
                        else c.splice(b, 1)
                    }
                }
            }
        }
        var i = a.options.zindex + 10;
        if (typeof this.bWX[i] != "undefined") {
            this.bWX[i].push(a)
        } else {
            this.bWX[i] = [a]
        }
    }
};
Maplet.prototype.setLayerDataPassiveUrl = function (a) {
    if (typeof a != "string" || !a) return;
    this.layerDataPassiveUrl = a
};
Maplet.prototype.loadLayerDataOfPassiveMode = function (a) {
    if (this.layerData[a] && this.layerData[a].passiveLoadStatus == Maplet.UNLOAD) {
        if (!this.layerDataPassiveUrl) {
            this.layerData[a].passiveLoadStatus = Maplet.sMGm9;
            return
        } else {
            this.layerData[a].passiveLoadStatus = Maplet.LOADING
        }
        var b = this.layerData[a];
        var c = [];
        for (var i in this.qS) {
            var d = this.qS[i];
            if (d.options.needData && d.inZoomRange(this.AG) && d.options.dataLoadMode == MLayer.DL_PASSIVE && !d.data[a] && d.S9976[a]) {
                if (d.options.serverPathType == MLayer.PT_COMBINER) c.push("[" + d.options.combinerParas + "|" + d.U1MD() + "]");
                else c.push(d.U1MD())
            }
        }
        if (c.length > 0) {
            new q1iCE(this.layerDataPassiveUrl + "?n=" + c.join(";") + "&p=" + sI[this.AG] + "/" + b.dirname + "/" + b.xyname + ".js&g=" + a, this.ome3r, false, true, this, undefined, [a]).IB2TC()
        } else {
            this.layerData[a].passiveLoadStatus = Maplet.LOADED
        }
    }
};
Maplet.prototype.ome3r = function (a, b) {
    if (this.layerData[a]) {
        var g = this.layerData[a];
        g.passiveLoadStatus = Maplet.LOADED;
        var c = "__lgd" + a;
        var d = eval("typeof " + c + "==\"undefined\"?null:" + c);
        if (d) {
            for (var i in this.qS) {
                var l = this.qS[i];
                c = l.U1MD() + g.dirname + "_" + g.xyname;
                if (typeof d[c] == "object" && d) l.yw95(a, d[c])
            }
            d = null
        }
    }
    _removeNode(aa(b))
};
Maplet.prototype.addPanel = function (a) {
    if (a && a instanceof MPanel) {
        if (this.XI00u[a.id]) return true;
        a.initialize(this);
        this.XI00u[a.id] = a
    } else {
        return false
    }
};
Maplet.prototype.removePanel = function (a, b) {
    if (typeof b != "boolean") b = false;
    if (typeof a == "object") {
        if (this.XI00u[a.id]) {
            a.remove(b);
            this.XI00u[a.id] = null;
            delete this.XI00u[a.id]
        } else if (typeof a.remove == "function") {
            a.remove(b)
        }
    } else if (typeof a == "string") {
        if (this.XI00u[a]) {
            this.XI00u[a].remove(b);
            this.XI00u[a] = null;
            delete this.XI00u[a]
        }
    }
};
Maplet.prototype.getPanels = function () {
    var a = [];
    for (var i in this.XI00u) {
        if (this.XI00u[i].options.creator == MPanel.USER) a.push(this.XI00u[i])
    }
    return a
};
Maplet.prototype.clearPanels = function (a) {
    for (var i in this.XI00u) {
        if (this.XI00u[i].options.creator == MPanel.USER) this.removePanel(this.XI00u[i], a)
    }
};
Maplet.prototype.addOverlay = function (a) {
    if (typeof a == "object") {
        if (this.u5[a.id]) {
            return
        }
        a.initialize(this);
        this.u5[a.id] = a
    }
};
Maplet.prototype.getZoomLevel = function () {
    return this.AG
};
Maplet.prototype.clearOverlays = function (a) {
    if (typeof a != "boolean") a = false;
    this.hideBubble(this);
    for (var b in this.u5) {
        var c = this.u5[b];
        if (c && c.remove && c.creator == MLayer.USER) {
            c.remove(a);
            this.u5[b] = null;
            c = null;
            delete this.u5[b]
        }
    }
};
Maplet.prototype.removeOverlay = function (a, b) {
    if (typeof b != "boolean") b = false;
    if (typeof a == "object") {
        if (this.u5[a.id]) {
            this.u5[a.id].remove(b);
            this.u5[a.id] = null;
            delete this.u5[a.id]
        } else if (typeof a.remove == "function") {
            a.remove(b)
        }
    } else if (typeof a == "string") {
        if (this.u5[a]) {
            this.u5[a].remove(b);
            this.u5[a] = null;
            delete this.u5[a]
        }
    }
};
Maplet.prototype.clearCache = function () {
    cq.pu = null;
    cq.pu = {}
};
Maplet.prototype.setAutoZoom = function (a, b) {
    if (!this.bInitialized) return;
    if (t63s(a)) {
        var c = this.getOverlaysBound(a);
        a = c.min;
        b = c.max
    }
    var d = this.getFitZoomLevel(a, b);
    if (d.center && d.level) {
        this.centerAndZoom(d.center, d.level)
    } else {
        if (d.center) this.setCenter(d.center);
        if (d.level) this.setZoomLevel(d.level)
    }
};
Maplet.prototype.getFitZoomLevel = function (a, c) {
    var d = {
        center: null,
        level: null
    };
    if ((a instanceof MPoint && !a.j1u9()) || (c instanceof MPoint && !c.j1u9())) return d;
    else if ((typeof a == "string" && !a) && (typeof c == "string" && !c)) return d;
    if (typeof a == "string" && a) {
        a = new MPoint(a);
        if (!a.j1u9()) return d
    }
    if (typeof c == "string" && c) {
        c = new MPoint(c);
        if (!c.j1u9()) return d
    }
    var e, n65, N584C, uG24;
    var f = [];
    if (!a || !c) {
        for (var i in this.u5) {
            var g = this.u5[i];
            if (g instanceof MMarker) {
                f.push(g.pt)
            } else if (g instanceof MPolyline) {
                for (var h = 0; h < g.pts.length; h++) {
                    f.push(g.pts[h])
                }
            }
        }
    } else {
        f.push(a);
        f.push(c)
    }
    for (var i = 0; i < f.length; i++) {
        var j = f[i];
        if (!i) {
            N584C = e = j._galn();
            uG24 = n65 = j._galt()
        } else {
            e = Math.min(e, j._galn());
            n65 = Math.max(n65, j._galt());
            N584C = Math.max(N584C, j._galn());
            uG24 = Math.min(uG24, j._galt())
        }
    }
    if (!e) {
        e = N584C = this.gA;
        n65 = uG24 = this.gx
    }
    var k = this.getMaxBubbleSize();
    var l = k.min.x,
        iy = k.min.y,
        ax = k.max.x,
        ay = k.max.y;
    var m = this.zp(l, iy);
    var n = this.zo(l, iy);
    var o = this.zp(ax, ay);
    var p = this.zo(ax, ay);
    var q = m < e && n > n65 && o > N584C && p < uG24;
    var b = (N584C - e < o - m) && (n65 - uG24 < n - p);
    if (!q && !b) {
        for (var i = this.AG - 1; i >= MIN_ZOOM_LEVEL; i--) {
            m = this.zp(l, iy, i);
            n = this.zo(l, iy, i);
            o = this.zp(ax, ay, i);
            p = this.zo(ax, ay, i);
            if ((N584C - e < o - m) && (n65 - uG24 < n - p)) {
                d.level = i;
                break
            }
        }
    } else if (this.AG < MAX_ZOOM_LEVEL && !(e == N584C && n65 == uG24)) {
        var r = false;
        for (var i = this.AG + 1; i <= MAX_ZOOM_LEVEL; i++) {
            m = this.zp(l, iy, i);
            n = this.zo(l, iy, i);
            o = this.zp(ax, ay, i);
            p = this.zo(ax, ay, i);
            if (!((N584C - e < o - m) && (n65 - uG24 < n - p))) {
                if (i - 1 != this.AG) d.level = i - 1;
                r = true;
                break
            }
        }
        if (!r && !d.level) d.level = MAX_ZOOM_LEVEL
    }
    if (!q || d.level) d.center = new MPoint((e + N584C) / 2, (n65 + uG24) / 2, false);
    return d
};
Maplet.prototype.getOverlaysBound = function (a) {
    var b = [];
    var c = {
        min: null,
        max: null
    };
    if (t63s(a)) {
        for (var i = 0; i < a.length; i++) {
            var d = a[i];
            if (d instanceof MMarker) {
                b.push(d.pt)
            } else if (d instanceof MPolyline) {
                for (var e = 0; e < d.pts.length; e++) {
                    b.push(d.pts[e])
                }
            }
        }
    } else {
        for (var i in this.u5) {
            var d = this.u5[i];
            if (d instanceof MMarker) {
                b.push(d.pt)
            } else if (d instanceof MPolyline) {
                for (var e = 0; e < d.pts.length; e++) {
                    b.push(d.pts[e])
                }
            }
        }
    }
    if (b.length) {
        var f, n65, N584C, uG24;
        for (var i = 0; i < b.length; i++) {
            var g = b[i];
            if (!i) {
                N584C = f = g._galn();
                uG24 = n65 = g._galt()
            } else {
                f = Math.min(f, g._galn());
                n65 = Math.max(n65, g._galt());
                N584C = Math.max(N584C, g._galn());
                uG24 = Math.min(uG24, g._galt())
            }
        }
        c.min = new MPoint(f, n65, false);
        c.min.initialize(this);
        c.max = new MPoint(N584C, uG24, false);
        c.max.initialize(this)
    }
    return c
};
Maplet.prototype.setZoomLevel = function (a, b, c) {
    a = parseInt(a);
    if (a < MIN_ZOOM_LEVEL) {
        a = MIN_ZOOM_LEVEL
    }
    if (a > MAX_ZOOM_LEVEL) {
        a = MAX_ZOOM_LEVEL
    }
    if (b != undefined && !b) {
        return a
    }
    var d = false;
    if (this.markerDragAnimation) {
        with(this.Ge4) {
            if (overlay != null && !overlay.ls) this.U287(false)
        }
    }
    if (a != this.AG) {
        if (typeof c != "boolean" || c) this.D_164();
        d = true;
        for (var i in this.XI00u) {
            var p = this.XI00u[i];
            if (p.options.zoomhide && p.isVisible()) p.setVisible(false)
        }
        this.lA.hide()
    } else {
        this.np8()
    }
    if (this.a7Vg) MLayer.setTipVisible(false);
    if (iToolTipStyle == 0) hideToolTipMenu();
    if (this.controlCanvas != null) {
        this.controlCanvas.update(a)
    }
    if (this.gc != null) {
        for (var e in this.gc) {
            if (this.gc[e].nR) this.gc[e].nR.controlCanvas.div.update(a)
        }
    }
    if (this.ff) this.nI().setZoomLevel(a);
    if (ContentInfo && ContentInfo.isVisible()) {
        var f = this.toScreenCoordinate(avBubble.pD0);
        if (_isInsideRect({
            x: f[0],
            y: f[1]
        }, {
            min: {
                x: 0,
                y: 0
            },
            max: {
                x: this.width,
                y: this.height
            }
        })) {
            this.c97 = "infowindow";
            this.I9h5g = avBubble.pD0;
            this.VDH = f[0];
            this.f29 = f[1]
        }
    }
    this.mA88 = this.AG;
    this.AG = a;
    this.xg = sj[this.AG];
    this.xf = qP[this.AG];
    this.sR = sI[this.AG] + "/";
    if (this.I9h5g != "") {
        var g = this.VDH - this.width / 2;
        var h = this.f29 - this.height / 2;
        var f = this.toScreenCoordinate(this.I9h5g);
        var j = f[0] - g;
        var k = f[1] - h;
        this.gA = this.zp(j, k);
        this.gx = this.zo(j, k);
        this.VDH = -1;
        this.f29 = -1;
        this.I9h5g = "";
        this.c97 = ""
    }
    this.gD = Math.floor((this.gA) / this.xg);
    this.gE = Math.floor((this.gx) / this.xf);
    if (this.gD < 0) this.gD += 1;
    this.mapX = this.width / 2 - Math.round(((this.gA * wp) % (this.xg * wp)) * this.imgWidth / (this.xg * wp));
    if (this.gx >= 0) {
        this.mapY = this.height / 2 - this.imgHeight + Math.round(((this.gx * wp) % (this.xf * wp)) * this.imgHeight / (this.xf * wp))
    } else {
        this.mapY = this.height / 2 + Math.round(((this.gx * wp) % (this.xf * wp)) * this.imgHeight / (this.xf * wp))
    }
    this._J6();
    this.refresh();
    if (d) {
        if (apiType == 1) MEvent.trigger(this, "zoom", a);
        else MEvent.trigger(this, "zoom", "&act=zoom&zm=" + a);
        var l = this.mA88 > this.AG ? 'zoomout' : 'zoomin';
        MEvent.trigger(this, l, this.AG)
    }
    this.lA.show();
    if (this.a7Vg) this.a7Vg.setVisible(true);
    for (var i in this.XI00u) {
        var p = this.XI00u[i];
        if (p.options.zoomhide && !p.isVisible() && !p.J96.v7q0) p.setVisible(true)
    }
};
Maplet.prototype.setCenter = function (a, b, c, d) {
    if (!this.m6a3) {
        this.no();
        this.m6a3 = true
    }
    var e = a;
    if (typeof a == "object") {
        if (!a.encrypt && !a.pid) {
            if (!a.maplet) a.initialize(this);
            if (!a.pid) a.getPid()
        }
        e = a.pid
    }
    if (isNaN(parseFloat(e)) || (typeof e == "string" && e.indexOf(',') > 0)) {
        var f = cq.vp(e);
        a = f[1];
        b = f[0]
    }
    this.gx = Math.min(sy[1], Math.max(sy[0], parseFloat(a)));
    this.gA = Math.min(sz[1], Math.max(sz[0], parseFloat(b) % 360));
    if (typeof basepoilist != "object" && !this.A0BGB && this.Lb71) this.Lb71 = false;
    if (c == undefined || c) {
        this.setZoomLevel(this.AG)
    }
    if (d == undefined || d) {
        if (apiType == 1) {
            MEvent.trigger(this, "pan", new MPoint(this.toMapCoordinate(this.width / 2, this.height / 2)))
        } else {
            MEvent.trigger(this, "pan", "&act=pan&ctr=" + this.toMapCoordinate(this.width / 2, this.height / 2))
        }
    }
};
Maplet.prototype.moveTo = function (a, b) {
    this.top = parseInt(b);
    this.left = parseInt(a);
    this.panel.style.top = parseInt(b) + "px";
    this.panel.style.left = parseInt(a) + "px"
};
Maplet.prototype.getCenter = function () {
    if (apiType == 1) {
        return new MPoint(this.getCurrentMap().split(",").slice(1, 3).join(","))
    } else {
        return this.getCurrentMap().split(",")[1]
    }
};
Maplet.prototype.enableTraffic = function (a) {
    if (typeof a != "object" || !a) a = {};
    if (!this.traffic) {
        this.traffic = new MTraffic(a);
        this.traffic.initialize(this)
    }
    return this.traffic
};
Maplet.prototype.disableTraffic = function () {
    if (this.traffic) {
        this.traffic.remove(true);
        this.traffic = null
    }
};
Maplet.prototype.enablePOILayer = function (a) {
    if (typeof a != "object" || !a) a = {};
    if (!this.DxR41) {
        this.DxR41 = new MPOILayer(a);
        this.DxR41.initialize(this)
    }
    return this.DxR41
};
Maplet.prototype.disablePOILayer = function () {
    if (this.DxR41) {
        this.DxR41.remove(true);
        this.DxR41 = null
    }
};
Maplet.prototype.resize = function (w, h) {
    w = parseInt(w);
    h = parseInt(h);
    if (w < 0 || h < 0) return;
    if (w == this.width && h == this.height) return;
    aa("myalert").style.display = "none";
    if (this.snapshotBox.isVisible()) this.snapshotBox.hide();
    if (this.xc) this.xc.hide();
    this.hideBubble();
    this.width = w;
    this.height = h;
    this.z4 = Math.ceil((this.width) / (this.imgWidth) / 2);
    this.z5 = Math.ceil((this.height) / (this.imgHeight) / 2);
    this.panel.style.width = w + "px";
    this.panel.style.height = h + "px";
    this.panel.style.clip = 'rect(0px,' + this.width + 'px,' + this.height + 'px, 0px)';
    this.sF.resize(w, h);
    this.sE.resize(w, h);
    this.vx.resize(w, h);
    if (this.a7Vg) {
        this.a7Vg.resize(w, h);
        for (var i in this.qS) {
            this.qS[i].resize(w, h)
        }
    }
    if (this.ff) {
        this.nI().resize(h);
        this.nI().moveTo(this.width - 16, 0)
    }
    this.p7S();
    this.onresize();
    var a = (navigator.appVersion.match(new RegExp("6.", "i")) == '6.') ? 0 : 2;
    this.lA.resize(w, h);
    this.setZoomLevel(this.AG);
    if (this.a7Vg) {
        for (var i in this.qS) this.qS[i].refreshDataXY()
    }
    for (var b in this.gc) {
        if (this.gc[b] && this.gc[b].onresize) {
            this.gc[b].onresize(this)
        }
    }
    this.overview.onresize()
};
Maplet.prototype.zoomIn = function () {
    if (this.AG >= MAX_ZOOM_LEVEL) return;
    if (ContentInfo && ContentInfo.isVisible()) this.setZoomLevel(this.AG + 1);
    else this.zoomTo(Math.min(MAX_ZOOM_LEVEL, this.AG + 1))
};
Maplet.prototype.zoomOut = function () {
    if (this.AG <= MIN_ZOOM_LEVEL) return;
    if (ContentInfo && ContentInfo.isVisible()) this.setZoomLevel(this.AG - 1);
    else this.zoomTo(Math.max(0, this.AG - 1))
};
Maplet.prototype.centerAndZoom = function (a, b) {
    this.setCenter(a, "", false);
    if (typeof this.sF == "undefined") {
        this.AG = this.setZoomLevel(b, false);
        this.showMap()
    } else {
        this.setZoomLevel(b)
    }
};
Maplet.prototype.zoomTo = function (a, b, x, y) {
    if (b) {
        this.fy = b
    };
    if (ZOOM_TRANSITION && (!ContentInfo || !ContentInfo.isVisible())) {
        if (this.AZ != null) {
            clearTimeout(this.AZ)
        };
        this.AZ = null;
        if (typeof a != "undefined") {
            this.AT = parseInt(a);
            if (typeof x == "undefined") {
                this.vc = 0
            } else {
                this.vc = parseInt(x)
            }
            if (typeof y == "undefined") {
                this.vd = 0
            } else {
                this.vd = parseInt(y)
            }
            this.AZ = getTimeout(this, this.zoomTo, 200)
        } else {
            var c = new Number();
            if (this.AT > this.getZoomLevel()) {
                if (this.AS <= (this.AT - this.AY)) {
                    if (this.AS == -1) {
                        this.AS = this.getZoomLevel() + this.AY
                    } else {
                        this.AS += this.AY
                    }
                    c = (this.AS - this.getZoomLevel());
                    this.AN(this.AS, 2 * this.vc * c, 2 * this.vd * c);
                    this.AZ = getTimeout(this, this.zoomTo, 20)
                } else {
                    this.AS = -1;
                    this.ve = this.zo(-this.vc + this.width / 2, -this.vd + this.height / 2);
                    this.vf = this.zp(-this.vc + this.width / 2, -this.vd + this.height / 2);
                    this.setCenter(this.ve, this.vf, false, false);
                    this.setZoomLevel(this.AT);
                    if (this.fy) {
                        if (ContentInfo && ContentInfo.isVisible()) ContentInfo.setVisible(avBubble.hOD4());
                        eval(this.fy)
                    }
                }
            } else if (this.AT < this.getZoomLevel()) {
                if (this.AS == -1 || this.AS >= (this.AT + this.AY)) {
                    if (this.AS == -1) {
                        this.AS = this.getZoomLevel() - this.AY
                    } else {
                        this.AS -= this.AY
                    }
                    c = Math.abs(this.AS - this.getZoomLevel());
                    this.AN(this.AS, 2 * this.vc * c, 2 * this.vd * c);
                    this.AZ = getTimeout(this, this.zoomTo, 20)
                } else {
                    this.AS = -1;
                    this.ve = this.zo(-this.vc + this.width / 2, -this.vd + this.height / 2);
                    this.vf = this.zp(-this.vc + this.width / 2, -this.vd + this.height / 2);
                    this.setCenter(this.ve, this.vf, false, false);
                    this.setZoomLevel(this.AT);
                    if (this.fy) {
                        if (ContentInfo && ContentInfo.isVisible()) ContentInfo.setVisible(avBubble.hOD4());
                        eval(this.fy)
                    }
                }
            }
        }
    } else {
        this.setZoomLevel(a)
    }
};
Maplet.prototype.panTo = function (x, y, a) {
    if (this.fa) return;
    this.xoffset = parseFloat(x);
    this.yoffset = parseFloat(y);
    this.Aq = 0;
    this.Aw = 0;
    this.fy = a;
    this.ve = this.zo(-this.xoffset + this.width / 2, -this.yoffset + this.height / 2);
    this.vf = this.zp(-this.xoffset + this.width / 2, -this.yoffset + this.height / 2);
    this.va = parseInt(Math.sqrt(this.xoffset * this.xoffset + this.yoffset * this.yoffset));
    if (!this.fa) {
        this.doPan()
    }
};
Maplet.prototype.toMapCoordinate = function (x, y) {
    cq.li = this.zp(x, y);
    cq.lf = this.zo(x, y);
    return cq.zn()
};
Maplet.prototype.toScreenCoordinate = function (a) {
    var b = [null, null];
    try {
        var c = cq.vp(a);
        b[0] = this.zl(c[0], c[1]);
        b[1] = this.zm(c[1], c[0])
    } catch (e) {
        throw e
    }
    return b
};
Maplet.prototype.showLogo = function (a) {
    if (a) {
        this.q94s.style.display = "block"
    } else {
        this.q94s.style.display = "none"
    }
    this._PaX()
};
Maplet.prototype.showScale = function (a, b, c, d) {
    this.fe = a;
    if (this.fe) {
        this.wq.show()
    } else {
        if (this.wq != null) this.wq.hide()
    }
};
Maplet.prototype.showOverview = function (a, b) {
    if (a) {
        this.overview.show();
        if (b) {
            this.overview.open()
        } else {
            this.overview.close()
        }
    } else {
        this.overview.hide();
        this.overview.close()
    }
};
Maplet.prototype.setOverviewLocation = function (a) {
    this.overview.setLocation(a);
    this._PaX();
    this.p7S()
};
Maplet.prototype.resizeOverview = function (w, h) {
    this.overview.resizeTo(w, h);
    this._PaX();
    this.p7S()
};
Maplet.prototype.showControl = function (a) {
    this.fj = a;
    if (this.fj) {
        if (this.controlCanvas) this.controlCanvas.show()
    } else {
        if (this.controlCanvas) this.controlCanvas.hide()
    }
    this._PaX();
    this.p7S()
};
Maplet.prototype.getViewBound = function () {
    return {
        "LeftUp": this.toMapCoordinate(0, 0),
        "LeftDown": this.toMapCoordinate(0, this.height),
        "RightUp": this.toMapCoordinate(this.width, 0),
        "RightDown": this.toMapCoordinate(this.width, this.height)
    }
};
Maplet.prototype.calcPointsCt = function (a) {
    var b = Number.MAX_VALUE,
        oGM = b,
        ax = -Number.MAX_VALUE,
        ay = ax;
    for (var c = 0; c < a.length; c++) {
        if (!a[c].maplet) a[c].initialize(this);
        b = Math.min(b, a[c].mapX);
        oGM = Math.min(oGM, a[c].mapY);
        ax = Math.max(ax, a[c].mapX);
        ay = Math.max(ay, a[c].mapY)
    }
    if (b != Number.MAX_VALUE) return new MPoint(this.toMapCoordinate(b + (ax - b) / 2, oGM + (ay - oGM) / 2));
    else
    return null
};
Maplet.prototype.u0 = function () {
    if (!this.rbt && this.x3D()) return;
    if (this.c0) {
        return
    }
    if (this.fs) {
        return
    }
    this.c0 = true;
    this.fs = true;
    if (this.B7JUS.length > 0) {
        if (((this.u2 != null && this.u2 == "traffic") || this.AG != this.mA88) || bpp[0] != this._9_) {
            for (var p = 0; p < this.B7JUS.length; p++) {
                this.B7JUS[p].onmousedown = null;
                _removeNode(this.B7JUS[p])
            }
            this.B7JUS = []
        }
        this._9_ = bpp[0]
    }
    this.L4uq1();
    var a = '';
    if (this.a7Vg) this.E7h9E();
    var b = 0;
    var c = this.yl;
    var d = (this.u2 == "undefined" || this.u2 == null) ? "poi" : this.u2;
    var f = nM[this.AG];
    this.sZ = 0;
    this.s1 = 0;
    this.tf1 = this.width;
    this.tg = this.height;
    this.s2 = parseInt(this.gD);
    this.s3 = parseInt(this.gE);
    this.th = parseInt(this.gD);
    this.ti = parseInt(this.gE);
    var g = new Array();
    var h = new Array();
    var j = parseInt(new Date().getTime() / 60000);
    var k = (360 / sj[this.AG]);
    var m = this.getZoomLevel() - 1;
    if (this.AG == this.mA88) this.sE.clean();
    else if (typeof basepoilist != "object" && !this.A0BGB && this.Lb71) this.Lb71 = false;
    for (var n = -this.z4 - 1; n <= this.z4; n++) {
        for (var o = -this.z5 - 1; o <= this.z5; o++) {
            try {
                var r = parseInt(this.gD + n);
                var t = parseInt(this.gE + o);
                r = (r) % k;
                if (r >= (k / 2)) r -= k;
                if (r < (-k / 2)) r += k;
                var u = parseInt(Math.floor((r) / f));
                var v = parseInt(Math.floor((t) / f)); {
                    if (u < 0) u += 1;
                    if (v < 0) v += 1
                }
                var w = (r) - u * f;
                var x = (t) - v * f;
                var y = this.strImgUrl.replace("img", "img" + this.aK$3(w, x)) + "mapbank/" + c + "/" + this.sR;
                var z = this.strImgUrl + "mapbank/" + d + "/" + this.sR;
                var A = this.strImgUrl + "mapbank/base/" + this.sR;
                if (this.AG >= 14) y += u + "/";
                z += u + "_" + v + "/";
                A += u + "_" + v + "/";
                y += u + "_" + v + "/";
                z += w + "_" + x + ".png";
                A += w + "_" + x + ".js";
                y += w + "_" + x + "." + this.xK;
                var B = (n * this.imgWidth) + parseInt(this.mapX);
                var C = (-(o * this.imgHeight) + parseInt(this.mapY));
                var D = C;
                if (this.yl != "aerial" && this.yl.indexOf("aerial") < 0) {
                    C = C + w8[this.AG]
                }
                var E = false;
                var F = true;
                var G = true;
                if ((B < -this.imgWidth || B > this.width || C > this.height || C < -this.imgHeight)) E = true;
                if (this.u2 != null && this.u2 == "traffic" && w8[this.AG] != 0 && ((D < this.height || D <= 0))) {
                    F = false;
                    if (E) y = null
                }
                if (this.a7Vg && w8[this.AG] != 0 && ((D < this.height || D <= 0))) {
                    G = false;
                    if (E) y = null
                }
                if (E && F && G) continue;
                if (y) {
                    if (this.sZ < (B + this.imgWidth)) {
                        this.sZ = (B + this.imgWidth);
                        this.s2 = parseInt(this.gD) + parseInt(n)
                    }
                    if (this.s1 < (C + this.imgHeight)) {
                        this.s1 = (C + this.imgHeight);
                        this.ti = parseInt(this.gE) + parseInt(o)
                    }
                    if (this.tf1 > B) {
                        this.tf1 = B;
                        this.th = parseInt(this.gD) + parseInt(n)
                    }
                    if (this.tg > C) {
                        this.tg = C;
                        this.s3 = parseInt(this.gE) + parseInt(o)
                    }
                }
                var H = ((this.AG).toString(16) + (this.gD + n).toString(16) + 'l' + (this.gE + o).toString(16)).toLowerCase();
                if (b == 0) {
                    b = 1
                }
                if (y && y.indexOf("NaN") < 0) {
                    if (this.pU[H] == null) {
                        if (!rs || !px) {
                            this.pU[H] = new Image();
                            this.pU[H].id = H;
                            this.pU[H].name = H;
                            this.pU[H].ntry = "0";
                            this.pU[H].unselectable = "on";
                            this.pU[H].style.position = "absolute";
                            this.pU[H].style.MozUserSelect = "none"
                        } else {
                            this.pU[H] = document.createElement("v:Image");
                            this.pU[H].id = H;
                            this.pU[H].name = H;
                            this.pU[H].ntry = "0";
                            this.pU[H].unselectable = "on";
                            this.pU[H].style.position = "absolute";
                            this.pU[H].cE = "f";
                            this.pU[H].style.rotation = this.rotation;
                            this.pU[H].style.width = this.imgWidth;
                            this.pU[H].style.height = this.imgHeight
                        }
                        if (px) this.pU[H].style.filter = "alpha(opacity=0);";
                        else this.pU[H].style.opacity = "0";
                        f1.nk(this.pU[H], y, this.imgWidth, this.imgHeight)
                    } else {
                        if (px && rs) {
                            this.pU[H].style.rotation = this.rotation
                        }
                    }
                    var I = (B + this.imgWidth / 2 - this.width / 2) * this.gk - (C + this.imgHeight / 2 - this.height / 2) * this.wT + this.width / 2;
                    var J = (B + this.imgWidth / 2 - this.width / 2) * this.wT + (C + this.imgHeight / 2 - this.height / 2) * this.gk + this.height / 2;
                    this.pU[H].style.top = parseInt(J - this.imgHeight / 2) + "px";
                    this.pU[H].style.left = parseInt(I - this.imgWidth / 2) + "px";
                    this.pU[H].c2 = true;
                    this.pU[H].setAttribute("origy", parseInt(J - this.imgHeight / 2));
                    this.pU[H].setAttribute("origx", parseInt(I - this.imgWidth / 2))
                }
                if (this.u2 != null && this.u2 == "traffic") {
                    if (!__mapbar_magic_id) __mapbar_magic_id = "";
                    var K = bpp[0] + __mapbar_magic_id + "/" + m + "/o" + H + ".png";
                    if (_sqi) {
                        var L = document.createElement("v:image");
                        L.setAttribute("unselectable", "on");
                        L.id = "o" + H;
                        L.setAttribute("name", H);
                        L.setAttribute("traffic", "yes");
                        L.style.cssText = "position:absolute;top:" + D + "px;left:" + B + "px;width:300px;height:300px";
                        L.src = K;
                        this.B7JUS.push(L)
                    } else {
                        var M = document.createElement("IMG");
                        M.id = "o" + H;
                        M.setAttribute("name", H);
                        M.src = K;
                        M.ntry = "0";
                        M.unselectable = "on";
                        M.onerror = function () {
                            imageTileError(this)
                        };
                        M.onload = function () {
                            imageTileOk(this)
                        };
                        M.onmousedown = function () {
                            return false
                        };
                        M.style.cssText = "position:absolute;top:" + D + "px;left:" + B + "px;-moz-user-select: none;";
                        M.setAttribute("traffic", "yes");
                        this.B7JUS.push(M)
                    }
                    g[g.length] = 'o' + H;
                    h[h.length] = u + "_" + v + "/"
                } else if (this.u2 != null && this.u2 != "undefined" && z && z.indexOf("NaN") < 0) {
                    if (this.pU[H]) {
                        var N = "o" + H;
                        var O = u + "_" + v + "/";
                        if (((typeof basepoilist == "object" && basepoilist[sI[this.AG] + "/" + O + N + ".png"])) || oy411) {
                            var P = aa(N);
                            if (!P) {
                                P = document.createElement("DIV");
                                P.setAttribute("unselectable", "on");
                                P.id = N;
                                P.setAttribute("name", H);
                                P.style.cssText = "position:absolute;width:0px;height:0px;";
                                this.B7JUS.push(P)
                            }
                            P.style.left = B + "px";
                            P.style.top = D + "px";
                            g[g.length] = N;
                            h[h.length] = O
                        }
                    }
                }
                if (this.a7Vg) {
                    this.layerData[H] = {
                        passiveLoadStatus: Maplet.UNLOAD,
                        filename: this.sR + u + "_" + v + "/" + w + "_" + x,
                        dirx: u,
                        diry: v,
                        grid: H,
                        Q2L74: w,
                        R_3a8: x,
                        dirname: u + "_" + v,
                        xyname: w + "_" + x,
                        x: B,
                        y: D,
                        qy: r,
                        qA: t
                    }
                }
                y = null;
                z = null
            } catch (e) {
                throw (e)
            }
        }
    }
    for (var Q in this.pU) {
        var M = this.pU[Q];
        if (M != null && typeof M == "object") {
            if ((typeof M.c2 == "boolean" && M.c2) || M.c2 == "true") {
                if (M.parentNode != this.sE.div) {
                    if (M.parentNode != null) M.parentNode.removeChild(M);
                    this.sE.div.appendChild(M)
                }
            } else if (M.parentNode != this.sG.div) {
                if (M.parentNode != null) _removeNode(M);
                M.onerror = null;
                M.onload = null;
                M = null;
                delete this.pU[Q]
            }
        }
    }
    if (!(this.u2 != null && this.u2 == "traffic") && this.B7JUS.length > 0) {
        var s = g.join(",");
        for (var R = this.B7JUS.length - 1; R >= 0; R--) {
            if (s.indexOf(this.B7JUS[R].id) == -1) {
                if (this.B7JUS[R].parentNode) {
                    _removeNode(this.B7JUS[R])
                }
                this.B7JUS.splice(R, 1)
            }
        }
        for (var R = g.length - 1; R >= 0; R--) {
            if (aa(g[R])) g.splice(R, 1)
        }
    }
    if (this.B7JUS.length > 0) {
        for (var q = 0; q < this.B7JUS.length; q++) {
            this.lA.div.appendChild(this.B7JUS[q])
        }
    }
    a = null;
    for (var S in this.XI00u) {
        var p = this.XI00u[S];
        if (p.paint) p.paint()
    }
    if (this.a7Vg) {
        for (var i in this.qS) {
            if (this.qS[i].inZoomRange(this.AG)) this.qS[i].update();
            else this.qS[i].clear()
        }
    }
    if (this.sE.div.parentNode != this.sF.div) {
        this.sF.div.appendChild(this.sE.div)
    }
    if (this.vx.div.parentNode != this.sF.div) {
        this.sF.div.appendChild(this.vx.div)
    }
    if ((typeof this.fo == "boolean" && this.fo) && document.getElementById("LayerMap") && document.getElementById("LayerMap").filters && document.getElementById("LayerMap").filters.length > 0) {
        document.getElementById("LayerMap").filters[0].apply();
        document.getElementById("LayerMap").filters[0].vu()
    }
    if (this.aN.length > 0) {
        for (var T = 0; T < this.aN.length; T++) {
            this.aN[T].paint()
        }
    }
    if (this.zy != null) {
        this.zy.paint();
        if (this.tG != null) {
            this.tG.paint()
        }
    }
    if (this.aO.length > 0) {
        for (T = 0; T < this.aO.length; T++) {
            this.aO[T].u9(this.vx.div);
            this.aO[T].paint(this.lA.div)
        }
    }
    if (this.yG.length > 0) {
        if (!px) this.yG[this.yG.length - 1].label(this.lA.graphics)
    } else {
        if (iToolTipStyle == 0) hideToolTipMenu()
    }
    if (this.lA.div.parentNode != this.sF.div) {
        this.sF.div.appendChild(this.lA.div)
    }
    if (this.aE.length > 0) {
        this.aG = null;
        this.aH = null;
        this.aF = null;
        for (T = 0; T < this.aE.length; T++) {
            if (this.AG >= this.aE[T].AJ && this.AG <= this.aE[T].AI) {
                var U = this.zl(this.aE[T].li, this.aE[T].lf);
                var V = this.zm(this.aE[T].lf, this.aE[T].li);
                if (U >= 0 && U <= this.width && V >= 0 && V <= this.height) {
                    if (this.aG == null) {
                        this.aG = new Array();
                        this.aH = new Array();
                        this.aF = new Array()
                    }
                    this.aG[this.aG.length] = U;
                    this.aH[this.aH.length] = V;
                    this.aF[this.aF.length] = T
                }
            }
        }
    }
    if (!this.bInitialized) {
        this.bInitialized = true
    }
    if (this.u2 != null && this.u2 != "undefined") {
        if (this.u2 == "base") {
            if (this.AG >= parseInt(bpp[1]) && this.AG <= parseInt(bpp[2])) {
                if (!this.Lb71 && !oy411) {
                    this.O73w6();
                    this.Lb71 = true
                }
                var i = 0;
                for (var l in g) {
                    try {
                        if (typeof g[l] == "string") {
                            if (typeof basepoilist == "object" && basepoilist[sI[this.AG] + "/" + h[l] + g[l] + ".png"]) {
                                if (!oy411) new q1iCE(bpp[0] + sI[this.AG] + "/" + h[l] + g[l] + ".png", parseInt, false, true).IB2TC()
                            }
                            i++
                        }
                    } catch (lN) {
                        throw (lN)
                    }
                    g[l] = null;
                    h[l] = null
                }
            } else {
                for (var W in g) {
                    try {
                        if (typeof g[W] == "string" && document.getElementById(g[W]) && document.getElementById(g[W]).parentNode) {
                            if (!oy411) _removeNode(aa(g[W]))
                        }
                    } catch (e) {
                        throw (e)
                    }
                    g[W] = null;
                    h[W] = null
                }
            }
        } else {
            j = parseInt(new Date().getTime() / 60000);
            for (var X in g) {
                try {
                    if ((this.u2 != "traffic") && typeof g[X] == "string") {
                        XMLHttp.sendReq('GET', 'maplite/' + this.u2 + '.jsp?' + this.u3 + '&oid=' + g[X] + '&epoch=' + j, '', vB, g[X])
                    }
                } catch (e) {
                    throw (e)
                }
                g[X] = null;
                h[X] = null
            }
        }
        g.length = 0;
        g = null;
        h.length = 0;
        h = null
    }
    this.c0 = false;
    this.fs = false;
    for (var i = 0; i < 2; i++) {
        for (var Y in this.u5) {
            if (this.u5[Y] && this.u5[Y].paint) {
                if (i == 0 && this.u5[Y] instanceof MMarker && !this.u5[Y].ls) this.u5[Y].paint();
                else if (i == 1 && this.u5[Y].M$T) this.u5[Y].paint()
            }
        }
    }
    avBubble.k2iB();
    if (this.overview) this.overview.paint();
    cq.lf = this.gx;
    cq.li = this.gA;
    var Z = cq.zn();
    this.yu = Z + "@" + this.AG;
    if (ALLOW_MV) {
        try {
            var ba = "@mapbar" + (new Date().getTime() % 86400).toString(36);
            sB.src = "http://mv.mapbar.com/?" + this.yu + "@" + this.yt + "@" + this.width.toString(36).toUpperCase() + "@" + this.height.toString(36).toUpperCase() + "@" + this.sS.toString(36).toUpperCase() + "@" + c75 + "@" + strLicenseKey.toString(36).toUpperCase() + "@" + this.yl + "@" + ((bp) ? 1 : 0) + "@" + ((this.u2) ? this.u2 : "") + ba
        } catch (e) {
            throw (e)
        }
    }
    this.sF.moveTo(0, 0);
    this.vx.moveTo(0, 0);
    this.lA.moveTo(0, 0);
    MEvent.trigger(this, "update", this.yu)
};
Maplet.prototype.getEllipse = function () {
    var r = [];
    for (var i in this.u5) {
        if (this.u5[i] instanceof MEllipse) r.push(this.u5[i])
    }
    return r
};
Maplet.prototype.getRoundRect = function () {
    var r = [];
    for (var i in this.u5) {
        if (this.u5[i] instanceof MRoundRect) r.push(this.u5[i])
    }
    return r
};
Maplet.prototype.getMarkers = function () {
    var r = [];
    for (var i in this.u5) {
        var a = this.u5[i];
        if (a instanceof MMarker && a.creator == MLayer.USER) r.push(a)
    }
    return r
};
Maplet.prototype.getPolylines = function (a) {
    if (typeof a != "number") a = 1;
    var r = [];
    for (var i in this.u5) {
        var b = this.u5[i];
        if (b instanceof MPolyline && b.creator == MLayer.USER) {
            if (a == 2 && !b.Scp()) continue;
            else if (a == 3 && b.Scp()) continue;
            r.push(b)
        }
    }
    return r
};
Maplet.prototype.equalsLLCoords = function (a, b, c) {
    if (typeof a == "string" && a && typeof b == "string" && b) {
        try {
            if (a == b) return true;
            if (typeof c != "number") c = 0;
            var d = maplet.toScreenCoordinate(a);
            var e = maplet.toScreenCoordinate(b);
            if ((d[0] == e[0] || Math.abs(d[0] - e[0]) <= c) && (d[1] == e[1] || Math.abs(d[1] - e[1]) <= c)) return true
        } catch (nc) {}
    }
    return false
};
Maplet.prototype.measDistance = function (a) {
    try {
        var b = 0;
        var c = a.length;
        var d = [],
            lf = 0,
            li = 0;
        for (var e = 1; e < c; e++) {
            d.push(cq.vp(a[e - 1].getPid()));
            d.push(cq.vp(a[e].getPid()));
            lf = d[1][1] - d[0][1];
            li = d[1][0] - d[0][0];
            b += Math.sqrt(lf * lf + li * li * 0.64);
            d.length = 0
        }
        return parseInt(b * this.gM * 111111.0)
    } catch (nc) {
        return 0
    }
};
Maplet.prototype.measArea = function (a) {
    try {
        var b = 0;
        var c = a.length;
        var d = 2;
        var e = 0;
        for (var i = 1; i <= c; i++) {
            var f = (d % c);
            var g = (e % c);
            var h = parseFloat(cq.vp(a[(i % c)].getPid())[0]);
            var j = parseFloat(cq.vp(a[f].getPid())[1]);
            var k = parseFloat(cq.vp(a[g].getPid())[1]);
            b += h * (j - k);
            d++;
            e++
        }
        return parseInt(Math.abs(b / 2) * this.gM * this.gM * 100000 * 100000)
    } catch (nc) {
        return 0
    }
};
Maplet.prototype.decodeLine = function (a, b) {
    var c = [];
    if (typeof a != "string" || !a || typeof b != "string" || !b || b.indexOf(",") == -1) return c;
    var d = this.S6O(a);
    var e = this.kuhB8(b);
    for (var i = 0; i < d.length; i++) {
        c.push(new MPoint(d[i][1] * 0.00001, d[i][0] * 0.00001, false, typeof e[i] == "undefined" ? 0 : e[i]));
        c[i].initialize(this)
    }
    return c
};
Maplet.prototype.S6O = function (a) {
    var b = [];
    if (typeof a == "string" && a) {
        var c = ww7Gf(a);
        var x = c[0];
        var y = c[1];
        b.push([x, y]);
        for (var i = 2; i < c.length; i += 2) {
            x += c[i];
            y += c[i + 1];
            b.push([x, y])
        }
    }
    return b
};
Maplet.prototype.kuhB8 = function (a) {
    var b = {};
    if (typeof a == "string" && a && a.indexOf(",") != -1) {
        var c = a.split(",");
        for (var i = 0; i < c.length; i++) {
            var r = ww7Gf(c[i]);
            var d = 0;
            for (var e = 0; e < r.length; e++) {
                d += r[e];
                b[d] = i + 1
            }
        }
    }
    return b
};
Maplet.prototype.getLevelGroup = function () {
    var a = this.AG;
    if (a >= 0 && a <= 3) return 3;
    else if (a >= 4 && a <= 7) return 2;
    else if (a >= 8 && a <= 11) return 1;
    else if (a >= 12 && a <= 18) return 0;
    else
    return 3
};
Maplet.prototype.setMapBound = function (a) {
    if (!a.min || !(a.min instanceof MPoint) || !a.max || !(a.max instanceof MPoint)) return;
    if (!a.min.maplet) a.min.initialize(this);
    if (!a.max.maplet) a.max.initialize(this);
    a.Jr3 = a.min.clone();
    a.du2 = a.max.clone();
    a.X1Eq3 = a.min._galn();
    a.n65 = a.min._galt();
    a.N584C = a.max._galn();
    a.uG24 = a.max._galt();
    a.KD_ = a.X1Eq3 + (a.N584C - a.X1Eq3) / 2;
    a.X2x9 = a.n65 - (a.n65 - a.uG24) / 2;
    a.LC2 = new MPoint(a.KD_, a.X2x9, false);
    a.LC2.initialize(this);
    this.mapBound = a;
    this.x3D()
};
Maplet.prototype.getMapBound = function () {
    return this.mapBound
};
Maplet.prototype.x3D = function () {
    this.rbt = true;
    var a = false;
    if (!this.fa && this.mapBound) {
        var b = this.mapBound;
        b.Jr3.recalcScreenCoords();
        b.du2.recalcScreenCoords();
        b.LC2.recalcScreenCoords();
        var c = b.X1Eq3;
        var d = b.n65;
        var e = b.N584C;
        var f = b.uG24;
        var w = b.du2.mapX - b.Jr3.mapX;
        var h = b.du2.mapY - b.Jr3.mapY;
        var g = this.gA;
        var i = this.gx;
        var j = new MPoint(this.gA, this.gx, false);
        j.initialize(this);
        if (w > this.width && h > this.height) {
            var k = this.pb7.tl;
            var l = this.pb7.s4;
            var m = this.pb7.s6;
            var n = this.pb7.tj;
            if (c > k) g = this.gA + (c - k);
            else if (e < m) g = this.gA - (m - e);
            if (d < l) i = this.gx - (l - d);
            else if (f > n) i = this.gx + (f - n)
        } else {
            if (j.mapX != b.LC2.mapX || j.mapY != b.LC2.mapY) {
                g = b.KD_;
                i = b.X2x9
            }
        }
        var o = new MPoint(g, i, false);
        o.initialize(this);
        if (j.mapX != o.mapX || j.mapY != o.mapY) {
            this.X7jjM = false;
            this.setCenter(new MPoint(g, i, false));
            a = true
        }
    }
    this.rbt = false;
    return a
};
Maplet.prototype.finalize = function () {
    this.clearOverlays(true);
    this.clearPanels(true);
    if (ContentInfo) ContentInfo.finalize();
    ContentInfo = null;
    this.disablePOILayer();
    this.disableTraffic();
    this.clearLayers(true);
    this.E7h9E();
    for (var i in this.pU) {
        try {
            if (this.pU[i] != null && typeof this.pU[i] == "object") {
                this.pU[i].c2 = false
            }
        } catch (e) {}
    }
    this.fL();
    if (this.zP) clearTimeout(this.zP);
    if (this.controlCanvas) this.controlCanvas.g1();
    if (this.overview) this.overview.g1();
    if (this.snapshotBox) this.snapshotBox.finalize();
    MEvent.removeBuiltInListener(this.map, "mousemove", this.WEF7["map_mousemove"]);
    MEvent.removeBuiltInListener(this.map, "mousedown", this.WEF7["map_mousedown"]);
    MEvent.removeBuiltInListener(this.map, "mouseup", this.WEF7["map_mouseup"]);
    MEvent.removeBuiltInListener(this.map, "click", this.WEF7["map_click"]);
    MEvent.removeBuiltInListener(this.map, "dblclick", this.WEF7["map_dblclick"]);
    MEvent.removeBuiltInListener(this.map, "mouseout", this.WEF7["map_mouseout"]);
    MEvent.removeBuiltInListener(this.map, "drag", this.WEF7["map_drag"]);
    MEvent.removeBuiltInListener(this.map, "dragstart", this.WEF7["map_dragstart"]);
    MEvent.removeBuiltInListener(this.map, "dragend", this.WEF7["map_dragend"]);
    MEvent.removeBuiltInListener(this.map, "mouseover", this.WEF7["map_mouseover"]);
    MEvent.removeBuiltInListener(this.map, "mousewheel", this.WEF7["map_mousewheel"]);
    MEvent.removeBuiltInListener(this.map, "DOMMouseScroll", this.WEF7["map_DOMMouseScroll"]);
    if (kp) MEvent.removeBuiltInListener(document, "keydown", this.WEF7["document_keydown"]);
    xInoP(this.WEF7);
    this.sG.finalize();
    this.sF.finalize();
    this.zs.finalize();
    this.sE.finalize();
    this.vx.finalize();
    this.wq.finalize();
    this.sD.finalize();
    _removeNode(this.vg4.container);
    this.Ge4.fC.finalize();
    this.lA.finalize();
    this.q94s.onclick = null;
    _removeNode(this.q94s);
    _removeNode(this.Wg4f);
    this.clearCache();
    xInoP(this);
    document['mapbar-maplet'] = null
};

function a8(a, b, c, d, e, f) {
    this.id = a;
    this.li = c;
    this.lf = b;
    this.AJ = e;
    this.AI = f;
    this.xP = d
};
Maplet.prototype.aZ = function (e) {
    if (maplet.snapshotBox.O7di) {
        maplet.snapshotBox.O7di = false;
        return
    }
    if (this.xc) this.xc.hide();
    var a = (px) ? event.srcElement.id : e.target.id;
    var c = (px) ? event.srcElement : e.target;
    var d = parseInt((px) ? event.clientX : e.clientX) - this.offsetX;
    var f = parseInt((px) ? event.clientY : e.clientY) - this.offsetY;
    this.l6 = a;
    this.fS = d - this.left;
    this.fT = f - this.top;
    if (this.l6 != null && this.l6.indexOf("ctrl") >= 0) {
        return false
    }
    if (this.ff && this.nI().qn(this.fS, this.fT)) {
        this.AP.tC(this.fS, this.fT);
        return
    }
    if (this.aY()) {
        var g = this.zp(this.fS, this.fT);
        var h = this.zo(this.fS, this.fT);
        if (this.sS == ts.ty && (this.l6 == "LayerDrawMap" || this.l6 == "LayerDrawSVG") && this.downX == this.zQ && this.downY == this.zR && MEvent.contains(maplet, "click") > 0) {
            var j = cq.zn(this.zp(this.fS, this.fT), this.zo(this.fS, this.fT));
            if (apiType == 1) {
                var k = new MPoint(j);
                k.initialize(this);
                MEvent.trigger(this, 'click', e, k)
            } else MEvent.trigger(this, 'click', e, j)
        }
        var m = false;
        if ((this.sS == 7)) {
            this.addOrigin(h, g)
        } else if ((this.sS == 8)) {
            this.addDestination(h, g)
        } else if ((this.sS == 6)) {
            cq.lf = h;
            cq.li = g;
            var o = cq.zn();
            nX();
            if (apiType == 1) MEvent.trigger(this, "bookmark", {
                action: "add",
                point: new MPoint(o),
                zoom: this.AG
            });
            else MEvent.trigger(this, "bookmark", "&act=add&latlon=" + o + "&zm=" + this.AG)
        } else if (this.sS == ts.ty || this.sS == ts.tu || this.sS == ts.l3) {
            if ((new Date().getTime() - this.tD) >= 500) {
                this.tD = new Date().getTime();
                if (this.cQ) {
                    this.cQ = false
                } else {
                    var b = false;
                    var p = (this.l6 == "LayerMask" || this.l6 == "LayerDrawMap" || this.l6 == "LayerDrawSVG" || (c.parentNode && c.parentNode.id == "LayerMap") || (c.id && c.id.indexOf("OverlayBg") >= 0) || (c.getAttribute && c.getAttribute(Ov5Ok)));
                    if (!this.cn && p) {
                        if (this.v3JK7) return;
                        if (iToolTipStyle == 0) hideToolTipMenu();
                        b = true
                    }
                    if (p && !this.U3551 && this.a7Vg) {
                        var q = null;
                        if (q = this.getImgByXY(this.moveX, this.moveY, true)) {
                            var s = false;
                            for (var i = this.bWX.length - 1; i >= 0; i--) {
                                if (typeof this.bWX[i] != "undefined") {
                                    for (var t = this.bWX[i].length - 1; t >= 0; t--) {
                                        if (!this.bWX[i][t].inZoomRange(this.AG)) continue;
                                        var r = this.bWX[i][t].click(q, this.moveX, this.moveY);
                                        b = r.center2map;
                                        if (r.data) {
                                            if (r.firevent && MEvent.contains(this, "layer_click") > 0) {
                                                MEvent.trigger(this, "layer_click", {
                                                    layer: this.bWX[i][t],
                                                    pid: r.data.p,
                                                    area: r.data.l,
                                                    data: r.data.d,
                                                    name: r.data.n,
                                                    rect: r.data.rect
                                                });
                                                b = false
                                            }
                                            s = true;
                                            break
                                        }
                                    }
                                }
                                if (s) break
                            }
                        }
                    }
                    if (this.clickToCenter && b) {
                        if (this.fp != null) this.hideBubble();
                        this.waitPan(this.width / 2 - this.fS, -this.fT + this.height / 2)
                    }
                }
                this.cn = false
            } else {
                this.tD = new Date().getTime()
            }
        } else if (this.sS == ts.tb || this.sS == ts.ta || this.sS == ts.lz || this.sS == ts.ly || this.sS == ts.y2A) {
            if (this.allowDrawingDragMap && !this.Pth) {
                this.Pth = true;
                return false
            }
            if (this.l6 != null && this.l6.indexOf("ctrl") >= 0) return false;
            if (this.sS == ts.y2A) {
                with(this.JX4w) {
                    if (mik2.length && c && c.getAttribute(a0oX) == "marker" && c.getAttribute("oid") == mik2[mik2.length - 1].id) {
                        if (mik2.length > 1) {
                            var n = mik2;
                            var l = Gjx1;
                            yDS03 = 0;
                            if (this.vA != "undefined") this.setMode(this.vA);
                            if (MEvent.contains(this, "roadline") > 0) {
                                MEvent.trigger(this, "roadline", n, l)
                            }
                        }
                    } else {
                        var k = new MPoint(g, h, false);
                        if (mik2.length) this.qYhaL(k, true);
                        this.I36(k);
                        this.E10Jb()
                    }
                }
            } else {
                if (!this.zy) {
                    var u = this.sS == ts.ly || this.sS == ts.ta;
                    var v = new MBrush(this.brush.color, this.brush.stroke, this.brush.style, u, this.brush.bgcolor, this.brush.transparency, this.brush.bgtransparency, this.brush.arrow);
                    if (this.sS == ts.tb) v = this.bl8I.XJS;
                    var w = new MPoint(cq.zn(g, h));
                    this.zy = new MPolyline([w], v, null, null);
                    this.zy.initialize(this);
                    this.sv++;
                    if (this.sS == ts.tb) v = this.bl8I.J6kO;
                    this.tG = new MPolyline([w, w], v, null, null);
                    this.tG.initialize(this);
                    this.sv++;
                    if (this.sS == ts.tb) {
                        this.PyqSc(w, true);
                        nX()
                    }
                } else {
                    var x = new MPoint(cq.zn(g, h));
                    this.zy.pts.push(x);
                    this.zy.update();
                    this.tG.pts[0] = x;
                    this.tG.pts[1] = new MPoint(cq.zn(g, h));
                    this.tG.update();
                    if (this.sS == ts.tb) this.PyqSc(x)
                }
            }
            m = true
        }
        if (a == "LayerDrawMap" && !m) {
            if (this.aG != null && this.aH != null) {
                for (var y = 0; y < this.aG.length; y++) {
                    if (Math.abs(this.aG[y] - this.fS) < HOTSPOT_SIZE && Math.abs(this.aH[y] - this.fT) < HOTSPOT_SIZE) {
                        var z = "";
                        if (apiType == 1) z = this.aE[this.aF[y]].xP;
                        else z = "&hotspot=" + this.aE[this.aF[y]].xP;
                        this.vi = 0;
                        MEvent.trigger(this, "hotspot", z);
                        if (hs) {
                            this.setCenter(this.aE[this.aF[y]].lf, this.aE[this.aF[y]].li);
                            this.setZoomLevel(8)
                        }
                        break
                    }
                }
            }
        }
    }
};
Maplet.prototype.a1 = function (e) {
    var a = (px) ? event.srcElement.id : e.target.id;
    var b = (px) ? event.srcElement : e.target;
    this.l6 = a;
    nX();
    if (this.l6 != null && this.l6.toString().indexOf("ctrl") >= 0) return false;
    if (this.aY()) {
        if (this.sS != ts.tz && this.sS != ts.tA && this.sS != ts.u4XWR) this.k93("default", this.map);
        var c = cq.zn(this.zp(this.fS, this.fT), this.zo(this.fS, this.fT));
        if (apiType == 1) {
            var d = new MPoint(c);
            d.initialize(this);
            MEvent.trigger(this, 'dbclick', e, d)
        } else {
            MEvent.trigger(this, 'dbclick', e, c)
        }
        if (this.sS == ts.tb || this.sS == ts.ta) {
            var f = 0;
            var g = 0;
            var h = this.V9Jd[this.V9Jd.length - 1];
            if (this.zy) {
                var i = this.zy.pts.length;
                if (!px) i = i - 1;
                if (this.sS == ts.tb) {
                    f = h.mik2[h.mik2.length - 1].$1u;
                    this.closeMeasureCurrPath()
                } else {
                    this.zy.pts[i] = this.zy.pts[0];
                    g = this.measArea(this.zy.pts)
                }
                if (this.zy.zX.parentNode == this.lA.div) this.zy.remove(true)
            }
            if (this.tG && this.tG.zX.parentNode == this.lA.div) this.tG.remove(true);
            this.zy = null;
            this.tG = null;
            if (!px) this.refresh();
            if (f.toString() == eval("Number.NaN.toString()")) f = 0;
            if (g.toString() == eval("Number.NaN.toString()")) g = 0;
            if (this.sS == ts.ta) {
                var j = "";
                if (g > 1000000) {
                    j = (en == 0) ? tX("%u603E%uF79D%u1151") + ":" + (parseInt(g / 10000) / 10 / 10) + tX("%u5E77%uC42C%uB725%uE338") : "Total area:" + (parseInt(g / 10000) / 10 / 10) + "km2"
                } else {
                    j = (en == 0) ? tX("%u603E%uF79D%u1151") + ":" + g + tX("%u5E76%uC42C%uE22C") : "Total area:" + g + "m2"
                }
                if (this.vA != "undefined") this.setMode(this.vA);
                sC(this.width / 2 + this.left + this.offsetX, this.height / 2 + this.top + this.offsetY, j);
                if (apiType == 1) MEvent.trigger(this, "measarea", g);
                else MEvent.trigger(this, "measarea", "&act=measarea&area=" + g + tX("%u5E77%uC42C%uB725%uE338"))
            } else {
                if (apiType == 1) MEvent.trigger(this, "measure", f);
                else MEvent.trigger(this, "measure", "&act=measure&dist=" + f + tX("%u516E%uE338"))
            }
            this.setMode('pan')
        } else if (this.sS == ts.lz || this.sS == ts.ly) {
            var k = null;
            if (this.zy) {
                var l = this.zy.pts.length;
                if (!px) l = l - 1;
                this.zy.pts.length = l;
                if (this.zy.zX.parentNode == this.lA.div) this.zy.remove(true);
                if (apiType == 1) {
                    k = this.zy.zn();
                    k.zoom = this.AG
                } else k = ("&act=add&pline=" + this.zy.zn() + "&zm=" + this.AG)
            }
            if (this.tG && this.tG.zX.parentNode == this.lA.div) {
                this.tG.remove(true)
            }
            this.zy = null;
            this.tG = null;
            if (!px) this.refresh();
            var m = (this.sS == ts.lz) ? "drawline" : "drawarea";
            if (this.vA != "undefined") this.setMode(this.vA);
            MEvent.trigger(this, m, k)
        } else if (this.sS == ts.ty || this.sS == ts.tu || this.sS == ts.l3) {
            if (!DISABLE_DBCLICK_ZOOM && this.l6 && (this.l6 == "LayerMask" || this.l6 == "LayerDrawMap" || this.l6 == "LayerDrawSVG" || b.parentNode.id == "LayerMap" || b.id.indexOf("OverlayBg") >= 0 || this.l6.substring(0, "mk_shadow_".length) == "mk_shadow_" || b.getAttribute("traffic") == "yes") || (b.getAttribute(Ov5Ok))) {
                this.vi = 0;
                if (this.getZoomLevel() < MAX_ZOOM_LEVEL) this.zoomTo(this.getZoomLevel() + 1, void(0), this.width / 2 - this.fS, -this.fT + this.height / 2);
                else if (this.getZoomLevel() == MAX_ZOOM_LEVEL) this.panTo(this.width / 2 - this.fS, -this.fT + this.height / 2)
            }
        }
    }
};
Maplet.prototype.a2 = function (e) {
    if (this.sS != ts.ty) this.hideBubble();
    if (this.markerDragAnimation) this.U287(false);
    var a = parseInt((px) ? event.clientX : e.clientX) - this.offsetX;
    var b = parseInt((px) ? event.clientY : e.clientY) - this.offsetY;
    this.l6 = (px) ? event.srcElement.id : e.target.id;
    if (!px && this.panel.style.position != "absolute") {}
    this.downX = a - this.left;
    this.downY = b - this.top;
    this.g3K = new Date().getTime();
    this.YD9_0 = this.pr9P9 = 0;
    this.U3551 = false;
    if (this.l6 != null && this.l6.indexOf("ctrl") >= 0 && this.controlCanvas != null) {
        this.controlCanvas.onmousedown(e);
        return
    }
    if (e.type == "mousedown" && this.sS == ts.ty && (this.l6 == "LayerDrawMap" || this.l6 == "LayerDrawSVG") && MEvent.contains(maplet, "mousedown") > 0) {
        MEvent.trigger(this, 'mousedown', e)
    }
    this.tQ = '';
    if (this.ff && this.nI().qn(this.downX, this.downY)) {
        this.AP.tE(this.downX, this.downY);
        return false
    } else {
        var c = px ? event.srcElement : e.target;
        this.cL = (c.getAttribute(G9kd3) || c.getAttribute("traffic")) ? true : false;
        if (this.aY() && this.cS) {
            if (this.sS == ts.u4XWR && !this.snapshotBox.nDvU) {
                this.snapshotBox.show();
                this.snapshotBox.nDvU = true
            } else {
                this.sD.resize(1, 1);
                this.sD.show()
            }
        } else if (this.sS == ts.ty || this.sS == ts.tu || this.sS == ts.l3) {
            if (px && (this.l6.indexOf("MPolyline") == this.l6.length - 9)) {
                this.k93("move", event.srcElement)
            } else {
                eval(document.body.scrollTop);
                this.k93("move", this.map)
            }
        }
    }
};
Maplet.prototype.a5 = function (e) {
    var a;
    if (this.map.getBoundingClientRect) {
        var r = this.map.getBoundingClientRect();
        a = [r.left, r.top]
    } else {
        a = U411(this.map);
        a[0] = a[0] - j10N();
        a[1] = a[1] - yHC42()
    }
    this.offsetX = a[0] - this.left;
    this.offsetY = a[1] - this.top
};
Maplet.prototype.a4 = function (e) {
    MEvent.trigger(this, 'mouseout', e);
    this.l6 = (px) ? event.srcElement.id : e.target.id;
    if (!px || (px && event.clientX != -1)) {
        var a = parseInt((px) ? event.clientX : e.clientX) - this.offsetX;
        var b = parseInt((px) ? event.clientY : e.clientY) - this.offsetY;
        if (this.cL) {
            this._fq(a - this.left - (px ? 1 : 0) - this.moveX, b - this.top - (px ? 1 : 0) - this.moveY)
        }
        this.moveX = a - this.left - (px ? 1 : 0);
        this.moveY = b - this.top - (px ? 1 : 0);
        this.B824 = this.moveX - this.downX;
        this.DHPs = this.moveY - this.downY
    }
    if (this.B95w && MEvent.contains(this, "layer_mouseout") > 0) {
        MEvent.trigger(this, "layer_mouseout", {
            layer: this.R0933,
            pid: this.B95w.p,
            area: this.B95w.l,
            data: this.B95w.d,
            name: this.B95w.n,
            rect: this.B95w.rect
        });
        this.B95w = null;
        this.R0933 = null
    }
    this.cI = false;
    if ((px && event.clientX == -1) || !this.aY()) {
        if (this.controlCanvas != null) {
            this.controlCanvas.onmouseout(e)
        }
        this.a6((px) ? event : e)
    }
    if (px) document.onmousewheel = new Function("return true");
    clearInterval(this.yr3);
    this.yr3 = undefined
};
Maplet.prototype.a3 = function (e) {
    if (this.cL && this.xc) this.xc.hide();
    this.cI = true;
    if (!this.cL) this.a5(e);
    this.l6 = (px) ? event.srcElement.id : e.target.id;
    var a = parseInt((px) ? event.clientX : e.clientX) - this.offsetX;
    var c = parseInt((px) ? event.clientY : e.clientY) - this.offsetY;
    if (this.cL) {
        this._fq((a) - this.left - this.moveX, (c) - this.top - this.moveY)
    }
    this.moveX = (a) - this.left;
    this.moveY = (c) - this.top;
    if (this.controlCanvas != null) {
        if (this.controlCanvas.onmousemove(e)) {
            return
        }
    }
    if (this.gc != null) {
        for (var f in this.gc) {
            if (this.gc[f].toString().indexOf("MStandardControl") > 0 && this.gc[f].nR && this.gc[f].nR.onmousemove(e)) {
                return
            }
        }
    }
    if (this.sS == ts.tb || this.sS == ts.ta || this.sS == ts.lz || this.sS == ts.ly) {
        var g = "";
        if (this.sS == ts.tb) {
            if (!this.zy) {
                g = (en) ? "Double click to finish" : this.bl8I.vPr2H
            }
            showMouseTipBox(this.moveX + 6, this.moveY - 3, g, this.map)
        } else {
            g = (en) ? "Double click to finish" : tX("%u8BFC%uDFC3%uA5C7%uD0CE%uE632");
            showMouseTipBox(this.moveX, this.moveY, g, this.map)
        }
    } else if (this.sS == ts.tw) {
        if (this.gJ != null && this.gJ != "undefined" && this.gJ != "null" && this.gJ != "") {
            showMouseTipBox(this.moveX - this.gI.width / 2 - 10 - 1, this.moveY - this.gI.height - 2 - 18, "<img src='" + this.gI.src + "'>", this.map)
        } else {
            nX()
        }
    } else {
        nX()
    }
    if (this.ff && this.nI().tF(this.l6, this.moveX, this.moveY)) return;
    if (this.sS == ts.ty && !this.cN) {
        var h = false;
        if (this.aG != null && this.aH != null) {
            for (var j = 0; j < this.aG.length; j++) {
                if (Math.abs(this.aG[j] - this.moveX) < HOTSPOT_SIZE && Math.abs(this.aH[j] - this.moveY) < HOTSPOT_SIZE) {
                    h = true;
                    break
                }
            }
        }
        if (h) {
            this.k93("pointer", this.map)
        } else if (!this.cL) {
            this.k93("default", this.map)
        }
        if (this.a7Vg && (this.l6 == "LayerMask" || this.l6 == "LayerDrawMap" || this.l6 == "LayerDrawSVG" || (e.target.parentNode && e.target.parentNode.id == "LayerMap") || e.target.id.indexOf("OverlayBg") >= 0 || e.target.getAttribute(Ov5Ok))) {
            var k = null;
            if (k = this.getImgByXY(this.moveX, this.moveY, true)) {
                this.loadLayerDataOfPassiveMode(k);
                var b = false;
                for (var i = this.bWX.length - 1; i >= 0; i--) {
                    if (typeof this.bWX[i] != "undefined") {
                        for (var l = this.bWX[i].length - 1; l >= 0; l--) {
                            var m = this.bWX[i][l];
                            if (!m.inZoomRange(this.AG)) continue;
                            var d = m.b$f4(k, this.moveX, this.moveY);
                            if (d) {
                                if (this.B95w && this.B95w != d && MEvent.contains(this, "layer_mouseout") > 0) {
                                    MEvent.trigger(this, "layer_mouseout", {
                                        layer: m,
                                        pid: this.B95w.p,
                                        area: this.B95w.l,
                                        data: this.B95w.d,
                                        name: this.B95w.n,
                                        rect: this.B95w.rect
                                    })
                                }
                                if (this.B95w != d && MEvent.contains(this, "layer_mouseover") > 0) {
                                    this.B95w = d;
                                    this.R0933 = m;
                                    MEvent.trigger(this, "layer_mouseover", {
                                        layer: m,
                                        pid: d.p,
                                        area: d.l,
                                        data: d.d,
                                        name: d.n,
                                        rect: d.rect
                                    })
                                }
                                if (MEvent.contains(this, "layer_mousemove") > 0) MEvent.trigger(this, "layer_mousemove", {
                                    layer: m,
                                    pid: d.p,
                                    area: d.l,
                                    data: d.d,
                                    name: d.n,
                                    rect: d.rect
                                });
                                b = true;
                                break
                            } else if (this.B95w && this.R0933 == m && MEvent.contains(this, "layer_mouseout") > 0) {
                                MEvent.trigger(this, "layer_mouseout", {
                                    layer: m,
                                    pid: this.B95w.p,
                                    area: this.B95w.l,
                                    data: this.B95w.d,
                                    name: this.B95w.n,
                                    rect: this.B95w.rect
                                });
                                this.B95w = null;
                                this.R0933 = null
                            }
                        }
                    }
                    if (b) break
                }
            }
        }
        if (MEvent.contains(maplet, "mousemove") > 0) {
            var n = new MPoint(this.toMapCoordinate(this.moveX, this.moveY));
            MEvent.trigger(this, "mousemove", e, n)
        }
    }
    if (this.cO && this.cL) {
        if (this.v3JK7) return;
        if (!this.m6a3) {
            this.no();
            this.m6a3 = true
        }
        if (px) {
            if (!document.getElementById("_map_marker_speeder")) {
                var o = document.createElement("DIV");
                o.id = "_map_marker_speeder";
                o.style.display = "none";
                document.body.appendChild(o)
            }
            document.getElementById("_map_marker_speeder").innerHTML = ""
        }
        if (iToolTipStyle == 0) hideToolTipMenu();
        if (iToolTipStyle == 0) {
            hideToolTipMenu()
        }
        this.B824 = this.moveX - this.downX;
        this.DHPs = this.moveY - this.downY;
        if (!px && ContentInfo && ContentInfo.isVisible()) {
            ContentInfo.qc2f(true)
        }
        this.sF.moveTo(this.B824, this.DHPs);
        this.cN = true;
        this.cn = true
    } else if (this.cS && this.cL) {
        if (this.aY()) {
            this.cR = true;
            this.lu()
        }
    } else if (this.sS == ts.tb || this.sS == ts.ta || this.sS == ts.lz || this.sS == ts.ly || this.sS == ts.y2A) {
        var p = this.zp(this.moveX, this.moveY);
        var q = this.zo(this.moveX, this.moveY);
        if (this.sS == ts.y2A) {
            if (this.JX4w.mik2.length) {
                with(this.JX4w) {
                    if (s4N.KD_ != p || s4N.X2x9 != q) {
                        s4N.KD_ = p;
                        s4N.X2x9 = q;
                        if (!this.JX4w.A63) {
                            s4N.e4013 = p;
                            s4N.Pu4 = q;
                            this.qYhaL(new MPoint(p, q, false))
                        }
                    }
                }
            }
            if (!this.JX4w.mik2.length) this.E10Jb()
        } else if (this.zy != null) {
            if (this.sS == ts.tb) {
                var r = 0,
                    scrollY = 0,
                    ey101 = this.moveX,
                    H6JDh = this.moveY,
                    bw7 = this.S4c4 * 2,
                    PdCk = this;
                if (ey101 < bw7) r = 50;
                if (ey101 > (this.width - bw7)) r = -50;
                if (H6JDh < bw7) scrollY = 50;
                if (H6JDh > (this.height - bw7)) scrollY = -50;
                if (r != 0 || scrollY != 0) {
                    if (!this.yr3) {
                        this.yr3 = setInterval(function () {
                            PdCk.panTo(r, scrollY)
                        }, 100)
                    }
                } else {
                    if (this.yr3) {
                        clearInterval(this.yr3);
                        this.yr3 = undefined;
                        this.tG.pts[1] = new MPoint(cq.zn(p, q));
                        this.tG.update()
                    }
                }
                var g = "";
                var s = this.V9Jd[this.V9Jd.length - 1];
                var t = s.mik2[s.mik2.length - 1];
                var u = t.$1u;
                var v = t.$1u + this.measDistance([t.point, new MPoint(p, q, false)]);
                var w = this.bl8I.jN0wX.replace(this.bl8I._w5Dw, (v < 1000) ? v + "\u7c73" : parseInt(v / 100) / 10 + "\u516c\u91cc");
                g = (en) ? "Double click to finish" : w;
                nX();
                showMouseTipBox(this.moveX + 6, this.moveY - 3, g, this.map)
            }
            if (!this.yr3) {
                this.tG.pts[1] = new MPoint(cq.zn(p, q));
                this.tG.update()
            }
        }
    } else {
        if (this.l6 == "LayerDrawMap" && iToolTipStyle == 0) {
            hideToolTipMenu()
        }
    }
};
Maplet.prototype.a6 = function (e, a, b, c) {
    var d = 0;
    var f = 0;
    var g = 0;
    var h = 0;
    this.l6 = (px) ? event.srcElement.id : e.target.id;
    this.zQ = this.moveX;
    this.zR = this.moveY;
    this.e63X = new Date().getTime();
    this.cL = false;
    if (this.l6.indexOf("MPolyline") != -1) {
        this.cn = false
    }
    if (e.type == "mouseup") {
        if (this.YD9_0 < -this.ignoreMoveRange || this.YD9_0 > this.ignoreMoveRange || this.pr9P9 < -this.ignoreMoveRange || this.pr9P9 > this.ignoreMoveRange) this.U3551 = true
    } else {
        this.U3551 = true
    }
    if (this.l6 != null) {
        if (this.l6.indexOf("ctrl") >= 0) this.sD.hide();
        else if (e.type == "mouseup" && this.sS == ts.ty && (this.l6 == "LayerDrawMap" || this.l6 == "LayerDrawSVG") && MEvent.contains(maplet, "mouseup") > 0) {
            MEvent.trigger(this, 'mouseup', e)
        }
    }
    if (this.sS == ts.ty || this.sS == ts.tu || this.sS == ts.l3) {
        this.k93("default", this.map)
    }
    if (this.ff && this.nI().tJ(this.zQ, this.zR)) {
        this.setZoomLevel(parseInt(this.AP.getZoomLevel()));
        return
    }
    if ((this.cN || this.cR) && (this.cS || this.cO)) {
        this.cN = false;
        this.cR = false;
        if (this.cO) {
            if (true || this.AG > 0) {
                d = -(this.zQ - this.downX);
                f = (this.zR - this.downY);
                g = this.zp(d + this.width / 2, -f + this.height / 2);
                h = this.zo(d + this.width / 2, -f + this.height / 2);
                this.gA = g;
                this.gx = h
            }
            var i = (px) ? event.srcElement : e.target;
            if (i.getAttribute(G9kd3)) {
                if (i.getAttribute(a0oX) == "polyline") this.b04 = true;
                if (i.getAttribute(a0oX) == "marker") this.gq6 = true
            }
            if (typeof basepoilist != "object" && !this.A0BGB && this.Lb71) this.Lb71 = false;
            this.X7jjM = true;
            this.$2J = new Date().getTime();
            maplet.setZoomLevel(maplet.AG);
            this.X7jjM = false;
            if (apiType == 1) MEvent.trigger(this, "pan", new MPoint(this.toMapCoordinate(this.width / 2, this.height / 2)));
            else MEvent.trigger(this, "pan", "&act=pan&ctr=" + this.toMapCoordinate(this.width / 2, this.height / 2));
            if (this.allowDrawingDragMap && this.U3551 && ((this.sS == ts.tb || this.sS == ts.ta || this.sS == ts.lz || this.sS == ts.ly || this.sS == ts.y2A))) this.Pth = false
        } else {
            var j = 1;
            var k = Math.max(1, Math.abs(this.zQ - this.downX));
            if (this.sS == 1) {
                {
                    d = (this.zQ + this.downX) / 2;
                    f = (this.zR + this.downY) / 2;
                    g = this.zp(d, f);
                    h = this.zo(d, f);
                    this.gA = g;
                    this.gx = h
                }
                if (k < this.imgWidth) {
                    j = Math.min(MAX_ZOOM_LEVEL - this.AG, Math.max(1, parseInt(Math.log(this.imgWidth / k) / Math.log(2))))
                }
                this.setZoomLevel(this.AG + j);
                if (apiType == 1) MEvent.trigger(this, "zoomin", this.AG);
                else MEvent.trigger(this, "zoomin", "&act=zoomin&zm=" + this.AG)
            } else if (this.sS == 2) {
                d = (this.zQ + this.downX) / 2;
                f = (this.zR + this.downY) / 2;
                g = this.zp(d, f);
                h = this.zo(d, f);
                this.gA = g;
                this.gx = h;
                if (k < this.imgWidth) {
                    j = Math.min(this.AG, Math.max(1, parseInt(Math.log(this.imgWidth / k) / Math.log(2))))
                }
                this.setZoomLevel(this.AG - j);
                if (apiType == 1) MEvent.trigger(this, "zoomout", this.AG);
                else MEvent.trigger(this, "zoomout", "&act=zoomout&zm=" + this.AG)
            } else if (this.sS == ts.tv) {
                var l = this.gA + (Math.max(this.zQ, this.downX) - this.width / 2) * this.xg / this.imgWidth;
                var m = this.gx - (Math.min(this.zR, this.downY) - this.height / 2) * this.xf / this.imgHeight;
                cq.li = l;
                cq.lf = m;
                var n = cq.zn();
                var o = this.gA + (Math.min(this.zQ, this.downX) - this.width / 2) * this.xg / this.imgWidth;
                var p = this.gx - (Math.max(this.zR, this.downY) - this.height / 2) * this.xf / this.imgHeight;
                cq.li = o;
                cq.lf = p;
                var q = cq.zn();
                cq.li = o;
                cq.lf = m;
                var r = cq.zn();
                cq.li = l;
                cq.lf = p;
                var s = cq.zn();
                var t = "&act=lookup&max=" + n + "&min=" + q + "&mmx=" + r + "&mxm=" + s;
                if (this.vA != "undefined") this.setMode(this.vA);
                this.cQ = true;
                if (apiType == 1) {
                    MEvent.trigger(this, "lookup", {
                        action: "lookup",
                        max: new MPoint(n),
                        min: new MPoint(q),
                        mmx: new MPoint(r),
                        mxm: new MPoint(s)
                    })
                } else {
                    MEvent.trigger(this, "lookup", t)
                }
            } else if (this.sS == ts.u4XWR) {
                this.snapshotBox.j64();
                this.snapshotBox.nDvU = false
            }
            this.sD.hide();
            this.sD.resize(1, 1);
            this.sD.moveTo(-10, -10)
        }
    }
};
Maplet.prototype.a7 = function (e) {
    if (!MOUSEWHEEL) return;

    function R78() {
        if (this.k01 == null) {
            this.k01 = this.AG;
            R78.apply(this)
        } else if (this.k01 != this.Ai) {
            var a = Math.abs(this.Ai - this.AG) / 10;
            var b = 0.25;
            a = a < b ? b : a;
            if (this.tK < 0) {
                this.k01 -= a;
                if (this.k01 <= this.Ai + 0.05) {
                    this.k01 = this.Ai
                }
            } else {
                this.k01 += a;
                if (this.k01 >= this.Ai - 0.1) {
                    this.k01 = this.Ai
                }
            }
            if (this.k01 != this.Ai) {
                var c = Math.pow(2, this.k01) / Math.pow(2, this.AG);
                var d = (this.width / 2 - this.VDH) * (c - 1);
                var e = (this.height / 2 - this.f29) * (c - 1);
                this.AN(this.k01, d, e)
            }
            if (this.k01 == this.Ai) R78.apply(this);
            else getTimeout(this, R78, 0)
        } else {
            this.k01 = null;
            this.tK = 0;
            this.setZoomLevel(this.Ai);
            this.Ai = 0
        }
    };
    var f = e || window.event;
    if (typeof f == "object" && f) {
        if (typeof f.wheelDelta == "undefined") f.wheelDelta = -f.detail;
        if (typeof f.srcElement == "undefined") f.srcElement = f.target;
        if (f.wheelDelta == 0 || (this.AG == MIN_ZOOM_LEVEL && f.wheelDelta < 0) || (this.AG == MAX_ZOOM_LEVEL && f.wheelDelta > 0)) return;
        if (this.fa) return;
        if (typeof this.tK == "undefined") this.tK = 0;
        if (typeof this.Ai == "undefined") this.Ai = 0;
        var r = dP2(f.srcElement, Mq_mL);
        if (!r || r == "false") {
            PI7(f);
            var i = f.wheelDelta < 0 ? -1 : 1;
            this.tK += i < 0 ? Math.floor(i) : Math.ceil(i);
            if (this.tK == 0) return;
            var g = true;
            if (ContentInfo && ContentInfo.isVisible()) {
                var h = this.toScreenCoordinate(avBubble.pD0);
                if (_isInsideRect({
                    x: h[0],
                    y: h[1]
                }, {
                    min: {
                        x: 0,
                        y: 0
                    },
                    max: {
                        x: this.width,
                        y: this.height
                    }
                })) {
                    g = false
                }
            }
            if (g) {
                this.c97 = "wheel";
                if (typeof this.l6 == "undefined") this.a3(f);
                this.VDH = this.moveX;
                this.f29 = this.moveY;
                this.I9h5g = this.toMapCoordinate(this.VDH, this.f29);
                this.fkl2(f.wheelDelta)
            }
            this.Ai = parseInt(this.AG + this.tK);
            if (this.Ai < MIN_ZOOM_LEVEL) this.Ai = MIN_ZOOM_LEVEL;
            if (this.Ai > MAX_ZOOM_LEVEL) this.Ai = MAX_ZOOM_LEVEL;
            if (ZOOM_TRANSITION && this.k01 == null) {
                if (ContentInfo && ContentInfo.isVisible()) {
                    this.k01 = this.Ai
                }
                R78.apply(this)
            }
        }
    }
};
Maplet.prototype.yr3 = undefined;
var px = false;
var _sqi = false;
var $42 = false;
var SF6 = false;
var BLCi = false;
var jn6 = false;
var M$PE = false;
var d04 = false;
var s;
var RW1r = navigator.userAgent.toLowerCase();
if (s = RW1r.match(new RegExp("msie ([\\d.]+)"))) {
    px = true;
    if ($9tU(s[1], 0) == 6) _sqi = true;
    else if ($9tU(s[1], 0) == 7) $42 = true;
    else if ($9tU(s[1], 0) == 8) SF6 = true
} else if (s = RW1r.match(new RegExp("firefox\/([\\d.]+)"))) {
    BLCi = true
} else if (s = RW1r.match(new RegExp("chrome\/([\\d.]+)"))) {
    jn6 = true
} else if (s = RW1r.match(new RegExp("opera.([\\d.]+)"))) {
    d04 = true
} else if (s = RW1r.match(new RegExp("version\/([\\d.]+).*safari"))) {
    M$PE = true
}
var jF74S = true;
if (px) jF74S = document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Shape", "1.0") || document.implementation.hasFeature("org.w3c.svg", "1.0");
var f$uP7 = document.compatMode == "CSS1Compat";
var ut = document.qS ? 1 : 0;
var lm = (px) ? "document.all." : "document.";
var yj = (px) ? ".style" : "";
if (px) {
    document.namespaces.add('v', 'urn:schemas-microsoft-com:vml');
    document.write("<style>v\\:shape,v\\:stroke,v\\:fill,v\\:roundrect,v\\:oval,v\\:image {behavior:url(#default#VML)}</style>")
}
document.write("<style type='text/css'> ");
document.write(".ptlabel {  ");
document.write("  text-decoration: none;");
document.write("  cursor: pointer;");
document.write("  font-family: Arial, Helvetica, sans-serif; ");
document.write("  font-size: 8pt; ");
document.write("}  ");
document.write("");
document.write(".tooltiptitle {");
document.write("  color: #CC5522; ");
document.write("  text-decoration: none;");
document.write("  cursor: pointer;");
document.write("  font-family: Arial, Helvetica, sans-serif; ");
document.write("  font-weight: bold; ");
document.write("  font-size: 10pt;");
document.write("}  ");
document.write("");
document.write(".tooltipcontent { ");
document.write("  color: #000000; ");
document.write("  text-decoration: none;");
document.write("  cursor: pointer;");
document.write("  font-family: Arial, Helvetica, sans-serif; ");
document.write("  font-size: 8pt; ");
document.write("}  ");
document.write("");
document.write(".hotspotlabel {");
document.write("  position: absolute;");
document.write("  color: #000; ");
document.write("  text-decoration: none;");
document.write("  cursor: pointer;");
document.write("  font-family: Arial, Helvetica, sans-serif; ");
document.write("  font-size: 10pt;");
document.write("}  ");
document.write("");
document.write(".editableimg { ");
document.write("  position: absolute;");
document.write("  overflow: hidden;  ");
document.write("  cursor: pointer;");
document.write("  border: 1px solid #fff;  ");
document.write("  z-index: 1000;  ");
if (px) {
    document.write("  filter: alpha( opacity = 60 );")
} else {
    document.write("  opacity: 0.6;  ")
}
document.write("  font-size: 0px; ");
document.write("  display: block; ");
document.write("}  ");
document.write("");
document.write(".buffering {");
document.write("  position: absolute;");
document.write("  height: 16px;");
document.write("  z-index: 24; ");
if (px) {
    document.write("  filter: alpha( opacity = 60 );")
} else {
    document.write("  opacity: 0.6;  ")
}
document.write("  font-size: 12px;");
document.write("  font-weight: bold; ");
document.write("  background-color: #fff;  ");
document.write("  color: #000; ");
document.write("  border: 0px solid #000;  ");
document.write("  text-align: center;");
document.write("  padding-top: 0px;  ");
document.write("  display: block; ");
document.write("}  ");
document.write("");
document.write(".tiplabel { ");
document.write("  position: absolute;");
document.write("  height: 12px;");
document.write("  z-index: 0; white-space: nowrap; ");
document.write("  display: block; ");
document.write("  background-color: #FFFFCC;  ");
document.write("  border: 1px solid #f00;  ");
document.write("  color: #f00; ");
document.write("  font-size: 12px;");
document.write("  font-weight: bold; ");
document.write("}  ");
document.write("");
document.write("#ToolTip {  ");
document.write("  position: absolute;");
if (px) {
    document.write("  filter: alpha( opacity = 80 );")
} else {
    document.write("  opacity: 0.8;  ")
}
document.write("  width: 100px;");
document.write("  top: 0px; ");
document.write("  left: 0px;");
document.write("  z-index: 24; ");
document.write("  visibility: hidden;");
document.write("}  ");
document.write("");
document.write("#loading {  ");
document.write("  position: absolute;");
document.write("  z-index: 24; ");
if (px) {
    document.write("  filter: alpha( opacity = 60 );")
} else {
    document.write("  opacity: 0.6;  ")
}
document.write("  font-size: 13px;");
document.write("  font-weight: bold; ");
document.write("  background-color: #fff;  ");
document.write("  color: #000; ");
document.write("  border: 0px solid #000;  ");
document.write("  text-align: center;");
document.write("  padding-top: 4px;  ");
document.write("  display: block; ");
document.write("}  ");
document.write("");
document.write("#mbglabel { ");
document.write("  position: absolute;");
document.write("  z-index: 0;  ");
document.write("  white-space: nowrap;  ");
document.write("  display: block; ");
document.write("  visibility: visible;  ");
document.write("}  ");
document.write("");
document.write("#mfglabel { ");
document.write("  position: absolute;");
document.write("  z-index: 0;  ");
document.write("  white-space: nowrap;  ");
document.write("  display: block; ");
document.write("  visibility: visible;  ");
document.write("  background-color: #FFFFCC;  ");
document.write("}  ");
document.write("");
document.write("#stylelabel {  ");
document.write("  position: absolute;");
document.write("  z-index: 24; ");
if (px) {
    document.write("  filter: alpha( opacity = 80 );")
} else {
    document.write("  opacity: 0.8;  ")
}
document.write("  font-size: 13px;");
document.write("  font-weight: bold; ");
document.write("  background-color: #fff;  ");
document.write("  color: #000; ");
document.write("  border: 1px solid #000;  ");
document.write("  text-align: center;");
document.write("  padding-top: 4px;  ");
document.write("  display: block; ");
document.write("}  ");
document.write("");
document.write("#mapbar-overview-viewport {");
document.write("  position: absolute;");
document.write("  width: 0px;  ");
document.write("  top: 0px; ");
document.write("  left: 0px;");
document.write("  height: 0px; ");
document.write("  z-index: 10; ");
document.write("  font-size: 0px; ");
if (px) {
    document.write("  filter: alpha( opacity = 50 );")
} else {
    document.write("  opacity: 0.5;  ")
}
document.write("  background-color: white;  ");
document.write("  border: 2px solid white;  ");
document.write("  visibility: visible;  ");
document.write("}  ");
document.write("");
document.write("#mapbar-overview-viewframe {  ");
document.write("  position: absolute;");
document.write("  width: 0px;  ");
document.write("  top: 0px; ");
document.write("  left: 0px;");
document.write("  height: 0px; ");
document.write("  z-index: 11; ");
document.write("  font-size: 0px; ");
document.write("  border: 2px solid #D50F1E;  ");
document.write("  visibility: visible;  ");
document.write("}  ");
document.write("");
document.write("#mapbar-overview-viewpad_ctrl { ");
document.write("  position: absolute;");
document.write("  width: 0px;  ");
document.write("  top: 0px; ");
document.write("  left: 0px;");
document.write("  height: 0px; ");
document.write("  z-index: 12; ");
document.write("  font-size: 0px; ");
document.write("  border: 2px solid #D50F1E;  ");
document.write("  visibility: visible;  ");
document.write("}  ");
document.write("");
document.write("#mapbar-bordertop {  ");
document.write("  position: absolute;");
document.write("  z-index: 2;  ");
document.write("  font-size: 0px; ");
document.write("  border-top: 1px solid #949694; ");
document.write("  visibility: visible;  ");
document.write("}  ");
document.write("");
document.write("#mapbar-borderbtm {  ");
document.write("  position: absolute;");
document.write("  z-index: 2;  ");
document.write("  font-size: 0px; ");
document.write("  border-bottom: 1px solid #949694; ");
document.write("  visibility: visible;  ");
document.write("}  ");
document.write("");
document.write("#mapbar-borderlft {  ");
document.write("  position: absolute;");
document.write("  z-index: 2;  ");
document.write("  font-size: 0px; ");
document.write("  border-left: 1px solid #949694;");
document.write("  visibility: visible;  ");
document.write("}  ");
document.write("");
document.write("#mapbar-borderrgt {  ");
document.write("  position: absolute;");
document.write("  z-index: 2;  ");
document.write("  font-size: 0px; ");
document.write("  border-right: 1px solid #949694;  ");
document.write("  visibility: visible;  ");
document.write("}  ");
document.write("");
document.write(".contextmenuitem {");
document.write("  color: #0E347F; ");
document.write("  text-decoration: none;");
document.write("  cursor: pointer;");
document.write("  font-family: Arial, Helvetica, sans-serif; ");
document.write("  font-size: 9pt; ");
document.write("  padding-right: 6px; ");
document.write("  width: 100%; ");
document.write("}  ");
document.write("");
document.write(".contextmenutable {  ");
document.write("  text-decoration: none;");
document.write("  cursor: pointer;");
document.write("}  ");
document.write("");
document.write(".mapcontextmenu { ");
document.write("  position: absolute;");
document.write("  background-color: #FFFFFF; ");
document.write("  padding: 1px; ");
document.write("  border: 1px outset #cccccc; ");
document.write("  top: 0px; ");
document.write("  left: 0px;");
document.write("  z-index: 24; ");
document.write("  visibility: hidden;");
document.write("}  ");
document.write("");
document.write(".mapCirEdging .borT, ");
document.write("  .mapCirEdging .borB { ");
document.write("  height: 1px; ");
document.write("  margin: 0 1px;  ");
document.write("  border-bottom: 1px solid #8F8F8F; ");
document.write("  line-height: 1px;  ");
document.write("  font-size: 1px; ");
document.write("}  ");
document.write("");
document.write(".mapCirEdging .borB {");
document.write("  border: 0;");
document.write("  border-top: 1px solid #8F8F8F; ");
document.write("}  ");
document.write("");
document.write(".mapCirEdging .borT2, .mapCirEdging .borB2 { ");
document.write("  height: 1px; ");
document.write("  border: 1px solid #BCBCBC;  ");
document.write("  border-top: 0;  ");
document.write("  border-bottom: 0;  ");
document.write("  line-height: 1px;  ");
document.write("  font-size: 1px; ");
document.write("}  ");
document.write("");
document.write(".mapCirEdging .MPBox2 { ");
document.write("  height: auto;");
document.write("  border: 1px solid #8F8F8F;  ");
document.write("  border-top: 0;  ");
document.write("  border-bottom: 0;  ");
document.write("  background: #fff;  ");
document.write("}  ");
document.write("");
document.write(".mapCirEdging .MPbox {  ");
document.write("  margin: 3px; ");
document.write("  font-size: 12px;");
document.write("  text-align: left;  ");
document.write("}  ");
document.write(".snapshotTextBtn {  ");
document.write("  padding-top: 3px; ");
document.write("  padding-bottom: 3px; ");
document.write("  padding-left: 4px; ");
document.write("  padding-right: 4px; ");
document.write("  margin-left: 2px; ");
document.write("  font-family: \u5b8b\u4f53; ");
document.write("  font-size: 13px;");
document.write("  text-align: center;  ");
document.write("  font-weight: normal;  ");
document.write("  letter-spacing: 1px;  ");
document.write("  background: #0E347F;  ");
document.write("  color: white;  ");
document.write("}  ");
document.write(".roadlineTip {  ");
document.write("  padding: 2px; ");
document.write("  font-family: \u5b8b\u4f53; ");
document.write("  font-size: 13px;");
document.write("  color: #666666;");
document.write("  border: 1px solid #666666;  ");
document.write("  background: none repeat scroll 0 0 #FFFFFF;  ");
document.write("  white-space: nowrap;  ");
document.write("}  ");
document.write(".roadlineTip_distance {  ");
document.write("  color: black;");
document.write("  white-space: nowrap;  ");
document.write("}  ");
document.write(".pointBox{position:absolute;z-index:100}");
document.write(".pointBox .PMain{padding:0 10px;border: 2px solid rgb(14, 52, 127); background:#fff }");
document.write(".pointBox .pointer{overflow:hidden;width:15px;height:14px;margin:-4px 0 0;background:url(images/pointBg.png) no-repeat;_background:none}");
document.write(".pointBox .pointer img{display:none;_display:block;width:15px;height:14px;_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=images/pointBg.png,sizingMethod=image,sizingMethod=scale)}");
document.write(".pointBox .BoxBg{position:absolute;z-index:-1;width:100%;margin:auto 0 0 8px;padding-top:5px;background:#666;filter:alpha(opacity=60);opacity:0.6}");
document.write(".rightThis .pointer{width:auto;margin:-4px 0 0;background-position:100% -16px!important;_background:none}");
document.write(".rightThis .pointer img{_position:absolute;_right:0;_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=images/pointBgR.png,sizingMethod=image,sizingMethod=scale)}");
document.write(".rightThis .BoxBg{margin:auto 15px 0 0;left:-5px}");
document.write("</style>");
if (typeof xl == "undefined") var xl = strImgsvrUrl;
if (typeof ds == "undefined") var ds = "mapbar";
if (typeof en == "undefined") var en = 0;
if (typeof rs == "undefined") var rs = 0;
if (typeof apiType == "undefined") var apiType = 0;
if (typeof hs == "undefined") var hs = false;
if (typeof MOUSEWHEEL == "undefined") var MOUSEWHEEL = true;
if (typeof kp == "undefined") var kp = true;
if (typeof bDefaultControlOn == "undefined") var bDefaultControlOn = false;
if (typeof hbo == "undefined") var hbo = false;
if (typeof otp == "undefined") var otp = false;
if (typeof ZOOM_TRANSITION == "undefined") var ZOOM_TRANSITION = true;
if (typeof bsc == "undefined") var bsc = true;
if (typeof __mapbar_magic_id == "undefined") var __mapbar_magic_id = "";
if (typeof REFRESH_MK_INDEX != "boolean") var REFRESH_MK_INDEX = true;
if (typeof SNAPSHOT_SERVER != "string") var SNAPSHOT_SERVER = "http://staticmap.mapbar.com/staticmap/";
if (typeof SNAPSHOT_MAPIMG_URI_PREFIX != "string") var SNAPSHOT_MAPIMG_URI_PREFIX = "http://img[1-9]?.mapbar.com/maplite/";
if (typeof SNAPSHOT_MARKER_URI_PREFIX != "string") var SNAPSHOT_MARKER_URI_PREFIX = "http://img[1-9]?.mapbar.com/maplite/mapbank/ditu/";
var SNAPSHOT_OPTIONS = {
    mode: "fullscreen",
    format: "png",
    depth: 0,
    processMode: "event"
};
if (typeof ALLOW_MV != "boolean") var ALLOW_MV = true;
if (typeof G9kd3 != "string") var G9kd3 = "_dragmap";
if (typeof a0oX != "string") var a0oX = "_overlay";
if (typeof Mq_mL != "string") var Mq_mL = "_disable_mw";
if (typeof Ov5Ok != "string") var Ov5Ok = "_mlayer";
var c75 = 0;
var ac = null;
var ad = true;
if (typeof bp == "undefined") var bp = true;
if (typeof oo == "undefined") var oo = true;
if (typeof bmc == "undefined") var bmc = false;
if (typeof OVER_LOCATION != "object" || OVER_LOCATION) var OVER_LOCATION = null;
if (typeof STD_BUBBLE_WIDTH == "undefined") var STD_BUBBLE_WIDTH = 217;
if (typeof MIN_BUBBLE_HEIGHT == "undefined") var MIN_BUBBLE_HEIGHT = 120;
if (typeof OVER_WIN_WIDTH != "number") {
    OVER_WIN_WIDTH = 150
} else {
    if (OVER_WIN_WIDTH < 100) OVER_WIN_WIDTH = 100;
    else if (OVER_WIN_WIDTH > 210) OVER_WIN_WIDTH = 210
}
if (typeof OVER_WIN_HEIGHT != "number") {
    OVER_WIN_HEIGHT = 120
} else {
    if (OVER_WIN_HEIGHT < 100) OVER_WIN_HEIGHT = 100;
    else if (OVER_WIN_HEIGHT > 210) OVER_WIN_HEIGHT = 210
}
if (typeof MAX_BUBBLE_HEIGHT == "undefined") var MAX_BUBBLE_HEIGHT = 380;
var sX = strImgsvrUrl + "images/mask.gif";
var ul = strImgsvrUrl + "images/node.gif";
var lV = strImgsvrUrl + "images/wmk.gif";
if (typeof LPN_HOVERING_TIME == "undefined") var LPN_HOVERING_TIME = 100;
if (typeof HOTSPOT_SIZE == "undefined") var HOTSPOT_SIZE = 8;
if (typeof DISABLE_DBCLICK_ZOOM == "undefined") var DISABLE_DBCLICK_ZOOM = false;
var R96$k = null;
if (typeof gQ == "undefined") gQ = 0;
var xz = '';
var AB = "";
document.write('<img id="sendmapload" style="display:none;visibility:hidden;" />');
document.writeln('<div id="myalert" style="position:absolute;z-index:100000;filter:alpha(opacity=85);opacity:0.85;display:none;background-color:white;padding:1px;"></div>');
if (typeof bArrow == "undefined") {
    var bArrow = 0
}
var sB = new Image();
var initialize = 0;
var xN = (en == 0) ? new Array(tX('%u5415%uDD90%uE7F2%uD86E'), tX('%u5415%uA728%uB18A%uD86E'), tX('%u5415%uA22D%uAC8F%uD86E'), tX('%u5415%uA768%uB1CA%uD86E'), tX('%u6D4F%uFF1A%u1FAC%u0798'), tX('%u70BF%uC2B4%uE1D6%u1827%u0775%uE467'), tX('%u6540%uBE65'), tX('%u7F2B%uDB38'), tX('%u62D1%uB571%uC179%uC628%uE732%u1827%u0775%uE467')) : new Array('Go left', 'Go up', 'Go right', 'Go down', 'Measure distance', 'Click to zoom', 'Zoom In', 'Zoom Out', 'Drag to zoom');
var lt = (en == 0) ? "\u62D6\u62FD\u6B64\u70B9" : "drag to move this point";
var pe = new Array();
var pa = new Array();
var pF = 2;
var sI = new Array('W', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14');
var sj = new Array(90, 40, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01, 0.005, 0.002, 0.001);
var qP = new Array(90 * 0.8, 40 * 0.8, 20 * 0.8, 10 * 0.8, 5 * 0.8, 2 * 0.8, 0.8, 0.5 * 0.8, 0.2 * 0.8, 0.1 * 0.8, 0.05 * 0.8, 0.02 * 0.8, 0.01 * 0.8, 0.005 * 0.8, 0.002 * 0.8, 0.001 * 0.8);
var nM = new Array(10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 50, 50, 50, 50, 50, 50);
var w8 = new Array(0, 0, 0, 0, 0, 0, 0, 0, 75, 0, 0, -150, 0, 0, 0, 0);
if (typeof DEFAULT_MAX_ZOOM_LEVEL != "number") var DEFAULT_MAX_ZOOM_LEVEL = 14;
if (typeof DEFAULT_MIN_ZOOM_LEVEL != "number") var DEFAULT_MIN_ZOOM_LEVEL = 0;
var MAX_ZOOM_LEVEL = DEFAULT_MAX_ZOOM_LEVEL;
var MIN_ZOOM_LEVEL = DEFAULT_MIN_ZOOM_LEVEL;
var wp = 100000;
var sw = 105;
var sx = 35;
var sz = new Array(-360, 360);
var sy = new Array(-90, 90);
var H2h = null;
var uU = 8;
var uS = 15;
var uT = strImgsvrUrl + 'images/overclose.gif';
var uV = strImgsvrUrl + 'images/overopen.gif';
if (!otp) {
    uT = strImgsvrUrl + 'images/overclose2.gif';
    uV = strImgsvrUrl + 'images/overopen2.gif'
}
var uW = [0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var bpp = [xl + "mapbank/base/", 13, 14];
var vs = strMapsvrUrl + "images/done.gif";
var vt = strMapsvrUrl + "images/edit.gif";
var v3 = strMapsvrUrl + "images/stretch.gif";
var at = 0;
var as = 1;
var au = 2;
var av = 0;
var ar = 2;
var s9 = 1001;
if (typeof TRAFFIC_REFRESH_INTERVAL != "number") var TRAFFIC_REFRESH_INTERVAL = 5 * 60;
if (typeof TRAFFIC_MIN_LEVEL != "number") var TRAFFIC_MIN_LEVEL = 8;
if (typeof TRAFFIC_MAX_LEVEL != "number") var TRAFFIC_MAX_LEVEL = MAX_ZOOM_LEVEL;
if (typeof $$507 != "number") var $$507 = 9;
if (typeof C5qiy != "number") var C5qiy = MAX_ZOOM_LEVEL;
if (typeof oy411 != "boolean") var oy411 = false;
if (typeof GOLDPOI_TXTRQT_RANDOM != "boolean") var GOLDPOI_TXTRQT_RANDOM = true;