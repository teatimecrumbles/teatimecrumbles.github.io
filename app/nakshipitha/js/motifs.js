/* Nakshi Pitha Maker — motif library (MN names, CATS, MOTIF geometry, VAR variations, BT border tiles).
   Moved verbatim from the original single-file app; geometry unchanged. Classic script: its top-level
   declarations are shared with js/app.js, which loads after it. */
'use strict';
function inPoly(x,y,p){let c=false;for(let i=0,j=p.length-1;i<p.length;j=i++){if((p[i][1]>y)!==(p[j][1]>y)&&x<(p[j][0]-p[i][0])*(y-p[i][1])/(p[j][1]-p[i][1])+p[i][0])c=!c}return c}
/* ===== shared with Nakshi Kantha Maker: motif names, groups and drawing engine ===== */
const MN={lotus:['Lotus','পদ্ম'],lotusStem:['Lotus on stem','ডাঁটায় পদ্ম'],shapla:['Water lily','শাপলা'],rose:['Rose','গোলাপ'],flower:['Flower','ফুল'],jasmine:['Jasmine','বেলি'],
  marigold:['Marigold','গাঁদা'],sunflower:['Sunflower','সূর্যমুখী'],hibiscus:['Hibiscus','জবা'],kadam:['Kadam','কদম'],bud:['Bud','কুঁড়ি'],crossFlower:['Four petals','চারপাপড়ি'],
  tree:['Tree of life','জীবনবৃক্ষ'],leaf:['Leaf','পাতা'],paan:['Betel leaf','পান'],mango:['Mango','আম'],pineapple:['Pineapple','আনারস'],pomegranate:['Pomegranate','ডালিম'],
  palm:['Coconut palm','নারকেল গাছ'],banana:['Banana plant','কলাগাছ'],bamboo:['Bamboo','বাঁশ'],rice:['Rice sheaf','ধানের শীষ'],vine:['Vine','লতা'],sprig:['Sprig','ডাল'],
  sun:['Sun','সূর্য'],moon:['Moon','চাঁদ'],moonStar:['Moon and star','চাঁদ-তারা'],star:['Star','তারা'],cloud:['Cloud','মেঘ'],rain:['Rain','বৃষ্টি'],
  palki:['Palki','পালকি'],hatpakha:['Hand fan','হাতপাখা'],boat:['Boat','নৌকা'],kolshi:['Water pot','কলসি'],prodip:['Oil lamp','প্রদীপ'],ayna:['Mirror','আয়না'],comb:['Comb','চিরুনি'],
  chhata:['Umbrella','ছাতা'],ghor:['House','ঘর'],kanchi:['Scissors','কাঁচি'],harikane:['Lantern','হারিকেন'],jhuri:['Basket','ঝুড়ি'],charka:['Spinning wheel','চরকা'],needle:['Needle and thread','সুই-সুতো'],
  nath:['Nose ring','নথ'],churi:['Bangles','চুড়ি'],jhumka:['Jhumka','ঝুমকা'],haar:['Necklace','হার'],
  ektara:['Ektara','একতারা'],dhol:['Dhol','ঢোল'],bashi:['Flute','বাঁশি'],ghuri:['Kite','ঘুড়ি'],lattu:['Spinning top','লাটিম'],
  kalka:['Kalka','কল্কা'],vineRing:['Vine ring','লতার বৃত্ত'],chakra:['Wheel','চাকা'],hira:['Diamond','হীরা'],spiral:['Spiral','প্যাঁচ'],rings:['Rings','বৃত্ত'],mandala:['Rosette','গোল নকশা'],star8:['Eight-point star','আট-কোনা তারা'],
  border:['Vine border','লতা পাড়'],borderZig:['Zigzag border','আঁকাবাঁকা পাড়'],borderScallop:['Scallop border','ঝালর পাড়'],borderDiamond:['Diamond border','হীরা পাড়']};
Object.assign(MN,{
  champa:['Champak','চাঁপা'],bakul:['Bakul','বকুল'],shiuli:['Night jasmine','শিউলি'],krishnachura:['Flame-tree flower','কৃষ্ণচূড়া'],rajanigandha:['Tuberose','রজনীগন্ধা'],shimul:['Silk-cotton flower','শিমুল'],
  kamini:['Kamini','কামিনী'],palash:['Palash','পলাশ'],nayantara:['Periwinkle','নয়নতারা'],togor:['Crape jasmine','টগর'],kolke:['Kolke flower','কলকে ফুল'],kolmi:['Kolmi flower','কলমি ফুল'],
  kochuripana:['Water hyacinth','কচুরিপানা'],dahlia:['Dahlia','ডালিয়া'],chrysanthemum:['Chrysanthemum','চন্দ্রমল্লিকা'],lily:['Lily','লিলি'],tulip:['Tulip','টিউলিপ'],daisy:['Daisy','ডেইজি'],
  poppy:['Poppy','পপি'],cosmos:['Cosmos','কসমস'],zinnia:['Zinnia','জিনিয়া'],gardenia:['Gardenia','গন্ধরাজ'],lotusBud:['Lotus bud','পদ্মকুঁড়ি'],halfLotus:['Opening lotus','আধফোটা পদ্ম'],
  roseBud:['Rosebud','গোলাপকুঁড়ি'],bouquet:['Bouquet','ফুলের তোড়া'],flowerPot:['Flower pot','ফুলের টব'],garland:['Garland','মালা'],flowerBasket:['Flower basket','ফুলের সাজি'],bel:['Bel flower','বেলফুল'],
  aparajita:['Blue pea flower','অপরাজিতা'],
  bananaLeaf:['Banana leaf','কলাপাতা'],peepalLeaf:['Peepal leaf','অশ্বত্থপাতা'],banyanLeaf:['Banyan leaf','বটপাতা'],mangoLeaf:['Mango leaves','আমপাতা'],neem:['Neem','নিম'],tulsi:['Tulsi','তুলসী'],
  dheki:['Fern','ঢেঁকিশাক'],talpata:['Palm leaf','তালপাতা'],padmaPata:['Lotus leaf','পদ্মপাতা'],kochuPata:['Taro leaf','কচুপাতা'],moneyPlant:['Money plant','মানিপ্ল্যান্ট'],tendril:['Tendril','লতার আঁকড়ি'],
  jute:['Jute','পাট'],sugarcane:['Sugarcane','আখ'],datePalm:['Date palm','খেজুর গাছ'],talgach:['Palmyra palm','তালগাছ'],supari:['Areca palm','সুপারি গাছ'],bot:['Banyan tree','বটগাছ'],
  tree2:['Leafy tree','ঝাঁকড়া গাছ'],floweringTree:['Flowering tree','ফুলের গাছ'],shrub:['Shrub','ঝোপ'],grass:['Grass','ঘাস'],kashful:['Kash flowers','কাশফুল'],leafSpray:['Leaf spray','পাতার গোছা'],
  betelVine:['Betel vine','পানের লতা'],mushroom:['Mushroom','মাশরুম'],lotusPond:['Lotus pond','পদ্মপুকুর'],mangoToran:['Mango-leaf string','আমপাতার তোরণ'],
  jackfruit:['Jackfruit','কাঁঠাল'],lychee:['Lychee','লিচু'],coconut:['Coconut','নারকেল'],bananaBunch:['Bananas','কলার কাঁদি'],papaya:['Papaya','পেঁপে'],guava:['Guava','পেয়ারা'],
  starfruit:['Star fruit','কামরাঙা'],custardApple:['Custard apple','আতা'],jamun:['Jamun','জাম'],betelNut:['Betel nut','সুপারি'],lemon:['Lemon','লেবু'],watermelon:['Watermelon','তরমুজ'],
  grapes:['Grapes','আঙুর'],lau:['Bottle gourd','লাউ'],pumpkin:['Pumpkin','কুমড়া'],begun:['Aubergine','বেগুন'],morich:['Chilli','মরিচ'],korola:['Bitter gourd','করলা'],dheros:['Okra','ঢেঁড়স'],
  shim:['Flat beans','শিম'],mula:['Radish','মুলা'],gajor:['Carrot','গাজর'],peyaj:['Onion','পেঁয়াজ'],rosun:['Garlic','রসুন'],bhutta:['Corn','ভুট্টা'],motorshuti:['Peas','মটরশুঁটি'],
  sunrise:['Sunrise','সূর্যোদয়'],sunWave:['Wavy sun','ঢেউ-সূর্য'],halfMoon:['Half moon','আধখানা চাঁদ'],fullMoon:['Full moon','পূর্ণিমার চাঁদ'],starCluster:['Stars','তারার মেলা'],
  comet:['Shooting star','খসে পড়া তারা'],rainbow:['Rainbow','রংধনু'],lightning:['Lightning','বিজলি'],riverWaves:['River waves','নদীর ঢেউ'],hills:['Hills','পাহাড়'],ripples:['Ripples','জলের বৃত্ত'],
  raindrop:['Raindrop','বৃষ্টির ফোঁটা'],wind:['Wind','বাতাস'],sunsetRiver:['Sunset on the river','নদীতে সূর্যাস্ত'],sunCloud:['Sun and cloud','মেঘে সূর্য'],
  hari:['Clay pot','হাঁড়ি'],badna:['Spouted pot','বদনা'],jug:['Jug','জগ'],kettle:['Kettle','কেতলি'],dhenki:['Rice pounder','ঢেঁকি'],silPata:['Grinding stone','শিল-পাটা'],jaanta:['Hand mill','জাঁতা'],
  bonti:['Bonti blade','বঁটি'],hata:['Ladle','হাতা'],chamoch:['Spoon','চামচ'],thala:['Plate','থালা'],bati:['Bowl','বাটি'],glass:['Glass','গ্লাস'],teaCup:['Tea cup','চায়ের কাপ'],chula:['Clay stove','মাটির চুলা'],
  paandan:['Paan box','পানদান'],tiffin:['Tiffin carrier','টিফিন ক্যারিয়ার'],khaat:['Woven cot','খাটিয়া'],mora:['Cane stool','মোড়া'],dolna:['Swing','দোলনা'],shitalPati:['Cool mat','শীতলপাটি'],
  balish:['Pillow','বালিশ'],taant:['Hand loom','তাঁত'],sewing:['Sewing machine','সেলাই মেশিন'],spool:['Thread reel','সুতার রিল'],istri:['Iron','ইস্ত্রি'],jharu:['Broom','ঝাড়ু'],clock:['Clock','ঘড়ি'],
  chabi:['Key','চাবি'],tala:['Lock','তালা'],candle:['Candle','মোমবাতি'],kupi:['Kupi lamp','কুপি'],palmFan:['Palm-leaf fan','তালপাখা'],trunk:['Trunk','ট্রাংক'],radio:['Radio','রেডিও'],boi:['Book','বই'],
  doat:['Ink pot and quill','দোয়াত-কলম'],slate:['Slate','স্লেট'],khaam:['Envelope','খাম'],janala:['Window','জানালা'],darja:['Door','দরজা'],
  rickshaw:['Rickshaw','রিকশা'],cartwheel:['Wooden wheel','কাঠের চাকা'],cycle:['Bicycle','সাইকেল'],sampan:['Sampan','সাম্পান'],bajra:['Houseboat','বজরা'],dingi:['Dinghy','ডিঙি'],sailboat:['Sailboat','পালতোলা নৌকা'],
  train:['Train','রেলগাড়ি'],tinHouse:['Tin-roof house','টিনের ঘর'],dotola:['Two-storey house','দোতলা বাড়ি'],kuaa:['Well','কুয়া'],tubewell:['Tube well','টিউবওয়েল'],sanko:['Bamboo bridge','বাঁশের সাঁকো'],
  bera:['Fence','বেড়া'],toron:['Gateway','তোরণ'],
  payel:['Anklet','নূপুর'],tikli:['Maang tikka','টিকলি'],teep:['Teep','টিপ'],bala:['Bala bangle','বালা'],angti:['Ring','আংটি'],dul:['Earring','দুল'],locket:['Locket','লকেট'],mukut:['Crown','মুকুট'],
  kata:['Hairpin','খোঁপার কাঁটা'],khopa:['Bun with flowers','ফুলের খোঁপা'],tupi:['Cap','টুপি'],nagra:['Nagra shoe','নাগরা'],khorom:['Wooden sandals','খড়ম'],potli:['Pouch','পোটলি'],
  sareeFold:['Folded saree','ভাঁজ করা শাড়ি'],punjabi:['Panjabi','পাঞ্জাবি'],gamchha:['Gamchha','গামছা'],pagri:['Turban','পাগড়ি'],botam:['Button','বোতাম'],mehedi:['Mehendi hand','মেহেদি হাত'],
  dotara:['Dotara','দোতারা'],tabla:['Tabla','তবলা'],harmonium:['Harmonium','হারমোনিয়াম'],khol:['Khol drum','খোল'],sitar:['Sitar','সেতার'],kartal:['Cymbals','করতাল'],sanai:['Shehnai','সানাই'],
  ghonta:['Bell','ঘণ্টা'],fanush:['Sky lantern','ফানুস'],lanthon:['Festival lantern','লণ্ঠন'],balloon:['Balloons','বেলুন'],fuljhuri:['Sparkler','ফুলঝুরি'],alpana1:['Lotus alpana','পদ্ম আলপনা'],
  alpana2:['Square alpana','চৌকো আলপনা'],alpana3:['Rice alpana','ধানের আলপনা'],dhak:['Dhak drum','ঢাক'],bunting:['Bunting','কাগজের নিশান'],gift:['Gift','উপহার'],eidMoon:['Eid moon','ঈদের চাঁদ'],
  peacockFeather:['Peacock feather','ময়ূরের পালক'],peacockEye:['Peacock feather eye','ময়ূরপালকের চোখ'],peacockPair:['Two peacock feathers','জোড়া ময়ূরপালক'],peacockFan:['Peacock feather fan','ময়ূরপালকের পাখা'],
  feather:['Feather','পালক'],curlFeather:['Curled feather','বাঁকা পালক'],quill:['Quill','পালকের কলম'],featherWreath:['Feather wreath','পালকের মালা'],tigerPaw:['Tiger paw print','বাঘের পায়ের ছাপ'],
  pawTrail:['Paw-print trail','পায়ের ছাপের সারি'],tigerStripes:['Tiger stripes','বাঘের ডোরা'],tigerRound:['Round tiger stripes','গোল বাঘা ডোরা'],
  star5:['Five-point star','পাঁচকোনা তারা'],star7:['Seven-point star','সাতকোনা তারা'],star10:['Ten-point star','দশকোনা তারা'],star12:['Twelve-point star','বারোকোনা তারা'],star16:['Sixteen-point star','ষোলোকোনা তারা'],
  starCircle:['Ring of stars','তারার বৃত্ত'],girih:['Girih rosette','গিরিহ নকশা'],knotSquare:['Endless knot','অনন্ত গিঁট'],jaali:['Lattice window','জালির জানালা'],hexagon:['Hexagons','ছয়কোনা'],
  octagon:['Octagons','আটকোনা'],honeycomb:['Hex cells','ছয়কোনা ঘর'],loopKnot:['Loop knot','ফাঁস-গিঁট'],chainLinks:['Chain ring','শিকলের বৃত্ত'],braid:['Braid','বেণি'],ropeTwist:['Rope ring','দড়ির বৃত্ত'],
  squares:['Turning squares','ঘোরানো চৌকো'],checker:['Checks','চেক'],chevron:['Chevrons','তীর-ভাঁজ'],zigzagPatch:['Zigzag','আঁকাবাঁকা'],wavesPatch:['Waves','ঢেউ'],triangles:['Triangles','ত্রিভুজ'],
  squareSpiral:['Square spiral','চৌকো প্যাঁচ'],doubleSpiral:['Double spiral','জোড়া প্যাঁচ'],whirl:['Whirl','ঘূর্ণি'],quatrefoil:['Lobed rosette','খাঁজকাটা ফুল'],trefoil:['Ring of circles','বৃত্তের ফুল'],
  heart:['Heart','হৃদয়'],crossDiamond:['Cross in a diamond','হীরার মাঝে যোগচিহ্ন'],stepDiamond:['Stepped diamond','সিঁড়ি-হীরা'],teardrop:['Four drops','চার ফোঁটা'],mandala2:['Layered rosette','স্তরে স্তরে গোল নকশা'],
  seedOfLife:['Seven circles','সাত বৃত্ত'],sunburst:['Sunburst','রশ্মি'],fanPattern:['Four fans','চার পাখা'],arabesque:['Scrollwork','লতা-প্যাঁচ'],paisleyPair:['Paisley pair','জোড়া কল্কা'],
  kalkaNest:['Nested kalka','কল্কার ভেতর কল্কা'],kalkaFlower:['Flowering kalka','ফুল-কল্কা'],
  cornerKalka:['Corner kalka','কোণের কল্কা'],cornerLeaf:['Corner leaves','কোণের পাতা'],cornerFan:['Corner fan','কোণের পাখা'],cornerLotus:['Corner lotus','কোণের পদ্ম'],cornerTri:['Corner triangle','কোণের ত্রিভুজ'],
  cornerFlower:['Corner flower','কোণের ফুল'],cornerVine:['Corner vine','কোণের লতা'],cornerBracket:['Corner frame','কোণের ফ্রেম'],
  borderTri:['Triangle border','ত্রিভুজ পাড়'],borderChevron:['Arrow border','তীর পাড়'],borderWave:['Wave border','ঢেউ পাড়'],borderChain:['Chain border','শিকল পাড়'],borderLeafChain:['Leaf border','পাতা পাড়'],
  borderFlowerChain:['Flower border','ফুল পাড়'],borderKalkaChain:['Kalka border','কল্কা পাড়'],borderRice:['Rice border','ধানের শীষ পাড়'],borderDouble:['Double-line border','জোড়া রেখা পাড়'],
  borderLadder:['Ladder border','মই পাড়'],borderCheck:['Check border','চেক পাড়'],borderDots:['Dot border','ফোঁটা পাড়'],borderBraid:['Braid border','বেণি পাড়'],borderHeart:['Heart border','হৃদয় পাড়'],
  borderStar:['Star border','তারা পাড়'],borderStep:['Step border','সিঁড়ি পাড়'],borderLoop:['Loop border','ফাঁস পাড়'],borderArch:['Arch border','খিলান পাড়'],borderTiger:['Tiger-stripe border','বাঘা ডোরা পাড়'],
  borderPeacock:['Peacock-feather border','ময়ূরপালক পাড়']});

const CATS=[['rc','Recent','সম্প্রতি',null],['fv','Favourites','পছন্দের',null],
  ['fl','Flowers','ফুল',['lotus','lotusStem','shapla','rose','flower','jasmine','marigold','sunflower','hibiscus','kadam','bud','crossFlower','champa','bakul','shiuli','krishnachura','rajanigandha','shimul','kamini','palash',
    'nayantara','togor','kolke','kolmi','kochuripana','dahlia','chrysanthemum','lily','tulip','daisy','poppy','cosmos','zinnia','gardenia','lotusBud','halfLotus','roseBud','bouquet','flowerPot','garland','flowerBasket','bel','aparajita']],
  ['lf','Leaves and trees','পাতা ও গাছ',['tree','leaf','paan','palm','banana','bamboo','rice','vine','sprig','bananaLeaf','peepalLeaf','banyanLeaf','mangoLeaf','neem','tulsi','dheki','talpata','padmaPata','kochuPata',
    'moneyPlant','tendril','jute','sugarcane','datePalm','talgach','supari','bot','tree2','floweringTree','shrub','grass','kashful','leafSpray','betelVine','mushroom','lotusPond','mangoToran']],
  ['fr','Fruit and vegetables','ফল ও সবজি',['mango','pineapple','pomegranate','jackfruit','lychee','coconut','bananaBunch','papaya','guava','starfruit','custardApple','jamun','betelNut','lemon','watermelon','grapes',
    'lau','pumpkin','begun','morich','korola','dheros','shim','mula','gajor','peyaj','rosun','bhutta','motorshuti']],
  ['sk','Sky and water','আকাশ ও পানি',['sun','moon','moonStar','star','cloud','rain','sunrise','sunWave','halfMoon','fullMoon','starCluster','comet','rainbow','lightning','riverWaves','hills','ripples','raindrop','wind','sunsetRiver','sunCloud']],
  ['hm','Home and kitchen','ঘর ও রান্নাঘর',['kolshi','prodip','hatpakha','ayna','comb','chhata','kanchi','harikane','jhuri','charka','needle','hari','badna','jug','kettle','dhenki','silPata','jaanta','bonti','hata','chamoch',
    'thala','bati','glass','teaCup','chula','paandan','tiffin','khaat','mora','dolna','shitalPati','balish','taant','sewing','spool','istri','jharu','clock','chabi','tala','candle','kupi','palmFan','trunk','radio','boi',
    'doat','slate','khaam','janala','darja']],
  ['ou','Out and about','পথে-ঘাটে',['palki','boat','ghor','rickshaw','cartwheel','cycle','sampan','bajra','dingi','sailboat','train','tinHouse','dotola','kuaa','tubewell','sanko','bera','toron']],
  ['jw','Jewellery and dress','গয়না ও পোশাক',['nath','churi','jhumka','haar','payel','tikli','teep','bala','angti','dul','locket','mukut','kata','khopa','tupi','nagra','khorom','potli','sareeFold','punjabi','gamchha','pagri','botam','mehedi']],
  ['mu','Music and festivals','বাজনা ও উৎসব',['ektara','dhol','bashi','ghuri','lattu','dotara','tabla','harmonium','khol','sitar','kartal','sanai','ghonta','fanush','lanthon','balloon','fuljhuri','alpana1','alpana2','alpana3',
    'dhak','bunting','gift','eidMoon']],
  ['ft','Feathers and stripes','পালক ও ডোরা',['peacockFeather','peacockEye','peacockPair','peacockFan','feather','curlFeather','quill','featherWreath','tigerPaw','pawTrail','tigerStripes','tigerRound']],
  ['pt','Patterns','নকশা',['kalka','vineRing','chakra','hira','spiral','rings','mandala','star8','star5','star7','star10','star12','star16','starCircle','girih','knotSquare','jaali','hexagon','octagon','honeycomb',
    'loopKnot','chainLinks','braid','ropeTwist','squares','checker','chevron','zigzagPatch','wavesPatch','triangles','squareSpiral','doubleSpiral','whirl','quatrefoil','trefoil','heart','crossDiamond','stepDiamond',
    'teardrop','mandala2','seedOfLife','sunburst','fanPattern','arabesque','paisleyPair','kalkaNest','kalkaFlower']],
  ['cn','Corners','কোণ',['cornerKalka','cornerLeaf','cornerFan','cornerLotus','cornerTri','cornerFlower','cornerVine','cornerBracket']],
  ['bd','Borders','পাড়',['border','borderZig','borderScallop','borderDiamond','borderTri','borderChevron','borderWave','borderChain','borderLeafChain','borderFlowerChain','borderKalkaChain','borderRice','borderDouble',
    'borderLadder','borderCheck','borderDots','borderBraid','borderHeart','borderStar','borderStep','borderLoop','borderArch','borderTiger','borderPeacock']]];

/* ---------- geometry ---------- */
function bez(p0,p1,p2,p3,n){const o=[];for(let i=0;i<=n;i++){const t=i/n,u=1-t;
  o.push([u*u*u*p0[0]+3*u*u*t*p1[0]+3*u*t*t*p2[0]+t*t*t*p3[0],u*u*u*p0[1]+3*u*u*t*p1[1]+3*u*t*t*p2[1]+t*t*t*p3[1]])}return o}
function circ(cx,cy,r,n){n=n||36;const o=[];for(let i=0;i<n;i++){const a=i/n*Math.PI*2;o.push([cx+r*Math.cos(a),cy+r*Math.sin(a)])}return o}
function ell(cx,cy,a,b,rot,n){n=n||28;const o=[],c=Math.cos(rot),s=Math.sin(rot);for(let i=0;i<n;i++){const t=i/n*Math.PI*2,x=a*Math.cos(t),y=b*Math.sin(t);o.push([cx+x*c-y*s,cy+x*s+y*c])}return o}
function mv(pts,dx,dy){return pts.map(([x,y])=>[x+dx,y+dy])}
function rotp(pts,a){const c=Math.cos(a),s=Math.sin(a);return pts.map(([x,y])=>[x*c-y*s,x*s+y*c])}
function petal(r0,r1,w,n){n=n||14;const up=[],dn=[];for(let i=0;i<=n;i++){const u=i/n,x=r0+(r1-r0)*u,y=w*Math.pow(Math.sin(Math.PI*u),.85)*(1-.35*u);up.push([x,y]);dn.push([x,-y])}return up.concat(dn.reverse().slice(1,-1))}
const P=(p,c,f)=>({p,c:!!c,f:!!f});
const MOTIF={
 lotus(){const o=[];for(let k=0;k<8;k++){o.push(P(rotp(petal(.24,1,.3),k*Math.PI/4),1,1));o.push(P(rotp(petal(.24,.62,.16,10),(k+.5)*Math.PI/4),1,1))}o.push(P(circ(0,0,.19,30),1,1));return o},
 sun(){const o=[P(circ(0,0,.36,40),1,1)];for(let k=0;k<16;k++){const a=k*Math.PI/8,l=k%2?.78:.98,w=.11;o.push(P([[ .46*Math.cos(a-w),.46*Math.sin(a-w)],[l*Math.cos(a),l*Math.sin(a)],[.46*Math.cos(a+w),.46*Math.sin(a+w)]],1,0))}return o},
 lotusStem(){const o=[],up=a=>p=>mv(rotp(p,a),0,-.12);
  [[0,.62,.17],[-.6,.56,.15],[.6,.56,.15],[-1.15,.46,.13],[1.15,.46,.13]].forEach(([d,l,w])=>o.push(P(up(-Math.PI/2+d*.6)(petal(0,l,w)),1,1)));
  o.push(P(ell(0,-.1,.24,.07,0,22),1,1));
  o.push(P(bez([0,-.04],[.06,.3],[-.06,.62],[0,.98],12),0,0));
  o.push(P(ell(.46,.66,.32,.1,-.18,26),1,1));o.push(P([[.16,.71],[.76,.6]],0,0));
  o.push(P(bez([0,.74],[-.2,.62],[-.38,.56],[-.46,.42],8),0,0));
  o.push(P(mv(rotp(petal(0,.3,.11),-Math.PI/2-.35),-.46,.42),1,1));
  return o},
 rose(){const o=[],cx=0,cy=-.3;
  const rp=(r0,r1,w,a)=>{const pts=[];for(let i=0;i<=20;i++){const t=-1+i/10,x=r0+(r1-r0)*Math.sqrt(Math.max(0,1-t*t))-(r1-r0)*.12*Math.exp(-((t/.18)**2));pts.push([x,w*t])}return mv(rotp(pts,a),cx,cy)};
  for(let k=0;k<5;k++)o.push(P(rp(.14,.56,.27,k*Math.PI*2/5-Math.PI/2),1,0));
  for(let k=0;k<5;k++)o.push(P(rp(.04,.32,.17,k*Math.PI*2/5-Math.PI/2+Math.PI/5),1,1));
  const sp=[];for(let i=0;i<=30;i++){const t=i/30*Math.PI*3,r=.015+.035*t/Math.PI;sp.push([cx+r*Math.cos(t),cy+r*Math.sin(t)])}o.push(P(sp,0,0));
  o.push(P(bez([0,.26],[.07,.5],[-.06,.74],[0,.98],12),0,0));
  o.push(P(ell(.21,.52,.2,.075,-.55,22),1,1));o.push(P([[.04,.62],[.37,.42]],0,0));
  o.push(P(ell(-.2,.76,.18,.07,.5,22),1,1));o.push(P([[-.03,.85],[-.36,.67]],0,0));
  return o},
 tree(){const o=[P([[0,.95],[0,-.8]],0,0)],br=[[.55,.55],[.5,.2],[.42,-.15],[.3,-.45]];
  br.forEach(([w,y])=>[-1,1].forEach(s=>{const end=[s*w,y-.22];o.push(P(bez([0,y],[s*w*.4,y],[s*w*.8,y-.05],end,8),0,0));
   o.push(P(ell(end[0]+s*.07,end[1]-.06,.13,.065,s>0?-0.6:Math.PI+0.6,20),1,1))}));
  o.push(P(ell(0,-.88,.08,.14,0,20),1,1));o.push(P([[-.3,.95],[.3,.95],[.2,.75],[-.2,.75]],1,1));return o},
 kalka(){const a=bez([.3,-.98],[.9,-.6],[.95,.35],[.45,.6],14),b=bez([.45,.6],[.15,.95],[-.55,.95],[-.6,.35],14),c=bez([-.6,.35],[-.7,-.15],[-.1,-.3],[.3,-.98],14);
  return [P(a.concat(b.slice(1),c.slice(1,-1)),1,1)]},
 hatpakha(){const o=[],cy=-.24;
  const fr=[];for(let i=0;i<96;i++){const a=i/96*Math.PI*2,r=.68+.05*Math.cos(a*16);fr.push([r*Math.cos(a),cy+r*Math.sin(a)])}o.push(P(fr,1,0));
  o.push(P(circ(0,cy,.6,48),1,0));o.push(P(circ(0,cy,.44,40),1,0));
  for(let k=0;k<8;k++)o.push(P(mv(rotp(petal(.07,.38,.1,10),k*Math.PI/4),0,cy),1,1));
  for(let k=0;k<16;k++){const a=k*Math.PI/8+Math.PI/16;o.push(P(circ(.52*Math.cos(a),cy+.52*Math.sin(a),.03,8),1,0))}
  o.push(P([[-.055,.46],[.055,.46],[.055,.98],[-.055,.98]],1,1));
  o.push(P(ell(0,.46,.11,.04,0,16),1,1));
  return o},
 palki(){const o=[];
  o.push(P(bez([-.68,-.12],[-.6,-.6],[.6,-.6],[.68,-.12],18),1,1));
  o.push(P(circ(0,-.56,.06,12),1,1));
  const fr=[];for(let i=0;i<=48;i++){const x=-.6+1.2*i/48;fr.push([x,-.06+.045*Math.abs(Math.sin(i/48*Math.PI*8))])}o.push(P(fr,0,0));
  o.push(P([[-.55,-.08],[.55,-.08],[.55,.42],[-.55,.42]],1,0));
  o.push(P([[-.5,-.02],[.5,-.02],[.5,.37],[-.5,.37]],1,0));
  const arch=(cx,w,top,bot)=>{const p=[[cx-w,bot],[cx-w,top+w]];for(let i=0;i<=10;i++){const a=Math.PI+i/10*Math.PI;p.push([cx+w*Math.cos(a),top+w+w*Math.sin(a)])}p.push([cx+w,bot]);return p};
  o.push(P(arch(0,.17,.04,.37),1,1));
  o.push(P(arch(-.36,.07,.06,.24),1,0));o.push(P(arch(.36,.07,.06,.24),1,0));
  o.push(P([[-.62,.42],[.62,.42],[.62,.5],[-.62,.5]],1,1));
  o.push(P([[-.5,.5],[-.5,.62]],0,0));o.push(P([[.5,.5],[.5,.62]],0,0));
  [-1,1].forEach(s=>o.push(P([[s*.66,-.18]].concat(bez([s*.8,-.18],[s*.96,-.18],[s*1.02,-.24],[s*.98,-.34],8)),0,0)));
  return o},
 boat(){const hull=bez([-.95,.15],[-.6,.55],[.6,.55],[.95,.15],16);return [P(hull,1,1),P([[0,.2],[0,-.92]],0,0),P([[.06,-.86],[.68,.08],[.06,.08]],1,1),
  P(bez([-.9,.68],[-.6,.58],[-.4,.78],[-.1,.68],10).concat(bez([-.1,.68],[.2,.58],[.4,.78],[.7,.68],10).slice(1)),0,0)]},
 leaf(){const up=[],dn=[];for(let i=0;i<=16;i++){const u=i/16,x=-.95+1.9*u,y=.42*Math.sin(Math.PI*u);up.push([x,-y]);dn.push([x,y])}return [P(up.concat(dn.reverse().slice(1,-1)),1,1),P([[-1,0],[.85,0]],0,0)]},
 flower(){const o=[];for(let k=0;k<5;k++){const a=k*Math.PI*2/5-Math.PI/2;o.push(P(circ(.55*Math.cos(a),.55*Math.sin(a),.32,24),1,1))}o.push(P(circ(0,0,.2,18),1,1));return o},
 star(){const p=[];for(let k=0;k<16;k++){const a=k*Math.PI/8,r=k%2?.42:1;p.push([r*Math.cos(a),r*Math.sin(a)])}return [P(p,1,1),P(circ(0,0,.18,14),1,0)]},

 /* flowers */
 shapla(){const o=[];for(let k=0;k<12;k++)o.push(P(rotp(petal(.22,1,.13,12),k*Math.PI/6),1,0));for(let k=0;k<8;k++)o.push(P(rotp(petal(.12,.62,.13,10),k*Math.PI/4+Math.PI/8),1,1));o.push(P(circ(0,0,.13,16),1,1));return o},
 jasmine(){const o=[];for(let k=0;k<6;k++)o.push(P(rotp(petal(.1,.92,.2,12),k*Math.PI/3-Math.PI/2),1,1));o.push(P(circ(0,0,.12,14),1,1));return o},
 marigold(){const o=[];[[.95,22],[.74,18],[.52,14],[.3,10]].forEach(([r,n],i)=>{const p=[];for(let j=0;j<n*6;j++){const a=j/(n*6)*Math.PI*2,rr=r-.07*Math.abs(Math.sin(a*n/2));p.push([rr*Math.cos(a+i*.2),rr*Math.sin(a+i*.2)])}o.push(P(p,1,0))});o.push(P(circ(0,0,.12,14),1,1));return o},
 sunflower(){const o=[];for(let k=0;k<20;k++)o.push(P(rotp(petal(.42,1,.12,10),k*Math.PI/10),1,1));o.push(P(circ(0,0,.4,36),1,0));
  for(let i=-2;i<=2;i++)for(let j=-2;j<=2;j++){const x=i*.12,y=j*.12;if(x*x+y*y<.09){o.push(P([[x-.03,y-.03],[x+.03,y+.03]],0,0));o.push(P([[x-.03,y+.03],[x+.03,y-.03]],0,0))}}return o},
 hibiscus(){const o=[];for(let k=0;k<5;k++){const a=k*Math.PI*2/5-Math.PI/2+.3;o.push(P(broad(.06,.9,.36,a),1,0));o.push(P([[.14*Math.cos(a),.14*Math.sin(a)],[.62*Math.cos(a),.62*Math.sin(a)]],0,0))}
  o.push(P([[0,0],[.5,-.62]],0,0));[[.5,-.62],[.6,-.56],[.44,-.72],[.62,-.7],[.4,-.6]].forEach(([x,y])=>o.push(P(circ(x,y,.035,8),1,1)));o.push(P(circ(0,0,.1,12),1,1));return o},
 kadam(){const o=[P(circ(0,0,.42,32),1,1)];for(let k=0;k<36;k++){const a=k*Math.PI/18;o.push(P([[.5*Math.cos(a),.5*Math.sin(a)],[.8*Math.cos(a),.8*Math.sin(a)]],0,0));o.push(P(circ(.87*Math.cos(a),.87*Math.sin(a),.035,8),1,0))}return o},
 bud(){const o=[P(mv(rotp(petal(0,.7,.24,14),-Math.PI/2),0,-.05),1,1)];[-.75,.75].forEach(d=>o.push(P(mv(rotp(petal(0,.42,.12,10),-Math.PI/2+d),0,-.02),1,1)));
  o.push(P(bez([0,-.02],[.06,.3],[-.06,.62],[0,.98],12),0,0));o.push(P(ell(.22,.55,.2,.07,-.5,20),1,1));return o},
 crossFlower(){const o=[];for(let k=0;k<4;k++){o.push(P(rotp(petal(.12,.9,.3,14),k*Math.PI/2),1,1));o.push(P(rotp(petal(.2,.62,.12,10),k*Math.PI/2+Math.PI/4),1,0))}o.push(P(circ(0,0,.13,14),1,1));return o},

 /* plants and fruit */
 paan(){const h=[];for(let i=0;i<64;i++){const t=i/64*Math.PI*2,x=16*Math.pow(Math.sin(t),3),y=13*Math.cos(t)-5*Math.cos(2*t)-2*Math.cos(3*t)-Math.cos(4*t);h.push([x/21,(-y-2.5)/15])}
  const o=[P(h,1,0),P([[0,-.5],[0,.9]],0,0),P(bez([0,-.5],[.02,-.65],[.06,-.78],[.1,-.9],6),0,0)];
  for(let i=0;i<3;i++)[-1,1].forEach(s=>o.push(P(bez([0,-.22+i*.3],[s*.18,-.26+i*.3],[s*.34,-.36+i*.3],[s*.5,-.5+i*.34],8),0,0)));return o},
 mango(){const b=bez([0,-.75],[.75,-.7],[.75,.55],[.05,.8],14).concat(bez([.05,.8],[-.55,.95],[-.7,.2],[-.35,-.25],12).slice(1),bez([-.35,-.25],[-.15,-.5],[-.3,-.7],[0,-.75],8).slice(1,-1));
  return [P(b,1,1),P([[0,-.75],[.04,-.92]],0,0),P(ell(.32,-.86,.28,.08,-.3,20),1,1),P([[.06,-.79],[.58,-.94]],0,0)]},
 pineapple(){const o=[P(ell(0,.28,.48,.66,0,40),1,0)];
  for(let c=-1.2;c<=1.21;c+=.24)[1,-1].forEach(s=>{const r=chordE(0,.28,.48,.66,c,.28,.6*s,.8);if(r&&Math.hypot(r[1][0]-r[0][0],r[1][1]-r[0][1])>.1)o.push(P(r,0,0))});
  [-.62,-.3,0,.3,.62].forEach(d=>o.push(P(mv(rotp(petal(0,.56-.12*Math.abs(d),.09,10),-Math.PI/2+d*.8),0,-.36),1,1)));return o},
 pomegranate(){const o=[P(circ(0,.18,.68,44),1,0),P([[-.24,-.44],[-.3,-.74],[-.12,-.58],[0,-.82],[.12,-.58],[.3,-.74],[.24,-.44]],1,1)];
  [[-.28,.05],[0,0],[.28,.05],[-.38,.32],[-.12,.28],[.14,.28],[.38,.32],[-.22,.55],[.04,.56],[.28,.52]].forEach(([x,y])=>o.push(P(drop(x,y,.08),1,0)));return o},
 palm(){const o=[P(bez([-.08,.98],[-.06,.5],[-.02,0],[.02,-.42],12),0,0),P(bez([.08,.98],[.1,.5],[.12,0],[.12,-.42],12),0,0)];
  for(let i=0;i<9;i++){const u=i/9,y=.88-u*1.25;o.push(P([[-.075+u*.09,y],[.085+u*.035,y]],0,0))}
  const T=[.07,-.46];[[-.95,-.12],[-.78,-.72],[-.2,-.98],[.36,-.98],[.86,-.72],[.98,-.12]].forEach(e=>{const c=[(T[0]+e[0])/2,Math.min(T[1],e[1])-.25],p=bez(T,c,c,e,12);o.push(P(p,0,0));
    for(let i=3;i<12;i++){const [x,y]=p[i],[x2,y2]=p[i+1],a=Math.atan2(y2-y,x2-x),l=.13*(1-i/14);[1,-1].forEach(s=>o.push(P([[x,y],[x+l*Math.cos(a+s*1.1),y+l*Math.sin(a+s*1.1)]],0,0)))}});
  [[-.06,-.36],[.16,-.34],[.05,-.27]].forEach(([x,y])=>o.push(P(circ(x,y,.07,12),1,1)));return o},
 banana(){const o=[P([[-.07,.98],[.07,.98],[.06,-.1],[-.06,-.1]],1,1)];
  [[-.45,-.28,.48,.13,.37],[.45,-.28,.48,.13,-.37],[-.28,-.5,.48,.11,.97],[.28,-.5,.48,.11,-.97]].forEach(([x,y,a,b,r])=>{o.push(P(ell(x,y,a,b,r,30),1,0));const c=Math.cos(r),s=Math.sin(r);o.push(P([[x-a*.95*c,y-a*.95*s],[x+a*.95*c,y+a*.95*s]],0,0))});
  o.push(P(ell(0,-.55,.06,.4,0,20),1,0));return o},
 bamboo(){const o=[];[[-.4,.98,-.7],[0,.98,-.95],[.4,.98,-.55]].forEach(([x,y0,y1])=>{let y=y0;while(y>y1+.05){const ny=Math.max(y1,y-.3);o.push(P(rect(x-.07,ny+.02,x+.07,y-.02),1,0));y=ny}});
  [[-.4,-.38,-2.5],[-.4,-.1,-.7],[0,-.32,-.6],[0,-.62,-2.6],[.4,-.2,-.5],[.4,.1,-2.4]].forEach(([x,y,a])=>o.push(P(mv(rotp(petal(0,.42,.08,10),a),x,y),1,1)));return o},
 rice(){const st=bez([0,.98],[.02,.3],[.1,-.4],[.42,-.88],24),o=[P(st,0,0)];
  for(let i=8;i<st.length-1;i+=2){const [x,y]=st[i],[x2,y2]=st[i+1],a=Math.atan2(y2-y,x2-x),ga=a+((i/2)%2?.6:-.6);o.push(P(ell(x+Math.cos(ga)*.1,y+Math.sin(ga)*.1,.085,.035,ga,12),1,1))}
  o.push(P(bez([0,.98],[-.1,.5],[-.35,.1],[-.55,-.2],12),0,0));o.push(P(bez([0,.98],[.08,.6],[.3,.35],[.55,.2],12),0,0));return o},
 vine(){const p=[];for(let i=0;i<=60;i++){const x=-1+2*i/60;p.push([x,.22*Math.sin(x*Math.PI*1.5)])}const o=[P(p,0,0)];
  for(let k=0;k<6;k++){const x=-.85+k*.34,y=.22*Math.sin(x*Math.PI*1.5),s=k%2?1:-1;o.push(P(ell(x,y+s*.17,.14,.06,s*.9,14),1,1))}
  [-.5,.15,.8].forEach((x,j)=>{const y=.22*Math.sin(x*Math.PI*1.5),s=j%2?1:-1,q=[];for(let i=0;i<=14;i++){const t=i/14*Math.PI*3,r=.09*(1-i/16);q.push([x+r*Math.cos(t),y-s*.12+r*Math.sin(t)])}o.push(P(q,0,0))});return o},
 sprig(){const st=bez([0,.98],[.05,.4],[-.05,-.2],[0,-.95],20),o=[P(st,0,0)];
  for(let i=3;i<st.length;i+=3){const [x,y]=st[i];[-1,1].forEach(s=>o.push(P(mv(rotp(petal(0,.36-i*.008,.1,10),-Math.PI/2+s),x,y),1,1)))}
  o.push(P(mv(rotp(petal(0,.25,.08,10),-Math.PI/2),0,-.95),1,1));return o},

 /* sky */
 moon(){return [P(crescent(0,0,.9,-.5),1,0)].concat(crescentRows(0,0,.9,-.5,4).map(p=>P(p,0,0)))},
 moonStar(){return [P(crescent(-.15,0,.8,0),1,0)].concat(crescentRows(-.15,0,.8,0,3).map(p=>P(p,0,0)),[P(star5(.5,-.05,.28,.11),1,1)])},
 cloud(){return [P(cloudPts(0,0,1),1,1)]},
 rain(){const o=[P(cloudPts(0,-.45,.75),1,1)];[[-.45,.25],[0,.15],[.45,.25],[-.22,.62],[.22,.6]].forEach(([x,y])=>o.push(P(drop(x,y,.13),1,1)));return o},

 /* daily life */
 kolshi(){const R=[[.26,-.82],[.28,-.74],[.17,-.64]].concat(bez([.17,-.64],[.2,-.45],[.78,-.32],[.72,.12],12).slice(1),bez([.72,.12],[.68,.6],[.3,.78],[0,.8],12).slice(1));
  const body=R.concat(R.slice(0,-1).reverse().map(([x,y])=>[-x,y])),z=[];for(let i=0;i<=10;i++)z.push([-.6+1.2*i/10,i%2?.24:.0]);
  return [P(body,1,0),P(ell(0,-.82,.27,.05,0,18),1,0),P([[-.68,-.06],[.68,-.06]],0,0),P([[-.62,.3],[.62,.3]],0,0),P(z,0,0),P([[-.18,-.6],[.18,-.6]],0,0)]},
 prodip(){const bowl=bez([-.75,0],[-.65,.5],[.35,.5],[.8,-.02],16).concat(bez([.8,-.02],[.4,.06],[-.3,.06],[-.75,0],12).slice(1,-1));
  return [P(bowl,1,1),P(drop(.74,-.32,.24),1,0),P(drop(.74,-.26,.1),1,1),P(ell(0,.5,.32,.07,0,20),1,0),P([[-.1,.38],[-.12,.45]],0,0),P([[.1,.38],[.12,.45]],0,0)]},
 ayna(){const o=[P(circ(0,-.3,.6,48),1,0),P(circ(0,-.3,.45,40),1,0)];for(let k=0;k<16;k++){const a=k*Math.PI/8;o.push(P(circ(.525*Math.cos(a),-.3+.525*Math.sin(a),.04,8),1,1))}
  o.push(P([[-.09,.32],[.09,.32],[.06,.92],[-.06,.92]],1,1),P(circ(0,.95,.05,10),1,1),P([[-.2,-.45],[-.05,-.6]],0,0),P([[-.25,-.3],[0,-.55]],0,0));return o},
 comb(){const o=[P(rect(-.85,-.6,.85,-.18),1,0)];for(let k=-2;k<=2;k++){const x=k*.32;o.push(P([[x,-.5],[x+.1,-.39],[x,-.28],[x-.1,-.39]],1,1))}
  for(let i=0;i<18;i++){const x=-.8+i*.094;o.push(P([[x,-.18],[x,.65]],0,0))}return o},
 chhata(){const top=[];for(let i=0;i<=24;i++){const a=Math.PI+i/24*Math.PI;top.push([.9*Math.cos(a),-.05+.8*Math.sin(a)])}
  for(let j=0;j<4;j++)for(let i=1;i<=8;i++){const u=i/8,x=.9-j*.45-.45*u;if(!(j===3&&i===8))top.push([x,-.05-.1*Math.sin(Math.PI*u)])}
  const o=[P(top,1,0)];for(let j=1;j<4;j++){const x=.9-j*.45;o.push(P(bez([0,-.85],[x*.4,-.8],[x*.85,-.45],[x,-.05],10),0,0))}
  o.push(P([[0,-.85],[0,.75]],0,0),P(bez([0,.75],[0,.98],[-.28,.98],[-.28,.78],8),0,0),P([[0,-.85],[0,-.98]],0,0));return o},
 ghor(){const roof=bez([-.98,.02],[-.8,-.3],[-.6,-.62],[-.32,-.72],10).concat(bez([.32,-.72],[.6,-.62],[.8,-.3],[.98,.02],10),bez([.98,.02],[.5,-.14],[-.5,-.14],[-.98,.02],12).slice(1,-1));
  const o=[P(roof,1,1),P(rect(-.72,-.08,.72,.75),1,0),P(rect(-.17,.25,.17,.75),1,1),P([[-.88,.82],[.88,.82]],0,0)];
  [-1,1].forEach(s=>{o.push(P(rect(s>0?.33:-.55,.12,s>0?.55:-.33,.34),1,0));o.push(P([[s*.44,.12],[s*.44,.34]],0,0));o.push(P([[s*.33,.23],[s*.55,.23]],0,0))});return o},
 kanchi(){return [P(circ(-.32,.62,.2,24),1,0),P(circ(.32,.62,.2,24),1,0),P(circ(-.32,.62,.1,14),1,0),P(circ(.32,.62,.1,14),1,0),
  P([[-.22,.45],[-.1,.44],[.32,-.92],[.22,-.9]],1,1),P([[.22,.45],[.1,.44],[-.32,-.92],[-.22,-.9]],1,1),P(circ(0,.08,.05,10),1,0)]},
 harikane(){const hd=[];for(let i=0;i<=16;i++){const a=Math.PI+i/16*Math.PI;hd.push([.22*Math.cos(a),-.72+.22*Math.sin(a)])}
  const o=[P(hd,0,0),P([[-.28,-.7],[.28,-.7],[.4,-.52],[-.4,-.52]],1,1),P(ell(0,-.08,.36,.42,0,36),1,0),P(drop(0,-.08,.17),1,1)];
  [-1,1].forEach(s=>o.push(P(bez([s*.3,-.52],[s*.6,-.4],[s*.6,.25],[s*.32,.36],12),0,0)));o.push(P(rect(-.48,.36,.48,.6),1,1),P(rect(-.38,.6,.38,.7),1,0));return o},
 jhuri(){const o=[P([[-.8,-.18],[.8,-.18],[.55,.78],[-.55,.78]],1,0),P(ell(0,-.18,.8,.1,0,32),1,0)];
  [.08,.34,.6].forEach(y=>{const hw=.8-.25*((y+.18)/.96)-.03;o.push(P([[-hw,y],[hw,y]],0,0))});for(let k=-3;k<=3;k++)o.push(P([[k*.22,-.08],[k*.15,.76]],0,0));
  o.push(P(bez([-.75,-.22],[-.6,-1.05],[.6,-1.05],[.75,-.22],16),0,0));return o},
 charka(){const cx=-.25,cy=-.15,R=.6,o=[P(circ(cx,cy,R,44),1,0),P(circ(cx,cy,R-.08,40),1,0),P(circ(cx,cy,.08,12),1,1)];
  for(let k=0;k<8;k++){const a=k*Math.PI/4;o.push(P([[cx+.08*Math.cos(a),cy+.08*Math.sin(a)],[cx+(R-.08)*Math.cos(a),cy+(R-.08)*Math.sin(a)]],0,0))}
  o.push(P([[cx,cy],[-.7,.85]],0,0),P([[cx,cy],[.2,.85]],0,0),P([[-.9,.85],[.95,.85]],0,0),P([[.6,.45],[.95,.45]],0,0),P([[.75,.45],[.75,.85]],0,0),P(bez([cx,cy-R],[.4,-.7],[.8,0],[.66,.43],12),0,0),P(ell(.9,.45,.07,.1,0,12),1,1));return o},
 needle(){const b=[-.65,.75],t=[.85,-.95],dx=t[0]-b[0],dy=t[1]-b[1],l=Math.hypot(dx,dy),nx=-dy/l*.05,ny=dx/l*.05,a=Math.atan2(dy,dx),e=[b[0]+dx/l*.13,b[1]+dy/l*.13];
  return [P([[b[0]+nx,b[1]+ny],t,[b[0]-nx,b[1]-ny]],1,0),P(ell(e[0],e[1],.06,.018,a,12),1,0),P(bez(e,[-.2,.98],[.5,.98],[.55,.45],14).concat(bez([.55,.45],[.6,.1],[.1,.2],[.3,.6],12).slice(1)),0,0)]},

 /* jewellery */
 nath(){const o=[P(circ(0,0,.62,44),1,0),P(circ(0,0,.54,40),1,0)];for(let k=0;k<7;k++){const a=Math.PI*(.2+k*.1);o.push(P(circ(.58*Math.cos(a),.58*Math.sin(a),.06,10),1,1))}
  o.push(P(drop(0,.8,.13),1,1));const ch=bez([.42,-.45],[.6,-.7],[.75,-.85],[.95,-.95],10);o.push(P(ch,0,0));[3,6,9].forEach(i=>o.push(P(circ(ch[i][0],ch[i][1],.035,8),1,1)));return o},
 churi(){const o=[];[-.38,0,.38].forEach((x,i)=>{o.push(P(circ(x,0,.55,40),1,0),P(circ(x,0,.45,36),1,0));for(let k=0;k<12;k++){const a=k*Math.PI/6+i*.2;o.push(P(circ(x+.5*Math.cos(a),.5*Math.sin(a),.025,6),1,1))}});return o},
 jhumka(){const o=[];for(let k=0;k<6;k++)o.push(P(mv(rotp(petal(.03,.18,.07,8),k*Math.PI/3),0,-.78),1,1));o.push(P(circ(0,-.78,.04,8),1,1),P([[0,-.58],[0,-.38]],0,0));
  const d=[];for(let i=0;i<=24;i++){const a=Math.PI+i/24*Math.PI;d.push([.55*Math.cos(a),.22+.6*Math.sin(a)])}o.push(P(d,1,0));
  [.72,.45].forEach(f=>o.push(P(d.map(([x,y])=>[x*f,.22+(y-.22)*f]),0,0)));for(let k=-4;k<=4;k++){const x=k*.12;o.push(P([[x,.22],[x,.34]],0,0),P(drop(x,.44,.07),1,1))}return o},
 haar(){const ch=bez([-.85,-.85],[-.75,.1],[.75,.1],[.85,-.85],30),o=[P(ch,0,0)];for(let i=2;i<ch.length-1;i+=2)o.push(P(circ(ch[i][0],ch[i][1],.045,8),1,1));
  o.push(P([[0,-.13],[0,-.04]],0,0),P(drop(0,.26,.28),1,0),P(drop(0,.31,.13),1,1),P(drop(-.32,.0,.08),1,1),P(drop(.32,.0,.08),1,1));return o},

 /* music and play */
 ektara(){return [P(circ(0,.52,.4,36),1,0),P(circ(0,.52,.22,24),1,0),P(bez([-.3,.26],[-.25,-.2],[-.1,-.6],[0,-.88],12),0,0),P(bez([.3,.26],[.25,-.2],[.1,-.6],[0,-.88],12),0,0),
  P([[0,-.88],[0,.52]],0,0),P([[-.15,-.82],[.15,-.82]],0,0),P(circ(0,-.93,.05,10),1,1)]},
 dhol(){const z=[];for(let i=0;i<=10;i++)z.push([-.55+1.1*i/10,i%2?.44:-.44]);
  return [P(ell(-.62,0,.18,.48,0,28),1,0),P(ell(.62,0,.18,.48,0,28),1,0),P(bez([-.62,-.48],[-.2,-.58],[.2,-.58],[.62,-.48],12),0,0),P(bez([-.62,.48],[-.2,.58],[.2,.58],[.62,.48],12),0,0),P(z,0,0),
   P([[-.4,-.66],[-.82,-.96]],0,0),P([[.4,-.66],[.82,-.96]],0,0),P(circ(-.4,-.66,.05,10),1,1),P(circ(.4,-.66,.05,10),1,1)]},
 bashi(){const a=Math.atan2(-.9,1.8),len=Math.hypot(1.8,.9)/2,w=.07,at=(x,y)=>rotp([[x,y]],a)[0],o=[P(rotp(rect(-len,-w,len,w),a),1,0)];
  for(let k=0;k<6;k++){const [x,y]=at(.1+k*.12,0);o.push(P(circ(x,y,.028,8),1,1))}{const [x,y]=at(-len+.42,0);o.push(P(circ(x,y,.035,8),1,0))}
  [-len+.12,-len+.2,len-.12].forEach(x=>o.push(P([at(x,-w),at(x,w)],0,0)));const E=at(-len,0);[-.06,0,.06].forEach(d=>o.push(P([E,[E[0]+d,E[1]+.32]],0,0)));return o},
 ghuri(){const t=[];for(let i=0;i<=20;i++){const u=i/20;t.push([.05*Math.sin(u*Math.PI*3)+u*.25,.5+u*.48])}
  const o=[P([[0,-.95],[.6,-.2],[0,.5],[-.6,-.2]],1,0),P([[0,-.95],[0,.5]],0,0),P(bez([-.6,-.2],[-.2,-.32],[.2,-.32],[.6,-.2],10),0,0),P([[0,-.32],[.15,-.12],[0,.08],[-.15,-.12]],1,1),P(t,0,0)];
  [7,14].forEach(i=>{const [x,y]=t[i];o.push(P([[x,y],[x-.12,y-.06],[x-.12,y+.06]],1,1),P([[x,y],[x+.12,y-.06],[x+.12,y+.06]],1,1))});return o},
 lattu(){const R=bez([.5,-.35],[.5,.1],[.12,.5],[0,.92],16),body=R.concat(R.slice(0,-1).reverse().map(([x,y])=>[-x,y])),w=[];for(let i=0;i<=12;i++)w.push([-.4+.8*i/12,.03+.05*Math.sin(i*Math.PI/2)]);
  return [P(body,1,0),P(ell(0,-.35,.5,.12,0,28),1,0),P(rect(-.07,-.7,.07,-.45),1,1),P([[-.44,-.1],[.44,-.1]],0,0),P([[-.34,.16],[.34,.16]],0,0),P(w,0,0)]},

 /* patterns */
 chakra(){const o=[P(circ(0,0,.95,56),1,0),P(circ(0,0,.8,50),1,0),P(circ(0,0,.15,14),1,1)];for(let k=0;k<16;k++){const a=k*Math.PI/8,b=a+Math.PI/16;
  o.push(P([[.15*Math.cos(a),.15*Math.sin(a)],[.8*Math.cos(a),.8*Math.sin(a)]],0,0),P(circ(.875*Math.cos(b),.875*Math.sin(b),.03,8),1,1))}return o},
 hira(){const d=r=>[[0,-r],[r,0],[0,r],[-r,0]],o=[P(d(.95),1,0),P(d(.75),1,0),P(d(.55),1,0),P(d(.33),1,1)];[[0,-1],[1,0],[0,1],[-1,0]].forEach(([x,y])=>o.push(P(circ(x*.65,y*.65,.04,8),1,1)));return o},
 spiral(){const o=[];[0,Math.PI].forEach(ph=>{const p=[];for(let i=0;i<=80;i++){const t=i/80*Math.PI*4.5,r=.04+.85*i/80;p.push([r*Math.cos(t+ph),r*Math.sin(t+ph)])}o.push(P(p,0,0))});return o},
 rings(){const o=[];[.95,.75,.55,.35].forEach(r=>o.push(P(circ(0,0,r,Math.round(r*56)+8),1,0)));o.push(P(circ(0,0,.14,14),1,1));
  for(let k=0;k<12;k++){const a=k*Math.PI/6;o.push(P(circ(.85*Math.cos(a),.85*Math.sin(a),.035,8),1,1),P(circ(.45*Math.cos(a+Math.PI/12),.45*Math.sin(a+Math.PI/12),.03,8),1,1))}return o},
 mandala(){const o=[];for(let k=0;k<12;k++)o.push(P(rotp(petal(.48,.97,.14,10),k*Math.PI/6),1,0));for(let k=0;k<12;k++)o.push(P(rotp(petal(.2,.46,.08,8),k*Math.PI/6+Math.PI/12),1,1));
  o.push(P(circ(0,0,.47,40),1,0));for(let k=0;k<6;k++)o.push(P(rotp(petal(.02,.18,.06,8),k*Math.PI/3),1,1));return o},
 vineRing(){const o=[P(circ(0,0,.66,64),1,0),P(circ(0,0,.99,80),1,0)],v=[];for(let i=0;i<=144;i++){const a=i/144*Math.PI*2,r=.825+.06*Math.sin(a*12);v.push([r*Math.cos(a),r*Math.sin(a)])}o.push(P(v,0,0));
  for(let k=0;k<24;k++){const a=Math.PI/24+k*Math.PI/12,r=k%2?.73:.92;o.push(P(ell(r*Math.cos(a),r*Math.sin(a),.065,.026,a+Math.PI/2+(k%2?-.5:.5),14),1,1))}return o},
 star8(){const sq=(r,a)=>rotp([[r,0],[0,r],[-r,0],[0,-r]],a),s=[];for(let k=0;k<16;k++){const a=k*Math.PI/8,r=k%2?.26:.4;s.push([r*Math.cos(a),r*Math.sin(a)])}
  return [P(sq(.95,0),1,0),P(sq(.95,Math.PI/4),1,0),P(circ(0,0,.52,36),1,0),P(s,1,1)]}
};
function broad(r0,r1,w,a){const up=[],dn=[];for(let i=0;i<=16;i++){const u=i/16,x=r0+(r1-r0)*u,y=w*Math.pow(u,.6)*Math.sqrt(Math.max(0,1-Math.pow(u,4)));up.push([x,y]);dn.push([x,-y])}return rotp(up.concat(dn.reverse().slice(1,-1)),a)}
function rect(x0,y0,x1,y1){return [[x0,y0],[x1,y0],[x1,y1],[x0,y1]]}
function rpetal(r0,r1,w,a,cx,cy){const pts=[];for(let i=0;i<=20;i++){const t=-1+i/10,x=r0+(r1-r0)*Math.sqrt(Math.max(0,1-t*t))-(r1-r0)*.12*Math.exp(-((t/.18)**2));pts.push([x,w*t])}return mv(rotp(pts,a),cx,cy)}
function drop(cx,cy,r){const p=[];for(let i=0;i<24;i++){const t=i/24*Math.PI*2;p.push([cx+r*Math.sin(t)*Math.sin(t/2)*1.1,cy-r*Math.cos(t)])}return p}
function star5(cx,cy,R,r){const p=[];for(let k=0;k<10;k++){const a=-Math.PI/2+k*Math.PI/5,rr=k%2?r:R;p.push([cx+rr*Math.cos(a),cy+rr*Math.sin(a)])}return p}
function crescent(cx,cy,R,rot){const d=.45*R,r=.8*R,xi=(d*d+R*R-r*r)/(2*d),yi=Math.sqrt(Math.max(0,R*R-xi*xi)),t0=Math.atan2(yi,xi),f0=Math.atan2(yi,xi-d),p=[];
  for(let i=0;i<=24;i++){const a=t0+(2*Math.PI-2*t0)*i/24;p.push([R*Math.cos(a),R*Math.sin(a)])}
  for(let i=1;i<24;i++){const a=(2*Math.PI-f0)-(2*Math.PI-2*f0)*i/24;p.push([d+r*Math.cos(a),r*Math.sin(a)])}return mv(rotp(p,rot),cx,cy)}
function crescentRows(cx,cy,R,rot,n){const d=.45*R,r=.8*R,out=[];
  for(let k=1;k<=n;k++){const f=k/(n+1),c=d*f,rr=R+(r-R)*f,pts=[];
    for(let i=0;i<=60;i++){const a=Math.PI/2+i/60*Math.PI,x=c+rr*Math.cos(a),y=rr*Math.sin(a);if(Math.hypot(x,y)<=R*.985&&Math.hypot(x-d,y)>=r*1.015)pts.push([x,y])}
    if(pts.length>2)out.push(mv(rotp(pts,rot),cx,cy))}return out}
function cloudPts(cx,cy,s){const C=[[.6,.1,.27],[.25,-.15,.4],[-.2,-.1,.35],[-.6,.08,.27]],p=[];
  for(let i=0;i<=40;i++){const x=-.85+1.7*i/40;let y=.3;C.forEach(([a,b,r])=>{const dx=x-a;if(Math.abs(dx)<r)y=Math.min(y,b-Math.sqrt(r*r-dx*dx))});p.push([x,y])}
  p.push([.85,.3],[-.85,.3]);return p.map(([x,y])=>[cx+x*s,cy+y*s])}
function chordE(cx,cy,a,b,px,py,dx,dy){const X=px-cx,Y=py-cy,A=dx*dx/(a*a)+dy*dy/(b*b),B=2*(X*dx/(a*a)+Y*dy/(b*b)),C=X*X/(a*a)+Y*Y/(b*b)-1,D=B*B-4*A*C;if(D<=0)return null;
  const s=Math.sqrt(D),m=-B/(2*A),h=s/(2*A)*.92;return [[px+dx*(m-h),py+dy*(m-h)],[px+dx*(m+h),py+dy*(m+h)]]}



/* ---------- more motif helpers ---------- */
const va=(p,k,d)=>p&&p[k]!=null?p[k]:d;
function rep(n,fn,a0){const o=[];for(let k=0;k<n;k++){const r=fn((a0||0)+k*2*Math.PI/n,k);for(const q of r)o.push(q)}return o}
function bend(pts,c){return pts.map(([x,y])=>{const t=c*x,cs=Math.cos(t),sn=Math.sin(t);return[x*cs-y*sn,x*sn+y*cs]})}
function leafShape(len,w,n){n=n||12;const up=[],dn=[];for(let i=0;i<=n;i++){const u=i/n,x=u*len,y=w*Math.sin(Math.PI*u)*(1-.2*u);up.push([x,y]);dn.push([x,-y])}return up.concat(dn.reverse().slice(1,-1))}
function leafAt(x,y,len,w,a,f){return[P(mv(rotp(leafShape(len,w),a),x,y),1,f==null?1:f),P([[x,y],[x+Math.cos(a)*len*.85,y+Math.sin(a)*len*.85]],0,0)]}
function arcP(cx,cy,r,a0,a1,n){n=n||24;const o=[];for(let i=0;i<=n;i++){const a=a0+(a1-a0)*i/n;o.push([cx+r*Math.cos(a),cy+r*Math.sin(a)])}return o}
function earc(cx,cy,rx,ry,a0,a1,n){n=n||24;const o=[];for(let i=0;i<=n;i++){const a=a0+(a1-a0)*i/n;o.push([cx+rx*Math.cos(a),cy+ry*Math.sin(a)])}return o}
function poly(n,R,a0,cx,cy){const o=[];for(let k=0;k<n;k++){const a=(a0==null?-Math.PI/2:a0)+k*2*Math.PI/n;o.push([(cx||0)+R*Math.cos(a),(cy||0)+R*Math.sin(a)])}return o}
function starP(n,R,r,cx,cy,a0){const o=[];for(let k=0;k<2*n;k++){const a=(a0==null?-Math.PI/2:a0)+k*Math.PI/n,q=k%2?r:R;o.push([(cx||0)+q*Math.cos(a),(cy||0)+q*Math.sin(a)])}return o}
function wave(x0,x1,y,amp,cyc,n){n=n||Math.max(20,Math.round(cyc*12));const o=[];for(let i=0;i<=n;i++){const u=i/n;o.push([x0+(x1-x0)*u,y+amp*Math.sin(u*cyc*2*Math.PI)])}return o}
function scl(pts,k,cx,cy){return pts.map(([x,y])=>[cx+(x-cx)*k,cy+(y-cy)*k])}
function cen(pts){let x=0,y=0;for(const p of pts){x+=p[0];y+=p[1]}return[x/pts.length,y/pts.length]}
function inner(pts,k){const c=cen(pts);return scl(pts,k,c[0],c[1])}
function tf(list,s,x,y,a){const c=Math.cos(a||0),sn=Math.sin(a||0);return list.map(q=>({p:q.p.map(([px,py])=>[x+s*(px*c-py*sn),y+s*(px*sn+py*c)]),c:q.c,f:q.f}))}
function M(name,s,x,y,a,p){return tf(MOTIF[name](p),s,x,y,a)}
function hatch(pg,gap,ang){const c=Math.cos(ang),s=Math.sin(ang),r=pg.map(([x,y])=>[x*c+y*s,-x*s+y*c]);let y0=1e9,y1=-1e9;for(const p of r){y0=Math.min(y0,p[1]);y1=Math.max(y1,p[1])}const out=[];
  for(let y=y0+gap/2;y<y1;y+=gap){const xs=[];for(let i=0,j=r.length-1;i<r.length;j=i++){const a=r[j],b=r[i];if((a[1]>y)!==(b[1]>y))xs.push(a[0]+(y-a[1])*(b[0]-a[0])/(b[1]-a[1]))}xs.sort((a,b)=>a-b);
    for(let k=0;k+1<xs.length;k+=2){const xa=xs[k]+gap*.2,xb=xs[k+1]-gap*.2;if(xb>xa)out.push(P([[xa*c-y*s,xa*s+y*c],[xb*c-y*s,xb*s+y*c]],0,0))}}return out}
function dotsIn(pg,gap,r){let x0=1e9,y0=1e9,x1=-1e9,y1=-1e9;for(const [x,y] of pg){x0=Math.min(x0,x);y0=Math.min(y0,y);x1=Math.max(x1,x);y1=Math.max(y1,y)}const o=[];let row=0;
  for(let y=y0+gap/2;y<y1;y+=gap,row++)for(let x=x0+gap/2+(row%2)*gap/2;x<x1;x+=gap)if(inPoly(x,y,pg))o.push(P(circ(x,y,r,8),1,1));return o}
function heartP(cx,cy,s,n){n=n||48;const o=[];for(let i=0;i<n;i++){const t=i/n*Math.PI*2,x=16*Math.pow(Math.sin(t),3),y=13*Math.cos(t)-5*Math.cos(2*t)-2*Math.cos(3*t)-Math.cos(4*t);o.push([cx+s*x/17,cy-s*(y+2.5)/17])}return o}
function miniFl(cx,cy,r,n,kind){n=n||5;const o=[];for(let k=0;k<n;k++){const a=k*2*Math.PI/n-Math.PI/2;
  if(kind==='pt')o.push(P(mv(rotp(petal(r*.15,r,Math.min(r*.42,r*2.1/n),8),a),cx,cy),1,1));else o.push(P(circ(cx+r*.55*Math.cos(a),cy+r*.55*Math.sin(a),r*.55*Math.sin(Math.PI/n),12),1,1))}
  o.push(P(circ(cx,cy,r*.22,10),1,1));return o}
function lis(a,b,ph,R,n){n=n||160;const o=[];for(let i=0;i<n;i++){const t=i/n*2*Math.PI;o.push([R*Math.sin(a*t+ph),R*Math.sin(b*t)])}return o}
function lobes(n){const q=[],q2=[];for(let i=0;i<=120;i++){const t=i/120*2*Math.PI,r=.55+.4*Math.pow(Math.abs(Math.cos(n*(t+Math.PI/2)/2)),.7);q.push([r*Math.cos(t),r*Math.sin(t)]);q2.push([r*.6*Math.cos(t),r*.6*Math.sin(t)])}return[P(q,1,0),P(q2,1,0),P(circ(0,0,.12,12),1,1)]}
function stepD(R,m){const q=[],h=R/m;for(let i=0;i<m;i++)q.push([i*h,-R+i*h],[(i+1)*h,-R+i*h]);q.push([R,0]);const all=[];
  for(let k=0;k<4;k++){const c=Math.round(Math.cos(k*Math.PI/2)),s=Math.round(Math.sin(k*Math.PI/2));q.forEach(([x,y],i)=>{if(k>0&&i===0)return;if(k===3&&i===q.length-1)return;all.push([x*c-y*s,x*s+y*c])})}return all}
function bananaP(x,y,l,a){const o=bez([0,0],[l*.3,l*.28],[l*.75,l*.3],[l,.02],12).concat(bez([l,.02],[l*.75,l*.12],[l*.3,l*.1],[0,0],12).slice(1,-1));return mv(rotp(o,a),x,y)}
function feathers(list,n,f){return list}

/* motifs that take variation settings: [label, min, max, default, step] */
const VAR={lotus:[['petals',6,16,8],['layers',1,3,2]],shapla:[['petals',8,20,12]],flower:[['petals',4,8,5]],jasmine:[['petals',5,10,6]],marigold:[['rings',2,6,4]],
 sunflower:[['petals',12,32,20]],kadam:[['spikes',16,48,36]],crossFlower:[['petals',3,8,4]],sun:[['rays',8,32,16]],star:[['points',5,12,8]],chakra:[['spokes',6,24,16]],
 mandala:[['petals',6,20,12],['layers',1,3,2]],rings:[['rings',2,6,4]],vineRing:[['leaves',8,40,24,2]],tree:[['branches',2,6,4]],sprig:[['leaves',3,10,6]],
 spiral:[['turns',1,5,2.25,.25]],hira:[['rings',2,6,4]],star8:[['points',8,16,8,2]],
 bakul:[['petals',12,24,16]],rajanigandha:[['flowers',3,9,6]],dahlia:[['layers',1,3,3]],chrysanthemum:[['petals',20,48,32]],daisy:[['petals',10,24,16]],cosmos:[['petals',6,12,8]],
 gardenia:[['petals',8,24,14]],garland:[['flowers',5,15,9]],neem:[['leaves',4,10,7]],sunWave:[['rays',6,20,12]],rainbow:[['bands',3,8,5]],riverWaves:[['rows',2,6,4]],ripples:[['rings',2,7,4]],
 cartwheel:[['spokes',6,20,12]],balloon:[['count',1,5,3]],bunting:[['flags',4,12,7]],peacockFan:[['feathers',3,9,5]],featherWreath:[['feathers',6,14,8]],
 star7:[['points',5,12,7]],girih:[['points',6,12,8]],hexagon:[['rings',1,5,3]],octagon:[['rings',1,5,3]],squares:[['squares',3,10,6]],chevron:[['rows',2,7,4]],zigzagPatch:[['rows',2,8,5]],
 wavesPatch:[['rows',2,8,5]],whirl:[['arms',2,6,3]],quatrefoil:[['lobes',3,8,4]],trefoil:[['lobes',3,8,3]],stepDiamond:[['steps',2,7,4]],mandala2:[['petals',6,16,10]],sunburst:[['rays',12,48,24,2]]};

/* existing motifs, now with variations (defaults draw exactly as before) */
Object.assign(MOTIF,{
 lotus(p){const n=va(p,'a',8),L=va(p,'b',2),w=Math.min(.34,2.4/n),o=[];for(let k=0;k<n;k++){const a=k*2*Math.PI/n;o.push(P(rotp(petal(.24,1,w),a),1,1));if(L>=2)o.push(P(rotp(petal(.24,.62,w*.53,10),a+Math.PI/n),1,1));if(L>=3)o.push(P(rotp(petal(.22,.44,w*.4,8),a),1,1))}o.push(P(circ(0,0,.19,30),1,1));return o},
 shapla(p){const n=va(p,'a',12),m=Math.round(n*2/3),o=[];for(let k=0;k<n;k++)o.push(P(rotp(petal(.22,1,Math.min(.16,1.56/n),12),k*2*Math.PI/n),1,0));for(let k=0;k<m;k++)o.push(P(rotp(petal(.12,.62,Math.min(.16,1.04/m),10),k*2*Math.PI/m+Math.PI/m),1,1));o.push(P(circ(0,0,.13,16),1,1));return o},
 flower(p){const n=va(p,'a',5),r=.55*Math.sin(Math.PI/n)*1.0,o=[];for(let k=0;k<n;k++){const a=k*2*Math.PI/n-Math.PI/2;o.push(P(circ(.55*Math.cos(a),.55*Math.sin(a),r,24),1,1))}o.push(P(circ(0,0,.2,18),1,1));return o},
 jasmine(p){const n=va(p,'a',6),o=[];for(let k=0;k<n;k++)o.push(P(rotp(petal(.1,.92,Math.min(.24,1.2/n),12),k*2*Math.PI/n-Math.PI/2),1,1));o.push(P(circ(0,0,.12,14),1,1));return o},
 marigold(p){const R=va(p,'a',4),o=[];for(let i=0;i<R;i++){const r=R>1?.95-i*.65/(R-1):.95,n=R>1?Math.round(22-i*12/(R-1)):22,q=[];for(let j=0;j<n*6;j++){const a=j/(n*6)*Math.PI*2,rr=r-.07*Math.abs(Math.sin(a*n/2));q.push([rr*Math.cos(a+i*.2),rr*Math.sin(a+i*.2)])}o.push(P(q,1,0))}o.push(P(circ(0,0,.12,14),1,1));return o},
 sunflower(p){const n=va(p,'a',20),o=[];for(let k=0;k<n;k++)o.push(P(rotp(petal(.42,1,Math.min(.16,2.4/n),10),k*2*Math.PI/n),1,1));o.push(P(circ(0,0,.4,36),1,0));
  for(let i=-2;i<=2;i++)for(let j=-2;j<=2;j++){const x=i*.12,y=j*.12;if(x*x+y*y<.09){o.push(P([[x-.03,y-.03],[x+.03,y+.03]],0,0));o.push(P([[x-.03,y+.03],[x+.03,y-.03]],0,0))}}return o},
 kadam(p){const n=va(p,'a',36),o=[P(circ(0,0,.42,32),1,1)];for(let k=0;k<n;k++){const a=k*2*Math.PI/n;o.push(P([[.5*Math.cos(a),.5*Math.sin(a)],[.8*Math.cos(a),.8*Math.sin(a)]],0,0));o.push(P(circ(.87*Math.cos(a),.87*Math.sin(a),.035,8),1,0))}return o},
 crossFlower(p){const n=va(p,'a',4),o=[];for(let k=0;k<n;k++){o.push(P(rotp(petal(.12,.9,Math.min(.34,1.2/n),14),k*2*Math.PI/n),1,1));o.push(P(rotp(petal(.2,.62,Math.min(.14,.48/n),10),k*2*Math.PI/n+Math.PI/n),1,0))}o.push(P(circ(0,0,.13,14),1,1));return o},
 sun(p){const n=va(p,'a',16),o=[P(circ(0,0,.36,40),1,1)],w=Math.PI/n*.55;for(let k=0;k<n;k++){const a=k*2*Math.PI/n,l=(n%2===0&&k%2)?.78:.98;o.push(P([[.46*Math.cos(a-w),.46*Math.sin(a-w)],[l*Math.cos(a),l*Math.sin(a)],[.46*Math.cos(a+w),.46*Math.sin(a+w)]],1,0))}return o},
 star(p){const n=va(p,'a',8);return [P(starP(n,1,.42,0,0,0),1,1),P(circ(0,0,.18,14),1,0)]},
 chakra(p){const n=va(p,'a',16),o=[P(circ(0,0,.95,56),1,0),P(circ(0,0,.8,50),1,0),P(circ(0,0,.15,14),1,1)];for(let k=0;k<n;k++){const a=k*2*Math.PI/n,b=a+Math.PI/n;
  o.push(P([[.15*Math.cos(a),.15*Math.sin(a)],[.8*Math.cos(a),.8*Math.sin(a)]],0,0),P(circ(.875*Math.cos(b),.875*Math.sin(b),.03,8),1,1))}return o},
 mandala(p){const n=va(p,'a',12),L=va(p,'b',2),o=[];for(let k=0;k<n;k++)o.push(P(rotp(petal(.48,.97,Math.min(.2,1.68/n),10),k*2*Math.PI/n),1,0));
  if(L>=2){for(let k=0;k<n;k++)o.push(P(rotp(petal(.2,.46,Math.min(.12,.96/n),8),k*2*Math.PI/n+Math.PI/n),1,1));o.push(P(circ(0,0,.47,40),1,0))}
  if(L>=3)for(let k=0;k<n;k++){const a=k*2*Math.PI/n+Math.PI/n;o.push(P(circ(.9*Math.cos(a),.9*Math.sin(a),.035,6),1,1))}
  for(let k=0;k<6;k++)o.push(P(rotp(petal(.02,.18,.06,8),k*Math.PI/3),1,1));return o},
 rings(p){const R=va(p,'a',4),o=[];for(let i=0;i<R;i++){const r=R>1?.95-i*.6/(R-1):.95;o.push(P(circ(0,0,r,Math.round(r*56)+8),1,0))}o.push(P(circ(0,0,.14,14),1,1));
  for(let k=0;k<12;k++){const a=k*Math.PI/6;o.push(P(circ(.85*Math.cos(a),.85*Math.sin(a),.035,8),1,1),P(circ(.45*Math.cos(a+Math.PI/12),.45*Math.sin(a+Math.PI/12),.03,8),1,1))}return o},
 vineRing(p){const L=va(p,'a',24),o=[P(circ(0,0,.66,64),1,0),P(circ(0,0,.99,80),1,0)],v=[];for(let i=0;i<=144;i++){const a=i/144*Math.PI*2,r=.825+.06*Math.sin(a*L/2);v.push([r*Math.cos(a),r*Math.sin(a)])}o.push(P(v,0,0));
  for(let k=0;k<L;k++){const a=Math.PI/L+k*2*Math.PI/L,r=k%2?.73:.92;o.push(P(ell(r*Math.cos(a),r*Math.sin(a),Math.min(.065,1.56/L),Math.min(.026,.62/L),a+Math.PI/2+(k%2?-.5:.5),14),1,1))}return o},
 tree(p){const B=va(p,'a',4),o=[P([[0,.95],[0,-.8]],0,0)];for(let i=0;i<B;i++){const t=B>1?i/(B-1):0,y=.55-t*1.0,w=.55-t*.25;[-1,1].forEach(s=>{const end=[s*w,y-.22];o.push(P(bez([0,y],[s*w*.4,y],[s*w*.8,y-.05],end,8),0,0));
   o.push(P(ell(end[0]+s*.07,end[1]-.06,.13,.065,s>0?-0.6:Math.PI+0.6,20),1,1))})}
  o.push(P(ell(0,-.88,.08,.14,0,20),1,1));o.push(P([[-.3,.95],[.3,.95],[.2,.75],[-.2,.75]],1,1));return o},
 sprig(p){const n=va(p,'a',6),st=bez([0,.98],[.05,.4],[-.05,-.2],[0,-.95],20),o=[P(st,0,0)];for(let k=1;k<=n;k++){const i=Math.round(k*18/(n+1))+1,[x,y]=st[i];[-1,1].forEach(s=>o.push(P(mv(rotp(petal(0,.36-i*.008,.1,10),-Math.PI/2+s),x,y),1,1)))}
  o.push(P(mv(rotp(petal(0,.25,.08,10),-Math.PI/2),0,-.95),1,1));return o},
 spiral(p){const T=va(p,'a',2.25),o=[];[0,Math.PI].forEach(ph=>{const q=[],N=Math.round(36*T);for(let i=0;i<=N;i++){const t=i/N*Math.PI*2*T,r=.04+.85*i/N;q.push([r*Math.cos(t+ph),r*Math.sin(t+ph)])}o.push(P(q,0,0))});return o},
 hira(p){const R=va(p,'a',4),d=r=>[[0,-r],[r,0],[0,r],[-r,0]],o=[];for(let i=0;i<R;i++){const r=.95-i*(R>1?.62/(R-1):0);o.push(P(d(r),1,i===R-1?1:0))}[[0,-1],[1,0],[0,1],[-1,0]].forEach(([x,y])=>o.push(P(circ(x*.65,y*.65,.04,8),1,1)));return o},
 star8(p){const n=va(p,'a',8),m=n/2;return [P(poly(m,.95,0),1,0),P(poly(m,.95,Math.PI/m),1,0),P(circ(0,0,.52,36),1,0),P(starP(n,.4,.26,0,0,0),1,1)]}
});


/* ---------- flowers ---------- */
Object.assign(MOTIF,{
 champa(){const o=rep(5,a=>[P(rotp(bend(broad(.05,.95,.36,0),.55),a),1,0),P(rotp(bend(broad(.22,.72,.15,0),.55),a),1,0)],-Math.PI/2);o.push(P(circ(0,0,.12,14),1,1));return o},
 bakul(p){const n=va(p,'a',16),o=rep(n,a=>[P(rotp(petal(.3,.88,Math.min(.1,1.4/n),8),a),1,1)]);o.push(P(circ(0,0,.3,30),1,0),...rep(8,a=>[P(circ(.18*Math.cos(a),.18*Math.sin(a),.05,8),1,1)]),P(circ(0,0,.07,8),1,1));return o},
 shiuli(){const o=rep(7,a=>[P(mv(rotp(bend(petal(.06,.62,.17,10),.35),a),0,-.32),1,0)],-Math.PI/2);o.push(P(circ(0,-.32,.1,12),1,1),P([[-.05,-.24],[.05,-.24],[.04,.95],[-.04,.95]],1,1));return o},
 krishnachura(){const o=[];[-150,-90,-30,30,150].forEach((d,i)=>o.push(P(rpetal(.08,.8,.32,d*Math.PI/180,0,0),1,i===1?0:1)));
  [[-.08,-.45],[.08,-.4],[0,-.58]].forEach(([x,y])=>o.push(P(circ(x,y,.045,8),1,1)));
  for(let k=0;k<7;k++){const a=(70+k*7)*Math.PI/180,ex=.75*Math.cos(a)+.18,ey=.75*Math.sin(a);o.push(P(bez([0,0],[.1,.2],[ex*.6,ey*.9],[ex,ey],8),0,0),P(circ(ex,ey,.035,8),1,1))}
  o.push(P(circ(0,0,.09,10),1,1));return o},
 rajanigandha(p){const n=va(p,'a',6),o=[P([[0,.98],[0,-.92]],0,0)];
  for(let i=0;i<n;i++){const y=.42-i*(.86/Math.max(1,n-1)),s=i%2?1:-1,x=s*.17;o.push(P([[0,y+.08],[x,y]],0,0),...rep(6,a=>[P(mv(rotp(petal(.02,.15,.055,6),a),x,y),1,1)]))}
  [-.62,-.74,-.86].forEach((y,i)=>o.push(P(ell(i%2?.07:-.07,y,.04,.08,i%2?-.4:.4,10),1,1)));
  o.push(P(bez([0,.98],[-.2,.7],[-.35,.55],[-.45,.4],8),0,0),P(bez([0,.98],[.2,.72],[.32,.6],[.42,.48],8),0,0));return o},
 shimul(){const o=[];[-60,-30,0,30,60].forEach(d=>o.push(P(mv(rotp(broad(0,.78,.26,0),-Math.PI/2+d*Math.PI/180),0,.32),1,1)));
  o.push(P(earc(0,.3,.3,.14,0,Math.PI,16),1,1));for(let k=-2;k<=2;k++){const x=k*.1;o.push(P([[k*.03,.2],[x,-.5]],0,0),P(circ(x,-.53,.035,8),1,1))}
  o.push(P(bez([0,.44],[.03,.6],[-.03,.8],[0,.98],8),0,0));return o},
 kamini(){return [...miniFl(-.38,-.18,.36,5),...miniFl(.38,-.25,.34,5),...miniFl(0,.28,.36,5),...leafAt(-.1,.62,.6,.14,2.5),...leafAt(.1,.62,.6,.14,.64)]},
 palash(){const o=[P(bez([-.95,-.7],[-.4,-.85],[.4,-.85],[.95,-.7],16),0,0)];
  [[-.55,-.78,.25],[-.05,-.82,0],[.45,-.79,-.25]].forEach(([x,y,t])=>o.push(P(mv(rotp(bend(petal(0,.95,.2,12),1.5),Math.PI/2+t),x,y),1,1),P(mv(rotp(bend(petal(0,.55,.12,10),1.8),Math.PI/2+t+.5),x,y),1,1),P(ell(x,y+.05,.08,.06,0,10),1,1)));return o},
 nayantara(){const o=rep(5,a=>[P(rotp(bend(rpetal(.06,.86,.36,0,0,0),.4),a),1,1)],-Math.PI/2);o.push(P(circ(0,0,.2,18),1,0),P(circ(0,0,.07,10),1,1));return o},
 togor(){const o=rep(5,a=>{const b=broad(.06,.92,.34,0).map(([x,y],i)=>[x,y*(1+.1*Math.sin(i*1.9))]);return[P(rotp(bend(b,.85),a),1,0)]},-Math.PI/2);o.push(P(circ(0,0,.1,12),1,1));return o},
 kolke(){const L=bez([-.06,.75],[-.08,.3],[-.3,0],[-.48,-.32],12),Rr=L.map(([x,y])=>[-x,y]).reverse(),top=[];for(let i=0;i<=30;i++){const u=i/30;top.push([-.48+.96*u,-.32-.12*Math.abs(Math.sin(u*Math.PI*2.5))])}
  return [P(L.concat(top.slice(1,-1),Rr),1,0),P(bez([0,.7],[0,.3],[-.05,0],[-.1,-.25],8),0,0),P(bez([0,.7],[0,.3],[.05,0],[.1,-.25],8),0,0),P(bez([0,.75],[.02,.85],[-.02,.92],[0,.98],6),0,0),...leafAt(0,.88,.55,.12,-.5)]},
 kolmi(){return [P(circ(0,0,.95,64),1,0),P(starP(5,.88,.3),1,1),P(circ(0,0,.22,20),1,0),P(circ(0,0,.08,10),1,1)]},
 kochuripana(){const o=[P([[0,.55],[0,-.7]],0,0)];[[0,-.72],[-.2,-.5],[.2,-.42],[-.2,-.2],[.2,-.12],[0,.05]].forEach(([x,y])=>o.push(...rep(6,a=>[P(mv(rotp(rpetal(.02,.17,.08,0,0,0),a),x,y),1,0)]),P(circ(x,y-.03,.035,8),1,1)));
  o.push(P(ell(-.35,.62,.28,.2,-.3,22),1,0),P(ell(.35,.62,.28,.2,.3,22),1,0),P(ell(-.13,.62,.09,.15,0,12),1,1),P(ell(.13,.62,.09,.15,0,12),1,1),P(wave(-.95,.95,.88,.04,4),0,0));return o},
 dahlia(p){const L=va(p,'a',3),o=[];[[8,.55,1,.2],[12,.35,.75,.13],[16,.15,.5,.08]].slice(0,L).forEach(([n,r0,r1,w],i)=>o.push(...rep(n,a=>[P(rotp(petal(r0,r1,w,10),a),1,i===L-1?1:0)],i*.2)));o.push(P(circ(0,0,.15,16),1,1));return o},
 chrysanthemum(p){const n=va(p,'a',32),o=rep(n,a=>[P(rotp(petal(.16,1,Math.min(.07,1.6/n),8),a),1,1)]);o.push(...rep(Math.round(n/2),a=>[P(rotp(petal(.1,.55,Math.min(.06,1/n),6),a),1,1)],Math.PI/n),P(circ(0,0,.13,14),1,1));return o},
 lily(){const o=rep(6,a=>[P(rotp(bend(petal(.05,.96,.22,12),.25),a),1,0),P(rotp(bend([[.12,0],[.5,0],[.85,0]],.25),a),0,0)],-Math.PI/2);
  o.push(...rep(6,a=>{const x=.55*Math.cos(a),y=.55*Math.sin(a);return[P([[0,0],[x,y]],0,0),P(ell(x,y,.06,.025,a+Math.PI/2,8),1,1)]},-Math.PI/2+Math.PI/6));return o},
 tulip(){const c=bez([-.05,.15],[-.42,.05],[-.42,-.55],[-.1,-.78],12).concat(bez([-.1,-.78],[-.02,-.6],[.02,-.6],[.1,-.78],6).slice(1),bez([.1,-.78],[.42,-.55],[.42,.05],[.05,.15],12).slice(1));
  return [P(c,1,1),P(bez([-.05,.15],[-.18,-.2],[-.12,-.5],[0,-.62],10).concat(bez([0,-.62],[.12,-.5],[.18,-.2],[.05,.15],10).slice(1)),1,0),P([[0,.15],[0,.98]],0,0),
   P(bez([0,.95],[-.35,.7],[-.45,.4],[-.3,.15],10).concat(bez([-.3,.15],[-.2,.45],[-.1,.7],[0,.95],10).slice(1)),1,1),P(bez([0,.95],[.3,.75],[.42,.5],[.32,.3],10).concat(bez([.32,.3],[.2,.55],[.1,.75],[0,.95],10).slice(1)),1,1)]},
 daisy(p){const n=va(p,'a',16),o=rep(n,a=>[P(rotp(broad(.32,.98,Math.min(.13,1.8/n),0),a),1,0)]);o.push(P(circ(0,0,.3,30),1,1));return o},
 poppy(){const o=rep(4,a=>[P(circ(.4*Math.cos(a),.4*Math.sin(a),.52,32),1,0)],Math.PI/4);o.push(P(circ(0,0,.2,18),1,1),...rep(10,a=>[P([[.22*Math.cos(a),.22*Math.sin(a)],[.42*Math.cos(a),.42*Math.sin(a)]],0,0),P(circ(.45*Math.cos(a),.45*Math.sin(a),.03,6),1,1)]));return o},
 cosmos(p){const n=va(p,'a',8),w=Math.min(.3,2.4/n),o=rep(n,a=>{const pts=[];for(let i=0;i<=20;i++){const t=-1+i/10,x=.12+.86*Math.sqrt(Math.max(0,1-t*t))-.07*Math.abs(Math.sin(3*Math.PI*t));pts.push([x,w*t])}return[P(rotp(pts,a),1,0),P(rotp([[.16,0],[.7,0]],a),0,0)]});
  o.push(P(circ(0,0,.14,14),1,1),P(circ(0,0,.22,20),1,0));return o},
 zinnia(){const o=rep(14,a=>[P(rotp(broad(.42,.98,.15,0),a),1,0)]);o.push(...rep(10,a=>[P(rotp(broad(.22,.6,.13,0),a),1,1)],.3),P(circ(0,0,.2,18),1,0),...rep(8,a=>[P(circ(.13*Math.cos(a),.13*Math.sin(a),.03,6),1,1)]));return o},
 gardenia(p){const n=va(p,'a',14),o=[];for(let k=n-1;k>=0;k--){const t=n>1?k/(n-1):1,R=.3+.65*t,w=.12+.25*t;o.push(P(rpetal(R*.25,R,w,k*2.39996,0,0),1,0))}o.push(P(circ(0,0,.07,8),1,1));return o},
 lotusBud(){return [P(mv(rotp(petal(0,1.05,.38,16),-Math.PI/2),0,.32),1,1),P(mv(rotp(petal(0,.62,.16,10),-Math.PI/2-.9),0,.3),1,1),P(mv(rotp(petal(0,.62,.16,10),-Math.PI/2+.9),0,.3),1,1),
   P(bez([0,.32],[.04,.55],[-.04,.78],[0,.98],8),0,0)]},
 halfLotus(){const o=[];[[0,.66,.17],[-.45,.62,.16],[.45,.62,.16],[-.9,.55,.15],[.9,.55,.15],[-1.3,.46,.13],[1.3,.46,.13]].forEach(([d,l,w])=>o.push(P(mv(rotp(petal(0,l,w),-Math.PI/2+d*.62),0,.22),1,d===0?1:0)));
  o.push(P(ell(0,.24,.3,.08,0,22),1,1),P(bez([0,.3],[.03,.55],[-.03,.8],[0,.98],8),0,0));return o},
 roseBud(){const b=bez([0,-.85],[.32,-.62],[.32,-.12],[0,.05],12).concat(bez([0,.05],[-.32,-.12],[-.32,-.62],[0,-.85],12).slice(1,-1));
  const o=[P(b,1,1),P(bez([-.05,-.7],[.15,-.55],[.12,-.25],[-.08,-.12],8),0,0)];[-.7,0,.7].forEach(d=>o.push(P(mv(rotp(petal(0,.38,.09,8),-Math.PI/2+d*1.1),0,.02),1,1)));
  o.push(P(bez([0,.05],[.04,.4],[-.04,.7],[0,.98],10),0,0),P([[0,.35],[.08,.3],[.02,.4]],1,1),P([[0,.6],[-.08,.56],[-.02,.66]],1,1),...leafAt(0,.5,.4,.12,-.6));return o},
 bouquet(){const o=[...tf(MOTIF.rose(),.36,-.38,-.3,0).slice(0,11),...tf(MOTIF.daisy(),.3,.36,-.5,0),...miniFl(0,-.15,.28,5)];
  [[-.38,-.4],[.36,-.25],[0,0]].forEach(([x,y])=>o.push(P(bez([x,y],[x*.6,.2],[x*.2,.45],[0,.62],8),0,0)));
  o.push(...leafAt(-.15,.15,.38,.1,2.4),...leafAt(.15,.18,.38,.1,.7),P([[-.12,.52],[.12,.52],[.1,.68],[-.1,.68]],1,1),P(bez([0,.6],[-.35,.45],[-.4,.75],[0,.65],8),0,0),P(bez([0,.6],[.35,.45],[.4,.75],[0,.65],8),0,0),
   P([[-.05,.66],[-.18,.95]],0,0),P([[.05,.66],[.18,.95]],0,0),P([[0,.68],[0,.9]],0,0));return o},
 flowerPot(){const o=[P([[-.45,.3],[.45,.3],[.34,.95],[-.34,.95]],1,0),P(rect(-.52,.22,.52,.34),1,1),P(wave(-.38,.38,.6,.04,3),0,0)];
  [[-.4,-.55],[0,-.75],[.38,-.5]].forEach(([x,y])=>o.push(P(bez([0,.22],[x*.3,0],[x*.8,y*.5],[x,y],10),0,0),...miniFl(x,y,.2,5)));o.push(...leafAt(-.05,-.05,.3,.08,3.4),...leafAt(.05,-.15,.3,.08,-.3));return o},
 garland(p){const n=va(p,'a',9),o=[],ch=bez([-.9,-.85],[-.8,.25],[.8,.25],[.9,-.85],40);o.push(P(ch,0,0));
  for(let i=0;i<n;i++){const pt=ch[Math.round((i+.5)/n*40)];o.push(...(i%2?[P(circ(pt[0],pt[1],.05,10),1,1)]:miniFl(pt[0],pt[1],.11,5)))}
  const b=ch[20];o.push(P([[b[0],b[1]+.04],[b[0],b[1]+.3]],0,0),...miniFl(b[0],b[1]+.4,.13,6),P([[b[0]-.05,b[1]+.5],[b[0]-.08,b[1]+.68]],0,0),P([[b[0]+.05,b[1]+.5],[b[0]+.08,b[1]+.68]],0,0));return o},
 flowerBasket(){const bowl=earc(0,.2,.75,.55,0,Math.PI,24),o=[P(bowl,1,0),...hatch(bowl,.13,Math.PI/4),...hatch(bowl,.13,-Math.PI/4),P(earc(0,.2,.75,.1,0,2*Math.PI,32),1,0),P(earc(0,.2,.7,.95,Math.PI,2*Math.PI,24),0,0)];
  o.push(...miniFl(-.35,.02,.22,5),...miniFl(.05,-.08,.24,6,'pt'),...miniFl(.4,.04,.2,5),...leafAt(-.15,.1,.3,.08,3.6),...leafAt(.25,.12,.28,.08,-.4));return o},
 bel(){const o=[];[[14,.95,.18],[10,.68,.17],[7,.42,.15]].forEach(([n,r,w],i)=>o.push(...rep(n,a=>[P(rpetal(r*.3,r,w,a,0,0),1,i===2?1:0)],i*.25)));o.push(P(circ(0,0,.1,10),1,1));return o},
 aparajita(){const big=bez([0,.25],[-.8,.15],[-.85,-.75],[-.12,-.82],16).concat(bez([-.12,-.82],[-.05,-.7],[.05,-.7],[.12,-.82],6).slice(1),bez([.12,-.82],[.85,-.75],[.8,.15],[0,.25],16).slice(1,-1));
  return [P(big,1,0),P(inner(big,.45).map(([x,y])=>[x,y+.08]),1,1),P(ell(-.18,.36,.16,.1,.4,14),1,1),P(ell(.18,.36,.16,.1,-.4,14),1,1),P(ell(0,.46,.1,.14,0,12),1,1),P(bez([0,.55],[.04,.7],[-.04,.85],[0,.98],6),0,0)]}
});


/* ---------- leaves and trees ---------- */
function fronds(T,ends,lean,barb){const o=[];ends.forEach(e=>{const c=[(T[0]+e[0])/2,Math.min(T[1],e[1])-lean],p=bez(T,c,c,e,12);o.push(P(p,0,0));
  for(let i=2;i<12;i++){const [x,y]=p[i],[x2,y2]=p[i+1],a=Math.atan2(y2-y,x2-x),l=barb*(1-i/14);[1,-1].forEach(s=>o.push(P([[x,y],[x+l*Math.cos(a+s*1.0),y+l*Math.sin(a+s*1.0)]],0,0)))}});return o}
function serr(lf,d){return lf.map(([x,y],j)=>[x,y+(j%2?d:-d)*Math.sign(y||1)])}
Object.assign(MOTIF,{
 bananaLeaf(){const a=-.35,s=leafShape(1.9,.42,20).map(([x,y])=>[x-.95,y]),o=[P(rotp(s,a),1,0),P(rotp([[-1.05,.04],[-.95,0],[.9,0]],a),0,0)];
  for(let i=1;i<14;i++){const x=-.95+i*.135,u=(x+.95)/1.9,h=.4*Math.sin(Math.PI*u)*(1-.2*u)*.92;o.push(P(rotp([[x,0],[x+.12,-h]],a),0,0),P(rotp([[x,0],[x+.12,h]],a),0,0))}return o},
 peepalLeaf(){const h=[];for(let i=0;i<64;i++){const t=i/64*Math.PI*2,x=16*Math.pow(Math.sin(t),3),y=13*Math.cos(t)-5*Math.cos(2*t)-2*Math.cos(3*t)-Math.cos(4*t);h.push([x/19,(-y-2)/19-.15])}
  const a=h[29],b=h[35];h.splice(30,5,[a[0]*.6,a[1]+.08],[0,.98],[b[0]*.6,b[1]+.08]);
  const o=[P(h,1,0),P([[0,-.52],[0,.82]],0,0),P([[0,-.52],[0,-.92]],0,0)];
  for(let i=0;i<4;i++)[-1,1].forEach(s=>o.push(P(bez([0,-.32+i*.26],[s*.2,-.37+i*.26],[s*.38,-.47+i*.28],[s*.52,-.6+i*.32],8),0,0)));return o},
 banyanLeaf(){const s=bez([0,-.85],[.62,-.75],[.6,.55],[0,.85],16).concat(bez([0,.85],[-.6,.55],[-.62,-.75],[0,-.85],16).slice(1,-1)),o=[P(s,1,0),P([[0,-.82],[0,.98]],0,0)];
  for(let i=0;i<5;i++)[-1,1].forEach(q=>o.push(P(bez([0,.55-i*.3],[q*.2,.5-i*.3],[q*.38,.42-i*.3],[q*.48,.3-i*.32],6),0,0)));return o},
 mangoLeaf(){const a=-.6,s=leafShape(1.9,.26,18).map(([x,y])=>[x-.95,y]),o=[P(rotp(s,a),1,0),P(rotp([[-1.1,.05],[-.95,0],[.9,0]],a),0,0)];
  for(let i=1;i<12;i++){const x=-.95+i*.15,h=.18*Math.sin(Math.PI*(i/12));o.push(P(rotp([[x,0],[x+.16,-h]],a),0,0),P(rotp([[x,0],[x+.16,h]],a),0,0))}return o},
 neem(p){const n=va(p,'a',7),o=[P(bez([0,.98],[.05,.4],[-.05,-.3],[.05,-.95],20),0,0)];
  for(let i=0;i<n;i++){const y=.75-i*(1.55/Math.max(1,n-1)),l=.42-.012*i;[-1,1].forEach(s=>o.push(P(mv(rotp(serr(leafShape(l,.08,10),.018),s>0?-.45:Math.PI+.45),0,y),1,1)))}
  o.push(P(mv(rotp(leafShape(.3,.07,10),-Math.PI/2),.05,-.92),1,1));return o},
 tulsi(){const o=[P(bez([0,.98],[0,.5],[0,0],[0,-.3],10),0,0),P(bez([0,.3],[-.2,.1],[-.35,-.1],[-.45,-.35],10),0,0),P(bez([0,.2],[.2,0],[.35,-.15],[.45,-.38],10),0,0)];
  [[0,-.3],[-.45,-.35],[.45,-.38]].forEach(([x,y])=>{o.push(P([[x,y],[x,y-.45]],0,0));for(let i=0;i<5;i++){const yy=y-.08-i*.08;o.push(P([[x-.05,yy],[x+.05,yy]],0,0))}});
  [[0,.6,1],[0,.35,1],[-.25,-.02,.8],[.25,-.06,.8],[0,.05,.7]].forEach(([x,y,s])=>o.push(P(ell(x-.13*s,y,.12*s,.07*s,-.4,12),1,1),P(ell(x+.13*s,y,.12*s,.07*s,.4,12),1,1)));return o},
 dheki(){const st=bez([0,.98],[.1,.3],[-.15,-.3],[.15,-.65],20),o=[P(st,0,0)];
  for(let i=2;i<st.length-2;i++){const [x,y]=st[i],l=.42*(1-i/st.length)+.06,s=i%2?1:-1;o.push(P(mv(rotp(leafShape(l,.06,8),s>0?-.25:Math.PI+.25),x,y),1,1))}
  const c=st[st.length-1],cur=[];for(let i=0;i<=24;i++){const t=i/24*Math.PI*3,r=.13*(1-i/28);cur.push([c[0]+r*Math.cos(t+Math.PI/2)-0,c[1]-.13+r*Math.sin(t+Math.PI/2)])}o.push(P(cur,0,0));return o},
 talpata(){const o=[],n=13;for(let k=0;k<=n;k++){const a=Math.PI+k*Math.PI/n;o.push(P([[0,.45],[.9*Math.cos(a),.45+.9*Math.sin(a)]],0,0))}
  const ed=[];for(let i=0;i<=n*4;i++){const a=Math.PI+i*Math.PI/(n*4),r=.9+.05*Math.abs(Math.sin(i*Math.PI/4));ed.push([r*Math.cos(a),.45+r*Math.sin(a)])}o.push(P(ed.concat([[0,.45]]),1,0),P(circ(0,.45,.08,10),1,1),P([[0,.52],[0,.98]],0,0));return o},
 padmaPata(){const pts=[];for(let i=0;i<=60;i++){const a=.12+i/60*(2*Math.PI-.24);pts.push([.92*Math.cos(a-Math.PI/2),.92*Math.sin(a-Math.PI/2)])}const o=[P(pts.concat([[0,0]]),1,0),P(circ(0,0,.07,8),1,1)];
  for(let k=0;k<12;k++){const a=-Math.PI/2+.3+k*(2*Math.PI-.6)/11;o.push(P([[.08*Math.cos(a),.08*Math.sin(a)],[.86*Math.cos(a),.86*Math.sin(a)]],0,0))}return o},
 kochuPata(){const o=[P(heartP(0,0,1),1,0)];for(let k=0;k<9;k++){const a=Math.PI*(.05+k*.1125);o.push(P([[0,-.3],[.8*Math.cos(a),-.3+.8*Math.sin(a)*1.3]],0,0))}o.push(P([[0,-.3],[.15,-.98]],0,0));return o},
 moneyPlant(){const v=[];for(let i=0;i<=60;i++){const u=i/60;v.push([-.9+1.8*u,.15*Math.sin(u*Math.PI*3)])}const o=[P(v,0,0)];
  for(let k=0;k<6;k++){const u=(k+.5)/6,x=-.9+1.8*u,y=.15*Math.sin(u*Math.PI*3),s=k%2?1:-1;o.push(P(mv(rotp(heartP(0,0,.22),s>0?0:Math.PI),x,y+s*.25),1,1),P([[x,y],[x,y+s*.07]],0,0))}return o},
 tendril(){const o=[P(bez([-.9,.6],[-.3,.3],[.3,.5],[.9,.1],20),0,0)];[[-.4,.42],[.15,.42],[.6,.28]].forEach(([x,y],j)=>{const q=[];for(let i=0;i<=30;i++){const t=i/30*Math.PI*4,r=.22*(1-i/34);q.push([x+r*Math.sin(t)*(j%2?-1:1),y-.22+r*Math.cos(t)])}o.push(P(q,0,0))});
  o.push(...leafAt(-.6,.5,.35,.12,-1.9),...leafAt(.4,.4,.35,.12,1.2));return o},
 jute(){const o=[P([[0,.98],[0,-.95]],0,0)];for(let i=0;i<6;i++){const y=.7-i*.3,a=i%2?-.5:Math.PI+.5;o.push(P(mv(rotp(serr(leafShape(.45,.12,12),.02),a),0,y),1,0),P(mv(rotp([[0,0],[.38,0]],a),0,y),0,0))}return o},
 sugarcane(){const o=[];[[-.15,.98,-.45],[.15,.98,-.6]].forEach(([x,y0,y1])=>{o.push(P([[x-.06,y0],[x-.06,y1]],0,0),P([[x+.06,y0],[x+.06,y1]],0,0));for(let y=y0-.18;y>y1;y-=.22)o.push(P([[x-.07,y],[x+.07,y]],0,0),P([[x-.07,y+.025],[x+.07,y+.025]],0,0));
   [[-1,1],[1,1],[-1,.6],[1,.7]].forEach(([s,k])=>o.push(P(bez([x,y1],[x+s*.2*k,y1-.3*k],[x+s*.5*k,y1-.25*k],[x+s*.7*k,y1+.05*k],10),0,0)))});return o},
 datePalm(){const tr=[[-.08,.98],[.08,.98],[.06,-.4],[-.06,-.4]],o=[P(tr,1,0),...hatch(tr,.1,.7),...hatch(tr,.1,-.7),...fronds([0,-.42],[[-.95,-.15],[-.8,-.7],[-.25,-.98],[.3,-.98],[.82,-.68],[.95,-.12]],.2,.1)];
  [[-.14,-.3],[.14,-.3]].forEach(([x,y])=>{o.push(P([[0,-.4],[x,y]],0,0));for(let i=0;i<5;i++)o.push(P(ell(x+(i%2?.04:-.04),y+.05+i*.05,.035,.025,0,6),1,1))});return o},
 talgach(){const o=[P([[-.06,.98],[-.05,-.35]],0,0),P([[.06,.98],[.05,-.35]],0,0)];for(let y=.85;y>-.3;y-=.12)o.push(P([[-.055,y],[.055,y]],0,0));
  for(let k=0;k<11;k++){const a=Math.PI+.15+k*(Math.PI-.3)/10,cx=.38*Math.cos(a),cy=-.5+.38*Math.sin(a);o.push(P([[0,-.42],[cx,cy]],0,0));
    const ed=[];for(let i=0;i<=8;i++){const b=a-.35+i*.0875;ed.push([cx+.22*Math.cos(b),cy+.22*Math.sin(b)])}o.push(P([[cx,cy]].concat(ed),1,0))}
  [[-.12,-.3],[0,-.27],[.12,-.3]].forEach(([x,y])=>o.push(P(circ(x,y,.06,10),1,1)));return o},
 supari(){const o=[P([[-.03,.98],[-.02,-.55]],0,0),P([[.03,.98],[.02,-.55]],0,0)];for(let y=.9;y>-.5;y-=.1)o.push(P([[-.03,y],[.03,y]],0,0));
  o.push(...fronds([0,-.58],[[-.6,-.55],[-.45,-.9],[0,-.98],[.45,-.9],[.6,-.55]],.12,.07));for(let i=0;i<6;i++)o.push(P(circ(.06+(i%3)*.05,-.45+Math.floor(i/3)*.06,.03,6),1,1));return o},
 bot(){const can=[];for(let i=0;i<=80;i++){const a=Math.PI+i/80*Math.PI,r=.92+.08*Math.abs(Math.sin(a*7));can.push([r*Math.cos(a),.1+r*.7*Math.sin(a)])}
  const o=[P(can,1,0),P([[-.12,.98],[-.08,.1]],0,0),P([[.12,.98],[.08,.1]],0,0),P(bez([0,.2],[-.3,.05],[-.5,.05],[-.7,.0],8),0,0),P(bez([0,.2],[.3,.05],[.5,.05],[.7,.0],8),0,0)];
  [-.55,-.35,.35,.55].forEach(x=>o.push(P([[x,.04],[x,.75]],0,0)));o.push(...dotsIn(can,.22,.03));return o},
 tree2(){const o=[P([[0,.6],[0,-.85]],0,0)];[[.5,.35],[.4,0],[.3,-.35]].forEach(([w,y])=>[-1,1].forEach(s=>{const e=[s*w,y-.2];o.push(P(bez([0,y],[s*w*.3,y],[s*w*.7,y-.05],e,8),0,0),...miniFl(e[0],e[1]-.05,.13,6),...leafAt(s*w*.45,y-.04,.18,.06,s>0?-.7:Math.PI+.7))}));
  o.push(...miniFl(0,-.92,.12,6),P([[-.25,.62],[.25,.62],[.2,.95],[-.2,.95]],1,1),P(rect(-.3,.56,.3,.64),1,0));return o},
 floweringTree(){const c=circ(0,-.25,.7,40),o=[P(c,1,0)];for(let i=0;i<9;i++){const a=i*2.4,r=.45*Math.sqrt((i+.5)/9);o.push(...miniFl(r*Math.cos(a),-.25+r*Math.sin(a),.13,5))}
  o.push(P([[-.06,.98],[-.04,.44]],0,0),P([[.06,.98],[.04,.44]],0,0),P(bez([0,.6],[-.15,.5],[-.25,.45],[-.3,.36],6),0,0));return o},
 shrub(){const o=[];[[-.5,.35,.35],[.5,.35,.35],[0,.15,.45],[-.25,-.15,.3],[.25,-.15,.3]].forEach(([x,y,r])=>o.push(P(arcP(x,y,r,Math.PI,2*Math.PI,16),0,0),...[-.5,0,.5].map(d=>P(mv(rotp(leafShape(r*.6,r*.18,8),-Math.PI/2+d),x,y),1,1))));o.push(P([[-.9,.7],[.9,.7]],0,0));return o},
 grass(){const o=[];for(let k=-4;k<=4;k++){const ex=k*.18,ey=-.9+Math.abs(k)*.12;o.push(P(bez([k*.03,.9],[k*.05,.3],[ex*.8,ey*.5+.2],[ex,ey],10).concat(bez([ex,ey],[ex*.8+.04,ey*.5+.22],[k*.05+.05,.32],[k*.03+.06,.9],10).slice(1)),1,1))}return o},
 kashful(){const o=[];[[-.35,-.9,-.2],[0,-.98,0],[.35,-.85,.25]].forEach(([x,y,t])=>{o.push(P(bez([x*.3,.98],[x*.4,.4],[x*.8,-.2],[x,y+.45],10),0,0));
   for(let i=0;i<12;i++){const u=i/12,px=x+t*u*.15,py=y+.42-u*.45;o.push(P([[px,py],[px-.12*(1-u*.5),py-.08]],0,0),P([[px,py],[px+.12*(1-u*.5),py-.06]],0,0))}});
  o.push(P(bez([0,.98],[-.25,.7],[-.4,.5],[-.55,.3],8),0,0),P(bez([0,.98],[.25,.72],[.4,.55],[.55,.35],8),0,0));return o},
 leafSpray(){const o=[];[-1,-.5,0,.5,1].forEach(d=>o.push(...leafAt(0,.85,1.1-Math.abs(d)*.25,.18,-Math.PI/2+d*.7)));o.push(P(circ(0,.85,.06,8),1,1));return o},
 betelVine(){const o=[P([[0,.98],[0,-.98]],0,0),P([[-.05,.98],[-.05,-.98]],0,0)],v=[];for(let i=0;i<=80;i++){const u=i/80;v.push([.18*Math.sin(u*Math.PI*6),.95-1.9*u])}o.push(P(v,0,0));
  for(let k=0;k<6;k++){const u=(k+.5)/6,y=.95-1.9*u,s=k%2?1:-1;o.push(P(mv(rotp(heartP(0,0,.22),s>0?-Math.PI/2:Math.PI/2),s*.42,y),1,0),P([[s*.15,y],[s*.24,y]],0,0))}return o},
 mushroom(){const cap=earc(-.1,-.05,.62,.55,Math.PI,2*Math.PI,24).concat(bez([.52,-.05],[.3,.02],[-.5,.02],[-.72,-.05],10).slice(1,-1)),o=[P(cap,1,0),P([[-.2,0],[-.24,.75],[.06,.75],[.02,0]],1,0)];
  [[-.35,-.3,.08],[.05,-.4,.07],[.3,-.2,.06],[-.15,-.15,.05]].forEach(([x,y,r])=>o.push(P(circ(x,y,r,10),1,1)));
  o.push(P(earc(.55,.45,.25,.22,Math.PI,2*Math.PI,14),1,0),P([[.5,.45],[.5,.75],[.6,.75],[.6,.45]],1,0),P([[-.6,.78],[.85,.78]],0,0));return o},
 lotusPond(){return [P(wave(-.95,.95,.55,.04,4),0,0),P(wave(-.85,.85,.72,.035,4),0,0),P(wave(-.7,.7,.88,.03,3),0,0),...M('padmaPata',.32,-.5,.38,0),...M('padmaPata',.25,.55,.45,.6),...M('halfLotus',.55,.05,-.1,0),...M('lotusBud',.35,.62,-.12,.15)]},
 mangoToran(){const ch=bez([-.95,-.7],[-.4,-.2],[.4,-.2],[.95,-.7],30),o=[P(ch,0,0)];for(let i=1;i<8;i++){const pt=ch[Math.round(i*30/8)];o.push(P(mv(rotp(leafShape(.6,.13,12),Math.PI/2+(i-4)*.06),pt[0],pt[1]),1,1),P([[pt[0],pt[1]],[pt[0],pt[1]+.5]],0,0))}return o}
});

/* ---------- fruit and vegetables ---------- */
Object.assign(MOTIF,{
 jackfruit(){const b=ell(0,.12,.6,.82,0,40);return[P(b,1,0),...dotsIn(b,.12,.03),P([[0,-.7],[.04,-.95]],0,0),...leafAt(.04,-.88,.4,.12,-.4)]},
 lychee(){const o=[P([[0,-.95],[0,-.45]],0,0)];[[-.35,-.05],[.3,-.1],[0,.3],[-.4,.5],[.4,.45],[0,-.25]].forEach(([x,y])=>{const c=circ(x,y,.22,20);o.push(P([[0,-.45],[x,y-.2]],0,0),P(c,1,0),...dotsIn(c,.1,.025))});o.push(...leafAt(0,-.8,.4,.1,-2.5),...leafAt(0,-.75,.4,.1,-.6));return o},
 coconut(){const o=[P(circ(0,.05,.85,56),1,0),P(circ(0,.05,.68,48),1,0),P(circ(0,.05,.55,40),1,0)];[[-.13,-.15],[.13,-.15],[0,.08]].forEach(([x,y])=>o.push(P(circ(x,y,.07,10),1,1)));
  for(let k=0;k<16;k++){const a=k*Math.PI/8;o.push(P([[.7*Math.cos(a),.05+.7*Math.sin(a)],[.83*Math.cos(a),.05+.83*Math.sin(a)]],0,0))}return o},
 bananaBunch(){const o=[P(bez([0,-.95],[.05,-.6],[-.05,-.45],[0,-.3],10),0,0),P(rect(-.08,-.34,.08,-.22),1,1)];for(let k=-2;k<=2;k++)o.push(P(bananaP(k*.05,-.25,1.05,Math.PI/2+k*.36-.25),1,1));return o},
 papaya(){const b=bez([0,-.9],[.55,-.85],[.7,.6],[0,.9],16).concat(bez([0,.9],[-.7,.6],[-.55,-.85],[0,-.9],16).slice(1,-1)),c=inner(b,.55).map(([x,y])=>[x,y+.12]),o=[P(b,1,0),P(inner(b,.85),1,0),P(c,1,0)];
  for(let i=0;i<9;i++){const a=i*2.4,r=.18*Math.sqrt((i+.5)/9);o.push(P(circ(r*Math.cos(a),.15+r*1.6*Math.sin(a),.045,8),1,1))}return o},
 guava(){const b=bez([0,-.75],[.75,-.75],[.85,.55],[0,.8],16).concat(bez([0,.8],[-.85,.55],[-.75,-.75],[0,-.75],16).slice(1,-1));return[P(b,1,0),P(starP(5,.14,.06,0,.78),1,1),P([[0,-.75],[.05,-.92]],0,0),...leafAt(.05,-.88,.45,.12,-.3),P(bez([-.4,-.3],[-.5,0],[-.45,.3],[-.3,.5],8),0,0)]},
 starfruit(){const s=[];for(let i=0;i<80;i++){const a=i/80*Math.PI*2-Math.PI/2,r=.55+.4*Math.pow(Math.abs(Math.cos(a*2.5)),1.5);s.push([r*Math.cos(a),r*Math.sin(a)])}
  const o=[P(s,1,0),P(starP(5,.4,.18),1,0)];for(let k=0;k<5;k++){const a=-Math.PI/2+k*2*Math.PI/5+Math.PI/5;o.push(P(drop(.25*Math.cos(a),.25*Math.sin(a),.06),1,1))}return o},
 custardApple(){const o=[P(circ(0,.08,.78,40),1,0)];for(let r=0;r<5;r++){const y=-.55+r*.3,hw=Math.sqrt(Math.max(0,.78*.78-(y+.05-.08)*(y+.05-.08)))*.92,n=Math.max(2,Math.round(hw/.15));
   for(let i=0;i<n;i++){const x0=-hw+i*2*hw/n,x1=x0+2*hw/n;o.push(P(earc((x0+x1)/2,y+.1,(x1-x0)/2,.1,Math.PI,2*Math.PI,8),0,0))}}o.push(P([[0,-.7],[.04,-.95]],0,0));return o},
 jamun(){const o=[P([[0,-.95],[0,-.3]],0,0)];[[-.3,0],[.28,-.05],[0,.3],[-.32,.45],[.3,.42],[0,.7],[0,-.12]].forEach(([x,y])=>o.push(P([[0,-.3],[x,y-.12]],0,0),P(ell(x,y,.14,.19,0,16),1,1)));o.push(...leafAt(0,-.7,.45,.12,-2.6));return o},
 betelNut(){const o=[];[[-.35,.1,-.3],[.3,0,.25],[0,.45,0]].forEach(([x,y,a])=>{const e=ell(x,y,.3,.38,a,24);o.push(P(e,1,0),...hatch(e,.09,a+Math.PI/2))});o.push(...leafAt(0,-.3,.6,.14,-1.9));return o},
 lemon(){const o=[P(circ(0,0,.9,56),1,0),P(circ(0,0,.78,50),1,0),P(circ(0,0,.12,12),1,0)];for(let k=0;k<9;k++){const a=k*2*Math.PI/9,b=a+Math.PI/9;o.push(P([[.14*Math.cos(a),.14*Math.sin(a)],[.74*Math.cos(a),.74*Math.sin(a)]],0,0),P(drop(.45*Math.cos(b),.45*Math.sin(b),.06),1,1))}return o},
 watermelon(){const o=[P(arcP(0,-.35,.95,0,Math.PI,32),1,0),P(arcP(0,-.35,.82,0,Math.PI,30),0,0),P(arcP(0,-.35,.74,0,Math.PI,28),0,0)];
  [[-.4,0],[0,.15],[.4,0],[-.2,.3],[.2,.3],[0,-.12],[-.52,-.22],[.52,-.22]].forEach(([x,y])=>o.push(P(drop(x,y,.06),1,1)));return o},
 grapes(){const o=[P([[0,-.95],[0,-.62]],0,0)];[[-.36,-.12,.12,.36],[-.24,0,.24],[-.12,.12],[0]].forEach((r,i)=>r.forEach(x=>o.push(P(circ(x*1.3,-.45+i*.3,.17,16),1,0))));
  const t=[];for(let i=0;i<=20;i++){const q=i/20*Math.PI*3,r=.12*(1-i/24);t.push([.25+r*Math.cos(q),-.75+r*Math.sin(q)])}o.push(P(t,0,0),...leafAt(0,-.75,.5,.18,-2.7));return o},
 lau(){const b=bez([0,-.85],[.22,-.85],[.25,-.45],[.15,-.25],8).concat(bez([.15,-.25],[.7,0],[.7,.85],[0,.9],14).slice(1),bez([0,.9],[-.7,.85],[-.7,0],[-.15,-.25],14).slice(1),bez([-.15,-.25],[-.25,-.45],[-.22,-.85],[0,-.85],8).slice(1,-1));
  return [P(b,1,0),P(bez([-.35,.1],[-.45,.4],[-.4,.6],[-.25,.75],8),0,0),P([[0,-.85],[.05,-.98]],0,0)]},
 pumpkin(){const o=[];[[-.48,.38],[-.18,.44],[.18,.44],[.48,.38]].forEach(([x,r])=>o.push(P(ell(x,.15,r,.62,0,28),1,0)));o.push(P(ell(0,.15,.3,.66,0,28),1,0),P(bez([0,-.48],[0,-.7],[.1,-.85],[.25,-.85],8),0,0),...leafAt(0,-.55,.45,.15,-2.6));return o},
 begun(){const b=bez([-.35,-.45],[.3,-.6],[.95,.3],[.6,.75],14).concat(bez([.6,.75],[.3,.95],[-.35,.2],[-.35,-.45],14).slice(1,-1)),o=[P(b,1,1)];
  [-.6,-.2,.2,.6].forEach(d=>o.push(P(mv(rotp(petal(0,.32,.09,8),-Math.PI*.75+d),-.32,-.42),1,0)));o.push(P(bez([-.32,-.45],[-.45,-.6],[-.5,-.75],[-.6,-.85],6),0,0));return o},
 morich(){const o=[];[[-.4,-.1],[0,0],[.4,-.05]].forEach(([x,y],i)=>{const a=(i-1)*.35,c=bez([0,0],[.08,.35],[.02,.75],[-.15,1],12).concat(bez([-.15,1],[-.08,.7],[-.08,.35],[-.1,0],10).slice(1));
   o.push(P(mv(rotp(c,a),x,y-.25),1,1),P(mv(rotp([[-.05,0],[-.02,-.15],[.05,-.3]],a),x,y-.25),0,0))});return o},
 korola(){const b=bez([0,-.92],[.38,-.7],[.38,.6],[0,.95],14).concat(bez([0,.95],[-.38,.6],[-.38,-.7],[0,-.92],14).slice(1,-1)),o=[P(b,1,0)];
  [-.16,0,.16].forEach(x=>{const q=[];for(let i=0;i<=20;i++){const u=i/20;q.push([x*Math.sin(Math.PI*(u*.9+.05))*1.6+.02*Math.sin(u*30),-.8+1.65*u])}o.push(P(q,0,0))});o.push(P([[0,-.92],[.06,-1]],0,0));return o},
 dheros(){const b=bez([-.12,-.7],[.18,-.7],[.2,.2],[.02,.95],12).concat(bez([.02,.95],[-.18,.2],[-.2,-.65],[-.12,-.7],12).slice(1,-1));
  return [P(b,1,0),P(bez([-.03,-.7],[.05,-.2],[.05,.4],[.02,.9],10),0,0),P(bez([-.1,-.68],[-.1,-.2],[-.08,.4],[0,.9],10),0,0),P([[-.14,-.72],[.14,-.72],[.08,-.82],[-.08,-.82]],1,1),P([[0,-.82],[.05,-.97]],0,0)]},
 shim(){const top=[],bot=[];for(let i=0;i<=24;i++){const u=i/24,x=-.85+1.7*u,y=-.25*Math.sin(Math.PI*u)+.03*Math.cos(u*Math.PI*10);top.push([x,y-.12*Math.sin(Math.PI*u)]);bot.push([x,y+.12*Math.sin(Math.PI*u)])}
  const o=[P(top.concat(bot.reverse().slice(1,-1)),1,0)];for(let k=1;k<5;k++){const u=k/5;o.push(P(circ(-.85+1.7*u,-.25*Math.sin(Math.PI*u),.07,10),1,1))}o.push(P(bez([-.85,0],[-.95,-.2],[-.9,-.4],[-.75,-.45],6),0,0));return o},
 mula(){const b=bez([-.22,-.3],[.25,-.32],[.15,.5],[0,.98],12).concat(bez([0,.98],[-.15,.5],[-.25,-.25],[-.22,-.3],12).slice(1,-1)),o=[P(b,1,0)];
  for(let y=-.1;y<.7;y+=.2)o.push(P([[-.12,y],[-.04,y+.02]],0,0),P([[.04,y+.08],[.12,y+.06]],0,0));
  [-.5,0,.5].forEach(d=>o.push(P(mv(rotp(serr(leafShape(.7,.16,12),.025),-Math.PI/2+d),0,-.3),1,0),P(mv(rotp([[0,0],[.6,0]],-Math.PI/2+d),0,-.3),0,0)));return o},
 gajor(){const o=[P([[-.2,-.3],[.2,-.3],[0,.98]],1,1)];[-.45,-.15,.15,.45].forEach(d=>{const a=-Math.PI/2+d,e=[.7*Math.cos(a),-.3+.7*Math.sin(a)];o.push(P([[0,-.3],e],0,0));
   for(let i=1;i<5;i++){const u=i/5,x=e[0]*u,y=-.3+(e[1]+.3)*u;o.push(P([[x,y],[x-.08,y-.06]],0,0),P([[x,y],[x+.08,y-.06]],0,0))}});return o},
 peyaj(){const b=bez([0,-.55],[.25,-.25],[.75,.05],[.55,.55],12).concat(bez([.55,.55],[.35,.9],[-.35,.9],[-.55,.55],10).slice(1),bez([-.55,.55],[-.75,.05],[-.25,-.25],[0,-.55],12).slice(1,-1));
  const o=[P(b,1,0),P(bez([0,-.5],[.15,-.1],[.3,.3],[.18,.8],10),0,0),P(bez([0,-.5],[-.15,-.1],[-.3,.3],[-.18,.8],10),0,0),P([[0,-.55],[0,.85]],0,0),P(bez([0,-.55],[-.05,-.75],[-.15,-.85],[-.2,-.98],6),0,0),P(bez([0,-.55],[.05,-.75],[.12,-.88],[.15,-.98],6),0,0)];
  [-.15,0,.15].forEach(x=>o.push(P([[x*.5,.82],[x,.98]],0,0)));return o},
 rosun(){const o=[];[-.4,-.15,.15,.4].forEach((x,i)=>{const w=i===1||i===2?.3:.25;o.push(P(bez([x*.3,-.55],[x+w,-.3],[x+w*.9,.6],[x*.5,.8],10).concat(bez([x*.5,.8],[x-w*.9,.6],[x-w,-.3],[x*.3,-.55],10).slice(1,-1)),1,0))});
  o.push(P(bez([0,-.55],[-.02,-.7],[.02,-.85],[0,-.98],6),0,0));[-.12,0,.12].forEach(x=>o.push(P([[x*.5,.8],[x,.97]],0,0)));return o},
 bhutta(){const cob=bez([0,-.85],[.35,-.75],[.35,.6],[0,.85],14).concat(bez([0,.85],[-.35,.6],[-.35,-.75],[0,-.85],14).slice(1,-1));
  return [P(cob,1,0),...hatch(cob,.11,0),...hatch(cob,.11,Math.PI/2),P(bez([0,.85],[-.5,.6],[-.6,0],[-.45,-.5],10),0,0),P(bez([0,.85],[.5,.6],[.6,0],[.45,-.5],10),0,0),P(bez([0,-.85],[-.1,-.95],[.1,-.9],[0,-1],4),0,0)]},
 motorshuti(){const top=[],bot=[];for(let i=0;i<=24;i++){const u=i/24,x=-.9+1.8*u,y=-.2*Math.sin(Math.PI*u);top.push([x,y-.22*Math.sin(Math.PI*u)]);bot.push([x,y+.2*Math.sin(Math.PI*u)])}
  const o=[P(top.concat(bot.reverse().slice(1,-1)),1,0),P(top,0,0)];for(let k=1;k<6;k++){const u=k/6;o.push(P(circ(-.9+1.8*u,-.2*Math.sin(Math.PI*u)-.02,.1,12),1,1))}o.push(P(bez([-.9,0],[-1,-.15],[-.95,-.3],[-.8,-.35],6),0,0));return o}
});


/* ---------- sky and water ---------- */
Object.assign(MOTIF,{
 sunrise(){const o=[P(arcP(0,.2,.45,Math.PI,2*Math.PI,24),1,1),P([[-.98,.2],[.98,.2]],0,0)];for(let k=0;k<9;k++){const a=Math.PI+(k+.5)*Math.PI/9,l=k%2?.75:.88;o.push(P([[.55*Math.cos(a),.2+.55*Math.sin(a)],[l*Math.cos(a),.2+l*Math.sin(a)]],0,0))}
  o.push(P(bez([-.98,.75],[-.6,.3],[-.3,.32],[0,.6],10).concat(bez([0,.6],[.3,.32],[.6,.3],[.98,.75],10).slice(1)),0,0),P(wave(-.9,.9,.9,.03,5),0,0));return o},
 sunWave(p){const n=va(p,'a',12),o=[P(circ(0,0,.32,30),1,1),P(circ(0,0,.42,36),1,0)];for(let k=0;k<n;k++){const a=k*2*Math.PI/n,q=[];for(let i=0;i<=16;i++){const u=i/16,r=.5+.45*u,w=.07*Math.sin(u*Math.PI*3);q.push([r*Math.cos(a)-w*Math.sin(a),r*Math.sin(a)+w*Math.cos(a)])}o.push(P(q,0,0))}return o},
 halfMoon(){const d=arcP(0,0,.85,-Math.PI/2,Math.PI/2,30);return[P(d,1,0),P(d.map(([x,y])=>[x*.82,y*.82]),1,0),P(circ(.35,-.3,.1,10),1,0),P(circ(.5,.15,.07,8),1,0),P(circ(.25,.4,.12,10),1,0)]},
 fullMoon(){const o=[P(circ(0,0,.62,48),1,0),P(circ(0,0,.78,52),1,0)];[[-.2,-.2,.14],[.22,.05,.1],[-.05,.3,.12],[.2,-.32,.07]].forEach(([x,y,r])=>o.push(P(circ(x,y,r,12),1,0)));
  for(let k=0;k<16;k++){const a=k*Math.PI/8;o.push(P([[.86*Math.cos(a),.86*Math.sin(a)],[.98*Math.cos(a),.98*Math.sin(a)]],0,0))}return o},
 starCluster(){return [[0,0,.42],[-.6,-.5,.22],[.55,-.55,.25],[-.55,.55,.2],[.6,.5,.18],[0,-.8,.12],[.85,0,.1],[-.85,.05,.1]].map(([x,y,r])=>P(starP(5,r,r*.42,x,y),1,1))},
 comet(){const o=[P(starP(5,.28,.12,.55,-.55),1,1)];[-.12,0,.12].forEach((d,i)=>o.push(P(bez([.4,-.4+d],[0,d*.5],[-.3,.3],[-.95+i*.05,.75+d],12),0,0)));for(let i=0;i<6;i++)o.push(P(circ(-.2-i*.12,.15+i*.1,.025,6),1,1));return o},
 rainbow(p){const n=va(p,'a',5),o=[];for(let i=0;i<n;i++)o.push(P(arcP(0,.35,.9-i*(.5/Math.max(1,n-1)),Math.PI,2*Math.PI,32),0,0));o.push(P(cloudPts(-.7,.42,.32),1,1),P(cloudPts(.7,.42,.32),1,1));return o},
 lightning(){return [P(cloudPts(0,-.55,.75),1,0),P([[.05,-.35],[-.25,.15],[0,.12],[-.2,.95],[.3,0],[.05,.03],[.25,-.35]],1,1)]},
 riverWaves(p){const n=va(p,'a',4),o=[];for(let i=0;i<n;i++){const y=-.6+i*(1.2/Math.max(1,n-1));o.push(P(wave(-.95,.95,y,.12,3),0,0),P(wave(-.85,.85,y+.1,.06,3),0,0))}return o},
 hills(){return [P([[-.98,.7],[-.45,-.35],[.05,.7]],1,0),P([[-.3,.7],[.25,-.65],[.8,.7]],1,0),P([[.4,.7],[.75,.05],[.98,.7]],1,0),P([[.25,-.65],[.12,-.4],[.2,-.42],[.25,-.35],[.32,-.43],[.38,-.4]],0,0),P([[-.98,.7],[.98,.7]],0,0),P(wave(-.9,.9,.85,.03,5),0,0)]},
 ripples(p){const n=va(p,'a',4),o=[P(drop(0,0,.12),1,1)];for(let i=0;i<n;i++){const r=.3+i*(.65/Math.max(1,n-1));o.push(P(ell(0,.05,r,r*.6,0,40),1,0))}return o},
 raindrop(){return[P(drop(0,.05,.9),1,0),P(drop(0,.2,.55),1,0),P(drop(0,.32,.25),1,1)]},
 wind(){const o=[];[[-.45,1.3],[0,1.6],[.45,1.1]].forEach(([y,len],i)=>{const s=[];for(let k=0;k<=20;k++){const u=k/20;s.push([-.9+len*u,y+.05*Math.sin(u*6+i)])}const e=s[s.length-1];for(let k=1;k<=18;k++){const t=k/18*Math.PI*1.7,r=.17*(1-k/24);s.push([e[0]+r*Math.sin(t),e[1]-r+r*Math.cos(t)])}o.push(P(s,0,0))});return o},
 sunsetRiver(){const o=[P(arcP(0,-.05,.5,Math.PI,2*Math.PI,24),1,1),P([[-.98,-.05],[.98,-.05]],0,0)];[[.12,.5],[.24,.38],[.36,.28],[.5,.18],[.64,.1]].forEach(([y,w])=>o.push(P([[-w,y],[-w*.2,y]],0,0),P([[w*.2,y],[w,y]],0,0)));
  for(let k=0;k<7;k++){const a=Math.PI+(k+.5)*Math.PI/7;o.push(P([[.6*Math.cos(a),-.05+.6*Math.sin(a)],[.8*Math.cos(a),-.05+.8*Math.sin(a)]],0,0))}return o},
 sunCloud(){return [...M('sun',.6,.3,-.3,0),P(cloudPts(-.1,.25,.85),1,1)]}
});

/* ---------- home and kitchen ---------- */
Object.assign(MOTIF,{
 hari(){const b=bez([-.5,-.45],[-1,-.2],[-.95,.85],[0,.85],14).concat(bez([0,.85],[.95,.85],[1,-.2],[.5,-.45],14).slice(1));
  return [P(b,1,0),P(ell(0,-.48,.52,.1,0,24),1,0),P(ell(0,-.48,.4,.06,0,20),1,0),P(wave(-.78,.78,.05,.06,6),0,0),P([[-.82,-.12],[.82,-.12]],0,0),P([[-.8,.25],[.8,.25]],0,0)]},
 badna(){const b=bez([-.25,-.4],[-.85,-.3],[-.85,.75],[0,.75],12).concat(bez([0,.75],[.85,.75],[.85,-.3],[.25,-.4],12).slice(1));
  return [P(b,1,0),P(ell(0,-.42,.27,.06,0,16),1,0),P(earc(0,-.42,.27,.2,Math.PI,2*Math.PI,12),0,0),P(circ(0,-.64,.05,8),1,1),P([[.62,.05],[.98,-.5],[.95,-.55],[.55,-.1]],1,1),P(bez([-.62,-.15],[-1,-.2],[-1,.4],[-.65,.4],10),0,0),P(wave(-.66,.66,.25,.04,5),0,0)]},
 jug(){return [P([[-.35,-.75],[.3,-.75],[.4,-.55],[.45,.7],[.35,.85],[-.45,.85],[-.55,.7],[-.5,-.55]],1,0),P(bez([.42,-.45],[.95,-.45],[.95,.45],[.44,.4],12),0,0),P(bez([.42,-.32],[.75,-.32],[.75,.3],[.44,.28],12),0,0),P([[-.35,-.75],[-.6,-.95],[-.45,-.6]],1,0),P(wave(-.48,.4,.1,.05,4),0,0)]},
 kettle(){return [P(earc(0,.25,.62,.55,Math.PI,2*Math.PI,20).concat([[.62,.25],[.55,.75],[-.55,.75],[-.62,.25]]),1,0),P(bez([.58,.15],[.95,.1],[.95,-.3],[1,-.45],10),0,0),P(bez([.55,.4],[.85,.3],[.9,-.1],[.98,-.42],10),0,0),
   P(bez([-.45,-.15],[-.45,-.75],[.45,-.75],[.45,-.15],12),0,0),P(ell(0,-.32,.25,.06,0,14),1,0),P(circ(0,-.42,.06,8),1,1),P(wave(-.55,.55,.45,.04,4),0,0)]},
 dhenki(){return [P([[-.95,-.1],[.75,.15],[.75,.25],[-.95,0]],1,1),P([[-.05,.05],[-.12,.7],[.12,.7]],1,0),P(rect(.62,.2,.88,.55),1,0),P(ell(.75,.75,.3,.08,0,20),1,0),P([[-.98,.78],[.98,.78]],0,0),P(circ(-.05,.08,.05,8),1,1)]},
 silPata(){const s=[[-.9,.1],[.85,.1],[.95,.55],[-.8,.55]];return[P(s,1,0),...dotsIn(s,.16,.025),P(ell(0,-.12,.55,.16,0,24),1,0),P(ell(.55,-.12,.07,.16,0,12),1,0)]},
 jaanta(){return [P(ell(0,.35,.85,.3,0,40),1,0),P(ell(0,.18,.85,.3,0,40),1,0),P(ell(0,-.12,.75,.26,0,40),1,0),P(ell(0,-.28,.75,.26,0,40),1,0),P(ell(0,-.28,.1,.04,0,10),1,1),P([[.45,-.35],[.45,-.75],[.52,-.75],[.52,-.35]],1,1)]},
 bonti(){return [P([[-.9,.55],[.6,.55],[.6,.75],[-.9,.75]],1,1),P(bez([.35,.55],[.3,0],[.55,-.55],[.85,-.8],12).concat(bez([.85,-.8],[.7,-.4],[.55,0],[.5,.55],12).slice(1)),1,0),P(circ(.75,-.65,.04,8),1,1)]},
 hata(){return [P(circ(-.45,.45,.38,28),1,0),P(arcP(-.45,.45,.28,0,Math.PI,14),0,0),P([[-.2,.18],[.85,-.82],[.92,-.75],[-.13,.25]],1,1),P(circ(.88,-.85,.06,8),1,0)]},
 chamoch(){return [P(ell(-.45,.42,.25,.36,.7,24),1,0),P(ell(-.45,.42,.15,.24,.7,18),1,0),P([[-.28,.15],[.8,-.88],[.88,-.8],[-.22,.22]],1,1)]},
 thala(){const o=[P(circ(0,0,.92,60),1,0),P(circ(0,0,.75,52),1,0),...M('flower',.35,0,0,0)];for(let k=0;k<12;k++){const a=k*Math.PI/6;o.push(P(circ(.835*Math.cos(a),.835*Math.sin(a),.04,8),1,1))}return o},
 bati(){return [P(earc(0,-.15,.85,.75,0,Math.PI,24),1,0),P(ell(0,-.15,.85,.12,0,32),1,0),P(rect(-.3,.58,.3,.68),1,1),P(wave(-.7,.7,.15,.05,5),0,0)]},
 glass(){return [P([[-.45,-.85],[.45,-.85],[.33,.9],[-.33,.9]],1,0),P(wave(-.42,.42,-.3,.03,3),0,0),P([[-.2,-.1],[-.15,.6]],0,0)]},
 teaCup(){const o=[P(earc(-.05,-.05,.55,.6,0,Math.PI,20),1,0),P(bez([.48,.05],[.85,0],[.85,.35],[.38,.35],10),0,0),P(ell(-.05,.62,.85,.1,0,32),1,0),P(ell(-.05,-.05,.55,.08,0,24),1,0)];
  [-.25,0,.2].forEach(x=>o.push(P(bez([x,-.2],[x+.12,-.4],[x-.12,-.55],[x,-.8],8),0,0)));return o},
 chula(){const o=[P([[-.7,.85],[.7,.85],[.55,.15],[-.55,.15]],1,0),P(arcP(0,.85,.25,Math.PI,2*Math.PI,12),0,0),P(earc(0,-.25,.55,.4,0,Math.PI,18),1,0),P(ell(0,-.25,.55,.08,0,24),1,0)];
  [-.12,0,.12].forEach((x,i)=>o.push(P(drop(x,.62-(i%2)*.05,.1),1,1)));return o},
 paandan(){return [P(rect(-.7,-.05,.7,.65),1,0),P(earc(0,-.05,.7,.45,Math.PI,2*Math.PI,24),0,0),P(circ(0,-.55,.08,10),1,1),P(rect(-.78,.65,.78,.75),1,1),...M('flower',.2,0,.3,0),P(wave(-.6,.6,.08,.03,6),0,0)]},
 tiffin(){const o=[];for(let i=0;i<3;i++){const y=-.35+i*.4;o.push(P(rect(-.45,y,.45,y+.36),1,0),P([[-.45,y+.18],[.45,y+.18]],0,0))}
  o.push(P([[-.52,-.45],[-.52,.85]],0,0),P([[.52,-.45],[.52,.85]],0,0),P(earc(0,-.45,.52,.45,Math.PI,2*Math.PI,16),0,0),P(rect(-.55,.85,.55,.92),1,1));return o},
 khaat(){const top=[[-.9,-.1],[.9,-.1],[.9,.15],[-.9,.15]],o=[P(top,1,0),...hatch(top,.1,.8),...hatch(top,.1,-.8)];[-.85,.85].forEach(x=>o.push(P([[x,.15],[x,.75]],0,0),P([[x,-.1],[x,-.55]],0,0)));
  o.push(P([[-.85,-.55],[.85,-.55]],0,0),P(circ(-.85,-.6,.05,8),1,1),P(circ(.85,-.6,.05,8),1,1));return o},
 mora(){const s=[[-.55,-.8],[.55,-.8],[.18,0],[.55,.8],[-.55,.8],[-.18,0]];return[P(s,1,0),P(ell(0,-.8,.55,.1,0,24),1,0),P(ell(0,.8,.55,.1,0,24),1,0),...hatch(s,.12,.9),...hatch(s,.12,-.9)]},
 dolna(){return [P([[-.95,-.9],[.95,-.9]],0,0),P([[-.6,-.9],[-.5,.45]],0,0),P([[.6,-.9],[.5,.45]],0,0),P(rect(-.62,.45,.62,.55),1,1),...M('leaf',.25,-.82,-.75,.3),...M('leaf',.25,.82,-.75,-.3)]},
 shitalPati(){const r=[[-.85,-.6],[.85,-.6],[.85,.6],[-.85,.6]],i=inner(r,.8);return[P(r,1,0),P(inner(r,.88),1,0),...hatch(i,.1,Math.PI/4),...hatch(i,.1,-Math.PI/4)]},
 balish(){const b=[];for(let i=0;i<48;i++){const a=i/48*Math.PI*2,x=Math.cos(a),y=Math.sin(a);b.push([.85*Math.sign(x)*Math.pow(Math.abs(x),.5),.5*Math.sign(y)*Math.pow(Math.abs(y),.5)])}
  const o=[P(b,1,0),P(inner(b,.85),1,0),...M('flower',.22,0,0,0)];[[-.85,-.5],[.85,-.5],[-.85,.5],[.85,.5]].forEach(([x,y])=>o.push(P([[x*.92,y*.92],[x*1.08,y*1.12]],0,0)));return o},
 taant(){const o=[P(rect(-.85,-.8,.85,.8),1,0),P([[-.85,-.55],[.85,-.55]],0,0),P([[-.85,.45],[.85,.45]],0,0)];for(let k=-6;k<=6;k++)o.push(P([[k*.12,-.55],[k*.12,.45]],0,0));
  o.push(P([[-.65,.05],[-.45,-.03],[.45,-.03],[.65,.05],[.45,.13],[-.45,.13]],1,1),P(rect(-.85,.6,.85,.68),1,0));return o},
 sewing(){return [P([[-.8,.6],[.8,.6],[.8,.78],[-.8,.78]],1,0),P([[.4,.6],[.4,-.55],[-.6,-.55],[-.6,-.3],[.15,-.3],[.15,.6]],1,0),P([[-.5,-.3],[-.5,.1]],0,0),P([[-.55,.1],[-.45,.1]],0,0),P(circ(.6,-.25,.22,20),1,0),P(circ(.6,-.25,.06,8),1,1),P(bez([-.5,.1],[-.5,.3],[-.3,.4],[0,.42],8),0,0)]},
 spool(){return [P(ell(0,-.7,.55,.12,0,24),1,0),P(ell(0,.7,.55,.12,0,24),1,0),P([[-.4,-.65],[-.4,.65]],0,0),P([[.4,-.65],[.4,.65]],0,0),...[-.45,-.3,-.15,0,.15,.3,.45].map(y=>P([[-.4,y],[.4,y+.06]],0,0)),P(bez([.4,.3],[.7,.4],[.8,.7],[.95,.9],8),0,0)]},
 istri(){return [P([[-.85,.55],[.75,.55],[.55,-.05],[-.6,-.1]],1,0),P(bez([-.45,-.1],[-.4,-.7],[.3,-.7],[.35,-.05],10),0,0),P(rect(-.3,-.62,.2,-.52),1,1),P([[-.75,.4],[.6,.4]],0,0),...[-.5,-.2,.1,.4].map(x=>P(circ(x,.2,.04,6),1,1))]},
 jharu(){const o=[P(rect(-.1,-.95,.1,-.2),1,1)];for(let k=-6;k<=6;k++)o.push(P([[k*.012,-.2],[k*.11,.95]],0,0));o.push(P([[-.14,-.25],[.14,-.25]],0,0),P([[-.16,-.15],[.16,-.15]],0,0));return o},
 clock(){const o=[P(circ(0,0,.9,56),1,0),P(circ(0,0,.78,50),1,0)];for(let k=0;k<12;k++){const a=k*Math.PI/6,l=k%3?.06:.12;o.push(P([[(.72-l)*Math.cos(a),(.72-l)*Math.sin(a)],[.72*Math.cos(a),.72*Math.sin(a)]],0,0))}
  o.push(P([[0,0],[0,-.5]],0,0),P([[0,0],[.35,.15]],0,0),P(circ(0,0,.06,8),1,1));return o},
 chabi(){return [P(circ(-.55,0,.32,28),1,0),P(circ(-.55,0,.14,14),1,0),P([[-.23,-.04],[.9,-.04],[.9,.04],[-.23,.04]],1,1),P([[.55,.04],[.55,.28],[.65,.28],[.65,.04]],1,1),P([[.78,.04],[.78,.2],[.88,.2],[.88,.04]],1,1)]},
 tala(){return [P(rect(-.55,-.1,.55,.85),1,0),P(bez([-.38,-.1],[-.38,-.85],[.38,-.85],[.38,-.1],14),0,0),P(bez([-.24,-.1],[-.24,-.68],[.24,-.68],[.24,-.1],12),0,0),P(circ(0,.3,.09,10),1,1),P([[-.03,.35],[-.06,.6],[.06,.6],[.03,.35]],1,1)]},
 candle(){return [P(rect(-.18,-.3,.18,.7),1,0),P([[0,-.3],[0,-.42]],0,0),P(drop(0,-.62,.2),1,0),P(drop(0,-.55,.09),1,1),P(ell(0,.75,.45,.1,0,24),1,0),P(bez([.12,-.3],[.16,-.15],[.1,0],[.14,.1],6),0,0)]},
 kupi(){return [P(bez([-.45,.85],[-.55,.2],[-.3,-.05],[-.12,-.15],10).concat(bez([.12,-.15],[.3,-.05],[.55,.2],[.45,.85],10)),1,0),P(rect(-.12,-.35,.12,-.15),1,1),P(drop(0,-.58,.2),1,0),P(drop(0,-.52,.08),1,1),P([[-.48,.5],[.48,.5]],0,0)]},
 palmFan(){const b=heartP(0,-.2,.8);return[P(b,1,0),...hatch(b,.12,Math.PI/2),P(rect(-.05,.55,.05,.98),1,1)]},
 trunk(){return [P(rect(-.85,-.35,.85,.65),1,0),P(earc(0,-.35,.85,.25,Math.PI,2*Math.PI,20),0,0),P([[-.55,-.6],[-.55,.65]],0,0),P([[.55,-.6],[.55,.65]],0,0),P(rect(-.1,-.15,.1,.1),1,1),...M('flower',.2,-.28,.3,0),...M('flower',.2,.28,.3,0)]},
 radio(){const sp=circ(-.4,.08,.3,24);return [P(rect(-.85,-.45,.85,.6),1,0),P(sp,1,0),...hatch(circ(-.4,.08,.26,24),.08,0),P(rect(.1,-.2,.7,0),1,0),P(circ(.25,.32,.1,10),1,0),P(circ(.55,.32,.1,10),1,0),P([[.4,-.45],[.75,-.9]],0,0),P(circ(.76,-.92,.04,6),1,1)]},
 boi(){return [P([[0,-.6],[-.9,-.75],[-.9,.65],[0,.8]],1,0),P([[0,-.6],[.9,-.75],[.9,.65],[0,.8]],1,0),...[-.4,-.2,0,.2,.4].map(y=>P([[-.75,y-.08],[-.12,y+.02]],0,0)),...[-.4,-.2,0,.2,.4].map(y=>P([[.12,y+.02],[.75,y-.08]],0,0))]},
 doat(){return [P(earc(0,.45,.5,.42,0,Math.PI,18).concat(earc(0,.45,.5,.18,Math.PI,2*Math.PI,18).slice(1)),1,0),P(rect(-.2,.15,.2,.3),1,1),...M('quill',.75,.25,-.25,.35)]},
 slate(){return [P(rect(-.85,-.65,.85,.65),1,0),P(rect(-.72,-.52,.72,.52),1,0),...[-.3,0,.3].map(y=>P([[-.6,y],[.6,y]],0,0)),P(bez([-.5,-.2],[-.4,-.4],[-.3,-.05],[-.2,-.25],8),0,0)]},
 khaam(){return [P(rect(-.85,-.55,.85,.55),1,0),P([[-.85,-.55],[0,.1],[.85,-.55]],0,0),P([[-.85,.55],[-.2,-.05]],0,0),P([[.85,.55],[.2,-.05]],0,0),P(heartP(0,.05,.15),1,1)]},
 janala(){const ar=[[-.6,.85],[-.6,-.3]].concat(arcP(0,-.3,.6,Math.PI,2*Math.PI,20).slice(1),[[.6,.85]]),o=[P(ar,1,0),P([[0,-.9],[0,.85]],0,0),P([[-.6,.25],[.6,.25]],0,0)];
  for(let k=1;k<4;k++)o.push(P([[-.6+k*.3,-.25],[-.6+k*.3,.85]],0,0));o.push(...M('flower',.18,0,-.45,0));return o},
 darja(){const o=[P(rect(-.7,-.9,.7,.9),1,0),P([[0,-.9],[0,.9]],0,0)];[-1,1].forEach(s=>o.push(P(rect(s>0?.12:-.58,-.75,s>0?.58:-.12,-.15),1,0),P(rect(s>0?.12:-.58,.05,s>0?.58:-.12,.75),1,0),P(circ(s*.15,0,.05,8),1,1)));return o}
});

/* ---------- out and about ---------- */
Object.assign(MOTIF,{
 rickshaw(){const o=[P(circ(-.45,.45,.42,36),1,0),P(circ(-.45,.45,.06,8),1,1),P(circ(.7,.62,.25,24),1,0),P(circ(.7,.62,.04,6),1,1)];for(let k=0;k<12;k++){const a=k*Math.PI/6;o.push(P([[-.45,.45],[-.45+.4*Math.cos(a),.45+.4*Math.sin(a)]],0,0))}
  o.push(P([[-.75,.05],[-.1,.05],[-.05,.3],[-.75,.25]],1,1),P(bez([-.85,.05],[-.95,-.7],[-.2,-.85],[0,.05],14),0,0),P(bez([-.75,.05],[-.8,-.55],[-.25,-.65],[-.12,.05],12),0,0),P([[-.05,.3],[.7,.62]],0,0),P([[.55,.1],[.7,.62]],0,0),P([[.45,.08],[.68,.1]],0,0));return o},
 cartwheel(p){const n=va(p,'a',12),o=[P(circ(0,0,.92,60),1,0),P(circ(0,0,.78,52),1,0),P(circ(0,0,.18,16),1,0),P(circ(0,0,.07,8),1,1)];
  for(let k=0;k<n;k++){const a=k*2*Math.PI/n,c=Math.cos(a),s=Math.sin(a),w=.03;o.push(P([[.18*c-w*s,.18*s+w*c],[.78*c-w*s,.78*s+w*c],[.78*c+w*s,.78*s-w*c],[.18*c+w*s,.18*s-w*c]],1,0))}return o},
 cycle(){return [P(circ(-.55,.4,.38,32),1,0),P(circ(.55,.4,.38,32),1,0),P([[-.55,.4],[-.1,.4],[.25,-.2],[-.35,-.2],[-.55,.4]],0,0),P([[-.1,.4],[-.35,-.2]],0,0),P([[.25,-.2],[.55,.4]],0,0),P([[.25,-.2],[.2,-.42],[.38,-.45]],0,0),P([[-.35,-.2],[-.4,-.35]],0,0),P([[-.5,-.35],[-.28,-.35]],0,0),P(circ(-.1,.4,.07,8),1,0)]},
 sampan(){const h=bez([-.98,-.35],[-.6,.45],[.6,.45],[.95,-.1],16).concat(bez([.95,-.1],[.5,.15],[-.5,.15],[-.98,-.35],14).slice(1,-1)),roof=earc(-.1,.05,.42,.38,Math.PI,2*Math.PI,16);
  return [P(h,1,1),P(roof,1,0),...hatch(earc(-.1,.05,.38,.34,Math.PI,2*Math.PI,16),.1,Math.PI/2),P(wave(-.9,.9,.62,.04,5),0,0)]},
 bajra(){const o=[P(bez([-.98,.15],[-.6,.6],[.6,.6],[.98,.15],16),1,1),P(rect(-.55,-.35,.45,.18),1,0),P([[-.62,-.35],[-.05,-.65],[.52,-.35]],1,0)];[-.4,-.15,.1,.3].forEach(x=>o.push(P(rect(x,-.22,x+.12,0),1,0)));
  o.push(P([[.7,.15],[.7,-.75]],0,0),P([[.72,-.72],[.95,-.62],[.72,-.52]],1,1),P(wave(-.9,.9,.75,.04,5),0,0));return o},
 dingi(){return [P(bez([-.95,0],[-.5,.4],[.5,.4],[.95,0],16).concat(bez([.95,0],[.5,.15],[-.5,.15],[-.95,0],14).slice(1,-1)),1,1),P([[-.2,.15],[.5,-.7]],0,0),P(ell(.55,-.75,.06,.14,.7,10),1,1),P(wave(-.9,.9,.45,.04,5),0,0)]},
 sailboat(){return [P(bez([-.8,.35],[-.5,.65],[.5,.65],[.8,.35],14),1,1),P([[0,.35],[0,-.95]],0,0),P([[-.65,-.8],[.65,-.8],[.55,.2],[-.55,.2]],1,0),...[-.55,-.3,-.05].map(y=>P([[-.62+(y+.8)*.1,y],[.62-(y+.8)*.1,y]],0,0)),P(wave(-.9,.9,.75,.04,5),0,0)]},
 train(){return [P(rect(-.9,-.25,.35,.45),1,0),P(rect(.35,-.55,.9,.45),1,0),P(rect(.48,-.45,.78,-.15),1,0),P(rect(-.75,-.65,-.5,-.25),1,0),P(ell(-.62,-.72,.2,.06,0,14),1,0),...[-.65,-.2,.6].map(x=>P(circ(x,.55,.16,16),1,0)),P([[-.98,.72],[.98,.72]],0,0),P(rect(-.4,-.1,-.05,.15),1,0),P(rect(0,-.1,.3,.15),1,0)]},
 tinHouse(){const roof=[[-.95,-.05],[-.5,-.75],[.5,-.75],[.95,-.05]];return[P(roof,1,0),...hatch(roof,.1,Math.PI/2),P(rect(-.8,-.05,.8,.8),1,0),P(rect(-.15,.25,.15,.8),1,1),P(rect(-.6,.15,-.32,.45),1,0),P(rect(.32,.15,.6,.45),1,0),P([[-.95,.88],[.95,.88]],0,0)]},
 dotola(){const o=[P(rect(-.7,-.6,.7,.88),1,0),P([[-.85,-.6],[0,-.98],[.85,-.6]],1,0),P(rect(-.85,.12,.85,.2),1,0)];[[-.5,-.45],[.2,-.45],[-.5,.42],[.2,.42]].forEach(([x,y])=>o.push(P(rect(x,y,x+.3,y+.3),1,0),P([[x+.15,y],[x+.15,y+.3]],0,0)));
  for(let k=-8;k<=8;k++)o.push(P([[k*.1,.2],[k*.1,.3]],0,0));o.push(P(rect(-.12,.55,.12,.88),1,1));return o},
 kuaa(){const o=[P(ell(0,.05,.6,.18,0,32),1,0),P([[-.6,.05],[-.6,.7]],0,0),P([[.6,.05],[.6,.7]],0,0),P(earc(0,.7,.6,.18,0,Math.PI,18),0,0)];
  for(let r=0;r<3;r++)for(let k=0;k<4;k++){const y=.2+r*.17,x=-.45+k*.3+(r%2)*.15;if(x<.58)o.push(P([[x,y],[x,y+.15]],0,0))}
  o.push(P([[-.75,.05],[-.75,-.8]],0,0),P([[.75,.05],[.75,-.8]],0,0),P([[-.8,-.8],[.8,-.8]],0,0),P(circ(0,-.8,.08,10),1,0),P([[0,-.72],[0,-.35]],0,0),P([[-.15,-.35],[.15,-.35],[.1,-.12],[-.1,-.12]],1,1));return o},
 tubewell(){return [P(rect(-.18,-.55,.18,.55),1,0),P(ell(0,-.55,.18,.05,0,12),1,1),P([[.15,-.45],[.85,-.85],[.88,-.78],[.18,-.36]],1,1),P([[-.18,0],[-.55,0],[-.55,.12],[-.18,.12]],1,0),P([[-.55,.12],[-.55,.22]],0,0),P(drop(-.55,.32,.05),1,1),P(rect(-.7,.55,.7,.75),1,0),P(rect(-.25,.48,.25,.55),1,1)]},
 sanko(){const o=[P([[-.95,-.15],[.95,-.15]],0,0),P([[-.95,-.08],[.95,-.08]],0,0)];[-.7,-.25,.25,.7].forEach(x=>o.push(P([[x-.18,.85],[x+.12,-.6]],0,0),P([[x+.18,.85],[x-.12,-.6]],0,0)));
  o.push(P([[-.95,-.55],[.95,-.55]],0,0),P(wave(-.95,.95,.55,.05,5),0,0),P(wave(-.85,.85,.75,.04,4),0,0));return o},
 bera(){const o=[];for(let k=-4;k<=4;k++){const x=k*.2;o.push(P([[x-.04,.9],[x-.04,-.7],[x,-.8],[x+.04,-.7],[x+.04,.9]],1,0))}o.push(P([[-.9,-.35],[.9,-.35]],0,0),P([[-.9,.4],[.9,.4]],0,0),P([[-.9,-.35],[.9,.4]],0,0),P([[-.9,.4],[.9,-.35]],0,0));return o},
 toron(){const o=[P([[-.75,.95],[-.75,-.5]],0,0),P([[-.65,.95],[-.65,-.5]],0,0),P([[.75,.95],[.75,-.5]],0,0),P([[.65,.95],[.65,-.5]],0,0),P(earc(0,-.45,.75,.45,Math.PI,2*Math.PI,24),0,0),P(earc(0,-.45,.65,.35,Math.PI,2*Math.PI,24),0,0)];
  const ch=bez([-.65,-.4],[-.3,-.05],[.3,-.05],[.65,-.4],20);o.push(P(ch,0,0));for(let i=1;i<8;i++){const pt=ch[Math.round(i*20/8)];o.push(P([[pt[0]-.06,pt[1]],[pt[0]+.06,pt[1]],[pt[0],pt[1]+.16]],1,1))}o.push(...miniFl(0,-.9,.12,6));return o}
});


/* ---------- jewellery and dress ---------- */
function fing(bx,by,len,hw,a){const o=[[-hw,0],[-hw,-len]];for(let i=1;i<8;i++){const t=Math.PI+i/8*Math.PI;o.push([hw*Math.cos(t),-len+hw*Math.sin(t)])}o.push([hw,-len],[hw,0]);return mv(rotp(o,a),bx,by)}
/* the dark heart at the centre of a peacock feather's eye, point upward */
function eyeCore(cx,cy,s){return heartP(0,0,s).map(([x,y])=>[cx+x,cy+.205*s-y])}
/* short side lines along a path, leaning toward its end */
function barbs(pts,len,lean,from,to,step){const o=[];for(let i=from;i<to;i+=step||1){const [x,y]=pts[i],[x2,y2]=pts[i+1],dx=x2-x,dy=y2-y,l=Math.hypot(dx,dy)||1,ux=dx/l,uy=dy/l,L=typeof len==='function'?len(i):len;
  o.push(P([[x,y],[x-uy*L+ux*L*lean,y+ux*L+uy*L*lean]],0,0),P([[x,y],[x+uy*L+ux*L*lean,y-ux*L+uy*L*lean]],0,0))}return o}
/* scale a list of paths so it fills the [-m,m] square, centred */
function fitBox(list,m){let x0=1e9,y0=1e9,x1=-1e9,y1=-1e9;for(const q of list)for(const [x,y] of q.p){if(x<x0)x0=x;if(y<y0)y0=y;if(x>x1)x1=x;if(y>y1)y1=y}
  const k=2*(m||.95)/Math.max(x1-x0,y1-y0,1e-6),cx=(x0+x1)/2,cy=(y0+y1)/2;return list.map(q=>({p:q.p.map(([x,y])=>[(x-cx)*k,(y-cy)*k]),c:q.c,f:q.f}))}
/* bend an upright motif (base at y=1, top at y=-1) so it curls over more and more toward the top */
function curl(list,k){const N=60,C=[[0,1]];let x=0,y=1;for(let i=1;i<=N;i++){const s=i/N,h=-Math.PI/2+k*s*s;x+=Math.cos(h)*2/N;y+=Math.sin(h)*2/N;C.push([x,y])}
  const at=v=>{const s=Math.max(0,Math.min(1,(1-v)/2)),f=s*N,i=Math.min(N-1,Math.floor(f)),t=f-i,a=C[i],b=C[i+1];return[a[0]+(b[0]-a[0])*t,a[1]+(b[1]-a[1])*t,-Math.PI/2+k*s*s]};
  return fitBox(list.map(q=>({p:q.p.map(([px,py])=>{const [cx,cy,h]=at(py);return[cx-Math.sin(h)*px,cy+Math.cos(h)*px]}),c:q.c,f:q.f})),.95)}

Object.assign(MOTIF,{
 payel(){const o=[P(earc(0,-.4,.85,.72,0,Math.PI,32),0,0),P(earc(0,-.4,.77,.64,0,Math.PI,30),0,0),P(circ(.81,-.47,.06,8),1,0),P(circ(-.81,-.47,.06,8),1,0)];
  for(let k=1;k<10;k++){const t=k/10*Math.PI,x=.81*Math.cos(t),y=-.4+.68*Math.sin(t);o.push(P([[x,y+.04],[x,y+.12]],0,0),P(circ(x,y+.2,.075,12),1,k%2?0:1));if(k%2)o.push(P([[x-.04,y+.22],[x+.04,y+.22]],0,0))}return o},
 tikli(){const o=[P([[0,-.95],[0,-.04]],0,0),P(circ(0,-.95,.05,8),1,0)];for(let i=0;i<4;i++)o.push(P(circ(0,-.78+i*.17,.045,8),1,1));
  o.push(P(circ(0,.32,.36,32),1,0),P(circ(0,.32,.27,28),1,0),...miniFl(0,.32,.24,6,'pt'));for(let k=1;k<6;k++){const a=k/6*Math.PI,x=.42*Math.cos(a),y=.32+.42*Math.sin(a);o.push(P(drop(x,y+.08,.07),1,1))}return o},
 teep(){const o=[P(circ(0,.2,.26,24),1,1),P(circ(0,.2,.4,32),1,0),P(drop(0,-.55,.28),1,1),P(arcP(0,.2,.72,.15*Math.PI,.85*Math.PI,20),0,0)];
  for(let k=0;k<16;k++){const a=k*Math.PI/8;if(Math.sin(a)<-.75)continue;o.push(P(circ(.56*Math.cos(a),.2+.56*Math.sin(a),.045,8),1,1))}return o},
 bala(){const o=[P(circ(0,0,.94,64),1,0),P(circ(0,0,.88,60),1,0),P(circ(0,0,.66,48),1,0),P(circ(0,0,.6,44),1,0)];
  for(let k=0;k<8;k++){const a=k*Math.PI/4,b=a+Math.PI/8;o.push(...miniFl(.77*Math.cos(a),.77*Math.sin(a),.1,5),P(circ(.77*Math.cos(b),.77*Math.sin(b),.03,6),1,1))}return o},
 angti(){const g=[[-.3,-.42],[-.16,-.66],[.16,-.66],[.3,-.42],[0,-.12]];return [P(ell(0,.3,.62,.55,0,44),1,0),P(ell(0,.3,.5,.44,0,40),1,0),P(g,1,0),P([[-.3,-.42],[.3,-.42]],0,0),
  P([[-.16,-.66],[-.08,-.42],[0,-.12]],0,0),P([[.16,-.66],[.08,-.42],[0,-.12]],0,0),P([[-.4,-.75],[-.5,-.88]],0,0),P([[0,-.78],[0,-.95]],0,0),P([[.4,-.75],[.5,-.88]],0,0)]},
 dul(){const out=earc(0,-.3,.62,.8,0,Math.PI,24),inn=earc(0,-.3,.36,.44,Math.PI,0,20),o=[P(circ(0,-.8,.12,14),1,1),P([[-.49,-.3],[0,-.62],[.49,-.3]],0,0),P(out.concat(inn),1,0)];
  for(let k=1;k<8;k++){const t=k/8*Math.PI;o.push(P(circ(.49*Math.cos(t),-.3+.62*Math.sin(t),.045,8),1,1))}
  for(let k=0;k<=8;k++){const t=k/8*Math.PI;o.push(P(circ(.62*Math.cos(t),-.2+.8*Math.sin(t),.04,6),1,1))}return o},
 locket(){const o=[P([[-.75,-.98],[0,-.3]],0,0),P([[.75,-.98],[0,-.3]],0,0)];for(let i=1;i<6;i++){const u=i/6;o.push(P(circ(-.75+.75*u,-.98+.68*u,.035,6),1,1),P(circ(.75-.75*u,-.98+.68*u,.035,6),1,1))}
  o.push(P(circ(0,-.24,.07,10),1,0),P(ell(0,.34,.4,.52,0,40),1,0),P(ell(0,.34,.3,.42,0,36),1,0),...miniFl(0,.34,.22,6,'pt'));return o},
 mukut(){const c=[[-.8,.35],[-.9,-.45],[-.55,-.1],[-.3,-.6],[-.12,-.2],[0,-.85],[.12,-.2],[.3,-.6],[.55,-.1],[.9,-.45],[.8,.35]],o=[P(c,1,0),P(rect(-.8,.35,.8,.62),1,0)];
  [[-.9,-.45],[-.3,-.6],[0,-.85],[.3,-.6],[.9,-.45]].forEach(([x,y])=>o.push(P(circ(x,y-.07,.06,8),1,1)));
  for(let k=0;k<7;k++)o.push(P(circ(-.6+k*.2,.485,.04,6),1,1));o.push(P(drop(0,.02,.16),1,1),P(circ(-.45,.12,.06,8),1,1),P(circ(.45,.12,.06,8),1,1));return o},
 kata(){const o=[P([[-.05,-.2],[.05,-.2],[0,.98]],1,1),P(circ(0,-.55,.42,32),1,0),...miniFl(0,-.55,.34,8,'pt')];[-1,1].forEach(s=>o.push(P([[s*.3,-.26],[s*.42,.04]],0,0),P(drop(s*.42,.17,.12),1,1)));return o},
 khopa(){const q=[];for(let i=0;i<=90;i++){const t=i/90*Math.PI*2*2.6,r=.04+.44*i/90;q.push([r*Math.cos(t),r*Math.sin(t)])}const o=[P(circ(0,0,.52,40),1,0),P(q,0,0)];
  for(let k=0;k<12;k++){const a=k*Math.PI/6;o.push(...miniFl(.73*Math.cos(a),.73*Math.sin(a),.15,5))}return o},
 tupi(){const d=earc(0,.35,.75,.9,Math.PI,2*Math.PI,28),o=[P(d,1,0),P(rect(-.82,.35,.82,.6),1,0),P(wave(-.75,.75,.475,.06,8),0,0),P(circ(0,-.6,.06,8),1,1)];
  [-.5,-.25,0,.25,.5].forEach(x=>o.push(P(bez([0,-.53],[x*.6,-.4],[x*1.05,0],[x*1.1,.35],10),0,0)));return o},
 nagra(){const s=[[-.85,.45],[-.85,-.05],[-.35,-.05]].concat(bez([-.35,-.05],[-.2,.15],[0,.1],[.2,.05],8).slice(1),bez([.2,.05],[.55,0],[.8,-.05],[.97,-.28],8).slice(1),bez([.97,-.28],[.95,0],[.85,.38],[.7,.45],8).slice(1));
  return [P(s,1,0),P([[-.85,.45],[.7,.45],[.66,.56],[-.82,.56]],1,1),...miniFl(.38,.22,.13,5),P(wave(-.8,-.42,.18,.04,3),0,0),P(wave(-.8,-.42,.32,.04,3),0,0),P(circ(.82,-.12,.035,6),1,1)]},
 khorom(){const o=[];[-1,1].forEach(s=>{const cx=s*.42;o.push(P(ell(cx,0,.3,.9,s*.06,40),1,0),P(ell(cx,.02,.22,.8,s*.06,36),1,0),P(circ(cx-s*.02,-.45,.09,10),1,1),...miniFl(cx+s*.03,.5,.1,5))});return o},
 potli(){const b=bez([-.2,-.35],[-.9,-.15],[-.9,.85],[0,.85],14).concat(bez([0,.85],[.9,.85],[.9,-.15],[.2,-.35],14).slice(1));
  return [P(b,1,0),P([[-.2,-.35],[-.42,-.78],[-.16,-.6],[0,-.84],[.16,-.6],[.42,-.78],[.2,-.35]],0,0),P([[-.3,-.38],[.3,-.38]],0,0),P(bez([.26,-.38],[.48,-.22],[.52,0],[.5,.1],8),0,0),P(drop(.5,.2,.1),1,1),...M('flower',.24,0,.32,0),P(wave(-.5,.5,.66,.04,6),0,0)]},
 sareeFold(){const o=[];[[-.86,.08,.86,.6],[-.72,-.46,.72,.08]].forEach(([x0,y0,x1,y1])=>{o.push(P(rect(x0,y0,x1,y1),1,0),P([[x0,y0+.08],[x1,y0+.08]],0,0),P([[x0,y1-.08],[x1,y1-.08]],0,0),P(wave(x0+.04,x1-.04,y1-.04,.02,12),0,0));
   for(let x=x0+.18;x<x1-.1;x+=.24)o.push(...miniFl(x,(y0+y1)/2,.08,5))});for(let k=0;k<8;k++){const x=-.7+k*.2;o.push(P([[x,.6],[x+.03,.82]],0,0))}return o},
 punjabi(){const s=[[-.15,-.86],[-.45,-.8],[-.95,-.25],[-.78,-.08],[-.47,-.42],[-.5,.92],[.5,.92],[.47,-.42],[.78,-.08],[.95,-.25],[.45,-.8],[.15,-.86],[0,-.68]];
  const o=[P(s,1,0),P([[0,-.68],[0,-.15]],0,0),P([[-.15,-.86],[-.13,-.95],[.13,-.95],[.15,-.86]],0,0),P(wave(-.45,.45,.8,.03,6),0,0),...miniFl(-.26,-.56,.08,5),...miniFl(.26,-.56,.08,5)];
  [-.55,-.42,-.29].forEach(y=>o.push(P(circ(.05,y,.03,6),1,1)));return o},
 gamchha(){const o=[P(rect(-.75,-.65,.75,.65),1,0),P([[-.62,-.65],[-.62,.65]],0,0),P([[.62,-.65],[.62,.65]],0,0)];[-.4,-.13,.13,.4].forEach(x=>o.push(P([[x-.03,-.65],[x-.03,.65]],0,0),P([[x+.03,-.65],[x+.03,.65]],0,0)));
  [-.35,0,.35].forEach(y=>o.push(P([[-.75,y-.03],[.75,y-.03]],0,0),P([[-.75,y+.03],[.75,y+.03]],0,0)));for(let k=0;k<12;k++){const y=-.6+k*1.2/11;o.push(P([[-.75,y],[-.93,y]],0,0),P([[.75,y],[.93,y]],0,0))}return o},
 pagri(){const t=earc(0,.25,.85,.8,Math.PI,2*Math.PI,28).concat(earc(0,.25,.85,.25,0,Math.PI,20).slice(1,-1)),pl=bez([0,-.3],[.06,-.58],[.28,-.8],[.45,-.95],10);
  return [P(t,1,0),...hatch(t,.17,-.3),P(drop(0,-.12,.17),1,1),P(pl,0,0),...barbs(pl,.09,.6,2,9,1)]},
 botam(){const o=[P(circ(0,0,.88,56),1,0),P(circ(0,0,.7,48),1,0)];[[-1,-1],[1,-1],[1,1],[-1,1]].forEach(([x,y])=>o.push(P(circ(x*.24,y*.24,.1,12),1,0)));o.push(P([[-.24,-.24],[.24,.24]],0,0),P([[.24,-.24],[-.24,.24]],0,0));return o},
 mehedi(){const F=[[-.36,.42,.42,.12,-.85],[-.28,.02,.62,.1,-.1],[-.06,-.02,.72,.1,-.02],[.16,0,.64,.1,.08],[.37,.1,.45,.09,.22]],pts=[[-.36,.98],[-.44,.62]];
  F.forEach(f=>pts.push(...fing(...f)));pts.push([.43,.5],[.36,.98]);const o=[P(pts,1,0),...M('mandala',.27,0,.5,0),P(wave(-.34,.34,.86,.03,5),0,0),P([[-.36,.93],[.36,.93]],0,0)];
  F.forEach(([bx,by,len,hw,a])=>{const tip=mv(rotp([[0,-len]],a),bx,by)[0];o.push(P(circ(tip[0],tip[1],hw*.72,10),1,1));[.42,.66].forEach(f=>o.push(P(mv(rotp([[-hw*.8,-len*f],[hw*.8,-len*f]],a),bx,by),0,0)))});
  return tf(o,1,.12,-.05,0)}
});

/* ---------- music and festivals ---------- */
Object.assign(MOTIF,{
 dotara(){const o=[P(ell(0,.52,.38,.4,0,36),1,0),P(ell(0,.52,.26,.28,0,30),1,0),P(rect(-.06,-.75,.06,.14),1,0),P([[-.025,.9],[-.025,-.72]],0,0),P([[.025,.9],[.025,-.72]],0,0),...leafAt(0,-.75,.24,.1,-Math.PI/2,1),P(rect(-.12,.83,.12,.9),1,1)];
  [-.52,-.64].forEach(y=>o.push(P([[-.06,y],[-.17,y-.03]],0,0),P([[.06,y],[.17,y-.03]],0,0)));return tf(o,1,0,0,.3)},
 tabla(){const o=[P(ell(-.45,0,.38,.1,0,28),1,0),P(earc(-.45,0,.38,.65,0,Math.PI,20),0,0),P(ell(-.4,0,.13,.04,0,14),1,1),
   P(ell(.45,-.28,.28,.08,0,24),1,0),P([[.17,-.28],[.2,.7]],0,0),P([[.73,-.28],[.7,.7]],0,0),P(earc(.45,.7,.25,.07,0,Math.PI,14),0,0),P(ell(.45,-.28,.1,.03,0,12),1,1),
   P([[.21,-.22],[.28,.66],[.36,-.22],[.44,.66],[.52,-.22],[.6,.66],[.68,-.22]],0,0)];[.24,.38,.52].forEach(x=>o.push(P(rect(x,.3,x+.07,.42),1,1)));return o},
 harmonium(){const o=[P(rect(-.88,0,.88,.75),1,0),P(rect(-.88,-.3,.88,0),1,0),P(rect(-.82,-.62,.82,-.3),1,0),P([[-.82,-.6],[-.7,-.32],[-.58,-.6],[-.46,-.32],[-.34,-.6],[-.22,-.32],[-.1,-.6],[.02,-.32],[.14,-.6],[.26,-.32],[.38,-.6],[.5,-.32],[.62,-.6],[.74,-.32],[.82,-.5]],0,0)];
  for(let k=1;k<16;k++)o.push(P([[-.88+k*.11,-.3],[-.88+k*.11,0]],0,0));[1,2,4,5,6,8,9,11,12,13].forEach(k=>o.push(P(rect(-.88+k*.11-.03,-.3,-.88+k*.11+.03,-.13),1,1)));
  [-.6,-.3,.3,.6].forEach(x=>o.push(P(circ(x,.22,.06,8),1,0)));o.push(...M('flower',.18,0,.42,0),P(wave(-.75,.75,.63,.03,8),0,0));return o},
 khol(){const T=bez([-.8,-.22],[-.3,-.58],[.3,-.58],[.85,-.32],16),B=bez([.85,.32],[.3,.58],[-.3,.58],[-.8,.22],16),o=[P(T,0,0),P(B,0,0),P(ell(-.8,0,.07,.22,0,16),1,0),P(ell(.85,0,.09,.32,0,20),1,0)];
  for(let i=-3;i<=3;i++)o.push(P(bez([-.8,i*.065],[-.3,i*.15],[.3,i*.15],[.85,i*.095],12),0,0));o.push(P(bez([-.8,-.22],[-.6,-.98],[.6,-.98],[.85,-.32],16),0,0));return o},
 sitar(){const o=[P(circ(0,.6,.36,32),1,0),P(circ(0,.6,.24,26),1,0),P(rect(-.07,-.86,.07,.25),1,0),P(circ(0,-.88,.1,12),1,0),P([[0,.9],[0,-.84]],0,0),...miniFl(0,.6,.13,6,'pt')];
  for(let k=0;k<8;k++){const y=-.7+k*.12;o.push(P([[-.07,y],[.07,y]],0,0))}[-.55,-.4,-.25,-.1].forEach((y,i)=>o.push(P([[i%2?.07:-.07,y],[i%2?.18:-.18,y-.04]],0,0)));return tf(o,1,0,0,-.5)},
 kartal(){const o=[];[[-.45,.25,-.25],[.45,.25,.25]].forEach(([x,y,a])=>{o.push(P(ell(x,y,.36,.3,a,32),1,0),P(ell(x,y,.22,.18,a,24),1,0),P(circ(x,y,.07,10),1,1),P(bez([x,y-.07],[x*.8,-.3],[x*.3,-.55],[0,-.62],10),0,0));
   const a0=x>0?-.5:Math.PI-.5;[.44,.5].forEach(r=>o.push(P(arcP(x,y,r,a0,a0+1,10),0,0)))});
  o.push(P(circ(0,-.66,.06,8),1,1),P([[0,-.66],[-.08,-.92]],0,0),P([[0,-.66],[.08,-.92]],0,0));return o},
 sanai(){const o=[P([[-.85,-.04],[.45,-.09],[.45,.09],[-.85,.04]],1,0),P(bez([.45,-.09],[.65,-.12],[.85,-.2],[.95,-.33],10).concat(bez([.95,.33],[.85,.2],[.65,.12],[.45,.09],10)),1,0),P(ell(.95,0,.05,.33,0,16),1,0),P(rect(-.98,-.025,-.85,.025),1,1)];
  for(let k=0;k<7;k++)o.push(P(circ(-.55+k*.13,0,.025,6),1,1));return tf(o,1,0,0,-.55)},
 ghonta(){const L=bez([-.75,.6],[-.55,.45],[-.45,-.45],[0,-.45],14),R=L.slice().reverse().map(([x,y])=>[-x,y]),o=[P(L.concat(R.slice(1)),1,0),P(ell(0,.6,.75,.12,0,32),1,0),P(circ(0,.82,.09,10),1,1),P([[0,.6],[0,.73]],0,0),P(circ(0,-.62,.15,16),1,0)];
  o.push(P(earc(0,.16,.5,.06,0,Math.PI,16),0,0),P(earc(0,.32,.6,.07,0,Math.PI,16),0,0),...miniFl(0,-.12,.14,6));return o},
 fanush(){const top=x=>-.3-.6*Math.sqrt(Math.max(0,1-(x/.62)**2)),d=earc(0,-.3,.62,.6,Math.PI,2*Math.PI,24),o=[P(d.concat([[.62,-.3],[.3,.55],[-.3,.55]]),1,0),P(ell(0,.55,.3,.06,0,20),1,0)];
  [-.36,-.13,.13,.36].forEach(x=>o.push(P(bez([x,top(x)],[x*1.35,-.4],[x*1.1,.1],[x*.78,.53],10),0,0)));
  o.push(P(drop(0,.42,.13),1,1));[[-.82,-.7],[.8,-.8],[-.75,.5],[.78,.35],[0,.88]].forEach(([x,y])=>o.push(P(starP(4,.09,.03,x,y),1,1)));return o},
 lanthon(){const o=[P(circ(0,-.9,.07,10),1,0),P([[0,-.83],[0,-.72]],0,0),P([[-.45,-.42],[0,-.72],[.45,-.42]],1,0),P([[-.45,-.42],[-.52,.5],[.52,.5],[.45,-.42]],1,0),P([[-.62,.5],[.62,.5],[.45,.75],[-.45,.75]],1,0)];
  const w=[[-.28,.38],[-.28,-.1]].concat(arcP(0,-.1,.28,Math.PI,2*Math.PI,12).slice(1),[[.28,.38]]);o.push(P(w,1,0),P(starP(6,.16,.08,0,.1),1,1),P([[-.48,0],[-.3,0]],0,0),P([[.3,0],[.48,0]],0,0),P(circ(0,.88,.05,8),1,1),P([[0,.75],[0,.83]],0,0));return o},
 balloon(p){const n=va(p,'a',3),rx=Math.min(.42,1/(n+.6)),ry=rx*1.22,R=1.85-ry,tm=Math.asin(Math.min(1,(.92-rx)/R)),sp=n>1?Math.min(.62,2*tm/(n-1)):0,o=[];
  for(let k=0;k<n;k++){const th=(k-(n-1)/2)*sp,cx=R*Math.sin(th),cy=.9-R*Math.cos(th),bx=cx-ry*Math.sin(th),by=cy+ry*Math.cos(th);
   o.push(P(ell(cx,cy,rx,ry,th,32),1,1),P([[bx,by],[bx-.04,by+.07],[bx+.04,by+.07]],1,1),P(bez([bx,by+.07],[bx+.06,by+.3],[bx*.4-.05,.6],[0,.92],12),0,0))}return o},
 fuljhuri(){const c=[.15,-.15],o=[P([[-.75,.92],[c[0]-.06,c[1]+.08]],0,0),P([[-.7,.94],[c[0]-.02,c[1]+.1]],0,0),P(circ(c[0],c[1],.07,8),1,1)];
  for(let k=0;k<20;k++){const a=k*Math.PI/10+.1;if(Math.abs(a-2.27)<.25)continue;const l=k%2?.4:.65;o.push(P([[c[0]+.11*Math.cos(a),c[1]+.11*Math.sin(a)],[c[0]+l*Math.cos(a),c[1]+l*Math.sin(a)]],0,0));
   if(!(k%2))o.push(P(starP(4,.06,.02,c[0]+(l+.08)*Math.cos(a),c[1]+(l+.08)*Math.sin(a)),1,1))}return o},
 alpana1(){const o=[...M('lotus',.34,0,0,0),P(circ(0,0,.42,36),1,0)];for(let k=0;k<8;k++){const a=k*Math.PI/4,b=a+Math.PI/8,cx=.74*Math.cos(a),cy=.74*Math.sin(a),sp=[];
   o.push(P(rotp(petal(.47,.97,.19,14),a),1,0));for(let i=0;i<=24;i++){const t=a+i/24*Math.PI*3,r=.015+.11*i/24;sp.push([cx+r*Math.cos(t),cy+r*Math.sin(t)])}o.push(P(sp,0,0));
   o.push(P(circ(.55*Math.cos(b),.55*Math.sin(b),.035,8),1,1),P(mv(rotp(drop(0,0,.09),b+Math.PI/2),.86*Math.cos(b),.86*Math.sin(b)),1,1))}return o},
 alpana2(){const o=[...M('flower',.3,0,0,0),P(circ(0,0,.3,30),1,0)],sc=[];for(let i=0;i<=192;i++){const a=i/192*2*Math.PI,r=.47+.06*Math.abs(Math.sin(6*a));sc.push([r*Math.cos(a),r*Math.sin(a)])}
  o.push(P(sc,1,0),P(poly(4,.92,0),1,0),P(poly(4,.8,0),1,0));for(let k=0;k<4;k++){const a=k*Math.PI/2,sp=[];for(let i=0;i<=30;i++){const t=a+Math.PI+i/30*Math.PI*2.2,r=.02+.11*i/30;sp.push([.66*Math.cos(a)+r*Math.cos(t),.66*Math.sin(a)+r*Math.sin(t)])}o.push(P(sp,0,0))}
  for(let k=0;k<4;k++){const a=k*Math.PI/2+Math.PI/4;o.push(...leafAt(.72*Math.cos(a),.72*Math.sin(a),.44,.13,a,1))}return o},
 alpana3(){const o=[P(circ(0,0,.2,20),1,1),P(circ(0,0,.3,28),1,0)];for(let k=0;k<6;k++){const a=k*Math.PI/3,st=[];for(let i=0;i<=12;i++){const u=i/12,r=.32+.56*u,t=a+.35*u*u;st.push([r*Math.cos(t),r*Math.sin(t)])}o.push(P(st,0,0));
   for(let i=4;i<=12;i+=2){const [x,y]=st[i],t=a+.35*(i/12)**2;[-1,1].forEach(s=>o.push(P(ell(x+.06*Math.cos(t+s*1.1),y+.06*Math.sin(t+s*1.1),.06,.024,t+s*.7,10),1,1)))}
   const b=a+Math.PI/6;o.push(...leafAt(.36*Math.cos(b),.36*Math.sin(b),.3,.08,b,0))}
  for(let k=0;k<36;k++){const a=k*Math.PI/18;o.push(P(circ(.95*Math.cos(a),.95*Math.sin(a),.025,6),1,1))}return o},
 dhak(){const T=bez([-.75,-.1],[-.4,-.32],[.4,-.32],[.75,-.1],16),B=bez([.75,.65],[.4,.87],[-.4,.87],[-.75,.65],16),o=[P(T.concat(B),1,0),P(ell(-.75,.275,.1,.375,0,24),1,0),P(ell(.75,.275,.1,.375,0,24),1,0)],z=[];
  for(let k=0;k<=10;k++)z.push([k%2?.62:-.62,-.1+k*.077]);o.push(P(z,0,0));for(let k=0;k<5;k++){const a=-Math.PI/2+(k-2)*.32;o.push(P(mv(rotp(leafShape(.6,.09),a),0,-.27),1,0),P([[0,-.27],[.55*Math.cos(a),-.27+.55*Math.sin(a)]],0,0))}return o},
 bunting(p){const n=va(p,'a',7),o=[];[[-.62,.28,n],[.12,.3,n-1]].forEach(([y0,sag,m])=>{const s=u=>[-.95+1.9*u,y0+sag*4*u*(1-u)],L=[];for(let i=0;i<=24;i++)L.push(s(i/24));o.push(P(L,0,0));
   const h=Math.min(.38,1.5/m+.1);for(let k=0;k<m;k++){const u1=(k+.1)/m,u2=(k+.9)/m,a=s(u1),b=s(u2),c=s((u1+u2)/2);o.push(P([a,b,[c[0],c[1]+h]],1,k%2===0));if(k%2)o.push(P(circ(c[0],c[1]+h*.38,.03,6),1,1))}});return o},
 gift(){const o=[P(rect(-.7,-.15,.7,.85),1,0),P(rect(-.8,-.38,.8,-.15),1,0),P(rect(-.1,-.38,.1,.85),1,1),...dotsIn(rect(-.62,-.07,-.18,.77),.2,.03),...dotsIn(rect(.18,-.07,.62,.77),.2,.03)];
  o.push(P(mv(rotp(petal(0,.45,.2,14),-Math.PI*.8),0,-.4),1,0),P(mv(rotp(petal(0,.45,.2,14),-Math.PI*.2),0,-.4),1,0),P(circ(0,-.42,.07,10),1,1));return o},
 eidMoon(){const o=[P(crescent(-.15,-.12,.75,-.6),1,0),...crescentRows(-.15,-.12,.75,-.6,3).map(p=>P(p,0,0)),P(star5(.45,-.45,.24,.1),1,1)];
  [-.45,.2].forEach((x,i)=>{const y0=-.12+Math.sqrt(.5625-(x+.15)**2),y1=i?.86:.78;o.push(P([[x,y0],[x,y1-.1]],0,0),P(star5(x,y1,.1,.04),1,1))});return o}
});

/* ---------- feathers, paw prints and tiger stripes (patterns only, never the animals) ---------- */
function featherPaths(w,start,notches){const N=32,sh=[];for(let i=0;i<=N;i++){const u=i/N;sh.push([.05*Math.sin(u*Math.PI),.98-1.93*u])}
  const L=[],R=[];for(let i=start;i<=N;i++){const u=(i-start)/(N-start),wd=w*Math.pow(Math.sin(Math.PI*(.04+.94*u)),.6)*(1-.3*u),[x,y]=sh[i],cl=notches.includes(i)?.45:1,cr=notches.includes(i+3)?.5:1;
    L.push([x-wd*cl,y-wd*.45*cl]);R.push([x+wd*cr,y-wd*.45*cr])}
  return{sh,L,R,vane:[sh[start]].concat(L.slice(1),[[sh[N][0],sh[N][1]-.03]],R.slice(1).reverse())}}
function tstripe(x0,y0,len,w0,dir,bend,ph){const up=[],dn=[];for(let i=0;i<=18;i++){const u=i/18,x=x0+dir*len*u,yc=y0+bend*u*u+.05*Math.sin(u*5+ph),w=w0*Math.pow(1-u,.85)+.006;up.push([x,yc-w]);dn.push([x,yc+w])}return up.concat(dn.reverse())}
Object.assign(MOTIF,{
 peacockFeather(){const sh=bez([0,.98],[.04,.5],[-.03,.05],[0,-.1],20),o=[P(sh,0,0),...barbs(sh,i=>.07+.2*i/20,.75,2,14,1)];
  o.push(P(ell(0,-.42,.34,.42,0,40),1,0),P(ell(0,-.4,.24,.3,0,34),1,0),P(ell(0,-.38,.15,.19,0,26),1,0),P(eyeCore(0,-.36,.14),1,1));
  for(let k=0;k<30;k++){const a=k*2*Math.PI/30,c=Math.cos(a),s=Math.sin(a);if(s>.8)continue;const L=k%2?.08:.12;o.push(P([[.35*c,-.42+.43*s],[(.35+L)*c,-.42+(.43+L)*s]],0,0))}return o},
 peacockEye(){const o=[P(ell(0,0,.62,.74,0,52),1,0),P(ell(0,.05,.45,.55,0,44),1,0),P(ell(0,.1,.3,.37,0,34),1,0),P(eyeCore(0,.14,.27),1,1)];
  for(let k=0;k<40;k++){const a=k*Math.PI/20,c=Math.cos(a),s=Math.sin(a),L=k%2?.13:.2;o.push(P([[.64*c,.76*s],[(.64+L)*c,(.76+L)*s]],0,0))}return o},
 peacockPair(){return [...M('peacockFeather',.82,-.2,.05,-.38),...M('peacockFeather',.82,.2,.05,.38)]},
 peacockFan(p){const n=va(p,'a',5),A=Math.min(1.45,.23*(n-1)),f=tf(MOTIF.peacockFeather(),1,0,-.98,0),idx=[];for(let k=0;k<n;k++)idx.push(k);idx.sort((a,b)=>Math.abs(b-(n-1)/2)-Math.abs(a-(n-1)/2));
  const o=[];for(const k of idx){const a=n>1?-A+2*A*k/(n-1):0;o.push(...tf(f,1,0,0,a))}o.push(P(circ(0,0,.07,8),1,1));return fitBox(o,.95)},
 feather(){const f=featherPaths(.34,5,[14,22]),o=[P(f.sh,0,0),P(f.vane,1,0)];for(let j=2;j<f.L.length-1;j+=2){const s=f.sh[j+5];o.push(P([s,f.L[j]],0,0),P([s,f.R[j]],0,0))}return o},
 curlFeather(){return curl(MOTIF.feather(),2.4)},
 quill(){const f=featherPaths(.24,11,[19]),o=[P(f.sh.slice(4),0,0),P(f.vane,1,0),P([[-.045,.62],[.045,.62],[0,.98]],1,1)];for(let j=2;j<f.L.length-1;j+=2){const s=f.sh[j+11];o.push(P([s,f.L[j]],0,0),P([s,f.R[j]],0,0))}return tf(o,1,0,0,.5)},
 featherWreath(p){const n=va(p,'a',8),R=.64,s=Math.min(.42,1.3*2*Math.PI*R/(n*1.93)),o=[];for(let k=0;k<n;k++){const ph=k*2*Math.PI/n;o.push(...M('feather',s,R*Math.cos(ph),R*Math.sin(ph),ph+Math.PI))}
  o.push(P(circ(0,0,.3,28),1,0),...miniFl(0,0,.24,6,'pt'));return o},
 tigerPaw(){const pad=[];for(let i=0;i<48;i++){const t=i/48*2*Math.PI,c=Math.cos(t),s=Math.sin(t),lb=s>0?.07*s*Math.cos(3*(t-Math.PI/2)):0;pad.push([.46*c*(1-.16*Math.max(0,-s)),.38+.3*s+lb])}
  const o=[P(pad,1,1)];[[-.64,-.08],[-.24,-.46],[.24,-.46],[.64,-.08]].forEach(([x,y])=>o.push(P(ell(x,y,.25,.17,Math.atan2(y-.38,x),24),1,1)));return o},
 pawTrail(){const o=[];for(let k=0;k<5;k++){const t=-.64+.32*k,sd=(k%2?1:-1)*.1;o.push(...M('tigerPaw',.22,t+sd,-t+sd,Math.PI/4))}return o},
 tigerStripes(){const o=[];[[-1,-.78,1.15,.09,1,.12,0],[-1,-.3,.95,.1,1,-.1,1],[-1,.2,1.2,.09,1,.14,2],[-1,.7,.9,.08,1,-.08,3],[1,-.55,1.05,.09,-1,.1,4],[1,-.05,1.2,.1,-1,-.12,5],[1,.45,.95,.09,-1,.1,6],[1,.88,.7,.06,-1,-.05,1]]
  .forEach(a=>{const s=tstripe(...a);o.push(P(s,1,0),...hatch(s,.045,0))});return o},
 tigerRound(){const o=[P(circ(0,0,.97,64),1,0)];for(let k=0;k<9;k++){const p0=k*2*Math.PI/9,len=k%2?.5:.62,up=[],dn=[];for(let i=0;i<=16;i++){const u=i/16,r=.9-len*u,ph=p0+.5*u+.04*Math.sin(u*6),w=.11*Math.pow(1-u,.85)+.008;
    up.push([r*Math.cos(ph-w/r),r*Math.sin(ph-w/r)]);dn.push([r*Math.cos(ph+w/r),r*Math.sin(ph+w/r)])}
   const s=up.concat(dn.reverse());o.push(P(s,1,0),...hatch(s,.045,p0+.25))}o.push(...M('tigerPaw',.27,0,.02,0));return o}
});


/* ---------- patterns ---------- */
function rrect(cx,cy,w,h,r){const o=[],hw=w/2-r,hh=h/2-r;[[hw,hh,0],[-hw,hh,Math.PI/2],[-hw,-hh,Math.PI],[hw,-hh,1.5*Math.PI]].forEach(([x,y,a0])=>{for(let i=0;i<=6;i++){const t=a0+i/6*Math.PI/2;o.push([cx+x+r*Math.cos(t),cy+y+r*Math.sin(t)])}});return o}
const pol=(r,a)=>[r*Math.cos(a),r*Math.sin(a)];
Object.assign(MOTIF,{
 star5(){const o=[P(starP(5,.96,.38),1,0),P(starP(5,.62,.25),1,0),P(starP(5,.3,.12),1,1)];for(let k=0;k<5;k++){const a=-Math.PI/2+Math.PI/5+k*2*Math.PI/5;o.push(P(circ(.56*Math.cos(a),.56*Math.sin(a),.04,8),1,1))}return o},
 star7(p){const n=va(p,'a',7),rr=Math.max(.3,.95*Math.cos(2*Math.PI/n)/Math.cos(Math.PI/n)),o=[P(starP(n,.95,rr),1,0),P(poly(n,rr*.92,-Math.PI/2+Math.PI/n),1,0),P(starP(n,.36,.18),1,1)];
  for(let k=0;k<n;k++){const a=-Math.PI/2+k*2*Math.PI/n;o.push(P(circ(.76*Math.cos(a),.76*Math.sin(a),.035,8),1,1))}return o},
 star10(){const o=[P(starP(10,.96,.66),1,0),P(circ(0,0,.52,40),1,0),P(starP(5,.46,.2),1,1)];for(let k=0;k<10;k++){const a=-Math.PI/2+k*Math.PI/5+Math.PI/10;o.push(P(circ(.59*Math.cos(a),.59*Math.sin(a),.03,6),1,1))}return o},
 star12(){return [P(starP(12,.96,.72),1,0),P(poly(3,.66,-Math.PI/2),1,0),P(poly(3,.66,Math.PI/2),1,0),P(circ(0,0,.28,28),1,0),P(poly(6,.2,0),1,1)]},
 star16(){return [P(starP(16,.96,.74),1,0),P(starP(8,.64,.42),1,0),P(circ(0,0,.3,30),1,0),P(starP(8,.22,.1),1,1)]},
 starCircle(){const o=[P(circ(0,0,.96,64),1,0),P(circ(0,0,.46,40),1,0),P(starP(8,.36,.16),1,1)];for(let k=0;k<8;k++){const a=k*Math.PI/4;o.push(P(starP(5,.17,.07,.71*Math.cos(a),.71*Math.sin(a)),1,1))}return o},
 girih(p){const n=va(p,'a',8),d=.7*Math.PI/n,o=[P(starP(n,.44,.27),1,1),P(poly(2*n,.97,-Math.PI/2+Math.PI/(2*n)),1,0)];for(let k=0;k<n;k++){const f=-Math.PI/2+k*2*Math.PI/n;o.push(P([pol(.5,f),pol(.68,f-d),pol(.9,f),pol(.68,f+d)],1,0))}return o},
 knotSquare(){return [P(rrect(0,0,1.75,.62,.31),1,0),P(rrect(0,0,1.45,.32,.16),1,0),P(rrect(0,0,.62,1.75,.31),1,0),P(rrect(0,0,.32,1.45,.16),1,0),P(poly(4,.13,0),1,1)]},
 jaali(){const ar=[[-.72,.92],[-.72,-.2]].concat(arcP(0,-.2,.72,Math.PI,2*Math.PI,20).slice(1),[[.72,.92]]),inn=[[-.6,.8],[-.6,-.2]].concat(arcP(0,-.2,.6,Math.PI,2*Math.PI,18).slice(1),[[.6,.8]]);
  return [P(ar,1,0),P(inn,1,0),...hatch(inn,.17,Math.PI/4),...hatch(inn,.17,-Math.PI/4)]},
 hexagon(p){const n=va(p,'a',3),o=[];for(let i=0;i<n;i++){const r=n>1?.95-i*.62/(n-1):.95;o.push(P(poly(6,r,0),1,0))}o.push(P(poly(6,.16,0),1,1));poly(6,.95,0).forEach(([x,y])=>o.push(P(circ(x*.86,y*.86,.035,8),1,1)));return o},
 octagon(p){const n=va(p,'a',3),o=[];for(let i=0;i<n;i++){const r=n>1?.96-i*.62/(n-1):.96;o.push(P(poly(8,r,Math.PI/8),1,0))}o.push(P(poly(8,.16,Math.PI/8),1,1));for(let k=0;k<8;k++){const a=k*Math.PI/4;o.push(P(circ(.8*Math.cos(a),.8*Math.sin(a),.035,8),1,1))}return o},
 honeycomb(){const C=[[0,0],[0,-.52],[0,.52],[-.45,-.26],[.45,-.26],[-.45,.26],[.45,.26]],o=[];C.forEach(([x,y],i)=>{o.push(P(poly(6,.28,0,x,y),1,0));if(i===0)o.push(...miniFl(0,0,.17,6,'pt'));else o.push(P(poly(6,i%2?.12:.08,0,x,y),1,i%2===1))});return o},
 loopKnot(){return [P(lis(3,2,Math.PI/2,.86,200),1,0),P(circ(0,0,.97,64),1,0)]},
 chainLinks(){const o=[...M('flower',.34,0,0,0),P(circ(0,0,.42,36),1,0)];for(let k=0;k<12;k++){const a=k*Math.PI/6,x=.72*Math.cos(a),y=.72*Math.sin(a);
   if(k%2===0)o.push(P(ell(x,y,.22,.13,a+Math.PI/2,24),1,0),P(ell(x,y,.12,.05,a+Math.PI/2,16),1,0));else o.push(P(ell(x,y,.2,.045,a+Math.PI/2,14),1,1))}return o},
 braid(){const o=[P([[-.66,-.96],[-.66,.96]],0,0),P([[.66,-.96],[.66,.96]],0,0)];for(let k=0;k<3;k++)[-.07,.07].forEach(d=>{const q=[];for(let i=0;i<=60;i++){const y=-.94+1.88*i/60;q.push([.42*Math.sin(y*Math.PI*1.25+k*2*Math.PI/3)+d,y])}o.push(P(q,0,0))});return o},
 ropeTwist(){const o=[P(circ(0,0,.96,64),1,0),P(circ(0,0,.7,52),1,0),P(circ(0,0,.5,40),1,0),P(starP(8,.4,.2),1,1)];
  for(let k=0;k<30;k++){const a=k*2*Math.PI/30;o.push(P(bez(pol(.7,a),pol(.78,a+.05),pol(.88,a+.17),pol(.96,a+.24),6),0,0))}return o},
 squares(p){const n=va(p,'a',6),al=.2,o=[];let r=.95;for(let k=0;k<n;k++){o.push(P(poly(4,r,Math.PI/4+k*al),1,k===n-1));r/=Math.cos(al)+Math.sin(al)}return o},
 checker(){const o=[P(rect(-.92,-.92,.92,.92),1,0)];for(let i=0;i<5;i++)for(let j=0;j<5;j++){const x0=-.85+i*.34,y0=-.85+j*.34;if((i+j)%2===0)o.push(P(rect(x0+.03,y0+.03,x0+.31,y0+.31),1,1));else o.push(P(circ(x0+.17,y0+.17,.04,8),1,1))}return o},
 chevron(p){const n=va(p,'a',4),o=[],h=1.6/n,d=Math.min(.11,h*.42);for(let r=0;r<n;r++){const y=-.8+h*(r+.5);[0,d].forEach(e=>o.push(P([[-.9,y+h*.3+e-d/2],[0,y-h*.3+e-d/2],[.9,y+h*.3+e-d/2]],0,0)))}return o},
 zigzagPatch(p){const n=va(p,'a',5),o=[P(rect(-.94,-.94,.94,.94),1,0)],h=1.7/n;for(let r=0;r<n;r++){const y=-.85+h*(r+.5),q=[];for(let i=0;i<=12;i++)q.push([-.85+1.7*i/12,y+(i%2?-1:1)*h*.28]);o.push(P(q,0,0))}return o},
 wavesPatch(p){const n=va(p,'a',5),o=[P(rect(-.94,-.94,.94,.94),1,0)],h=1.7/n;for(let r=0;r<n;r++){const y=-.85+h*(r+.5);o.push(P(wave(-.86,.86,y,(r%2?-1:1)*h*.25,3),0,0))}return o},
 triangles(){const A=[0,-.84],B=[-.97,.84],C=[.97,.84],n=4,o=[P([A,B,C],1,0)],pt=(i,j)=>[A[0]+(B[0]-A[0])*i/n+(C[0]-B[0])*j/n,A[1]+(B[1]-A[1])*i/n+(C[1]-B[1])*j/n];
  for(let i=0;i<n;i++)for(let j=0;j<=i;j++){const t=[pt(i,j),pt(i+1,j),pt(i+1,j+1)],c=cen(t);o.push(P(scl(t,.72,c[0],c[1]),1,(i+j)%2===0));if(j<i){const c2=cen([pt(i,j),pt(i,j+1),pt(i+1,j+1)]);o.push(P(circ(c2[0],c2[1],.04,8),1,1))}}return o},
 squareSpiral(){const q=[[0,0]],D=[[1,0],[0,1],[-1,0],[0,-1]],d=.2,lim=.86;let x=0,y=0;for(let k=1;k<40;k++){const L=d*Math.ceil(k/2),[dx,dy]=D[(k-1)%4];let nx=x+dx*L,ny=y+dy*L;const over=Math.max(Math.abs(nx),Math.abs(ny))>lim;
   if(over){nx=dx?Math.sign(nx)*lim:x;ny=dy?Math.sign(ny)*lim:y}q.push([nx,ny]);x=nx;y=ny;if(over)break}return [P(q,0,0),P(rect(-.96,-.96,.96,.96),1,0)]},
 doubleSpiral(){const L=[];for(let i=0;i<=60;i++){const u=i/60,r=.04+.38*u,t=Math.PI+u*5*Math.PI;L.push([-.47+r*Math.cos(t),r*Math.sin(t)])}const R=L.slice().reverse().map(([x,y])=>[-x,-y]);
  return [P(L.concat(R),0,0),P(ell(0,0,.97,.62,0,60),1,0),P(circ(0,-.52,.04,8),1,1),P(circ(0,.52,.04,8),1,1)]},
 whirl(p){const n=va(p,'a',3),o=[P(circ(0,0,.13,14),1,1),P(circ(0,0,.97,64),1,0)],W0=.42/Math.max(1,n/3);for(let k=0;k<n;k++){const a0=k*2*Math.PI/n,A=[],B=[],C=[];
   for(let i=0;i<=24;i++){const u=i/24,r=.16+.76*u,f=a0+2.1*u,w=W0*Math.sin(Math.PI*Math.pow(u,.8))*(1-.3*u);A.push(pol(r,f));B.push(pol(r,f+w));C.push(pol(r,f+w/2))}
   o.push(P(A.concat(B.reverse().slice(1,-1)),1,0),P(C.slice(2,-2),0,0))}return o},
 quatrefoil(p){const n=va(p,'a',4),o=lobes(n);for(let k=0;k<n;k++)o.push(P(rotp(petal(.2,.68,Math.min(.16,1/n),10),2*k*Math.PI/n-Math.PI/2),1,1));return o},
 trefoil(p){const n=va(p,'a',3),R=n>3?.5:.42,r=Math.min(.5,R*Math.sin(Math.PI/n)*1.25+.08),o=[P(circ(0,0,.97,64),1,0)];for(let k=0;k<n;k++){const a=-Math.PI/2+k*2*Math.PI/n,[x,y]=pol(R,a);o.push(P(circ(x,y,r,32),1,0),P(circ(x,y,r*.5,20),1,0))}
  o.push(P(poly(n,.2,-Math.PI/2),1,1));return o},
 heart(){return [P(heartP(0,-.2,1),1,0),P(heartP(0,-.17,.8),1,0),P(heartP(0,-.12,.55),1,1)]},
 crossDiamond(){const o=[P(poly(4,.96,0),1,0),P(poly(4,.62,0),1,0),P([[0,-.62],[0,.62]],0,0),P([[-.62,0],[.62,0]],0,0)];[[1,1],[1,-1],[-1,1],[-1,-1]].forEach(([a,b])=>o.push(P(poly(4,.09,0,.2*a,.2*b),1,1)));
  [[0,-.79],[.79,0],[0,.79],[-.79,0]].forEach(([x,y])=>o.push(P(circ(x,y,.05,8),1,1)));return o},
 stepDiamond(p){const m=va(p,'a',4);return [P(stepD(.96,m),1,0),P(stepD(.62,Math.max(1,m-1)),1,0),P(stepD(.3,Math.max(1,m-2)),1,1)]},
 teardrop(){const o=[P(circ(0,0,.1,10),1,1)];for(let k=0;k<4;k++){const a=k*Math.PI/2;o.push(P(rotp(drop(0,.52,.42),a),1,0),P(rotp(drop(0,.62,.2),a),1,1),P(circ(...pol(.62,a+Math.PI/4),.05,8),1,1))}return o},
 mandala2(p){const n=va(p,'a',10),o=[P(circ(0,0,.52,44),1,0),P(circ(0,0,.26,26),1,0),P(starP(n,.22,.12),1,1)];for(let k=0;k<n;k++){const a=k*2*Math.PI/n,b=a+Math.PI/n;
   o.push(P(rotp(petal(.54,.97,Math.min(.2,1.5/n),12),a),1,0),P(rotp(petal(.6,.84,Math.min(.07,.55/n),8),a),1,1),P(circ(...pol(.39,b),Math.min(.07,.5/n),10),1,1),P(circ(...pol(.9,b),.03,6),1,1))}return o},
 seedOfLife(){const r=.42,o=[P(circ(0,0,.9,64),1,0),P(circ(0,0,r,40),1,0),P(circ(0,0,.06,8),1,1)];for(let k=0;k<6;k++){const [x,y]=pol(r,k*Math.PI/3);o.push(P(circ(x,y,r,40),1,0))}return o},
 sunburst(p){const n=va(p,'a',24),o=[P(circ(0,0,.24,24),1,1),P(circ(0,0,.31,30),1,0)],w=Math.PI/n*.6;for(let k=0;k<n;k++){const a=k*2*Math.PI/n,l=k%2?.68:.96;o.push(P([pol(.36,a-w),pol(l,a),pol(.36,a+w)],1,k%2===0))}return o},
 fanPattern(){const o=[P(circ(0,0,.12,12),1,1)];for(let k=0;k<4;k++){const a0=k*Math.PI/2+Math.PI/4-.62,a1=a0+1.24,edge=[];for(let i=0;i<=40;i++){const t=a0+(a1-a0)*i/40;edge.push(pol(.9+.05*Math.cos(i/40*Math.PI*10),t))}
   o.push(P([pol(.17,a0)].concat(edge,[pol(.17,a1)]),1,0),P(arcP(0,0,.5,a0+.06,a1-.06,16),0,0));for(let j=1;j<6;j++){const t=a0+(a1-a0)*j/6;o.push(P([pol(.19,t),pol(.85,t)],0,0))}}return o},
 arabesque(){const c=[.52,.5],st=bez([.03,.02],[.1,.03],[.16,.1],[.216,.196],6),t0=Math.atan2(.196-c[1],.216-c[0]),sp=[],at=u=>{const r=.4*(1-u)+.03,t=t0-u*2.2*Math.PI;return[c[0]+r*Math.cos(t),c[1]+r*Math.sin(t),t]};
  for(let i=1;i<=44;i++){const q=at(i/44);sp.push([q[0],q[1]])}const base=[P(st.concat(sp),0,0)];[.2,.42].forEach(u=>{const [x,y,t]=at(u);base.push(...leafAt(x,y,.2,.06,t,1))});
  const o=[...M('crossFlower',.26,0,0,0)];[[1,1],[-1,1],[1,-1],[-1,-1]].forEach(([sx,sy])=>base.forEach(q=>o.push(P(q.p.map(([x,y])=>[sx*x,sy*y]),q.c,q.f))));return o},
 paisleyPair(){return [P(circ(0,0,.97,64),1,0),...M('kalka',.5,-.24,-.1,0),...M('kalka',.5,.24,.1,Math.PI)]},
 kalkaNest(){const K=MOTIF.kalka()[0].p,n=K.length,o=[P(K,1,0),P(scl(K,.68,-.05,.4),1,0),P(scl(K,.38,-.05,.44),1,1)];
  for(let i=0;i<n;i+=2){const a=K[(i+n-1)%n],b=K[(i+1)%n],dx=b[0]-a[0],dy=b[1]-a[1],l=Math.hypot(dx,dy)||1,[x,y]=K[i];o.push(P([[x,y],[x+dy/l*.08,y-dx/l*.08]],0,0))}return o},
 kalkaFlower(){const K=MOTIF.kalka()[0].p;return [P(K,1,0),P(scl(K,.84,-.05,.38),1,0),...M('flower',.26,-.08,.42,0),...leafAt(-.08,.15,.3,.08,-1.9,1),...leafAt(-.02,.13,.28,.08,-1.15,1),P(circ(.22,-.5,.05,8),1,1)]}
});

/* ---------- corners: the corner of the cloth is at (-1,-1); each fills that quarter and points toward the centre ---------- */
Object.assign(MOTIF,{
 cornerKalka(){const o=[...M('kalka',.75,-.26,-.31,2.105)];for(let k=0;k<7;k++){const t=(k+.5)/7*Math.PI/2;o.push(P(circ(-1+1.5*Math.cos(t),-1+1.5*Math.sin(t),.04,8),1,1))}return o},
 cornerLeaf(){const o=[...miniFl(-.8,-.8,.16,6,'pt')];[[0,1.35,.2],[-.42,1.1,.16],[.42,1.1,.16],[-.8,.85,.13],[.8,.85,.13]].forEach(([d,len,w])=>o.push(...leafAt(-.7,-.7,len*.95,w,Math.PI/4+d,1)));return o},
 cornerFan(){const o=[],sc=[];for(let i=0;i<=60;i++){const t=i/60*Math.PI/2,r=1.72+.07*Math.cos(i/60*Math.PI*12);sc.push([-1+r*Math.cos(t),-1+r*Math.sin(t)])}
  o.push(P(sc,0,0),P(arcP(-1,-1,1.25,0,Math.PI/2,30),0,0),P([[-1,-1]].concat(arcP(-1,-1,.55,0,Math.PI/2,14)),1,1));
  for(let k=1;k<9;k++){const t=k/9*Math.PI/2;o.push(P([[-1+.62*Math.cos(t),-1+.62*Math.sin(t)],[-1+1.2*Math.cos(t),-1+1.2*Math.sin(t)]],0,0))}
  for(let k=0;k<6;k++){const t=(k+.5)/6*Math.PI/2;o.push(P(circ(-1+1.48*Math.cos(t),-1+1.48*Math.sin(t),.05,8),1,1))}return o},
 cornerLotus(){const o=[P([[-1,-1]].concat(arcP(-1,-1,.32,0,Math.PI/2,10)),1,1)];for(let k=0;k<5;k++)o.push(P(mv(rotp(petal(.3,1.55,.15,14),(k+.5)/5*Math.PI/2),-1,-1),1,1));
  for(let k=1;k<5;k++)o.push(P(mv(rotp(petal(.3,.95,.08,10),k/5*Math.PI/2),-1,-1),1,0));return o},
 cornerTri(){const o=[P([[-1,-1],[.45,-1],[-1,.45]],1,0),P([[-1,-.5],[-.5,-1]],0,0),P([[-1,.1],[.1,-1]],0,0)],z=[];for(let i=0;i<=12;i++){const u=i/12,d=i%2?.62:.98;z.push([-1+d*u,-1+d*(1-u)])}
  o.push(P(z,0,0),...miniFl(-.8,-.8,.15,5));for(let i=1;i<6;i++){const u=i/6;o.push(P(circ(-1+1.27*u,-1+1.27*(1-u),.04,8),1,1))}return o},
 cornerFlower(){const st=bez([-.92,-.92],[-.55,-.5],[-.3,-.1],[.2,.2],16),o=[P(st,0,0),...M('flower',.36,.38,.38,0)];[4,8,12].forEach((i,j)=>{const [x,y]=st[i];o.push(...leafAt(x,y,.32,.1,Math.PI/4+(j%2?1:-1)*1.0,1))});
  [[6,.35,-.3],[9,-.3,.35]].forEach(([i,dx,dy])=>{const [x,y]=st[i],e=[x+dx,y+dy];o.push(P(bez([x,y],[x+dx*.3,y+dy*.6],[x+dx*.6,y+dy*.9],e,8),0,0),...miniFl(e[0],e[1],.12,5))});return o},
 cornerVine(){const o=[...miniFl(-.8,-.8,.17,6,'pt')],v1=[],v2=[];for(let i=0;i<=40;i++){const u=i/40,x=-.6+1.5*u,y=-.82+.07*Math.sin(u*Math.PI*5);v1.push([x,y]);v2.push([y,x])}o.push(P(v1,0,0),P(v2,0,0));
  for(let k=0;k<5;k++){const u=(k+.5)/5,x=-.6+1.5*u,y=-.82+.07*Math.sin(u*Math.PI*5),s=k%2?1:-1;o.push(...leafAt(x,y,.2,.07,s>0?.9:-.9,1),...leafAt(y,x,.2,.07,s>0?Math.PI/2-.9:Math.PI/2+.9,1))}return o},
 cornerBracket(){const a=.1,b=.26,e=.72,band=[[-1+a,e],[-1+a,-1+a],[e,-1+a]].concat(arcP(e,-1+(a+b)/2,(b-a)/2,-Math.PI/2,Math.PI/2,8).slice(1,-1),[[e,-1+b],[-1+b,-1+b],[-1+b,e]],arcP(-1+(a+b)/2,e,(b-a)/2,0,Math.PI,8).slice(1,-1));
  const o=[P(band,1,0),P(poly(4,.15,0,-.55,-.55),1,1),P(arcP(-1,-1,.85,.35,1.22,16),0,0),P(arcP(-1,-1,1.15,.25,1.32,24),0,0)];for(let k=0;k<5;k++){const t=-.62+k*.3;o.push(P(circ(t,-.82,.03,6),1,1),P(circ(-.82,t,.03,6),1,1))}return o}
});

/* ---------- border tiles: [length of one tile in band widths, tile(i) -> paths in (x along the band, u across it; u=0 at the outer edge)] ---------- */
const BT={
 borderTri:[1,i=>[P([[.08,.1],[.92,.1],[.5,.86]],1,1),P(circ(0,.8,.06,8),1,1)]],
 borderChevron:[1.1,i=>[P([[.1,.12],[.55,.5],[.1,.88]],0,0),P([[.42,.12],[.87,.5],[.42,.88]],0,0)]],
 borderWave:[2,i=>{const a=[],b=[];for(let j=0;j<=24;j++){const x=2*j/24,s=Math.sin(Math.PI*x);a.push([x,.5+.3*s]);b.push([x,.5-.3*s])}return[P(a,0,0),P(b,0,0),P(circ(.5,.5,.08,8),1,1),P(circ(1.5,.5,.08,8),1,1)]}],
 borderChain:[1.4,i=>[P(ell(.7,.5,.52,.3,0,24),1,0),P(ell(.7,.5,.32,.12,0,18),1,0),P(ell(0,.5,.07,.22,0,10),1,1)]],
 borderLeafChain:[1.2,i=>[P([[0,.5],[1.2,.5]],0,0),...leafAt(.3,.5,.62,.16,i%2?.75:-.75,1),...leafAt(.9,.5,.3,.1,i%2?-.9:.9,0)]],
 borderFlowerChain:[1.3,i=>[...miniFl(.65,.5,.34,5),P([[0,.5],[.3,.5]],0,0),P([[1,.5],[1.3,.5]],0,0),...leafAt(0,.5,.22,.07,-1.1,1),...leafAt(0,.5,.22,.07,1.1,1)]],
 borderKalkaChain:[1.4,i=>{const f=i%2?-1:1;return[P(MOTIF.kalka()[0].p.map(([x,y])=>[.7-.4*y,.5+.4*x*f]),1,1)]}],
 borderRice:[1.5,i=>{const o=[P([[0,.5],[1.5,.5]],0,0)];for(let j=0;j<3;j++){const x=.25+j*.5;o.push(P(ell(x,.3,.17,.07,-.55,12),1,1),P(ell(x+.25,.7,.17,.07,.55,12),1,1))}return o}],
 borderDouble:[1,i=>[P([[0,.22],[1,.22]],0,0),P([[0,.78],[1,.78]],0,0),P([[.3,.5],[.5,.34],[.7,.5],[.5,.66]],1,1),P(circ(0,.5,.05,8),1,1)]],
 borderLadder:[.5,i=>[P([[0,.18],[.5,.18]],0,0),P([[0,.82],[.5,.82]],0,0),P([[.25,.18],[.25,.82]],0,0)]],
 borderCheck:[1,i=>{const o=[];for(let r=0;r<2;r++)for(let c=0;c<2;c++)if((r+c)%2===0)o.push(P(rect(c*.5+.05,r*.5+.05,c*.5+.45,r*.5+.45),1,1));return o}],
 borderDots:[.6,i=>[P(circ(.15,.3,.11,10),1,1),P(circ(.45,.7,.11,10),1,1)]],
 borderBraid:[1.6,i=>{const o=[];for(let k=0;k<3;k++){const q=[];for(let j=0;j<=24;j++)q.push([1.6*j/24,.5+.33*Math.sin(2*Math.PI*j/24+k*2*Math.PI/3)]);o.push(P(q,0,0))}return o}],
 borderHeart:[1.1,i=>{const h=heartP(.55,.42,.4);return[P(i%2?h.map(([x,y])=>[x,1-y]):h,1,1),P(circ(0,.5,.05,8),1,1)]}],
 borderStar:[1,i=>[P(starP(5,.36,.15,.5,.53),1,1),P(circ(0,.5,.05,8),1,1)]],
 borderStep:[1,i=>[P([[0,.85],[.14,.85],[.14,.6],[.32,.6],[.32,.35],[.68,.35],[.68,.6],[.86,.6],[.86,.85],[1,.85]],0,0),P(rect(.43,.12,.57,.24),1,1)]],
 borderLoop:[1,i=>{const q=[];for(let j=0;j<=32;j++){const s=j/32;q.push([s-.18*Math.sin(2*Math.PI*s),.5-.3*Math.cos(2*Math.PI*s)])}return[P(q,0,0)]}],
 borderArch:[1,i=>[P(bez([0,.9],[0,.45],[.3,.22],[.5,.1],10).concat(bez([.5,.1],[.7,.22],[1,.45],[1,.9],10).slice(1)),0,0),P(drop(.5,.6,.17),1,1)]],
 borderTiger:[1.2,i=>{const st=(x0,top)=>{const L=bez([x0-.13,0],[x0-.1,.3],[x0+.02,.55],[x0+.1,.78],8),R=bez([x0+.1,.78],[x0+.08,.5],[x0+.08,.25],[x0+.13,0],8),p=L.concat(R.slice(1,-1));return top?p:p.map(([x,u])=>[x,1-u])};
   return[P(st(.3,1),1,1),P(st(.9,0),1,1)]}],
 borderPeacock:[1.5,i=>{const c=.75,o=[P(ell(c,.5,.34,.3,0,24),1,0),P(ell(c,.52,.21,.19,0,18),1,0),P(eyeCore(c,.54,.13),1,1),P([[0,.5],[c-.34,.5]],0,0),P([[c+.34,.5],[1.5,.5]],0,0)];
   [.1,.24,1.16,1.3].forEach(x=>o.push(P([[x,.5],[x+.08,.3]],0,0),P([[x,.5],[x+.08,.7]],0,0)));return o}]
};
/* the small flower that sits in each corner square of a tiled border, in (along, across) units of one band width */
function btCorner(){return [P(poly(4,.34,0,.5,.5),1,1)].concat([[-1,-1],[1,-1],[1,1],[-1,1]].map(([x,y])=>P(circ(.5+.27*x,.5+.27*y,.06,8),1,1)))}



/* ---------- second pass, after looking at every motif as stitches ---------- */
(function(){const fit=(name,k)=>{const f=MOTIF[name];MOTIF[name]=p=>tf(f(p),k,0,0,0)};
  [['neem',.8],['jute',.95],['datePalm',.87],['talgach',.9],['supari',.94],['kashful',.94],['jackfruit',.93],['lychee',.95],['guava',.94],['dhenki',.94],['dolna',.93],['heart',.94],['kalkaNest',.93]].forEach(([n,k])=>fit(n,k));
  const peepal=MOTIF.peepalLeaf;MOTIF.peepalLeaf=()=>peepal().map(q=>P(q.p.map(([x,y])=>[x,-y]),q.c,q.f)).concat([P([[0,.5],[0,.96]],0,0)]);
  BT.borderLoop[1]=i=>{const q=[];for(let j=0;j<=36;j++){const s=j/36;q.push([s-.3*Math.sin(2*Math.PI*s),.55-.35*Math.cos(2*Math.PI*s)])}return[P(q,0,0)]};
})();
Object.assign(MOTIF,{
 krishnachura(){const o=[];for(let k=0;k<5;k++){const a=-Math.PI/2+k*2*Math.PI/5;o.push(P(broad(.1,.92,.36,a),1,k!==0))}
  for(let j=-3;j<=3;j++){const a=-Math.PI/2+j*.1,r=.5+.06*(1-Math.abs(j)/3);o.push(P(bez(pol(.1,-Math.PI/2+j*.02),pol(.25,a-.03*j),pol(.38,a),pol(r,a+.04*j),6),0,0),P(circ(...pol(r+.035,a+.04*j),.03,6),1,1))}
  o.push(P(circ(0,0,.1,10),1,1));return o},
 palash(){const o=[P(bez([-.95,-.55],[-.45,-.78],[.35,-.75],[.95,-.5],16),0,0)];
  [[-.55,-.66],[0,-.72],[.5,-.62]].forEach(([x,y])=>{const hook=bez([x-.06,y+.04],[x-.3,y+.3],[x-.2,y+.72],[x+.16,y+.86],12).concat(bez([x+.16,y+.86],[x+.04,y+.6],[x+.12,y+.3],[x+.06,y+.04],12).slice(1,-1));
   o.push(P(hook,1,0),...hatch(hook,.05,1.2),P(ell(x,y+.02,.07,.09,0,12),1,1),P(ell(x+.17,y+.15,.14,.07,-.7,16),1,1))});return fitBox(o,.95)},
 kolmi(){const o=[],rim=[];for(let i=0;i<=100;i++){const a=i/100*2*Math.PI,r=.82+.1*Math.pow(Math.abs(Math.cos(5*(a+Math.PI/2)/2)),3);rim.push(pol(r,a))}
  o.push(P(rim,1,0),P(circ(0,0,.62,44),1,0),P(circ(0,0,.24,22),1,0),P(circ(0,0,.1,10),1,1));
  for(let k=0;k<5;k++){const a=-Math.PI/2+(k+.5)*2*Math.PI/5;o.push(P([pol(.26,a),pol(.86,a)],0,0),P([pol(.4,a-.12),pol(.6,a-.05)],0,0),P([pol(.4,a+.12),pol(.6,a+.05)],0,0))}return o},
 nayantara(){const o=rep(5,a=>[P(rotp(bend(rpetal(.06,.86,.34,0,0,0),.4),a),1,0)],-Math.PI/2);o.push(P(circ(0,0,.24,20),1,0),P(starP(5,.16,.07,0,0,-Math.PI/2+.4),1,1));return o},
 gardenia(p){const n=va(p,'a',14),n1=Math.ceil(n/2),n2=n-n1,o=[];for(let k=0;k<n1;k++)o.push(P(rpetal(.18,.95,Math.min(.32,2.6/n1),k*2*Math.PI/n1,0,0),1,0));
  for(let k=0;k<n2;k++)o.push(P(rpetal(.12,.62,Math.min(.24,1.7/n2),(k+.5)*2*Math.PI/n2,0,0),1,0));const sp=[];for(let i=0;i<=30;i++)sp.push(pol(.02+.16*i/30,i/30*Math.PI*3));o.push(P(sp,0,0));return o},
 leafSpray(){const o=[];[-1,-.5,0,.5,1].forEach(d=>o.push(...leafAt(0,.85,1.1-Math.abs(d)*.25,.18,-Math.PI/2+d*.7,d===0?1:0)));o.push(P(circ(0,.85,.06,8),1,1));return o},
 peacockPair(){return [...M('peacockFeather',.8,.077,-.293,-.75),...M('peacockFeather',.8,.077,.293,-(Math.PI-.75))]},
 paisleyPair(){const A=M('kalka',.5,-.05,-.43,0),B=M('kalka',.5,.05,.43,Math.PI);return [P(circ(0,0,.97,64),1,0),...tf(A.concat(B),1,0,0,.6)]},
 cornerLeaf(){const o=[...miniFl(-.8,-.8,.16,6,'pt')];[[0,1.35,.2],[-.42,1.1,.16],[.42,1.1,.16],[-.8,.85,.13],[.8,.85,.13]].forEach(([d,len,w])=>o.push(...leafAt(-.7,-.7,len*.95,w,Math.PI/4+d,d===0?1:0)));return o},
 cornerLotus(){const o=[P([[-1,-1]].concat(arcP(-1,-1,.32,0,Math.PI/2,10)),1,1)];for(let k=0;k<5;k++){const a=(k+.5)/5*Math.PI/2;o.push(P(mv(rotp(petal(.3,1.55,.17,14),a),-1,-1),1,0),P(mv(rotp(petal(.4,1.12,.07,10),a),-1,-1),1,1))}
  for(let k=1;k<5;k++)o.push(P(circ(-1+1.25*Math.cos(k/5*Math.PI/2),-1+1.25*Math.sin(k/5*Math.PI/2),.04,8),1,1));return o}
});
