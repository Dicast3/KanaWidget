// KanaWidget
// made with love
// by DxC

// ========================
// CONFIG - true to activate, false to deactivate
// ========================

const USE_HIRAGANA_BASE = true;
const USE_KATAKANA_BASE = false;
const USE_DAKUTEN = false; // が - ぢ
const USE_HANDADAKUTEN = false; // ぱ - ぴ

// ========================
// DATA - Kana list
// ========================

const HIRAGANA_BASE = [
  { char: "あ", romaji: "a", link: "https://en.wiktionary.org/wiki/あ" },
  { char: "い", romaji: "i", link: "https://en.wiktionary.org/wiki/い" },
  { char: "う", romaji: "u", link: "https://en.wiktionary.org/wiki/う" },
  { char: "え", romaji: "e", link: "https://en.wiktionary.org/wiki/え" },
  { char: "お", romaji: "o", link: "https://en.wiktionary.org/wiki/お" },
  { char: "か", romaji: "ka", link: "https://en.wiktionary.org/wiki/か" },
  { char: "き", romaji: "ki", link: "https://en.wiktionary.org/wiki/き" },
  { char: "く", romaji: "ku", link: "https://en.wiktionary.org/wiki/く" },
  { char: "け", romaji: "ke", link: "https://en.wiktionary.org/wiki/け" },
  { char: "こ", romaji: "ko", link: "https://en.wiktionary.org/wiki/こ" },
  { char: "さ", romaji: "sa", link: "https://en.wiktionary.org/wiki/さ" },
  { char: "し", romaji: "shi", link: "https://en.wiktionary.org/wiki/し" },
  { char: "す", romaji: "su", link: "https://en.wiktionary.org/wiki/す" },
  { char: "せ", romaji: "se", link: "https://en.wiktionary.org/wiki/せ" },
  { char: "そ", romaji: "so", link: "https://en.wiktionary.org/wiki/そ" },
  { char: "た", romaji: "ta", link: "https://en.wiktionary.org/wiki/た" },
  { char: "ち", romaji: "chi", link: "https://en.wiktionary.org/wiki/ち" },
  { char: "つ", romaji: "tsu", link: "https://en.wiktionary.org/wiki/つ" },
  { char: "て", romaji: "te", link: "https://en.wiktionary.org/wiki/て" },
  { char: "と", romaji: "to", link: "https://en.wiktionary.org/wiki/と" },
  { char: "な", romaji: "na", link: "https://en.wiktionary.org/wiki/な" },
  { char: "に", romaji: "ni", link: "https://en.wiktionary.org/wiki/に" },
  { char: "ぬ", romaji: "nu", link: "https://en.wiktionary.org/wiki/ぬ" },
  { char: "ね", romaji: "ne", link: "https://en.wiktionary.org/wiki/ね" },
  { char: "の", romaji: "no", link: "https://en.wiktionary.org/wiki/の" },
  { char: "は", romaji: "ha", link: "https://en.wiktionary.org/wiki/は" },
  { char: "ひ", romaji: "hi", link: "https://en.wiktionary.org/wiki/ひ" },
  { char: "ふ", romaji: "fu", link: "https://en.wiktionary.org/wiki/ふ" },
  { char: "へ", romaji: "he", link: "https://en.wiktionary.org/wiki/へ" },
  { char: "ほ", romaji: "ho", link: "https://en.wiktionary.org/wiki/ほ" },
  { char: "ま", romaji: "ma", link: "https://en.wiktionary.org/wiki/ま" },
  { char: "み", romaji: "mi", link: "https://en.wiktionary.org/wiki/み" },
  { char: "む", romaji: "mu", link: "https://en.wiktionary.org/wiki/む" },
  { char: "め", romaji: "me", link: "https://en.wiktionary.org/wiki/め" },
  { char: "も", romaji: "mo", link: "https://en.wiktionary.org/wiki/も" },
  { char: "ら", romaji: "ra", link: "https://en.wiktionary.org/wiki/ら" },
  { char: "り", romaji: "ri", link: "https://en.wiktionary.org/wiki/り" },
  { char: "る", romaji: "ru", link: "https://en.wiktionary.org/wiki/る" },
  { char: "れ", romaji: "re", link: "https://en.wiktionary.org/wiki/れ" },
  { char: "ろ", romaji: "ro", link: "https://en.wiktionary.org/wiki/ろ" },
  { char: "や", romaji: "ya", link: "https://en.wiktionary.org/wiki/や" },
  { char: "ゆ", romaji: "yu", link: "https://en.wiktionary.org/wiki/ゆ" },
  { char: "よ", romaji: "yo", link: "https://en.wiktionary.org/wiki/よ" },
  { char: "わ", romaji: "wa", link: "https://en.wiktionary.org/wiki/わ" },
  { char: "を", romaji: "o", link: "https://en.wiktionary.org/wiki/を" },
  { char: "ん", romaji: "n", link: "https://en.wiktionary.org/wiki/ん" },
];

const KATAKANA_BASE = [
  { char: "ア", romaji: "a", link: "https://en.wiktionary.org/wiki/ア" },
  { char: "イ", romaji: "i", link: "https://en.wiktionary.org/wiki/イ" },
  { char: "ウ", romaji: "u", link: "https://en.wiktionary.org/wiki/ウ" },
  { char: "エ", romaji: "e", link: "https://en.wiktionary.org/wiki/エ" },
  { char: "オ", romaji: "o", link: "https://en.wiktionary.org/wiki/オ" },
  { char: "カ", romaji: "ka", link: "https://en.wiktionary.org/wiki/カ" },
  { char: "キ", romaji: "ki", link: "https://en.wiktionary.org/wiki/キ" },
  { char: "ク", romaji: "ku", link: "https://en.wiktionary.org/wiki/ク" },
  { char: "ケ", romaji: "ke", link: "https://en.wiktionary.org/wiki/ケ" },
  { char: "コ", romaji: "ko", link: "https://en.wiktionary.org/wiki/コ" },
  { char: "サ", romaji: "sa", link: "https://en.wiktionary.org/wiki/サ" },
  { char: "シ", romaji: "shi", link: "https://en.wiktionary.org/wiki/シ" },
  { char: "ス", romaji: "su", link: "https://en.wiktionary.org/wiki/ス" },
  { char: "セ", romaji: "se", link: "https://en.wiktionary.org/wiki/セ" },
  { char: "ソ", romaji: "so", link: "https://en.wiktionary.org/wiki/ソ" },
  { char: "タ", romaji: "ta", link: "https://en.wiktionary.org/wiki/タ" },
  { char: "チ", romaji: "chi", link: "https://en.wiktionary.org/wiki/チ" },
  { char: "ツ", romaji: "tsu", link: "https://en.wiktionary.org/wiki/ツ" },
  { char: "テ", romaji: "te", link: "https://en.wiktionary.org/wiki/テ" },
  { char: "ト", romaji: "to", link: "https://en.wiktionary.org/wiki/ト" },
  { char: "ナ", romaji: "na", link: "https://en.wiktionary.org/wiki/ナ" },
  { char: "ニ", romaji: "ni", link: "https://en.wiktionary.org/wiki/ニ" },
  { char: "ヌ", romaji: "nu", link: "https://en.wiktionary.org/wiki/ヌ" },
  { char: "ネ", romaji: "ne", link: "https://en.wiktionary.org/wiki/ネ" },
  { char: "ノ", romaji: "no", link: "https://en.wiktionary.org/wiki/ノ" },
  { char: "ハ", romaji: "ha", link: "https://en.wiktionary.org/wiki/ハ" },
  { char: "ヒ", romaji: "hi", link: "https://en.wiktionary.org/wiki/ヒ" },
  { char: "フ", romaji: "fu", link: "https://en.wiktionary.org/wiki/フ" },
  { char: "ヘ", romaji: "fe", link: "https://en.wiktionary.org/wiki/ヘ" },
  { char: "ホ", romaji: "fo", link: "https://en.wiktionary.org/wiki/ホ" },
  { char: "マ", romaji: "ma", link: "https://en.wiktionary.org/wiki/マ" },
  { char: "ミ", romaji: "mi", link: "https://en.wiktionary.org/wiki/ミ" },
  { char: "ム", romaji: "mu", link: "https://en.wiktionary.org/wiki/ム" },
  { char: "メ", romaji: "me", link: "https://en.wiktionary.org/wiki/メ" },
  { char: "モ", romaji: "mo", link: "https://en.wiktionary.org/wiki/モ" },
  { char: "ラ", romaji: "ra", link: "https://en.wiktionary.org/wiki/ラ" },
  { char: "リ", romaji: "ri", link: "https://en.wiktionary.org/wiki/リ" },
  { char: "ル", romaji: "ru", link: "https://en.wiktionary.org/wiki/ル" },
  { char: "レ", romaji: "re", link: "https://en.wiktionary.org/wiki/レ" },
  { char: "ロ", romaji: "ro", link: "https://en.wiktionary.org/wiki/ロ" },
  { char: "ヤ", romaji: "ya", link: "https://en.wiktionary.org/wiki/ヤ" },
  { char: "ユ", romaji: "yu", link: "https://en.wiktionary.org/wiki/ユ" },
  { char: "ヨ", romaji: "yo", link: "https://en.wiktionary.org/wiki/ヨ" },
  { char: "ワ", romaji: "wa", link: "https://en.wiktionary.org/wiki/ワ" },
  { char: "ン", romaji: "n", link: "https://en.wiktionary.org/wiki/ン" },
];

const HIRAGANA_DAKUTEN = [
  { char: "が", romaji: "ga", link: "https://en.wiktionary.org/wiki/が" },
  { char: "ぎ", romaji: "gi", link: "https://en.wiktionary.org/wiki/ぎ" },
  { char: "ぐ", romaji: "gu", link: "https://en.wiktionary.org/wiki/ぐ" },
  { char: "げ", romaji: "ge", link: "https://en.wiktionary.org/wiki/げ" },
  { char: "ご", romaji: "go", link: "https://en.wiktionary.org/wiki/ご" },
  { char: "ざ", romaji: "za", link: "https://en.wiktionary.org/wiki/ざ" },
  { char: "じ", romaji: "ji", link: "https://en.wiktionary.org/wiki/じ" },
  { char: "ず", romaji: "zu", link: "https://en.wiktionary.org/wiki/ず" },
  { char: "ぜ", romaji: "ze", link: "https://en.wiktionary.org/wiki/ぜ" },
  { char: "ぞ", romaji: "zo", link: "https://en.wiktionary.org/wiki/ぞ" },
  { char: "だ", romaji: "da", link: "https://en.wiktionary.org/wiki/だ" },
  { char: "ぢ", romaji: "ji", link: "https://en.wiktionary.org/wiki/ぢ" },
  { char: "づ", romaji: "zu", link: "https://en.wiktionary.org/wiki/づ" },
  { char: "で", romaji: "de", link: "https://en.wiktionary.org/wiki/で" },
  { char: "ど", romaji: "do", link: "https://en.wiktionary.org/wiki/ど" },
  { char: "ば", romaji: "ba", link: "https://en.wiktionary.org/wiki/ば" },
  { char: "び", romaji: "bi", link: "https://en.wiktionary.org/wiki/び" },
  { char: "ぶ", romaji: "bu", link: "https://en.wiktionary.org/wiki/ぶ" },
  { char: "べ", romaji: "be", link: "https://en.wiktionary.org/wiki/べ" },
  { char: "ぼ", romaji: "bo", link: "https://en.wiktionary.org/wiki/ぼ" },
];

const HIRAGANA_HANDADAKUTEN = [
  { char: "ぱ", romaji: "pa", link: "https://en.wiktionary.org/wiki/ぱ" },
  { char: "ぴ", romaji: "pi", link: "https://en.wiktionary.org/wiki/ぴ" },
  { char: "ぷ", romaji: "pu", link: "https://en.wiktionary.org/wiki/ぷ" },
  { char: "ぺ", romaji: "pe", link: "https://en.wiktionary.org/wiki/ぺ" },
  { char: "ぽ", romaji: "po", link: "https://en.wiktionary.org/wiki/ぽ" },
];

const KATAKANA_DAKUTEN = [
  { char: "ガ", romaji: "ga", link: "https://en.wiktionary.org/wiki/ガ" },
  { char: "ギ", romaji: "gi", link: "https://en.wiktionary.org/wiki/ギ" },
  { char: "グ", romaji: "gu", link: "https://en.wiktionary.org/wiki/グ" },
  { char: "ゲ", romaji: "ge", link: "https://en.wiktionary.org/wiki/ゲ" },
  { char: "ゴ", romaji: "go", link: "https://en.wiktionary.org/wiki/ゴ" },
  { char: "ザ", romaji: "za", link: "https://en.wiktionary.org/wiki/ザ" },
  { char: "ジ", romaji: "ji", link: "https://en.wiktionary.org/wiki/ジ" },
  { char: "ズ", romaji: "zu", link: "https://en.wiktionary.org/wiki/ズ" },
  { char: "ゼ", romaji: "ze", link: "https://en.wiktionary.org/wiki/ゼ" },
  { char: "ゾ", romaji: "zo", link: "https://en.wiktionary.org/wiki/ゾ" },
  { char: "ダ", romaji: "da", link: "https://en.wiktionary.org/wiki/ダ" },
  { char: "ヂ", romaji: "ji", link: "https://en.wiktionary.org/wiki/ヂ" },
  { char: "ヅ", romaji: "zu", link: "https://en.wiktionary.org/wiki/ヅ" },
  { char: "デ", romaji: "de", link: "https://en.wiktionary.org/wiki/デ" },
  { char: "ド", romaji: "do", link: "https://en.wiktionary.org/wiki/ド" },
  { char: "バ", romaji: "ba", link: "https://en.wiktionary.org/wiki/バ" },
  { char: "ビ", romaji: "bi", link: "https://en.wiktionary.org/wiki/ビ" },
  { char: "ブ", romaji: "bu", link: "https://en.wiktionary.org/wiki/ブ" },
  { char: "ベ", romaji: "be", link: "https://en.wiktionary.org/wiki/ベ" },
  { char: "ボ", romaji: "bo", link: "https://en.wiktionary.org/wiki/ボ" },
];

const KATAKANA_HANDADAKUTEN = [
  { char: "パ", romaji: "pa", link: "https://en.wiktionary.org/wiki/パ" },
  { char: "ピ", romaji: "pi", link: "https://en.wiktionary.org/wiki/ピ" },
  { char: "プ", romaji: "pu", link: "https://en.wiktionary.org/wiki/プ" },
  { char: "ペ", romaji: "pe", link: "https://en.wiktionary.org/wiki/ペ" },
  { char: "ポ", romaji: "po", link: "https://en.wiktionary.org/wiki/ポ" },
];

// ========================
// BOOLEAN 
// ========================

let activeKana = [];

if (USE_HIRAGANA_BASE) activeKana = activeKana.concat(HIRAGANA_BASE);
if (USE_KATAKANA_BASE) activeKana = activeKana.concat(KATAKANA_BASE);
if (USE_DAKUTEN) activeKana = activeKana.concat(DAKUTEN);
if (USE_HANDADAKUTEN) activeKana = activeKana.concat(HANDADAKUTEN);

// ========================
// WIDGET GENERATION
// ========================

let widget = new ListWidget();
widget.backgroundColor = new Color("#ffffff");
widget.setPadding(0, 0, 0, 0);

if (activeKana.length === 0) {
  // Nessun kana attivo: mostra fallback
  let fallbackText = widget.addText("⬤");
  fallbackText.font = Font.systemFont(16);
  fallbackText.textColor = Color.red();
  fallbackText.centerAlignText();

  widget.addSpacer(10);

  let labelText = widget.addText("KanaWidget");
  labelText.font = Font.systemFont(6);
  labelText.textColor = Color.gray();
  labelText.centerAlignText();

  Script.setWidget(widget);
  Script.complete();
  return;
}

// Se ci sono kana attivi, continua normalmente
function getRandomKana() {
  return activeKana[Math.floor(Math.random() * activeKana.length)];
}

let kana = getRandomKana();

// Kana grande
let kanaText = widget.addText(kana.char);
kanaText.font = Font.systemFont(36);
kanaText.textColor = Color.gray();
kanaText.centerAlignText();

widget.addSpacer(0);

// Romaji piccolo
let romajiText = widget.addText(kana.romaji);
romajiText.font = Font.systemFont(14);
romajiText.textColor = Color.gray();
romajiText.centerAlignText();

// Link
if (kana.link) {
  widget.url = encodeURI(kana.link);
}

//  (1 min)
widget.refreshAfterDate = new Date(Date.now() + 1000 * 60 * 1);

Script.setWidget(widget);
Script.complete();
