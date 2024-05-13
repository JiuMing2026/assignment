var spinning = false;
var omniOn = true;
var spotOn = true;
var directOn = true;

var bottleTexture1 = "../sceneassets/images/bottle_texture.jpg";
var canTexture1 = "../sceneassets/images/can_texture.jpg";
var cupTexture1 = "../sceneassets/images/cup_texture.jpg";
var bottleTexture2 = "../sceneassets/images/cokeZero_texture.jpg";
var canTexture2 = "../sceneassets/images/fantaZeroSugar_texture.jpg";
var cupTexture2 = "../sceneassets/images/spriteZeroSugar_texture.jpg";

var can_key = "0 0.0299999993294477 0.0599999986588955 0.0900000035762787 0.119999997317791 0.150000005960464 0.180000007152557 0.209999993443489 0.239999994635582 0.270000010728836 0.300000011920929 0.330000013113022 0.360000014305115 0.389999985694885 0.419999986886978 0.449999988079071 0.479999989271164 0.509999990463257 0.540000021457672 0.569999992847443 0.600000023841858 0.629999995231628 0.660000026226044 0.689999997615814 0.720000028610229 0.75 0.779999971389771 0.810000002384186 0.839999973773956 0.870000004768372 0.899999976158142 0.930000007152557 0.959999978542328 0.990000009536743 1";
var can_keyValue = "0.577400028705597 -0.577400028705597 0.577400028705597 -4.18900012969971 0.570900022983551 -0.580600023269653 0.580600023269653 -4.17899990081787 0.551999986171722 -0.589600026607513 0.589600026607513 -4.15000009536743 0.521499991416931 -0.603399991989136 0.603399991989136 -4.10300016403198 0.480300009250641 -0.620199978351593 0.620199978351593 -4.03700017929077 0.429500013589859 -0.638599991798401 0.638599991798401 -3.95300006866455 0.370200008153915 -0.656899988651276 0.656899988651276 -3.8510000705719 0.303600013256073 -0.673699975013733 0.673699975013733 -3.73099994659424 0.230700001120567 -0.688000023365021 0.688000023365021 -3.59500002861023 0.152400001883507 -0.698800027370453 0.698800027370453 -3.44400000572205 0.0693700015544891 -0.705399990081787 0.705399990081787 -3.27999997138977 -0.0180500000715256 -0.707000017166138 0.707000017166138 -3.10500001907349 -0.10980000346899 -0.70279997587204 0.70279997587204 -2.92300009727478 -0.205799996852875 -0.691999971866608 0.691999971866608 -2.73600006103516 -0.306400001049042 -0.673099994659424 0.673099994659424 -2.54699993133545 -0.411199986934662 -0.644599974155426 0.644599974155426 -2.36100006103516 -0.519599974155426 -0.604099988937378 0.604099988937378 -2.18300008773804 -0.629700005054474 -0.549300014972687 0.549300014972687 -2.01799988746643 -0.737600028514862 -0.47749999165535 0.47749999165535 -1.87100005149841 -0.836899995803833 -0.386999994516373 0.386999994516373 -1.74800002574921 -0.919200003147125 -0.278400003910065 0.278400003910065 -1.65499997138977 -0.975399971008301 -0.155900001525879 0.155900001525879 -1.59599995613098 -0.999300003051758 -0.0273599997162819 0.0273599997162819 -1.57200002670288 -0.990400016307831 0.0976099967956543 -0.0976099967956543 -1.58000004291534 -0.954500019550323 0.210800006985664 -0.210800006985664 -1.61699998378754 -0.900600016117096 0.307300001382828 -0.307300001382828 -1.67499995231628 -0.837800025939941 0.386099994182587 -0.386099994182587 -1.74699997901917 -0.773500025272369 0.448100000619888 -0.448100000619888 -1.82500004768372 -0.71289998292923 0.495900005102158 -0.495900005102158 -1.90299999713898 -0.659200012683868 0.531700015068054 -0.531700015068054 -1.97599995136261 -0.614600002765656 0.557799994945526 -0.557799994945526 -2.03900003433228 -0.580399990081787 0.575800001621246 -0.575800001621246 -2.08999991416931 0.557500004768372 -0.587000012397766 0.587000012397766 -4.15899991989136 0.546800017356873 -0.592000007629395 0.592000007629395 -4.14200019836426 0.546000003814697 -0.592400014400482 0.592400014400482 -4.14099979400635";
var can_key2 = "0 0.0299999993294477 0.0599999986588955 0.0900000035762787 0.119999997317791 0.150000005960464 0.180000007152557 0.209999993443489 0.239999994635582 0.270000010728836 0.300000011920929 0.330000013113022 0.360000014305115 0.389999985694885 0.419999986886978 0.449999988079071 0.479999989271164 0.509999990463257 0.540000021457672 0.569999992847443 0.600000023841858 0.629999995231628 0.660000026226044 0.689999997615814 0.720000028610229 0.75 0.779999971389771 0.810000002384186 0.839999973773956 0.870000004768372 0.899999976158142 0.930000007152557 0.959999978542328 0.990000009536743 1";
var can_keyValue2 = "0.577400028705597 -0.577400028705597 0.577400028705597 -4.18900012969971 0.574000000953674 -0.574199974536896 0.58380001783371 -4.17000007629395 0.564100027084351 -0.564599990844727 0.60259997844696 -4.11399984359741 0.546899974346161 -0.548099994659424 0.632799983024597 -4.02600002288818 0.521600008010864 -0.523599982261658 0.673600018024445 -3.91199994087219 0.486600011587143 -0.489600002765656 0.723599970340729 -3.77800011634827 0.439900010824203 -0.444000005722046 0.780600011348724 -3.63199996948242 0.379200011491776 -0.384499996900558 0.841600000858307 -3.48499989509583 0.302300006151199 -0.308999985456467 0.901700019836426 -3.34800004959106 0.208000004291534 -0.216299995779991 0.95389997959137 -3.23600006103516 0.097290001809597 -0.107199996709824 0.989499986171722 -3.16300010681152 -0.0255200006067753 0.0137799996882677 0.999599993228912 -3.14299988746643 -0.152799993753433 0.139200001955032 0.978399991989136 -3.18499994277954 -0.275299996137619 0.259700000286102 0.925599992275238 -3.2960000038147 -0.385199993848801 0.367399990558624 0.846499979496002 -3.47300004959106 -0.478100001811981 0.45770001411438 0.749599993228912 -3.71000003814697 -0.553099989891052 0.529299974441528 0.643299996852875 -3.99600005149841 0.611899971961975 -0.583400011062622 -0.534099996089935 -1.96200001239777 0.657400012016296 -0.621599972248077 -0.425900012254715 -1.61099994182587 0.693199992179871 -0.645399987697601 -0.321000009775162 -1.24300003051758 0.724399983882904 -0.653299987316132 -0.220100000500679 -0.867900013923645 0.763800024986267 -0.633599996566772 -0.1233000010252 -0.493999987840652 0.912400007247925 -0.408199995756149 -0.029789999127388 -0.133900001645088 -0.536300003528595 0.842199981212616 -0.0557800009846687 -0.232899993658066 -0.629800021648407 0.763999998569489 -0.140300005674362 -0.5625 -0.642099976539612 0.734399974346161 -0.219999998807907 -0.869700014591217 -0.637600004673004 0.711899995803833 -0.29449999332428 -1.14900004863739 -0.625599980354309 0.690500020980835 -0.363099992275238 -1.39600002765656 -0.60970002412796 0.669300019741058 -0.424699991941452 -1.60899996757507 -0.592199981212616 0.648599982261658 -0.478199988603592 -1.78600001335144 -0.575100004673004 0.629599988460541 -0.52240002155304 -1.92799997329712 -0.560199975967407 0.613699972629547 -0.556400001049042 -2.03299999237061 0.549399971961975 -0.602299988269806 0.579100012779236 -4.18100023269653 0.544099986553192 -0.596800029277802 0.589699983596802 -4.15000009536743 0.543799996376038 -0.596400022506714 0.590499997138977 -4.14799976348877";
var bottle_key = "0 0.0299999993294477 0.0599999986588955 0.0900000035762787 0.119999997317791 0.150000005960464 0.180000007152557 0.209999993443489 0.239999994635582 0.270000010728836 0.300000011920929 0.330000013113022 0.360000014305115 0.389999985694885 0.419999986886978 0.449999988079071 0.479999989271164 0.509999990463257 0.540000021457672 0.569999992847443 0.600000023841858 0.629999995231628 0.660000026226044 0.689999997615814 0.720000028610229 0.75 0.779999971389771 0.810000002384186 0.839999973773956 0.870000004768372 0.899999976158142 0.930000007152557 0.959999978542328 0.990000009536743 1";
var bottle_keyValue = "1 0 0 0 0 1 0 -0.0166299995034933 0 1 0 -0.065140001475811 0 1 0 -0.143500000238419 0 1 0 -0.249699994921684 0 1 0 -0.38170000910759 0 1 0 -0.537400007247925 0 1 0 -0.714900016784668 0 1 0 -0.912000000476837 0 1 0 -1.12699997425079 0 1 0 -1.35699999332428 0 1 0 -1.60099995136261 0 1 0 -1.85699999332428 0 -1 0 -4.16200017929077 0 -1 0 -3.88899993896484 0 -1 0 -3.61100006103516 0 -1 0 -3.32999992370605 0 -1 0 -3.04699993133545 0 -1 0 -2.76500010490417 0 -1 0 -2.48600006103516 0 -1 0 -2.21199989318848 0 -1 0 -1.94400000572205 0 -1 0 -1.68499994277954 0 -1 0 -1.43700003623962 0 -1 0 -1.20200002193451 0 -1 0 -0.981700003147125 0 -1 0 -0.778500020503998 0 -1 0 -0.594299972057343 0 -1 0 -0.431100010871887 0 -1 0 -0.290899991989136 0 -1 0 -0.175899997353554 0 -1 0 -0.0880500003695488 0 -1 0 -0.0293499995023012 0 -1 0 -0.00187200005166233 1 0 0 0";
var bottle_key2 = "0 0.0299999993294477 0.0599999986588955 0.0900000035762787 0.119999997317791 0.150000005960464 0.180000007152557 0.209999993443489 0.239999994635582 0.270000010728836 0.300000011920929 0.330000013113022 0.360000014305115 0.389999985694885 0.419999986886978 0.449999988079071 0.479999989271164 0.509999990463257 0.540000021457672 0.569999992847443 0.600000023841858 0.629999995231628 0.660000026226044 0.689999997615814 0.720000028610229 0.75 0.779999971389771 0.810000002384186 0.839999973773956 0.870000004768372 0.899999976158142 0.930000007152557 0.959999978542328 0.990000009536743 1";
var bottle_keyValue2 = "1 0 0 0 -0.0059179998934269 0.702199995517731 0.712000012397766 -0.0236799996346235 -0.0231899991631508 0.702000021934509 0.7117999792099 -0.0927599966526031 -0.0511099994182587 0.701300024986267 0.711099982261658 -0.204300001263618 -0.0890100002288818 0.699400007724762 0.709200024604797 -0.355100005865097 -0.13629999756813 0.695500016212463 0.705399990081787 -0.541899979114532 -0.192499995231628 0.688799977302551 0.698899984359741 -0.760599970817566 -0.257099986076355 0.678200006484985 0.688499987125397 -1.00699996948242 -0.330000013113022 0.662199974060059 0.672800004482269 -1.27499997615814 -0.410800009965897 0.639100015163422 0.650200009346008 -1.55900001525879 -0.49889999628067 0.606899976730347 0.61870002746582 -1.85099995136261 -0.593299984931946 0.562900006771088 0.575500011444092 -2.14199995994568 -0.691600024700165 0.503799974918365 0.517599999904633 -2.42000007629395 -0.789399981498718 0.426400005817413 0.441599994897842 -2.67300009727478 -0.879400014877319 0.32820001244545 0.344900012016296 -2.88599991798401 -0.951099991798401 0.209000006318092 0.227500006556511 -3.04200005531311 -0.992900013923645 0.0732999965548515 0.093809999525547 -3.12800002098084 -0.996500015258789 -0.0694599971175194 -0.0469899997115135 -3.13499999046326 -0.961000025272369 -0.207399994134903 -0.182899996638298 -3.06299996376038 -0.893599987030029 -0.330300003290176 -0.303799986839294 -2.91799998283386 -0.8057000041008 -0.433099985122681 -0.404199987649918 -2.71399998664856 -0.708000004291534 -0.515100002288818 -0.48309999704361 -2.46600008010864 -0.608699977397919 -0.578700006008148 -0.542800009250641 -2.18899989128113 -0.512499988079071 -0.627499997615814 -0.586099982261658 -1.89699995517731 -0.422300010919571 -0.66509997844696 -0.615899980068207 -1.60099995136261 -0.339100003242493 -0.694700002670288 -0.634400010108948 -1.31200003623962 -0.26350000500679 -0.719600021839142 -0.642400026321411 -1.03600001335144 -0.195899993181229 -0.743300020694733 -0.639599978923798 -0.781499981880188 -0.136199995875359 -0.770900011062622 -0.622200012207031 -0.553399980068207 -0.0846299976110458 -0.811900019645691 -0.577600002288818 -0.357100009918213 -0.0404600016772747 -0.887600004673004 -0.458799988031387 -0.198100000619888 -0.0010039999615401 -0.999700009822845 -0.02280000038445 -0.0880699977278709 0.0130700003355742 -0.454499989748001 0.890600025653839 -0.0645600035786629 0.000935700023546815 -0.0219100005924702 0.999800026416779 -0.0853900015354156 0 0 1 -0.0872699990868568";
var cup_key = "0 0.0299999993294477 0.0599999986588955 0.0900000035762787 0.119999997317791 0.150000005960464 0.180000007152557 0.209999993443489 0.239999994635582 0.270000010728836 0.300000011920929 0.330000013113022 0.360000014305115 0.389999985694885 0.419999986886978 0.449999988079071 0.479999989271164 0.509999990463257 0.540000021457672 0.569999992847443 0.600000023841858 0.629999995231628 0.660000026226044 0.689999997615814 0.720000028610229 0.75 0.779999971389771 0.810000002384186 0.839999973773956 0.870000004768372 0.899999976158142 0.930000007152557 0.959999978542328 0.990000009536743 1";
var cup_keyValue = "1 0 0 0 0 1 0 -0.0335800014436245 0 1 0 -0.131600007414818 0 1 0 -0.289900004863739 0 1 0 -0.504400014877319 0 1 0 -0.771000027656555 0 1 0 -1.08599996566772 0 1 0 -1.44400000572205 0 1 0 -1.84200000762939 0 -1 0 -4.00699996948242 0 -1 0 -3.54200005531311 0 -1 0 -3.04900002479553 0 -1 0 -2.53299999237061 0 -1 0 -1.99800002574921 0 -1 0 -1.44799995422363 0 -1 0 -0.886399984359741 0 -1 0 -0.318300008773804 0 1 0 -0.252499997615814 0 1 0 -0.822000026702881 0 1 0 -1.3860000371933 0 1 0 -1.94000005722046 0 -1 0 -3.80200004577637 0 -1 0 -3.27900004386902 0 -1 0 -2.77800011634827 0 -1 0 -2.30299997329712 0 -1 0 -1.85899996757507 0 -1 0 -1.44799995422363 0 -1 0 -1.07599997520447 0 -1 0 -0.746299982070923 0 -1 0 -0.463299989700317 0 -1 0 -0.231000006198883 0 -1 0 -0.0534700006246567 0 1 0 -0.065090000629425 0 1 0 -0.120600000023842 0 1 0 -0.124399997293949";
var cup_key2 = "0 0.0299999993294477 0.0599999986588955 0.0900000035762787 0.119999997317791 0.150000005960464 0.180000007152557 0.209999993443489 0.239999994635582 0.270000010728836 0.300000011920929 0.330000013113022 0.360000014305115 0.389999985694885 0.419999986886978 0.449999988079071 0.479999989271164 0.509999990463257 0.540000021457672 0.569999992847443 0.600000023841858 0.629999995231628 0.660000026226044 0.689999997615814 0.720000028610229 0.75 0.779999971389771 0.810000002384186 0.839999973773956 0.870000004768372 0.899999976158142 0.930000007152557 0.959999978542328 0.990000009536743 1";
var cup_keyValue2 = "1 0 0 0 0.447800010442734 -0.00742499995976686 0.89410001039505 -0.0370800010859966 0.447299987077713 -0.0291000008583069 0.893899977207184 -0.145300000905991 0.445100009441376 -0.0641399994492531 0.893199980258942 -0.319900006055832 0.439399987459183 -0.111800000071526 0.891300022602081 -0.555899977684021 0.428000003099442 -0.171299993991852 0.887399971485138 -0.847299993038177 0.407799988985062 -0.242200002074242 0.880400002002716 -1.18700003623962 0.374799996614456 -0.324099987745285 0.868600010871887 -1.56599998474121 0.323900014162064 -0.416200011968613 0.84960001707077 -1.97300004959106 0.247899994254112 -0.51690000295639 0.819400012493134 -2.39299988746643 0.137199997901917 -0.621200025081635 0.771499991416931 -2.80399990081787 -0.0185599997639656 -0.717000007629395 0.696799993515015 -3.17799997329712 -0.224700003862381 -0.779600024223328 0.58459997177124 -3.4760000705719 -0.467400014400482 -0.771099984645844 0.432399988174438 -3.65400004386902 -0.703700006008148 -0.661099970340729 0.260199993848801 -3.68199992179871 -0.883000016212463 -0.456400007009506 0.109899997711182 -3.55999994277954 -0.980599999427795 -0.195299997925758 0.0187500007450581 -3.3289999961853 -0.996399998664856 0.0851399973034859 0.00387099990621209 -3.05100011825562 -0.931500017642975 0.357499986886978 0.0673599988222122 -2.79399991035461 -0.783200025558472 0.589100003242493 0.199000000953674 -2.62400007247925 0.564199984073639 -0.73879998922348 -0.368600010871887 -3.69000005722046 0.317999988794327 -0.784300029277802 -0.532599985599518 -3.56699991226196 0.0951299965381622 -0.744499981403351 -0.660799980163574 -3.30999994277954 0.0795200020074844 0.658100008964539 0.748700022697449 -3.32200002670288 0.205799996852875 0.555499970912933 0.8057000041008 -3.72199988365173 0.293099999427795 0.453000009059906 0.841899991035461 -4.13899993896484 -0.351799994707108 -0.357699990272522 -0.865000009536743 -1.73199999332428 -0.389499992132187 -0.272300004959106 -0.879899978637695 -1.34300005435944 -0.411900013685226 -0.19760000705719 -0.889599978923798 -0.989199995994568 -0.422399997711182 -0.134200006723404 -0.896399974822998 -0.68120002746582 -0.422399997711182 -0.0825000032782555 -0.902700006961823 -0.42620000243187 -0.408100008964539 -0.0431200005114079 -0.911899983882904 -0.230700001120567 -0.358000010251999 -0.0167399998754263 -0.933600008487701 -0.100100003182888 -0.212599992752075 -0.00410800008103251 -0.977100014686584 -0.0395499989390373 -0.1841000020504 -0.00321300001814961 -0.982900023460388 -0.0355099998414516";
function spinFirst() {
    spinning = true;
    // can
    document.getElementById("model__can-TIMER").setAttribute("enabled", spinning.toString());
    document.getElementById("model__can-ROT-INTERP").setAttribute("key", can_key);
    document.getElementById("model__can-ROT-INTERP").setAttribute("keyValue", can_keyValue);
    // bottle
    document.getElementById("model__bottle-TIMER").setAttribute("enabled", spinning.toString());
    document.getElementById("model__BottleBody-ROT-INTERP").setAttribute("key", bottle_key);
    document.getElementById("model__BottleBody-ROT-INTERP").setAttribute("keyValue", bottle_keyValue);
    document.getElementById("model__bottleLogo-ROT-INTERP").setAttribute("key", bottle_key);
    document.getElementById("model__bottleLogo-ROT-INTERP").setAttribute("keyValue", bottle_keyValue);
    document.getElementById("model__bottleTop-ROT-INTERP").setAttribute("key", bottle_key);
    document.getElementById("model__bottleTop-ROT-INTERP").setAttribute("keyValue", bottle_keyValue);
    document.getElementById("model__bottleWater-ROT-INTERP").setAttribute("key", bottle_key);
    document.getElementById("model__bottleWater-ROT-INTERP").setAttribute("keyValue", bottle_keyValue);
    // cup
    document.getElementById("model__cup-TIMER").setAttribute("enabled", spinning.toString());
    document.getElementById("model__cupLogo-ROT-INTERP").setAttribute("key", cup_key);
    document.getElementById("model__cupLogo-ROT-INTERP").setAttribute("keyValue", cup_keyValue);
    document.getElementById("model__cup-ROT-INTERP").setAttribute("key", cup_key);
    document.getElementById("model__cup-ROT-INTERP").setAttribute("keyValue", cup_keyValue);
}

function spinSecond(){
    spinning = true;
    // can
    document.getElementById("model__can-TIMER").setAttribute("enabled", spinning.toString());
    document.getElementById("model__can-ROT-INTERP").setAttribute("key", can_key2);
    document.getElementById("model__can-ROT-INTERP").setAttribute("keyValue", can_keyValue2);
    // bottle
    document.getElementById("model__bottle-TIMER").setAttribute("enabled", spinning.toString());
    document.getElementById("model__BottleBody-ROT-INTERP").setAttribute("key", bottle_key2);
    document.getElementById("model__BottleBody-ROT-INTERP").setAttribute("keyValue", bottle_keyValue2);
    document.getElementById("model__bottleLogo-ROT-INTERP").setAttribute("key", bottle_key2);
    document.getElementById("model__bottleLogo-ROT-INTERP").setAttribute("keyValue", bottle_keyValue2);
    document.getElementById("model__bottleTop-ROT-INTERP").setAttribute("key", bottle_key2);
    document.getElementById("model__bottleTop-ROT-INTERP").setAttribute("keyValue", bottle_keyValue2);
    document.getElementById("model__bottleWater-ROT-INTERP").setAttribute("key", bottle_key2);
    document.getElementById("model__bottleWater-ROT-INTERP").setAttribute("keyValue", bottle_keyValue2);

    // cup
    document.getElementById("model__cup-TIMER").setAttribute("enabled", spinning.toString());
    document.getElementById("model__cupLogo-ROT-INTERP").setAttribute("key", cup_key2);
    document.getElementById("model__cupLogo-ROT-INTERP").setAttribute("keyValue", cup_keyValue2);
    document.getElementById("model__cup-ROT-INTERP").setAttribute("key", cup_key2);
    document.getElementById("model__cup-ROT-INTERP").setAttribute("keyValue", cup_keyValue2);
}

function stop() {
    spinning = false;
    // can
    document.getElementById("model__can-TIMER").setAttribute("enabled", spinning.toString());
    document.getElementById("model__can-ROT-INTERP").setAttribute("key", can_key);
    document.getElementById("model__can-ROT-INTERP").setAttribute("keyValue", can_keyValue);
    // bottle
    document.getElementById("model__bottle-TIMER").setAttribute("enabled", spinning.toString());
    document.getElementById("model__BottleBody-ROT-INTERP").setAttribute("key", bottle_key);
    document.getElementById("model__BottleBody-ROT-INTERP").setAttribute("keyValue", bottle_keyValue);
    document.getElementById("model__bottleLogo-ROT-INTERP").setAttribute("key", bottle_key);
    document.getElementById("model__bottleLogo-ROT-INTERP").setAttribute("keyValue", bottle_keyValue);
    document.getElementById("model__bottleTop-ROT-INTERP").setAttribute("key", bottle_key);
    document.getElementById("model__bottleTop-ROT-INTERP").setAttribute("keyValue", bottle_keyValue);
    document.getElementById("model__bottleWater-ROT-INTERP").setAttribute("key", bottle_key);
    document.getElementById("model__bottleWater-ROT-INTERP").setAttribute("keyValue", bottle_keyValue);
    // cup
    document.getElementById("model__cup-TIMER").setAttribute("enabled", spinning.toString());
    document.getElementById("model__cupLogo-ROT-INTERP").setAttribute("key", cup_key);
    document.getElementById("model__cupLogo-ROT-INTERP").setAttribute("keyValue", cup_keyValue);
    document.getElementById("model__cup-ROT-INTERP").setAttribute("key", cup_key);
    document.getElementById("model__cup-ROT-INTERP").setAttribute("keyValue", cup_keyValue);
    document.getElementById("model__cup").setAttribute("rotation", "0 -1 0 2.73465132713318");
    document.getElementById("model__cup").setAttribute("translation", "-0.247500002384186 -0.51419997215271 -0.215800002217293");
    document.getElementById("model__cupBody").setAttribute("scale", "10.8599996566772 10.8599996566772 10.8599996566772");
    document.getElementById("model__cupLogo").setAttribute("rotation", "0 -1 0 5.4475474357605");
    document.getElementById("model__cupLogo").setAttribute("translation", "0 -163.199996948242 0.0000221400005102623");
    document.getElementById("model__cupLogo").setAttribute("scale", "10.8599996566772 10.8599996566772 10.8599996566772");
    document.getElementById("model__cupInner").setAttribute("translation", "0 -163.199996948242 0.0000221400005102623");
}

function animateModel() {
    // can
    if (document.getElementById("model__can-TIMER").getAttribute("enabled") !== "true"){
        document.getElementById("model__can-TIMER").setAttribute("enabled", "true");
    }
    else {
        document.getElementById("model__can-TIMER").setAttribute("enabled", "false");
    }
    // bottle
    if (document.getElementById("model__bottle-TIMER").getAttribute("enabled") !== "true"){
        document.getElementById("model__bottle-TIMER").setAttribute("enabled", "true");
    }
    else {
        document.getElementById("model__bottle-TIMER").setAttribute("enabled", "false");
    }
    // cup
    if (document.getElementById("model__cup-TIMER").getAttribute("enabled") !== "true"){
        document.getElementById("model__cup-TIMER").setAttribute("enabled", "true");
    }
    else {
        document.getElementById("model__cup-TIMER").setAttribute("enabled", "false");
    }
}
function camFront() {
    document.getElementById("model__CameraFront").setAttribute("bind", "true");
    document.getElementById("model__canCameraFront").setAttribute("bind", "true");
    document.getElementById("model__cupCameraFront").setAttribute("bind", "true");
}

function camTop() {
    document.getElementById("model__CameraTop").setAttribute("bind", "true");
    document.getElementById("model__canCameraTop").setAttribute("bind", "true");
    document.getElementById("model__cupCameraTop").setAttribute("bind", "true");
}

function camBottom() {
    document.getElementById("model__CameraBottom").setAttribute("bind", "true");
    document.getElementById("model__canCameraBottom").setAttribute("bind", "true");
    document.getElementById("model__cupCameraBottom").setAttribute("bind", "true");
}

function lightDefault() {
    document.getElementById("model__Omni").setAttribute("on", "true");
    document.getElementById("model__Omni-57").setAttribute("on", "true");
    document.getElementById("model__Omni-58").setAttribute("on", "true");
    document.getElementById("model__Omni-59").setAttribute("on", "true");
    document.getElementById("model__Omni-60").setAttribute("on", "true");
    document.getElementById("model__Omni-61").setAttribute("on", "true");
    document.getElementById("model__canOmni1").setAttribute("on", "true");
    document.getElementById("model__canOmni2").setAttribute("on", "true");
    document.getElementById("model__canOmni3").setAttribute("on", "true");
    document.getElementById("model__canOmni4").setAttribute("on", "true");
    document.getElementById("model__canOmni5").setAttribute("on", "true");
    document.getElementById("model__canOmni6").setAttribute("on", "true");
    document.getElementById("model__cupOmni1").setAttribute("on", "true");
    document.getElementById("model__cupOmni2").setAttribute("on", "true");
    document.getElementById("model__cupOmni3").setAttribute("on", "true");
    document.getElementById("model__cupOmni4").setAttribute("on", "true");
    document.getElementById("model__cupOmni5").setAttribute("on", "true");
    document.getElementById("model__cupOmni6").setAttribute("on", "true");
    document.getElementById("model__Spot").setAttribute("on", "true");
    document.getElementById("model__canSpot").setAttribute("on", "true");
    document.getElementById("model__cupSpot").setAttribute("on", "true");
    document.getElementById("model__Direct001").setAttribute("on", "true");
    document.getElementById("model__canDirect").setAttribute("on", "true");
    document.getElementById("model__cupDirect").setAttribute("on", "true");
}

function lightOff() {
    document.getElementById("model__Omni").setAttribute("on", "false");
    document.getElementById("model__Omni-57").setAttribute("on", "false");
    document.getElementById("model__Omni-58").setAttribute("on", "false");
    document.getElementById("model__Omni-59").setAttribute("on", "false");
    document.getElementById("model__Omni-60").setAttribute("on", "false");
    document.getElementById("model__Omni-61").setAttribute("on", "false");
    document.getElementById("model__canOmni1").setAttribute("on", "false");
    document.getElementById("model__canOmni2").setAttribute("on", "false");
    document.getElementById("model__canOmni3").setAttribute("on", "false");
    document.getElementById("model__canOmni4").setAttribute("on", "false");
    document.getElementById("model__canOmni5").setAttribute("on", "false");
    document.getElementById("model__canOmni6").setAttribute("on", "false");
    document.getElementById("model__cupOmni1").setAttribute("on", "false");
    document.getElementById("model__cupOmni2").setAttribute("on", "false");
    document.getElementById("model__cupOmni3").setAttribute("on", "false");
    document.getElementById("model__cupOmni4").setAttribute("on", "false");
    document.getElementById("model__cupOmni5").setAttribute("on", "false");
    document.getElementById("model__cupOmni6").setAttribute("on", "false");
    document.getElementById("model__Spot").setAttribute("on", "false");
    document.getElementById("model__canSpot").setAttribute("on", "false");
    document.getElementById("model__cupSpot").setAttribute("on", "false");
    document.getElementById("model__Direct001").setAttribute("on", "false");
    document.getElementById("model__canDirect").setAttribute("on", "false");
    document.getElementById("model__cupDirect").setAttribute("on", "false");
}

function omniLight() {
    omniOn = !omniOn;
    document.getElementById("model__Omni").setAttribute("on", omniOn.toString());
    document.getElementById("model__Omni-57").setAttribute("on", omniOn.toString());
    document.getElementById("model__Omni-58").setAttribute("on", omniOn.toString());
    document.getElementById("model__Omni-59").setAttribute("on", omniOn.toString());
    document.getElementById("model__Omni-60").setAttribute("on", omniOn.toString());
    document.getElementById("model__Omni-61").setAttribute("on", omniOn.toString());
    document.getElementById("model__canOmni1").setAttribute("on", omniOn.toString());
    document.getElementById("model__canOmni2").setAttribute("on", omniOn.toString());
    document.getElementById("model__canOmni3").setAttribute("on", omniOn.toString());
    document.getElementById("model__canOmni4").setAttribute("on", omniOn.toString());
    document.getElementById("model__canOmni5").setAttribute("on", omniOn.toString());
    document.getElementById("model__canOmni6").setAttribute("on", omniOn.toString());
    document.getElementById("model__cupOmni1").setAttribute("on", omniOn.toString());
    document.getElementById("model__cupOmni2").setAttribute("on", omniOn.toString());
    document.getElementById("model__cupOmni3").setAttribute("on", omniOn.toString());
    document.getElementById("model__cupOmni4").setAttribute("on", omniOn.toString());
    document.getElementById("model__cupOmni5").setAttribute("on", omniOn.toString());
    document.getElementById("model__cupOmni6").setAttribute("on", omniOn.toString());
    console.log(omniOn);
}

function spotLight() {
    spotOn = !spotOn;
    document.getElementById("model__Spot").setAttribute("on", spotOn.toString());
    document.getElementById("model__canSpot").setAttribute("on", spotOn.toString());
    document.getElementById("model__cupSpot").setAttribute("on", spotOn.toString());
    console.log(spotOn);
}

function directLight() {
    directOn = !directOn;
    document.getElementById("model__Direct001").setAttribute("on", directOn.toString());
    document.getElementById("model__canDirect").setAttribute("on", directOn.toString());
    document.getElementById("model__cupDirect").setAttribute("on", directOn.toString());
    console.log(directOn);
}

function changeTexture() {
    if (document.getElementById("model__bottleLogoTexture").getAttribute("url") == bottleTexture1) {
        document.getElementById("model__bottleLogoTexture").setAttribute("url", bottleTexture2);
    }
    else {
        document.getElementById("model__bottleLogoTexture").setAttribute("url", bottleTexture1);
    }

    if (document.getElementById("model__canTexture").getAttribute("url") == canTexture1) {
        document.getElementById("model__canTexture").setAttribute("url", canTexture2);
    }
    else {
        document.getElementById("model__canTexture").setAttribute("url", canTexture1);
    }

    if (document.getElementById("model__cupLogoTexture").getAttribute("url") == cupTexture1) {
        document.getElementById("model__cupLogoTexture").setAttribute("url", cupTexture2);
    }
    else {
        document.getElementById("model__cupLogoTexture").setAttribute("url", cupTexture1);
    }
}