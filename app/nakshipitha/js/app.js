/* Nakshi Pitha Maker — app logic (words, named designs, editor, exports, festivals, greeting card, My designs, Learn).
   Uses the motif library from js/motifs.js. */
(function(){
'use strict';
/* ---------- words ---------- */
const T={en:{
 title:'Nakshi Pitha Maker',vDough:'Dough',vFried:'Fried',vStencil:'Stencil',vStamp:'Stamp',
 tabDesign:'Design',tabPitha:'Pitha',tabMake:'Stencil and stamp',
 example:'Example',exampleTxt:'An example pitha, Padmadighi as this app reads the name. Clear it or pick a named design to start.',
 undo:'Undo',redo:'Redo',clear:'Clear',sure:'Clear the whole pitha?',yesClear:'Yes, clear',keep:'Keep it',
 namedH:'Start from a named design',replace:'Replace',keepMine:'Keep mine',namedQ:'Replace your design with {name}?',
 readingPre:'How this app reads it:',
 tool:'Tool',tMotif:'Motif',tDraw:'Carve',tSelect:'Select',tErase:'Remove',
 hMotif:'Tap the pitha to place a motif, and drag before you let go to move it. Near the middle it snaps to the centre and is placed once.',
 hDraw:'Draw a line with a finger or mouse, the way a date thorn cuts the dough. The repeat setting applies to lines too.',
 hSelect:'Tap a piece to select it. Drag it to move, use the square handle to resize and the round handle to turn. The sliders change the selected piece.',
 hErase:'Tap a motif or a carved line to take it out.',
 motifs:'Motifs',searchPh:'Search {n} motifs',noMatch:'No motif by that name. Try another word, in English or Bangla.',
 pieceH:'Size and lines',size:'Size',turn:'Turn',insideL:'Inside the shapes',fsLine:'Outline',fsVeins:'Veins',fsEcho:'Rows',fsDots:'Dots',
 surprise:'Surprise me',
 symH:'Repeat around the centre',s1:'Once',sm:'Mirror',sh:'Half turn',smm:'4 ways',
 symNoteRound:'Round, scalloped and square pithas repeat by turning around the centre.',
 symNoteLong:'Long pithas repeat by mirroring, so the design follows the shape.',
 shapeH:'Pitha shape',round:'Round',oval:'Oval',leaf:'Leaf',diamond:'Diamond',square:'Square',scallop:'Scalloped',
 dimsH:'Size and dough',across:'Across',thick:'Thickness',
 thickNote:'Recipes roll nakshi pitha about ½ inch (12 mm) thick and carve at least halfway in.',
 rimsH:'Rim bands',addRim:'Add a band inside the last one',noRims:'No rim bands yet.',width:'Width',remove:'Remove',
 stencilH:'Stencil to prick through',dotGap:'Dot spacing',paperL:'Paper',copiesL:'On the page',copyOne:'One pitha',copyFill:'Fill the page',
 stencilStats:'{n} dots to prick · {w} × {h} mm',
 dlStencil:'Download stencil (PDF)',
 stencilNote:'Print at 100% (actual size) and check the 50 mm bar with a ruler. Lay the paper on the rolled dough, prick through every dot, lift it, then join the dots.',
 stampH:'Stamp to 3D print',ridgeW:'Line width',depthL:'Line depth',
 rimChk:'Cutting rim',rimChkS:'Cuts the pitha out and stops the press at the line depth you set.',
 knobChk:'Knob',knobChkS:'Prints beside the stamp as a second part; its peg fits the socket on the back.',
 stampStats:'Stamp {w} × {h} mm, {z} mm tall · {t} triangles',
 stampStale:'The stamp is built when you open the Stamp view or download it.',
 mergedWarn:'some lines run together into solid patches (about {a} mm²); a thinner line width or bigger motifs keeps them apart',
 dlStamp:'Download stamp (STL in a .zip)',
 stampNote1:'The stamp face is mirrored, so the pressed pitha reads the right way round.',
 stampNote2:'Print face up in PETG, or a PLA sold as food-safe. Wash it by hand and dry it well, because dough can lodge in the print lines. Oil it lightly or dust it with rice flour before each press.',
 picH:'Picture',dlPic:'Save a picture (PNG)',
 preparing:'Preparing the file…',saved:'Saved.',declined:'Not saved.',
 failed:'Something went wrong making the file: {m}',loadFail:'Couldn’t load the 3D and PDF tools. Check the connection and try again.',
 building:'Building the stamp…',dragTurn:'Drag to turn the stamp · this is the printed face',
 stampEmpty:'Add some lines first; the stamp has nothing to press yet.',
 dup:'Duplicate',del:'Delete',done:'Done',
 cap:'{shape} · {d} cm across · {t} mm thick',mm:'mm',cm:'cm',
 l1h:'What nakshi pitha is',
 l1:'Nakshi pitha is a rice-flour cake from Bangladesh. The dough is made from boiled atap rice flour and rolled out, then designs of plants, creepers, flowers and intertwining circles are pricked into it with date thorns, bamboo slivers, hairpins, needles, jute sticks or twigs. The pithas are fried and soaked in molasses syrup, for Eid, weddings, Nabanna and Poush.',
 l2h:'The named designs',l2:'Pithas are named after their designs. Banglapedia lists these names:',
 l2b:'The names are documented, but drawings of each are not, so every named design here is this app’s reading of the name. If you have photos of real ones, the drawings can be corrected to match.',
 l3h:'Stencil or stamp',
 l3:'The stencil is a true-size paper pattern: prick through its dots into the dough, lift it, and join the dots with a thorn or toothpick, going at least halfway in. The stamp presses every line at once. Its ridges are as tall as the line depth you choose, and the cutting rim stops the press there.',
 recipeLink:'A nokshi pitha recipe',
 pdfTitle:'Nakshi pitha stencil',pdfSteps:['Print at 100% (actual size). The bar below must measure 50 mm.','Roll the dough about {t} mm thick and lay this sheet on it.','Prick through every dot with a date thorn, toothpick or needle.','Lift the sheet and join the dots, going at least halfway into the dough.','Cut along the dashed line.'],
 pdfBar:'50 mm — measure this',pdfMade:'Made with Nakshi Pitha Maker',
 v_petals:'Petals',v_layers:'Layers',v_rings:'Rings',v_spikes:'Spikes',v_rays:'Rays',v_points:'Points',v_spokes:'Spokes',v_leaves:'Leaves',v_branches:'Branches',
 v_turns:'Turns',v_flowers:'Flowers',v_bands:'Bands',v_rows:'Rows',v_count:'How many',v_feathers:'Feathers',v_squares:'Squares',v_arms:'Arms',v_lobes:'Lobes',v_steps:'Steps',v_flags:'Flags',
 grpBasics:'Pitha lines',grpPicks:'Pitha picks'
},bn:{
 title:'নকশি পিঠা মেকার',vDough:'কাঁচা',vFried:'ভাজা',vStencil:'স্টেনসিল',vStamp:'ছাঁচ',
 tabDesign:'নকশা',tabPitha:'পিঠা',tabMake:'স্টেনসিল ও ছাঁচ',
 example:'উদাহরণ',exampleTxt:'একটি উদাহরণ পিঠা, এই অ্যাপের চোখে পদ্মদীঘি। শুরু করতে সব মুছুন বা একটি নামের নকশা বেছে নিন।',
 undo:'আগের ধাপ',redo:'আবার করুন',clear:'সব মুছুন',sure:'পুরো পিঠা মুছবেন?',yesClear:'হ্যাঁ, মুছুন',keep:'রেখে দিন',
 namedH:'নামের নকশা থেকে শুরু করুন',replace:'বদলে দিন',keepMine:'আমারটা রাখুন',namedQ:'আপনার নকশার জায়গায় {name} বসাবেন?',
 readingPre:'এই অ্যাপ নামটি যেভাবে পড়েছে:',
 tool:'কাজ',tMotif:'নকশা',tDraw:'খোদাই',tSelect:'বাছাই',tErase:'মুছুন',
 hMotif:'পিঠায় ছুঁয়ে নকশা বসান, ছাড়ার আগে টেনে জায়গা ঠিক করুন। মাঝখানের কাছে এলে ঠিক কেন্দ্রে একবার বসে।',
 hDraw:'আঙুল বা মাউস দিয়ে রেখা টানুন, যেভাবে খেজুর কাঁটা খামির কাটে। পুনরাবৃত্তি রেখাতেও খাটে।',
 hSelect:'কোনো অংশ ছুঁয়ে বাছাই করুন। টেনে সরান, চৌকো হাতলে ছোট-বড় করুন, গোল হাতলে ঘোরান। স্লাইডার বাছাই করা অংশ বদলায়।',
 hErase:'কোনো নকশা বা খোদাই করা রেখা ছুঁলে সেটি উঠে যাবে।',
 motifs:'নকশা',searchPh:'{n}টি নকশা খুঁজুন',noMatch:'এই নামে কোনো নকশা নেই। বাংলা বা ইংরেজিতে অন্য শব্দ দিয়ে খুঁজুন।',
 pieceH:'মাপ ও রেখা',size:'মাপ',turn:'ঘোরান',insideL:'আকারের ভেতরে',fsLine:'শুধু রেখা',fsVeins:'শিরা',fsEcho:'সারি',fsDots:'ফুটকি',
 surprise:'চমকে দিন',
 symH:'মাঝখান ঘিরে পুনরাবৃত্তি',s1:'একবার',sm:'আয়না',sh:'অর্ধেক ঘুরে',smm:'চার দিকে',
 symNoteRound:'গোল, ঢেউ-কিনারা আর চৌকো পিঠায় নকশা মাঝখান ঘিরে ঘুরে ঘুরে বসে।',
 symNoteLong:'লম্বাটে পিঠায় নকশা আয়নার মতো উল্টে বসে, যাতে আকারের সঙ্গে মেলে।',
 shapeH:'পিঠার আকার',round:'গোল',oval:'ডিম্বাকার',leaf:'পাতা',diamond:'বরফি',square:'চৌকো',scallop:'ঢেউ-কিনারা',
 dimsH:'মাপ ও খামির',across:'আড়াআড়ি',thick:'পুরুত্ব',
 thickNote:'রেসিপিতে নকশি পিঠা প্রায় আধা ইঞ্চি (১২ মিমি) পুরু করে বেলা হয়, আর নকশা কাটা হয় অন্তত অর্ধেক গভীরে।',
 rimsH:'কিনারার পাড়',addRim:'শেষ পাড়ের ভেতরে নতুন পাড় যোগ করুন',noRims:'এখনো কোনো পাড় নেই।',width:'চওড়া',remove:'সরান',
 stencilH:'ফুটো করার স্টেনসিল',dotGap:'ফুটকির দূরত্ব',paperL:'কাগজ',copiesL:'পাতায়',copyOne:'একটি পিঠা',copyFill:'পুরো পাতা ভরে',
 stencilStats:'{n}টি ফুটকি · {w} × {h} মিমি',
 dlStencil:'স্টেনসিল নামান (PDF)',
 stencilNote:'১০০% (আসল মাপে) প্রিন্ট করুন, তারপর রুলার দিয়ে ৫০ মিমি দাগটি মিলিয়ে নিন। বেলা খামিরে কাগজ রেখে প্রতিটি ফুটকিতে ফুটো করুন, কাগজ তুলে ফুটকিগুলো জুড়ে দিন।',
 stampH:'থ্রিডি প্রিন্টের ছাঁচ',ridgeW:'রেখার চওড়া',depthL:'রেখার গভীরতা',
 rimChk:'কাটার কিনারা',rimChkS:'পিঠা কেটে বের করে, আর ঠিক করা গভীরতায় চাপ থামায়।',
 knobChk:'হাতল',knobChkS:'ছাঁচের পাশে আলাদা অংশ হিসেবে প্রিন্ট হয়; এর খিল পেছনের খাঁজে বসে।',
 stampStats:'ছাঁচ {w} × {h} মিমি, {z} মিমি উঁচু · {t}টি ত্রিভুজ',
 stampStale:'ছাঁচ ভিউ খুললে বা নামালে ছাঁচটি তৈরি হয়।',
 mergedWarn:'কিছু রেখা মিশে গিয়ে ভরাট হয়ে গেছে (প্রায় {a} বর্গমিমি); রেখা সরু করলে বা নকশা বড় করলে আলাদা থাকে',
 dlStamp:'ছাঁচ নামান (.zip-এ STL)',
 stampNote1:'ছাঁচের মুখ উল্টো করে বানানো, তাই চাপ দেওয়া পিঠায় নকশা সোজা পড়ে।',
 stampNote2:'মুখ ওপরে রেখে PETG বা খাবারের জন্য নিরাপদ বলে বিক্রি হওয়া PLA দিয়ে প্রিন্ট করুন। হাতে ধুয়ে ভালো করে শুকান, কারণ প্রিন্টের খাঁজে খামির আটকে থাকতে পারে। প্রতিবার চাপার আগে হালকা তেল মাখান বা চালের গুঁড়ো ছড়িয়ে নিন।',
 picH:'ছবি',dlPic:'ছবি রাখুন (PNG)',
 preparing:'ফাইল তৈরি হচ্ছে…',saved:'রাখা হয়েছে।',declined:'রাখা হয়নি।',
 failed:'ফাইল তৈরিতে সমস্যা হয়েছে: {m}',loadFail:'থ্রিডি আর PDF-এর সরঞ্জাম আনা যায়নি। সংযোগ দেখে আবার চেষ্টা করুন।',
 building:'ছাঁচ তৈরি হচ্ছে…',dragTurn:'টেনে ছাঁচ ঘোরান · এটি প্রিন্ট হওয়া মুখ',
 stampEmpty:'আগে কিছু রেখা যোগ করুন; ছাঁচে চাপার মতো কিছু নেই।',
 dup:'নকল করুন',del:'মুছে ফেলুন',done:'বাছাই শেষ',
 cap:'{shape} · {d} সেমি আড়াআড়ি · {t} মিমি পুরু',mm:'মিমি',cm:'সেমি',
 l1h:'নকশি পিঠা কী',
 l1:'নকশি পিঠা বাংলাদেশের চালের গুঁড়োর পিঠা। আতপ চালের গুঁড়ো সেদ্ধ করে খামির বানিয়ে বেলা হয়, তারপর খেজুর কাঁটা, বাঁশের চটা, চুলের কাঁটা, সুই, পাটকাঠি বা কাঠি দিয়ে গাছ, লতা, ফুল আর জড়ানো বৃত্তের নকশা ফুটিয়ে তোলা হয়। পিঠা ভেজে গুড়ের রসে ভেজানো হয়; ঈদ, বিয়ে, নবান্ন আর পৌষে বানানো হয়।',
 l2h:'নামের নকশা',l2:'নকশা অনুযায়ী পিঠার নাম হয়। বাংলাপিডিয়া এই নামগুলো দিয়েছে:',
 l2b:'নামগুলো লেখা আছে, কিন্তু প্রতিটির আঁকা নেই, তাই এখানে প্রতিটি নামের নকশা এই অ্যাপের নিজস্ব ব্যাখ্যা। আসল পিঠার ছবি থাকলে আঁকাগুলো সেই মতো ঠিক করা যায়।',
 l3h:'স্টেনসিল না ছাঁচ',
 l3:'স্টেনসিল হলো আসল মাপের কাগজের নকশা: ফুটকিগুলো দিয়ে খামিরে ফুটো করুন, কাগজ তুলে কাঁটা বা খিলাল দিয়ে ফুটকি জুড়ে দিন, অন্তত অর্ধেক গভীরে। ছাঁচ এক চাপে সব রেখা বসায়। এর শিরা আপনার বাছাই করা গভীরতার সমান উঁচু, আর কাটার কিনারা চাপ সেখানেই থামায়।',
 recipeLink:'একটি নকশি পিঠার রেসিপি (ইংরেজি)',
 pdfTitle:'নকশি পিঠার স্টেনসিল',pdfSteps:['১০০% (আসল মাপে) প্রিন্ট করুন। নিচের দাগটি ৫০ মিমি হতে হবে।','খামির প্রায় {t} মিমি পুরু করে বেলুন, তার ওপর এই কাগজ রাখুন।','খেজুর কাঁটা, খিলাল বা সুই দিয়ে প্রতিটি ফুটকিতে ফুটো করুন।','কাগজ তুলে ফুটকিগুলো জুড়ে দিন, অন্তত অর্ধেক গভীরে।','ভাঙা দাগ ধরে পিঠা কেটে নিন।'],
 pdfBar:'৫০ মিমি — মেপে দেখুন',pdfMade:'নকশি পিঠা মেকারে তৈরি',
 v_petals:'পাপড়ি',v_layers:'স্তর',v_rings:'বৃত্ত',v_spikes:'কাঁটা',v_rays:'রশ্মি',v_points:'কোণ',v_spokes:'শিক',v_leaves:'পাতা',v_branches:'ডাল',
 v_turns:'প্যাঁচ',v_flowers:'ফুল',v_bands:'রেখা',v_rows:'সারি',v_count:'কয়টি',v_feathers:'পালক',v_squares:'চৌকো',v_arms:'বাহু',v_lobes:'খাঁজ',v_steps:'ধাপ',v_flags:'নিশান',
 grpBasics:'পিঠার রেখা',grpPicks:'পিঠার জন্য বাছাই'
}};

/* the fifteen names Banglapedia lists, plus the intertwining circles Heritage Hub names as a popular motif;
   each "read" says how this app draws the name, since no drawing of the real design is recorded here */
const NAMED=[
 ['padmadighi','Padmadighi','পদ্মদীঘি','A lotus pond: a lotus ringed by lotus leaves and buds, with ripples at the edge.','পদ্মপুকুর: মাঝে পদ্ম, ঘিরে পদ্মপাতা আর কুঁড়ি, কিনারায় পানির ঢেউ।'],
 ['sagardighi','Sagardighi','সাগরদীঘি','A wide pond: rings of waves around a still centre.','বড় দীঘি: স্থির মাঝখান ঘিরে ঢেউয়ের বৃত্ত।'],
 ['shankhalata','Shankhalata','শঙ্খলতা','A creeper of conch-like curls inside a ring of leaves.','পাতার বৃত্তের ভেতরে শাঁখের মতো প্যাঁচানো লতা।'],
 ['kajallata','Kajallata','কাজললতা','The kajallata is the leaf-shaped kohl holder; drawn as curled drops around a flower.','কাজললতা কাজল রাখার পাতার মতো পাত্র; ফুল ঘিরে বাঁকানো ফোঁটা হিসেবে আঁকা।'],
 ['chiranpata','Chiranpata','চিরণপাতা','Finely cut leaves: long leaves with comb-like veins.','চিরল পাতা: চিরুনির মতো শিরা কাটা লম্বা পাতা।'],
 ['hijalpata','Hijalpata','হিজলপাতা','Leaves of the hijal tree, broad towards the tip, around a small flower.','ছোট ফুল ঘিরে হিজল গাছের পাতা, আগার দিকে চওড়া।'],
 ['sajnepata','Sajnepata','সজনেপাতা','Drumstick leaves: sprays of small leaflets.','সজনের পাতা: ছোট ছোট পাতার ডাল।'],
 ['uriyaful','Uriyaful','উড়িয়াফুল','The flower in this name isn’t documented; drawn as a many-petalled flower.','নামের ফুলটি কোথাও লেখা নেই; অনেক পাপড়ির ফুল হিসেবে আঁকা।'],
 ['bhyatful','Bent or bhyat ful','বেঁট বা ভ্যাট ফুল','Drawn as a water lily, whose seed head is called bhet.','শাপলা হিসেবে আঁকা, যার ফলকে ভেট বলে।'],
 ['sarpus','Sarpus','সরপুস','Read as sarposh, a lid: a wheel of spokes in a wavy rim.','সরপোশ বা ঢাকনা হিসেবে পড়া: ঢেউ খেলানো কিনারায় শিকের চাকা।'],
 ['champabaran','Champabaran','চম্পাবরণ','Champak flowers in a ring around one more.','একটি চাঁপা ফুল ঘিরে চাঁপা ফুলের বৃত্ত।'],
 ['kanyamukh','Kanyamukh','কন্যামুখ','“The bride’s face”, drawn without a face: an oval framed by a tikli, earrings and a necklace.','“কন্যার মুখ”, মুখ না এঁকে: টিকলি, ঝুমকা আর হারে ঘেরা একটি ডিম্বাকার।'],
 ['jamaimukh','Jamaimukh','জামাইমুখ','“The groom’s face”, drawn without a face: an oval under a turban, with kalkas.','“জামাইয়ের মুখ”, মুখ না এঁকে: পাগড়ির নিচে ডিম্বাকার, পাশে কল্কা।'],
 ['jamaimuchda','Jamaimuchda','জামাইমুচড়া','Muchda means a twist: a whirl with curls around it.','মুচড়া মানে মোচড়: ঘূর্ণি ঘিরে প্যাঁচ।'],
 ['satinmuchda','Satinmuchda','সতীনমুচড়া','Another twist: paired spirals turning around the centre.','আরেক মোচড়: মাঝখান ঘিরে জোড়া প্যাঁচ।'],
 ['circles','Intertwining circles','জড়ানো বৃত্ত','Heritage Hub names flowers and intertwining circles as popular motifs.','হেরিটেজ হাব ফুল আর জড়ানো বৃত্তকে জনপ্রিয় নকশা বলে।']
];
const BP_NAMES=['Shankhalata','Kajal lata','Chiral or chiranpata','Hijalpata','Sajnepata','Uriyaful','Bent or bhyat ful','Padmadighi','Sagardighi','Sarpus','Champabaran','Kanyamukh','Jamaimukh','Jamaimuchda','Satinmuchda'];
const BP_NAMES_BN=['শঙ্খলতা','কাজললতা','চিরল বা চিরণপাতা','হিজলপাতা','সজনেপাতা','উড়িয়াফুল','বেঁট বা ভ্যাট ফুল','পদ্মদীঘি','সাগরদীঘি','সরপুস','চম্পাবরণ','কন্যামুখ','জামাইমুখ','জামাইমুচড়া','সতীনমুচড়া'];

/* ---------- wording: Bangla reviewed for everyday Bangladeshi usage (পানি, গুঁড়া, সুঁই, খিলাল, স্কেল), plus words for the new features ---------- */
Object.assign(T.en,{
 title:'Nakshi Pitha Maker',titleAlt:'নকশি পিঠা',galShort:'My designs',
 tabDesign:'Design',tabPitha:'Pitha',tabMake:'Make',tabLearn:'Learn',
 exampleTxt:'An example pitha: Padmadighi, as this app draws the name. Press “Clear” to start fresh, or pick a festival or named design above.',
 tMotif:'Place',tDraw:'Carve',tSelect:'Select',tErase:'Remove',
 motifs:'Motifs',loadFail:'Couldn’t start the 3D and PDF tools. Close the app and open it again.',
 dlStencil:'Save stencil (PDF)',prStencil:'Print',shareBtn:'Share',dlStamp:'Save stamp file (STL in a .zip)',dlPic:'Save picture (PNG)',
 shopNote:'Tip: no printer? Share the PDF to a print or computer shop over WhatsApp and ask them to print it at 100% (actual size).',
 saved:'Saved.',savedPng:'Saved. Look in Pictures/NakshiPitha in your gallery.',savedFile:'Saved. Look in Download/NakshiPitha.',savedB:'Download started.',
 shared:'Shared.',printed:'Sent to the printer.',opened:'The PDF opened in a new tab. Print it from there at 100%.',
 savedNoShare:'This browser can’t share files directly, so the file was downloaded instead.',
 savedNoPrint:'A new tab couldn’t open, so the PDF was downloaded. Open it and print at 100%.',
 cancelled:'Cancelled.',noRoom:'There is no room for another band inside.',
 saveWhere:'On Android, pictures are saved to Pictures/NakshiPitha, and PDF and ZIP files to Download/NakshiPitha.',
 festH:'Festival pitha',festNote:'Each one sets a fitting design and greeting card. You can change everything afterwards.',
 festDone:'{name} design is on the pitha. Its greeting card is on the Make tab.',
 saveDesign:'Save to My designs',clear:'Clear',
 galH:'My designs',galSaveL:'Save the design on the pitha with a name:',galName:'Name',galSaveBtn:'Save',galListH:'Saved designs ({n})',
 galEmpty:'No saved designs yet. Save the one on the pitha to keep it here.',galOpen:'Open',galRename:'Rename',galDel:'Delete',
 galDelQ:'Delete “{name}”? This can’t be undone.',galYesDel:'Yes, delete',cancel:'Cancel',galSaved:'Saved to My designs.',
 galFull:'The app’s storage on this phone is full. Delete an old design and try again.',galNoStore:'Designs can’t be stored in this browser.',
 galOpened:'Opened “{name}”. Undo takes you back.',galDefault:'My design {n}',close:'Close',
 cardH:'Greeting card',cardNote:'A 1080 × 1350 picture that fits Facebook and WhatsApp.',cardCustomPh:'Write your own greeting',cardLookL:'Pitha',
 cardSave:'Save picture',cardFooter:'Made with the Nakshi Pitha app',cardSub:'{name} nakshi pitha',cardSubPlain:'Nakshi pitha',
 shareCardTxt:'{g} — a nakshi pitha I designed',shareStencilTxt:'Nakshi pitha stencil — please print at 100% (actual size)',
 srcH:'Sources',linkNote:'These links need the internet and open in your browser.',
 aboutH:'About this app',aboutTxt:'Nakshi Pitha Maker is free. It has no ads, no purchases and no accounts, and it works without the internet. Your designs stay on this phone and are never sent anywhere.',
 verL:'Version',licH:'Open-source licences',licBtn:'Read the full licences',licNoFetch:'The licence files are in the app folder: vendor/licenses and fonts/licenses.',
 recipe:{h:'Nakshi pitha recipe',approx:'A general home method. Quantities are approximate: rice flours differ, so add water little by little.',
  ingH:'Ingredients (about 15–20 small pithas)',ing:['Atap (sun-dried) rice flour — 2 cups','Water — about 2 cups','Salt — a pinch','Oil for deep frying','For the syrup: date-palm gur (khejur gur) or sugar — about 1½ cups, and water — 1 cup'],
  stepsH:'Step by step',steps:['Bring the water and salt to a boil in a pot.','Turn the heat down, pour in the rice flour and stir quickly with a wooden spoon until it comes together. Turn off the heat, cover and let it steam for 5–10 minutes.','While it is still warm (not hot), knead with lightly wet hands into a soft, smooth dough.','Cover the dough with a damp cloth and rest it for 15–20 minutes so it does not dry out.','Roll it about 12 mm (½ inch) thick and cut out round or other shapes.','Carve the design with a date thorn (khejur kata), a toothpick or a thin stick, at least halfway into the dough. The stencil or stamp from this app helps here.','Heat oil in a karai over medium heat and fry a few pithas at a time, turning once, until light golden.','Boil the gur or sugar with the water into a light syrup. Dip the fried pithas in the warm syrup for a few minutes, then lift them out.'],
  tip:'Many cooks let the carved pithas air-dry for a while before frying, which helps the design hold its shape.',
  safeH:'Careful with hot oil',safe:'Keep children away from the stove. Never put wet hands or wet pithas into the oil, because it spits. If the oil smokes, turn the heat down. Turn the karai handle inwards. If the oil catches fire, never use water: cover it with a lid and turn off the stove.'},
 g_custom_default:'Shubhechha!'
});
Object.assign(T.bn,{
 title:'নকশি পিঠা',titleAlt:'Nakshi Pitha Maker',galShort:'আমার নকশা',
 tabDesign:'নকশা',tabPitha:'পিঠা',tabMake:'বানান',tabLearn:'শিখুন',
 exampleTxt:'একটি উদাহরণ পিঠা: এই অ্যাপের আঁকা পদ্মদীঘি। নতুন করে শুরু করতে “সব মুছুন” চাপুন, বা ওপরে উৎসবের বা নামের কোনো নকশা বেছে নিন।',
 undo:'ফিরে যান',redo:'আবার করুন',keepMine:'আমারটা থাক',readingPre:'অ্যাপ নামটি যেভাবে এঁকেছে:',
 tool:'কী করবেন',tMotif:'নকশা বসান',tDraw:'রেখা কাটুন',tSelect:'বাছাই',tErase:'মুছুন',
 hMotif:'পিঠার ওপর ছুঁয়ে নকশা বসান; আঙুল না তুলে টেনে জায়গা ঠিক করুন। মাঝখানের কাছে ছাড়লে ঠিক কেন্দ্রে একটাই বসে।',
 hDraw:'আঙুল বা মাউস দিয়ে রেখা টানুন, যেভাবে খেজুর কাঁটা দিয়ে খামিরে দাগ কাটা হয়। “মাঝখান ঘিরে কয়বার” রেখাতেও খাটে।',
 hSelect:'কোনো অংশ ছুঁয়ে বাছাই করুন। টেনে সরান, চৌকো হাতল টেনে ছোট-বড় করুন, গোল হাতল টেনে ঘোরান। নিচের স্লাইডার দিয়েও বাছাই করা অংশ বদলানো যায়।',
 hErase:'কোনো নকশা বা কাটা রেখা ছুঁলে সেটি উঠে যাবে।',
 motifs:'নকশা বাছুন',noMatch:'এই নামে কোনো নকশা নেই। বাংলা বা ইংরেজিতে অন্য শব্দ লিখে খুঁজুন।',
 surprise:'চমক দেখান',symH:'মাঝখান ঘিরে কয়বার',sm:'আয়নার মতো',sh:'উল্টো দিকে',smm:'চার দিকে',
 symNoteRound:'গোল, খাঁজকাটা আর চৌকো পিঠায় নকশা মাঝখান ঘিরে ঘুরে ঘুরে বসে।',
 symNoteLong:'লম্বাটে পিঠায় নকশা আয়নার মতো উল্টে বসে, যাতে আকারের সঙ্গে মেলে।',
 scallop:'খাঁজকাটা',dimsH:'মাপ ও খামির',
 thickNote:'রেসিপিতে নকশি পিঠা সাধারণত আধা ইঞ্চি (১২ মিমি) পুরু করে বেলা হয়, আর নকশা কাটা হয় অন্তত অর্ধেক গভীর করে।',
 addRim:'শেষ পাড়ের ভেতরে নতুন পাড় বসান',remove:'বাদ দিন',
 stencilH:'স্টেনসিল (ফুটো করার কাগজ)',copiesL:'পাতায় কয়টি',
 dlStencil:'স্টেনসিল রাখুন (PDF)',prStencil:'প্রিন্ট করুন',shareBtn:'শেয়ার করুন',
 stencilNote:'১০০% (আসল মাপে) প্রিন্ট করুন, তারপর স্কেল দিয়ে ৫০ মিমি দাগটি মেপে নিন। বেলা খামিরের ওপর কাগজ রেখে প্রতিটি ফুটকিতে ফুটো করুন, কাগজ তুলে ফুটকিগুলো জুড়ে দিন।',
 shopNote:'পরামর্শ: প্রিন্টার না থাকলে PDF-টি হোয়াটসঅ্যাপে কম্পিউটার বা ফটোকপির দোকানে পাঠিয়ে ১০০% (আসল মাপে) প্রিন্ট করিয়ে নিন।',
 stampH:'থ্রিডি প্রিন্টারের ছাঁচ',dlStamp:'ছাঁচের ফাইল রাখুন (STL, .zip)',
 stampNote2:'মুখ ওপরে রেখে PETG বা খাবারের জন্য নিরাপদ বলে বিক্রি হওয়া PLA দিয়ে প্রিন্ট করুন। হাতে ধুয়ে ভালো করে শুকান, কারণ প্রিন্টের খাঁজে খামির আটকে থাকতে পারে। প্রতিবার চাপার আগে হালকা তেল মাখান বা চালের গুঁড়া ছড়িয়ে নিন।',
 dlPic:'ছবি রাখুন (PNG)',
 saved:'রাখা হয়েছে।',savedPng:'রাখা হয়েছে। গ্যালারিতে Pictures/NakshiPitha-তে দেখুন।',savedFile:'রাখা হয়েছে। Download/NakshiPitha ফোল্ডারে দেখুন।',savedB:'ডাউনলোড শুরু হয়েছে।',
 shared:'শেয়ার করা হয়েছে।',printed:'প্রিন্টে পাঠানো হয়েছে।',opened:'নতুন ট্যাবে PDF খুলেছে। সেখান থেকে ১০০% মাপে প্রিন্ট করুন।',
 savedNoShare:'এই ব্রাউজারে সরাসরি শেয়ার হয় না, তাই ফাইলটি ডাউনলোড করা হলো।',
 savedNoPrint:'নতুন ট্যাব খোলা গেল না, তাই PDF ডাউনলোড করা হলো। খুলে ১০০% মাপে প্রিন্ট করুন।',
 cancelled:'বাতিল করা হয়েছে।',declined:'রাখা হয়নি।',noRoom:'ভেতরে আর পাড় বসানোর জায়গা নেই।',
 saveWhere:'অ্যান্ড্রয়েডে ছবি রাখা হয় Pictures/NakshiPitha-তে, আর PDF ও ZIP ফাইল Download/NakshiPitha-তে।',
 failed:'ফাইল বানাতে সমস্যা হয়েছে: {m}',loadFail:'থ্রিডি বা PDF-এর অংশটি চালু করা গেল না। অ্যাপটি বন্ধ করে আবার খুলুন।',
 dup:'কপি করুন',done:'হয়ে গেছে',
 cap:'{shape} · আড়াআড়ি {d} সেমি · {t} মিমি পুরু',
 l1:'নকশি পিঠা বাংলাদেশের চালের গুঁড়ার পিঠা। আতপ চালের গুঁড়া সেদ্ধ করে খামির বানিয়ে বেলা হয়, তারপর খেজুর কাঁটা, বাঁশের চটা, চুলের কাঁটা, সুঁই, পাটকাঠি বা সরু কাঠি দিয়ে গাছ, লতা, ফুল আর জড়ানো বৃত্তের নকশা কাটা হয়। পিঠা তেলে ভেজে গুড় বা চিনির সিরায় ভেজানো হয়; ঈদ, বিয়ে, নবান্ন আর পৌষ পার্বণে বানানো হয়।',
 l3:'স্টেনসিল হলো আসল মাপের কাগজের নকশা: ফুটকিগুলো দিয়ে খামিরে ফুটো করুন, কাগজ তুলে খেজুর কাঁটা বা খিলাল দিয়ে ফুটকি জুড়ে দিন, অন্তত অর্ধেক গভীরে। ছাঁচ এক চাপে সব রেখা বসায়; এর শিরা আপনার বেছে নেওয়া গভীরতার সমান উঁচু, আর কাটার কিনারা চাপ সেখানেই থামায়।',
 recipeLink:'একটি নকশি পিঠার রেসিপি (ইংরেজিতে)',
 pdfSteps:['১০০% (আসল মাপে) প্রিন্ট করুন। নিচের দাগটি ৫০ মিমি হতে হবে।','খামির প্রায় {t} মিমি পুরু করে বেলুন, তার ওপর এই কাগজ রাখুন।','খেজুর কাঁটা, খিলাল বা সুঁই দিয়ে প্রতিটি ফুটকিতে ফুটো করুন।','কাগজ তুলে ফুটকিগুলো জুড়ে দিন, অন্তত অর্ধেক গভীরে।','ভাঙা দাগ ধরে পিঠা কেটে নিন।'],
 pdfMade:'নকশি পিঠা অ্যাপে তৈরি',grpPicks:'পিঠার জন্য বাছাই করা',
 festH:'উৎসবের পিঠা',festNote:'প্রতিটি উৎসবের জন্য মানানসই নকশা আর শুভেচ্ছা কার্ড বেছে দেয়। পরে সব বদলাতে পারবেন।',
 festDone:'{name}-এর নকশা বসানো হলো। শুভেচ্ছা কার্ড পাবেন “বানান” ট্যাবে।',
 saveDesign:'আমার নকশায় রাখুন',
 galH:'আমার নকশা',galSaveL:'পিঠার নকশাটি একটা নাম দিয়ে রাখুন:',galName:'নাম',galSaveBtn:'রাখুন',galListH:'রাখা নকশা ({n}টি)',
 galEmpty:'এখনো কোনো নকশা রাখা হয়নি। পিঠার নকশাটি রাখলে এখানে থাকবে।',galOpen:'খুলুন',galRename:'নাম বদলান',galDel:'মুছুন',
 galDelQ:'“{name}” মুছে ফেলবেন? আর ফেরত আনা যাবে না।',galYesDel:'হ্যাঁ, মুছুন',cancel:'বাতিল',galSaved:'“আমার নকশা”-য় রাখা হয়েছে।',
 galFull:'এই ফোনে অ্যাপের জায়গা ভরে গেছে। পুরোনো কোনো নকশা মুছে আবার চেষ্টা করুন।',galNoStore:'এই ব্রাউজারে নকশা রাখা যাচ্ছে না।',
 galOpened:'“{name}” খোলা হয়েছে। “ফিরে যান” চাপলে আগেরটায় ফিরবেন।',galDefault:'আমার নকশা {n}',close:'বন্ধ করুন',
 cardH:'শুভেচ্ছা কার্ড',cardNote:'ফেসবুক আর হোয়াটসঅ্যাপে মানানসই ১০৮০ × ১৩৫০ মাপের ছবি।',cardCustomPh:'নিজের শুভেচ্ছা লিখুন',cardLookL:'পিঠা',
 cardSave:'ছবি রাখুন',cardFooter:'নকশি পিঠা অ্যাপে তৈরি',cardSub:'{name} নকশি পিঠা',cardSubPlain:'নকশি পিঠা',
 shareCardTxt:'{g} — আমার নকশা করা নকশি পিঠা',shareStencilTxt:'নকশি পিঠার স্টেনসিল — দয়া করে ১০০% (আসল মাপে) প্রিন্ট করুন',
 srcH:'সূত্র',linkNote:'এই লিংকগুলো খুলতে ইন্টারনেট লাগবে; ফোনের ব্রাউজারে খুলবে।',
 aboutH:'অ্যাপ সম্পর্কে',aboutTxt:'নকশি পিঠা অ্যাপটি বিনা মূল্যের। এতে কোনো বিজ্ঞাপন, কেনাকাটা বা অ্যাকাউন্ট নেই, আর ইন্টারনেট ছাড়াই চলে। আপনার নকশা শুধু এই ফোনেই থাকে, কোথাও পাঠানো হয় না।',
 verL:'সংস্করণ',licH:'ওপেন সোর্স লাইসেন্স',licBtn:'পুরো লাইসেন্স পড়ুন',licNoFetch:'লাইসেন্সের ফাইলগুলো অ্যাপের vendor/licenses আর fonts/licenses ফোল্ডারে আছে।',
 recipe:{h:'নকশি পিঠার রেসিপি',approx:'সাধারণ ঘরোয়া নিয়ম। পরিমাণগুলো আনুমানিক; চালের গুঁড়া ভেদে পানি কম-বেশি লাগে, তাই অল্প অল্প করে দিন।',
  ingH:'উপকরণ (প্রায় ১৫–২০টি ছোট পিঠার জন্য)',ing:['আতপ চালের গুঁড়া — ২ কাপ','পানি — প্রায় ২ কাপ','লবণ — এক চিমটি','ভাজার জন্য তেল','সিরার জন্য: খেজুরের গুড় বা চিনি — প্রায় দেড় কাপ, পানি — ১ কাপ'],
  stepsH:'ধাপে ধাপে',steps:['হাঁড়িতে পানি আর লবণ দিয়ে ফুটিয়ে নিন।','আঁচ কমিয়ে চালের গুঁড়া ঢেলে দিন, কাঠের খুন্তি দিয়ে দ্রুত নেড়ে মিশিয়ে নিন। চুলা বন্ধ করে ঢাকনা দিয়ে ৫–১০ মিনিট ভাপে রাখুন।','হালকা গরম থাকতেই (বেশি গরম নয়) হাতে একটু পানি লাগিয়ে মেখে নরম, মসৃণ খামির বানান।','খামির ভেজা কাপড়ে ঢেকে ১৫–২০ মিনিট রেখে দিন, যেন শুকিয়ে না যায়।','পিঁড়ি-বেলুনে প্রায় ১২ মিমি (আধা ইঞ্চি) পুরু করে বেলে গোল বা পছন্দমতো আকারে কেটে নিন।','খেজুর কাঁটা, খিলাল বা সরু কাঠি দিয়ে নকশা কাটুন, অন্তত অর্ধেক গভীরে। এই অ্যাপের স্টেনসিল বা ছাঁচ এখানে কাজে লাগবে।','কড়াইয়ে তেল মাঝারি আঁচে গরম করে অল্প অল্প করে পিঠা ছাড়ুন; একবার উল্টে হালকা বাদামি করে ভাজুন।','গুড় বা চিনি পানিতে জ্বাল দিয়ে হালকা ঘন সিরা বানান। ভাজা পিঠা গরম সিরায় কয়েক মিনিট ডুবিয়ে তুলে নিন।'],
  tip:'অনেকে নকশা কাটা পিঠা ভাজার আগে কিছুক্ষণ বাতাসে শুকিয়ে নেন, তাতে ভাজার সময় নকশা ভালো থাকে।',
  safeH:'গরম তেলে সাবধান',safe:'শিশুদের চুলা থেকে দূরে রাখুন। ভেজা হাত বা পানি লাগা পিঠা তেলে দেবেন না, তেল ছিটকে আসে। তেল থেকে ধোঁয়া উঠলে আঁচ কমান। কড়াইয়ের হাতল ভেতরের দিকে ঘুরিয়ে রাখুন। তেলে আগুন ধরলে কখনো পানি দেবেন না; ঢাকনা দিয়ে ঢেকে চুলা বন্ধ করুন।'},
 g_custom_default:'শুভেচ্ছা!'
});

/* ======================= Nakshi Pitha Maker ======================= */
const $=id=>document.getElementById(id);
const PI2=Math.PI*2;
/* budget phones: draw at most 2× pixels, 1.5× when the browser reports 2 GB of memory or less */
const DPR_CAP=(navigator.deviceMemory&&navigator.deviceMemory<=2)?1.5:2;
let lang='bn';
function tr(k){const d=T[lang]||T.en;return d[k]!=null?d[k]:(T.en[k]!=null?T.en[k]:k)}
function trf(k,o){return String(tr(k)).replace(/\{(\w+)\}/g,(_,n)=>o[n]!=null?o[n]:'')}
function bnD(s){return String(s).replace(/[0-9]/g,d=>'০১২৩৪৫৬৭৮৯'[d])}
function num(x,d){let s=(+x).toFixed(d||0);if(d)s=s.replace(/\.?0+$/,'');return lang==='bn'?bnD(s):s}
const pairName=p=>p?(lang==='bn'?p[1]:p[0]):'';

/* ---------- a few plain pitha lines, added to the shared library ---------- */
Object.assign(MOTIF,{
 pRing(){return[P(circ(0,0,1,96),1,0)]},
 pWaveRing(p){const n=Math.round(va(p,'a',12)),m=n*16,o=[];for(let i=0;i<m;i++){const a=i/m*PI2,r=.9+.1*Math.sin(n*a);o.push([r*Math.cos(a),r*Math.sin(a)])}return[P(o,1,0)]},
 pDotRing(p){const n=Math.round(va(p,'a',16));return rep(n,a=>[P(circ(Math.cos(a)*.92,Math.sin(a)*.92,.05,10),1,1)],-Math.PI/2)},
 pScallopRing(p){const n=Math.round(va(p,'a',12)),o=[];for(let k=0;k<n;k++)for(let i=0;i<14;i++){const t=i/14,a=(k+t)/n*PI2-Math.PI/2,r=.8+.2*Math.sin(Math.PI*t);o.push([r*Math.cos(a),r*Math.sin(a)])}return[P(o,1,0)]},
 pSpokes(p){const n=Math.round(va(p,'a',12));return rep(n,a=>[P([[.24*Math.cos(a),.24*Math.sin(a)],[Math.cos(a),Math.sin(a)]],0,0)],-Math.PI/2)},
 pOval(){return[P(ell(0,0,.72,1,0,72),1,0)]}
});
Object.assign(VAR,{pWaveRing:[['count',6,24,12]],pDotRing:[['count',6,40,16]],pScallopRing:[['count',6,24,12]],pSpokes:[['spokes',4,32,12]]});
Object.assign(MN,{pRing:['Plain ring','সাদা বৃত্ত'],pWaveRing:['Wavy ring','ঢেউ বৃত্ত'],pDotRing:['Ring of pricks','ফুটকির বৃত্ত'],
 pScallopRing:['Scalloped ring','ঢেউ-কাটা বৃত্ত'],pSpokes:['Thorn cuts','কাঁটার দাগ'],pOval:['Oval line','ডিম্বাকার রেখা']});
const PICKS=['lotus','shapla','champa','jasmine','flower','crossFlower','kadam','marigold','lotusBud','leaf','paan','sprig','neem','banyanLeaf','padmaPata','vine','tendril',
 'kalka','spiral','doubleSpiral','whirl','teardrop','rings','chakra','star8','mandala','seedOfLife','trefoil','quatrefoil','girih','vineRing','alpana1'];
const GROUPS=[['pb','grpBasics',['pRing','pWaveRing','pDotRing','pScallopRing','pSpokes','pOval']],['pk','grpPicks',PICKS]]
 .concat(CATS.filter(c=>c[3]&&c[0]!=='cn'&&c[0]!=='bd').map(c=>[c[0],[c[1],c[2]],c[3].filter(m=>MN[m]&&MOTIF[m])]));
const grpLabel=gr=>typeof gr[1]==='string'?tr(gr[1]):pairName(gr[1]);

/* ---------- state ---------- */
let S={shape:'round',size:80,thick:12,els:[],rims:[],nid:1,example:true,named:null};
let ST={ridge:1.2,dp:50,rim:true,knob:true};
let SC={gap:2,paper:'a4',copies:'one'};
let G={greet:'poush',custom:'',look:'fried'};
let ui={tool:'motif',m:'lotus',sym:'8',fs:'line',size:9,rot:0,va:{},view:'dough',tab:'design',cat:'pk'};
let dv=1;const hist=[],fut=[];
function touch(){dv++}
function snap(){hist.push(JSON.stringify(S));if(hist.length>80)hist.shift();fut.length=0;btns()}
function btns(){$('undo').disabled=!hist.length;$('redo').disabled=!fut.length}
const KEY='nakshi-pitha-maker:v1';
let saveT=0;function save(){clearTimeout(saveT);saveT=setTimeout(()=>{try{localStorage.setItem(KEY,JSON.stringify({v:2,S,ST,SC,G}))}catch(e){}},300)}
function getEl(id){return S.els.find(e=>e.id===id)}

/* ---------- the pitha's outline: every shape is star-shaped around the centre, so insets are radial ---------- */
const SHAPES=['round','oval','leaf','diamond','square','scallop'];
const ROUNDISH={round:1,scallop:1,square:1};
function radiusFn(shape,D){const a=D/2;
 switch(shape){
  case 'oval':{const b=a*.7;return t=>{const c=Math.cos(t),s=Math.sin(t);return a*b/Math.hypot(b*c,a*s)}}
  case 'leaf':{const b=a*.56,cc=(a*a-b*b)/(2*b),rho=cc+b;return t=>{const uy=Math.sin(t),cy=uy<0?cc:-cc,d=uy*cy;return d+Math.sqrt(Math.max(0,d*d-cy*cy+rho*rho))}}
  case 'diamond':{const b=a*.7,p=1.12;return t=>Math.pow(Math.pow(Math.abs(Math.cos(t))/a,p)+Math.pow(Math.abs(Math.sin(t))/b,p),-1/p)}
  case 'square':{const p=7;return t=>a*Math.pow(Math.pow(Math.abs(Math.cos(t)),p)+Math.pow(Math.abs(Math.sin(t)),p),-1/p)}
  case 'scallop':return t=>a*(.9+.1*Math.sqrt(Math.abs(Math.cos(6*t))));
  default:return()=>a}}
let OL=null;
function outline(){const key=S.shape+'|'+S.size;if(OL&&OL.key===key)return OL;const R=radiusFn(S.shape,S.size),n=S.shape==='scallop'?1440:720,pts=[];let ext=0,rin=1e9,x0=1e9,x1=-1e9,y0=1e9,y1=-1e9;
 for(let i=0;i<n;i++){const a=i/n*PI2,r=R(a),x=r*Math.cos(a),y=r*Math.sin(a);ext=Math.max(ext,r);rin=Math.min(rin,r);pts.push([x,y]);x0=Math.min(x0,x);x1=Math.max(x1,x);y0=Math.min(y0,y);y1=Math.max(y1,y)}
 OL={key,R,pts,ext,rin,n,bb:[x0,y0,x1,y1]};return OL}
function insetPts(d,n){const o=outline();n=n||o.n;const pts=[];for(let i=0;i<n;i++){const a=i/n*PI2,r=Math.max(.3,o.R(a)-d);pts.push([r*Math.cos(a),r*Math.sin(a)])}return pts}
function inside(x,y,inset){return Math.hypot(x,y)<=outline().R(Math.atan2(y,x))-(inset||0)}

/* ---------- rim bands follow the outline; (s along, u across: 0 at the outer edge, 1 at the inner) ---------- */
const RIMS=[['line',['Line','রেখা'],1.2],['double',['Double line','জোড়া রেখা'],2.8],['dots',['Pricked dots','ফুটকি'],2.2],
 ['comb',['Thorn cuts','কাঁটার দাগ'],3.2],['zigzag',['Zigzag','আঁকাবাঁকা'],3.6],['scallop',['Scallops','ঢেউ-কাটা'],3.6],
 ['wave',['Wave','তরঙ্গ'],3.2],['vine',['Leafy vine','পাতার লতা'],5],['rope',['Rope twist','পাকানো দড়ি'],3.8]]
 .concat(['borderTri','borderChevron','borderWave','borderChain','borderLeafChain','borderFlowerChain','borderKalkaChain','borderRice','borderLadder','borderCheck',
  'borderDots','borderBraid','borderStar','borderStep','borderLoop','borderArch','borderHeart','borderPeacock','borderTiger'].filter(k=>BT[k]&&MN[k]).map(k=>[k,MN[k],6]));
const rimDef=v=>RIMS.find(r=>r[0]===v)||RIMS[0];
function rimLayout(){let d=1.6;return S.rims.map(r=>{const o={r,d0:d,w:r.w};d+=r.w+1.4;return o})}
function rimsUsed(){let d=1.6;S.rims.forEach(r=>d+=r.w+1.4);return d}
function bandMap(d0,w){const R=outline().R,N=1440,mid=d0+w/2,A=[],C=[0];let prev=null,L=0;
 for(let i=0;i<=N;i++){const a=-Math.PI/2+i/N*PI2,r=Math.max(.3,R(a)-mid),p=[r*Math.cos(a),r*Math.sin(a)];if(prev){L+=Math.hypot(p[0]-prev[0],p[1]-prev[1]);C.push(L)}A.push(a);prev=p}
 return{L,closed:true,at(s,u){s=((s%L)+L)%L;let lo=0,hi=N;while(hi-lo>1){const m=(lo+hi)>>1;if(C[m]<=s)lo=m;else hi=m}
  const t=(s-C[lo])/Math.max(1e-9,C[hi]-C[lo]),a=A[lo]+(A[hi]-A[lo])*t,r=Math.max(.3,R(a)-(d0+u*w));return[r*Math.cos(a),r*Math.sin(a)]}}}
function straightBand(len,w){return{L:len,closed:false,at:(s,u)=>[s,u*w]}}
function rimPaths(v,w,B){const L=B.L,o=[],cl=B.closed;
 const loop=u=>{const n=Math.max(40,Math.round(L/.8)),p=[];for(let i=0;i<(cl?n:n+1);i++)p.push(B.at(i/n*L,u));return{p,c:cl}};
 const tng=(s,u)=>{const a=B.at(s-.4,u),b=B.at(s+.4,u),l=Math.hypot(b[0]-a[0],b[1]-a[1])||1;return[(b[0]-a[0])/l,(b[1]-a[1])/l]};
 const nrm=s=>{const a=B.at(s,0),b=B.at(s,1),l=Math.hypot(b[0]-a[0],b[1]-a[1])||1;return[(b[0]-a[0])/l,(b[1]-a[1])/l]};
 const count=step=>cl?Math.max(6,Math.round(L/step)):Math.max(1,Math.round(L/step));
 switch(v){
  case 'line':o.push(loop(.5));break;
  case 'double':o.push(loop(0),loop(1));break;
  case 'dots':{const n=count(Math.max(2.2,w*1.15));for(let i=0;i<n;i++){const c=B.at((i+.5)/n*L,.5);o.push({p:[c],c:false,dot:c,dr:Math.min(1,Math.max(.45,w*.24))})}break}
  case 'comb':{o.push(loop(0));const n=count(2.6);for(let i=0;i<n;i++){const s=(i+.5)/n*L;o.push({p:[B.at(s,.3),B.at(s,1)],c:false})}break}
  case 'zigzag':{const n=count(w*1.15),p=[];for(let i=0;i<=n*2;i++){if(cl&&i===n*2)break;p.push(B.at(i/(2*n)*L,i%2?.95:.05))}o.push({p,c:cl});break}
  case 'scallop':{const n=count(w*1.5),p=[];for(let k=0;k<n;k++)for(let j=0;j<12;j++){const t=j/12;p.push(B.at((k+t)/n*L,1-Math.sin(Math.PI*t)*.92))}if(!cl)p.push(B.at(L,1));o.push({p,c:cl});break}
  case 'wave':{const n=count(w*2.3),m=n*24,p=[];for(let i=0;i<(cl?m:m+1);i++)p.push(B.at(i/m*L,.5+.42*Math.sin(i/m*n*PI2)));o.push({p,c:cl});break}
  case 'vine':{const n=count(w*1.9),m=n*24,p=[];for(let i=0;i<(cl?m:m+1);i++)p.push(B.at(i/m*L,.5+.18*Math.sin(i/m*n*PI2)));o.push({p,c:cl});
   for(let k=0;k<n;k++){const side=k%2?1:-1,s=(k+.25+(k%2?.5:0))/n*L,b=B.at(s,.5+.18*side),t=tng(s,.5),nn=nrm(s),dx=t[0]*.55+nn[0]*side*.85,dy=t[1]*.55+nn[1]*side*.85,a=Math.atan2(dy,dx),len=w*.42;
    o.push({p:mv(rotp(leafShape(len,len*.38),a),b[0],b[1]),c:true,f:true})}break}
  case 'rope':{o.push(loop(0),loop(1));const n=count(w*.95);for(let i=0;i<n;i++){const p=[];for(let j=0;j<=10;j++){const t=j/10;p.push(B.at((i+1.25*(t-.12*Math.sin(Math.PI*t)))/n*L,.12+.76*t))}o.push({p,c:false})}break}
  default:{const bt=BT[v];if(!bt)break;const [pitch,fn]=bt,n=count(pitch*w),sg=L/n,kk=sg/pitch;o.push(loop(0),loop(1));
   for(let i=0;i<n;i++){let ps;try{ps=fn(i)}catch(e){ps=[]}for(const q of ps)o.push({p:q.p.map(([x,u])=>B.at(i*sg+x*kk,u)),c:q.c,f:q.f})}}}
 return o}
const RC=new Map();
function rimPathsFor(lay){const key=outline().key+'|'+lay.r.v+'|'+lay.d0.toFixed(3)+'|'+lay.w.toFixed(3);let v=RC.get(key);if(!v){v=rimPaths(lay.r.v,lay.w,bandMap(lay.d0,lay.w)).map(classify);if(RC.size>80)RC.clear();RC.set(key,v)}return v}

/* ---------- pieces: a motif or a carved line, repeated around the centre ---------- */
const I2=[1,0,0,1];
const rotM=a=>{const c=Math.cos(a),s=Math.sin(a);return[c,-s,s,c]};
const ap=(M,p)=>[M[0]*p[0]+M[1]*p[1],M[2]*p[0]+M[3]*p[1]];
const det=M=>M[0]*M[3]-M[1]*M[2];
function symOps(sym){if(sym==='m')return[I2,[-1,0,0,1]];if(sym==='h')return[I2,[-1,0,0,-1]];if(sym==='mm')return[I2,[-1,0,0,1],[1,0,0,-1],[-1,0,0,-1]];
 const n=+sym||1;if(n<=1)return[I2];const o=[];for(let i=0;i<n;i++)o.push(rotM(i*PI2/n));return o}
function symList(){return ROUNDISH[S.shape]?['1','m','4','6','8','12']:['1','m','h','mm']}
function safeMotif(m,v){try{return MOTIF[m](v)||[]}catch(e){try{return MOTIF[m]()||[]}catch(e2){return[]}}}
function bbox(p){let x0=1e9,y0=1e9,x1=-1e9,y1=-1e9;for(const [x,y] of p){if(x<x0)x0=x;if(y<y0)y0=y;if(x>x1)x1=x;if(y>y1)y1=y}return[x0,y0,x1,y1]}
function polyArea(p){let a=0;for(let i=0,j=p.length-1;i<p.length;j=i++)a+=(p[j][0]+p[i][0])*(p[j][1]-p[i][1]);return Math.abs(a/2)}
function segDist(x,y,a,b){const dx=b[0]-a[0],dy=b[1]-a[1],l=dx*dx+dy*dy;let t=l?((x-a[0])*dx+(y-a[1])*dy)/l:0;t=Math.max(0,Math.min(1,t));return Math.hypot(x-a[0]-t*dx,y-a[1]-t*dy)}
function edgeDist(x,y,p){let d=1e9;for(let i=0,j=p.length-1;i<p.length;j=i++)d=Math.min(d,segDist(x,y,p[j],p[i]));return d}
/* a closed path smaller than a thorn's prick is drawn, stencilled and printed as one dot */
function classify(q){if(q.dot)return q;if(q.c&&q.p.length>2){const b=bbox(q.p),m=Math.max(b[2]-b[0],b[3]-b[1]);if(m<1.7)return{p:q.p,c:true,dot:[(b[0]+b[2])/2,(b[1]+b[3])/2],dr:Math.max(.4,m/2)}}return q}
function motifLocal(el){const c=Math.cos(el.r||0),s=Math.sin(el.r||0),k=el.s;return safeMotif(el.m,el.va).map(q=>({p:q.p.map(([x,y])=>[el.x+k*(x*c-y*s),el.y+k*(x*s+y*c)]),c:q.c,f:q.f}))}
function echoRows(pg,gap){const c=cen(pg);let R=0;for(const [x,y] of pg)R=Math.max(R,Math.hypot(x-c[0],y-c[1]));const rows=Math.min(10,Math.floor(R/gap)),o=[];
 for(let i=1;i<=rows;i++){const k=1-i/(rows+.6);if(R*k<.9)break;o.push({p:pg.map(([x,y])=>[c[0]+(x-c[0])*k,c[1]+(y-c[1])*k]),c:true})}return o}
function dotsGrid(pg,gap){const b=bbox(pg),o=[];let row=0;for(let y=b[1]+gap/2;y<b[3];y+=gap*.88,row++)for(let x=b[0]+gap/2+(row%2)*gap/2;x<b[2];x+=gap)
 if(inPoly(x,y,pg)&&edgeDist(x,y,pg)>gap*.5)o.push({p:[[x,y]],c:false,dot:[x,y],dr:.45});return o}
function fillExtras(q,fs,el){if(!q.c||!q.f||q.p.length<3)return[];if(polyArea(q.p)<6)return[];
 if(fs==='veins')return hatch(q.p,1.8,(el.r||0)+.75).map(h=>({p:h.p,c:false}));
 if(fs==='echo')return echoRows(q.p,1.9);
 if(fs==='dots')return dotsGrid(q.p,2.2);return[]}
const EC=new Map();
function elBase(el){if(el.k==='line')return[{p:el.pts,c:false}];const o=[];for(const q of motifLocal(el)){o.push(classify(q));if(el.fs&&el.fs!=='line')for(const x of fillExtras(q,el.fs,el))o.push(classify(x))}return o}
function elPaths(el){const sig=JSON.stringify(el);const e=EC.get(el.id);if(e&&e.sig===sig)return e.v;
 const base=elBase(el),out=[];symOps(el.sym).forEach((M,ci)=>{for(const q of base)out.push({p:q.p.map(pt=>ap(M,pt)),c:q.c,dot:q.dot?ap(M,q.dot):null,dr:q.dr,ci,id:el.id})});
 EC.set(el.id,{sig,v:out});return out}
let AP=null;
function allPaths(){if(AP&&AP.dv===dv&&AP.ok===outline().key)return AP.v;const v=[];
 for(const lay of rimLayout())for(const q of rimPathsFor(lay))v.push(q);
 for(const el of S.els)for(const q of elPaths(el))v.push(q);
 AP={dv,ok:outline().key,v};return v}

/* ---------- named designs: Banglapedia's names, drawn the way this app reads them ---------- */
function namedDesign(id){const els=[],rims=[];let nid=1;
 const rim=v=>rims.push({id:nid++,v,w:rimDef(v)[2]});
 const add=(m,x,y,s,r,sym,fs,vv)=>{const e={id:nid++,k:'m',m,x:+x.toFixed(3),y:+y.toFixed(3),s:+s.toFixed(3),r:r||0,sym:String(sym||1),fs:fs||'line'};if(vv)e.va=vv;els.push(e)};
 const at=(rho,a)=>[rho*Math.sin(a||0),-rho*Math.cos(a||0)];
 const R={padmadighi:['line','wave'],sagardighi:['line','comb'],shankhalata:['double'],kajallata:['line','dots'],chiranpata:['comb'],hijalpata:['line','scallop'],
  sajnepata:['double'],uriyaful:['scallop','dots'],bhyatful:['line','wave'],sarpus:['scallop','line'],champabaran:['line','vine'],kanyamukh:['line','dots'],
  jamaimukh:['line','comb'],jamaimuchda:['rope'],satinmuchda:['zigzag','line'],circles:['line','dots']}[id]||[];
 R.forEach(rim);
 let used=1.6;rims.forEach(r=>used+=r.w+1.4);const Ri=Math.max(8,outline().rin-used-.6),pi=Math.PI;
 switch(id){
  case 'padmadighi':add('lotus',0,0,.44*Ri,0,1,'line',{a:8,b:2});add('pRing',...at(.76*Ri,0),.15*Ri,0,6);add('pSpokes',...at(.76*Ri,0),.15*Ri,0,6,'line',{a:6});add('lotusBud',...at(.76*Ri,pi/6),.17*Ri,pi/6,6);break;
  case 'sagardighi':add('pWaveRing',0,0,.97*Ri,0,1,'line',{a:15});add('pWaveRing',0,0,.74*Ri,0,1,'line',{a:12});add('pWaveRing',0,0,.51*Ri,0,1,'line',{a:9});add('pRing',0,0,.22*Ri);break;
  case 'shankhalata':add('vineRing',0,0,.98*Ri,0,1,'line',{a:20});add('spiral',...at(.4*Ri,0),.15*Ri,0,6,'line',{a:1.25});add('spiral',0,0,.21*Ri,0,1,'line',{a:1.5});break;
  case 'kajallata':add('kalka',...at(.56*Ri,0),.31*Ri,0,6,'dots');add('flower',0,0,.2*Ri);add('pDotRing',0,0,.3*Ri,0,1,'line',{a:12});break;
  case 'chiranpata':add('leaf',...at(.5*Ri,0),.42*Ri,-pi/2,8,'veins');add('pRing',0,0,.1*Ri);break;
  case 'hijalpata':add('banyanLeaf',...at(.5*Ri,0),.4*Ri,0,6);add('jasmine',0,0,.16*Ri);break;
  case 'sajnepata':add('sprig',...at(.53*Ri,0),.36*Ri,0,8,'line',{a:8});add('crossFlower',0,0,.13*Ri);break;
  case 'uriyaful':add('daisy',0,0,.62*Ri,0,1,'line',{a:14});add('pRing',0,0,.76*Ri);add('pDotRing',0,0,.9*Ri,0,1,'line',{a:24});break;
  case 'bhyatful':add('shapla',0,0,.62*Ri,0,1,'line',{a:14});add('pRing',...at(.84*Ri,pi/6),.11*Ri,0,6);add('pSpokes',...at(.84*Ri,pi/6),.11*Ri,pi/6,6,'line',{a:5});break;
  case 'sarpus':add('chakra',0,0,.62*Ri,0,1,'line',{a:16});add('pWaveRing',0,0,.86*Ri,0,1,'line',{a:16});break;
  case 'champabaran':add('champa',...at(.62*Ri,0),.3*Ri,0,5);add('champa',0,0,.3*Ri);break;
  case 'kanyamukh':add('pOval',0,0,.46*Ri);add('tikli',0,-.6*Ri,.34*Ri);add('jhumka',-.6*Ri,.02*Ri,.26*Ri,0,'m');add('haar',0,.62*Ri,.38*Ri);break;
  case 'jamaimukh':add('pOval',0,0,.44*Ri);add('pagri',0,-.62*Ri,.36*Ri);add('kalkaFlower',-.6*Ri,.34*Ri,.24*Ri,0,'m');add('pDotRing',0,.02*Ri,.3*Ri,0,1,'line',{a:10});break;
  case 'jamaimuchda':add('whirl',0,0,.56*Ri,0,1,'line',{a:3});add('spiral',...at(.8*Ri,0),.15*Ri,0,6,'line',{a:1.25});break;
  case 'satinmuchda':add('doubleSpiral',...at(.62*Ri,0),.3*Ri,0,4);add('whirl',0,0,.34*Ri,0,1,'line',{a:2});break;
  case 'circles':add('seedOfLife',0,0,.6*Ri);add('pRing',...at(.8*Ri,0),.21*Ri,0,12);break}
 return{els,rims,nid}}
function applyNamed(id){const d=namedDesign(id);S.els=d.els;S.rims=d.rims;S.nid=d.nid;S.named=id;S.fest=null;touch()}

/* ---------- view ---------- */
const stage=$('stage'),cv=$('cv'),g=cv.getContext('2d');
let dpr=1,cw=300,ch=300,K=1,OX=150,OY=150;
let COL={leaf:'#2d6a43',gur:'#9a4e14',ink:'#1e2a22',muted:'#5a685d',table:'#d2dbcf',panel:'#fbfcfa',line:'#d3dbd2'};
function readCols(){const cs=getComputedStyle(document.documentElement),gv=n=>cs.getPropertyValue(n).trim();COL={leaf:gv('--leaf')||COL.leaf,gur:gv('--gur')||COL.gur,ink:gv('--ink')||COL.ink,muted:gv('--muted')||COL.muted,table:gv('--table')||COL.table,panel:gv('--panel')||COL.panel,line:gv('--line')||COL.line}}
function fitView(){const o=outline();K=Math.min(cw,ch)*.43/(o.ext+3);OX=cw/2;OY=ch/2}
const toS=p=>[OX+p[0]*K,OY+p[1]*K];
const toW=(x,y)=>[(x-OX)/K,(y-OY)/K];
let leafBG=null;
function leafCanvas(w,h,d){const c=document.createElement('canvas');c.width=Math.round(w*d);c.height=Math.round(h*d);const x=c.getContext('2d');x.scale(d,d);
 const gr=x.createLinearGradient(0,0,w,h);gr.addColorStop(0,'#5a9447');gr.addColorStop(.55,'#3f7a3a');gr.addColorStop(1,'#2b5e2e');x.fillStyle=gr;x.fillRect(0,0,w,h);
 x.save();x.translate(w/2,h/2);x.rotate(-.42);const L=Math.hypot(w,h),step=Math.max(4,Math.min(w,h)/70);
 for(let i=-L,j=0;i<L;i+=step,j++){x.strokeStyle=j%5?'rgba(235,250,215,.07)':'rgba(235,250,215,.14)';x.lineWidth=j%5?1:1.4;x.beginPath();x.moveTo(-L,i);x.lineTo(L,i);x.stroke()}
 x.restore();x.save();x.translate(w/2,h/2);x.rotate(-.42+Math.PI/2);x.strokeStyle='rgba(230,245,205,.28)';x.lineWidth=Math.max(4,Math.min(w,h)*.022);x.beginPath();x.moveTo(-L,-Math.min(w,h)*.47);x.lineTo(L,-Math.min(w,h)*.47);x.stroke();x.restore();
 const v=x.createRadialGradient(w/2,h/2,Math.min(w,h)*.3,w/2,h/2,Math.max(w,h)*.75);v.addColorStop(0,'rgba(0,0,0,0)');v.addColorStop(1,'rgba(0,0,0,.32)');x.fillStyle=v;x.fillRect(0,0,w,h);return c}
let grain=null;
function grainPat(ctx){if(grain&&grain.ctx===ctx)return grain.p;const c=document.createElement('canvas');c.width=c.height=180;const x=c.getContext('2d');let sd=7;const rn=()=>(sd=(sd*16807)%2147483647)/2147483647;
 for(let i=0;i<1600;i++){x.fillStyle=rn()<.55?'rgba(120,96,60,.06)':'rgba(255,255,255,.16)';x.beginPath();x.arc(rn()*180,rn()*180,rn()*1.3+.3,0,7);x.fill()}
 const p=ctx.createPattern(c,'repeat');grain={ctx,p};return p}
function tracePts(ctx,pts,tS,closed){pts.forEach((p,i)=>{const [x,y]=tS(p);i?ctx.lineTo(x,y):ctx.moveTo(x,y)});if(closed)ctx.closePath()}
function grooves(ctx,list,tS,k,fried,alpha){const w=Math.max(1.1,ST.ridge*k),path=new Path2D(),dots=[];
 for(const q of list){if(q.dot){dots.push(q);continue}if(q.p.length<2)continue;const [x0,y0]=tS(q.p[0]);path.moveTo(x0,y0);for(let i=1;i<q.p.length;i++){const [x,y]=tS(q.p[i]);path.lineTo(x,y)}if(q.c)path.closePath()}
 ctx.save();if(alpha!=null)ctx.globalAlpha=alpha;ctx.lineCap='round';ctx.lineJoin='round';
 ctx.save();ctx.translate(w*.34,w*.4);ctx.strokeStyle=fried?'rgba(255,214,140,.28)':'rgba(255,255,255,.7)';ctx.lineWidth=w*.55;ctx.stroke(path);ctx.restore();
 ctx.strokeStyle=fried?'rgba(84,34,4,.86)':'rgba(118,94,62,.66)';ctx.lineWidth=w;ctx.stroke(path);
 ctx.save();ctx.translate(-w*.14,-w*.17);ctx.strokeStyle=fried?'rgba(46,16,0,.5)':'rgba(84,64,40,.42)';ctx.lineWidth=w*.5;ctx.stroke(path);ctx.restore();
 ctx.save();ctx.translate(w*.2,w*.24);ctx.strokeStyle=fried?'rgba(214,140,60,.45)':'rgba(222,208,180,.75)';ctx.lineWidth=w*.3;ctx.stroke(path);ctx.restore();
 for(const q of dots){const [x,y]=tS(q.dot),r=Math.max(w*.55,(q.dr||.45)*k);ctx.beginPath();ctx.arc(x,y,r,0,PI2);ctx.fillStyle=fried?'rgba(80,32,4,.85)':'rgba(120,94,60,.62)';ctx.fill();
  ctx.beginPath();ctx.arc(x+r*.25,y+r*.3,r*.45,0,PI2);ctx.fillStyle=fried?'rgba(255,200,120,.3)':'rgba(255,255,255,.5)';ctx.fill()}
 ctx.restore()}
/* the pitha on its banana leaf, raw or fried; used for the stage and the saved picture */
function paintPitha(ctx,w,h,k,ox,oy,fried,list,bg){const tS=p=>[ox+p[0]*k,oy+p[1]*k],o=outline();
 if(bg)ctx.drawImage(bg,0,0,w,h);
 ctx.save();ctx.shadowColor='rgba(10,20,8,.42)';ctx.shadowBlur=Math.max(6,k*3);ctx.shadowOffsetY=Math.max(2,k*1.2);ctx.beginPath();tracePts(ctx,o.pts,tS,true);ctx.fillStyle=fried?'#c07a2c':'#efe8d8';ctx.fill();ctx.restore();
 ctx.save();ctx.beginPath();tracePts(ctx,o.pts,tS,true);ctx.clip();
 const R=o.ext*k,gr=ctx.createRadialGradient(ox-R*.25,oy-R*.3,R*.1,ox,oy,R*1.05);
 if(fried){gr.addColorStop(0,'#eab865');gr.addColorStop(.6,'#cf8a35');gr.addColorStop(1,'#9c5517')}else{gr.addColorStop(0,'#f8f3e8');gr.addColorStop(.7,'#efe7d5');gr.addColorStop(1,'#ddd1b8')}
 ctx.fillStyle=gr;ctx.fillRect(ox-R-4,oy-R-4,2*R+8,2*R+8);
 ctx.fillStyle=grainPat(ctx);ctx.globalAlpha=fried?.55:1;ctx.fillRect(ox-R-4,oy-R-4,2*R+8,2*R+8);ctx.globalAlpha=1;
 grooves(ctx,list,tS,k,fried);
 if(fried){const sh=ctx.createRadialGradient(ox-R*.35,oy-R*.45,0,ox-R*.35,oy-R*.45,R*.9);sh.addColorStop(0,'rgba(255,240,200,.38)');sh.addColorStop(1,'rgba(255,240,200,0)');ctx.fillStyle=sh;ctx.fillRect(ox-R,oy-R,2*R,2*R)}
 ctx.lineWidth=Math.max(2,k*1.6);ctx.strokeStyle=fried?'rgba(110,50,10,.55)':'rgba(170,150,115,.45)';ctx.beginPath();tracePts(ctx,o.pts,tS,true);ctx.stroke();
 ctx.restore()}
function render(){if(ui.view==='stamp'){scheduleStamp();return}g.setTransform(dpr,0,0,dpr,0,0);g.clearRect(0,0,cw,ch);
 const list=allPaths();
 if(ui.view==='stencil')drawStencil(list);
 else{if(!leafBG||leafBG.key!==cw+'x'+ch+'x'+dpr){leafBG={key:cw+'x'+ch+'x'+dpr,c:leafCanvas(cw,ch,dpr)}}paintPitha(g,cw,ch,K,OX,OY,ui.view==='fried',list,leafBG.c)}
 overlays()}
function drawStencil(list){const o=outline();g.fillStyle=COL.table;g.fillRect(0,0,cw,ch);
 const b=o.bb,m=10,[x0,y0]=toS([b[0]-m,b[1]-m]),[x1,y1]=toS([b[2]+m,b[3]+m]);g.save();g.shadowColor='rgba(0,0,0,.18)';g.shadowBlur=10;g.fillStyle='#ffffff';g.fillRect(x0,y0,x1-x0,y1-y0);g.restore();
 g.save();g.beginPath();tracePts(g,o.pts,toS,true);g.setLineDash([6,4]);g.strokeStyle='#6b6b6b';g.lineWidth=1.2;g.stroke();g.setLineDash([]);g.clip();
 g.lineCap='round';g.lineJoin='round';g.strokeStyle='#c9c9c9';g.lineWidth=Math.max(.7,.15*K);const p=new Path2D();
 for(const q of list){if(q.dot||q.p.length<2)continue;const [a,c]=toS(q.p[0]);p.moveTo(a,c);for(let i=1;i<q.p.length;i++){const [x,y]=toS(q.p[i]);p.lineTo(x,y)}if(q.c)p.closePath()}g.stroke(p);g.restore();
 const dots=stencilDots(SC.gap),r=Math.max(1.1,.36*K);g.fillStyle='#111';for(const d of dots){const [x,y]=toS(d);g.beginPath();g.arc(x,y,r,0,PI2);g.fill()}
 const [cx,cy]=toS([0,0]);g.strokeStyle='#9a9a9a';g.lineWidth=1;g.beginPath();g.moveTo(cx-4,cy);g.lineTo(cx+4,cy);g.moveTo(cx,cy-4);g.lineTo(cx,cy+4);g.stroke()}

/* ---------- stencil dots: walk every line at the chosen spacing, keep corners, never prick twice ---------- */
let SD=null;
function stencilDots(gap){const key=dv+'|'+outline().key+'|'+gap;if(SD&&SD.key===key)return SD.v;const raw=[],corner=[];
 for(const q of allPaths()){if(q.dot){corner.push(q.dot);continue}const p=q.c?q.p.concat([q.p[0]]):q.p;if(p.length<2)continue;
  let L=0;const seg=[];for(let i=1;i<p.length;i++){const l=Math.hypot(p[i][0]-p[i-1][0],p[i][1]-p[i-1][1]);seg.push(l);L+=l}if(L<.2){raw.push(p[0]);continue}
  const n=q.c?Math.max(3,Math.round(L/gap)):Math.max(1,Math.round(L/gap)),step=L/n;let s=0,i=0,acc=0;
  for(let j=0;j<(q.c?n:n+1);j++){const t=j*step;while(i<seg.length-1&&acc+seg[i]<t){acc+=seg[i];i++}const f=seg[i]?Math.min(1,(t-acc)/seg[i]):0;raw.push([p[i][0]+(p[i+1][0]-p[i][0])*f,p[i][1]+(p[i+1][1]-p[i][1])*f])}
  for(let j=1;j<p.length-1;j++){const ax=p[j][0]-p[j-1][0],ay=p[j][1]-p[j-1][1],bx=p[j+1][0]-p[j][0],by=p[j+1][1]-p[j][1];const la=Math.hypot(ax,ay),lb=Math.hypot(bx,by);if(la<1e-6||lb<1e-6)continue;
   if((ax*bx+ay*by)/(la*lb)<.8)corner.push(p[j])}}
 const cell=gap*.55,H=new Map(),out=[];const keyOf=(x,y)=>Math.floor(x/cell)+','+Math.floor(y/cell);
 const ok=(x,y)=>{const cx=Math.floor(x/cell),cy=Math.floor(y/cell);for(let i=-1;i<=1;i++)for(let j=-1;j<=1;j++){const b=H.get((cx+i)+','+(cy+j));if(b)for(const d of b)if(Math.hypot(d[0]-x,d[1]-y)<cell)return false}return true};
 for(const d of corner.concat(raw)){if(!inside(d[0],d[1],.35))continue;if(!ok(d[0],d[1]))continue;out.push(d);const k=keyOf(d[0],d[1]);let b=H.get(k);if(!b)H.set(k,b=[]);b.push(d)}
 SD={key,v:out};return out}

/* ---------- overlays: the piece being placed, the line being carved, the selection ---------- */
let gest=null,ghost=null,live=null,sel=null;
function overlays(){const list=[];
 if(ghost)for(const q of elPaths(ghost))list.push(q);
 if(live&&live.pts.length>1)for(const M of symOps(ui.sym))list.push({p:live.pts.map(p=>ap(M,p)),c:false});
 if(list.length){if(ui.view==='stencil'){g.save();g.strokeStyle=COL.gur;g.lineWidth=1.5;g.setLineDash([3,3]);for(const q of list){if(q.dot){const [x,y]=toS(q.dot);g.beginPath();g.arc(x,y,2,0,PI2);g.stroke();continue}g.beginPath();tracePts(g,q.p,toS,q.c);g.stroke()}g.restore()}
  else{g.save();g.beginPath();tracePts(g,outline().pts,toS,true);g.clip();grooves(g,list,toS,K,ui.view==='fried',.85);g.restore()}}
 if(ghost&&ghost.x===0&&ghost.y===0){const [x,y]=toS([0,0]);g.save();g.strokeStyle=COL.gur;g.lineWidth=1.5;g.beginPath();g.arc(x,y,10,0,PI2);g.stroke();g.restore()}
 drawSel()}
function selInfo(){if(!sel)return null;const el=getEl(sel.id);if(!el)return null;const ops=symOps(el.sym),M=ops[Math.min(sel.ci,ops.length-1)]||I2;
 if(el.k==='line'){const pts=el.pts.map(p=>ap(M,p)),b=bbox(pts);return{el,M,c:[(b[0]+b[2])/2,(b[1]+b[3])/2],b,line:true}}
 const loc=safeMotif(el.m,el.va);let R=0;for(const q of loc)for(const [x,y] of q.p)R=Math.max(R,Math.hypot(x,y));R=Math.max(.3,R)*el.s;const c=ap(M,[el.x,el.y]);
 return{el,M,c,R,b:[c[0]-R,c[1]-R,c[0]+R,c[1]+R]}}
function handlePos(i){const [cx,cy]=toS(i.c);if(i.line)return null;const r=Math.max(18,i.R*K);return{rs:[cx+r*.72+6,cy+r*.72+6],ro:[cx,cy-r-24],cx,cy,r}}
function drawSel(){const i=selInfo();if(!i)return;g.save();g.strokeStyle=COL.gur;g.lineWidth=1.5;g.setLineDash([5,4]);
 if(i.line){const [x0,y0]=toS([i.b[0],i.b[1]]),[x1,y1]=toS([i.b[2],i.b[3]]);g.strokeRect(x0-6,y0-6,x1-x0+12,y1-y0+12);g.restore();return}
 const h=handlePos(i);g.beginPath();g.arc(h.cx,h.cy,h.r,0,PI2);g.stroke();g.setLineDash([]);g.beginPath();g.moveTo(h.cx,h.cy-h.r);g.lineTo(h.ro[0],h.ro[1]);g.stroke();
 g.fillStyle=COL.panel;g.lineWidth=2;g.beginPath();g.rect(h.rs[0]-8,h.rs[1]-8,16,16);g.fill();g.stroke();g.beginPath();g.arc(h.ro[0],h.ro[1],8.5,0,PI2);g.fill();g.stroke();g.restore()}

/* ---------- editing ---------- */
function sizeFromSlider(){const v=+$('size').value/1000;return+(2.5*Math.pow(60/2.5,v)).toFixed(2)}
function setSizeSlider(s){$('size').value=String(Math.round(Math.log(Math.max(2.5,Math.min(60,s))/2.5)/Math.log(60/2.5)*1000))}
function updVals(){const s=sizeFromSlider();$('sizeVal').textContent=num(2*s,s<5?1:0)+' '+tr('mm');$('rotVal').textContent=num($('rot').value)+'°'}
function curVaFor(m){return ui.va[m]||undefined}
function newMotif(w){let [x,y]=w;const snapR=Math.max(2.5,12/K),c=Math.hypot(x,y)<snapR;if(c){x=0;y=0}
 const el={id:-1,k:'m',m:ui.m,x:+x.toFixed(2),y:+y.toFixed(2),s:sizeFromSlider(),r:+$('rot').value*Math.PI/180,sym:c?'1':ui.sym,fs:ui.fs};const v=curVaFor(ui.m);if(v)el.va=Object.assign({},v);return el}
function markEdited(){if(S.example){S.example=false;syncExample()}S.named=null;S.fest=null;syncNamed();syncFest()}
function addEl(el){snap();el.id=S.nid++;S.els.push(el);markEdited();touch();changed()}
function changed(){touch();save();render();btns();updMakeStats();scheduleStamp();scheduleCard()}
function hitTest(w,tolPx){const tol=Math.max(1.2,(tolPx||14)/K);
 for(let i=S.els.length-1;i>=0;i--){const el=S.els[i];for(const q of elPaths(el)){if(q.dot){if(Math.hypot(w[0]-q.dot[0],w[1]-q.dot[1])<tol+(q.dr||.4))return{id:el.id,ci:q.ci};continue}
  const p=q.p;for(let j=1;j<(q.c?p.length+1:p.length);j++){if(segDist(w[0],w[1],p[j-1],p[j%p.length])<tol)return{id:el.id,ci:q.ci}}}}return null}
function select(h){sel=h?{id:h.id,ci:h.ci}:null;editSnap=false;syncSelUI();render()}
function deselect(){if(!sel)return;sel=null;syncSelUI();render()}
let editSnap=false;
function editSel(fn){const i=selInfo();if(!i)return false;if(!editSnap){snap();editSnap=true}fn(i.el);markEdited();changed();return true}
function syncSelUI(){const i=selInfo();$('seltools').hidden=!i;if(i&&i.el.k==='m'){setSizeSlider(i.el.s);$('rot').value=String(Math.round(((i.el.r||0)*180/Math.PI%360+360)%360/5)*5);pressSeg('fs',i.el.fs||'line');pressSeg('sym',i.el.sym)}
 else if(i){pressSeg('sym',i.el.sym)}else{setSizeSlider(ui.size);$('rot').value=String(ui.rot);pressSeg('fs',ui.fs);pressSeg('sym',ui.sym)}updVals();syncVar()}
function cpt(e){const r=cv.getBoundingClientRect();return[e.clientX-r.left,e.clientY-r.top]}
function smoothLine(p){if(p.length<3)return p;let o=p;for(let k=0;k<2;k++){const q=[o[0]];for(let i=0;i<o.length-1;i++){const a=o[i],b=o[i+1];q.push([a[0]*.75+b[0]*.25,a[1]*.75+b[1]*.25],[a[0]*.25+b[0]*.75,a[1]*.25+b[1]*.75])}q.push(o[o.length-1]);o=q}
 const out=[o[0]];for(const pt of o){const l=out[out.length-1];if(Math.hypot(pt[0]-l[0],pt[1]-l[1])>.35)out.push(pt)}if(out[out.length-1]!==o[o.length-1])out.push(o[o.length-1]);return out.map(([x,y])=>[+x.toFixed(2),+y.toFixed(2)])}
cv.addEventListener('pointerdown',e=>{if(e.pointerType==='mouse'&&e.button!==0)return;if(gest)return;try{cv.setPointerCapture(e.pointerId)}catch(_){}const p=cpt(e),w=toW(p[0],p[1]);
 if(ui.view==='stamp')return;
 if(ui.tool==='motif'){ghost=newMotif(w);gest={type:'place',pid:e.pointerId};render();return}
 if(ui.tool==='draw'){live={pts:[w.map(v=>+v.toFixed(2))]};gest={type:'draw',pid:e.pointerId};return}
 if(ui.tool==='erase'){const h=hitTest(w);if(h){snap();S.els=S.els.filter(x=>x.id!==h.id);if(sel&&sel.id===h.id)sel=null;markEdited();changed();syncSelUI()}return}
 if(ui.tool==='select'){const HR=e.pointerType==='touch'?24:16;const i=selInfo();if(i&&!i.line){const hp=handlePos(i);if(Math.hypot(p[0]-hp.rs[0],p[1]-hp.rs[1])<HR){gest={type:'resize',pid:e.pointerId,id:i.el.id,c:[hp.cx,hp.cy],d0:Math.max(4,Math.hypot(p[0]-hp.cx,p[1]-hp.cy)),s0:i.el.s,started:false};return}
   if(Math.hypot(p[0]-hp.ro[0],p[1]-hp.ro[1])<HR){gest={type:'rotate',pid:e.pointerId,id:i.el.id,c:[hp.cx,hp.cy],a0:Math.atan2(p[1]-hp.cy,p[0]-hp.cx),r0:i.el.r||0,dm:det(i.M),started:false};return}}
  const h=hitTest(w);if(h){select(h);const el=getEl(h.id);gest={type:'move',pid:e.pointerId,id:h.id,M:symOps(el.sym)[h.ci]||I2,w0:w,x0:el.x,y0:el.y,pts0:el.pts?el.pts.map(q=>q.slice()):null,started:false};return}
  deselect()}});
cv.addEventListener('pointermove',e=>{if(!gest||e.pointerId!==gest.pid)return;const p=cpt(e),w=toW(p[0],p[1]);
 if(gest.type==='place'){ghost=newMotif(w);render();return}
 if(gest.type==='draw'){const l=live.pts[live.pts.length-1];if(Math.hypot(w[0]-l[0],w[1]-l[1])>Math.max(.35,2/K)){live.pts.push([+w[0].toFixed(2),+w[1].toFixed(2)]);render()}return}
 const el=getEl(gest.id);if(!el)return;
 if(!gest.started){gest.started=true;snap();markEdited()}
 if(gest.type==='move'){const dw=[w[0]-gest.w0[0],w[1]-gest.w0[1]],M=gest.M,bd=[M[0]*dw[0]+M[2]*dw[1],M[1]*dw[0]+M[3]*dw[1]];
  if(el.k==='line')el.pts=gest.pts0.map(([x,y])=>[+(x+bd[0]).toFixed(2),+(y+bd[1]).toFixed(2)]);else{el.x=+(gest.x0+bd[0]).toFixed(2);el.y=+(gest.y0+bd[1]).toFixed(2)}}
 else if(gest.type==='resize'){const d=Math.hypot(p[0]-gest.c[0],p[1]-gest.c[1]);el.s=+Math.max(1.5,Math.min(80,gest.s0*d/gest.d0)).toFixed(2);setSizeSlider(el.s);updVals()}
 else if(gest.type==='rotate'){const a=Math.atan2(p[1]-gest.c[1],p[0]-gest.c[0]);el.r=+(gest.r0+(a-gest.a0)*(gest.dm<0?-1:1)).toFixed(4);$('rot').value=String(Math.round(((el.r*180/Math.PI)%360+360)%360/5)*5);updVals()}
 touch();render()});
function endPtr(e,cancel){if(!gest||e.pointerId!==gest.pid)return;const t=gest.type;gest=null;
 if(t==='place'){const el=ghost;ghost=null;if(!cancel&&el)addEl(el);else render();return}
 if(t==='draw'){const pts=live?live.pts:[];live=null;let L=0;for(let i=1;i<pts.length;i++)L+=Math.hypot(pts[i][0]-pts[i-1][0],pts[i][1]-pts[i-1][1]);
  if(!cancel&&L>1.2)addEl({k:'line',pts:smoothLine(pts),sym:ui.sym});else render();return}
 changed()}
cv.addEventListener('pointerup',e=>endPtr(e,false));cv.addEventListener('pointercancel',e=>endPtr(e,true));
document.addEventListener('keydown',e=>{const tg=e.target&&e.target.tagName;if(tg==='INPUT'||tg==='TEXTAREA')return;
 if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='z'){e.preventDefault();e.shiftKey?redo():undo();return}
 if((e.key==='Delete'||e.key==='Backspace')&&sel&&$('sheet').hidden){e.preventDefault();delSel();return}if(e.key==='Escape'){backAction(true)}});
function undo(){if(!hist.length)return;fut.push(JSON.stringify(S));restore(hist.pop())}
function redo(){if(!fut.length)return;hist.push(JSON.stringify(S));restore(fut.pop())}
function restore(json){S=JSON.parse(json);migrate();sel=null;EC.clear();touch();fitView();syncAll();save();render();btns();updMakeStats()}
function delSel(){const i=selInfo();if(!i)return;snap();S.els=S.els.filter(x=>x!==i.el);sel=null;markEdited();changed();syncSelUI()}
$('selDel').addEventListener('click',delSel);
$('selDup').addEventListener('click',()=>{const i=selInfo();if(!i)return;snap();const c=JSON.parse(JSON.stringify(i.el));c.id=S.nid++;if(c.k==='line')c.pts=c.pts.map(([x,y])=>[x+3,y+3]);else{c.x+=3;c.y+=3}S.els.push(c);sel={id:c.id,ci:0};markEdited();changed();syncSelUI()});
$('selDone').addEventListener('click',deselect);
$('undo').addEventListener('click',undo);$('redo').addEventListener('click',redo);
$('clear').addEventListener('click',()=>{$('clearAsk').hidden=false});
$('clearNo').addEventListener('click',()=>{$('clearAsk').hidden=true});
$('clearYes').addEventListener('click',()=>{$('clearAsk').hidden=true;snap();S.els=[];S.rims=[];sel=null;markEdited();changed();syncAll()});

/* ---------- controls ---------- */
function pressSeg(id,v){$(id).querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.v===String(v))))}
function seg(id,fn){$(id).addEventListener('click',e=>{const b=e.target.closest('button');if(!b||!b.dataset.v)return;fn(b.dataset.v,b)})}
function setHint(){$('hint').textContent=tr({motif:'hMotif',draw:'hDraw',select:'hSelect',erase:'hErase'}[ui.tool])}
function syncExample(){$('exnote').hidden=!S.example;$('exTxt').textContent=tr('exampleTxt')}
function updDims(){$('psize').value=String(S.size);$('pthick').value=String(S.thick);$('psizeVal').textContent=num(S.size/10,1)+' '+tr('cm');$('pthickVal').textContent=num(S.thick)+' '+tr('mm');
 $('cap').textContent=trf('cap',{shape:tr(S.shape),d:num(S.size/10,1),t:num(S.thick)})}

seg('views',v=>setView(v));
function setView(v){ui.view=v;pressSeg('views',v);const st=v==='stamp';$('gl').hidden=!st;$('cv').hidden=st;$('smsg').hidden=true;
 if(st){deselect();showStampView()}else render()}
seg('tabs',v=>setTab(v));
function setTab(v){if(!['design','pitha','make','learn'].includes(v))v='design';ui.tab=v;pressSeg('tabs',v);['design','pitha','make','learn'].forEach(t=>$('pane-'+t).hidden=t!==v);
 document.body.dataset.tab=v;const pn=$('panel');if(pn&&pn.scrollHeight>pn.clientHeight)pn.scrollTop=0;
 if(v==='make'&&(ui.view==='dough'||ui.view==='fried'))setView('stencil');
 if(v!=='make'&&ui.view==='stamp')setView('dough');updMakeStats();if(v==='make')scheduleCard()}
seg('tools',v=>{ui.tool=v;pressSeg('tools',v);if(v!=='select')deselect();setHint();if(ui.view==='stamp')setView('dough')});

/* size, turn, lines inside, repeat: they set the next piece, or change the selected one */
$('size').addEventListener('input',()=>{updVals();const s=sizeFromSlider();if(!editSel(el=>{if(el.k==='m')el.s=s}))ui.size=s});
$('rot').addEventListener('input',()=>{updVals();const r=+$('rot').value;if(!editSel(el=>{if(el.k==='m')el.r=r*Math.PI/180}))ui.rot=r});
['size','rot'].forEach(id=>$(id).addEventListener('change',()=>{editSnap=false}));
seg('fs',v=>{pressSeg('fs',v);if(!editSel(el=>{if(el.k==='m')el.fs=v}))ui.fs=v;editSnap=false});
seg('sym',v=>{pressSeg('sym',v);if(!editSel(el=>{el.sym=v}))ui.sym=v;else if(sel)sel.ci=0;editSnap=false;render()});
function buildSym(){const L=symList();if(!L.includes(ui.sym))ui.sym=ROUNDISH[S.shape]?'8':'m';const box=$('sym');box.innerHTML='';
 L.forEach(v=>{const b=document.createElement('button');b.type='button';b.dataset.v=v;b.textContent=v==='1'?tr('s1'):v==='m'?tr('sm'):v==='h'?tr('sh'):v==='mm'?tr('smm'):num(v);
  if(/^\d+$/.test(v)&&v!=='1')b.setAttribute('aria-label',(lang==='bn'?num(v)+' দিকে':v+' ways'));box.appendChild(b)});
 const i=selInfo();pressSeg('sym',i?i.el.sym:ui.sym);$('symNote').textContent=tr(ROUNDISH[S.shape]?'symNoteRound':'symNoteLong')}

/* ---------- motif library (shared with Nakshi Kantha Maker, plus plain pitha lines) ---------- */
const mg=$('motifs');let query='';
const ALL=[];GROUPS.forEach(gp=>gp[2].forEach(m=>{if(!ALL.includes(m))ALL.push(m)}));
function drawMotifThumb(c,m,v,px){const d=Math.min(DPR_CAP,window.devicePixelRatio||1),Sz=Math.round(px*d);if(c.width!==Sz){c.width=Sz;c.height=Sz}const x=c.getContext('2d');x.clearRect(0,0,Sz,Sz);
 const ps=safeMotif(m,v);let b=[1e9,1e9,-1e9,-1e9];ps.forEach(q=>{const bb=bbox(q.p);b=[Math.min(b[0],bb[0]),Math.min(b[1],bb[1]),Math.max(b[2],bb[2]),Math.max(b[3],bb[3])]});
 const sc=Sz*.84/Math.max(1e-6,b[2]-b[0],b[3]-b[1]),cx=(b[0]+b[2])/2,cy=(b[1]+b[3])/2;x.strokeStyle=COL.leaf;x.lineWidth=1.15*d;x.lineJoin='round';x.lineCap='round';
 ps.forEach(q=>{x.beginPath();q.p.forEach(([a,bq],i)=>{const X=Sz/2+(a-cx)*sc,Y=Sz/2+(bq-cy)*sc;i?x.lineTo(X,Y):x.moveTo(X,Y)});if(q.c)x.closePath();x.stroke()})}
const painted=new Set();
function paintBtn(b){drawMotifThumb(b.querySelector('canvas'),b.dataset.m,undefined,46);painted.add(b)}
const io='IntersectionObserver' in window?new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){paintBtn(e.target);io.unobserve(e.target)}}),{root:mg,rootMargin:'120px'}):null;
function buildCats(){const c=$('cats');c.innerHTML='';GROUPS.forEach(gp=>{const b=document.createElement('button');b.type='button';b.dataset.v=gp[0];b.textContent=grpLabel(gp);b.setAttribute('aria-pressed',String(!query&&gp[0]===ui.cat));c.appendChild(b)})}
$('cats').addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;ui.cat=b.dataset.v;query='';$('msearch').value='';buildCats();showMotifs();mg.scrollTop=0});
$('msearch').addEventListener('input',()=>{query=$('msearch').value.trim();buildCats();showMotifs()});
function showMotifs(){let list;if(query){const q=query.toLowerCase();list=ALL.filter(m=>{const n=MN[m];return n&&(n[0].toLowerCase().includes(q)||n[1].includes(query))})}
 else list=(GROUPS.find(gp=>gp[0]===ui.cat)||GROUPS[0])[2];
 painted.clear();mg.innerHTML='';$('mEmpty').hidden=!!list.length;$('mEmpty').textContent=tr('noMatch');
 for(const m of list){const b=document.createElement('button');b.type='button';b.dataset.m=m;b.setAttribute('aria-pressed',String(m===ui.m));const c=document.createElement('canvas');c.setAttribute('aria-hidden','true');
  const s=document.createElement('span');s.textContent=pairName(MN[m]);b.append(c,s);mg.appendChild(b);if(io)io.observe(b);else paintBtn(b)}}
mg.addEventListener('click',e=>{const b=e.target.closest('button');if(b)pickMotif(b.dataset.m)});
function pickMotif(m){ui.m=m;mg.querySelectorAll('button').forEach(x=>x.setAttribute('aria-pressed',String(x.dataset.m===m)));
 if(ui.tool!=='motif'){ui.tool='motif';pressSeg('tools','motif');setHint()}deselect();if(ui.view==='stamp')setView('dough');syncVar()}

/* variations: sliders for the chosen motif, or for the selected piece */
const VK=['a','b'];
function varTarget(){const i=selInfo();if(i)return i.el.k==='m'?{el:i.el,m:i.el.m}:null;return{m:ui.m}}
function curVa(t){return(t.el?t.el.va:ui.va[t.m])||{}}
function syncVar(){const t=varTarget(),spec=t&&VAR[t.m],box=$('varBox');if(!spec){box.hidden=true;return}box.hidden=false;const rows=$('varRows');rows.innerHTML='';const v=curVa(t);
 spec.forEach(([lab,mn,mx,df,st],i)=>{const key=VK[i],dec=st&&st<1?2:0;const s=document.createElement('span');s.textContent=tr('v_'+lab);
  const r=document.createElement('input');r.type='range';r.min=mn;r.max=mx;r.step=st||1;r.value=v[key]!=null?v[key]:df;r.id='va_'+key;r.setAttribute('aria-label',tr('v_'+lab));
  const o=document.createElement('span');o.className='val';o.textContent=num(r.value,dec);
  r.addEventListener('input',()=>{o.textContent=num(r.value,dec);setVa(key,+r.value)});r.addEventListener('change',()=>{editSnap=false});rows.append(s,r,o)});drawPrev()}
function setVa(key,val){const t=varTarget();if(!t)return;if(t.el)editSel(el=>{el.va=Object.assign({},el.va||{},{[key]:val})});else ui.va[t.m]=Object.assign({},ui.va[t.m]||{},{[key]:val});drawPrev()}
function drawPrev(){const t=varTarget();if(t&&VAR[t.m])drawMotifThumb($('varPrev'),t.m,curVa(t),58)}
$('surprise').addEventListener('click',()=>{const t=varTarget();if(!t||!VAR[t.m])return;const v={};
 VAR[t.m].forEach(([l,mn,mx,df,st],i)=>{const s=st||1;v[VK[i]]=+(mn+Math.round(Math.random()*(mx-mn)/s)*s).toFixed(2)});
 if(t.el){editSel(el=>{el.va=v});editSnap=false}else ui.va[t.m]=v;syncVar()});

/* ---------- named designs ---------- */
const namedName=id=>{const n=NAMED.find(x=>x[0]===id);return n?(lang==='bn'?n[2]:n[1]):''};
function designPaths(d){const out=[];let dd=1.6;for(const r of d.rims){for(const q of rimPaths(r.v,r.w,bandMap(dd,r.w)))out.push(classify(q));dd+=r.w+1.4}
 for(const el of d.els){const base=elBase(el);symOps(el.sym).forEach(M=>{for(const q of base)out.push({p:q.p.map(pt=>ap(M,pt)),c:q.c,dot:q.dot?ap(M,q.dot):null,dr:q.dr})})}return out}
function drawNamedThumb(c,id){const d=Math.min(DPR_CAP,window.devicePixelRatio||1),Sz=Math.round(58*d);c.width=Sz;c.height=Sz;const x=c.getContext('2d');const o=outline(),sc=Sz*.47/o.ext,h=Sz/2,tS=p=>[h+p[0]*sc,h+p[1]*sc];
 x.fillStyle=COL.panel;x.beginPath();tracePts(x,o.pts,tS,true);x.fill();x.strokeStyle=COL.muted;x.lineWidth=d;x.stroke();x.save();x.clip();
 x.strokeStyle=COL.gur;x.fillStyle=COL.gur;x.lineWidth=.9*d;x.lineJoin='round';
 for(const q of designPaths(namedDesign(id))){if(q.dot){const [a,b]=tS(q.dot);x.beginPath();x.arc(a,b,Math.max(.8*d,(q.dr||.4)*sc),0,PI2);x.fill();continue}x.beginPath();tracePts(x,q.p,tS,q.c);x.stroke()}x.restore()}
const nio='IntersectionObserver' in window?new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){drawNamedThumb(e.target.querySelector('canvas'),e.target.dataset.v);nio.unobserve(e.target)}}),{rootMargin:'200px'}):null;
function buildNamed(){const n=$('named');if(nio)nio.disconnect();n.innerHTML='';NAMED.forEach(([id,en,bn])=>{const b=document.createElement('button');b.type='button';b.dataset.v=id;b.setAttribute('aria-pressed',String(S.named===id));
 const c=document.createElement('canvas');c.setAttribute('aria-hidden','true');const s=document.createElement('span');s.textContent=lang==='bn'?bn:en;b.append(c,s);n.appendChild(b);if(nio)nio.observe(b);else drawNamedThumb(c,id)})}
function syncNamed(){$('named').querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.v===S.named)));const n=NAMED.find(x=>x[0]===S.named),r=$('reading');r.textContent='';
 if(n){const bb=document.createElement('b');bb.textContent=tr('readingPre')+' ';r.append(bb,document.createTextNode(lang==='bn'?n[4]:n[3]))}}
let pendingNamed=null;
$('named').addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;const id=b.dataset.v;
 if(S.example||S.named||(!S.els.length&&!S.rims.length)){doNamed(id);return}
 pendingNamed=id;$('namedQ').textContent=trf('namedQ',{name:namedName(id)});$('namedAsk').hidden=false});
function doNamed(id){snap();applyNamed(id);sel=null;if(S.example){S.example=false;syncExample()}changed();syncNamed();syncSelUI();buildRimList();if(ui.view==='stamp')scheduleStamp()}
$('namedYes').addEventListener('click',()=>{$('namedAsk').hidden=true;const p=pendingNamed;pendingNamed=null;if(p){if(p.startsWith('fest:'))doFest(p.slice(5));else doNamed(p)}});
$('namedNo').addEventListener('click',()=>{$('namedAsk').hidden=true;pendingNamed=null});

/* ---------- the pitha: shape, size, thickness, rim bands ---------- */
function buildShapes(){const s=$('shapes');s.innerHTML='';SHAPES.forEach(id=>{const b=document.createElement('button');b.type='button';b.dataset.v=id;b.setAttribute('aria-pressed',String(S.shape===id));b.textContent=tr(id);s.appendChild(b)})}
seg('shapes',v=>{if(v===S.shape)return;snap();const nmd=S.named,ex=S.example;S.shape=v;OL=null;RC.clear();if(S.fest){applyFest(S.fest);S.example=ex}else if(nmd){applyNamed(nmd);S.example=ex}
 buildShapes();buildSym();fitView();changed();buildNamed();syncNamed();buildRimList()});
let sizeDrag=null;
function scaleEl(e,f){const c=JSON.parse(JSON.stringify(e));if(c.k==='line')c.pts=c.pts.map(([x,y])=>[+(x*f).toFixed(2),+(y*f).toFixed(2)]);else{c.x=+(c.x*f).toFixed(2);c.y=+(c.y*f).toFixed(2);c.s=+(c.s*f).toFixed(2)}return c}
$('psize').addEventListener('input',()=>{const D=+$('psize').value;if(!sizeDrag){snap();sizeDrag={D0:S.size,els:JSON.parse(JSON.stringify(S.els)),rims:JSON.parse(JSON.stringify(S.rims))}}
 const f=D/sizeDrag.D0;S.size=D;S.els=sizeDrag.els.map(e=>scaleEl(e,f));S.rims=sizeDrag.rims.map(r=>Object.assign({},r,{w:+Math.max(.8,r.w*f).toFixed(2)}));OL=null;touch();fitView();updDims();render()});
$('psize').addEventListener('change',()=>{sizeDrag=null;changed();buildRimList();buildNamed()});
let thickDrag=false;$('pthick').addEventListener('change',()=>{thickDrag=false;btns()});
$('pthick').addEventListener('input',()=>{if(!thickDrag){snap();thickDrag=true}S.thick=+$('pthick').value;updDims();syncMake();touch();save();updMakeStats();if(ui.view==='stamp')scheduleStamp()});
function rimThumb(c,v,w){const d=Math.min(DPR_CAP,window.devicePixelRatio||1),Wc=Math.round(46*d),Hc=Math.round(30*d);c.width=Wc;c.height=Hc;const x=c.getContext('2d');x.clearRect(0,0,Wc,Hc);
 const sc=Hc*.6/w,len=Wc/sc,ps=rimPaths(v,w,straightBand(len,w)).map(classify);x.translate(0,Hc*.2);x.strokeStyle=COL.leaf;x.fillStyle=COL.leaf;x.lineWidth=1.1*d;x.lineCap='round';x.lineJoin='round';
 for(const q of ps){if(q.dot){x.beginPath();x.arc(q.dot[0]*sc,q.dot[1]*sc,Math.max(1.2*d,(q.dr||.4)*sc*.8),0,PI2);x.fill();continue}x.beginPath();q.p.forEach(([a,b],i)=>i?x.lineTo(a*sc,b*sc):x.moveTo(a*sc,b*sc));if(q.c)x.closePath();x.stroke()}}
function buildRimAdd(){const gr=$('rimAdd');gr.innerHTML='';RIMS.forEach(([v,names,w])=>{const b=document.createElement('button');b.type='button';b.dataset.v=v;const c=document.createElement('canvas');c.setAttribute('aria-hidden','true');
 const s=document.createElement('span');s.textContent=pairName(names);b.append(c,s);gr.appendChild(b);rimThumb(c,v,w)})}
$('rimAdd').addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;const v=b.dataset.v,room=outline().rin-rimsUsed()-6;if(room<1){setStatus('rimStatus',tr('noRoom'),true);return}setStatus('rimStatus','');
 snap();S.rims.push({id:S.nid++,v,w:+Math.min(rimDef(v)[2],room).toFixed(2)});markEdited();changed();buildRimList()});
function buildRimList(){const L=$('rimList');L.innerHTML='';if(!S.rims.length){const p=document.createElement('p');p.className='note';p.textContent=tr('noRims');L.appendChild(p);return}
 S.rims.forEach(r=>{const row=document.createElement('div');row.className='rimrow';const c=document.createElement('canvas');c.setAttribute('aria-hidden','true');
  const box=document.createElement('div');box.className='nm';const t=document.createElement('span');t.textContent=pairName(rimDef(r.v)[1]);
  const rg=document.createElement('input');rg.type='range';rg.min='0.8';rg.max='10';rg.step='0.2';rg.value=String(r.w);rg.id='rimw_'+r.id;rg.setAttribute('aria-label',tr('width'));let started=false;
  rg.addEventListener('input',()=>{if(!started){snap();started=true}r.w=+rg.value;markEdited();touch();save();render();updMakeStats();rimThumb(c,r.v,r.w)});rg.addEventListener('change',()=>{started=false;btns()});
  box.append(t,rg);const x=document.createElement('button');x.className='ibtn';x.type='button';x.textContent='×';x.setAttribute('aria-label',tr('remove')+': '+t.textContent);
  x.addEventListener('click',()=>{snap();S.rims=S.rims.filter(q=>q!==r);markEdited();changed();buildRimList()});row.append(c,box,x);L.appendChild(row);rimThumb(c,r.v,r.w)})}

/* ---------- language, theme, start ---------- */
function applyLang(){document.documentElement.lang=lang==='bn'?'bn':'en';document.querySelectorAll('[data-t]').forEach(e=>{const v=tr(e.dataset.t);if(typeof v==='string')e.textContent=v});
 document.querySelectorAll('[data-ta]').forEach(e=>{e.setAttribute('aria-label',tr(e.dataset.ta));e.title=tr(e.dataset.ta)});
 $('msearch').placeholder=trf('searchPh',{n:num(ALL.length)});$('lang').textContent=lang==='bn'?'English':'বাংলা';$('lang').setAttribute('lang',lang==='bn'?'en':'bn');document.title=lang==='bn'?'নকশি পিঠা':'Nakshi Pitha Maker';
 $('namesList').textContent=(lang==='bn'?BP_NAMES_BN.join(', ')+' ইত্যাদি।':BP_NAMES.join(', ')+', and more.');syncAll();buildGreet();buildLearn();buildLic()}
$('lang').addEventListener('click',()=>{lang=lang==='bn'?'en':'bn';try{localStorage.setItem(KEY+':lang',lang)}catch(e){}applyLang()});
function syncAll(){buildCats();showMotifs();buildNamed();syncNamed();buildSym();buildShapes();buildRimAdd();buildRimList();pressSeg('tools',ui.tool);pressSeg('views',ui.view);pressSeg('tabs',ui.tab);
 setHint();syncExample();updDims();syncSelUI();syncMake();updMakeStats();buildFest();scheduleCard()}
function migrate(){if(!SHAPES.includes(S.shape))S.shape='round';S.size=Math.max(50,Math.min(150,+S.size||80));S.thick=Math.max(6,Math.min(20,+S.thick||12));
 S.els=(S.els||[]).filter(e=>e&&(e.k==='line'?Array.isArray(e.pts)&&e.pts.length>1:MOTIF[e.m]));S.els.forEach(e=>{e.sym=String(e.sym||'1')});
 S.rims=(S.rims||[]).filter(r=>r&&RIMS.some(x=>x[0]===r.v));if(S.fest&&!FEST.some(f=>f[0]===S.fest))S.fest=null;if(S.named&&!NAMED.some(n=>n[0]===S.named))S.named=null;let mx=0;S.els.concat(S.rims).forEach(e=>mx=Math.max(mx,e.id||0));S.nid=Math.max(S.nid||1,mx+1);OL=null;RC.clear();EC.clear()}
function themeChanged(){readCols();painted.forEach(paintBtn);buildNamed();buildRimAdd();buildRimList();drawPrev();render();if(typeof restyle3==='function')restyle3();scheduleCard()}
const mq=matchMedia('(prefers-color-scheme: dark)');if(mq.addEventListener)mq.addEventListener('change',themeChanged);
new MutationObserver(themeChanged).observe(document.documentElement,{attributes:true,attributeFilter:['data-theme']});
function resize(){const r=stage.getBoundingClientRect();if(r.width<10||r.height<10)return;dpr=Math.min(DPR_CAP,window.devicePixelRatio||1);cw=r.width;ch=r.height;cv.width=Math.round(cw*dpr);cv.height=Math.round(ch*dpr);fitView();render();if(ui.view==='stamp')resizeGL()}
if('ResizeObserver' in window)new ResizeObserver(resize).observe(stage);else addEventListener('resize',resize);

/* ---------- libraries load only when a stencil, stamp or zip is made ---------- */
const LIB={three:['./vendor/three.min.js'],contour:['./vendor/d3-array.min.js','./vendor/d3-contour.min.js'],
 pdf:['./vendor/jspdf.umd.min.js'],zip:['./vendor/jszip.min.js']};   /* bundled locally: the app never needs the internet */
const LP={};
function loadScript(src){if(LP[src])return LP[src];return LP[src]=new Promise((res,rej)=>{const s=document.createElement('script');s.src=src;s.async=false;s.onload=()=>res();
 s.onerror=()=>{delete LP[src];s.remove();rej(new Error('load'))};document.head.appendChild(s)})}
async function need(...names){for(const n of names)for(const src of LIB[n])await loadScript(src)}
const tick=()=>new Promise(r=>setTimeout(r,30));

/* ---------- saving, sharing and printing: the Android bridge (window.NakshiAndroid) when present, plain browser fallbacks otherwise ----------
   Contract: NakshiAndroid.saveFile(reqId,filename,mimeType,base64) / shareFile(reqId,filename,mimeType,base64,text) / printPdf(reqId,jobName,base64Pdf)
   / openExternal(url) / appVersion(); native answers with window.nakshiNativeResult(reqId,status),
   status = "saved" | "shared" | "printed" | "cancelled" | "error:<message>". */
const isAndroid=()=>typeof window.NakshiAndroid!=='undefined'&&window.NakshiAndroid!==null;
const NREQ=new Map();let nseq=0;
window.nakshiNativeResult=function(reqId,status){const r=NREQ.get(String(reqId));if(!r)return;NREQ.delete(String(reqId));clearTimeout(r.t);r.res(String(status==null?'':status))};
function nativeCall(method,args){return new Promise(res=>{const id='np'+(++nseq)+'-'+Date.now().toString(36);
 const t=setTimeout(()=>{if(NREQ.has(id)){NREQ.delete(id);res('cancelled')}},10*60*1000);NREQ.set(id,{res,t});
 try{const A=window.NakshiAndroid;if(!A||typeof A[method]!=='function')throw new Error('no '+method);A[method].apply(A,[id].concat(args))}
 catch(e){NREQ.delete(id);clearTimeout(t);res('error:'+((e&&e.message)||e))}})}
function mimeOf(name){return/\.png$/i.test(name)?'image/png':/\.pdf$/i.test(name)?'application/pdf':/\.zip$/i.test(name)?'application/zip':'application/octet-stream'}
function blobToB64(blob){return new Promise((res,rej)=>{const fr=new FileReader();fr.onload=()=>{const s=String(fr.result);res(s.slice(s.indexOf(',')+1))};fr.onerror=()=>rej(fr.error||new Error('read'));fr.readAsDataURL(blob)})}
function browserDownload(name,blob){const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=name;a.rel='noopener';a.style.display='none';document.body.appendChild(a);a.click();
 setTimeout(()=>{URL.revokeObjectURL(a.href);a.remove()},60000);return'saved'}
async function saveBlob(name,blob){const type=blob.type||mimeOf(name);if(isAndroid())return nativeCall('saveFile',[name,type,await blobToB64(blob)]);return browserDownload(name,blob)}
async function shareBlob(name,blob,text){const type=blob.type||mimeOf(name);text=text||'';
 if(isAndroid())return nativeCall('shareFile',[name,type,await blobToB64(blob),text]);
 try{const f=new File([blob],name,{type});if(navigator.canShare&&navigator.share&&navigator.canShare({files:[f]})){await navigator.share({files:[f],text,title:tr('title')});return'shared'}}
 catch(e){if(e&&e.name==='AbortError')return'cancelled'}
 browserDownload(name,blob);return'savedNoShare'}
async function printBlob(name,blob,win){if(isAndroid())return nativeCall('printPdf',[name.replace(/\.pdf$/i,''),await blobToB64(blob)]);
 const url=URL.createObjectURL(blob);setTimeout(()=>URL.revokeObjectURL(url),5*60*1000);
 if(win&&!win.closed){try{win.location.href=url;return'opened'}catch(e){}}
 let w=null;try{w=window.open(url,'_blank')}catch(e){w=null}if(w)return'opened';
 browserDownload(name,blob);return'savedNoPrint'}
function openExternal(url){url=String(url||'');if(!/^https?:\/\//i.test(url))return;
 if(isAndroid()){try{window.NakshiAndroid.openExternal(url)}catch(e){}return}
 try{window.open(url,'_blank','noopener,noreferrer')}catch(e){}}
/* every outbound link goes through openExternal (system browser on Android, a new tab elsewhere) */
document.addEventListener('click',e=>{const a=e.target.closest&&e.target.closest('a[href]');if(!a)return;const h=a.getAttribute('href')||'';
 if(/^https?:/i.test(h)){e.preventDefault();openExternal(a.href)}});
function setStatus(id,txt,bad){const e=typeof id==='string'?$(id):id;if(!e)return;e.textContent=txt||'';e.classList.toggle('bad',!!bad)}
function report(id,r,fn){r=String(r||'');
 if(r==='saved')setStatus(id,isAndroid()?tr(/\.png$/i.test(fn||'')?'savedPng':'savedFile'):tr('savedB'));
 else if(r==='shared'||r==='printed'||r==='opened'||r==='savedNoShare'||r==='savedNoPrint')setStatus(id,tr(r));
 else if(r==='cancelled')setStatus(id,tr('cancelled'),true);
 else setStatus(id,trf('failed',{m:r.replace(/^error:/,'')||'?'}),true)}
const slug=()=>(S.fest||S.named||'my-design')+'-'+S.size+'mm';
const BUSY=new Set();
async function runExport(btn,status,make,name,mode,caption){const b=$(btn);if(!b||b.disabled||BUSY.has(status))return;BUSY.add(status);b.disabled=true;setStatus(status,tr('preparing'));
 let win=null;if(mode==='print'&&!isAndroid()){try{win=window.open('','_blank')}catch(e){win=null}}
 await tick();
 try{const blob=await make();if(!blob||!blob.size)throw new Error('empty file');const fn=name();let r;
  if(mode==='share')r=await shareBlob(fn,blob,caption?caption():'');else if(mode==='print')r=await printBlob(fn,blob,win);else r=await saveBlob(fn,blob);
  report(status,r,fn)}
 catch(e){if(win){try{win.close()}catch(_){}}setStatus(status,e&&e.message==='load'?tr('loadFail'):e&&e.message==='empty'?tr('stampEmpty'):trf('failed',{m:(e&&e.message)||e}),true)}
 finally{b.disabled=false;BUSY.delete(status)}}

/* ---------- words drawn as pictures, so Bangla shapes correctly inside the PDF ---------- */
async function fontsReady(){try{await Promise.all(['600 40px "Hind Siliguri"','400 40px "Hind Siliguri"','400 40px "Gloock"','400 40px "Galada"'].map(f=>document.fonts.load(f)))}catch(e){}}
function wrapText(x,txt,maxW){const words=txt.split(' '),lines=[];let cur='';for(const w of words){const t=cur?cur+' '+w:w;if(x.measureText(t).width>maxW&&cur){lines.push(cur);cur=w}else cur=t}if(cur)lines.push(cur);return lines}
function headerImage(wmm){const px=12,W=Math.round(wmm*px),c=document.createElement('canvas'),x=c.getContext('2d');const bodyF=`400 ${3.3*px}px "Hind Siliguri", "Noto Sans Bengali", sans-serif`;
 const titleF=lang==='bn'?`400 ${7*px}px "Galada", "Hind Siliguri", serif`:`400 ${7*px}px "Gloock", Georgia, serif`;
 const nmd=designName()||(lang==='bn'?'নিজের নকশা':'Your own design');
 const sub=nmd+' · '+tr(S.shape)+' · '+num(S.size/10,1)+' '+tr('cm')+' · '+(lang==='bn'?'ফুটকি প্রতি ':'dots every ')+num(SC.gap,1)+' '+tr('mm');
 const steps=tr('pdfSteps').map(s=>s.replace('{t}',num(S.thick)));
 x.font=bodyF;const lines=[];steps.forEach((s,i)=>wrapText(x,(lang==='bn'?bnD(i+1):i+1)+'. '+s,W-2*px).forEach(l=>lines.push(l)));
 const H=Math.round(9*px+5.2*px+lines.length*4.7*px+px);c.width=W;c.height=H;
 x.fillStyle='#fff';x.fillRect(0,0,W,H);x.fillStyle='#111';x.textBaseline='alphabetic';x.font=titleF;x.fillText(tr('pdfTitle'),0,7*px);
 x.font=`600 ${3.6*px}px "Hind Siliguri", "Noto Sans Bengali", sans-serif`;x.fillStyle='#333';x.fillText(sub,0,12.6*px);
 x.font=bodyF;x.fillStyle='#222';lines.forEach((l,i)=>x.fillText(l,0,(17.6+i*4.7)*px));return{url:c.toDataURL('image/png'),h:H/px}}
function textImage(txt,sizeMM,bold){const px=12,x0=document.createElement('canvas').getContext('2d'),f=`${bold?600:400} ${sizeMM*px}px "Hind Siliguri", "Noto Sans Bengali", sans-serif`;x0.font=f;
 const W=Math.ceil(x0.measureText(txt).width)+4,H=Math.ceil(sizeMM*1.5*px),c=document.createElement('canvas');c.width=W;c.height=H;const x=c.getContext('2d');x.fillStyle='#fff';x.fillRect(0,0,W,H);
 x.font=f;x.fillStyle='#222';x.textBaseline='middle';x.fillText(txt,2,H/2);return{url:c.toDataURL('image/png'),w:W/px,h:H/px}}

/* ---------- the stencil: a true-size PDF with prick dots, faint guide lines and a dashed cut line ---------- */
function clipRuns(p,closed){const runs=[];let cur=[];const pts=closed?p.concat([p[0]]):p;for(const q of pts){if(inside(q[0],q[1],0))cur.push(q);else{if(cur.length>1)runs.push(cur);cur=[]}}if(cur.length>1)runs.push(cur);return runs}
function polyPdf(doc,pts,ox,oy,closed){if(pts.length<2)return;const segs=[];for(let i=1;i<pts.length;i++)segs.push([pts[i][0]-pts[i-1][0],pts[i][1]-pts[i-1][1]]);doc.lines(segs,ox+pts[0][0],oy+pts[0][1],[1,1],'S',!!closed)}
async function makeStencil(){await need('pdf');await fontsReady();const {jsPDF}=window.jspdf;const doc=new jsPDF({unit:'mm',format:SC.paper==='letter'?'letter':'a4',orientation:'portrait',compress:true});
 const PW=doc.internal.pageSize.getWidth(),PH=doc.internal.pageSize.getHeight(),o=outline(),b=o.bb,bw=b[2]-b[0],bh=b[3]-b[1],dots=stencilDots(SC.gap);
 const runs=[];for(const q of allPaths()){if(q.dot||q.p.length<2)continue;for(const r of clipRuns(q.p,q.c))runs.push(r)}
 const hdr=headerImage(PW-24);doc.addImage(hdr.url,'PNG',12,10,PW-24,hdr.h);
 const top=10+hdr.h+5,bottom=PH-22,gapC=8;let cols=1,rows=1;
 if(SC.copies==='fill'){cols=Math.max(1,Math.floor((PW-24+gapC)/(bw+gapC)));rows=Math.max(1,Math.floor((bottom-top+gapC)/(bh+gapC)))}
 const tw=cols*bw+(cols-1)*gapC,th=rows*bh+(rows-1)*gapC,sx=(PW-tw)/2,sy=top+Math.max(0,(bottom-top-th)/2);
 for(let r=0;r<rows;r++)for(let c=0;c<cols;c++){const ox=sx+c*(bw+gapC)-b[0],oy=sy+r*(bh+gapC)-b[1];
  doc.setLineDashPattern([1.6,1.2],0);doc.setDrawColor(95);doc.setLineWidth(.3);polyPdf(doc,o.pts.concat([o.pts[0]]),ox,oy,false);
  doc.setLineDashPattern([],0);doc.setDrawColor(190);doc.setLineWidth(.14);for(const run of runs)polyPdf(doc,run,ox,oy,false);
  doc.setFillColor(0,0,0);for(const d of dots)doc.circle(ox+d[0],oy+d[1],.38,'F');
  doc.setDrawColor(150);doc.setLineWidth(.15);doc.line(ox-1.5,oy,ox+1.5,oy);doc.line(ox,oy-1.5,ox,oy+1.5)}
 const by=PH-12,bx=12;doc.setLineDashPattern([],0);doc.setDrawColor(0);doc.setLineWidth(.45);doc.line(bx,by,bx+50,by);for(let i=0;i<=50;i+=5)doc.line(bx+i,by-(i%10?1.2:i%50?2:3.2),bx+i,by);
 const lab=textImage(tr('pdfBar'),3.2,true);doc.addImage(lab.url,'PNG',bx+53,by-lab.h+.8,lab.w,lab.h);
 const made=textImage(tr('pdfMade'),2.6,false);doc.addImage(made.url,'PNG',PW-12-made.w,by-made.h+.8,made.w,made.h);
 return doc.output('blob')}

/* ---------- the stamp: lines become ridges, mirrored, on a plate with an optional cutting rim and knob ---------- */
const depthMM=()=>+(S.thick*ST.dp/100).toFixed(1);
function dpSimplify(pts,eps){if(pts.length<5)return pts;const keep=new Uint8Array(pts.length);keep[0]=keep[pts.length-1]=1;const st=[[0,pts.length-1]];
 while(st.length){const [a,b]=st.pop();let md=0,mi=-1;for(let i=a+1;i<b;i++){const d=segDist(pts[i][0],pts[i][1],pts[a],pts[b]);if(d>md){md=d;mi=i}}if(md>eps&&mi>0){keep[mi]=1;st.push([a,mi],[mi,b])}}
 return pts.filter((_,i)=>keep[i])}
function circlePts(r,n,cx,cy){const o=[];for(let i=0;i<n;i++){const a=i/n*PI2;o.push([(cx||0)+r*Math.cos(a),(cy||0)+r*Math.sin(a)])}return o}
function radialPts(off,n){const R=outline().R,o=[];for(let i=0;i<n;i++){const a=i/n*PI2,r=R(a)+off;o.push([-r*Math.cos(a),-r*Math.sin(a)])}return o}
let STAMP=null,stampJob=null;
function stampKey(){return dv+'|'+outline().key+'|'+S.thick+'|'+JSON.stringify(ST)}
function buildStamp(){const key=stampKey();if(STAMP&&STAMP.key===key)return Promise.resolve(STAMP);if(stampJob&&stampJob.key===key)return stampJob.p;
 const p=(async()=>{await need('three','contour');await tick();const T3=THREE,o=outline(),rw=ST.ridge,depth=depthMM(),base=4,wall=1.2,margin=ST.rim?3:2;
  const ext=o.ext+margin+1.5;let res=.1,npx=Math.ceil(2*ext/res);if(npx>1600){npx=1600;res=2*ext/npx}const half=npx*res/2;
  const c=document.createElement('canvas');c.width=npx;c.height=npx;const x=c.getContext('2d',{willReadFrequently:true});x.setTransform(1/res,0,0,1/res,npx/2,npx/2);
  x.beginPath();tracePts(x,o.pts,q=>q,true);x.clip();x.strokeStyle='#000';x.fillStyle='#000';x.lineWidth=rw;x.lineCap='round';x.lineJoin='round';let any=0;
  for(const q of allPaths()){any++;if(q.dot){x.beginPath();x.arc(q.dot[0],q.dot[1],Math.max(rw*.55,Math.min(1.2,q.dr||.45)),0,PI2);x.fill();continue}if(q.p.length<2)continue;x.beginPath();tracePts(x,q.p,v=>v,q.c);x.stroke()}
  const data=x.getImageData(0,0,npx,npx).data,vals=new Float64Array(npx*npx);for(let i=0;i<vals.length;i++)vals[i]=data[i*4+3]/255;
  const mp=d3.contours().size([npx,npx]).thresholds([.5])(vals)[0];const toV=([gx,gy])=>new T3.Vector2(-(gx*res-half),-(gy*res-half));
  const ring=r=>{let q=r;if(q.length>1&&q[0][0]===q[q.length-1][0]&&q[0][1]===q[q.length-1][1])q=q.slice(0,-1);q=dpSimplify(q.concat([q[0]]),.45).slice(0,-1);return q};
  const perim=q=>{let l=0;for(let i=0;i<q.length;i++){const a=q[i],b=q[(i+1)%q.length];l+=Math.hypot(b[0]-a[0],b[1]-a[1])}return l};
  const shapes=[],minA=2.5;let merged=0;for(const poly of(mp?mp.coordinates:[])){const out=ring(poly[0]);if(out.length<3||polyArea(out)<minA)continue;const sh=new T3.Shape(out.map(toV));let A=polyArea(out),Pm=perim(out);
   for(let h=1;h<poly.length;h++){const hr=ring(poly[h]);if(hr.length>=3&&polyArea(hr)>=minA){sh.holes.push(new T3.Path(hr.map(toV)));A-=polyArea(hr);Pm+=perim(hr)}}shapes.push(sh);
   /* a ridge drawn as a line is about one line-width wide (twice its area over its outline); much wider means lines have run together */
   const am=A*res*res,wm=2*am/Math.max(1e-6,Pm*res);if(wm>rw*1.75)merged+=am}
  const parts=[],add=(geo,z)=>{geo.translate(0,0,z);const g2=geo.index?geo.toNonIndexed():geo;parts.push(g2.getAttribute('position').array);geo.dispose()};
  const ex=(sh,d)=>new T3.ExtrudeGeometry(sh,{depth:d,bevelEnabled:false,steps:1,curveSegments:1});const V=a=>a.map(([px,py])=>new T3.Vector2(px,py));
  const nOut=S.shape==='scallop'?720:360,plate=V(radialPts(margin,nOut));
  if(ST.knob){const lower=new T3.Shape(plate);lower.holes.push(new T3.Path(V(circlePts(4.1,48).reverse())));add(ex(lower,2.6),0);add(ex(new T3.Shape(plate),base-2.5),2.5)}else add(ex(new T3.Shape(plate),base),0);
  if(ST.rim){const ring2=new T3.Shape(V(radialPts(wall,nOut)));ring2.holes.push(new T3.Path(V(radialPts(0,nOut)).reverse()));add(ex(ring2,S.thick+.2),base-.2)}
  if(shapes.length)add(ex(shapes,depth+.2),base-.2);
  if(ST.knob){const kx=o.ext+margin+18;add(ex(new T3.Shape(V(circlePts(12,64,kx,0))),4),0);add(ex(new T3.Shape(V(circlePts(8.5,48,kx,0))),13.2),3.9);add(ex(new T3.Shape(V(circlePts(3.85,40,kx,0))),2.6),16.9)}
  let n=0;parts.forEach(a=>n+=a.length);const pos=new Float32Array(n);let off=0;parts.forEach(a=>{pos.set(a,off);off+=a.length});
  let x0=1e9,y0=1e9,z0=1e9,x1=-1e9,y1=-1e9,z1=-1e9;const sx0=-(o.ext+margin)-1;for(let i=0;i<pos.length;i+=3){if(pos[i]>o.ext+margin+2)continue;x0=Math.min(x0,pos[i]);x1=Math.max(x1,pos[i]);y0=Math.min(y0,pos[i+1]);y1=Math.max(y1,pos[i+1]);z0=Math.min(z0,pos[i+2]);z1=Math.max(z1,pos[i+2])}
  STAMP={key,pos,tris:pos.length/9,ridges:shapes.length,any,merged,size:[x1-x0,y1-y0,z1-z0],res};return STAMP})();
 stampJob={key,p};p.finally(()=>{if(stampJob&&stampJob.p===p)stampJob=null}).catch(()=>{});return p}
function toSTL(pos){const n=pos.length/9,buf=new ArrayBuffer(84+n*50),v=new DataView(buf),head='Nakshi Pitha Maker stamp, millimetres';for(let i=0;i<80;i++)v.setUint8(i,i<head.length?head.charCodeAt(i):32);v.setUint32(80,n,true);let off=84;
 for(let i=0;i<n;i++){const a=i*9,ax=pos[a],ay=pos[a+1],az=pos[a+2],bx=pos[a+3],by=pos[a+4],bz=pos[a+5],cx=pos[a+6],cy=pos[a+7],cz=pos[a+8];
  let nx=(by-ay)*(cz-az)-(bz-az)*(cy-ay),ny=(bz-az)*(cx-ax)-(bx-ax)*(cz-az),nz=(bx-ax)*(cy-ay)-(by-ay)*(cx-ax);const l=Math.hypot(nx,ny,nz)||1;
  const f=[nx/l,ny/l,nz/l,ax,ay,az,bx,by,bz,cx,cy,cz];for(let j=0;j<12;j++)v.setFloat32(off+j*4,f[j],true);v.setUint16(off+48,0,true);off+=50}return buf}
function readme(st){const d=num,nmd=S.named?NAMED.find(n=>n[0]===S.named)[1]:'Your own design';
 return['Nakshi Pitha Maker — 3D-printable stamp','',
  'Design: '+nmd+' ('+S.shape+', '+S.size+' mm across, for dough '+S.thick+' mm thick)',
  'Stamp: '+st.size[0].toFixed(1)+' x '+st.size[1].toFixed(1)+' mm, '+st.size[2].toFixed(1)+' mm tall. Line width '+ST.ridge+' mm, line depth '+depthMM()+' mm.',
  'Cutting rim: '+(ST.rim?'yes, '+S.thick+' mm tall, so pressing until the rim meets the board sets the line depth':'no')+'.',
  'Knob: '+(ST.knob?'yes, printed beside the stamp; push its peg into the socket on the back (a drop of glue if it is loose)':'no')+'.','',
  'Printing',
  '- Units are millimetres. Print face up (lines on top), as the file is laid out.',
  '- 0.2 mm layers, 3 walls, 20% infill. No supports are needed.',
  '- Use PETG, or a PLA sold as food-safe. Layer lines can hold dough, so wash by hand in warm soapy water and dry well.',
  '- Before each press, oil the face lightly or dust it with rice flour.','',
  'The face is mirrored on purpose, so the pressed pitha reads the right way round.','',
  'Nakshi Pitha Maker — থ্রিডি প্রিন্টের ছাঁচ',
  '- মুখ ওপরে রেখে প্রিন্ট করুন, ০.২ মিমি স্তর, ৩টি দেয়াল, ২০% ভরাট; সাপোর্ট লাগবে না।',
  '- PETG বা খাবারের জন্য নিরাপদ বলে বিক্রি হওয়া PLA ব্যবহার করুন। হাতে ধুয়ে ভালো করে শুকান।',
  '- প্রতিবার চাপার আগে হালকা তেল মাখান বা চালের গুঁড়ো ছড়ান।',
  '- '+(ST.rim?'কিনারা বোর্ড ছোঁয়া পর্যন্ত চাপুন; তাতেই রেখা ঠিক গভীরতায় বসবে।':'সমান চাপে চাপ দিন।'),''].join('\r\n')}
async function makeStampZip(){const st=await buildStamp();if(!st.ridges&&!S.els.length&&!S.rims.length)throw new Error('empty');await need('zip');const zip=new JSZip();
 zip.file('nakshi-pitha-stamp-'+slug()+'.stl',toSTL(st.pos));zip.file('README.txt',readme(st));return zip.generateAsync({type:'blob',compression:'DEFLATE',compressionOptions:{level:6}})}

/* ---------- the stamp view ---------- */
let R3=null,stampT=0;
function setSMsg(t){const m=$('smsg');m.textContent=t||'';m.hidden=!t}
function initGL(){const T3=THREE,renderer=new T3.WebGLRenderer({canvas:$('gl'),antialias:true,alpha:true,preserveDrawingBuffer:true});renderer.setClearColor(0x000000,0);
 const scene=new T3.Scene(),cam=new T3.PerspectiveCamera(30,1,1,5000);scene.add(new T3.HemisphereLight(0xffffff,0x384a3b,.55));
 const d1=new T3.DirectionalLight(0xffffff,.78);d1.position.set(-90,140,220);scene.add(d1);const d2=new T3.DirectionalLight(0xffffff,.3);d2.position.set(120,-80,90);scene.add(d2);
 const grp=new T3.Group();scene.add(grp);const mat=new T3.MeshStandardMaterial({color:0x9cc3a4,roughness:.58,metalness:0,flatShading:true});
 R3={renderer,scene,cam,grp,mat,mesh:null,rx:-.82,rz:.32,dist:200};restyle3();const gl=$('gl');let drag=null;
 gl.addEventListener('pointerdown',e=>{drag={x:e.clientX,y:e.clientY,rx:R3.rx,rz:R3.rz};try{gl.setPointerCapture(e.pointerId)}catch(_){}});
 gl.addEventListener('pointermove',e=>{if(!drag)return;R3.rz=drag.rz+(e.clientX-drag.x)*.01;R3.rx=Math.max(-1.55,Math.min(.35,drag.rx+(e.clientY-drag.y)*.01));draw3()});
 const end=()=>{drag=null};gl.addEventListener('pointerup',end);gl.addEventListener('pointercancel',end);
 gl.addEventListener('wheel',e=>{e.preventDefault();R3.dist=Math.max(60,Math.min(1500,R3.dist*Math.exp(e.deltaY*.0012)));draw3()},{passive:false})}
function restyle3(){if(!R3)return;const dark=getComputedStyle(document.documentElement).colorScheme==='dark'||document.documentElement.dataset.theme==='dark';R3.mat.color.set(dark?0x6f9f7c:0x7aa587);draw3()}
function setMesh(st){if(!R3)return;if(R3.mesh){R3.grp.remove(R3.mesh);R3.mesh.geometry.dispose();R3.mesh=null}if(!st||!st.tris)return;const T3=THREE,geo=new T3.BufferGeometry();
 geo.setAttribute('position',new T3.BufferAttribute(st.pos.slice(),3));geo.computeVertexNormals();geo.computeBoundingBox();const c=new T3.Vector3(),sz=new T3.Vector3();geo.boundingBox.getCenter(c);geo.boundingBox.getSize(sz);geo.translate(-c.x,-c.y,-c.z);
 R3.mesh=new T3.Mesh(geo,R3.mat);R3.grp.add(R3.mesh);R3.dist=Math.max(sz.x,sz.y)*1.9+60}
function draw3(){if(!R3||ui.view!=='stamp')return;R3.grp.rotation.set(R3.rx,0,R3.rz);R3.cam.position.set(0,0,R3.dist);R3.cam.lookAt(0,0,0);R3.renderer.render(R3.scene,R3.cam)}
function resizeGL(){if(!R3)return;R3.renderer.setPixelRatio(dpr);R3.renderer.setSize(cw,ch,false);R3.cam.aspect=cw/ch;R3.cam.updateProjectionMatrix();draw3()}
async function showStampView(){setSMsg(tr('building'));try{await need('three','contour')}catch(e){setSMsg(tr('loadFail'));return}if(ui.view!=='stamp')return;if(!R3)initGL();resizeGL();await refreshStamp()}
async function refreshStamp(){if(ui.view!=='stamp'||!R3)return;const fresh=STAMP&&STAMP.key===stampKey();if(!fresh){setSMsg(tr('building'));await tick()}
 try{const st=await buildStamp();if(ui.view!=='stamp')return;if(st.key!==stampKey()){scheduleStamp();return}setMesh(st);draw3();setSMsg(st.ridges||S.rims.length||ST.rim?tr('dragTurn'):tr('stampEmpty'))}
 catch(e){setSMsg(e&&e.message==='load'?tr('loadFail'):trf('failed',{m:(e&&e.message)||e}))}updMakeStats()}
function scheduleStamp(){if(ui.view!=='stamp')return;clearTimeout(stampT);stampT=setTimeout(refreshStamp,380)}

/* ---------- the picture ---------- */
async function makePicture(){await fontsReady();const W=1600,H=1600,c=document.createElement('canvas');c.width=W;c.height=H;const x=c.getContext('2d'),o=outline(),k=W*.4/(o.ext+3);
 paintPitha(x,W,H,k,W/2,H*.47,ui.view!=='dough',allPaths(),leafCanvas(W,H,1));
 const nmd=designName()||tr('title');x.font=lang==='bn'?'400 64px "Galada", "Hind Siliguri", serif':'400 60px "Gloock", Georgia, serif';x.textAlign='center';x.fillStyle='rgba(255,255,255,.94)';
 x.shadowColor='rgba(0,0,0,.45)';x.shadowBlur=12;if(S.named||S.fest){x.fillText(nmd,W/2,H-92);x.font='500 30px "Hind Siliguri", sans-serif';x.fillText(tr('title'),W/2,H-46)}else x.fillText(nmd,W/2,H-66);
 return new Promise(r=>c.toBlob(r,'image/png'))}

/* ---------- controls on the Stencil and stamp tab ---------- */
function syncMake(){$('dotgap').value=String(Math.round(SC.gap*10));$('dotgapVal').textContent=num(SC.gap,1)+' '+tr('mm');pressSeg('paper',SC.paper);pressSeg('copies',SC.copies);
 $('ridge').value=String(Math.round(ST.ridge*10));$('ridgeVal').textContent=num(ST.ridge,1)+' '+tr('mm');$('depth').value=String(ST.dp);$('depthVal').textContent=num(depthMM(),1)+' '+tr('mm');
 $('rimChk').checked=!!ST.rim;$('knobChk').checked=!!ST.knob}
function updMakeStats(){const o=outline(),b=o.bb;$('stencilStats').textContent=trf('stencilStats',{n:num(stencilDots(SC.gap).length),w:num(b[2]-b[0]),h:num(b[3]-b[1])});
 if(STAMP&&STAMP.key===stampKey())$('stampStats').textContent=trf('stampStats',{w:num(STAMP.size[0],1),h:num(STAMP.size[1],1),z:num(STAMP.size[2],1),t:num(STAMP.tris)})+(STAMP.merged>12?' · '+trf('mergedWarn',{a:num(STAMP.merged)}):'');
 else $('stampStats').textContent=tr('stampStale')}
$('dotgap').addEventListener('input',()=>{SC.gap=+$('dotgap').value/10;syncMake();if(ui.view!=='stencil')setView('stencil');else render();updMakeStats();save()});
seg('paper',v=>{SC.paper=v;pressSeg('paper',v);save()});
seg('copies',v=>{SC.copies=v;pressSeg('copies',v);save()});
$('ridge').addEventListener('input',()=>{ST.ridge=+$('ridge').value/10;syncMake();save();updMakeStats();if(ui.view==='stamp')scheduleStamp();else render()});
$('depth').addEventListener('input',()=>{ST.dp=+$('depth').value;syncMake();save();updMakeStats();if(ui.view!=='stamp')setView('stamp');else scheduleStamp()});
$('rimChk').addEventListener('change',()=>{ST.rim=$('rimChk').checked;save();updMakeStats();if(ui.view!=='stamp')setView('stamp');else scheduleStamp()});
$('knobChk').addEventListener('change',()=>{ST.knob=$('knobChk').checked;save();updMakeStats();if(ui.view!=='stamp')setView('stamp');else scheduleStamp()});
/* ---------- controls on the Make tab: stencil (save, print, share), stamp, picture ---------- */
const stName=()=>'nakshi-pitha-stencil-'+slug()+'.pdf';
$('dlStencil').addEventListener('click',()=>runExport('dlStencil','stencilStatus',makeStencil,stName,'save'));
$('prStencil').addEventListener('click',()=>runExport('prStencil','stencilStatus',makeStencil,stName,'print'));
$('shStencil').addEventListener('click',()=>runExport('shStencil','stencilStatus',makeStencil,stName,'share',()=>tr('shareStencilTxt')));
$('dlStamp').addEventListener('click',()=>runExport('dlStamp','stampStatus',async()=>{const z=await makeStampZip();updMakeStats();if(ui.view==='stamp'){setMesh(STAMP);draw3()}return z},()=>'nakshi-pitha-stamp-'+slug()+'.zip','save'));
$('dlPic').addEventListener('click',()=>runExport('dlPic','picStatus',makePicture,()=>'nakshi-pitha-'+slug()+'.png','save'));

/* ---------- small DOM helpers ---------- */
function el(tag,cls,txt){const e=document.createElement(tag);if(cls)e.className=cls;if(txt!=null)e.textContent=txt;return e}
function mkBtn(cls,txt,fn){const b=el('button',cls,txt);b.type='button';b.addEventListener('click',fn);return b}
let flashT=0;function flash(t){if(ui.view==='stamp')return;setSMsg(t);clearTimeout(flashT);flashT=setTimeout(()=>{if(ui.view!=='stamp')setSMsg('')},4200)}

/* ---------- festival quick-starts: each sets a fitting design and a matching greeting ---------- */
const FEST=[['poush','Poush Sankranti','পৌষ সংক্রান্তি'],['nabanna','Nabanna','নবান্ন'],['boishakh','Pohela Boishakh','পহেলা বৈশাখ'],
 ['eid','Eid','ঈদ'],['biye','Wedding · Gaye holud','বিয়ে · গায়ে হলুদ'],['winter','Winter pitha festival','শীতের পিঠা উৎসব']];
const festName=id=>{const f=FEST.find(x=>x[0]===id);return f?(lang==='bn'?f[2]:f[1]):''};
function festDesign(id){
 if(id==='biye'){const d=namedDesign('kanyamukh');d.named='kanyamukh';return d}   /* “the bride’s face” */
 if(id==='winter'){const d=namedDesign('shankhalata');d.named='shankhalata';return d}
 const els=[],rims=[];let nid=1;
 const rim=v=>rims.push({id:nid++,v,w:rimDef(v)[2]});
 const add=(m,x,y,s,r,sym,fs,vv)=>{if(!MOTIF[m])return;const e={id:nid++,k:'m',m,x:+x.toFixed(3),y:+y.toFixed(3),s:+s.toFixed(3),r:r||0,sym:String(sym||1),fs:fs||'line'};if(vv)e.va=vv;els.push(e)};
 const at=(rho,a)=>[rho*Math.sin(a||0),-rho*Math.cos(a||0)];
 ({poush:['line','borderRice'],nabanna:['double','dots'],boishakh:['line','zigzag'],eid:['line','dots']}[id]||[]).forEach(rim);
 let used=1.6;rims.forEach(r=>used+=r.w+1.4);const Ri=Math.max(8,outline().rin-used-.6);
 switch(id){
  case 'poush':add('alpana3',0,0,.5*Ri);add('ghuri',...at(.8*Ri,0),.15*Ri,0,6);break;          /* rice alpana with Shakrain kites */
  case 'nabanna':add('rice',...at(.62*Ri,0),.3*Ri,0,8);add('shapla',0,0,.28*Ri,0,1,'line',{a:12});break; /* new-rice sheaves */
  case 'boishakh':add('alpana1',0,0,.62*Ri);add('pDotRing',0,0,.86*Ri,0,1,'line',{a:24});break;
  case 'eid':add('eidMoon',0,0,.44*Ri);add('kalka',...at(.76*Ri,0),.19*Ri,0,8);break}
 return{els,rims,nid,named:null}}
function applyFest(id){const d=festDesign(id);S.els=d.els;S.rims=d.rims;S.nid=d.nid;S.named=d.named||null;S.fest=id;touch()}
const FEST_GREET={poush:'poush',nabanna:'nabanna',boishakh:'boishakh',eid:'eid',biye:'biye',winter:'winter'};
function buildFest(){const f=$('fest');f.innerHTML='';FEST.forEach(([id,en,bn])=>{const b=el('button');b.type='button';b.dataset.v=id;b.setAttribute('aria-pressed',String(S.fest===id));
 b.append(el('i'),document.createTextNode(lang==='bn'?bn:en));f.appendChild(b)})}
function syncFest(){$('fest').querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.v===S.fest)))}
function doFest(id){snap();applyFest(id);sel=null;if(S.example){S.example=false;syncExample()}G.greet=FEST_GREET[id]||G.greet;
 changed();syncNamed();syncFest();syncSelUI();buildRimList();buildGreet();flash(trf('festDone',{name:festName(id)}));if(ui.view==='stamp')scheduleStamp()}
$('fest').addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;const id=b.dataset.v;
 if(S.example||S.named||S.fest||(!S.els.length&&!S.rims.length)){doFest(id);return}
 pendingNamed='fest:'+id;$('namedQ').textContent=trf('namedQ',{name:festName(id)});$('namedAsk').hidden=false;try{$('namedAsk').scrollIntoView({block:'nearest'})}catch(_){}});
function designName(){return S.fest?festName(S.fest):S.named?namedName(S.named):''}

/* ---------- greeting card: 1080 × 1350 PNG of the pitha on a banana leaf ---------- */
const GREET=[['poush','Poush Parbon greetings','পৌষ পার্বণের শুভেচ্ছা'],['nabanna','Happy Nabanna','শুভ নবান্ন'],['boishakh','Happy Bangla New Year {y}','শুভ নববর্ষ {y}'],
 ['eid','Eid Mubarak','ঈদ মোবারক'],['biye','Happy wedding','শুভ বিবাহ'],['winter','Pitha festival greetings','পিঠা উৎসবের শুভেচ্ছা'],['custom','Write your own','নিজে লিখুন']];
/* Bangladesh revised calendar: 1 Boishakh is always 14 April, so the Bangla year is the Gregorian year − 593 from 14 April, − 594 before it.
   The New Year greeting names the year that starts on the coming 1 Boishakh, or the one just begun during the first 45 days of the year. */
function bnYearInfo(d){d=d||new Date();const y=d.getFullYear(),ny=new Date(y,3,14),cur=d>=ny?y-593:y-594,since=(d-ny)/864e5;
 return{cur,greet:since>=0&&since<=45?cur:cur+1}}
function greetText(){if(G.greet==='custom'){const c=(G.custom||'').trim();return c||tr('g_custom_default')}
 const g=GREET.find(x=>x[0]===G.greet)||GREET[0];return(lang==='bn'?g[2]:g[1]).replace('{y}',num(bnYearInfo().greet))}
function buildGreet(){const L=$('greetList');L.innerHTML='';GREET.forEach(g=>{const b=el('button');b.type='button';b.dataset.v=g[0];b.setAttribute('aria-pressed',String(G.greet===g[0]));
 b.textContent=(lang==='bn'?g[2]:g[1]).replace('{y}',num(bnYearInfo().greet));L.appendChild(b)});
 const ci=$('greetCustom');ci.hidden=G.greet!=='custom';ci.placeholder=tr('cardCustomPh');ci.setAttribute('aria-label',tr('cardCustomPh'));if(ci.value!==G.custom)ci.value=G.custom||'';pressSeg('cardLook',G.look)}
$('greetList').addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;G.greet=b.dataset.v;buildGreet();save();scheduleCard();if(G.greet==='custom')$('greetCustom').focus()});
$('greetCustom').addEventListener('input',()=>{G.custom=$('greetCustom').value.slice(0,60);save();scheduleCard()});
seg('cardLook',v=>{G.look=v;pressSeg('cardLook',v);save();scheduleCard()});
function rrPath(x,a,b,w,h,r){x.beginPath();x.moveTo(a+r,b);x.arcTo(a+w,b,a+w,b+h,r);x.arcTo(a+w,b+h,a,b+h,r);x.arcTo(a,b+h,a,b,r);x.arcTo(a,b,a+w,b,r);x.closePath()}
function drawCard(x,W,H,bg){const s=W/1080,o=outline(),cream='#fff6df';x.save();x.drawImage(bg,0,0,W,H);
 let gr=x.createLinearGradient(0,0,0,H*.32);gr.addColorStop(0,'rgba(10,24,8,.5)');gr.addColorStop(1,'rgba(10,24,8,0)');x.fillStyle=gr;x.fillRect(0,0,W,H*.32);
 gr=x.createLinearGradient(0,H*.74,0,H);gr.addColorStop(0,'rgba(10,24,8,0)');gr.addColorStop(1,'rgba(10,24,8,.55)');x.fillStyle=gr;x.fillRect(0,H*.74,W,H*.26);
 /* nakshi-kantha running stitch frame, with a flag-red inner row */
 x.lineCap='round';x.strokeStyle='rgba(255,246,223,.88)';x.lineWidth=5*s;x.setLineDash([24*s,14*s]);rrPath(x,36*s,36*s,W-72*s,H-72*s,28*s);x.stroke();
 x.strokeStyle='rgba(244,42,65,.92)';x.lineWidth=3.5*s;x.setLineDash([10*s,16*s]);rrPath(x,54*s,54*s,W-108*s,H-108*s,20*s);x.stroke();x.setLineDash([]);
 for(const [cx,cy] of [[90,90],[W/s-90,90],[90,H/s-90],[W/s-90,H/s-90]]){x.fillStyle='#f42a41';x.beginPath();x.arc(cx*s,cy*s,8*s,0,PI2);x.fill();x.fillStyle=cream;
  for(let k=0;k<8;k++){const a=k*Math.PI/4;x.beginPath();x.arc(cx*s+Math.cos(a)*20*s,cy*s+Math.sin(a)*20*s,4*s,0,PI2);x.fill()}}
 /* greeting */
 const txt=greetText(),bn=/[\u0980-\u09FF]/.test(txt),fam=bn?'"Galada","Hind Siliguri",serif':'"Gloock","Galada",Georgia,serif',maxW=W-230*s;
 let fs=(bn?108:92)*s,lines;for(let i=0;i<20;i++){x.font=`400 ${fs}px ${fam}`;lines=wrapText(x,txt,maxW);if(lines.length<=2&&lines.every(l=>x.measureText(l).width<=maxW))break;fs*=.9}
 x.textAlign='center';x.textBaseline='alphabetic';x.fillStyle=cream;x.shadowColor='rgba(0,0,0,.55)';x.shadowBlur=16*s;x.shadowOffsetY=3*s;
 const lh=fs*1.15,y0=(lines.length>1?178:232)*s;lines.slice(0,2).forEach((l,i)=>x.fillText(l,W/2,y0+i*lh));x.restore();
 /* the pitha */
 const R=318*s,k=R/(o.ext+1),cy=H*.535+(lines.length>1?28*s:0);paintPitha(x,W,H,k,W/2,cy,G.look!=='dough',allPaths(),null);
 x.save();x.textAlign='center';x.fillStyle=cream;x.shadowColor='rgba(0,0,0,.5)';x.shadowBlur=10*s;
 const nm=designName();x.font=`600 ${40*s}px "Hind Siliguri","Noto Sans Bengali",sans-serif`;x.fillText(nm?trf('cardSub',{name:nm}):tr('cardSubPlain'),W/2,Math.min(H-150*s,cy+o.ext*k+92*s));
 x.font=`500 ${28*s}px "Hind Siliguri","Noto Sans Bengali",sans-serif`;x.fillStyle='rgba(255,246,223,.94)';const ft=tr('cardFooter'),fw=x.measureText(ft).width;x.fillText(ft,W/2,H-88*s);
 x.shadowColor='transparent';x.fillStyle='#f42a41';[-1,1].forEach(d=>{x.beginPath();x.arc(W/2+d*(fw/2+22*s),H-98*s,6*s,0,PI2);x.fill()});x.restore()}
async function makeCard(){await fontsReady();const W=1080,H=1350,c=document.createElement('canvas');c.width=W;c.height=H;drawCard(c.getContext('2d'),W,H,leafCanvas(W,H,1));
 return new Promise(r=>c.toBlob(r,'image/png'))}
let cardT=0,cardBG=null;
function scheduleCard(){clearTimeout(cardT);cardT=setTimeout(drawCardPrev,140)}
function drawCardPrev(){if(ui.tab!=='make')return;const c=$('cardPrev');if(!c||!c.getClientRects().length)return;const W=c.width,H=c.height;
 if(!cardBG||cardBG.w!==W)cardBG={w:W,c:leafCanvas(W,H,1)};const x=c.getContext('2d');x.setTransform(1,0,0,1,0,0);x.clearRect(0,0,W,H);drawCard(x,W,H,cardBG.c)}
const cardName=()=>'nakshi-pitha-card-'+(G.greet||'card')+'-'+slug()+'.png';
$('dlCard').addEventListener('click',()=>runExport('dlCard','cardStatus',makeCard,cardName,'save'));
$('shCard').addEventListener('click',()=>runExport('shCard','cardStatus',makeCard,cardName,'share',()=>trf('shareCardTxt',{g:greetText()})));

/* ---------- bottom sheet (dialog) ---------- */
let sheetOpener=null,sheetSub=null;
function openSheet(title,build){sheetOpener=document.activeElement;sheetSub=null;$('sheetTitle').textContent=title;const b=$('sheetBody');b.innerHTML='';build(b);$('sheet').hidden=false;
 setTimeout(()=>{try{$('sheetClose').focus({preventScroll:true})}catch(e){}},30)}
function closeSheet(){if($('sheet').hidden)return false;$('sheet').hidden=true;$('sheetBody').innerHTML='';sheetSub=null;if(sheetOpener&&sheetOpener.focus){try{sheetOpener.focus({preventScroll:true})}catch(e){}}return true}
$('sheetClose').addEventListener('click',closeSheet);$('sheetBack').addEventListener('click',closeSheet);
$('sheet').addEventListener('keydown',e=>{if(e.key==='Escape'){e.stopPropagation();backAction(true)}});

/* ---------- My designs: several named designs kept on the phone ---------- */
const GKEY='nakshi-pitha-maker:gallery:v1';let GAL=[];
function loadGal(){try{const v=JSON.parse(localStorage.getItem(GKEY)||'[]');GAL=Array.isArray(v)?v.filter(it=>it&&it.data&&it.data.S):[]}catch(e){GAL=[]}}
function isQuota(e){return!!e&&(e.name==='QuotaExceededError'||e.name==='NS_ERROR_DOM_QUOTA_REACHED'||e.code===22||e.code===1014)}
function storeGal(){try{localStorage.setItem(GKEY,JSON.stringify(GAL));return''}catch(e){return isQuota(e)?'galFull':'galNoStore'}}
const MON_BN=['জানুয়ারি','ফেব্রুয়ারি','মার্চ','এপ্রিল','মে','জুন','জুলাই','আগস্ট','সেপ্টেম্বর','অক্টোবর','নভেম্বর','ডিসেম্বর'];
const MON_EN=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
function fmtDate(t){const d=new Date(t);return lang==='bn'?bnD(d.getDate())+' '+MON_BN[d.getMonth()]+' '+bnD(d.getFullYear()):d.getDate()+' '+MON_EN[d.getMonth()]+' '+d.getFullYear()}
function designThumb(){const N=200,c=document.createElement('canvas');c.width=c.height=N;const x=c.getContext('2d'),o=outline(),k=N*.44/(o.ext+1);
 paintPitha(x,N,N,k,N/2,N/2,ui.view==='fried',allPaths(),leafCanvas(N,N,1));return c.toDataURL('image/jpeg',.82)}
const suggestName=()=>designName()||trf('galDefault',{n:num(GAL.length+1)});
function openGallery(){openSheet(tr('galH'),b=>renderGallery(b))}
function renderGallery(body,msg,bad){body=body||$('sheetBody');body.innerHTML='';sheetSub=null;
 const lab=el('p','fine',tr('galSaveL')),form=el('div','gsave'),inp=el('input','txtin');inp.type='text';inp.maxLength=40;inp.value=suggestName();inp.setAttribute('aria-label',tr('galName'));inp.enterKeyHint='done';
 const st=el('p','status');st.setAttribute('role','status');
 const sb=mkBtn('btn primary',tr('galSaveBtn'),()=>saveToGallery(inp.value,st));inp.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();sb.click()}});
 form.append(inp,sb);body.append(lab,form,st);if(msg)setStatus(st,msg,bad);
 body.append(el('h3','glh',trf('galListH',{n:num(GAL.length)})));
 if(!GAL.length){body.append(el('p','note',tr('galEmpty')));return}
 const list=el('div','glist');GAL.forEach(it=>list.appendChild(galItem(it)));body.append(list)}
function galItem(it){const card=el('div','gitem'),img=el('img');img.alt='';img.loading='lazy';img.decoding='async';if(it.thumb)img.src=it.thumb;
 const nm=el('div','gn',it.name),dt=el('div','gd',fmtDate(it.t)),ga=el('div','ga');
 ga.append(mkBtn('btn primary',tr('galOpen'),()=>openDesign(it)),mkBtn('btn',tr('galRename'),()=>renameUI(card,it,nm,ga)),mkBtn('btn warn',tr('galDel'),()=>delUI(card,it,ga)));
 card.append(img,nm,dt,ga);return card}
function renameUI(card,it,nm,ga){const box=el('div','renaming'),inp=el('input','txtin');inp.type='text';inp.maxLength=40;inp.value=it.name;inp.setAttribute('aria-label',tr('galName'));
 const row=el('div','ga'),done=()=>renderGallery();
 const ok=mkBtn('btn primary',tr('galSaveBtn'),()=>{const v=inp.value.trim();if(v){const old=it.name;it.name=v.slice(0,40);const err=storeGal();if(err){it.name=old;renderGallery(null,tr(err),true);return}}done()});
 inp.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();ok.click()}});
 row.append(ok,mkBtn('btn',tr('cancel'),done));box.append(inp,row);nm.replaceWith(box);ga.hidden=true;sheetSub=done;inp.focus()}
function delUI(card,it,ga){const c=el('div','confirm');c.append(el('span',null,trf('galDelQ',{name:it.name})),
 mkBtn('btn warn',tr('galYesDel'),()=>{const i=GAL.indexOf(it);if(i>=0)GAL.splice(i,1);const err=storeGal();renderGallery(null,err?tr(err):'',!!err)}),
 mkBtn('btn',tr('cancel'),()=>renderGallery()));ga.hidden=true;card.appendChild(c);sheetSub=()=>renderGallery()}
function saveToGallery(name,st){name=String(name||'').trim()||suggestName();let thumb='';try{thumb=designThumb()}catch(e){}
 const it={id:Date.now().toString(36)+Math.random().toString(36).slice(2,6),name:name.slice(0,40),t:Date.now(),thumb,data:JSON.parse(JSON.stringify({S,ST,SC}))};
 GAL.unshift(it);let err=storeGal();
 if(err==='galFull'&&thumb){it.thumb='';err=storeGal()}   /* try once more without the picture */
 if(err){GAL.shift();setStatus(st,tr(err),true);return false}
 renderGallery(null,tr('galSaved'));return true}
function openDesign(it){if(!it||!it.data||!it.data.S)return;snap();S=JSON.parse(JSON.stringify(it.data.S));migrate();
 if(it.data.ST)Object.assign(ST,it.data.ST);if(it.data.SC)Object.assign(SC,it.data.SC);sel=null;EC.clear();touch();fitView();closeSheet();setTab('design');syncAll();changed();
 flash(trf('galOpened',{name:it.name}))}
$('galBtn').addEventListener('click',openGallery);
$('saveDesign').addEventListener('click',openGallery);

/* ---------- Learn: recipe, licences, version ---------- */
function buildLearn(){const r=$('recipe'),R=tr('recipe');r.innerHTML='';if(!R||typeof R!=='object')return;const n=i=>lang==='bn'?bnD(i):String(i);
 r.append(el('h3',null,R.h),el('p','approx',R.approx),el('h4',null,R.ingH));const ul=el('ul');R.ing.forEach(t=>ul.appendChild(el('li',null,t)));r.append(ul,el('h4',null,R.stepsH));
 const ol=el('ol');R.steps.forEach(t=>ol.appendChild(el('li',null,t)));r.append(ol,el('p','fine',R.tip));const sf=el('div','safe');sf.append(el('h4',null,R.safeH),el('p',null,R.safe));r.append(sf)}
const LICS=[['three.js','0.128.0','MIT','vendor/licenses/three-LICENSE.txt'],['jsPDF','2.5.1','MIT','vendor/licenses/jspdf-LICENSE.txt'],
 ['JSZip','3.10.1','MIT (dual MIT / GPL-3.0; used under MIT)','vendor/licenses/jszip-LICENSE.md'],['d3-array','3.2.4','ISC','vendor/licenses/d3-array-LICENSE.txt'],
 ['d3-contour','4.0.2','ISC','vendor/licenses/d3-contour-LICENSE.txt'],['Hind Siliguri font (@fontsource 5.3.0)','','SIL OFL 1.1','fonts/licenses/hind-siliguri-OFL.txt'],
 ['Galada font (@fontsource 5.3.0)','','SIL OFL 1.1','fonts/licenses/galada-OFL.txt'],['Gloock font (@fontsource 5.3.0)','','SIL OFL 1.1','fonts/licenses/gloock-OFL.txt']];
function buildLic(){const L=$('licList');L.innerHTML='';LICS.forEach(([n,v,l])=>L.appendChild(el('li',null,n+(v?' '+v:'')+' — '+l)))}
$('licBtn').addEventListener('click',()=>openSheet(tr('licH'),async body=>{for(const [n,v,l,p] of LICS){body.append(el('h4',null,n+(v?' '+v:'')+' — '+l));const pre=el('pre','lictext','…');body.append(pre);
 try{const r=await fetch(p);if(!r.ok)throw 0;pre.textContent=await r.text()}catch(e){pre.textContent=tr('licNoFetch')+'\n'+p}}}));
/* privacy policy / all licences: shown inside the sheet (script-less sandboxed iframe), so the design and the Back button behave as usual */
document.querySelectorAll('a[data-doc]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();const src=a.getAttribute('href')+(lang==='en'&&a.getAttribute('href')==='privacy.html'?'#en':''),t=a.textContent;openSheet(t,b=>{const f=document.createElement('iframe');f.src=src;f.title=t;f.setAttribute('sandbox','allow-same-origin');f.style.cssText='width:100%;height:68vh;border:0;border-radius:10px';f.addEventListener('load',()=>{try{f.contentDocument.addEventListener('click',ev=>{const l=ev.target.closest&&ev.target.closest('a[href]');if(!l)return;const h=l.getAttribute('href')||'';if(h.charAt(0)==='#')return;ev.preventDefault();if(/^https?:/i.test(l.href))openExternal(l.href);else if(/^mailto:/i.test(h))location.href=h})}catch(e){}});b.appendChild(f)})}));
function appVersion(){try{if(isAndroid()&&typeof window.NakshiAndroid.appVersion==='function')return String(window.NakshiAndroid.appVersion())}catch(e){}return'1.0.0 (web)'}

/* ---------- system back button (Android calls this; Escape uses it too) ---------- */
function backAction(soft){
 if(!$('sheet').hidden){if(sheetSub){const f=sheetSub;sheetSub=null;f()}else closeSheet();return true}
 if(!$('clearAsk').hidden){$('clearAsk').hidden=true;return true}
 if(!$('namedAsk').hidden){$('namedAsk').hidden=true;pendingNamed=null;return true}
 if(sel){deselect();return true}
 if(!soft&&ui.tab!=='design'){setTab('design');return true}
 return false}
window.nakshiHandleBack=function(){try{return!!backAction(false)}catch(e){return false}};

/* ---------- platform: Android shell or browser (PWA) ---------- */
function initPlatform(){const A=isAndroid();document.documentElement.classList.toggle('android',A);$('appVer').textContent=appVersion();$('saveWhere').hidden=!A;
 if(!A&&(location.protocol==='https:'||location.protocol==='http:')&&'serviceWorker' in navigator){
  const reg=()=>navigator.serviceWorker.register('./sw.js').catch(()=>{});if(document.readyState==='complete')reg();else addEventListener('load',reg)}}

/* ---------- start ---------- */
(function start(){lang='bn';try{const l=localStorage.getItem(KEY+':lang');if(l==='bn'||l==='en')lang=l}catch(e){}
 let saved=null;try{saved=JSON.parse(localStorage.getItem(KEY)||'null')}catch(e){}
 if(saved&&saved.S){S=saved.S;if(saved.ST)ST=Object.assign(ST,saved.ST);if(saved.SC)SC=Object.assign(SC,saved.SC);if(saved.G)G=Object.assign(G,saved.G);migrate();if(!saved.v)save()}
 else{applyNamed('padmadighi');S.example=true}
 if(!GREET.some(g=>g[0]===G.greet))G.greet='poush';if(G.look!=='dough')G.look='fried';G.custom=String(G.custom||'').slice(0,60);
 loadGal();readCols();setSizeSlider(ui.size);applyLang();resize();btns();initPlatform();
 if(document.fonts&&document.fonts.ready)document.fonts.ready.then(()=>{painted.forEach(paintBtn);render();scheduleCard()})})();

})();
