// 伪代码示意
const flagMap = {
  "香港|HK|Hong Kong": "🇭🇰",
  "台湾|TW|Taiwan": "🇹🇼",
  "日本|JP|Japan": "🇯🇵",
  "新加坡|SG|Singapore": "🇸🇬",
  "美国|US|United States": "🇺🇸",
  // ...
};

function getFlag(name) {
  for (const key in flagMap) {
    if (new RegExp(key, "i").test(name)) return flagMap[key];
  }
  return "";
}

$done({ nodes: $nodes.map(n => {
  const flag = getFlag(n.name);
  if (flag && !n.name.includes(flag)) n.name = `${flag} ${n.name}`;
  return n;
})});
